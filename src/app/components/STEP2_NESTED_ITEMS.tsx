import { OneLiner, CopyPastePrompts, WhenThisWorked, MicroBranch, IfSkipped } from "./ActionableComponents";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import step2Stage1 from "figma:asset/47666c2ea8de8b24a11b6a1a83f647cdda561b94.png";
import step2Stage2 from "figma:asset/b7525e78bf05820a437db6e45ff9bfccecfa528c.png";
import step2Stage3 from "figma:asset/ea928cc308abf8a886c4c0cf99204c5840268a1b.png";

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

export const STEP2_QUIZ_DATA = [
  {
    question: "They just unlocked the $15 PPV. How do you transition to building toward $35 without seeming greedy?",
    type: "scenario" as const,
    options: [
      "Send a freebie image and build collaborative fantasy around it",
      "Thanks for unlocking! Want to see more?",
      "Did you like that? I have something even better",
      "That was hot right? Ready for the next tier?"
    ],
    correctAnswer: 0,
    explanation: "Sending a freebie immediately after a paid unlock prevents buyer's remorse and builds goodwill. Use the freebie to create collaborative fantasy. This positions the next tier as continuation of the fantasy, not another transaction.",
    wrongAnswerExplanations: [
      "",
      "Acknowledging the transaction kills intimacy. 'Want to see more?' sounds like a catalog pitch.",
      "'Something even better' devalues what they just paid for. Creates doubt instead of satisfaction.",
      "Too transactional. Makes it feel like a tiered upsell sequence instead of natural escalation."
    ]
  },
  {
    question: "You've sent a freebie and built fantasy. The fan is engaged. How do you create the opening for the $35 tier?",
    type: "scenario" as const,
    options: [
      "I have a video if you want to unlock it",
      "Mm no promises",
      "This next one is really explicit. Want it?",
      "Let me send you something special. It's $35"
    ],
    correctAnswer: 1,
    explanation: "Playful resistance creates curiosity and maintains power dynamic. 'Mm no promises' makes them wonder what comes next without you explaining or selling. They chase you, not the other way around.",
    wrongAnswerExplanations: [
      "Direct product pitch. Kills the intimate mood you just built with the freebie.",
      "",
      "Vague and forgettable. 'Really explicit' is generic. No specific imagery to build desire.",
      "Never lead with price. This reverses the psychology. They evaluate cost before arousal peaks."
    ]
  },
  {
    question: "They're curious after your playful resistance. How do you send the $35 PPV with maximum impact?",
    type: "scenario" as const,
    options: [
      "Here's what I made for you. It's $35",
      "I just HAD to record this for you now love. You're really going love how I'm showing you my soft ass and perfect tits, not to mention I added an entire video where you can HEAR how wet my pussy already is",
      "This one shows everything. Ready?",
      "You're going to love this next video"
    ],
    correctAnswer: 1,
    explanation: "Spontaneity and vivid sensory detail justify premium pricing. 'I just HAD to record' signals loss of control. 'You can HEAR how wet' creates auditory imagery. Capital letters emphasize key sensory moments. Price comes after desire peaks.",
    wrongAnswerExplanations: [
      "Price before excitement. They evaluate cost before arousal kicks in. Weak framing.",
      "",
      "'Shows everything' is vague. No specific sensory detail to build anticipation.",
      "Generic and passive. No vivid imagery or urgency to create hunger."
    ]
  }
];

export const STEP2_NESTED_ITEMS = [
  {
    label: "STAGE 1: POST $15 FREEBIE AND COLLABORATIVE FANTASY",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Immediately after the $15 unlock, send a freebie image to prevent buyer's remorse. Use the freebie to build collaborative fantasy. This positions the next tier as a natural continuation, not another transaction.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            The moment after a $15 unlock is critical. Most creators either go silent or immediately pitch the next tier. Both approaches kill momentum. Instead, you reward the unlock with a freebie. This builds goodwill and prevents the fan from feeling transacted.
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            The freebie is not random. It is strategic. You send an image that invites fantasy building. "I'm only 5'4 hehe, now imagine pulling me back into your lap and holding me there for a second. I wonder, are you going to suck on them? Or open my lil nipples to make me moan as we make out?"
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Notice the structure. Physical detail first (5'4, pulling me back into your lap). Then a binary choice that invites their participation (suck on them or open my lil nipples). This creates collaborative fantasy. They respond with their own version. Now they are co-creating the experience with you. This emotional investment sets up the next tier naturally.
          </p>
        </div>

        <ClickableImage src={step2Stage1} alt="Post $15 freebie building collaborative fantasy" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What's Happening in the Screenshot</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>Freebie image sent immediately after $15 unlock:</strong> The creator sends a teaser image for free. This prevents buyer's remorse and builds goodwill. The fan feels rewarded, not transacted.</p>
            <p><strong>Physical detail grounds the fantasy:</strong> "I'm only 5'4 hehe 🤭 now imagine pulling me back into your lap and holding me there for a second 💕" Specific height and physical positioning make the scene easy to visualize.</p>
            <p><strong>Binary choice invites participation:</strong> "I wonder... are you going to suck on them? or open my lil nipples to make me moan as we make out?" Both options escalate. The fan is not deciding whether to engage. They are deciding how to engage.</p>
            <p><strong>The fan responds with their own fantasy:</strong> "$49? I could sit you off your feet and bounce you up and down..." They are now co-creating. Emotional investment is building before the next tier appears.</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What You're Doing</h3>
          <div className="space-y-2 opacity-90">
            <p>Send a freebie image immediately after $15 unlock</p>
            <p>Use physical detail to ground the fantasy (height, positioning)</p>
            <p>Offer binary choice where both options escalate</p>
            <p>Invite them to add their own fantasy details</p>
            <p>Create collaborative experience, not transactional sequence</p>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "I'm only 5'4 hehe 🤭 now imagine pulling me back into your lap and holding me there for a second 💕",
            "I wonder... are you going to suck on them? or open my lil nipples to make me moan as we make out?",
            "tell me what you'd do if I was sitting on your lap right now 😈"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>They respond with their own fantasy details</p>
            <p>Their messages get longer and more engaged</p>
            <p>No buyer's remorse or silence after the $15 unlock</p>
            <p>They feel like they are co-creating, not being sold to</p>
            <p>Arousal is building naturally through conversation</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 2: PLAYFUL RESISTANCE AND MAINTAINING POWER",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            After collaborative fantasy is established, use playful resistance to maintain power dynamic. Make them chase the next tier instead of you selling it.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            The fan is engaged now. They have added their own fantasy details. The collaborative dynamic is active. This is the moment to introduce playful resistance. "Mm no promises."
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            This simple phrase does multiple things. First, it creates curiosity. What do they mean by no promises? Second, it maintains power. You are not asking permission or pitching. You are teasing. Third, it makes them chase you. They have to ask what comes next.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Notice what does not happen here. You do not explain. You do not pitch. You do not ask if they want to see more. You simply create a gap. The fan's curiosity fills that gap. When they ask what you mean or what comes next, you have their full attention. Now you can send the $35 tier with maximum impact.
          </p>
        </div>

        <ClickableImage src={step2Stage2} alt="Playful resistance maintaining power dynamic" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What's Happening in the Screenshot</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>Fantasy continues building:</strong> "omg yess I'd love if you grabbed me by my hips and pulled me on top of you so i could edge your cock and rock back and forth nicely on you too 🥵🔥" The creator adds explicit detail to the collaborative fantasy.</p>
            <p><strong>Challenge is introduced:</strong> "promise me you wont cum to this?" This creates accountability. The fan has to confirm restraint. Edging dynamic begins here.</p>
            <p><strong>Playful resistance maintains power:</strong> "Mm no promises" This short phrase creates curiosity without explanation. The fan has to wonder what comes next. You are not selling. You are teasing.</p>
            <p><strong>Attention is locked:</strong> The fan is now waiting for what you do next. You have their full focus. This is the moment to send the $35 tier.</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What You're Doing</h3>
          <div className="space-y-2 opacity-90">
            <p>Continue collaborative fantasy with explicit detail</p>
            <p>Introduce edging challenge (promise me you wont cum)</p>
            <p>Use playful resistance to create curiosity (mm no promises)</p>
            <p>Avoid explaining or pitching the next tier</p>
            <p>Make them chase you instead of you selling to them</p>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "promise me you wont cum to this? 🥵",
            "mm no promises",
            "you better be good for me... no cumming yet 😈"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>They ask what you mean or what comes next</p>
            <p>They confirm they are edging or following instructions</p>
            <p>Curiosity is building without you explaining anything</p>
            <p>Power dynamic stays in your favor</p>
            <p>They are chasing, not being chased</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 3: THE $35 UNLOCK WITH SENSORY DETAIL AND EDGING",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Send the $35 tier with maximum sensory detail and spontaneity. Use capital letters to emphasize auditory and visual imagery. Introduce the edging challenge immediately after unlock to maintain engagement.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            The fan is curious after your playful resistance. Their attention is locked. Now you send the $35 tier with vivid sensory language. "I just HAD to record this for you now love. You're really going love how I'm showing you my soft ass and perfect tits, not to mention I added an entire video where you can HEAR how wet my pussy already is."
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            Notice the capital HAD and HEAR. These emphasize spontaneity and auditory detail. The fan is not just seeing content. They can hear it. This sensory richness justifies the $35 price without explanation. The imagery itself is the justification.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Immediately after they unlock, you introduce playful confession and the edging challenge. "Well baby, I'm not going to lie! I have been a bit naughty since you got here. I hope you don't mind? Let's see those edging skills! You're going to need them now." This prevents buyer's remorse and keeps them engaged. The dynamic stays active post-payment.
          </p>
        </div>

        <ClickableImage src={step2Stage3} alt="$35 unlock with sensory detail and edging challenge" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What's Happening in the Screenshot</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>Spontaneity justifies the send:</strong> "I just HAD to record this for you now love 🥰🥰" Capital HAD signals loss of control. Makes it feel spontaneous, not calculated.</p>
            <p><strong>Vivid sensory detail builds anticipation:</strong> "you're really gona love how i showing you my soft ass and perfect tits.. not to mention i added an entire video where you can HEAR how wet my pussy already is 🥵" Capital HEAR creates auditory imagery. They can picture and hear the content before price appears.</p>
            <p><strong>The $35 PPV is sent at peak curiosity:</strong> Price comes only after vivid sensory language. The fan is experiencing desire, not evaluating cost.</p>
            <p><strong>Playful confession and edging challenge:</strong> "well baby.. im not going to lie! hehe i have been a bit naughty since you got ! 😈 i hope you dont mind?" Then "lets see those edging skills! hehe omg youre going to need them now 🥵" This keeps them engaged post-unlock and sets up the next tier naturally.</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What You're Doing</h3>
          <div className="space-y-2 opacity-90">
            <p>Signal spontaneity with capital letters (I just HAD to record)</p>
            <p>Create auditory and visual imagery (HEAR how wet, soft ass, perfect tits)</p>
            <p>Send at peak curiosity, not cold</p>
            <p>Add playful confession immediately after unlock</p>
            <p>Introduce edging challenge to maintain engagement</p>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "I just HAD to record this for you now love 🥰🥰 you're really gona love how i showing you my soft ass and perfect tits.. not to mention i added an entire video where you can HEAR how wet my pussy already is 🥵",
            "well baby.. im not going to lie! hehe i have been a bit naughty since you got here! 😈 i hope you dont mind ?",
            "lets see those edging skills! hehe omg youre going to need them now 🥵"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>They unlock the $35 tier without hesitation or price resistance</p>
            <p>They engage with the playful confession</p>
            <p>They confirm they are edging or following instructions</p>
            <p>No buyer's remorse or silence post-unlock</p>
            <p>The dynamic stays active and they are ready for what comes next</p>
          </div>
        </div>
      </div>
    )
  }
];
