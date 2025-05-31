import React from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useFormBuilder();

  return (
    <button
      className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} cursor-pointer`}
      onClick={toggleDarkMode}
    >
      <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  );
}