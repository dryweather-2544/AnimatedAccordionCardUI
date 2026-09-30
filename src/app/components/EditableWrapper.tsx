import { EditableText } from './EditableText';
import { useEditMode } from './EditModeContext';

interface EditableWrapperProps {
  path: string[];
  value: string;
  className?: string;
  style?: React.CSSProperties;
  multiline?: boolean;
  children?: React.ReactNode;
}

export function EditableWrapper({ path, value, className, style, multiline, children }: EditableWrapperProps) {
  const { updateContent } = useEditMode();

  const handleChange = (newValue: string) => {
    updateContent(path, newValue);
  };

  // If children are provided, render them in non-edit mode
  if (children) {
    return (
      <EditableText 
        value={value}
        onChange={handleChange}
        className={className}
        style={style}
        multiline={multiline}
      >
        {children}
      </EditableText>
    );
  }

  return (
    <EditableText 
      value={value}
      onChange={handleChange}
      className={className}
      style={style}
      multiline={multiline}
    />
  );
}
