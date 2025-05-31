import React from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';

export default function ViewModeSwitcher() {
  const { viewMode, setViewMode, isDarkMode } = useFormBuilder();

  return (
    <div className="flex space-x-2">
      <button
        className={`px-3 py-1 rounded-md ${
          viewMode === 'desktop' 
            ? 'bg-indigo-600 text-white' 
            : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}
        onClick={() => setViewMode('desktop')}
      >
        <i className="fas fa-desktop mr-1"></i> Desktop
      </button>
      <button
        className={`px-3 py-1 rounded-md ${
          viewMode === 'tablet' 
            ? 'bg-indigo-600 text-white' 
            : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}
        onClick={() => setViewMode('tablet')}
      >
        <i className="fas fa-tablet-alt mr-1"></i> Tablet
      </button>
      <button
        className={`px-3 py-1 rounded-md ${
          viewMode === 'mobile' 
            ? 'bg-indigo-600 text-white' 
            : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
        }`}
        onClick={() => setViewMode('mobile')}
      >
        <i className="fas fa-mobile-alt mr-1"></i> Mobile
      </button>
    </div>
  );
}