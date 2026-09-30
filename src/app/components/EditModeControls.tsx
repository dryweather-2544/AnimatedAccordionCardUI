import { useEditableContent } from '../hooks/useEditableContent';
import { Edit3, Download, RotateCcw, Info } from 'lucide-react';
import { useState } from 'react';

export function EditModeControls() {
  const { editMode, toggleEditMode, exportChanges, resetAllEdits } = useEditableContent();
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleEditMode}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            editMode
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
          title="Toggle edit mode"
        >
          <Edit3 className="size-4" />
          <span>{editMode ? 'Exit Edit Mode' : 'Edit Mode'}</span>
        </button>

        {editMode && (
          <>
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/30"
              title="Show help"
            >
              <Info className="size-4" />
              <span>Help</span>
            </button>

            <button
              onClick={exportChanges}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-500 transition-all shadow-lg shadow-green-600/30"
              title="Export changes to console and clipboard"
            >
              <Download className="size-4" />
              <span>Export Changes</span>
            </button>

            <button
              onClick={() => {
                if (confirm('Are you sure you want to reset all edits? This cannot be undone.')) {
                  resetAllEdits();
                }
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-red-600 text-white hover:bg-red-500 transition-all shadow-lg shadow-red-600/30"
              title="Reset all edits to default"
            >
              <RotateCcw className="size-4" />
              <span>Reset All</span>
            </button>
          </>
        )}
      </div>

      {showHelp && editMode && (
        <div className="fixed top-20 right-4 z-50 w-96 bg-slate-900 border-2 border-purple-500/50 rounded-lg shadow-2xl p-5">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-purple-400">How to Edit & Save</h3>
            <button
              onClick={() => setShowHelp(false)}
              className="text-slate-400 hover:text-white text-xl leading-none"
            >
              ×
            </button>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">1.</span>
              <p><strong>Hover over editable text</strong> - a blue pencil icon will appear</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">2.</span>
              <p><strong>Click the pencil icon</strong> to start editing</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">3.</span>
              <p><strong>Make your changes</strong> in the text field</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400 font-bold mt-0.5">4.</span>
              <p><strong>Click "Save"</strong> - changes are automatically saved to browser storage!</p>
            </div>
            <div className="border-t border-slate-700 pt-3 mt-4">
              <p className="text-xs text-slate-400">
                💡 <strong>Your edits persist automatically!</strong> They'll remain even after refreshing the page. Use "Export Changes" to backup your edits as JSON.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}