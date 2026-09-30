import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronRight, Edit2, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useCardContext } from "./CardContext";
import { useEditMode } from "./EditModeContext";
import { NestedItemEditor } from "./NestedItemEditor";
import { TextEditorPanel } from "./TextEditorPanel";
import { QuizSection } from "./QuizSection";
import React from "react";
import { createPortal } from "react-dom";

interface NestedItem {
  label: string;
  content: string | React.ReactNode;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface AccordionCardProps {
  title: string;
  description: string;
  content: string | React.ReactNode;
  v2Content?: string | React.ReactNode; // Optional V2 version of content
  v2NestedItems?: NestedItem[]; // Optional V2 nested items
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  color?: string;
  width?: string;
  nestedItems?: NestedItem[];
  quiz?: QuizQuestion[];
  cardId?: string; // For tracking in edit mode
  brightness?: number; // Optional brightness multiplier (default 1.0)
  onUpdateTitle?: (value: string) => void;
  onUpdateDescription?: (value: string) => void;
  onUpdateContent?: (value: string) => void;
  onUpdateNestedItem?: (index: number, field: 'label' | 'content', value: string) => void;
}

export function AccordionCard({
  title,
  description,
  content,
  v2Content,
  v2NestedItems,
  icon,
  defaultOpen = false,
  color = "#E9D5FF",
  width = "100%",
  nestedItems,
  quiz,
  cardId,
  brightness = 1.0,
  onUpdateTitle,
  onUpdateDescription,
  onUpdateContent,
  onUpdateNestedItem,
}: AccordionCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [activeVersion, setActiveVersion] = useState<'v1' | 'v2'>('v1'); // Version toggle state
  const [editingLabelIndex, setEditingLabelIndex] = useState<number | null>(null);
  const [editedLabelText, setEditedLabelText] = useState('');
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);
  const [editableContent, setEditableContent] = useState(typeof content === 'string' ? content : '');
  const [editableNestedItems, setEditableNestedItems] = useState(
    nestedItems?.map(item => ({
      label: item.label,
      content: typeof item.content === 'string' ? item.content : ''
    })) || []
  );
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);
  const { expandedCard, setExpandedCard } = useCardContext();
  const { isEditMode } = useEditMode();
  
  const currentCardId = cardId || `card-${title}`;
  const isOtherCardExpanded = expandedCard !== null && expandedCard !== currentCardId;

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isExpanded && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardRect(rect);
      setIsExpanded(true);
      setExpandedCard(currentCardId);
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    // Don't close if the editor is open
    if (showEditor) return;
    
    setIsExpanded(false);
    setExpandedCard(null);
    setSelectedItem(null);
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  // Generate darker shade for bottom border
  const getDarkerShade = (colorOrGradient: string) => {
    // If it's a gradient, extract the first color
    if (colorOrGradient.includes('gradient')) {
      const match = colorOrGradient.match(/#[0-9A-Fa-f]{6}/);
      if (match) {
        const hexColor = match[0];
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        return `rgba(${Math.floor(r * 0.5)}, ${Math.floor(g * 0.5)}, ${Math.floor(b * 0.5)}, 0.8)`;
      }
    }
    // Handle hex color
    const r = parseInt(colorOrGradient.slice(1, 3), 16);
    const g = parseInt(colorOrGradient.slice(3, 5), 16);
    const b = parseInt(colorOrGradient.slice(5, 7), 16);
    return `rgb(${Math.floor(r * 0.8)}, ${Math.floor(g * 0.8)}, ${Math.floor(b * 0.8)})`;
  };

  // Generate much darker shade for side panel background
  const getMutedColor = (colorOrGradient: string) => {
    // Return the original color/gradient for side panel
    return colorOrGradient;
  };

  // Generate pastel version of the color for expanded states
  const getPastelColor = (colorOrGradient: string) => {
    // Return dark grey for all expanded states - simple top to bottom gradient
    return 'linear-gradient(180deg, #475569 0%, #334155 100%)'; // Slate grey gradient top to bottom
  };

  // Get dark text color for pastel backgrounds
  const getPastelTextColor = () => {
    return '#ffffff'; // White text for dark grey background
  };

  // Generate glow color based on the card's color
  const getGlowColor = (colorOrGradient: string) => {
    // If it's a gradient, extract the first color
    if (colorOrGradient.includes('gradient')) {
      const match = colorOrGradient.match(/#[0-9A-Fa-f]{6}/);
      if (match) {
        const hexColor = match[0];
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, 0.6)`;
      }
    }
    // Handle hex color
    const r = parseInt(colorOrGradient.slice(1, 3), 16);
    const g = parseInt(colorOrGradient.slice(3, 5), 16);
    const b = parseInt(colorOrGradient.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, 0.6)`;
  };

  const expandedModal = isExpanded && cardRect && createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        onClick={handleClose}
      >
        {/* Backdrop - no blur when modal is open */}
        <div
          className="absolute inset-0 bg-black/70"
        />

        {/* Expanded card */}
        <motion.div
          initial={{
            scale: 0.4,
            opacity: 0,
            z: -100,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            z: 0,
          }}
          exit={{
            scale: 0.4,
            opacity: 0,
            z: -100,
          }}
          transition={{
            type: "spring",
            damping: 22,
            stiffness: 280,
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[90vw] max-w-[900px] max-h-[85vh] overflow-y-auto"
          style={{
            background: getPastelColor(color), // Changed to pastel
            borderRadius: "2.5rem",
            borderBottom: `6px solid ${getDarkerShade(color)}`,
            transformOrigin: "center center",
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Glossy highlight */}
          <div
            className="absolute inset-x-0 top-0 h-24 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)", // Much more subtle
              borderRadius: "2.5rem 2.5rem 0 0",
            }}
          />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-full hover:bg-white/10 transition-colors"
            style={{ color: getPastelTextColor() }}
          >
            <X className="size-6" />
          </button>

          {/* Edit Text button - shows when edit mode is on */}
          {isEditMode && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowEditor(true);
              }}
              className="absolute top-6 right-20 z-10 p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              style={{ color: '#ffffff' }}
              title="Edit all text in this card"
            >
              <Edit2 className="size-5" />
            </motion.button>
          )}

          {/* Content area */}
          <div className="relative px-8 py-6">
            <div className="flex items-center gap-4 pr-12">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold tracking-wider" style={{ color: getPastelTextColor() }}>
                  {title}
                </h3>
                <p className="text-sm mt-1 font-normal tracking-wide" style={{ color: getPastelTextColor(), opacity: 0.75 }}>
                  {description}
                </p>
              </div>
            </div>
            
            {/* Version toggle - only show if v2Content exists */}
            {v2Content && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex justify-center"
              >
                <div 
                  className="inline-flex items-center gap-1 p-1 rounded-full" 
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <button
                    onClick={() => setActiveVersion('v1')}
                    className="relative px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300"
                    style={{
                      color: activeVersion === 'v1' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                      backgroundColor: activeVersion === 'v1' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                    }}
                  >
                    V1
                  </button>
                  <button
                    onClick={() => setActiveVersion('v2')}
                    className="relative px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300"
                    style={{
                      color: activeVersion === 'v2' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                      backgroundColor: activeVersion === 'v2' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                    }}
                  >
                    V2
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Expanded content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="px-8 pb-8 pt-2"
          >
            <div className="font-normal whitespace-pre-line text-sm leading-relaxed" style={{ color: getPastelTextColor(), opacity: 0.95 }}>
              {activeVersion === 'v1' ? content : v2Content}
            </div>
            
            {((activeVersion === 'v1' && nestedItems && nestedItems.length > 0) || 
              (activeVersion === 'v2' && v2NestedItems && v2NestedItems.length > 0)) && (
              <div className="mt-6 space-y-2">
                {(activeVersion === 'v1' ? nestedItems : v2NestedItems)?.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(selectedItem === index ? null : index);
                    }}
                    className="w-full text-left px-4 py-3 rounded-xl transition-all hover:scale-[1.02]"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Darker for grey background
                      border: '1px solid rgba(255, 255, 255, 0.15)', // Lighter border
                    }}
                    whileHover={{ x: 4, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span style={{ color: getPastelTextColor() }} className="text-sm font-medium">{item.label}</span>
                      <motion.div
                        animate={{ rotate: selectedItem === index ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="size-4" style={{ color: getPastelTextColor() }} />
                      </motion.div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
            
            {quiz && quiz.length > 0 && (
              <div className="mt-6">
                <QuizSection quiz={quiz} />
              </div>
            )}
          </motion.div>

          {/* Side panel for nested item details */}
          <AnimatePresence>
            {selectedItem !== null && (
              (activeVersion === 'v1' && nestedItems && nestedItems[selectedItem]) ||
              (activeVersion === 'v2' && v2NestedItems && v2NestedItems[selectedItem])
            ) && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-full w-full max-w-2xl z-[110] overflow-y-auto"
                style={{
                  background: getPastelColor(color),
                  borderLeft: `6px solid ${getDarkerShade(color)}`,
                  willChange: "transform",
                  transform: "translateZ(0)", // Force GPU acceleration
                }}
              >
                {/* Glossy highlight on panel */}
                <div
                  className="absolute inset-x-0 top-0 h-40 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
                  }}
                />

                {/* Panel content */}
                <div className="relative p-8">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
                    style={{ color: getPastelTextColor() }}
                  >
                    <ChevronRight className="size-6" />
                  </button>

                  {/* Edit button for nested item - shows when edit mode is on */}
                  {isEditMode && (
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowEditor(true);
                      }}
                      className="absolute top-6 right-20 p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                      style={{ color: '#ffffff' }}
                      title="Edit this nested item"
                    >
                      <Edit2 className="size-5" />
                    </motion.button>
                  )}

                  <h2 className="text-2xl font-bold mb-6 pr-12" style={{ color: getPastelTextColor() }}>
                    {(activeVersion === 'v1' ? nestedItems : v2NestedItems)?.[selectedItem]?.label}
                  </h2>

                  <div 
                    className="font-normal whitespace-pre-line text-base leading-relaxed"
                    style={{ color: getPastelTextColor(), opacity: 0.95 }}
                  >
                    {(activeVersion === 'v1' ? nestedItems : v2NestedItems)?.[selectedItem]?.content}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );

  return (
    <>
      <motion.div
        ref={cardRef}
        className="group relative"
        animate={{
          opacity: isOtherCardExpanded ? 0.3 : 1,
        }}
        transition={{ duration: 0.2 }}
        style={{
          willChange: "opacity",
        }}
      >
        {/* Very faint background reflection glow */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${color.replace('linear-gradient(135deg, ', '').split(' ')[0]}18, transparent 60%)`,
            filter: `blur(80px) brightness(${brightness * 0.8})`,
            transform: 'scale(2.0)',
            opacity: brightness === 1.15 ? 0.4 : 0.25,
          }}
        />
        
        {/* Luminous glow reflection on black background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${color.replace('linear-gradient(135deg, ', '').split(' ')[0]}33, transparent 50%)`,
            filter: `blur(40px) brightness(${brightness})`,
            transform: 'scale(1.3)',
            opacity: 0.6,
          }}
        />
        
        {/* Hover glow enhancement */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${color.replace('linear-gradient(135deg, ', '').split(' ')[0]}55, transparent 50%)`,
            filter: `blur(50px) brightness(${brightness * 1.3})`,
            transform: 'scale(1.5)',
          }}
        />
        
        {/* Glossy card */}
        <div
          className="relative overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          onClick={handleCardClick}
          style={{
            background: color,
            borderRadius: "1.75rem",
            borderBottom: `4px solid ${getDarkerShade(color)}`,
            width: width,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Glossy highlight */}
          <div
            className="absolute inset-x-0 top-0 h-16 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
              borderRadius: "1.75rem 1.75rem 0 0",
            }}
          />

          {/* Content area */}
          <div className="relative px-7 py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold tracking-wider text-base" style={{ color: '#ffffff' }}>
                  {editableTitle}
                </h3>
                <p className="mt-1 font-normal tracking-wide leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.87)', fontSize: '0.7rem' }}>
                  {editableDescription}
                </p>
              </div>
              <div
                className="shrink-0"
                style={{ color: '#ffffff', opacity: 0.6 }}
              >
                <ChevronDown className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {expandedModal}

      {/* Text Editor Panel */}
      <TextEditorPanel
        isOpen={showEditor}
        onClose={() => setShowEditor(false)}
        cardTitle={currentCardId}
        textContent={{
          title: editableTitle,
          description: editableDescription,
          mainContent: editableContent,
          nestedItems: editableNestedItems.length > 0 ? editableNestedItems : undefined,
        }}
        onSave={(updated) => {
          setEditableTitle(updated.title);
          setEditableDescription(updated.description);
          setEditableContent(updated.mainContent);
          if (updated.nestedItems) {
            setEditableNestedItems(updated.nestedItems);
          }
          console.log('Updated content:', updated);
        }}
      />
    </>
  );
}