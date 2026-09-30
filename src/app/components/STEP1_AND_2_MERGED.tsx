import { useState } from "react";
import { createPortal } from "react-dom";
import stage1Image from "figma:asset/a864aaa500c770a8b3dc67448c2d6d29b9fac944.png";
import stage2Image from "figma:asset/17f4aaf80ac62c3d4e2b11a82da8927f4f617ac2.png";
import stage3Image from "figma:asset/1d615fed9907421b598046eb26876e69350ca821.png";
import stage4Image from "figma:asset/145ba494fb69b7e6778ba8380b525169cdadf61b.png";
import stage5Image from "figma:asset/c5ed6ae264eb4f0bfdc6b53cb1c4e2e3f190f1d5.png";
import stage6Image from "figma:asset/66ca31a5f11d69bf124e91f5f2a5bb856916ee31.png";
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

export const STEP1_AND_2_MERGED = [
  {
    label: "STAGE 1: The Pattern Interrupt",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose: Break the "I'm Being Sold To" Mindset</h3>
          <p className="text-base leading-relaxed opacity-95">
            The first message is the most important. It must immediately disrupt the client's expectation of being rushed or sold. You are signaling genuine curiosity and an intent to chat, not an intent to sell.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic (Why)</h3>
          <p className="text-base leading-relaxed opacity-90">
            Fans arrive with their defenses high. This stage lowers those defenses by showing interest in them, not their wallet. When a client feels nothing is being asked of them, they relax and are more likely to engage authentically.
          </p>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Hook (How)</h3>
          <div className="space-y-3 text-base leading-relaxed opacity-90">
            <p><strong>1. Personalize:</strong> Use their name, a unique emoji, or a playful question to stand out.</p>
            <p><strong>2. Ask Permission:</strong> Ask if you can ask a question before asking it. This shows respect and gives them control.</p>
          </div>
        </div>

        <ClickableImage src={stage1Image} alt="Opening conversation example" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-3 text-sm opacity-90">
            <p className="italic">"hello there stranger :) or maybe I will be allowed to call you nico already? 😊"</p>
            <p className="italic">"before you run off... can i ask you something real quick? 💕"</p>
            <p className="italic">"omg yeah ? hehe you still searching or do you think youve found your girl ? ;) hehe"</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 text-base leading-relaxed opacity-90">
            <p>The client is engaged when:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Their reply is conversational and longer than one sentence.</li>
              <li>Their tone feels relaxed.</li>
              <li>They ask a question back <strong>(The Ultimate Signal)</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 2: Rapport Build (KYC)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose: Turn the Interaction from Profile to Person & Lower Defenses</h3>
          <p className="text-base leading-relaxed opacity-95">
            The goal is to move the conversation out of a transactional headspace and ground it in something genuine. This creates the emotional safety required for a client to engage and eventually spend.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic (Why)</h3>
          <p className="text-base leading-relaxed opacity-90">
            Location and shared details ground the conversation in reality, triggering the client's sense that they are talking to a <strong>real person in a real place</strong>, not a profile. Sharing your details first creates <em>reciprocity</em>, making them feel safe to share back.
          </p>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Method (How)</h3>
          <div className="space-y-3 text-base leading-relaxed opacity-90">
            <p><strong>1. Ground the Chat:</strong> Share your location/activity first to initiate reciprocity.</p>
            <p><strong>2. Deepen the Connection:</strong> Shift from surface-level (where) to personal (what they like/hobbies).</p>
            <p><strong>3. Validate:</strong> Affirm their answers to make them feel heard and valued.</p>
            <p><strong>4. Transition:</strong> Casually ask age or other KYC details once comfort is established.</p>
          </div>
        </div>

        <ClickableImage src={stage2Image} alt="Guard drop conversation example" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-3 text-sm opacity-90">
            <p className="italic">"hehe omg! alsooo you where from? i'm curled up in bed in NYC rn &lt;3"</p>
            <p className="italic">"well, ive always thought its really pretty there .. whats something you really like about living there? 😊"</p>
            <p className="italic">"yeah ? well wow, to me that sounds very beautiful actually! 😍 you have some cool hobbies!"</p>
            <p className="italic">"also how old are you btw ? im 19 i hope you dont mind 🙈"</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 text-base leading-relaxed opacity-90">
            <p>The rapport is built when:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The fan shares genuine personal details.</li>
              <li>Responses get longer and conversation feels natural.</li>
              <li>A playful dynamic emerges.</li>
              <li>The fan seems relaxed and comfortable.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 3: The Emotional Hook & Validation",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose: Create Emotional Rapport and Test for Commitment</h3>
          <p className="text-base leading-relaxed opacity-95">
            This stage locks in the client's emotional investment by having them reassure you. The focus shifts from the client feeling <em>pursued</em> to the client feeling <em>needed</em> or <em>valued</em>.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic (Why)</h3>
          <p className="text-base leading-relaxed opacity-90">
            You reverse the dynamic: instead of you proving value, you allow the client to <strong>reassure you</strong>. This creates intimacy and plants the idea that you care about their experience <em>specifically</em>. When they reassure you, they become emotionally invested.
          </p>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Method (How)</h3>
          <div className="space-y-3 text-base leading-relaxed opacity-90">
            <p><strong>1. Create Vulnerability:</strong> Share a "kink" or a personal opinion that allows them to affirm or validate you.</p>
            <p><strong>2. Frame and Flatter:</strong> Use the validation to <em>flatter</em> them (e.g., "older guys have more tricks up their sleeves") to build their ego.</p>
            <p><strong>3. Test the Waters:</strong> Ask a direct, low-stakes question to check for curiosity and playfulness. This is your commitment signal before moving forward.</p>
          </div>
        </div>

        <ClickableImage src={stage3Image} alt="Attention building conversation example" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-3 text-sm opacity-90">
            <p className="italic">"i like it that you're a lil older than me.. ill be honest its actually a pretty big kink of mine if you dont think thats weird 🙈👀"</p>
            <p className="italic">"im really glad you feel that way ... you older guys seem a lot more comfortable in your skin and have a lot more tricks up your sleeves.. wouldn't you agree ?"</p>
            <p className="italic">"and tell me I hope my posts haven't disappointed you at all love ? 😳💕"</p>
            <p className="italic">"hehe thank you actually 🥰 .. i wonder if its got you feeling playful at all ? and dying to see more ?"</p>
            <p className="italic">"im honestly just enjoying chatting with you anything extra is only if it feels fun to you ?"</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 text-base leading-relaxed opacity-90">
            <p><strong>The Hook is Set When:</strong> They open up more and actively <strong>reassure you</strong>. They express clear excitement or curiosity. The connection feels personal and warm.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 4: VISUALIZATION",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Shift from conversation to making them picture you. Build anticipation through description.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            After building rapport, you cannot stay in safe conversation mode. You need to transition into visualization.
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            Stop asking questions and start painting a picture. Describe what you are doing, what you are wearing, what you are thinking about. Tease without revealing. Give them just enough to spark desire without satisfying it.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            They start to picture it in their mind before you even offer the content. The shift should feel natural, not abrupt.
          </p>
        </div>

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-3 text-sm opacity-90">
            <p className="italic">"just got out of the shower... still thinking about our chat honestly"</p>
            <p className="italic">"wish you could see what im wearing right now... its really not much honestly"</p>
            <p className="italic">"laying in bed right now and kind of thinking about you"</p>
            <p className="italic">"im in bed and feeling kinda playful... this set I have on is so pretty"</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>They respond with curiosity</p>
            <p>Energy shifts from friendly to flirty</p>
            <p>They ask to see</p>
            <p>Curiosity is building visibly</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 5: The Conversion Moment",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose: Frame the Content as Exclusive and Secure the First Sale</h3>
          <p className="text-base leading-relaxed opacity-95">
            The goal is to complete the first transaction, conditioning the client to spend and validating them as a potential high-value fan.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic (Why)</h3>
          <div className="space-y-3 text-base leading-relaxed opacity-90">
            <p><strong>1. Condition the Client:</strong> The first unlock is about conditioning the <em>behavior</em> of spending, not maximizing profit. A low price ($10-$15) removes hesitation.</p>
            <p><strong>2. Frame the Value:</strong> Position the content as a "little moment" or something you "don't usually do," making it about the intimate experience you're sharing, not a product you're selling.</p>
          </div>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Method (How)</h3>
          <div className="space-y-3 text-base leading-relaxed opacity-90">
            <p><strong>1. Secure Attention:</strong> <em>Before</em> sending the PPV, use an anticipation line to ensure they stay present and create a sense of urgency/excitement (e.g., "Don't leave me").</p>
            <p><strong>2. Use Anticipation & Hook:</strong> The wait message is the final psychological trigger. Give them a task or an additional question (e.g., "tell me one of your lil kinks") to keep them engaged while the content loads.</p>
            <p><strong>3. Send the PPV:</strong> The content message itself must be framed as a personal share.</p>
          </div>
        </div>

        <ClickableImage src={stage5Image} alt="Conversion moment with attention-securing and PPV delivery" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-3 text-sm opacity-90">
            <p className="italic">"yeah ? hehe then promise you'll stay right here while i do this for you babe. ? 💕 don't leave me"</p>
            <p className="italic">"ohl and then tell me one of your lil kinks so long ;)"</p>
            <p className="italic">"i really can't wait to hear back from you right now .. i dont usually do this ... but something has me really feeling risky today 🤭😳 and i want to tell you what i think as SOON as you take a peek"</p>
            <p className="italic">"i don't usually send little moments like this, but something about our chat made me want to share it with you &lt;3"</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 text-base leading-relaxed opacity-90">
            <p><strong>The client is ready to convert when:</strong> They stay present and respond to the attention-securing message. They unlock without questioning the price (the price is low enough to remove hesitation). They express enjoyment and curiosity.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "STAGE 6: Aftercare & Retention",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Rebuild intimacy immediately after the unlock. Stop the chat from going cold.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Logic</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            A purchase creates distance. The fan shifts from "we are flirting" to "I paid." If you do not close that gap, the interaction cools. Momentum dies.
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            A short acknowledgment reassures the fan. You did not disappear once they paid. This is where many chats fail. Not because the content was bad. Because the writer mentally moved on instead of staying present.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Keep it short and emotionally warm. Maintain flirtation without escalating yet. This builds the bridge to the next tier.
          </p>
        </div>

        <ClickableImage src={stage6Image} alt="Post-unlock rebuild and retention conversation" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Example Scripts</h3>
          <div className="space-y-3 text-sm opacity-90">
            <p className="italic">"mm I'm glad to hear that 😈"</p>
            <p className="italic">"that makes me happy honestly"</p>
            <p className="italic">"I love knowing you enjoyed that"</p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>Fan continues chatting after unlocking</p>
            <p>Tone stays flirty, not transactional</p>
            <p>Responses do not shorten</p>
            <p>Emotional energy remains steady</p>
          </div>
        </div>
      </div>
    )
  }
];