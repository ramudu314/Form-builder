import React from 'react';
import TopNav from '../Navigation/TopNav';
import ComponentPalette from './ComponentPalette';
import FormCanvas from './FormCanvas';
import PropertiesPanel from './PropertiesPanel';
import { useFormBuilder } from '../../hooks/useFormBuilder';

export default function FormBuilder() {
  const { isPropertyPanelOpen, isDarkMode } = useFormBuilder();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <TopNav />
      <div className="pt-16 flex h-[calc(100vh-4rem)]">
        <ComponentPalette />
        <FormCanvas />
        {isPropertyPanelOpen && <PropertiesPanel />}
      </div>
    </div>
  );
}