import React from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';

export default function DragHandle() {
  const { isDarkMode } = useFormBuilder();

  return (
    <i className={`fas fa-grip-vertical ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mr-2 cursor-move`}></i>
  );
}