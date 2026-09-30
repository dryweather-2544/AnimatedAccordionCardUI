import { Edit3, Save, Download } from 'lucide-react';
import { useEditMode } from './EditModeContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function EditModeToggle() {
  const { isEditMode, setIsEditMode, contentData } = useEditMode();
  const [showExport, setShowExport] = useState(false);

  const handleExport = () => {
    setShowExport(true);
  };

  const handleCopy = () => {
    const dataString = JSON.stringify(contentData, null, 2);
    navigator.clipboard.writeText(dataString).catch((err) => {
      // Fallback for when clipboard API is blocked
      console.warn('Clipboard API blocked, using fallback', err);
      const textArea = document.createElement('textarea');
      textArea.value = dataString;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (e) {
        console.error('Fallback copy failed', e);
      }
      document.body.removeChild(textArea);
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[200] flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsEditMode(!isEditMode)}
          className={`px-4 py-2 rounded-full font-bold text-white shadow-lg transition-all flex items-center gap-2 ${
            isEditMode 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isEditMode ? (
            <>
              <Save className="size-4" />
              Exit Edit Mode
            </>
          ) : (
            <>
              <Edit3 className="size-4" />
              Edit Mode
            </>
          )}
        </motion.button>

        {isEditMode && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExport}
            className="px-4 py-2 rounded-full font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-lg transition-all flex items-center gap-2"
          >
            <Download className="size-4" />
            Export Changes
          </motion.button>
        )}
      </div>

      {/* Export Modal */}
      <AnimatePresence>
        {showExport && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50"
            onClick={() => setShowExport(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-4xl max-h-[80vh] overflow-auto shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Updated Content Data</h2>
              <p className="text-gray-600 mb-4">
                Copy this JSON and paste it into your App.tsx to save your changes:
              </p>
              
              <div className="relative">
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{JSON.stringify(contentData, null, 2)}</code>
                </pre>
                <button
                  onClick={handleCopy}
                  className="absolute top-2 right-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Copy to Clipboard
                </button>
              </div>

              <button
                onClick={() => setShowExport(false)}
                className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}