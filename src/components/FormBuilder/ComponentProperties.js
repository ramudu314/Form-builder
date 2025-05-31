import React from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';

export default function ComponentProperties({ component }) {
  const { formComponents, setFormComponents, selectedComponent } = useFormBuilder();
  const { isDarkMode } = useFormBuilder(); 

  const updateComponentProperty = (property, value) => {
    if (selectedComponent) {
      setFormComponents(formComponents.map(comp =>
        comp.id === selectedComponent ? { ...comp, [property]: value } : comp
      ));
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Field Label</label>
        <input
          type="text"
          value={component.label || 'Field Label'}
          onChange={(e) => updateComponentProperty('label', e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Placeholder</label>
        <input
          type="text"
          value={component.placeholder || ''}
          onChange={(e) => updateComponentProperty('placeholder', e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Help Text</label>
        <input
          type="text"
          value={component.helpText || ''}
          onChange={(e) => updateComponentProperty('helpText', e.target.value)}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="required"
          checked={component.required || false}
          onChange={(e) => updateComponentProperty('required', e.target.checked)}
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label htmlFor="required" className="ml-2 block text-sm">Required field</label>
      </div>

      {(component.type === 'text' || component.type === 'textarea') && (
        <>
          <div>
            <label className="block text-sm font-medium mb-1">Minimum Length</label>
            <input
              type="number"
              value={component.minLength || 0}
              onChange={(e) => updateComponentProperty('minLength', parseInt(e.target.value) || 0)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Maximum Length</label>
            <input
              type="number"
              value={component.maxLength || 100}
              onChange={(e) => updateComponentProperty('maxLength', parseInt(e.target.value) || 100)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            />
          </div>
        </>
      )}

      {(component.type === 'email' || component.type === 'phone') && (
        <div>
          <label className="block text-sm font-medium mb-1">Validation Pattern</label>
          <input
            type="text"
            value={component.pattern || ''}
            onChange={(e) => updateComponentProperty('pattern', e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
            placeholder={
              component.type === 'email' 
                ? "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" 
                : "\\d{3}-\\d{3}-\\d{4}"
            }
          />
        </div>
      )}

      {(component.type === 'dropdown' || component.type === 'radio') && (
        <div>
          <label className="block text-sm font-medium mb-1">Options</label>
          <div className="space-y-2">
            {(component.options || []).map((option, index) => (
              <div key={index} className="flex">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...(component.options || [])];
                    newOptions[index] = e.target.value;
                    updateComponentProperty('options', newOptions);
                  }}
                  className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                />
                <button
                  className="ml-2 p-2 text-red-500 hover:bg-red-100 rounded-md"
                  onClick={() => {
                    const newOptions = [...(component.options || [])];
                    newOptions.splice(index, 1);
                    updateComponentProperty('options', newOptions);
                  }}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
            <button
              className="w-full px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              onClick={() => {
                updateComponentProperty('options', [
                  ...(component.options || []), 
                  `Option ${(component.options?.length || 0) + 1}`
                ]);
              }}
            >
              <i className="fas fa-plus mr-1"></i> Add Option
            </button>
          </div>
        </div>
      )}
    </div>
  );
}