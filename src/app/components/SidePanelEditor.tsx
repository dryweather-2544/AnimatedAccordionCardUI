import { useState } from 'react';
import { X, Save, Plus, Trash2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface ContentBlock {
  type: 'oneliner' | 'ifskipped' | 'structure' | 'psychology' | 'paragraph' | 'heading' | 'list' | 'constraint';
  content: string | string[];
  label?: string;
}

interface SidePanelEditorProps {
  isOpen: boolean;
  onClose: () => void;
  itemLabel: string;
  blocks: ContentBlock[];
  onSave: (updatedBlocks: ContentBlock[]) => void;
}

export function SidePanelEditor({ isOpen, onClose, itemLabel, blocks, onSave }: SidePanelEditorProps) {
  const [editedBlocks, setEditedBlocks] = useState<ContentBlock[]>(blocks);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onSave(editedBlocks);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addBlock = (type: ContentBlock['type']) => {
    const newBlock: ContentBlock = {
      type,
      content: type === 'ifskipped' || type === 'list' ? [] : '',
      label: type === 'heading' ? 'New Heading' : undefined,
    };
    setEditedBlocks([...editedBlocks, newBlock]);
  };

  const updateBlock = (index: number, updates: Partial<ContentBlock>) => {
    const updated = [...editedBlocks];
    updated[index] = { ...updated[index], ...updates };
    setEditedBlocks(updated);
  };

  const deleteBlock = (index: number) => {
    setEditedBlocks(editedBlocks.filter((_, i) => i !== index));
  };

  const renderBlockEditor = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'oneliner':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-green-400">✓ OneLiner (Key Takeaway)</label>
              <button onClick={() => deleteBlock(index)} className="p-1 hover:bg-gray-700 rounded">
                <Trash2 className="size-4 text-red-400" />
              </button>
            </div>
            <input
              type="text"
              value={block.content as string}
              onChange={(e) => updateBlock(index, { content: e.target.value })}
              className="w-full px-3 py-2 bg-gray-900 border border-green-600 rounded text-white focus:outline-none focus:border-green-400"
              placeholder="Brief, actionable takeaway"
            />
          </div>
        );

      case 'ifskipped':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-red-400">⚠️ If Skipped (Consequences)</label>
              <button onClick={() => deleteBlock(index)} className="p-1 hover:bg-gray-700 rounded">
                <Trash2 className="size-4 text-red-400" />
              </button>
            </div>
            {Array.isArray(block.content) && block.content.map((consequence, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  value={consequence}
                  onChange={(e) => {
                    const newContent = [...(block.content as string[])];
                    newContent[i] = e.target.value;
                    updateBlock(index, { content: newContent });
                  }}
                  className="flex-1 px-3 py-2 bg-gray-900 border border-red-600 rounded text-white focus:outline-none focus:border-red-400"
                  placeholder={`Consequence ${i + 1}`}
                />
                <button
                  onClick={() => {
                    const newContent = (block.content as string[]).filter((_, idx) => idx !== i);
                    updateBlock(index, { content: newContent });
                  }}
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  <X className="size-4 text-red-400" />
                </button>
              </div>
            ))}
            <button
              onClick={() => updateBlock(index, { content: [...(block.content as string[]), ''] })}
              className="text-sm text-red-400 hover:text-red-300 flex items-center gap-1"
            >
              <Plus className="size-4" /> Add consequence
            </button>
          </div>
        );

      case 'structure':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-purple-400">📋 Structure/Framework</label>
              <button onClick={() => deleteBlock(index)} className="p-1 hover:bg-gray-700 rounded">
                <Trash2 className="size-4 text-red-400" />
              </button>
            </div>
            {Array.isArray(block.content) && block.content.map((item, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const newContent = [...(block.content as string[])];
                    newContent[i] = e.target.value;
                    updateBlock(index, { content: newContent });
                  }}
                  className="flex-1 px-3 py-2 bg-gray-900 border border-purple-600 rounded text-white focus:outline-none focus:border-purple-400"
                  placeholder={`Step ${i + 1}`}
                />
                <button
                  onClick={() => {
                    const newContent = (block.content as string[]).filter((_, idx) => idx !== i);
                    updateBlock(index, { content: newContent });
                  }}
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  <X className="size-4 text-red-400" />
                </button>
              </div>
            ))}
            <button
              onClick={() => updateBlock(index, { content: [...(block.content as string[]), ''] })}
              className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              <Plus className="size-4" /> Add step
            </button>
          </div>
        );

      case 'psychology':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-amber-400">🧠 Psychology Insight</label>
              <button onClick={() => deleteBlock(index)} className="p-1 hover:bg-gray-700 rounded">
                <Trash2 className="size-4 text-red-400" />
              </button>
            </div>
            <textarea
              value={block.content as string}
              onChange={(e) => updateBlock(index, { content: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 bg-gray-900 border border-amber-600 rounded text-white focus:outline-none focus:border-amber-400 resize-none"
              placeholder="Key psychological principle or insight"
            />
          </div>
        );

      case 'paragraph':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-300">📝 Paragraph</label>
              <button onClick={() => deleteBlock(index)} className="p-1 hover:bg-gray-700 rounded">
                <Trash2 className="size-4 text-red-400" />
              </button>
            </div>
            <textarea
              value={block.content as string}
              onChange={(e) => updateBlock(index, { content: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-gray-400 resize-none"
              placeholder="Main content paragraph"
            />
          </div>
        );

      case 'heading':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-blue-400">📌 Heading</label>
              <button onClick={() => deleteBlock(index)} className="p-1 hover:bg-gray-700 rounded">
                <Trash2 className="size-4 text-red-400" />
              </button>
            </div>
            <input
              type="text"
              value={block.content as string}
              onChange={(e) => updateBlock(index, { content: e.target.value })}
              className="w-full px-3 py-2 bg-gray-900 border border-blue-600 rounded text-white focus:outline-none focus:border-blue-400 font-bold"
              placeholder="Section heading"
            />
          </div>
        );

      case 'list':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-cyan-400">• Bullet List</label>
              <button onClick={() => deleteBlock(index)} className="p-1 hover:bg-gray-700 rounded">
                <Trash2 className="size-4 text-red-400" />
              </button>
            </div>
            {Array.isArray(block.content) && block.content.map((item, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const newContent = [...(block.content as string[])];
                    newContent[i] = e.target.value;
                    updateBlock(index, { content: newContent });
                  }}
                  className="flex-1 px-3 py-2 bg-gray-900 border border-cyan-600 rounded text-white focus:outline-none focus:border-cyan-400"
                  placeholder={`Item ${i + 1}`}
                />
                <button
                  onClick={() => {
                    const newContent = (block.content as string[]).filter((_, idx) => idx !== i);
                    updateBlock(index, { content: newContent });
                  }}
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  <X className="size-4 text-red-400" />
                </button>
              </div>
            ))}
            <button
              onClick={() => updateBlock(index, { content: [...(block.content as string[]), ''] })}
              className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              <Plus className="size-4" /> Add item
            </button>
          </div>
        );

      case 'constraint':
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-orange-400">🚫 Constraint Block</label>
              <button onClick={() => deleteBlock(index)} className="p-1 hover:bg-gray-700 rounded">
                <Trash2 className="size-4 text-red-400" />
              </button>
            </div>
            <textarea
              value={block.content as string}
              onChange={(e) => updateBlock(index, { content: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 bg-gray-900 border border-orange-600 rounded text-white focus:outline-none focus:border-orange-400 resize-none"
              placeholder="What NOT to do"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 left-0 h-full w-full max-w-3xl z-[300] bg-gray-900 border-r-4 border-blue-500 overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-white">Edit Side Panel Content</h2>
                <p className="text-sm text-gray-400 mt-1">{itemLabel}</p>
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
                  onClick={onClose}
                  className="p-2 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Add Block Buttons */}
            <div className="flex flex-wrap gap-2">
              <button onClick={() => addBlock('oneliner')} className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded">
                + OneLiner
              </button>
              <button onClick={() => addBlock('ifskipped')} className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded">
                + If Skipped
              </button>
              <button onClick={() => addBlock('structure')} className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded">
                + Structure
              </button>
              <button onClick={() => addBlock('psychology')} className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white text-xs rounded">
                + Psychology
              </button>
              <button onClick={() => addBlock('paragraph')} className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded">
                + Paragraph
              </button>
              <button onClick={() => addBlock('heading')} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded">
                + Heading
              </button>
              <button onClick={() => addBlock('list')} className="px-3 py-1 bg-cyan-600 hover:bg-cyan-700 text-white text-xs rounded">
                + List
              </button>
              <button onClick={() => addBlock('constraint')} className="px-3 py-1 bg-orange-600 hover:bg-orange-700 text-white text-xs rounded">
                + Constraint
              </button>
            </div>
          </div>

          {/* Content Blocks */}
          <div className="p-6 space-y-6">
            {editedBlocks.map((block, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                {renderBlockEditor(block, index)}
              </div>
            ))}

            {editedBlocks.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p>No content blocks yet.</p>
                <p className="text-sm mt-2">Use the buttons above to add content.</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}