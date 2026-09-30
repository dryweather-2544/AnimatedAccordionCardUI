import { motion } from "motion/react";
import { AlertTriangle, CheckCircle2, Eye, Copy, XCircle, Edit2 } from "lucide-react";
import { useState } from "react";
import { useEditMode } from "./EditModeContext";

interface OneLinerProps {
  text: string;
  onEdit?: (newText: string) => void;
}

export function OneLiner({ text, onEdit }: OneLinerProps) {
  const { isEditMode } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    if (onEdit) onEdit(editedText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="mb-4 p-3 rounded-lg bg-blue-500/20 border-2 border-blue-400">
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave();
            if (e.key === 'Escape') { setEditedText(text); setIsEditing(false); }
          }}
          autoFocus
          className="w-full bg-blue-900/50 text-blue-100 px-2 py-1 rounded outline-none text-sm"
        />
      </div>
    );
  }

  return (
    <div className="mb-4 p-3 rounded-lg bg-blue-500/20 border border-blue-400/30 relative group">
      <p className="text-blue-200 text-sm font-medium">💡 {text}</p>
      {isEditMode && onEdit && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-2 right-2 p-1 rounded bg-blue-600 hover:bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="size-3 text-white" />
        </button>
      )}
    </div>
  );
}

interface DecisionCheckProps {
  conditions: Array<{
    condition: string;
    action: string;
  }>;
  note?: string;
  onEdit?: (newConditions: Array<{ condition: string; action: string }>, newNote?: string) => void;
}

export function DecisionCheck({ conditions, note, onEdit }: DecisionCheckProps) {
  const { isEditMode } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editedConditions, setEditedConditions] = useState(conditions);
  const [editedNote, setEditedNote] = useState(note || '');

  const handleSave = () => {
    if (onEdit) onEdit(editedConditions, editedNote || undefined);
    setIsEditing(false);
  };

  const updateCondition = (index: number, field: 'condition' | 'action', value: string) => {
    const updated = [...editedConditions];
    updated[index][field] = value;
    setEditedConditions(updated);
  };

  const addCondition = () => {
    setEditedConditions([...editedConditions, { condition: '', action: '' }]);
  };

  const removeCondition = (index: number) => {
    setEditedConditions(editedConditions.filter((_, i) => i !== index));
  };

  if (isEditing) {
    return (
      <div className="mt-6 p-4 rounded-lg bg-purple-500/30 border-2 border-purple-400">
        <h4 className="text-purple-200 font-semibold mb-3 text-sm">🎯 Decision check</h4>
        <div className="space-y-3 mb-3">
          {editedConditions.map((item, index) => (
            <div key={index} className="space-y-2 p-3 bg-purple-900/30 rounded border border-purple-600/30">
              <div className="flex gap-2 items-start">
                <span className="text-purple-300 text-sm mt-2">If</span>
                <input
                  type="text"
                  value={item.condition}
                  onChange={(e) => updateCondition(index, 'condition', e.target.value)}
                  className="flex-1 bg-purple-900/50 text-purple-100 px-2 py-1 rounded outline-none text-sm"
                  placeholder="Condition"
                />
                <button
                  onClick={() => removeCondition(index)}
                  className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-xs"
                >
                  ×
                </button>
              </div>
              <div className="flex gap-2 items-start ml-4">
                <span className="text-purple-300 text-sm mt-2">→</span>
                <input
                  type="text"
                  value={item.action}
                  onChange={(e) => updateCondition(index, 'action', e.target.value)}
                  className="flex-1 bg-purple-900/50 text-purple-100 px-2 py-1 rounded outline-none text-sm"
                  placeholder="Action"
                />
              </div>
            </div>
          ))}
          <button
            onClick={addCondition}
            className="text-purple-300 text-xs hover:text-purple-200"
          >
            + Add condition
          </button>
        </div>
        {note !== undefined && (
          <div className="mb-3">
            <label className="text-purple-400 text-xs mb-1 block">Note (optional):</label>
            <input
              type="text"
              value={editedNote}
              onChange={(e) => setEditedNote(e.target.value)}
              className="w-full bg-purple-900/50 text-purple-100 px-2 py-1 rounded outline-none text-sm"
              placeholder="Note"
            />
          </div>
        )}
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-xs"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditedConditions(conditions);
              setEditedNote(note || '');
              setIsEditing(false);
            }}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 rounded-lg bg-purple-500/20 border border-purple-400/30 relative group">
      <h4 className="text-purple-200 font-semibold mb-3 text-sm">🎯 Decision check</h4>
      <div className="space-y-2">
        {conditions.map((item, index) => (
          <div key={index} className="text-sm">
            <div className="text-purple-200 font-medium">If {item.condition}</div>
            <div className="text-purple-300 ml-4 mt-1">→ {item.action}</div>
          </div>
        ))}
      </div>
      {note && (
        <div className="mt-3 text-purple-300 text-xs italic border-t border-purple-400/20 pt-2">
          {note}
        </div>
      )}
      {isEditMode && onEdit && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-3 right-3 p-1 rounded bg-purple-600 hover:bg-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="size-3 text-white" />
        </button>
      )}
    </div>
  );
}

interface WatchForProps {
  signals: string[];
  onEdit?: (newSignals: string[]) => void;
}

export function WatchFor({ signals, onEdit }: WatchForProps) {
  const { isEditMode } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editedSignals, setEditedSignals] = useState(signals);

  const handleSave = () => {
    if (onEdit) onEdit(editedSignals);
    setIsEditing(false);
  };

  const updateSignal = (index: number, value: string) => {
    const updated = [...editedSignals];
    updated[index] = value;
    setEditedSignals(updated);
  };

  const addSignal = () => {
    setEditedSignals([...editedSignals, '']);
  };

  const removeSignal = (index: number) => {
    setEditedSignals(editedSignals.filter((_, i) => i !== index));
  };

  if (isEditing) {
    return (
      <div className="mt-4 p-3 rounded-lg bg-green-500/30 border-2 border-green-400">
        <div className="flex items-start gap-2 mb-3">
          <Eye className="size-4 text-green-300 mt-0.5 shrink-0" />
          <h4 className="text-green-200 font-semibold text-sm">Watch for</h4>
        </div>
        <div className="space-y-2 ml-6">
          {editedSignals.map((signal, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={signal}
                onChange={(e) => updateSignal(index, e.target.value)}
                className="flex-1 bg-green-900/50 text-green-100 px-2 py-1 rounded outline-none text-sm"
                placeholder="Signal to watch for"
              />
              <button
                onClick={() => removeSignal(index)}
                className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-xs"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={addSignal}
            className="text-green-300 text-xs hover:text-green-200"
          >
            + Add signal
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-xs"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditedSignals(signals);
              setIsEditing(false);
            }}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-400/30 relative group">
      <div className="flex items-start gap-2">
        <Eye className="size-4 text-green-300 mt-0.5 shrink-0" />
        <div>
          <h4 className="text-green-200 font-semibold mb-2 text-sm">Watch for</h4>
          <ul className="space-y-1">
            {signals.map((signal, index) => (
              <li key={index} className="text-green-300 text-sm">{signal}</li>
            ))}
          </ul>
        </div>
      </div>
      {isEditMode && onEdit && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-2 right-2 p-1 rounded bg-green-600 hover:bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="size-3 text-white" />
        </button>
      )}
    </div>
  );
}

interface DoNotYetProps {
  items: string[];
  reason: string;
  onEdit?: (newItems: string[], newReason: string) => void;
}

export function DoNotYet({ items, reason, onEdit }: DoNotYetProps) {
  const { isEditMode } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editedItems, setEditedItems] = useState(items);
  const [editedReason, setEditedReason] = useState(reason);

  const handleSave = () => {
    if (onEdit) onEdit(editedItems, editedReason);
    setIsEditing(false);
  };

  const updateItem = (index: number, value: string) => {
    const updated = [...editedItems];
    updated[index] = value;
    setEditedItems(updated);
  };

  const addItem = () => {
    setEditedItems([...editedItems, '']);
  };

  const removeItem = (index: number) => {
    setEditedItems(editedItems.filter((_, i) => i !== index));
  };

  if (isEditing) {
    return (
      <div className="mt-4 p-3 rounded-lg bg-red-500/30 border-2 border-red-400">
        <div className="flex items-start gap-2 mb-3">
          <AlertTriangle className="size-4 text-red-300 mt-0.5 shrink-0" />
          <h4 className="text-red-200 font-semibold text-sm">Do not yet</h4>
        </div>
        <div className="space-y-2 ml-6 mb-3">
          {editedItems.map((item, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => updateItem(index, e.target.value)}
                className="flex-1 bg-red-900/50 text-red-100 px-2 py-1 rounded outline-none text-sm"
                placeholder="Item"
              />
              <button
                onClick={() => removeItem(index)}
                className="px-2 py-1 bg-red-800 hover:bg-red-900 rounded text-white text-xs"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={addItem}
            className="text-red-300 text-xs hover:text-red-200"
          >
            + Add item
          </button>
        </div>
        <div className="ml-6 mb-3">
          <label className="text-red-400 text-xs mb-1 block">Reason:</label>
          <textarea
            value={editedReason}
            onChange={(e) => setEditedReason(e.target.value)}
            rows={2}
            className="w-full bg-red-900/50 text-red-100 px-2 py-1 rounded outline-none text-sm resize-none"
            placeholder="Why not yet?"
          />
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-xs"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditedItems(items);
              setEditedReason(reason);
              setIsEditing(false);
            }}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 p-3 rounded-lg bg-red-500/20 border border-red-400/30 relative group">
      <div className="flex items-start gap-2">
        <AlertTriangle className="size-4 text-red-300 mt-0.5 shrink-0" />
        <div>
          <h4 className="text-red-200 font-semibold mb-2 text-sm">Do not yet</h4>
          <ul className="space-y-1 mb-2">
            {items.map((item, index) => (
              <li key={index} className="text-red-300 text-sm">{item}</li>
            ))}
          </ul>
          <div className="text-red-200 text-sm mt-2">
            <span className="font-medium">Why:</span> {reason}
          </div>
        </div>
      </div>
      {isEditMode && onEdit && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-2 right-2 p-1 rounded bg-red-600 hover:bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="size-3 text-white" />
        </button>
      )}
    </div>
  );
}

interface CopyPastePromptProps {
  prompts: string[];
  structure?: string[];
  onEdit?: (newPrompts: string[], newStructure?: string[]) => void;
}

export function CopyPastePrompts({ prompts, structure, onEdit }: CopyPastePromptProps) {
  const { isEditMode } = useEditMode();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPrompts, setEditedPrompts] = useState(prompts);
  const [editedStructure, setEditedStructure] = useState(structure || []);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }).catch((err) => {
      // Fallback for when clipboard API is blocked
      console.warn('Clipboard API blocked, using fallback', err);
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      } catch (e) {
        console.error('Fallback copy failed', e);
      }
      document.body.removeChild(textArea);
    });
  };

  const handleSave = () => {
    if (onEdit) onEdit(editedPrompts, structure ? editedStructure : undefined);
    setIsEditing(false);
  };

  const updatePrompt = (index: number, value: string) => {
    const updated = [...editedPrompts];
    updated[index] = value;
    setEditedPrompts(updated);
  };

  const addPrompt = () => {
    setEditedPrompts([...editedPrompts, '']);
  };

  const removePrompt = (index: number) => {
    setEditedPrompts(editedPrompts.filter((_, i) => i !== index));
  };

  const updateStructure = (index: number, value: string) => {
    const updated = [...editedStructure];
    updated[index] = value;
    setEditedStructure(updated);
  };

  const addStructure = () => {
    setEditedStructure([...editedStructure, '']);
  };

  const removeStructure = (index: number) => {
    setEditedStructure(editedStructure.filter((_, i) => i !== index));
  };

  if (isEditing) {
    return (
      <div className="mt-6 p-4 rounded-lg bg-slate-700/70 border-2 border-slate-500">
        <h4 className="text-slate-200 font-semibold mb-3 text-sm">📋 {structure ? "Structure to follow" : "Use one of these"}</h4>
        
        {structure && (
          <div className="mb-4 p-3 rounded-lg bg-slate-800/50 border border-slate-600/30">
            <p className="text-slate-400 text-xs mb-2">Structure steps:</p>
            <div className="space-y-2">
              {editedStructure.map((step, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <span className="text-slate-500 font-medium text-sm">{index + 1}.</span>
                  <input
                    type="text"
                    value={step}
                    onChange={(e) => updateStructure(index, e.target.value)}
                    className="flex-1 bg-slate-900 text-slate-200 px-2 py-1 rounded outline-none text-sm"
                    placeholder="Structure step"
                  />
                  <button
                    onClick={() => removeStructure(index)}
                    className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                onClick={addStructure}
                className="text-slate-400 text-xs hover:text-slate-300"
              >
                + Add step
              </button>
            </div>
          </div>
        )}
        
        <div className="space-y-2 mb-3">
          <p className="text-slate-400 text-xs mb-2">Copy-paste prompts:</p>
          {editedPrompts.map((prompt, index) => (
            <div key={index} className="flex gap-2">
              <textarea
                value={prompt}
                onChange={(e) => updatePrompt(index, e.target.value)}
                rows={2}
                className="flex-1 bg-slate-900 text-slate-200 px-2 py-1 rounded outline-none text-sm resize-none"
                placeholder="Prompt text"
              />
              <button
                onClick={() => removePrompt(index)}
                className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-xs h-fit"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={addPrompt}
            className="text-slate-400 text-xs hover:text-slate-300"
          >
            + Add prompt
          </button>
        </div>

        <div className="flex gap-2 mt-3">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-xs"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditedPrompts(prompts);
              setEditedStructure(structure || []);
              setIsEditing(false);
            }}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 rounded-lg bg-slate-700/50 border border-slate-600/50 relative group">
      <h4 className="text-slate-200 font-semibold mb-3 text-sm">📋 {structure ? "Structure to follow" : "Use one of these"}</h4>
      
      {structure && (
        <div className="mb-4 p-3 rounded-lg bg-slate-800/50 border border-slate-600/30">
          <ol className="space-y-2">
            {structure.map((step, index) => (
              <li key={index} className="text-slate-300 text-sm flex gap-2">
                <span className="text-slate-500 font-medium">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
      
      <div className="space-y-2">
        {prompts.map((prompt, index) => (
          <motion.button
            key={index}
            onClick={() => handleCopy(prompt, index)}
            className="w-full text-left p-3 rounded-lg bg-slate-800/70 hover:bg-slate-800 transition-all border border-slate-600/30 group"
            whileHover={{ x: 2 }}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-slate-200 text-sm flex-1">{prompt}</span>
              <div className="shrink-0">
                {copiedIndex === index ? (
                  <CheckCircle2 className="size-4 text-green-400" />
                ) : (
                  <Copy className="size-4 text-slate-400 group-hover:text-slate-300" />
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {isEditMode && onEdit && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-3 right-3 p-1 rounded bg-slate-600 hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="size-3 text-white" />
        </button>
      )}
    </div>
  );
}

interface WhenThisWorkedProps {
  indicators: string[];
  onEdit?: (newIndicators: string[]) => void;
}

export function WhenThisWorked({ indicators, onEdit }: WhenThisWorkedProps) {
  const { isEditMode } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editedIndicators, setEditedIndicators] = useState(indicators);

  const handleSave = () => {
    if (onEdit) onEdit(editedIndicators);
    setIsEditing(false);
  };

  const updateIndicator = (index: number, value: string) => {
    const updated = [...editedIndicators];
    updated[index] = value;
    setEditedIndicators(updated);
  };

  const addIndicator = () => {
    setEditedIndicators([...editedIndicators, '']);
  };

  const removeIndicator = (index: number) => {
    setEditedIndicators(editedIndicators.filter((_, i) => i !== index));
  };

  if (isEditing) {
    return (
      <div className="mt-6 p-4 rounded-lg bg-emerald-500/30 border-2 border-emerald-400">
        <h4 className="text-emerald-200 font-semibold mb-3 text-sm">✅ When this worked</h4>
        <div className="space-y-2 mb-3">
          {editedIndicators.map((indicator, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={indicator}
                onChange={(e) => updateIndicator(index, e.target.value)}
                className="flex-1 bg-emerald-900/50 text-emerald-100 px-2 py-1 rounded outline-none text-sm"
                placeholder="Success indicator"
              />
              <button
                onClick={() => removeIndicator(index)}
                className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-xs"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={addIndicator}
            className="text-emerald-300 text-xs hover:text-emerald-200"
          >
            + Add indicator
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-xs"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditedIndicators(indicators);
              setIsEditing(false);
            }}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 rounded-lg bg-emerald-500/20 border border-emerald-400/30 relative group">
      <h4 className="text-emerald-200 font-semibold mb-3 text-sm">✅ When this worked</h4>
      <ul className="space-y-1.5">
        {indicators.map((indicator, index) => (
          <li key={index} className="text-emerald-300 text-sm">{indicator}</li>
        ))}
      </ul>
      {isEditMode && onEdit && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-3 right-3 p-1 rounded bg-emerald-600 hover:bg-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="size-3 text-white" />
        </button>
      )}
    </div>
  );
}

interface MicroBranchProps {
  branches: Array<{
    condition: string;
    action: string;
  }>;
  onEdit?: (newBranches: Array<{ condition: string; action: string }>) => void;
}

export function MicroBranch({ branches, onEdit }: MicroBranchProps) {
  const { isEditMode } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editedBranches, setEditedBranches] = useState(branches);

  const handleSave = () => {
    if (onEdit) onEdit(editedBranches);
    setIsEditing(false);
  };

  const updateBranch = (index: number, field: 'condition' | 'action', value: string) => {
    const updated = [...editedBranches];
    updated[index][field] = value;
    setEditedBranches(updated);
  };

  const addBranch = () => {
    setEditedBranches([...editedBranches, { condition: '', action: '' }]);
  };

  const removeBranch = (index: number) => {
    setEditedBranches(editedBranches.filter((_, i) => i !== index));
  };

  if (isEditing) {
    return (
      <div className="mt-4 p-4 rounded-lg bg-amber-500/30 border-2 border-amber-400">
        <h4 className="text-amber-200 font-semibold mb-3 text-sm">⚡ If this happens, do this</h4>
        <div className="space-y-3 mb-3">
          {editedBranches.map((branch, index) => (
            <div key={index} className="space-y-2 p-3 bg-amber-900/30 rounded border border-amber-600/30">
              <div className="flex gap-2 items-start">
                <span className="text-amber-300 text-sm mt-2">If</span>
                <input
                  type="text"
                  value={branch.condition}
                  onChange={(e) => updateBranch(index, 'condition', e.target.value)}
                  className="flex-1 bg-amber-900/50 text-amber-100 px-2 py-1 rounded outline-none text-sm"
                  placeholder="Condition"
                />
                <button
                  onClick={() => removeBranch(index)}
                  className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-xs"
                >
                  ×
                </button>
              </div>
              <div className="flex gap-2 items-start ml-4">
                <span className="text-amber-300 text-sm mt-2">→</span>
                <input
                  type="text"
                  value={branch.action}
                  onChange={(e) => updateBranch(index, 'action', e.target.value)}
                  className="flex-1 bg-amber-900/50 text-amber-100 px-2 py-1 rounded outline-none text-sm"
                  placeholder="Action"
                />
              </div>
            </div>
          ))}
          <button
            onClick={addBranch}
            className="text-amber-300 text-xs hover:text-amber-200"
          >
            + Add branch
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-xs"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditedBranches(branches);
              setIsEditing(false);
            }}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 rounded-lg bg-amber-500/20 border border-amber-400/30 relative group">
      <h4 className="text-amber-200 font-semibold mb-3 text-sm">⚡ If this happens, do this</h4>
      <div className="space-y-3">
        {branches.map((branch, index) => (
          <div key={index}>
            <div className="text-amber-200 font-medium text-sm">If {branch.condition}</div>
            <div className="text-amber-300 text-sm mt-1 ml-4">→ {branch.action}</div>
          </div>
        ))}
      </div>
      {isEditMode && onEdit && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-3 right-3 p-1 rounded bg-amber-600 hover:bg-amber-700 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="size-3 text-white" />
        </button>
      )}
    </div>
  );
}

interface ChecklistProps {
  items: string[];
  completionMessage: string;
}

export function Checklist({ items, completionMessage }: ChecklistProps) {
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));

  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const allChecked = checked.every(Boolean);

  return (
    <div className="mt-6 p-4 rounded-lg bg-indigo-500/20 border border-indigo-400/30">
      <h4 className="text-indigo-200 font-semibold mb-3 text-sm">☑️ Live checklist</h4>
      <div className="space-y-2 mb-4">
        {items.map((item, index) => (
          <motion.label
            key={index}
            className="flex items-start gap-3 cursor-pointer p-2 rounded hover:bg-indigo-500/10 transition-colors"
            whileHover={{ x: 2 }}
          >
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() => toggleCheck(index)}
              className="mt-0.5 size-4 rounded border-indigo-400/50 bg-indigo-900/30 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer"
            />
            <span className={`text-sm ${checked[index] ? 'text-indigo-200 line-through' : 'text-indigo-300'}`}>
              {item}
            </span>
          </motion.label>
        ))}
      </div>
      {allChecked && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-lg bg-green-500/30 border border-green-400/40"
        >
          <p className="text-green-200 text-sm font-medium">
            ✓ {completionMessage}
          </p>
        </motion.div>
      )}
    </div>
  );
}

interface IfSkippedProps {
  consequences: string[];
  onEdit?: (newConsequences: string[]) => void;
}

export function IfSkipped({ consequences, onEdit }: IfSkippedProps) {
  const { isEditMode } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editedConsequences, setEditedConsequences] = useState(consequences);

  const handleSave = () => {
    if (onEdit) onEdit(editedConsequences);
    setIsEditing(false);
  };

  const updateConsequence = (index: number, value: string) => {
    const updated = [...editedConsequences];
    updated[index] = value;
    setEditedConsequences(updated);
  };

  const addConsequence = () => {
    setEditedConsequences([...editedConsequences, '']);
  };

  const removeConsequence = (index: number) => {
    setEditedConsequences(editedConsequences.filter((_, i) => i !== index));
  };

  if (isEditing) {
    return (
      <div className="mt-4 p-3 rounded-lg bg-orange-500/30 border-2 border-orange-400">
        <div className="flex items-start gap-2 mb-3">
          <XCircle className="size-4 text-orange-300 mt-0.5 shrink-0" />
          <h4 className="text-orange-200 font-semibold text-sm">If skipped</h4>
        </div>
        <div className="space-y-2 ml-6">
          {editedConsequences.map((consequence, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={consequence}
                onChange={(e) => updateConsequence(index, e.target.value)}
                className="flex-1 bg-orange-900/50 text-orange-100 px-2 py-1 rounded outline-none text-sm"
                placeholder="Consequence"
              />
              <button
                onClick={() => removeConsequence(index)}
                className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-xs"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={addConsequence}
            className="text-orange-300 text-xs hover:text-orange-200"
          >
            + Add consequence
          </button>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-xs"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditedConsequences(consequences);
              setIsEditing(false);
            }}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 p-3 rounded-lg bg-orange-500/20 border border-orange-400/30 relative group">
      <div className="flex items-start gap-2">
        <XCircle className="size-4 text-orange-300 mt-0.5 shrink-0" />
        <div>
          <h4 className="text-orange-200 font-semibold mb-2 text-sm">If skipped</h4>
          <ul className="space-y-1">
            {consequences.map((consequence, index) => (
              <li key={index} className="text-orange-300 text-sm">{consequence}</li>
            ))}
          </ul>
        </div>
      </div>
      {isEditMode && onEdit && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-2 right-2 p-1 rounded bg-orange-600 hover:bg-orange-700 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Edit2 className="size-3 text-white" />
        </button>
      )}
    </div>
  );
}