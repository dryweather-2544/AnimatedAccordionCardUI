import { createContext, useContext, useState, ReactNode } from 'react';

interface CardContextType {
  expandedCard: string | null;
  setExpandedCard: (id: string | null) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export function CardProvider({ children }: { children: ReactNode }) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <CardContext.Provider value={{ expandedCard, setExpandedCard }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within CardProvider');
  }
  return context;
}
