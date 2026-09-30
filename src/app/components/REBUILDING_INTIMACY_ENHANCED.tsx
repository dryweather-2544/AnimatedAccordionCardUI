// Enhanced Rebuilding Intimacy section for STEP 2
// Replace the "Rebuilding intimacy" nested item in App.tsx with this content

{
  label: "Rebuilding Intimacy",
  content: (
    <div className="space-y-4">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
        <p className="text-slate-400 text-xs uppercase tracking-wide mb-2">Post-purchase connection reset</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-blue-400 text-lg">🔍</span>
            <div>
              <p className="text-slate-300 font-medium">Purpose</p>
            </div>
          </div>
        </div>
        
        <OneLiner text="Re-establish emotional connection immediately after a transaction" />
        
        <div className="space-y-3 text-sm leading-relaxed">
          <p className="text-slate-200">A purchase automatically creates distance. The fan shifts from "we're flirting" to "I paid." If you don't actively close that gap, the interaction cools and momentum dies. This step exists to bring the fan back into intimacy, not leave them sitting alone with content.</p>
        </div>
      </div>
      
      <div className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-4 space-y-3">
        <div className="flex items-start gap-2">
          <span className="text-sm">📌</span>
          <p className="text-slate-300 font-medium text-sm">What this step actually does</p>
        </div>
        <div className="space-y-2 text-sm text-slate-300">
          <p>Rebuilding intimacy bridges the psychological gap between:</p>
          <ul className="space-y-1 ml-4">
            <li className="text-slate-300">"I unlocked something"</li>
            <li className="text-slate-300">"We're still connected"</li>
          </ul>
          <p className="mt-3">A short acknowledgment reassures the fan. You did not disappear once they paid. This is where many chats fail. Not because the content was bad. Because the writer mentally moved on instead of staying present.</p>
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
      />
      
      <IfSkipped consequences={[
        "Chat goes cold after the unlock",
        "Fan consumes silently and disengages",
        "No emotional bridge to the next step",
        "Next PPV feels abrupt or forced"
      ]} 
      note="This is one of the most common reasons chats stall after a purchase." />
      
      <DecisionCheck 
        conditions={[
          { condition: "the fan reacts briefly", action: "Mirror their energy and keep it light" },
          { condition: "the fan goes quiet", action: "Re-engage immediately with warmth" },
          { condition: "the fan reacts strongly", action: "Acknowledge first, escalate later" }
        ]}
        note="Never jump straight into selling again without reconnecting."
      />
      
      <WhenThisWorked indicators={[
        "Fan continues chatting after unlocking",
        "Tone stays flirty, not transactional",
        "Responses don't shorten",
        "Emotional energy remains steady"
      ]} />
      
      <div className="bg-slate-800/40 border-l-4 border-amber-500/50 p-4 space-y-2">
        <div className="flex items-start gap-2">
          <span className="text-lg">🧠</span>
          <div className="space-y-2">
            <p className="text-slate-300 font-medium">What you need to understand</p>
            <p className="text-slate-200 text-sm font-semibold">A purchase is not intimacy.</p>
            <p className="text-slate-200 text-sm">Intimacy has to be re-established immediately after.</p>
            <p className="text-slate-300 text-sm mt-2">If you skip this step, the experience breaks. Even if the content was perfect.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-lg p-4 space-y-2">
        <div className="flex items-start gap-2">
          <span className="text-lg">🔑</span>
          <div className="space-y-2">
            <p className="text-blue-300 font-semibold text-sm">Core takeaway for trainees</p>
            <p className="text-slate-200 text-sm font-medium">Rebuilding intimacy is not optional.</p>
            <p className="text-slate-200 text-sm">It is the glue that holds the experience together after money changes hands.</p>
            <div className="mt-3 space-y-1">
              <p className="text-slate-300 text-sm">Without it, momentum collapses.</p>
              <p className="text-slate-300 text-sm">With it, continuation feels natural.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}