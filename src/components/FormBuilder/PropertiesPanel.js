import React from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';
import ComponentProperties from './ComponentProperties';

export default function PropertiesPanel() {
  const { 
    isPropertyPanelOpen, 
    setIsPropertyPanelOpen, 
    isDarkMode, 
    selectedComponent,
    formComponents 
  } = useFormBuilder();

  const selectedCompData = formComponents.find(c => c.id === selectedComponent);

  if (!isPropertyPanelOpen) return null;

  return (
    <div className={`w-80 border-l ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} overflow-y-auto`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Properties</h2>
          <button
            className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} cursor-pointer`}
            onClick={() => setIsPropertyPanelOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        {selectedComponent ? (
          <ComponentProperties component={selectedCompData} />
        ) : (
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg p-6">
            <i className="fas fa-edit text-indigo-500 text-4xl mb-4"></i>
            <p className="text-center">Select a component to edit its properties</p>
          </div>
        )}
      </div>
    </div>
  );
}