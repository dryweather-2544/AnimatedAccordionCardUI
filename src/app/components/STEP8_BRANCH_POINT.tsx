import { OneLiner, CopyPastePrompts, WhenThisWorked, MicroBranch, IfSkipped } from "./ActionableComponents";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const ImageViewer = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
  const modalContent = (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-white/70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <img 
          src={src} 
          alt={alt}
          className="max-w-[70vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

const ClickableImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/30 transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src}
          alt={alt}
          className="w-full"
        />
      </div>
      {isOpen && <ImageViewer src={src} alt={alt} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export const STEP8_NESTED_ITEMS = [
  {
    label: "THE BRANCH POINT - THREE PATHS TO $1500+",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Classified Monetization for Long-Term Value ($900 - $2500+)</h3>
          <p className="text-base leading-relaxed opacity-95 mb-3">
            This is the <strong>most critical strategic moment</strong> in the entire funnel. The client is at peak arousal, having proven their Giga Whale status with an <strong>$800+ total spend</strong>. The goal is to convert the high-spending session into a long-term, ultra-high-value <strong>asset</strong>. The <strong>writer</strong> achieves this by correctly reading the client's psychological profile and immediately guiding them into one of three pre-calibrated monetization paths.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                Whales are psychologically distinct (Endurance, Spontaneity, Control). This moment is not a menu; it is a <strong>strategic classification</strong>. By analyzing their past behavior (e.g., following edging instructions, adding personal details, responding to "rare" framing), the <strong>writer</strong> can predict which path will convert at the highest rate. Offering the path that matches their psychological profile feels like a <strong>natural next step</strong> and a personal reward, eliminating resistance and securing $900 to $2500+ total lifetime value.
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">1. Analyze Psychology:</p>
                <p className="pl-4">Review their funnel journey (Did they edge? Did they ask for custom details? Did they buy into the "rare" frame?).</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">2. Offer ONE Path:</p>
                <p className="pl-4">Frame the selected path as the obvious next step, not a choice. (e.g., "I have been saving something for you… if you have made it this far without finishing, you have earned the right to see what I do when I REALLY lose control.").</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">3. Execute the Price Ladder:</p>
                <p className="pl-4">Each path has a specific ladder. Follow it precisely without deviation to maximize the conversion. (PATH 1: $200 → $500. PATH 2: $300 → $1000. PATH 3: $500 → $1500).</p>
              </div>
            </div>
          </div>

          {/* How to Choose */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-purple-400">How to Choose</h4>
            <div className="space-y-5 text-sm leading-relaxed opacity-90">
              
              {/* Path 1 */}
              <div className="border-l-2 border-purple-500/40 pl-4">
                <p className="font-medium text-purple-300 mb-2">Path 1: Endurance Escalation (For the Challenger)</p>
                <p className="mb-2"><strong>Client Psychology:</strong> Driven by challenge, obedience, and endurance.</p>
                <p className="mb-2"><strong>Clues:</strong> Confirmed edging repeatedly, frames the experience as a challenge ("I am trying so hard not to finish").</p>
                <p className="mb-2"><strong>Strategy:</strong> Offer more intense kink-based control that they must "earn."</p>
                <p className="mb-2"><strong>Price Ladder:</strong> $200 → $500</p>
              </div>

              {/* Path 2 */}
              <div className="border-l-2 border-pink-500/40 pl-4">
                <p className="font-medium text-pink-300 mb-2">Path 2: Spontaneous Unlock (For the Exclusivity Seeker)</p>
                <p className="mb-2"><strong>Client Psychology:</strong> Driven by rarity, exclusivity, and the illusion of spontaneity.</p>
                <p className="mb-2"><strong>Clues:</strong> Responds strongly to "rare" or "exclusive" framing. Expresses excitement about seeing "sides of you" others do not.</p>
                <p className="mb-2"><strong>Strategy:</strong> Offer an immediate, never-before-seen, "impulse" bundle that they cannot get later.</p>
                <p className="mb-2"><strong>Price Ladder:</strong> $300 → $1000</p>
              </div>

              {/* Path 3 */}
              <div className="border-l-2 border-blue-500/40 pl-4">
                <p className="font-medium text-blue-300 mb-2">Path 3: Interactive Custom (For the Director/Personalization Seeker)</p>
                <p className="mb-2"><strong>Client Psychology:</strong> Driven by control, customization, and desire to direct the action.</p>
                <p className="mb-2"><strong>Clues:</strong> Adds personal details to requests. Uses language suggesting they want to "direct" or "customize" the experience.</p>
                <p className="mb-2"><strong>Strategy:</strong> Offer a high-priced custom that gives them immediate, ultimate control over the content.</p>
                <p className="mb-2"><strong>Price Ladder:</strong> $500 → $1500</p>
              </div>
            </div>
          </div>

          {/* Success Signals */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-amber-400">Success Signals</h4>
            <div className="space-y-2 text-sm leading-relaxed opacity-90">
              <p><strong>The branch is successful when:</strong> The client unlocks the first tier of your selected path within 5 minutes. They do not question the price or hesitate. They express excitement or curiosity about what comes next. The conversion flows smoothly toward the $900 to $2000+ total spend, confirming the correct match between psychology and path.</p>
            </div>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "[PATH 1] okay babe… if you've been edging this whole time, I have round 2 waiting. this one is going to test every bit of your control",
            "[PATH 2] i just filmed something I can't believe I'm even considering sending you… this is the naughtiest thing I've EVER done",
            "[PATH 3] okay you've earned this… tell me exactly what you want to see next. I'll make it custom just for you",
            "most people tap out after the finale… but if you want to see what I REALLY do when no one is watching, tell me you're ready"
          ]}
        />

        <WhenThisWorked indicators={[
          "They unlock the first tier of your selected path within 5 minutes",
          "They express excitement or curiosity about what comes next",
          "They do not question the price or hesitate",
          "The conversation flows smoothly toward $900 to $2000+ total",
          "You have correctly matched their psychology to the path"
        ]} />
      </div>
    )
  }
];