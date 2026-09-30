import { useState } from 'react';
import { Edit2 } from 'lucide-react';
import { useEditMode } from './EditModeContext';
import { useEditableContent } from '../hooks/useEditableContent';

interface EditableTextBlockProps {
  contentKey: string;
  defaultValue: string;
  className?: string;
  multiline?: boolean;
  placeholder?: string;
}

export function EditableTextBlock({ 
  contentKey,
  defaultValue,
  className = '', 
  multiline = false,
  placeholder = 'Enter text...'
}: EditableTextBlockProps) {
  const { isEditMode } = useEditMode();
  const { getContent, setContent } = useEditableContent();
  const text = getContent(contentKey, defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    setContent(contentKey, editedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(text);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="relative">
        {multiline ? (
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows={Math.max(3, editedText.split('\n').length)}
            className={`w-full bg-gray-800/80 text-white border-2 border-blue-500 px-3 py-2 rounded outline-none ${className}`}
            placeholder={placeholder}
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') handleCancel();
            }}
            className={`w-full bg-gray-800/80 text-white border-2 border-blue-500 px-3 py-2 rounded outline-none ${className}`}
            placeholder={placeholder}
            autoFocus
          />
        )}
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-xs font-medium"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className={className}>
        {text}
      </div>
      {isEditMode && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute -right-2 -top-2 p-1.5 rounded-full bg-blue-600 hover:bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
          title="Edit text"
        >
          <Edit2 className="size-3 text-white" />
        </button>
      )}
    </div>
  );
}