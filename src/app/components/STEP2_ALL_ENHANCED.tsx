import React from 'react';
import { OneLiner, DecisionCheck, WatchFor, DoNotYet, CopyPastePrompts, WhenThisWorked, MicroBranch, Checklist, IfSkipped } from './ActionableComponents';
import { EditableTextBlock } from './EditableTextBlock';

export const REBUILDING_INTIMACY_ITEM = {
  label: "Rebuilding Intimacy",
  content: (
    <div className="space-y-4">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
        <EditableTextBlock 
          contentKey="step2.rebuilding-intimacy.subtitle"
          defaultValue="Post-purchase connection reset"
          className="text-slate-400 text-xs uppercase tracking-wide mb-2"
        />
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-blue-400 text-lg">🔍</span>
            <div>
              <EditableTextBlock 
                contentKey="step2.rebuilding-intimacy.purpose-label"
                defaultValue="Purpose"
                className="text-slate-300 font-medium"
              />
            </div>
          </div>
        </div>
        
        <OneLiner 
          text="Re-establish emotional connection immediately after a transaction"
          onEdit={(newText) => console.log('Edit OneLiner:', newText)}
        />
        
        <div className="space-y-3 text-sm leading-relaxed">
          <EditableTextBlock 
            contentKey="step2.rebuilding-intimacy.explanation"
            defaultValue={'A purchase creates distance. The fan shifts from "we\'re flirting" to "I paid." If you don\'t close that gap, the interaction cools. Momentum dies. This step brings the fan back into intimacy. It stops them from sitting alone with content.'}
            className="text-slate-200"
            multiline
          />
        </div>
      </div>
      
      <div className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4 space-y-3">
        <div className="flex items-start gap-2">
          <span className="text-sm">📌</span>
          <EditableTextBlock 
            contentKey="step2.rebuilding-intimacy.what-does-label"
            defaultValue="What this step actually does"
            className="text-slate-300 font-medium text-sm"
          />
        </div>
        <div className="space-y-2 text-sm text-slate-300">
          <EditableTextBlock 
            contentKey="step2.rebuilding-intimacy.bridges-intro"
            defaultValue="Rebuilding intimacy bridges the psychological gap between:"
            className="text-slate-300"
          />
          <ul className="space-y-1 ml-4">
            <li>
              <EditableTextBlock 
                contentKey="step2.rebuilding-intimacy.gap-1"
                defaultValue={'"I unlocked something"'}
                className="text-slate-300"
              />
            </li>
            <li>
              <EditableTextBlock 
                contentKey="step2.rebuilding-intimacy.gap-2"
                defaultValue={'"We\'re still connected"'}
                className="text-slate-300"
              />
            </li>
          </ul>
          <EditableTextBlock 
            contentKey="step2.rebuilding-intimacy.explanation-detail"
            defaultValue={'A short acknowledgment reassures the fan. You did not disappear once they paid. This is where many chats fail. Not because the content was bad. Because the writer mentally moved on instead of staying present.'}
            className="text-slate-300 mt-3"
            multiline
          />
        </div>
      </div>
      
      <CopyPastePrompts 
        structure={[
          "Acknowledge their reaction or presence",
          "Keep it short and emotionally warm",
          "Maintain flirtation without escalating yet"
        ]}
        prompts={[
          "mm I'm glad to hear that 😈",
          "that makes me happy honestly",
          "I love knowing you enjoyed that"
        ]}
        note="The message should feel effortless, not like a transition or setup."
        onEdit={(data) => console.log('Edited CopyPastePrompts:', data)}
      />
      
      <IfSkipped 
        consequences={[
          "Chat goes cold after the unlock",
          "Fan consumes silently and disengages",
          "No emotional bridge to the next step",
          "Next PPV feels abrupt or forced"
        ]} 
        note="This is one of the most common reasons chats stall after a purchase."
        onEdit={(data) => console.log('Edited IfSkipped:', data)}
      />
      
      <DecisionCheck 
        conditions={[
          { condition: "the fan reacts briefly", action: "Mirror their energy and keep it light" },
          { condition: "the fan goes quiet", action: "Re-engage immediately with warmth" },
          { condition: "the fan reacts strongly", action: "Acknowledge first, escalate later" }
        ]}
        note="Never jump straight into selling again without reconnecting."
        onEdit={(data) => console.log('Edited DecisionCheck:', data)}
      />
      
      <WhenThisWorked 
        indicators={[
          "Fan continues chatting after unlocking",
          "Tone stays flirty, not transactional",
          "Responses don't shorten",
          "Emotional energy remains steady"
        ]}
        onEdit={(data) => console.log('Edited WhenThisWorked:', data)}
      />
      
      <div className="bg-slate-800/40 border-l-4 border-amber-500/50 p-4 space-y-2">
        <div className="flex items-start gap-2">
          <span className="text-lg">🧠</span>
          <div className="space-y-2">
            <EditableTextBlock 
              contentKey="step2.rebuilding-intimacy.understand-label"
              defaultValue="What you need to understand"
              className="text-slate-300 font-medium"
            />
            <EditableTextBlock 
              contentKey="step2.rebuilding-intimacy.understand-1"
              defaultValue="A purchase is not intimacy."
              className="text-slate-200 text-sm font-semibold"
            />
            <EditableTextBlock 
              contentKey="step2.rebuilding-intimacy.understand-2"
              defaultValue="Intimacy has to be re-established immediately after."
              className="text-slate-200 text-sm"
            />
            <EditableTextBlock 
              contentKey="step2.rebuilding-intimacy.understand-3"
              defaultValue="If you skip this step, the experience breaks. Even if the content was perfect."
              className="text-slate-300 text-sm mt-2"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-lg p-4 space-y-2">
        <div className="flex items-start gap-2">
          <span className="text-lg">🔑</span>
          <div className="space-y-2">
            <EditableTextBlock 
              contentKey="step2.rebuilding-intimacy.takeaway-label"
              defaultValue="Core takeaway for trainees"
              className="text-blue-300 font-semibold text-sm"
            />
            <EditableTextBlock 
              contentKey="step2.rebuilding-intimacy.takeaway-1"
              defaultValue="Rebuilding intimacy is not optional."
              className="text-slate-200 text-sm font-medium"
            />
            <EditableTextBlock 
              contentKey="step2.rebuilding-intimacy.takeaway-2"
              defaultValue="It is the glue that holds the experience together after money changes hands."
              className="text-slate-200 text-sm"
            />
            <div className="mt-3 space-y-1">
              <EditableTextBlock 
                contentKey="step2.rebuilding-intimacy.takeaway-without"
                defaultValue="Without it, momentum collapses."
                className="text-slate-300 text-sm"
              />
              <EditableTextBlock 
                contentKey="step2.rebuilding-intimacy.takeaway-with"
                defaultValue="With it, continuation feels natural."
                className="text-slate-300 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};