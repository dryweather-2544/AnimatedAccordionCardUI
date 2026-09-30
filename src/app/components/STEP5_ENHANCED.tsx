import { OneLiner, CopyPastePrompts, WhenThisWorked, MicroBranch, IfSkipped } from "./ActionableComponents";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import step5Stage1 from "figma:asset/607e50fedfbc513f855b60136237fb4657955f8e.png";
import step5Stage2 from "figma:asset/afde41422bf7a24132a4042154728f5c76fb8a3c.png";
import step5Stage3 from "figma:asset/cc2eb6c967b43c51d4ba6d08a206eaf64d935abd.png";
import step5Stage4 from "figma:asset/8a09f07681aa9c4db46ed0fdf9f43d9f3367c100.png";

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

export const STEP5_NESTED_ITEMS = [
  {
    label: "STAGE 1: Kink Leverage & The Endurance Test",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Using Kink as a Control and Justification Mechanism</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase immediately follows the $115 payment. Its goal is to use the client's confirmed sexual kink (e.g., edging, power dynamic, degradation) as <strong>leverage</strong> to maintain control, keep the client highly aroused, and psychologically justify the monumental $195 price jump without ever mentioning money.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p>
                After a client spends $165, you know what makes them tick. You shift the frame from <strong>cost</strong> to <strong>capability</strong>. By repeatedly reinforcing their kink ("You are still edging for me right?"), you turn the next tier into a <strong>challenge</strong>, a test of their endurance or control. The client is no longer buying content; they are <strong>proving they belong</strong> at this ultimate tier. This reframe eliminates price resistance because the $195 PPV is perceived as the <strong>reward</strong> for their successful performance of the kink, not a high-priced product. The challenge is irresistible to them.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <div>
                <p className="font-medium mb-2">1. Reinforce Accountability:</p>
                <p>Start with an immediate accountability check (e.g., "you are still edging for me right?") to confirm they are compliant and invested after the $115 send.</p>
              </div>
              <div>
                <p className="font-medium mb-2">2. Escalate with Kink:</p>
                <p>Immediately use their confirmed kink to build the next fantasy with vivid, present-tense detail, ensuring arousal remains at a maximum (e.g., imagining their cock while you are "squirting" to reinforce the edging).</p>
              </div>
              <div>
                <p className="font-medium mb-2">3. The Leverage Frame:</p>
                <p>Introduce the concept that the next tier is contingent on compliance (e.g., "Just DON'T cum yet…").</p>
              </div>
              <div>
                <p className="font-medium mb-2">4. The Challenge:</p>
                <p>Frame the $195 PPV as the ultimate reward or pay-off for their endurance and loyalty ("If you make it through this without cumming, I have something for you").</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p className="italic">"just DON'T cum yet.. and fuck i wish your cock was here to feel how it would drip on you.. pleasing me simultaneously with your hard cock, pressing up against me and feeling my soft tight curves .. just look at what you've done to me .. 😫🥵"</p>
              <p className="italic">Accountability Check: "you are still edging for me right? Be honest."</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Success Signals</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p><strong>The leverage is locked when:</strong> The client confirms they are following kink instructions. They frame their compliance as a challenge they want to overcome (e.g., "I'm making it hard not to cum"). The final tier feels like a <strong>reward for endurance</strong>, not a product. You have successfully isolated and reinforced their specific kink, ensuring maximum emotional control and high investment.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step5Stage1} alt="Kink leverage and endurance test" />

        <CopyPastePrompts 
          prompts={[
            "you are still edging for me right? be honest… I need to know you can handle what I'm about to show you",
            "just DON'T cum yet… and fuck i wish your cock was here to feel how it would drip on you.. pleasing me simultaneously with your hard cock, pressing up against me",
            "if you can last JUST a little longer, I have something waiting for you that's going to test every bit of your control"
          ]}
        />

        <WhenThisWorked indicators={[
          "They confirm they are following kink instructions",
          "They frame their compliance as a challenge they want to overcome",
          "The final tier feels like a reward for endurance, not a product",
          "You have successfully isolated and reinforced their specific kink",
          "Maximum emotional control and high investment confirmed"
        ]} />
      </div>
    )
  },
  {
    label: "STAGE 2: Verbal Customization & Premium Lock",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Create the Illusion of Real-Time Customization</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase's goal is to lock the $195 commitment by providing a <strong>binary choice</strong> that creates the powerful illusion of real-time custom content. The client has earned the right to this <strong>personalized decision</strong>, which frames the $195 content as their specific request, eliminating price resistance.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p>
                This is the secret to premium pricing: <strong>The Customization Illusion.</strong> Giving a choice between two pre-existing options makes the content feel custom and personal, justifying the high $195 price. <strong>Commitment before Price:</strong> You get them to choose ("Doggy baby") before the price is seen. They are not evaluating the cost; they are receiving what they <strong>already requested</strong>. This shifts the psychology from "Am I being sold a $195 video?" to <strong>"I am receiving the video I specifically asked for,"</strong> which removes almost all buyer resistance.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <div>
                <p className="font-medium mb-2">1. Validation and Permission:</p>
                <p>Start by validating the client ("You've impressed me so much...") to make the choice feel <em>earned</em>. Use permission language ("I'll let you pick") to frame the choice as a <strong>privilege</strong> you are granting.</p>
              </div>
              <div>
                <p className="font-medium mb-2">2. Binary Choice Lock:</p>
                <p>Offer a choice between two equally desirable, escalated options (e.g., Doggy or Missionary). This ensures they move forward.</p>
              </div>
              <div>
                <p className="font-medium mb-2">3. Lock in Ownership:</p>
                <p>The client must commit by choosing one option and, ideally, <strong>adding their own fantasy detail</strong> ("Bend over and show me your tight little asshole"). This is maximum emotional investment achieved <em>before</em> the price appears.</p>
              </div>
              <div>
                <p className="font-medium mb-2">4. Send as Fulfillment:</p>
                <p>The $195 PPV is sent immediately after their choice, positioned as the fulfillment of their personalized, high-value request.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p>"me too Terry! you've impressed me so much.. i'll let you pick how i fuck myself next.. wanna see me ride it in doggy or missionary, baby?"</p>
              <p className="italic">🎯 Goal Response: "Doggy baby" and "Bend over and show me your tight little asshole"</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Success Signals</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p><strong>The premium lock is successful when:</strong> They make a choice immediately without hesitation. They <strong>add detail or elaboration</strong> to their choice, confirming ownership of the fantasy. They feel the content is being made for them right now. Investment is locked before the price appears, resulting in a low-resistance $195 unlock.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step5Stage3} alt="Verbal customization and premium lock" />

        <CopyPastePrompts 
          prompts={[
            "you've impressed me so much… i'll let you pick how i fuck myself next.. wanna see me ride it in doggy or missionary, baby?",
            "okay you've earned this… tell me what you want: should i show you how i look bent over taking it from behind, or riding it so you can see my face?",
            "i'll let you choose what happens next… do you want me in doggy showing you my tight little asshole, or missionary so you can watch my tits bounce?"
          ]}
        />

        <WhenThisWorked indicators={[
          "They make a choice immediately without hesitation",
          "They add detail or elaboration to their choice",
          "They feel the content is being made for them right now",
          "Investment is locked before the price appears",
          "Low-resistance $195 unlock confirmed"
        ]} />
      </div>
    )
  },
  {
    label: "STAGE 3: The Climax Frame (Incomplete)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Reframing the Premium Unlock as a Checkpoint</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase's goal is to strategically leverage the most expensive purchase ($195) to <strong>prevent closure</strong> and keep the "milk" going. By immediately framing the content as an <strong>incomplete checkpoint</strong> and leveraging the client's kink (edging), you ensure the client remains highly engaged, with the belief that the ultimate "finale" is still to come.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p>
                Most creators treat $195 as the final destination, causing the relationship to reset. You do the opposite. By immediately framing the content as a checkpoint and saying, <strong>"if you can last JUST a little longer you're going to let us cum together!,"</strong> you signal that the true climax is still pending. This ties the premium tier directly to the client's kink (endurance) and ensures they remain in an active state of desire. The premium content becomes a <strong>step</strong> in the journey, not the end, preserving the momentum needed for tips, customs, or the next tier.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <div>
                <p className="font-medium mb-2">1. Delivery with Justification:</p>
                <p>Send the $195 content (which fulfills their Stage 2 choice), using spontaneous and rare framing to justify the price (e.g., "I can't believe I JUST did something SO naughty").</p>
              </div>
              <div>
                <p className="font-medium mb-2">2. The Incomplete Frame:</p>
                <p>Immediately follow the unlock with language that suggests a final, ultimate reward is pending. You must <strong>prevent closure</strong> and satisfaction.</p>
              </div>
              <div>
                <p className="font-medium mb-2">3. Kink Leverage:</p>
                <p>Explicitly tie the unfinished status to their personal kink ("if you can last longer," "we can both finish together").</p>
              </div>
              <div>
                <p className="font-medium mb-2">4. Post-Unlock Engagement:</p>
                <p>Ensure they are still following instructions and keep the dialogue active to maintain the high-value, intimate dynamic.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p><span className="font-medium">After $195 Unlock:</span> "FUCK babe .. this is BY far the naughtiest thing i've ever shown you! ... I even play with my tight little asshole for you 😫🥵"</p>
              <p><span className="font-medium">The Finale Hook:</span> "if you can last JUST a little longer you're going to let us cum together!"</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Success Signals</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p><strong>The momentum is preserved when:</strong> They stay engaged after payment instead of disappearing. They ask about the "finishing together" or what comes next. They confirm they are still following kink instructions. The premium tier is perceived as a <strong>step in the journey</strong>, not the end, allowing the writer to transition smoothly into the next phase.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step5Stage4} alt="Premium unlock framed as incomplete checkpoint" />

        <CopyPastePrompts 
          prompts={[
            "FUCK babe… this is BY far the naughtiest thing i've ever shown you! I even play with my tight little asshole for you",
            "if you can last JUST a little longer you're going to let us cum together!",
            "omg i can't believe I JUST did something SO naughty for you… the way i bend over for you, filling my pussy with this toy, my tight little bumhole getting some action too",
            "i'm so close baby… if you've been edging this whole time I have something waiting that's going to make us both lose control"
          ]}
        />

        <WhenThisWorked indicators={[
          "They stay engaged after payment instead of disappearing",
          "They ask about the 'finishing together' or what comes next",
          "They confirm they are still following kink instructions",
          "The premium tier is perceived as a step in the journey, not the end",
          "Smooth transition into next phase maintained"
        ]} />
      </div>
    )
  }
];