import { OneLiner, CopyPastePrompts, WhenThisWorked, MicroBranch, IfSkipped, WatchFor, DoNotYet } from './ActionableComponents';
import { QuizSection } from './QuizSection';

export const HARD_SELL_QUIZ_DATA = [
  {
    question: "You've redirected from b/g to solo content. Fan is still engaged. What's your next move?",
    type: "scenario" as const,
    options: [
      "Quick question... do you prefer doggy or missionary?",
      "What kind of content do you usually go for? I want to make sure you'll love this",
      "Before I show you, are you more into teasing or straight to it?",
      "Tell me what gets you going... dominant, submissive, rough, gentle... I have a lot of different stuff"
    ],
    correctAnswer: 0,
    explanation: "Both A and C work because they are simple binary questions asked with confidence. A is slightly better because it's more direct and creates clearer leverage.",
    wrongAnswerExplanations: [
      "",
      "\"I want to make sure you'll love this\" sounds uncertain, like you're seeking approval rather than leading with confidence.",
      "This also works well as a simple binary question. It's equally effective as option A.",
      "Too many options. Makes them think too hard. Kills momentum. Keep it simple and binary."
    ]
  },
  {
    question: "You ask \"Do you prefer doggy or missionary?\" and they respond \"I like both honestly, depends on the mood.\" What do you do?",
    type: "scenario" as const,
    options: [
      "Okay perfect, so I have content for both styles. Which one are you feeling right now?",
      "Got it. So picture me touching myself, doggy at first, then switching to missionary, teasing...",
      "Makes sense. Well let me know which vibe you want and I'll send the right one",
      "Okay so doggy then. Picture me touching myself, on all fours, looking back at you..."
    ],
    correctAnswer: 3,
    explanation: "They already couldn't choose. You choose for them. This shows confidence and leadership. You make the decision and move forward.",
    wrongAnswerExplanations: [
      "Asking another question when they already couldn't decide. You should lead the conversation, not ask them to choose again.",
      "Describing both dilutes the pitch. Commit to one preference for clarity and impact.",
      "Puts decision back on them. Weakens your authority. You should lead, not wait for them to decide.",
      ""
    ]
  },
  {
    question: "Fan answers your preference question with: \"Why are you asking?\" What's your response?",
    type: "scenario" as const,
    options: [
      "Just trying to get a sense of what you're into so I can recommend the best content",
      "So I know what to show you",
      "I want to make sure I send you something you'll actually enjoy, not just random stuff",
      "Because I have different types of content and I want to personalize it for you"
    ],
    correctAnswer: 1,
    explanation: "Direct and confident. No uncertainty. Just five words that show you're in control and know what you're doing.",
    wrongAnswerExplanations: [
      "\"Trying to get a sense\" sounds uncertain. \"Recommend\" sounds like you're guessing rather than confidently leading.",
      "",
      "\"Make sure\" and \"actually enjoy\" sounds like you're worried they won't like it. Shows doubt.",
      "\"Personalize it for you\" sounds like extra work you're doing for them, not confidence in your content."
    ]
  },
  {
    question: "When is the right time to ask the preference question?",
    type: "diagnostic" as const,
    options: [
      "After you've described the content in detail, so they know what they're choosing between",
      "Right after redirecting with confidence, before any content description",
      "After they've asked \"what do you have?\" so you know they're interested",
      "After sending the PPV, to learn for next time"
    ],
    correctAnswer: 1,
    explanation: "You need leverage BEFORE the pitch. Get their preference, then use it to frame the visualization. This is the exact sequence that works.",
    wrongAnswerExplanations: [
      "Too late. You've already pitched without leverage. You can't use their answer to frame content you already described.",
      "",
      "Seems logical but you're waiting for them to ask. You should lead the conversation, not wait for permission.",
      "Way too late. You need leverage BEFORE the pitch to shape it, not after the sale."
    ]
  },
  {
    question: "You ask \"doggy or missionary?\" and fan says \"doggy for sure.\" What do you do with this information?",
    type: "scenario" as const,
    options: [
      "Acknowledge and pivot: \"Nice, okay so let me tell you about this content I have...\"",
      "Use their exact word immediately: \"Okay perfect... picture me touching myself, doggy, looking back at you...\"",
      "Expand on it: \"Yeah I figured, you seem like the doggy type. So I have this really intense video...\"",
      "Confirm: \"Doggy, got it. And do you like it with toys or just hands?\""
    ],
    correctAnswer: 1,
    explanation: "Use their exact word. Build the picture immediately. Their language becomes your hook. This is what makes the pitch feel personal and targeted.",
    wrongAnswerExplanations: [
      "You got leverage but didn't use it. \"Let me tell you about\" is too formal and transactional. Use their word to build the picture.",
      "",
      "\"I figured\" and \"you seem like\" is presumptuous. Stick to what they actually said. Don't assume.",
      "Another question. You already have what you need. Build the visualization now, don't keep asking."
    ]
  }
];

export const HARD_SELL_NESTED_ITEMS = [
  {
    label: "1. Lead with Confidence (Frame)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Action: Immediately Assert Control Over the Conversation</h3>
          <p className="text-base leading-relaxed opacity-95">
            The client must follow your lead. If they request something you can't do, use the "Quick Neutral Acknowledgment" to hold this frame.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                A client asking for content is the clearest signal of buying intent. The biggest mistake is to apologize or appear uncertain. Instead, immediately assert control: acknowledge the desire, stay neutral on what you can't provide, and redirect with confidence. This maintains your authority and prevents the conversation from stalling on your boundaries.
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">If they ask for something you don't have:</p>
                <p className="pl-4">Quick Neutral Acknowledgment: "I don't do that specific thing." (Stay neutral. No apology. No explanation.)</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">Then immediately:</p>
                <p className="pl-4">Assert confidence in what you DO offer: "I am still REALLY good with my toys and could show you exactly how I'd handle your cock trust me"</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">Goal:</p>
                <p className="pl-4">The client accepts your redirect without resistance and follows your lead into the next step.</p>
              </div>
            </div>
          </div>

          {/* What to Avoid */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-4 text-red-400">What to Avoid</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p>✗ "I'm so sorry I don't do that"</p>
              <p>✗ "Unfortunately I don't film with guys"</p>
              <p>✗ "I wish I could but I can't"</p>
              <p className="pt-2 text-slate-400 italic">These apologetic phrases undermine value, invite negotiation, and kill momentum.</p>
            </div>
          </div>

          <CopyPastePrompts 
            prompts={[
              "I don't do that specific thing",
              "I am still REALLY good with my toys and could show you exactly how I'd handle your cock trust me",
              "but what I do have is even better honestly... I can show you exactly what I'd do to you, every position, every angle, moaning your name the whole time",
              "not exactly that, but I have something you're gonna love way more"
            ]}
          />

          <WhenThisWorked indicators={[
            "The client accepts the redirect without resistance",
            "Energy stays high and conversation flows naturally",
            "You maintain control of the frame"
          ]} />
        </div>
      </div>
    )
  },
  {
    label: "2. Redirect with Control (Offer)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-emerald-500/40 pl-6 py-4 bg-emerald-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Action: Pivot Their Desire to Your High-Value Content</h3>
          <p className="text-base leading-relaxed opacity-95">
            Immediately pivot the client's expressed desire to an available, high-value piece of content you want to sell. Ensure the client buys your structured, exclusive experience, not a random video.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                The client wants to buy. Your job is to control WHAT they buy. By asking a simple preference question (e.g., "Do you prefer doggy or missionary?"), you gather leverage that makes your content feel personalized and targeted. Their answer becomes your hook, allowing you to frame your content as the perfect match for their specific desire.
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">1. Ask Preference Question:</p>
                <p className="pl-4">"Quick question... do you prefer doggy or missionary?"</p>
                <p className="pl-4 text-slate-400 text-xs mt-1">(Keep it simple. Make it binary. Make it easy to answer.)</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">2. Use Their Answer as Your Hook:</p>
                <p className="pl-4">If they say "doggy": "Okay perfect... picture me touching myself, doggy, looking back at you..."</p>
                <p className="pl-4 text-slate-400 text-xs mt-1">(Use their exact word. Build the picture immediately.)</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">3. If They Can't Choose:</p>
                <p className="pl-4">Choose FOR them: "Okay so doggy then. Picture me touching myself, on all fours, looking back at you..."</p>
                <p className="pl-4 text-slate-400 text-xs mt-1">(Shows confidence and leadership.)</p>
              </div>
            </div>
          </div>

          <CopyPastePrompts 
            prompts={[
              "quick question... do you prefer doggy or missionary?",
              "before I show you, what turns you on more... doggy or missionary?",
              "okay perfect... picture me touching myself, doggy, looking back at you...",
              "okay so doggy then. Picture me touching myself, on all fours, looking back at you..."
            ]}
          />

          <WhenThisWorked indicators={[
            "They answer the preference question",
            "You use their exact language in your pitch",
            "The content feels personalized and targeted to them"
          ]} />
        </div>
      </div>
    )
  },
  {
    label: "3. Amplify Arousal (Pacing)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Action: Build Immediate Tension Before Sending</h3>
          <p className="text-base leading-relaxed opacity-95">
            Introduce a quick hook or anticipation message. Maximize excitement and tension right before the content is sent, making the purchase feel irresistible and urgent.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                Build the fantasy so vividly they can see it before mentioning price. Use sensory details (movement, sound, sensation) to paint the picture. By the time you send the PPV, they should already be inside the fantasy, making the purchase feel like the natural next step to satisfy their arousal rather than a transaction.
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">1. Layer Vivid Details:</p>
                <p className="pl-4">"My hand sliding down, fingers spreading, back arching... you'd see everything, hear every moan"</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">2. Use Movement, Sound, Sensation:</p>
                <p className="pl-4">"Touching myself slow at first, then faster, hips moving, can't stay quiet... getting so wet you'd hear it"</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">3. Build to Readiness Check:</p>
                <p className="pl-4">"Do you wanna see it?" (They commit before seeing price)</p>
              </div>
            </div>
          </div>

          <CopyPastePrompts 
            prompts={[
              "my hand sliding down, fingers spreading, back arching... moaning louder and louder, you'd see everything",
              "touching myself slow at first, then faster, hips moving, can't stay quiet... getting so wet you'd hear it",
              "legs spread wide, one hand on my chest, one hand between my legs, biting my lip trying not to scream your name",
              "do you wanna see it?"
            ]}
          />

          <WhenThisWorked indicators={[
            "They say yes before seeing the price",
            "Their messages get shorter and more urgent",
            "They ask when they can see it"
          ]} />
        </div>
      </div>
    )
  },
  {
    label: "4. Close for High Value (Conversion)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Action: Send PPV at Highest Possible Price Point</h3>
          <p className="text-base leading-relaxed opacity-95">
            Convert the confirmed desire into a structured, high-ticket sale before the fan has a chance to cool off. Send with confidence and certainty.
          </p>
        </div>

        <div className="space-y-6">
          {/* The Logic (Why) */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-blue-400">The Logic (Why)</h4>
            <div className="space-y-3 text-sm leading-relaxed opacity-90">
              <p>
                When they say "yes send it," they have committed before seeing price. This is when conversion becomes likely. Your speed matters. Do not hesitate, do not say "wait here," do not say "give me a minute." Send the bundle immediately with confidence. The faster you act, the less time they have to second-guess.
              </p>
            </div>
          </div>

          {/* The Execution */}
          <div className="bg-slate-900/40 rounded-lg p-5 border border-slate-700/30">
            <h4 className="font-semibold text-base mb-3 text-emerald-400">The Execution</h4>
            <div className="space-y-4 text-sm leading-relaxed opacity-90">
              <div>
                <p className="font-medium text-white/90 mb-2">1. Send Immediately:</p>
                <p className="pl-4">The moment they say yes, send the PPV. No delay. No hesitation.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">2. Price Confidently:</p>
                <p className="pl-4">Send at the highest price point you can justify based on the content quality and their demonstrated buying intent.</p>
              </div>
              <div>
                <p className="font-medium text-white/90 mb-2">3. Follow Up After Unlock:</p>
                <p className="pl-4">"Did you watch it yet? Tell me what you thought" (Keeps momentum alive for next sale)</p>
              </div>
            </div>
          </div>

          <CopyPastePrompts 
            prompts={[
              "[SEND PPV IMMEDIATELY - NO DELAY]",
              "did you watch it yet? tell me what you thought",
              "so... did you like it?",
              "okay I need to know... what was your favorite part?"
            ]}
          />

          <WhenThisWorked indicators={[
            "They unlock within seconds of receiving the PPV",
            "They respond with enthusiasm about the content",
            "The conversation continues naturally toward next sale"
          ]} />
        </div>
      </div>
    )
  }
];

export const HARD_SELL_QUIZ = {
  label: "Knowledge Check: Hard Sell",
  content: (
    <div className="space-y-4">
      <QuizSection quiz={HARD_SELL_QUIZ_DATA} />
    </div>
  )
};