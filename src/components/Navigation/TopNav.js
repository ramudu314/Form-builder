import React from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';
import ViewModeSwitcher from './ViewModeSwitcher';
import SaveShareButtons from './SaveShareButtons';
import DarkModeToggle from '../UI/DarkModeToggle';

export default function TopNav() {
  const { isDarkMode, formName, setFormName } = useFormBuilder();

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-indigo-600">FormBuilder</h1>
            </div>
            <div className="ml-6">
              <input
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className={`px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                placeholder="Form Name"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ViewModeSwitcher />
            <SaveShareButtons />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}