import React, { createContext, useContext, useState } from 'react';

interface EditModeContextType {
  isEditMode: boolean;
  setIsEditMode: (value: boolean) => void;
  contentData: any;
  updateContent: (path: string[], value: string) => void;
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined);

export function EditModeProvider({ children, initialData }: { children: React.ReactNode; initialData: any }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [contentData, setContentData] = useState(initialData);

  const updateContent = (path: string[], value: string) => {
    setContentData((prev: any) => {
      const newData = JSON.parse(JSON.stringify(prev));
      let current = newData;
      
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      
      current[path[path.length - 1]] = value;
      return newData;
    });
  };

  return (
    <EditModeContext.Provider value={{ isEditMode, setIsEditMode, contentData, updateContent }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (context === undefined) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
}
