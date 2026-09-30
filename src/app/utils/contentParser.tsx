import React from 'react';

export interface ContentBlock {
  type: 'oneliner' | 'ifskipped' | 'structure' | 'psychology' | 'paragraph' | 'heading' | 'list' | 'constraint';
  content: string | string[];
  label?: string;
}

// Parse React elements into editable blocks
export function parseJSXToBlocks(jsxContent: React.ReactNode): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  
  // This is a simplified parser - in production you'd want more robust parsing
  // For now, we'll provide a way to manually define blocks
  
  return blocks;
}

// Convert blocks back to JSX
export function blocksToJSX(blocks: ContentBlock[]): React.ReactNode {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'oneliner':
            return (
              <div key={index} className="bg-emerald-900/20 border border-emerald-700/30 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 text-lg">✓</span>
                  <p className="text-emerald-300 font-semibold text-sm">{block.content}</p>
                </div>
              </div>
            );

          case 'ifskipped':
            return (
              <div key={index} className="bg-red-900/20 border border-red-700/30 rounded-lg p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 text-lg">⚠️</span>
                  <p className="text-red-300 font-medium text-sm">If you skip this:</p>
                </div>
                <ul className="ml-6 space-y-1 text-sm text-red-200">
                  {Array.isArray(block.content) && block.content.map((consequence, i) => (
                    <li key={i}>• {consequence}</li>
                  ))}
                </ul>
              </div>
            );

          case 'structure':
            return (
              <div key={index} className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-sm">📋</span>
                  <p className="text-slate-300 font-medium text-sm">Structure to follow</p>
                </div>
                <ul className="space-y-1 ml-4 text-sm text-slate-300">
                  {Array.isArray(block.content) && block.content.map((item, i) => (
                    <li key={i} className="text-slate-300">{item}</li>
                  ))}
                </ul>
              </div>
            );

          case 'psychology':
            return (
              <div key={index} className="bg-slate-800/40 border-l-4 border-amber-500/50 p-4 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-lg">🧠</span>
                  <div className="space-y-2">
                    <p className="text-slate-300 font-medium">What you need to understand</p>
                    <p className="text-slate-200 text-sm font-semibold">{block.content}</p>
                  </div>
                </div>
              </div>
            );

          case 'paragraph':
            return (
              <div key={index} className="space-y-3 text-sm leading-relaxed">
                <p className="text-slate-200">{block.content}</p>
              </div>
            );

          case 'heading':
            return (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-2">{block.content}</p>
              </div>
            );

          case 'list':
            return (
              <ul key={index} className="space-y-2 ml-4 text-sm text-slate-300">
                {Array.isArray(block.content) && block.content.map((item, i) => (
                  <li key={i} className="text-slate-300">• {item}</li>
                ))}
              </ul>
            );

          case 'constraint':
            return (
              <div key={index} className="bg-orange-900/20 border-l-4 border-orange-500/50 p-4">
                <div className="flex items-start gap-2">
                  <span className="text-orange-400 text-lg">🚫</span>
                  <p className="text-orange-200 text-sm font-semibold">{block.content}</p>
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
