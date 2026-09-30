import { CopyPastePrompts } from "./ActionableComponents";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import step2Stage1 from "figma:asset/db860369029bb653ee347032caae6240e7beb4f4.png";
import step2Stage3 from "figma:asset/bd1d73b846ce1e95a98ae58b2b380edbee8101ce.png";
import step2Stage5 from "figma:asset/1a9f250115d92c116387e388bfdf04390f58019a.png";

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
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
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

export const STEP2_V2_NESTED_ITEMS = [
  {
    label: "STAGE 1: The Initial Conversion & Reassurance ($15)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Spontaneity to Spending</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase documents the moment of the first successful transaction and the immediate post-sale actions. Its goal is to use <strong>spontaneous, exclusive framing</strong> to secure the first low-stakes unlock, condition the client to spend, and prevent <em>buyer's remorse</em> by immediately turning the transaction back into a personal interaction.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90">
            The goal is not profit, but <strong>behavioral conditioning</strong>. By framing the content as a rare, mood-based share ("feeling risky today") and asking for a promise to stay ("don't leave me"), you create irresistible urgency and bypass the transactional mindset. Immediately after the unlock, the writer must ask an engagement question ("what part caught your attention the most?") to ensure the client is focused on the <em>pleasure</em> of the content, not the <em>cost</em>.
          </p>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Execution</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>1. The Spontaneous Frame:</strong> Send the low-priced PPV with language that makes it feel exclusive ("I don't usually do this," "something about our chat made me want to share").</p>
            <p><strong>2. Anticipation & Urgency:</strong> Use hooks like "I want to tell you what I think as SOON as you take a peek" (with capitalized urgency) to tie the unlock to a personalized reward (your reply).</p>
            <p><strong>3. The Aftercare Bridge:</strong> Immediately follow the unlock with a specific, positive question. This keeps the client active and prevents the chat from going cold, which is the necessary bridge to Step 2.</p>
          </div>
        </div>

        <ClickableImage src={step2Stage1} alt="Sending the $15 PPV with intrigue" />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-2 opacity-90">
            <p>"I really can't wait to hear back from you right now.. I dont usually do this.. but something has me really feeling risky today 🥵😈 and I want to tell you what i think as SOON as you take a peek"</p>
            <p>"i don't usually send little moments like this, but something about our chat made me want to share it with you &lt;3"</p>
            <p><em>[$15.00 PPV Sent]</em></p>
            <p>"tell me honestly.. what part caught your attention the most? 😊"</p>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "I really can't wait to hear back from you right now.. I dont usually do this.. but something has me really feeling risky today 🥵😈 and I want to tell you what i think as SOON as you take a peek",
            "i don't usually send little moments like this, but something about our chat made me want to share it with you <3",
            "tell me honestly.. what part caught your attention the most? 😊"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            The sale is validated when: The client unlocks without price resistance. They respond immediately to your engagement question, describing what they liked. <strong>Critical:</strong> There is no silence, ghosting, or evidence of <em>buyer's remorse</em> after the unlock. The conversation continues naturally, confirming they are ready to proceed to the up-sell.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 2: Collaborative Fantasy & Escalation",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Visualization to Emotional Investment</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase's purpose is to transition the client from a passive consumer of the $15 PPV to an <strong>active, emotionally invested co-creator</strong> of the next sexual fantasy. By leveraging previously gathered personal details (like height contrast) and offering explicit binary choices, you force the client to mentally participate in the escalation.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            After the first unlock, the fantasy must feel <strong>uniquely theirs</strong>. You achieve this by using personal details (like the 5'4 vs. 6-foot contrast) to anchor the scene in reality, creating a vivid power dynamic. Offering a <strong>binary choice</strong> (where both options escalate) shifts the client's decision from <em>whether</em> to engage to <em>how</em> to engage.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            When they respond with their own details ("I start by rubbing my hand..."), they are no longer being sold to; they are <strong>emotionally investing</strong> in the next tier, which naturally justifies the $35 price.
          </p>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Execution</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>1. Leverage Contrast:</strong> Use the client's physical details (e.g., height) to frame the next fantasy and create a specific scene and dynamic (e.g., "now imagine pulling me back into your lap...").</p>
            <p><strong>2. Provide Specificity:</strong> Use vivid physical and action words (e.g., "pulling me back," "pinch my lil nipples") that are easy to visualize.</p>
            <p><strong>3. Offer Binary Choice:</strong> Present two explicit options where both guarantee escalation. This ensures the focus remains on <em>action</em> and <em>fantasy</em> rather than hesitation.</p>
            <p><strong>4. Validate Co-Creation:</strong> Acknowledge and build upon the specific details they add to the fantasy ("The naughtier, the better"), reinforcing their role as an equal participant.</p>
          </div>
        </div>

        <ClickableImage src={step2Stage3} alt="Building collaborative fantasy with physical detail" />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-2 opacity-90">
            <p>"I'm only 5'4 hehe 😊 now imagine pulling me back into your lap and holding me there for a second 💕"</p>
            <p>"i wonder ... are you going to suck on them ? or pinch my lil nipples to make me moan as we make out ?"</p>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "i'm only 5'4 hehe 😊 now imagine pulling me back into your lap and holding me there for a second 💕",
            "i wonder ... are you going to suck on them ? or pinch my lil nipples to make me moan as we make out ?",
            "tell me what you'd do first... would you start gentle or would you grab me right away?"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <p className="text-base leading-relaxed opacity-90">
            <strong>The fantasy is locked when:</strong> The client <strong>adds their own specific fantasy details</strong> (e.g., describing what they do next). Their messages become longer and more descriptive. They escalate the fantasy beyond your binary choice. Emotional investment is visible in their active, co-creative responses, confirming they are ready to proceed to the final step of the up-sell.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 3: Sensory Richness & Conversion ($35)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Maximize Sensory Impact to Justify Price Jump</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase is the climax of the up-sell. Its goal is to use the <strong>deep emotional investment</strong> and <strong>collaborative fantasy</strong> built in the previous stages to justify the $35 price by dramatically elevating the sensory experience of the content. By strategically using auditory and spontaneous visual cues, you make the content feel irresistible, high-value, and personal.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            The client is ready to spend again, but the price jump must be justified. You achieve this by shifting the focus from simply <em>seeing</em> to <strong>hearing and experiencing</strong> the content. Language like <strong>HEAR</strong> creates sensory richness that makes the content feel premium.
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            The <strong>spontaneous frame</strong> ("I just HAD to record this") signals loss of control, bypassing a calculated sales mindset. The immediate <strong>playful confession</strong> post-send prevents <em>buyer's remorse</em> and maintains the active, flirty dynamic, conditioning the client for the next tier.
          </p>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Execution</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>1. Signal Spontaneity:</strong> Use charged language and capitals (<strong>HAD</strong>) to make the content seem like an immediate, irresistible impulse driven by their chat.</p>
            <p><strong>2. Inject Sensory Details:</strong> Emphasize non-visual elements (like <strong>HEAR</strong> how wet) to elevate the perception of the content's quality and exclusivity.</p>
            <p><strong>3. Send at Peak:</strong> Drop the PPV immediately following the vivid description when anticipation is at its maximum.</p>
            <p><strong>4. Post-Unlock Confession:</strong> Immediately follow the PPV with a short, playful confession (e.g., "I've been a bit naughty...") to close the transactional gap and invite a positive, validating response.</p>
          </div>
        </div>

        <ClickableImage src={step2Stage5} alt="The $35 unlock with sensory detail" />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-2 opacity-90">
            <p>"good cos i just <strong>HAD</strong> to record this for you now love 🥰🥰"</p>
            <p>"you're really going love how i showing you my soft ass and perfect tits .. not to mention i added an entire video where you can <strong>HEAR</strong> how wet my pussy already is 🥵"</p>
            <p><em>[$35.00 PPV Sent]</em></p>
            <p>"well baby.. im not going to lie! hehe i have been a bit naughty since you got the last one ! 😈 i hope you dont mind ?"</p>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "good cos i just HAD to record this for you now love 🥰🥰 you're really going love how i showing you my soft ass and perfect tits .. not to mention i added an entire video where you can HEAR how wet my pussy already is 🥵",
            "well baby.. im not going to lie! hehe i have been a bit naughty since you got the last one ! 😈 i hope you dont mind ?",
            "I couldn't help myself.. you got me so worked up I just HAD to make this for you"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <p className="text-base leading-relaxed opacity-90">
            <strong>Conversion is Confirmed When:</strong> They unlock the $35 tier without hesitation. They immediately validate the escalation by saying things like <strong>"The naughtier, the better"</strong>. There is no silence or <em>buyer's remorse</em> post-unlock. The intimate, active dynamic remains, signaling readiness for the next stage.
          </p>
        </div>
      </div>
    )
  }
];