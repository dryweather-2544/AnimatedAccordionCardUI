import { useEditableContent } from '../hooks/useEditableContent';
import { useState, useRef, useEffect } from 'react';

interface EditableTextProps {
  contentKey: string;
  defaultValue: string;
  className?: string;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  html?: boolean;
}

export function EditableText({
  contentKey,
  defaultValue,
  className = '',
  as: Component = 'span',
  html = false,
}: EditableTextProps) {
  const { editMode, getContent, setContent } = useEditableContent();
  const content = getContent(contentKey, defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current && html) {
      elementRef.current.innerHTML = content;
    }
  }, [content, html]);

  const handleBlur = () => {
    if (elementRef.current) {
      const newContent = html
        ? elementRef.current.innerHTML
        : elementRef.current.textContent || '';
      setContent(contentKey, newContent);
      setIsEditing(false);
    }
  };

  const handleFocus = () => {
    setIsEditing(true);
  };

  if (!editMode) {
    if (html) {
      return <Component className={className} dangerouslySetInnerHTML={{ __html: content }} />;
    }
    return <Component className={className}>{content}</Component>;
  }

  // Edit mode
  const editClassName = `${className} ${
    isEditing
      ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-900'
      : 'ring-1 ring-blue-500/30 hover:ring-blue-400/50'
  } transition-all rounded px-1 cursor-text`;

  return (
    <Component
      ref={elementRef as any}
      className={editClassName}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onBlur={handleBlur}
      onFocus={handleFocus}
      dangerouslySetInnerHTML={html ? { __html: content } : undefined}
    >
      {!html && content}
    </Component>
  );
}
