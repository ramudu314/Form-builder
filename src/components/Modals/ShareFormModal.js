import React, { useState } from 'react';
import { useFormBuilder } from '../../hooks/useFormBuilder';

export default function ShareFormModal({ formName, shareLink, onClose }) {
  const { isDarkMode } = useFormBuilder();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-[600px]`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Share Form</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="space-y-6">
          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <h4 className="font-medium mb-2">Form Preview</h4>
            <div className="text-sm">{formName}</div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Share Link</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={shareLink}
                readOnly
                className={`flex-1 px-3 py-2 border rounded-md ${
                  isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                }`}
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                <i className="fas fa-copy mr-1"></i> {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Share via</label>
            <div className="flex space-x-3">
              <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                <i className="fas fa-envelope"></i>
              </button>
              <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                <i className="fab fa-whatsapp"></i>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Embed Code</label>
            <textarea
              readOnly
              value={`<iframe src="${shareLink}" width="100%" height="500" frameborder="0"></iframe>`}
              className={`w-full h-24 px-3 py-2 border rounded-md ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
              }`}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}