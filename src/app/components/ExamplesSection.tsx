import { EditableTextBlock } from './EditableTextBlock';

interface ExamplesSectionProps {
  examples: string[];
  sectionKey?: string;
}

export function ExamplesSection({ examples, sectionKey = 'examples' }: ExamplesSectionProps) {
  return (
    <div className="bg-slate-800/20 border border-slate-700/40 rounded-lg p-4 space-y-3">
      <div className="flex items-start gap-2">
        <span className="text-sm">💬</span>
        <EditableTextBlock 
          contentKey={`${sectionKey}.label`}
          defaultValue="Examples"
          className="text-slate-300 font-medium text-sm"
        />
      </div>
      <div className="space-y-3">
        {examples.map((example, index) => (
          <div key={index} className="bg-slate-900/40 border-l-2 border-blue-500/30 p-3 rounded">
            <div className="flex items-start gap-2 mb-1">
              <span className="text-blue-400 text-xs font-semibold">Example {index + 1}</span>
            </div>
            <EditableTextBlock 
              contentKey={`${sectionKey}.example-${index}`}
              defaultValue={example}
              className="text-slate-300 text-sm italic leading-relaxed"
              multiline
            />
          </div>
        ))}
      </div>
    </div>
  );
}