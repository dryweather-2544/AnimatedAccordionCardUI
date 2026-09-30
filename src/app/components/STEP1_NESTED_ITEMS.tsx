import { useState } from "react";
import { createPortal } from "react-dom";
import stage1Image from "figma:asset/9ac068c4e17ba86d7ad7c3bb94076a6e21af637c.png";
import stage2Image from "figma:asset/4220be1e9d3a278e13b74eb434434f68e41867a5.png";
import stage3Image from "figma:asset/d522325f2b8dd59e9ade679ff2536b94d731cd82.png";
import stage4Image from "figma:asset/656e8b950305af1c24f43e151aa63411cc3c6da3.png";
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

export const STEP1_NESTED_ITEMS = [
  {
    label: "STAGE 1: OPENING",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Break the "I'm being sold to" mindset. Signal curiosity instead of sales.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            Fans arrive expecting to be rushed or sold to. Your first job is to break that pattern immediately.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Ask permission before asking questions. Show interest in them, not their wallet. This makes them relax because nothing is being asked of them yet except to talk about themselves.
          </p>
        </div>

        <ClickableImage src={stage1Image} alt="Opening conversation example" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts from Ariel</h3>
          <div className="space-y-3 text-sm opacity-90">
            <p className="italic">"hello there stranger :) or maybe I will be allowed to call you nico already? 😊"</p>
            <p className="italic">"before you run off... can i ask you something real quick? 💕"</p>
            <p className="italic">"what made you wanna talk to me today?"</p>
            <p className="italic">"omg yeah ? hehe you still searching or do you think youve found your girl ? ;) hehe"</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What You're Doing</h3>
          <div className="space-y-2 opacity-90">
            <p>Ask permission or show curiosity first</p>
            <p>Make it about them, not you</p>
            <p>Keep tone light and playful</p>
            <p>Ask how they found you or what caught their attention</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>Replies are more than one sentence</p>
            <p>Their tone becomes conversational</p>
            <p>They ask questions back</p>
            <p>The fan feels relaxed</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 2: GUARD DROP",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Turn the interaction from profile to real person. Make the conversation grounded and personal.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            Location grounds the conversation in something real. Sharing your location first creates reciprocity and lowers resistance.
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            When you mention where you are and what you are doing, the fan feels like this is a real person in a real place, not a profile.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Then deepen by asking what they like about where they live. This shifts from "where" to "what matters to you." Validate their answer. Ask age casually. Each detail makes them feel more heard.
          </p>
        </div>

        <ClickableImage src={stage2Image} alt="Guard drop conversation example" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts from Ariel</h3>
          <div className="space-y-3 text-sm opacity-90">
            <p className="italic">"hehe omg! alsooo you where from? i'm curled up in bed in NYC rn &lt;3"</p>
            <p className="italic">"well, ive always thought its really pretty there .. whats something you really like about living there? 😊"</p>
            <p className="italic">"i have to admit the energy here in nyc is amazing !!"</p>
            <p className="italic">"yeah ? well wow, to me that sounds very beautiful actually! 😍 you have some cool hobbies!"</p>
            <p className="italic">"i LOOVE reading .. I dont go out very much hehe"</p>
            <p className="italic">"also how old are you btw ? im 19 i hope you dont mind 🙈"</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What You're Doing</h3>
          <div className="space-y-2 opacity-90">
            <p>Share your location and what you're doing first</p>
            <p>Invite them to share theirs</p>
            <p>Ask what they like about where they live</p>
            <p>Validate their answer warmly</p>
            <p>Ask their age casually (share yours first)</p>
            <p>Focus on everyday life, not goals</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>They share personal details</p>
            <p>Responses get longer</p>
            <p>Conversation feels natural and grounded in reality</p>
            <p>They seem more comfortable</p>
            <p>A playful dynamic emerges</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 3: ATTENTION",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Create emotional rapport and validation. Make them feel heard, not questioned.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            Instead of you proving value, you allow them to reassure you. This creates intimacy and plants the idea that you care about their experience specifically.
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            The fan shifts from being pursued to being the one reassuring. This makes them feel invested. This is where the emotional hook starts forming.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Then check if they are feeling curious or playful. This tells you whether you can proceed or need more conversation. Their response predicts whether they will commit.
          </p>
        </div>

        <ClickableImage src={stage3Image} alt="Attention building conversation example" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts from Ariel</h3>
          <div className="space-y-3 text-sm opacity-90">
            <p className="italic">"also ... i cant help but ask, do you think we have good chemistry so far?"</p>
            <p className="italic">"i just feel like you are not like the others here 💕🤗"</p>
            <p className="italic">"im feeling so comfortable with you already it is really nice hehe"</p>
            <p className="italic">"im assuming youre feeling.. curious? playful? 😈 or?"</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What You're Doing</h3>
          <div className="space-y-2 opacity-90">
            <p>Ask if they feel the chemistry (make them reassure you)</p>
            <p>Suggest they are different from other fans</p>
            <p>Express comfort or safety with them specifically</p>
            <p>Check their emotional state (curious, playful)</p>
            <p>Let them define the vibe before you escalate</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>They reassure you verbally</p>
            <p>They confirm curiosity or playfulness</p>
            <p>They start complimenting you back</p>
            <p>Emotional investment is visible</p>
            <p>They want to continue talking</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 4: READINESS",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Confirm they are ready for escalation. Test for openness to something more intimate without asking directly.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            You have built rapport. Now you test whether they are open to deeper intimacy. You do this by suggesting you want to share something or show something, but you frame it as conditional on their interest.
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            This gives them control. They decide whether to proceed. When they say yes, they have given permission. This makes the transition to PPV feel consensual and natural, not aggressive.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            If they hesitate, you stay in conversation mode. If they confirm readiness, you move to visualization and begin setting up the first PPV.
          </p>
        </div>

        <ClickableImage src={stage4Image} alt="Readiness check conversation example" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts from Ariel</h3>
          <div className="space-y-3 text-sm opacity-90">
            <p className="italic">"can i be honest with you? 🙈"</p>
            <p className="italic">"i feel like showing you something ... but only if youre open to that"</p>
            <p className="italic">"would you be interested in seeing a more.. personal side of me?"</p>
            <p className="italic">"im thinking about you in a way i probably shouldnt be 😳"</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What You're Doing</h3>
          <div className="space-y-2 opacity-90">
            <p>Suggest you want to share something more intimate</p>
            <p>Make it conditional on their interest</p>
            <p>Use phrases like "only if you're open" or "if you want"</p>
            <p>Test for readiness without being explicit</p>
            <p>Let them give permission before escalating</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>They say yes or express curiosity</p>
            <p>They ask what you mean</p>
            <p>They give explicit permission to continue</p>
            <p>No resistance or hesitation</p>
            <p>Ready to see what comes next</p>
          </div>
        </div>
      </div>
    )
  }
];
