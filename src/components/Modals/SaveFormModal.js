import React, { useState } from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';

export default function SaveFormModal({ formName, onClose }) {
  const { isDarkMode, setFormName, formComponents } = useFormBuilder();
  const [name, setName] = useState(formName);
  const [saveAsTemplate, setSaveAsTemplate] = useState(false);

  const handleSave = () => {
    setFormName(name.trim());
    const formData = {
      name: name.trim(),
      components: formComponents,
      isTemplate: saveAsTemplate,
      lastModified: new Date().toISOString()
    };
    localStorage.setItem(`form_${Date.now()}`, JSON.stringify(formData));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-[400px]`}>
        <h3 className="text-xl font-semibold mb-4">Save Form</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Form Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
              }`}
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveAsTemplate"
              checked={saveAsTemplate}
              onChange={(e) => setSaveAsTemplate(e.target.checked)}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="saveAsTemplate" className="ml-2 text-sm">Save as template</label>
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-md ${
              isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}