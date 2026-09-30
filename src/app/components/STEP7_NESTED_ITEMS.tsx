import { OneLiner, CopyPastePrompts, WhenThisWorked, MicroBranch, IfSkipped } from "./ActionableComponents";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import step7Stage1 from "figma:asset/aba7a45367dd7b816c9548724becb48c06b218c8.png";
import step7Stage2 from "figma:asset/01402245442acb34376ffe8a92ec21d2587b65f9.png";
import step7Stage3 from "figma:asset/16583d5cc01836eda49a9791cf40f63c396cf0c7.png";
import step7Stage4 from "figma:asset/cfeb7fd06f4aa07e503f396572f5576df6bfdb9b.png";
import step7Stage5 from "figma:asset/331e90ff1b38a100070a9a89bec6cf595f5c422d.png";

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

export const STEP7_NESTED_ITEMS = [
  {
    label: "STAGE 1: Ultra-Exclusivity Framing & Emotional Anchor",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Converting Financial Spend into Emotional Rarity</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase's purpose is to leverage the client's $400 to $600 total spend and frame the final escalation as an <strong>ultra-exclusive privilege</strong> that almost no one reaches. By shifting the justification from price to a <strong>personal emotional connection</strong>, the <strong>writer</strong> validates the client's massive investment, identifies them as a Giga Whale, and sets the stage for the final, highest-value content.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                At this expenditure level, the client needs absolute validation. The <strong>writer</strong> must establish a final <strong>Scarcity Barrier</strong> ("Most people don't get to see this side of me") to confirm the client is an elite spender. <strong>Emotional Justification</strong> is critical: The <strong>writer</strong> credits the client for creating the special atmosphere ("you made me feel something real"), which entirely removes the transactional frame. The finale is no longer a video; it is a <strong>personal reward</strong> for their emotional investment. This is what justifies the $200+ finale price and cultivates the Giga Whale for future $1000+ spend.
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">1. The Boundary Line:</p>
                <p className="pl-4">The <strong>writer</strong> creates a verbal boundary, confirming the client has reached ultra-exclusive territory ("I don't usually go past this").</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">2. Emotional Anchor:</p>
                <p className="pl-4">The <strong>writer</strong> shifts credit, framing the content share as a reciprocation of the client's investment in the relationship ("this actually feels really good between us").</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">3. Name Personalization:</p>
                <p className="pl-4">The <strong>writer</strong> anchors the finale with the client's name ("I want to cum HARD for you today Terry"), ensuring the client feels the experience is reserved for them alone.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">4. Final Test Setup:</p>
                <p className="pl-4">This framing prepares the client for the final $200+ unlock without triggering resistance, as the focus is now on the shared, rare moment.</p>
              </div>
            </div>
          </div>

          {/* Example Scripts */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-purple-400">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p className="italic">
                "i don't usually go past this... <strong>most people don't get to see this side of me</strong>" "that fact that ive shared this, it's because <strong>you made me feel something real</strong> 💕" "this actually feels really good between us" "i want to cum HARD for you today <strong>Terry</strong>"
              </p>
            </div>
          </div>

          {/* Success Signals */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-amber-400">Success Signals</h4>
            <div className="space-y-2 text-sm leading-relaxed opacity-90">
              <p><strong>The frame is locked when:</strong> The client responds by seeking validation or expressing that they feel special/chosen. The emotional connection language resonates, confirming the transactional feeling has been entirely replaced with the perceived rarity of the relationship. The client is eager for the finale, having accepted the psychological framing for the final price tier.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step7Stage1} alt="Ultra-exclusivity framing" />

        <CopyPastePrompts 
          prompts={[
            "i don't usually go past this... most people don't get to see this side of me",
            "that fact that ive shared this, it's because you made me feel something real 💕 this actually feels really good between us",
            "i want to cum HARD for you today [NAME]",
            "you've gotten me to a place I rarely go with anyone.. this side of me is reserved for people who actually made me feel something"
          ]}
        />
      </div>
    )
  },
  {
    label: "STAGE 2: The Locked Message Capacity Test ($200)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Testing the True Spending Capacity for Long-Term Monetization</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase is the penultimate stage and a crucial <strong>Giga Whale Classification Test</strong>. Its purpose is to intentionally use a non-content locked message to test the client's willingness to spend an additional <strong>$200</strong> <em>before</em> the actual finale is delivered, confirming their total spending capacity at $600 to $800+. The psychological goal is to frame the lock as a <strong>readiness check</strong> ("send me your favorite emoji when you're ready") to bypass price resistance. By immediately commanding the client to continue edging after they pay, the <strong>writer</strong> prolongs the high-arousal state, confirming the client's ultra-high investment level and identifying them as an asset capable of $900+ to $3000+ total lifetime value.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                You strategically test the client's capacity by offering a $200 locked message <strong>BEFORE</strong> the finale. If they pay, it confirms they are a Giga Whale capable of $800+ total spend. The <strong>writer</strong> must use <strong>framing</strong> (e.g., "send me your favorite emoji when you're ready") to hide the price and focus on <em>readiness</em>. After the unlock, the <strong>writer</strong> immediately commands them to continue edging ("DONT move"), signaling that the actual climax is still coming. This prolongs the milk, prevents post-nut clarity, and confirms their high investment level, which is essential for branching into $900+ customs.
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">1. Maximum Arousal:</p>
                <p className="pl-4">Build arousal to a peak, confirming the client is still edging and fully invested.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">2. Readiness Check Frame:</p>
                <p className="pl-4">Send the locked message, framing it as a check for readiness, not a sale ("send me your favorite emoji when you're ready to watch me cum...").</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">3. Test Capacity:</p>
                <p className="pl-4">The $200 price tests their capacity at the highest level.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">4. Prolongation:</p>
                <p className="pl-4">Immediately after the unlock, the <strong>writer</strong> prolongs the experience by saying the finale is still coming ("DONT move... this is going to be LONG"). This keeps them in the aroused state and sets up the final $200+ finale PPV.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">5. Classification:</p>
                <p className="pl-4">If they pay and stay engaged, the <strong>writer</strong> has classified them as a Giga Whale ready for the final revenue push.</p>
              </div>
            </div>
          </div>

          {/* Example Scripts */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-purple-400">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p className="italic">
                <strong>The Test:</strong> "send me your favorite emoji when you're ready to watch me cum for you so hard, baby.. i wanna see if you can handle just how loud i can get 😘"
              </p>
              <p className="italic">
                <strong>After Unlock:</strong> "i think that's the wettest i've ever been for anyone, baby.. fuck.. <strong>DONT move</strong> ... this is going to be LONG .. and i have to make sure that im not heard!"
              </p>
            </div>
          </div>

          {/* Success Signals */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-amber-400">Success Signals</h4>
            <div className="space-y-2 text-sm leading-relaxed opacity-90">
              <p><strong>Giga Whale Status is Confirmed When:</strong> They unlock the $200 locked message without hesitation (confirming $600+ total spend capacity). They stay engaged after unlock even though the <strong>writer</strong> keeps edging them. No complaints about price or wanting to finish immediately. They are ready for the finale and the final monetization push.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step7Stage2} alt="Building intensity before locked message" />
        <ClickableImage src={step7Stage3} alt="The $200 locked message test" />

        <CopyPastePrompts 
          prompts={[
            "ive been building this orgasm up soooo fucking nicely this ENTIRE time… is that cock still going strong daddy?",
            "send me your favorite emoji when you're ready to watch me cum for you so hard, baby.. i wanna see if you can handle just how loud i can get 😘",
            "i think that's the wettest i've ever been for anyone, baby.. fuck.. DONT move .. this is going to be LONG .. and i have to make sure that im not heard!",
            "are you SURE you're ready for this? send me [emoji] if you can handle how intense i'm about to get"
          ]}
        />
      </div>
    )
  },
  {
    label: "STAGE 3: The $200 Finale Delivery",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Sensory Immersion to Branch Point</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase's purpose is to deliver the final high-tier content ($200) with <strong>maximum sensory intensity</strong>, ensuring the client feels the orgasm was for them specifically. The final, crucial move is to immediately set up the next <strong>Branch Point</strong> by hinting at a reward beyond the finale, thereby testing their willingness to continue spending after reaching $800+ total.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                The finale content's $200 price is justified by <strong>sensory immersion</strong> (e.g., "you can HEAR the wet mess"). The <strong>writer</strong> must engage them in an emotional review of the journey ("whats been your fav part of ALL of this so far?") to solidify investment before the delivery. <strong>Branch Setup:</strong> The critical post-delivery move is to immediately introduce the phrase, <strong>"i want to try something... that i cant believe im even saying rn."</strong> This signals that the finale is a checkpoint, not the end. This prevents post-nut clarity and ensures the momentum stays alive to branch into $900+ customs, $2000 countdowns, or endless freestyle milking, confirming their ultimate Giga Whale status ($800+ total spend capacity).
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">1. Pre-Finale Reflection:</p>
                <p className="pl-4">The <strong>writer</strong> uses the client's name and asks them to reflect on the journey ("whats been your fav part of ALL of this so far?") to build maximum emotional investment.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">2. Maximum Sensory Delivery:</p>
                <p className="pl-4">Deliver the content with extreme descriptive intensity, focusing on sensory details (shaking legs, heavy breathing, <strong>HEAR</strong> the mess) to justify the $200 price.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">3. Immediate Validation & Name Anchor:</p>
                <p className="pl-4">Acknowledge the intensity and reinforce the personal connection by using the client's name ("Fuuuck Terry.. that was fucking HOT").</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">4. The Branch Setup:</p>
                <p className="pl-4">Immediately follow with the emotional hook: <strong>"i want to try something... that i cant believe im even saying rn."</strong> This is the explicit, non-monetary hook for the next high-value tier.</p>
              </div>
            </div>
          </div>

          {/* Example Scripts */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-purple-400">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                <strong className="text-white/90">Pre-Finale:</strong> <span className="italic">"tell me Terry ... FUCK .. im going to fucking DRIPPP for you .. UGHHH whats been your fav part of ALL of this so far my love?"</span>
              </p>
              <p>
                <strong className="text-white/90">Finale Excerpt:</strong> <span className="italic">"you can <strong>HEAR</strong> how much of a wet mess I am right now here ... the way I have to bite down on my bottom lip as this orgasm rocks me <strong>SOOO</strong> fucking hard is SO hot 😘😫"</span>
              </p>
              <p>
                <strong className="text-white/90">Branch Setup:</strong> <span className="italic">"fuuuck Terry .. that was fucking HOT .. omg omg OMG 😫 but if you manage to get through this ... i want to try something .. that i cant believe im even saying rn"</span>
              </p>
            </div>
          </div>

          {/* Success Signals */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-amber-400">Success Signals</h4>
            <div className="space-y-2 text-sm leading-relaxed opacity-90">
              <p><strong>Giga Whale Status is Confirmed When:</strong> They unlock the $200 finale without hesitation ($800+ total spend capacity). They respond with high emotional validation (e.g., "that was so hot") and express <strong>curiosity about the final branch</strong> ("i want to try something..."). The momentum is maintained, confirming the client is ready to continue spending for long-term revenue.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step7Stage4} alt="Building to finale" />
        <ClickableImage src={step7Stage5} alt="The $200 finale delivery" />

        <CopyPastePrompts 
          prompts={[
            "tell me [NAME] ... FUCK .. im going to fucking DRIPPP for you .. UGHHH whats been your fav part of ALL of this so far my love?",
            "OMG ....... I haven't cum THIS hard in a long.. long time babe ... the way I barely make it to the end of this video as my legs begin to shake .. my breath gets SO heavy",
            "fffffffuuuck you can HEAR how much of a wet mess I am right now here ... the way I have to bite down on my bottom lip as this orgasm rocks me SOOO fucking hard is SO hot 😘😫",
            "fuuuck [NAME] .. that was fucking HOT .. omg omg OMG 😫",
            "but if you manage to get through this ... i want to try something .. that i cant believe im even saying rn"
          ]}
        />
      </div>
    )
  }
];