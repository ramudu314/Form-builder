import React from 'react';

export default function Toast({ id, message, icon, isDarkMode }) {
  return (
    <div
      id={id}
      className={`fixed bottom-4 right-4 px-4 py-2 rounded-md shadow-lg hidden items-center z-50 ${
        isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <i className={`fas ${icon} mr-2`}></i>
      <span>{message}</span>
    </div>
  );
}