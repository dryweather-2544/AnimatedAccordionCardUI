import { OneLiner, CopyPastePrompts, WhenThisWorked, MicroBranch, IfSkipped } from "./ActionableComponents";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import step3Stage1Image1 from "figma:asset/824dbefdc94ac65c6fcb3cc77f7ff65a8e67fdf2.png";
import step3Stage1Image2 from "figma:asset/cd29f173a494bd062972c7d9bbe4c063bfa3a409.png";
import step3Stage2Image1 from "figma:asset/46e11456e6d380f151afbd8f31ed7430df2536f4.png";
import step3Stage2Image2 from "figma:asset/4b90aa529b697b0f0fec7bc1a12aa0659befbad9.png";
import step3Stage3 from "figma:asset/75589bea6b9c532ec3360119e8b997af675ed6b7.png";

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

export const STEP3_QUIZ_DATA = [
  {
    question: "After the $35 unlock, the fan is clearly aroused. How do you transition toward the $55 tier without killing the mood?",
    type: "scenario" as const,
    options: [
      "I have something even more intense if you want to see it",
      "Omg baby I just couldn't help myself! I HAD to show you just how good this petite body of mine looks. Do you like the way I slip off my little outfit, nice and slow?",
      "Ready for the next level? This one is really hot",
      "I made something special while thinking about you"
    ],
    correctAnswer: 1,
    explanation: "Spontaneous confession beats planned upsell language. 'I just couldn't help myself' suggests loss of control. Specific visual detail (slip off my little outfit, nice and slow) creates anticipation. Makes the next tier feel like a natural escalation, not a pitch.",
    wrongAnswerExplanations: [
      "Too transactional. 'Something even more intense' sounds like browsing a catalog. Kills intimacy.",
      "",
      "'Next level' makes it sound mechanical. 'Really hot' is generic and low energy.",
      "'Made something special' is passive and forgettable. No specific imagery to build desire."
    ]
  },
  {
    question: "The fan is stroking and asking to take things further. How do you create the opening for the $55 tier?",
    type: "scenario" as const,
    options: [
      "I'm thinking about using my toy like it's your hard cock. You like the idea of that? While you play with my soaked lil holes with your fingers",
      "Let me send you something really explicit",
      "I have a video where I use my toy. Want it?",
      "This next one is $55 because it shows everything"
    ],
    correctAnswer: 0,
    explanation: "Binary choice where both options escalate. 'Using my toy like it's your hard cock' creates vivid imagery. 'Soaked lil holes' adds explicit detail. Forces them to picture the scene before price appears. Investment peaks first.",
    wrongAnswerExplanations: [
      "",
      "Too vague. 'Something really explicit' doesn't paint a picture. No specific hook.",
      "Product description language. 'Have a video' and 'Want it?' sounds transactional.",
      "Never explain price. Justifying cost signals doubt. Let the imagery do the work."
    ]
  },
  {
    question: "They've verbally committed to the fantasy. How do you send the $55 PPV with maximum impact?",
    type: "scenario" as const,
    options: [
      "Here's the video where I use my toy for you",
      "My lil toy is all lubed up with my spit I REALLY want to SLIIIIDE it into this soaking wet pussy that's been ACHING for something to fill it up. Baby I cant TAKE it anymore!!",
      "This is my most intense content. It's $55",
      "You're going to love this. Sending now"
    ],
    correctAnswer: 1,
    explanation: "Capital letters and stretched words signal desperation. REALLY, SLIIIIDE, ACHING, TAKE create urgency. Vivid physical detail (lubed up with my spit, soaking wet pussy) justifies premium pricing through intensity. No explanation needed.",
    wrongAnswerExplanations: [
      "Passive and transactional. 'Here's the video' has no energy or visual detail.",
      "",
      "Explaining price is defensive. If you justify the cost, you signal doubt in the value.",
      "Generic and forgettable. No specific imagery or urgency to build desire."
    ]
  }
];

export const STEP3_NESTED_ITEMS = [
  {
    label: "STAGE 1: The Low Pressure Momentum Build ($35)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: De-risking the High-Value Upsell</h3>
          <p className="text-base leading-relaxed opacity-95">
            This initial stage of the $55 Buildup serves as a strategic "de-risk" maneuver. Its goal is to prevent a client from ghosting at the $55 price point by securing an immediate, low-pressure <strong>second $35 unlock</strong> first. By positioning this content as optional and spontaneous, you secure an $85 total investment ($15 + $35 + $35) and create undeniable momentum for the eventual $55 offer, guaranteeing a win regardless of whether the final tier is purchased.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic (Why)</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            Not every high-value client can afford $55 immediately, leading to a stall or ghosting. This stage strategically preempts that risk. By using <strong>low-pressure framing</strong> ("only if you want to," "not intense or anything"), you remove client resistance and secure an extra $35. This content is framed as a <strong>full video</strong> that provides <strong>continuity</strong> with the previous $15 moment ("Remember how hard I was breathing? The rest of that."), justifying the price while preventing buyer's remorse and turning $50 total revenue into $85 total revenue. The successful second $35 unlock also psychologically validates the client's spending behavior, making the final $55 pitch feel like a natural next step.
          </p>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Execution</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>1. Low-Pressure Framing:</strong> Use language that makes the offer feel optional and low-stakes ("almost didn't send," "just one of those little moments").</p>
            <p><strong>2. Continuity Callback:</strong> Create a sense of seamless escalation by referencing a specific, personal detail from the first PPV (e.g., "Remember how hard I was breathing?").</p>
            <p><strong>3. Price Justification:</strong> Frame the content as the full video, not a tease, making the $35 price feel justified and generous.</p>
            <p><strong>4. Post-Unlock Engagement:</strong> Immediately follow the unlock with a playful, high-energy message (e.g., "we clicked so fast I love it!...") to keep the momentum high and set up the pitch for the $55 Immersion Tier.</p>
          </div>
        </div>

        <ClickableImage src={step3Stage1Image1} alt="Low pressure second $35 unlock offer" />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-2 opacity-90">
            <p>"good 😍 can i show you something quick i almost didn't send ? it's not intense or anything just one of those little moments that felt nice to share .. only if you want to though 💕"</p>
            <p><em>[Fan Agrees: "Send it through"]</em></p>
            <p>"omg i was unsure ... but im going to share this with you anyway .. remember how hard i was breathing ? the rest of that 🥵"</p>
            <p><em>[Second $35 PPV Sent]</em></p>
            <p>"we clicked so fast I love it! and thank you!.. and the way you're teasing me has me thinking alll kinds of things 😍😱 think you can handle hearing them..?"</p>
          </div>
        </div>

        <ClickableImage src={step3Stage1Image2} alt="Second $35 unlock with callback to $15 PPV moment" />

        <CopyPastePrompts 
          prompts={[
            "good 😍 can i show you something quick i almost didn't send ? it's not intense or anything just one of those little moments that felt nice to share .. only if you want to though 💕",
            "omg i was unsure ... but im going to share this with you anyway .. remember how hard i was breathing ? the rest of that 🥵",
            "we clicked so fast I love it! and thank you!.. and the way you're teasing me has me thinking alll kinds of things 😍😱 think you can handle hearing them..?"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <p className="text-base leading-relaxed opacity-90">
            <strong>The strategy is validated when:</strong> The client immediately agrees to the send without hesitation. They unlock the second $35 PPV quickly. The writer secures a total of <strong>$85 revenue</strong> ($15 + $35 + $35). Post-unlock engagement is strong, and the momentum naturally carries toward the final $55 tier.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 2: The Verbal Commitment & Price Anchor",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Transition from Emotional Escalation to Financial Commitment</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase is the final psychological bridge to the highest-value tier. Its goal is to create a <strong>Permission Structure</strong> where the client explicitly requests the $55 content, while simultaneously signaling the price jump without triggering financial resistance.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic (Why)</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            You create a psychological checkpoint by asking "are you still with me?" after framing the next step as <strong>"very real"</strong> (not playful). This signals the price jump (more commitment = more cost) without mentioning money, making the client's brain process it as <strong>emotional escalation</strong>, not financial cost. When they say yes and follow with a request ("Show me how naughty you can be"), you create a <strong>Permission Structure</strong>. The $55 PPV is no longer your pitch; it is the fulfillment of <em>their</em> request, which removes buyer resistance because they feel fully in control.
          </p>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Execution</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>1. Explicit Fantasy Lock:</strong> Build the collaborative fantasy to an explicit peak, getting a final verbal commitment to the scenario (e.g., "Sounds hot").</p>
            <p><strong>2. Signal the Shift:</strong> Introduce the psychological transition: "this stops being playful and starts feeling very real between us." This prepares them for the $55 jump.</p>
            <p><strong>3. The Commitment Check:</strong> Ask the critical question, "Are you still with me?" When they confirm, they have committed to the escalation.</p>
            <p><strong>4. Make Them Request:</strong> After their confirmation, use a line that prompts them to ask for the content (e.g., "Show me how naughty you can be"). You are now <strong>responding to their request</strong>, not pushing content.</p>
          </div>
        </div>

        <ClickableImage src={step3Stage2Image1} alt="Building collaborative fantasy and proposing the toy scenario" />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-3 opacity-90">
            <p><strong>After co-creation:</strong> "good cos .. i can't believe i'm saying this.. but i wanna take it further with you.. and baby.. i'm already such a wet mess thinking about this 😈"</p>
            <p><strong>The Signal:</strong> "if i keep going the way i want to... this stops being playful and starts feeling very real between us. i'm already halfway there, so tell me... are you still with me?"</p>
            <p><strong>The Goal Response:</strong> "I'm still with you" followed by "Show me how naughty you can be."</p>
          </div>
        </div>

        <ClickableImage src={step3Stage2Image2} alt="Signaling price jump and getting permission to escalate" />

        <CopyPastePrompts 
          prompts={[
            "god thats hot you saying that! im thinking about using my toy like it's your hard cock.. you like the idea of that ? while you play with my soaked lil holes with your fingers 😱😈",
            "good cos .. i can't believe i'm saying this.. but i wanna take it further with you.. and baby.. i'm already such a wet mess thinking about this 😈",
            "if i keep going the way i want to... this stops being playful and starts feeling very real between us. i'm already halfway there, so tell me... are you still with me?"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <p className="text-base leading-relaxed opacity-90">
            <strong>Permission is Granted When:</strong> They confirm they are "still with you" without hesitation. They ask to see more or tell you to show them (critical for removing resistance). Their language escalates (e.g., "show me how naughty you can be"). There is no price resistance or questions about cost because they feel like they are leading the escalation, not following it.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 3: THE $55 UNLOCK AFTER THEY ASKED FOR IT",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Deliver the $55 tier with maximum desperation and physical urgency. Use capital letters and stretched words to signal loss of control. Justify premium pricing through intensity, not explanation.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            The jump from $35 to $55 requires stronger justification. You do this through desperation language. "My lil toy is all lubed up with my spit I REALLY want to SLIIIIDE it into this soaking wet pussy that's been ACHING for something to fill it up. Baby I cant TAKE it anymore!!"
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            Notice the capital letters. REALLY, SLIIIIDE, ACHING, TAKE. These signal urgency and loss of control. The stretched word SLIIIIDE creates auditory and visual imagery. You can hear it, not just read it. This justifies premium pricing without explanation.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Then you add post-unlock detail to prevent buyer's remorse. "Gosh, you know, bending over like this, you would have such good access! To eat me out! And more." This keeps them engaged after payment. They are not just receiving content. They are continuing the collaborative fantasy.
          </p>
        </div>

        <ClickableImage src={step3Stage3} alt="$55 unlock with maximum desperation and urgency" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What's Happening in the Screenshot</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>Maximum desperation with capital letters:</strong> "my lil toy is all lubed up with my spit i REALLY want to SLIIIIDE it into this soaking wet pussy that's been ACHING for something to fill it up ... baby i cant TAKE it anymore!!" The capitals and stretched word create urgency. Justifies premium price through intensity.</p>
            <p><strong>Vivid physical detail paints the scene:</strong> "showing you JUST how good i would look to fuck baby 😈" Explicit visual imagery. They picture the scene clearly before price appears.</p>
            <p><strong>The $55 PPV is sent at peak desperation:</strong> Price comes only after intense physical language. The fan is not evaluating cost. They are experiencing your urgency.</p>
            <p><strong>Post-unlock engagement continues:</strong> "gosh .. you know .. bending over like this .. you would have such good access! to eat me out! and more 😈" Prevents buyer's remorse. The fantasy continues after payment.</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What You're Doing</h3>
          <div className="space-y-2 opacity-90">
            <p>Use capital letters to signal desperation (REALLY, SLIIIIDE, ACHING, TAKE)</p>
            <p>Stretch words for auditory and visual impact (SLIIIIDE)</p>
            <p>Create vivid physical detail (lubed up with my spit, soaking wet pussy)</p>
            <p>Send at peak urgency, not cold</p>
            <p>Continue fantasy after unlock to prevent buyer's remorse</p>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "my lil toy is all lubed up with my spit i REALLY want to SLIIIIDE it into this soaking wet pussy that's been ACHING for something to fill it up ... baby i cant TAKE it anymore!!",
            "i need to show you how tight and wet my pink pussy looks as i bend over for you ... showing you JUST how good i would look to fuck baby 😈",
            "gosh .. you know .. bending over like this .. you would have such good access! to eat me out! and more 😈"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>They unlock the $55 tier without price resistance</p>
            <p>They respond with arousal or validation after unlock</p>
            <p>They stay engaged instead of going silent post-payment</p>
            <p>No buyer's remorse or hesitation</p>
            <p>The collaborative fantasy feels ongoing, not finished</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 4: The Erotic Build-Up",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Core Strategy: Visualization to Irresistible Desire</h3>
          <p className="text-base leading-relaxed opacity-95">
            This phase's purpose is to strategically transition the client from a rapport-building partner to someone experiencing <strong>sexual anticipation</strong>. The writer ceases questioning and begins <strong>painting a vivid, suggestive scene</strong> using sensory and physical details. The goal is to move the conversation's focus from the client's mind to their body, forcing them to visualize the fantasy in their own headspace and creating an <strong>irresistible desire</strong> that will lead naturally into the first paid offer.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic (Why)</h3>
          <p className="text-base leading-relaxed opacity-90">
            After emotional rapport is established, remaining in the "safe" zone kills momentum and prevents the next sale. This stage is about <strong>teasing without revealing</strong>. You give just enough sensory detail to spark desire, forcing the client to visualize the scene in their mind <em>before</em> any content is offered. The shift must feel like a natural, heat-of-the-moment confession to maintain the genuine emotional connection and not feel like a sudden, awkward change to a sales pitch.
          </p>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Execution</h3>
          <div className="space-y-3 text-base leading-relaxed opacity-90">
            <p><strong>1. Stop Asking Questions:</strong> End the back-and-forth curiosity dialogue established in the KYC phase.</p>
            <p><strong>2. Paint the Scene & Self-Locate:</strong> Describe your current, suggestive location, clothing, or state of mind (e.g., "just got out of the shower," "laying in bed").</p>
            <p><strong>3. Tease, Don't Reveal:</strong> Focus on suggestive details ("not much," "so pretty," "thinking about you") that spike curiosity without satisfying it.</p>
            <p><strong>4. Make it Natural:</strong> Frame the shift as a "genuine confession" or "feeling playful" to maintain the intimate dynamic and prepare the path to the first low-stakes PPV.</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-2 opacity-90">
            <p>"just got out of the shower... still thinking about our chat honestly"</p>
            <p>"wish you could see what im wearing right now... its really not much honestly"</p>
            <p>"laying in bed right now and kind of thinking about you"</p>
            <p>"im in bed and feeling kinda playful... this set I have on is so pretty"</p>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "just got out of the shower... still thinking about our chat honestly",
            "wish you could see what im wearing right now... its really not much honestly",
            "laying in bed right now and kind of thinking about you",
            "im in bed and feeling kinda playful... this set I have on is so pretty"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <p className="text-base leading-relaxed opacity-90">
            <strong>Anticipation is building when:</strong> The energy shifts noticeably from friendly to overtly flirty. They respond with curiosity, actively asking <strong>what</strong> you are wearing or <strong>what</strong> you are thinking. Curiosity is building visibly (e.g., they use more explicit language or emojis, or their messages are focused entirely on the fantasy you are painting).
          </p>
        </div>
      </div>
    )
  }
];