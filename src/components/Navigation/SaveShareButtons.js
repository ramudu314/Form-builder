import React, { useState } from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';
import SaveFormModal from '../Modals/SaveFormModal';
import ShareFormModal from '../Modals/ShareFormModal';
import TemplatesModal from '../Modals/TemplatesModal';
import Toast from '../UI/Toast';

export default function SaveShareButtons() {
  const { isDarkMode, formName, generateShareableLink } = useFormBuilder();
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setShowSaveModal(true)}
        className="px-3 py-1 bg-indigo-600 text-white rounded-md"
      >
        <i className="fas fa-save mr-1"></i> Save
      </button>

      <button
        onClick={() => setShowTemplatesModal(true)}
        className="px-3 py-1 bg-indigo-600 text-white rounded-md"
      >
        <i className="fas fa-folder-open mr-1"></i> Templates
      </button>

      <button
        onClick={() => setShowShareModal(true)}
        className="px-3 py-1 bg-indigo-600 text-white rounded-md"
      >
        <i className="fas fa-share-alt mr-1"></i> Share
      </button>

      {showSaveModal && (
        <SaveFormModal 
          formName={formName} 
          onClose={() => setShowSaveModal(false)} 
        />
      )}

      {showShareModal && (
        <ShareFormModal 
          formName={formName}
          shareLink={generateShareableLink()}
          onClose={() => setShowShareModal(false)}
        />
      )}

      {showTemplatesModal && (
        <TemplatesModal onClose={() => setShowTemplatesModal(false)} />
      )}

      <Toast 
        id="saveToast" 
        message="Form saved successfully!" 
        icon="fa-check-circle" 
        isDarkMode={isDarkMode} 
      />
      <Toast 
        id="shareToast" 
        message="Share link copied to clipboard!" 
        icon="fa-check-circle" 
        isDarkMode={isDarkMode} 
      />
    </div>
  );
}