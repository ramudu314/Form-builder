import React from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';
import { templates } from '../../utils/templateData';

export default function TemplatesModal({ onClose }) {
  const { isDarkMode, loadTemplate } = useFormBuilder();

  const handleUseTemplate = (templateId) => {
    loadTemplate(templateId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-[600px] max-h-[80vh] overflow-y-auto`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Form Templates</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="grid gap-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg p-4 transition-colors duration-200`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-24 h-24 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-md flex items-center justify-center`}>
                  <i className={`fas ${template.icon} text-3xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg mb-1">{template.name}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                    {template.description}
                  </p>
                  <button
                    onClick={() => handleUseTemplate(template.id)}
                    className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700"
                  >
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}