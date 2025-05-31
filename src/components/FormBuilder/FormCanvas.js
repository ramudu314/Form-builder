import React from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';
import FormComponent from './FormComponent';

export default function FormCanvas() {
  const {
    isDarkMode,
    viewMode,
    formComponents,
    selectedComponent,
    handleDragOver,
    handleDrop,
    handleSelectComponent,
  } = useFormBuilder();

  const getFormCanvasWidth = () => {
    switch (viewMode) {
      case 'desktop': return 'w-full';
      case 'tablet': return 'w-[768px]';
      case 'mobile': return 'w-[375px]';
      default: return 'w-full';
    }
  };

  return (
    <div className={`flex-1 overflow-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6`}>
      <div className="flex justify-center">
        <div
          className={`${getFormCanvasWidth()} min-h-[600px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 transition-all duration-300`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {formComponents.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full border-2 border-dashed rounded-lg p-6">
              <i className="fas fa-plus-circle text-indigo-500 text-4xl mb-4"></i>
              <p className="text-lg text-center">Drag and drop components here to build your form</p>
            </div>
          ) : (
            <div className="space-y-6">
              {formComponents.map((component) => (
                <FormComponent
                  key={component.id}
                  component={component}
                  isSelected={selectedComponent === component.id}
                  onSelect={() => handleSelectComponent(component.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}