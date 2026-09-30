import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface EditableContentContextType {
  editMode: boolean;
  toggleEditMode: () => void;
  getContent: (key: string, defaultValue: string) => string;
  setContent: (key: string, value: string) => void;
  getAllEdits: () => Record<string, string>;
  resetAllEdits: () => void;
  exportChanges: () => void;
}

const EditableContentContext = createContext<EditableContentContextType | null>(null);

const STORAGE_KEY = 'editableContent';

export function EditableContentProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  const [edits, setEdits] = useState<Record<string, string>>({});

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    console.log('🔍 Loading from localStorage:', stored);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        console.log('✅ Parsed edits:', parsed);
        setEdits(parsed);
      } catch (e) {
        console.error('❌ Failed to parse stored edits:', e);
      }
    } else {
      console.log('ℹ️ No stored edits found');
    }
  }, []);

  const toggleEditMode = () => setEditMode(!editMode);

  const getContent = (key: string, defaultValue: string): string => {
    return edits[key] !== undefined ? edits[key] : defaultValue;
  };

  const setContent = (key: string, value: string) => {
    const newEdits = { ...edits, [key]: value };
    console.log('💾 Saving edit:', { key, value, allEdits: newEdits });
    setEdits(newEdits);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newEdits));
    console.log('✅ Saved to localStorage');
  };

  const getAllEdits = () => edits;

  const resetAllEdits = () => {
    setEdits({});
    localStorage.removeItem(STORAGE_KEY);
  };

  const exportChanges = () => {
    const changesText = JSON.stringify(edits, null, 2);
    console.log('=== EXPORTED CHANGES ===');
    console.log(changesText);
    console.log('========================');
    
    // Try to copy to clipboard if possible
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(changesText).then(() => {
        alert('✅ Changes copied to clipboard successfully!\n\nYou can now paste them anywhere.');
      }).catch(() => {
        // Silently fall back to execCommand method
        tryFallbackCopy(changesText);
      });
    } else {
      // Browser doesn't support clipboard API
      tryFallbackCopy(changesText);
    }
  };

  const tryFallbackCopy = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('✅ Changes copied to clipboard!\n\nYou can now paste them anywhere.');
    } catch (e) {
      document.body.removeChild(textArea);
      alert('📋 Changes have been logged to the browser console.\n\n' +
            'To view them:\n' +
            '1. Press F12 (or Cmd+Option+I on Mac)\n' +
            '2. Click the "Console" tab\n' +
            '3. Look for "=== EXPORTED CHANGES ==="\n' +
            '4. Copy the JSON data\n\n' +
            'Note: Clipboard access is restricted in this environment.');
    }
  };

  return (
    <EditableContentContext.Provider
      value={{
        editMode,
        toggleEditMode,
        getContent,
        setContent,
        getAllEdits,
        resetAllEdits,
        exportChanges,
      }}
    >
      {children}
    </EditableContentContext.Provider>
  );
}

export function useEditableContent() {
  const context = useContext(EditableContentContext);
  if (!context) {
    throw new Error('useEditableContent must be used within EditableContentProvider');
  }
  return context;
}