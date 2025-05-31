import React from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';
import DragHandle from '../UI/DragHandle';

export default function FormComponent({ component, isSelected, onSelect }) {
  const { isDarkMode, deleteComponent } = useFormBuilder();

  const renderComponentPreview = () => {
    switch (component.type) {
      case 'text':
        return (
          <input
            type="text"
            placeholder={component.placeholder}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required={component.required}
          />
        );
      case 'textarea':
        return (
          <textarea
            placeholder={component.placeholder}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required={component.required}
            rows={4}
          />
        );
      case 'dropdown':
        return (
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required={component.required}
          >
            <option value="" disabled selected>Select an option</option>
            {component.options && component.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required={component.required}
            />
            <span className="ml-2">{component.placeholder}</span>
          </div>
        );
      case 'radio':
        return (
          <div className="space-y-2">
            {component.options && component.options.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  name={component.id}
                  className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  required={component.required}
                />
                <span className="ml-2">{option}</span>
              </div>
            ))}
          </div>
        );
      case 'date':
        return (
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required={component.required}
          />
        );
      case 'number':
        return (
          <input
            type="number"
            placeholder={component.placeholder}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required={component.required}
          />
        );
      case 'email':
        return (
          <input
            type="email"
            placeholder={component.placeholder}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required={component.required}
          />
        );
      case 'phone':
        return (
          <input
            type="tel"
            placeholder={component.placeholder}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required={component.required}
          />
        );
      case 'file':
        return (
          <input
            type="file"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required={component.required}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`p-4 border rounded-md ${
        isSelected 
          ? 'border-indigo-500 ring-2 ring-indigo-200' 
          : isDarkMode ? 'border-gray-700' : 'border-gray-200'
      } ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <DragHandle />
          <label className="font-medium">
            {component.label}
            {component.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        </div>
        <div className="flex space-x-1">
          <button
            className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} cursor-pointer`}
            onClick={(e) => {
              e.stopPropagation();
              // Clone component logic would go here
            }}
          >
            <i className="fas fa-copy text-gray-500"></i>
          </button>
          <button
            className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} cursor-pointer`}
            onClick={(e) => {
              e.stopPropagation();
              deleteComponent(component.id);
            }}
          >
            <i className="fas fa-trash text-red-500"></i>
          </button>
        </div>
      </div>
      {component.helpText && (
        <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {component.helpText}
        </p>
      )}
      {renderComponentPreview()}
    </div>
  );
}