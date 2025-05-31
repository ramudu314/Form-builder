
import React from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';
import useEcharts from '../../hooks/useEcharts';

export default function ComponentPalette() {
  const { isDarkMode, handleDragStart, statsChartRef, componentPalette } = useFormBuilder();
  useEcharts(statsChartRef);

  return (
    <div className={`w-64 border-r ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} overflow-y-auto`}>
      <div className="p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search components..."
            className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-400"></i>
          </div>
        </div>
        <h2 className="text-lg font-medium mb-3">Form Components</h2>
        <div className="grid grid-cols-2 gap-2">
          {componentPalette.map((component) => (
            <div
              key={component.id}
              draggable
              onDragStart={(e) => handleDragStart(e, component.id)}
              className={`flex flex-col items-center justify-center p-3 border rounded-md ${isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} cursor-move`}
            >
              <i className={`fas ${component.icon} text-indigo-500 text-xl mb-1`}></i>
              <span className="text-xs text-center">{component.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-medium mb-3">Form Statistics</h2>
          <div
            ref={statsChartRef}
            className="w-full h-48 border rounded-md"
          ></div>
        </div>
      </div>
    </div>
  );
}