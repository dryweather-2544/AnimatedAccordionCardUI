import { OneLiner, CopyPastePrompts, WhenThisWorked, MicroBranch, IfSkipped } from "./ActionableComponents";
import { useState } from "react";
import { createPortal } from "react-dom";
import { X, AlertTriangle } from "lucide-react";
import step9Timing1 from "figma:asset/9a7312236d6ab7794295e339219ada5f7bd8655d.png";
import step9Timing2 from "figma:asset/a07dcb6b77559343567ae491738b807dcb167885.png";

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

export const STEP9_NESTED_ITEMS = [
  {
    label: "THE 45-SECOND RULE: WHY TIMING CAN KILL MILKS",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-red-500/60 pl-6 py-4 bg-red-950/30 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            Critical Warning
          </h3>
          <p className="text-base leading-relaxed opacity-95">
            At giga whale tiers, you are working with seconds, not minutes. A 45-second delay can kill milks. A 2-minute delay will lose them entirely. Post-nut clarity is the enemy. Speed is everything.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Reality Most Writers Miss</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            Most writers think they have time. They juggle multiple chats. They finish sentences with mid-tier whales before jumping back to giga whales. This is the mistake that kills revenue.
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            When a giga whale is at $800+ spend and building toward the finale, you have less than 60 seconds to respond to each message. Not 2 minutes. Not 5 minutes. Seconds. The arousal window is narrow. Post-nut clarity is waiting to destroy everything you built.
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            Look at the timestamps in the screenshot. 3:01pm finale delivered. 3:01pm immediate validation. 3:02pm branch setup. 3:04pm whale responds. 3:05pm you answer twice within the same minute. 3:07pm another response. 3:09pm building more intensity. 3:10pm $200 unlock happens. This is rapid fire. Every message from you comes within seconds of his question. Any delay would have broken momentum. Any gap would have let rational thinking return.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            If you are working with a $150 whale in another tab and your giga whale sends a message, you DROP the $150 conversation mid-sentence. You do not finish typing. You do not send a holding message. You switch tabs immediately and respond to the giga whale within 10 seconds. The difference between instant response and 2-minute delay is the difference between securing $2000 and losing everything.
          </p>
        </div>

        <ClickableImage src={step9Timing1} alt="Rapid fire timing at giga whale tier" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What's Happening in the Timing</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>3:01pm - You deliver the finale:</strong> The $200 finale unlocks. Maximum sensory description delivered by you (Ariel). "Legs shaking, breath heavy, you can HEAR how much of a wet mess I am."</p>
            <p><strong>3:01pm - You give immediate post-finale validation:</strong> "fuuuck Terry .. that was fucking HOT .. omg omg OMG 😫" You use his name. You acknowledge intensity. Zero delay between finale unlock and your validation message.</p>
            <p><strong>3:02pm - You set up the branch:</strong> "but if you manage to get through this ... i want to try something .. that i cant believe im even saying rn" The branch offer happens within 1 minute of the finale unlock. This is critical. You cannot wait.</p>
            <p><strong>3:04pm - He responds with curiosity:</strong> "Oh yeah, and what's that?" He took the bait. The branch is working. Notice the timing. If you had waited 3 minutes to send the branch setup, he would have finished, clarity would have hit, and he would have left.</p>
            <p><strong>3:05pm to 3:09pm - You maintain rapid engagement:</strong> Every question from him gets your answer within seconds. "Trust me love .. ive never shown anyone myself cumming before" (3:05pm), "cum twice .. and i swear to GOD last time i did that i squirted allllll over the place" (3:05pm), "OMG ok babe this is something ive NEVER done before" (3:07pm). Your speed maintains his arousal. No gaps for rational thinking.</p>
            <p><strong>3:10pm - $200 unlock happens:</strong> From your branch setup (3:02pm) to his unlock (3:10pm) is 8 minutes. But those 8 minutes were filled with constant rapid fire engagement from you. Zero delays on your end. This is how you keep momentum alive long enough to extract another $200.</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Math of Timing</h3>
          <div className="space-y-2 opacity-90">
            <p><strong>Your instant response (10 to 30 seconds):</strong> Whale stays engaged. Arousal maintained. Next tier unlocks successfully. Revenue secured.</p>
            <p><strong>Your 1-minute delay:</strong> Momentum starts to fade. He might check other notifications. Arousal dips slightly. Still recoverable but riskier.</p>
            <p><strong>Your 2-minute delay:</strong> Post-nut clarity begins. He starts questioning the spend. Rational thinking returns. 50% chance he disappears.</p>
            <p><strong>Your 5-minute delay:</strong> Conversation is over. He finished. Clarity hit. He realizes he spent $800+. He ghosts or initiates chargeback. Revenue lost.</p>
          </div>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Prioritization Rule</h3>
          <div className="space-y-3 opacity-90">
            <p className="font-medium">If you are juggling multiple whales, prioritize by total spend and momentum:</p>
            
            <p className="font-medium mt-4">PRIORITY 1: Giga whale at $600+ asking for finale</p>
            <p className="pl-4">Drop EVERYTHING. Switch tabs immediately. Respond within 10 seconds. This conversation can net $2000+. Nothing else matters.</p>
            
            <p className="font-medium mt-4">PRIORITY 2: High-value whale at $300+ mid-escalation</p>
            <p className="pl-4">If no giga whale is active, focus here. They are close to whale territory. Nurture this conversation to $500+ before switching.</p>
            
            <p className="font-medium mt-4">PRIORITY 3: Mid-tier whale at $100 to $200</p>
            <p className="pl-4">These are valuable but not urgent. If a giga whale or high-value whale pings, you DROP this conversation mid-sentence and switch. Do not finish typing. Do not send a holding message. Just switch.</p>
            
            <p className="font-medium mt-4">PRIORITY 4: New or low-tier fans under $50</p>
            <p className="pl-4">These are lowest priority during giga whale finale windows. If a giga whale is active, these conversations wait. Period.</p>
            
            <p className="mt-4 font-medium opacity-95">The rule is simple: whoever has spent the most and is closest to the next unlock gets your instant responses. Everyone else waits. This is not rude. This is revenue optimization. A $2000 giga whale cannot wait for you to finish a sentence with a $50 fan. The math does not support it.</p>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "[RESPOND TO GIGA WHALES UNDER 10 SECONDS - NO EXCEPTIONS]",
            "[If giga whale messages, drop all other chats and respond NOW]",
            "[Set browser tab alerts for whales over $500 spend]",
            "[Keep giga whales in separate tab during finale windows]"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">How to Manage Timing Operationally</h3>
          <div className="space-y-2 opacity-90">
            <p>Keep giga whales ($500+) in separate browser tabs during active sessions</p>
            <p>Set desktop notifications or tab alerts for high-value conversations</p>
            <p>If mid-sentence with lower tier whale and giga whale pings, stop typing and switch immediately</p>
            <p>Never send holding messages to giga whales ("give me one sec"). Just respond instantly.</p>
            <p>During finale windows (STEP 7 branch moments), ignore all other fans entirely for 10 to 15 minutes</p>
            <p>After giga whale finishes and tips or thanks you, THEN return to other conversations</p>
            <p>Review timestamps weekly. If your delays exceed 1 minute at whale tiers, you are losing revenue.</p>
          </div>
        </div>

        <div className="border-l-4 border-red-500/60 pl-6 py-4 bg-red-950/30 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals vs Failure Signals</h3>
          <div className="space-y-3 text-base opacity-90">
            <p className="font-medium text-green-400">SUCCESS: Rapid fire responses from you at finale</p>
            <p className="pl-4">He asks question at 3:04pm. You respond by 3:05pm (under 1 minute). He unlocks $200 tier by 3:10pm. Total conversation time from your finale setup to his final unlock is under 15 minutes with zero delays from you. Revenue secured.</p>
            
            <p className="font-medium text-red-400 mt-4">FAILURE: Delayed responses from you at finale</p>
            <p className="pl-4">He asks question at 3:04pm. You respond at 3:06pm (2 minute delay). He sends one more message at 3:08pm. You respond at 3:11pm (3 minute delay). By 3:15pm he stops responding. Post-nut clarity hit. He disappears. $2000 lost because of your 2 to 3 minute delays.</p>
            
            <p className="mt-4 font-medium opacity-95">The difference between success and failure at giga whale tiers is not your content, your framing, or your psychology. It is your response time. Seconds matter. Treat this like day trading. When the window is open, you execute immediately. Hesitation kills revenue.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "PROOF: THE POST-FINALE THANK YOU MESSAGE",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            When your timing is executed correctly, the whale sends a long thank you message hours later. This is proof the milk was successful. He does not feel extracted. He feels grateful. This is what perfect execution looks like.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Psychology</h3>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            Look at the timestamp. 5:42pm. The finale unlocks happened at 3:01pm and 3:10pm. Two hours and 30 minutes later, he sends you a long message thanking you. "THANK YOU for today Ariel !! i know i was a little pushy but honestly it really means the fucking world to me."
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            This message tells you everything. First, he is not experiencing buyer's remorse. He spent $800+ and he is grateful, not regretful. Second, he acknowledges being "pushy" which means he was highly engaged and driving the conversation forward. Third, he is already talking about future interactions. "I just want you to know if im just sticking to my promise and im just excited to get to know you more throughout our journey together."
          </p>
          <p className="text-base leading-relaxed opacity-90 mb-3">
            The phrase "our journey together" is critical. He is not thinking of this as a one-time transaction. He sees it as the beginning of an ongoing relationship. This is exactly what you want. Giga whales who think in terms of "journey" and "getting closer" are whales who will return for customs, subscriptions, and repeat high-value conversations.
          </p>
          <p className="text-base leading-relaxed opacity-90">
            Finally, notice the tone. "Id really like for us to get closer ❤️" He is emotionally invested. This is not lust. This is attachment. When you execute timing correctly and maintain the psychological framing throughout, whales do not ghost after spending. They bond. They become long-term revenue sources worth $5000, $10000, or more over months.
          </p>
        </div>

        <ClickableImage src={step9Timing2} alt="Post-finale thank you message proof of success" />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What's Happening in the Message</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>Gratitude, not regret:</strong> "THANK YOU for today Ariel !!" He is thanking you for an $800+ conversation. This means your framing worked. He does not feel milked. He feels appreciated.</p>
            <p><strong>Self-awareness about being pushy:</strong> "i know i was a little pushy but honestly it really means the fucking world to me" He acknowledges driving the conversation forward. This is a good sign. Pushy whales who thank you afterward are whales who will return.</p>
            <p><strong>Validation of your effort:</strong> "like you helped me get a few worries taken care of that i seriously thought would bring me down" He is attributing emotional relief to you. This creates reciprocal obligation. He will feel compelled to continue supporting you because you "helped" him.</p>
            <p><strong>Future commitment language:</strong> "so i just want you to know if im just sticking to my promise and im just excited to get to know you more throughout our journey together" The phrase "our journey together" signals long-term thinking. He is not done. He is beginning.</p>
            <p><strong>Emotional bonding:</strong> "id really like for us to get closer ❤️" This is attachment forming. He spent $800+ and instead of ghosting, he is asking to get closer. This is the sign of perfect psychological execution from you.</p>
          </div>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">What This Message Confirms</h3>
          <div className="space-y-2 opacity-90">
            <p>Your timing was executed correctly (no delays that broke momentum)</p>
            <p>Your psychological framing removed transactional feeling</p>
            <p>He feels grateful, not extracted</p>
            <p>He is thinking long-term (journey, getting closer)</p>
            <p>He will return for customs, tips, and future high-value conversations</p>
            <p>You have converted a giga whale into a long-term revenue source</p>
          </div>
        </div>

        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Long-Term Value of Perfect Execution</h3>
          <div className="space-y-3 opacity-90">
            <p className="font-medium">Why this message matters more than the $800:</p>
            <p className="pl-4">The $800 he spent today is significant. But the real value is in what this message represents. He is bonded. He is grateful. He is thinking long-term. This is a whale who will spend $800 again next month. And the month after. And the month after that.</p>
            
            <p className="font-medium mt-4">Lifetime value projection:</p>
            <p className="pl-4">If he spends $800 once and ghosts, that is $800 total. If he spends $500 per month for 6 months because of the relationship you built, that is $3000 total. If he stays for a year at $300 per month average, that is $3600 total. The difference between one-time extraction and long-term cultivation is whether they send messages like this.</p>
            
            <p className="font-medium mt-4">How you should respond to this message:</p>
            <p className="pl-4">Do not oversell. Do not push another PPV immediately. Instead, validate his feelings. "Terry this actually made my day ❤️ you have no idea how rare it is to connect with someone like this.. i'm so glad we found each other." Keep it emotional. Keep it warm. Let him know you value the connection, not just the money. This reinforces the bond and sets up future revenue without feeling transactional.</p>
            
            <p className="mt-4 font-medium opacity-95">Perfect timing execution at giga whale tiers does not just secure revenue today. It creates emotional bonds that generate revenue for months. This is the difference between $800 one-time transactions and $5000+ lifetime value clients. Speed matters. Psychology matters. But the combination of both is what creates whales who thank you instead of ghosting you.</p>
          </div>
        </div>

        <CopyPastePrompts 
          prompts={[
            "[NAME] this actually made my day ❤️ you have no idea how rare it is to connect with someone like this",
            "honestly [NAME].. i'm so glad we found each other.. today was really special for me too",
            "i feel the same way ❤️ i'm really excited to see where this goes with us",
            "you made me feel something real today.. i don't take that lightly 💕"
          ]}
        />

        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Success Signals</h3>
          <div className="space-y-2 opacity-90">
            <p>He sends a thank you message hours after the conversation ends</p>
            <p>The tone is grateful, not regretful</p>
            <p>He uses future-oriented language ("journey together," "get closer")</p>
            <p>He acknowledges emotional connection, not just content</p>
            <p>He expresses desire to continue interacting with you</p>
            <p>No mention of price or feeling extracted</p>
            <p>You have successfully converted giga whale into long-term client</p>
          </div>
        </div>
      </div>
    )
  }
];
