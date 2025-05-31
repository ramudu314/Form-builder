import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import { componentPalette, templates } from '../utils/templateData';

const FormBuilderContext = createContext();

export function FormProvider({ children }) {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [formComponents, setFormComponents] = useState([]);
  const [viewMode, setViewMode] = useState('desktop');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formName, setFormName] = useState('Untitled Form');
  const [isPropertyPanelOpen, setIsPropertyPanelOpen] = useState(true);
  const statsChartRef = useRef(null);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleDragStart = (e, componentType) => {
    e.dataTransfer.setData('componentType', componentType);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const componentType = e.dataTransfer.getData('componentType');
    const newComponent = {
      id: `${componentType}-${Date.now()}`,
      type: componentType,
      label: `New ${componentType} field`,
      placeholder: `Enter ${componentType} here`,
      required: false,
      helpText: '',
      ...(componentType === 'dropdown' || componentType === 'radio' ? { options: ['Option 1', 'Option 2', 'Option 3'] } : {}),
    };
    setFormComponents([...formComponents, newComponent]);
    setSelectedComponent(newComponent.id);
  };

  const handleSelectComponent = (id) => {
    setSelectedComponent(id);
  };

  const deleteComponent = (id) => {
    setFormComponents(formComponents.filter(comp => comp.id !== id));
    if (selectedComponent === id) {
      setSelectedComponent(null);
    }
  };

  const generateShareableLink = () => {
    const formId = `form-${Date.now()}`;
    localStorage.setItem(formId, JSON.stringify({
      name: formName,
      components: formComponents,
    }));
    return `${window.location.origin}/form/${formId}`;
  };

  const loadTemplate = (templateId) => {
    setFormComponents([]);
    
    if (templateId === 'contact') {
      setFormComponents([
        {
          id: 'text-1',
          type: 'text',
          label: 'Name',
          placeholder: 'Enter your name',
          required: true,
          helpText: 'Please enter your full name',
        },
        {
          id: 'email-1',
          type: 'email',
          label: 'Email',
          placeholder: 'Enter your email',
          required: true,
          helpText: 'We will never share your email',
        },
        {
          id: 'textarea-1',
          type: 'textarea',
          label: 'Message',
          placeholder: 'Enter your message',
          required: true,
          helpText: '',
        },
      ]);
      setFormName('Contact Us Form');
    } else if (templateId === 'feedback') {
      setFormComponents([
        {
          id: 'text-1',
          type: 'text',
          label: 'Name',
          placeholder: 'Your name',
          required: false,
          helpText: '',
        },
        {
          id: 'textarea-1',
          type: 'textarea',
          label: 'Feedback',
          placeholder: 'Your feedback here...',
          required: true,
          helpText: 'Please be as detailed as possible',
        },
      ]);
      setFormName('Feedback Form');
    }
  };

  useEffect(() => {
    if (statsChartRef.current) {
      const chart = echarts.init(statsChartRef.current);
      const option = {
        animation: false,
        title: { text: 'Form Submissions', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{ data: [12, 19, 23, 18, 25, 10, 15], type: 'bar', color: '#4F46E5' }]
      };
      chart.setOption(option);
      
      const handleResize = () => chart.resize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        chart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <FormBuilderContext.Provider value={{
      selectedComponent,
      setSelectedComponent,
      formComponents,
      setFormComponents,
      viewMode,
      setViewMode,
      isDarkMode,
      toggleDarkMode,
      formName,
      setFormName,
      isPropertyPanelOpen,
      setIsPropertyPanelOpen,
      statsChartRef,
      handleDragStart,
      handleDragOver,
      handleDrop,
      handleSelectComponent,
      deleteComponent,
      loadTemplate,
      generateShareableLink,
      componentPalette,
      templates,
    }}>
      {children}
    </FormBuilderContext.Provider>
  );
}

export function useFormBuilder() {
  const context = useContext(FormBuilderContext);
  if (!context) {
    throw new Error('useFormBuilder must be used within a FormProvider');
  }
  return context;
}