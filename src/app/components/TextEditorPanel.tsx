import { useState, useEffect } from 'react';
import { X, Save, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TextEditorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  cardTitle: string;
  textContent: {
    title: string;
    description: string;
    mainContent: string;
    nestedItems?: Array<{ label: string; content: string }>;
  };
  onSave: (updated: any) => void;
}

export function TextEditorPanel({ isOpen, onClose, cardTitle, textContent, onSave }: TextEditorPanelProps) {
  const [editedContent, setEditedContent] = useState(textContent);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setEditedContent(textContent);
  }, [textContent]);

  const handleSave = () => {
    onSave(editedContent);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleCopyAll = () => {
    const allText = JSON.stringify(editedContent, null, 2);
    navigator.clipboard.writeText(allText).catch((err) => {
      // Fallback for when clipboard API is blocked
      console.warn('Clipboard API blocked, using fallback', err);
      const textArea = document.createElement('textarea');
      textArea.value = allText;
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 left-0 h-full w-full max-w-2xl z-[200] bg-gray-900 border-r-4 border-blue-500 overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 flex items-center justify-between z-10">
            <div>
              <h2 className="text-xl font-bold text-white">Edit Text</h2>
              <p className="text-sm text-gray-400 mt-1">{cardTitle}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
              >
                {saved ? <Check className="size-4" /> : <Save className="size-4" />}
                {saved ? 'Saved!' : 'Save'}
              </button>
              <button
                onClick={handleCopyAll}
                className="p-2 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                title="Copy all as JSON"
              >
                <Copy className="size-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Card Title</label>
              <input
                type="text"
                value={editedContent.title}
                onChange={(e) => setEditedContent({ ...editedContent, title: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Card Description</label>
              <input
                type="text"
                value={editedContent.description}
                onChange={(e) => setEditedContent({ ...editedContent, description: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Main Content */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Main Content</label>
              <textarea
                value={editedContent.mainContent}
                onChange={(e) => setEditedContent({ ...editedContent, mainContent: e.target.value })}
                rows={10}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 font-mono text-sm resize-none"
              />
            </div>

            {/* Nested Items */}
            {editedContent.nestedItems && editedContent.nestedItems.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Nested Items</h3>
                {editedContent.nestedItems.map((item, index) => (
                  <div key={index} className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <div className="mb-3">
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Item {index + 1} Label
                      </label>
                      <input
                        type="text"
                        value={item.label}
                        onChange={(e) => {
                          const newItems = [...editedContent.nestedItems!];
                          newItems[index] = { ...newItems[index], label: e.target.value };
                          setEditedContent({ ...editedContent, nestedItems: newItems });
                        }}
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Item {index + 1} Content
                      </label>
                      <textarea
                        value={item.content}
                        onChange={(e) => {
                          const newItems = [...editedContent.nestedItems!];
                          newItems[index] = { ...newItems[index], content: e.target.value };
                          setEditedContent({ ...editedContent, nestedItems: newItems });
                        }}
                        rows={6}
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500 font-mono text-xs resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}