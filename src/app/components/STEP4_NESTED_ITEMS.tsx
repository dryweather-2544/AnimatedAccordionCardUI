import { OneLiner, CopyPastePrompts, WhenThisWorked, MicroBranch, IfSkipped } from "./ActionableComponents";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import step4Stage1 from "figma:asset/f3ca719885457b7bfc2120e7cd4c8c99440d18b5.png";
import step4Stage2 from "figma:asset/d93b66bc4b2658d9c02d1700869901f582607eda.png";
import step4Stage3 from "figma:asset/11d161c9a9284873d25fc631ddeef46516e121e5.png";

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

export const STEP4_QUIZ_DATA = [
  {
    question: "Fan has unlocked the $55 PPV. You want to bridge them to $115. What's your opening move?",
    type: "scenario" as const,
    options: [
      "That was hot right? I have even more intense content if you want it",
      "I hope you loved that. Ready for the next tier?",
      "That little tease you just saw? That was nothing compared to what I'm about to show you",
      "Thanks for unlocking! Want to see the premium version?"
    ],
    correctAnswer: 2,
    explanation: "Reframes the $55 unlock as a tease, not the finale. Creates immediate hunger for escalation. 'That was nothing' positions what they just paid for as incomplete, making the next tier feel necessary, not optional.",
    wrongAnswerExplanations: [
      "Too transactional. 'Even more intense content' sounds like a catalog. You want them to feel like they're missing out, not shopping.",
      "'Ready for the next tier?' makes it sound like a upsell sequence. Kills the spontaneity and intimacy.",
      "",
      "'Thanks for unlocking' acknowledges the transaction. 'Premium version' suggests they got the basic version. Weakens the value of what they just bought."
    ]
  },
  {
    question: "You've positioned the $55 as incomplete. How do you get verbal commitment before revealing $115?",
    type: "scenario" as const,
    options: [
      "Tell me you actually want to see me like that before I hit send on something that explicit",
      "This next one is $115. Want it?",
      "Should I send you the full version where I really let go?",
      "I don't usually share this level of content. Interested?"
    ],
    correctAnswer: 0,
    explanation: "Forces them to verbally commit to wanting explicit content before seeing the price. 'Tell me you actually want' creates accountability. They ask for it, then you deliver at $115. Commitment before price.",
    wrongAnswerExplanations: [
      "",
      "Price before commitment. They evaluate cost before desire kicks in. This kills high-ticket conversions.",
      "Too vague. 'Full version' and 'really let go' don't create specific visual hunger. Weak commitment trigger.",
      "'I don't usually share' is overused and sounds defensive. Focus on what they want, not what you're willing to give."
    ]
  },
  {
    question: "They've verbally committed. How do you frame the $115 tier to make it feel earned, not sold?",
    type: "scenario" as const,
    options: [
      "Perfect. This is the version where I stop holding back. Full spread, dripping, nothing left to the imagination",
      "Great! This one is $115 because it's way more explicit",
      "Okay, sending you the premium content now",
      "You've been such a good supporter. Here's the most intense thing I have"
    ],
    correctAnswer: 0,
    explanation: "Visual and binary. 'Stop holding back' suggests restraint until now. 'Full spread, dripping, nothing left' paints the exact scene. Price is justified by the vivid imagery, not explanation.",
    wrongAnswerExplanations: [
      "",
      "Explaining price is defensive. If you justify cost, you signal doubt in the value. Let the imagery do the work.",
      "'Premium content' is corporate language. Kills intimacy and arousal. No visual trigger.",
      "'Good supporter' makes it transactional. 'Most intense thing I have' creates pressure on the content to perform instead of on their desire."
    ]
  }
];

export const STEP4_NESTED_ITEMS = [
  {
    label: "STAGE 1: The Pre-Frame & Desire Bomb",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Reframing Satisfaction as Anticipation</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase immediately follows the $55 unlock. Its goal is to prevent the client from reaching a point of satisfaction by reframing the content they just paid for as an incomplete preview. By doing this, you create immediate hunger and Fear Of Missing Out (FOMO) for the final, highest-value content.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p>
                The moment after a $55 unlock is a point of potential <em>completion</em>. You must disrupt this by aggressively reframing the content as "nothing compared to what's next." This prevents satisfaction, builds massive curiosity, and makes the $55 a stepping stone, not a destination. You then build desire by using explicit visual detail ("spread wide, fingers inside") and an exclusivity frame ("only send when someone earned it"), which conditions the client to believe the $115 tier is the ultimate, earned reward.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <div>
                <p className="font-medium mb-2">1. The Reframing Bomb:</p>
                <p>Immediately follow the $55 unlock with language that diminishes its value (e.g., "that little tease," "that was nothing").</p>
              </div>
              <div>
                <p className="font-medium mb-2">2. Build Specific Hunger:</p>
                <p>Use vivid, explicit, and specific visual descriptions of the next content that the client can easily picture ("me spread wide, fingers inside").</p>
              </div>
              <div>
                <p className="font-medium mb-2">3. The Earning Frame:</p>
                <p>Introduce the concept that the next tier is not for sale, but must be earned. This adds exclusivity and emotional investment to the $115 content.</p>
              </div>
              <div>
                <p className="font-medium mb-2">4. Success Signal Check:</p>
                <p>The client responds with visible hunger or engagement with the details, not satisfaction or silence.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p>"that little tease you just saw? that was nothing compared to what I'm about to show you"</p>
              <p>"what I'm thinking of sending next isn't just another tease.. it's me spread wiiide, fingers inside, the kind of angle I only send when someone earned it"</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Success Signals</h4>
            <div className="space-y-2 text-sm leading-relaxed text-slate-300">
              <p>The client responds with curiosity or hunger, not satisfaction. They engage with the specific visual details you describe. They feel like the $55 was just a preview. Anticipation is building for the next, final escalation.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step4Stage1} alt="Stage 1" />

        <CopyPastePrompts 
          prompts={[
            "that little tease you just saw? that was nothing compared to what I'm about to show you",
            "what I'm thinking of sending next isn't just another tease… it's me spread wide, fingers inside, the kind of angle I only send when someone earned it"
          ]}
        />

        <WhenThisWorked indicators={[
          "They respond with curiosity or hunger, not satisfaction",
          "They engage with the visual details you describe",
          "They feel like the $55 was just a preview",
          "Anticipation is building for what comes next"
        ]} />
      </div>
    )
  },
  {
    label: "STAGE 2: Verbal Commitment & Ownership",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Lock Commitment Before Revealing Premium Price</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase is the final, non-monetary checkpoint before the $115 pitch. Its goal is to create a Permission Structure by forcing the client to choose the escalated, highest-intensity version of the fantasy. By securing their verbal commitment to the <strong>action</strong> (e.g., "stop holding back") before the <strong>price</strong> is revealed, the $115 PPV is psychologically reframed as the fulfillment of <em>their</em> request, eliminating price resistance.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p>
                You strategically prevent the client from entering "evaluation mode" (Cost vs. Value). By offering a <strong>binary choice</strong> where both options move forward ("where I stop" vs. "where I stop holding back"), you ensure the client is deciding <em>how</em> to buy, not <em>whether</em> to buy. When they choose the escalated option, they lock in an emotional and verbal commitment. The $115 price, when it arrives, is then processed as the necessary cost to receive what they <strong>already requested</strong>, shifting the psychology from "Am I being sold to?" to "Did I ask for?" or "What I asked for?"
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <div>
                <p className="font-medium mb-2">1. The Binary Frame:</p>
                <p>Offer a choice between two explicit options where the lower option is simply a mild escalation, and the higher option is the extreme escalation ("nothing left to the imagination"). This controls the frame to ensure they choose <em>intensity</em> over abstinence.</p>
              </div>
              <div>
                <p className="font-medium mb-2">2. Force Verbal Commitment:</p>
                <p>The client must use a specific phrase (e.g., "Stop holding back") that verbally commits them to the escalated fantasy.</p>
              </div>
              <div>
                <p className="font-medium mb-2">3. Lock in Ownership:</p>
                <p>The moment the client adds their own language or specific details ("become daddy lil slut..."), they have taken ownership of the fantasy, confirming maximum emotional investment before the price is introduced.</p>
              </div>
              <div>
                <p className="font-medium mb-2">4. Natural Flow:</p>
                <p>Reinforce the choice and continue the fantasy briefly to make the transition to the $115 send feel natural.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p>"this is usually where I stop.. unless you want the version where I stop holding back.. full spread.. dripping.. nothing left to the imagination 😈🙈 tell me which one you want"</p>
              <p className="italic">The Goal Response: "Stop holding back and become daddy lil slut that all she craves and thinks about is this cock"</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Success Signals</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p><strong>Commitment is Locked When:</strong> The client chooses the escalated option without hesitation. They add detail or explicit fantasy language to their response, proving emotional investment. They feel ownership over the decision. The next tier feels like <strong>their idea</strong>, not your pitch. Investment is successfully locked before the $115 price is revealed.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step4Stage2} alt="Binary choice and verbal commitment locked in" />

        <CopyPastePrompts 
          prompts={[
            "this is usually where I stop… unless you want the version where I stop holding back.. full spread.. dripping.. nothing left to the imagination",
            "tell me which one you want: the safe version where I keep some control, or the one where I completely lose it for you",
            "so what's it going to be… the tease, or the full thing where you see everything?"
          ]}
        />

        <WhenThisWorked indicators={[
          "They choose the escalated option without hesitation",
          "They add detail or fantasy language to their response",
          "They feel ownership over the decision",
          "The next tier feels like their idea, not your pitch",
          "Investment is locked before $115 appears"
        ]} />
      </div>
    )
  },
  {
    label: "STAGE 3: The Maximum Intensity & Conversion",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Justify Premium Price with Irresistible Intensity & Vulnerability</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase is the climax of the high-value sequence. Its goal is to test the ultimate level of client trust by delivering the $115 content with <strong>extreme intensity and vulnerability</strong>, making the experience feel rare and personal enough to justify the significant price jump. By maintaining post-unlock control through accountability checks (edging), the writer ensures the client remains fully engaged and emotionally invested after the highest spend.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p>
                The jump from $55 to $115 is a final test of the relationship, not the content. The price is justified not by explanation, but by <strong>intensity and loss of control</strong>. Capital letters (GRIND, REALLY, NOOO) signal this high-impact experience, which is the only thing that can make the premium price feel natural.
              </p>
              <p>
                Immediately following the unlock, vulnerability ("I'm actually a little embarrassed!") deepens trust and prevents <em>buyer's remorse</em> by making the content feel like a rare, personal secret.
              </p>
              <p>
                Finally, an <strong>accountability check</strong> ("You are still edging for me right?") maintains control and ensures the client remains active and engaged after payment.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed text-slate-300">
              <div>
                <p className="font-medium mb-2">1. Maximum Intensity:</p>
                <p>Send the PPV with explicit, high-energy language, using capital letters to signal spontaneity and irresistible physical action ("GRIND my hips," "REALLY try your best").</p>
              </div>
              <div>
                <p className="font-medium mb-2">2. Vulnerability Post-Unlock:</p>
                <p>Immediately follow the unlock with a line that exposes your feelings or physical state ("You can hear how wet I am here," "I'm actually a little embarrassed!"). This closes the transactional gap and deepens the intimacy.</p>
              </div>
              <div>
                <p className="font-medium mb-2">3. Maintain Control:</p>
                <p>End with a firm, flirty accountability check (edging instruction) to keep the client's focus on the shared experience and prevent ghosting.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Example Scripts</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p>"you're going to have to REALLY try your best not to bust to this now babe.. the way that I GRIND my hips onto this toy is SO fucking hot you have NOOO idea!" <span className="italic">{"{$115.00 PPV Sent}"}</span></p>
              <p>"you can hear how wet i am here... fuck... i'm actually a little embarrassed! 😂" "you have me fucking shaking right now.. i love how you have me feeling! you are still edging for me right? Be honest."</p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-700/30 rounded-lg p-6">
            <h4 className="font-semibold text-base mb-4 text-slate-200">Success Signals</h4>
            <div className="space-y-3 text-sm leading-relaxed text-slate-300">
              <p><strong>The high-tier conversion is successful when:</strong> They unlock the $115 tier without price resistance. They <strong>confirm they are following your edging instructions</strong> or other accountability checks. The client remains actively engaged after the highest payment, and the dynamic feels intimate, not transactional.</p>
            </div>
          </div>
        </div>

        <ClickableImage src={step4Stage3} alt="$115 unlock with maximum intensity and vulnerability" />

        <CopyPastePrompts 
          prompts={[
            "you're going to have to REALLY try your best not to bust to this… the way I GRIND my hips is SO fucking hot, my breath getting heavier as I bounce faster and faster",
            "you can hear how wet i am here… fuck… i'm actually a little embarrassed but I want you to hear what you do to me",
            "you have me fucking shaking right now.. i love how you have me feeling! you are still edging for me right? be honest"
          ]}
        />

        <WhenThisWorked indicators={[
          "They unlock the $115 tier without price resistance",
          "They confirm they are following your edging instructions",
          "They stay engaged after payment instead of going silent",
          "No buyer's remorse or questions about the price",
          "The dynamic feels intimate, not transactional"
        ]} />
      </div>
    )
  }
];