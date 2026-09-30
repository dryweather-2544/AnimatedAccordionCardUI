import { OneLiner, CopyPastePrompts, WhenThisWorked, MicroBranch, IfSkipped } from "./ActionableComponents";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import step6Stage1 from "figma:asset/f5485ca14fa48d6f4a2275a3cba3b875d2058b10.png";
import step6Stage2 from "figma:asset/0abbc6cb81dce11f837767294069516b370f5f42.png";
import step6Stage3 from "figma:asset/1a96fc1a823569eece4f383224d1e36eb4508e0f.png";

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

export const STEP6_NESTED_ITEMS = [
  {
    label: "STAGE 1: Gratitude & Reward Frame (The Scarcity Anchor)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Transaction to Reciprocal Reward</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase is the immediate, crucial pause after the high-value $195 unlock. Its purpose is to <strong>stop the relentless extraction</strong> and replace it with genuine-sounding gratitude. By immediately validating the client ("so rare that I feel like this") and reframing the next tier as a <strong>reward</strong> ("since you're treating me like a princess") and <strong>exclusive access</strong> (to "first videos"), you eliminate the transactional feeling and test their capacity for ultra-high-value, emotionally driven spending.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                By this point, the client has spent over $200. Pushing another sale will trigger resistance. You must pause to create <strong>reciprocity</strong>. Framing the next tier as a <strong>reward</strong> for their loyalty makes them feel special and deserving of the access, not simply <strong>sold</strong> to. Mentioning <strong>exclusive archive content</strong> (like "first videos") anchors the $200 price in rarity, convincing them they are receiving something no one else gets. This emotional payoff is what keeps them engaged as a "Giga Whale."
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">1. Pause and Validate:</p>
                <p className="pl-4">Immediately pause the escalation to show sincere gratitude and validate their value ("It's so rare that I feel like this").</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">2. The Reward Reframe:</p>
                <p className="pl-4">Use the critical phrase <strong>"since you're treating me like a princess"</strong> to explicitly frame the next tier as appreciation, not commerce.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">3. Introduce Scarcity:</p>
                <p className="pl-4">Mention specific, unshared content (like "one of my first videos") to establish the final tier as a highly privileged access pass.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">4. Role Reversal:</p>
                <p className="pl-4">Use permission language like "just let go of that cock.. let me treat YOU" to take control, prolong the finale, and reinforce that the next step is a gift, not a pitch.</p>
              </div>
            </div>
          </div>

          {/* Example Scripts */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-purple-400">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p className="italic">
                "hehe, do you like that a lot baby?.. i'm glad and honestly it's so rare that i feel like this on here" "i'm actually thinking of making you something really hot that i dont do a lot.. and maybe showing you one of my first videos on here.. 😳 <strong>since youre treating me like a princess</strong>" "just let go of that cock for a bit... let treat YOU for a second"
              </p>
            </div>
          </div>

          {/* Success Signals */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-amber-400">Success Signals</h4>
            <div className="space-y-2 text-sm leading-relaxed opacity-90">
              <p>• They respond positively to the validation and gratitude</p>
              <p>• They express specific curiosity about the exclusive content</p>
              <p>• The transactional feeling has been replaced with a sense of <strong>reciprocal appreciation</strong></p>
              <p>• They are willing to wait for the "reward" instead of rushing to finish</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step6Stage1} alt="Gratitude and reward framing" />

        <CopyPastePrompts 
          prompts={[
            "honestly it's so rare that i feel like this on here .. i'm SO glad you caught me in this mood",
            "i'm actually thinking of making you something really hot that i dont do a lot..",
            "and maybe showing you one of my first videos on here.. 🤭 since youre treating me like a princess",
            "just let go of that cock for a bit ... let treat YOU for a second"
          ]}
        />
      </div>
    )
  },
  {
    label: "STAGE 2: Archive Access & Whale Identification",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Shifting the Illusion to Rarity</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase's goal is to strategically retire the "spontaneous, live" illusion and replace it with the equally powerful illusion of <strong>Historical Scarcity</strong>. By offering access to exclusive archive content, you justify the massive $200 price (the second of this tier) by framing the content as a unique, historical reward, which serves as the <strong>Giga Whale Test</strong> for a client capable of $400+ spend.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                The "live illusion" eventually breaks. You preempt this by moving to the <strong>Archive Scarcity Frame</strong>. You openly admit the content is old ("first riding solo I ever made"), but the rarity is what justifies the price. <strong>Origin Story Weight:</strong> Adding context ("only been on OF for like 4 days") makes the content feel like historical, unpolished footage that few have seen. This creates a powerful emotional anchor that commands premium pricing. <strong>Whale Test:</strong> By locking in verbal commitment for this $200 tier <em>after</em> the client has already spent $200+, you confirm their capacity for $400+ spend in a single session, identifying them as a Giga Whale.
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">1. The Frame Shift:</p>
                <p className="pl-4">Transition from the live illusion to <strong>Exclusive Archive Content</strong>.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">2. Rarity and Origin:</p>
                <p className="pl-4">Frame the video as historical and rare (e.g., "first riding solo," "only been on OF for 4 days").</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">3. Kink Personalization:</p>
                <p className="pl-4">Personalize the archive video by explicitly linking it to their confirmed kink (e.g., "I think you'd edge SUPER hard to this").</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">4. Lock in Commitment:</p>
                <p className="pl-4">Ask for final verbal commitment ("You ready?" / "I'd love to see it") <em>before</em> revealing the price.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">5. Send as Reward:</p>
                <p className="pl-4">The $200 PPV is sent as the reward for their loyalty and trust, fulfilling the gratitude framing from Stage 1.</p>
              </div>
            </div>
          </div>

          {/* Example Scripts */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-purple-400">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p className="italic">
                "good.. because listen i wanted to show you the first riding solo i ever made... i think you'd edge SUPER hard to this" "i had only been on OF for like 4 days at that point.. 🤷‍♀️" <em>Follow-up:</em> "you ready?"
              </p>
            </div>
          </div>

          {/* Success Signals */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-amber-400">Success Signals</h4>
            <div className="space-y-2 text-sm leading-relaxed opacity-90">
              <p><strong>The Whale Test is Passed When:</strong> They commit verbally before the price appears. They respond positively to the origin story and rarity framing. The price resistance is non-existent at $200 after already spending $200+. You have successfully confirmed they are a Giga Whale capable of ultra-high spend, setting the stage for future high-value engagement.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step6Stage2} alt="Shifting to exclusive archive content" />

        <CopyPastePrompts 
          prompts={[
            "good.. because listen i wanted to show you the first riding solo i ever made... i think you'd edge SUPER hard to this",
            "i had only been on OF for like 4 days at that point.. this is raw as fuck and i barely share it",
            "this is one of my first videos on here that almost no one has seen.. you ready?",
            "i'm thinking of showing you something from my vault that i made when i was brand new.. it's so different from what i make now"
          ]}
        />
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
            This phase's goal is to strategically leverage the most expensive purchase ($200) to <strong>prevent closure</strong> and keep the "milk" going. By immediately framing the content as an <strong>incomplete checkpoint</strong> and leveraging the client's kink (edging), the <strong>writer</strong> ensures the client remains highly engaged, with the belief that the ultimate "finale" is still to come, protecting future revenue.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                Most <strong>writers</strong> treat the $200 unlock as the finale, causing conversation to stop. The <strong>writer</strong> must signal that the true climax is still pending by saying <strong>"if you can last JUST a little longer you're going to let us cum together!!"</strong> This ties the premium tier to the client's confirmed kink (endurance) and ensures they remain in an active state of desire. The premium content becomes a <em>step</em> in the journey, not the end, preserving the momentum needed for the next revenue push (confirming $400+ total spend capacity).
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">1. Delivery with Justification:</p>
                <p className="pl-4">The <strong>writer</strong> sends the $200 content with vivid, maximum descriptive detail to justify the price (e.g., "arching my back and grinding my hips").</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">2. The Incomplete Frame:</p>
                <p className="pl-4">Immediately follow the unlock with the critical, high-stakes promise that suggests a final, ultimate reward is pending. You must <strong>prevent closure</strong> and <strong>sustain action</strong>.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">3. Kink Control:</p>
                <p className="pl-4">Command them not to finish (<strong>"DONT FUCKING CUM THO"</strong>) using their edging kink to prolong the milk and maintain control.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">4. Reward Hook:</p>
                <p className="pl-4">Promise "one or two extras when you tell me what you think" to set up the next tier based on their feedback, not a direct sales pitch.</p>
              </div>
            </div>
          </div>

          {/* Example Scripts */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-purple-400">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p className="italic">
                <strong>Delivery Detail:</strong> "you're gonna love watching me ride this toy, arching my back and grinding my hips for you.. i stretch my tight little holes open so wide, then spin around to show you how my pussy begs for you..." 
              </p>
              <p className="italic">
                <strong>The Promise:</strong> "you know .. it's been SUCH a long time since i've felt this riled up ... <strong>i'll have to spoil you with one or two extras when you tell me what you think of this 😳❤️"</strong>
              </p>
              <p className="italic">
                <strong>The Command:</strong> <strong>"DONT FUCKING CUM THO"</strong> and "if you can last JUST a little longer you're going to let us cum together!!"
              </p>
            </div>
          </div>

          {/* Success Signals */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-amber-400">Success Signals</h4>
            <div className="space-y-2 text-sm leading-relaxed opacity-90">
              <p><strong>The momentum is preserved when:</strong> The client unlocks the $200 tier (confirming $400+ capacity). They <strong>follow the command not to cum</strong> and stay engaged. They respond with curiosity about the "extras" or the "finishing together," not leaving the conversation. This sets the final revenue push before the ultimate finale.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step6Stage3} alt="$200 unlock with finale prolonging" />

        <CopyPastePrompts 
          prompts={[
            "you're gonna love watching me ride this toy, arching my back and grinding my hips for you.. i stretch my tight little holes open so wide",
            "you know .. it's been SUCH a long time since i've felt this riled up... i'll have to spoil you with one or two extras when you tell me what you think of this 🥵❤️",
            "DONT FUCKING CUM THO... this is where you fillllllly get that side of me hehe",
            "if you can last JUST a little longer you're going to let us cum together!!"
          ]}
        />
      </div>
    )
  }
];