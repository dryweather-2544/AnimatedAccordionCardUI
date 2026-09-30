import { useState } from "react";
import { TrainingDashboard } from "./TrainingDashboard";
import { AdvancedFrameControlTraining } from "./AdvancedFrameControlTraining";
import { ArrowRight, Book, ArrowLeft, DollarSign, TrendingUp, FileText, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";
import trainingModulesHeader from "figma:asset/8d39ca04ed732bc1bb11b07a342378406916958c.png";
import objectionHandlingImage from "figma:asset/7c4776cec398026c9bf48433742927866aa95df2.png";
import pullConversionImage from "figma:asset/7b24af3795bcc99b53e05a7605ecfb1710c363be.png";
import controlResetImage from "figma:asset/8d4e4992c0f38fd52a214d7ac995f3c8a3ba43a8.png";
import pushVsPullImage from "figma:asset/1d9c991e33615327274026ad678ec36c805c5ac8.png";
import valueHoldImage from "figma:asset/44065b8d1e30d130d4ff3089b444a744ed2c0b4a.png";
import reactiveSextingImage from "figma:asset/bf8211a78bf3dd196b93d707d7804f3bf66b2118.png";
import { EditableText } from "./EditableText";

export function BlankPageRedesigned() {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("training_authenticated") === "true";
  });
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const CORRECT_PASSWORD = "milking2024"; // Change this to your desired password

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("training_authenticated", "true");
      setError("");
    } else {
      setError("Incorrect password. Try again.");
      setPasswordInput("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("training_authenticated");
    setPasswordInput("");
  };

  // Password protection screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

        <div className="relative z-10 w-full max-w-md">
          <Link
            to="/"
            className="absolute top-0 left-0 -mt-16 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Home</span>
          </Link>

          <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 shadow-2xl">
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                <Lock className="size-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Training Modules</h1>
              <p className="text-slate-400 text-center">Enter password to access premium content</p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      setError("");
                    }}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter password"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-red-400" />
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/25"
              >
                Unlock Training
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-xs text-slate-500 text-center">
                Protected content • Premium training modules
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const trainingModules = {
    kyc: {
      title: "KYC: Know Your Customer",
      skillType: "Foundation for Big Sales",
      accentColor: "#10B981",
      
      // LEFT COLUMN CONTENT - Easy to edit
      leftColumn: {
        subtitle: "The most important first step with any new fan:",
        sections: [
          {
            title: "What is KYC?",
            whyItWorks: [
              "<strong>KYC is taking time to get to know the fan when they first message you.</strong> You're figuring out what makes them tick and if they have money to spend.",
              "Your goal: Make them feel like a real person you're actually talking to, not just one of a thousand customers.",
              "<strong>Skip KYC and you will waste your time.</strong> You might run a sexting set on someone who only wants videos. You might pitch a dildo video to someone who only likes strip teases. You need to know what they want before you offer anything."
            ],
            steps: [
              {
                title: "Basic Info",
                description: "Ask about their name, where they live, what they do, their interests and hobbies. Share your own details first when you ask. This opens them up on a psychological level. When you give something about yourself, people feel the need to give something back. It makes the conversation feel real instead of like an interrogation.",
                example: "\"So tell me about yourself! What do you do for fun?\"<br>\"Where are you from? I love learning about new places.\"<br>\"What's your week been like?\"",
                tip: "Try: \"I just got back from the gym, I'm exhausted! What did you get up to today?\" or \"I'm from California originally. Where are you from?\" This sharing first makes them feel comfortable sharing back."
              },
              {
                title: "Their Kinks/Fetishes",
                description: "Find out what they like to see. This is critical ammunition for later sales. After you've been chatting for a bit, mention that you want to spice things up. Suggest sexting while you take live content. Ask what kind of stuff they're into. Then share what you're into. This turns the conversation sexual and gets them thinking about you in that way.",
                example: "\"What kind of content do you usually like?\"....\"butt ive got alll kinds of solo content ranging from stripteases, toy fucking , vibrator play, feet content.. and also do live content when im not too busy!! <3\"",
                tip: "Get detailed about yourself when talking about sexual topics. He's there for YOU. Tell him what turns you on, what you love doing, what makes you feel good. This gets him horny and shows him what's possible."
              },
              {
                title: "Mirroring their conversation",
                description: "Are they chatty with long replies, or short and very sexual right away?",
                tip: "Match their energy so you don't scare them off. If they're slow and conversational, don't rush to explicit content."
              }
            ]
          },
          {
            title: "Why KYC is Critical for Sales",
            whyItWorks: [
              "<strong>Skipping KYC ruins your chances for big sales.</strong> You might be tempted to skip to dirty talk or send pictures, but this destroys urgency and emotional investment.",
              "KYC is the foundation. If the foundation is weak, your whole conversation falls apart and you won't make the big sales later."
            ],
            steps: [
              {
                title: "Creates Urgency & Anticipation",
                description: "Without KYC, you're just another model dropping content. With KYC, you flirt and tease while building anticipation, so when you offer content it feels like a natural progression. It's the only way forward in the conversation. Not forced, but natural.",
                example: "Without KYC: 'Here's a photo' → Fan thinks: 'I'll unlock this later.'<br><br>With KYC: You talk, flirt, tease → Then offer content → Fan thinks: 'I need this NOW.'"
              },
              {
                title: "Locks Them In for High-Ticket Sales",
                description: "It's easy to sell $15 PPV. To get them to buy $55 or $85 PPV, they need emotional investment. When you show interest in their life, they feel special. They're not buying content, they're buying the feeling that the moment exists just for them.",
                example: "\"I remembered you said you loved [Specific Kink]. i have such a wet dripping pussy and i feel like i have to show you what you have done to me .. this isn't something i feel a lot , and honestly i cant believe you got me so worked up.. fuckk i really wanna cum hard with you.. 😈🤭\""
              },
              {
                title: "Stops You From Wasting Time",
                description: "You don't want to spend an hour with a fan who was never going to spend money. KYC helps you qualify fans. Use a low-priced PPV ($15) as a test. If they unlock, you know you have a spender.",
                tip: "If they don't unlock the $15 test, you haven't lost much time and can move on to the next fan."
              }
            ]
          }
        ]
      },

      // RIGHT COLUMN CONTENT - Easy to edit
      rightColumn: {
        sections: [
          {
            title: "What You're Looking For (The Why)",
            description: "Every question you ask in KYC has a strategic purpose. You're gathering intelligence for later sales.",
            note: "Think of KYC as building a customer profile. The more you know, the easier it is to create the perfect pitch later."
          },
          {
            title: "Building Natural Rapport",
            description: "When you ask about their basic info, you're building <strong>natural rapport</strong> and finding non-sexual topics to talk about.",
            example: "The more personal they get, the more invested they are.",
            note: "Personal investment = Emotional investment = Higher willingness to spend"
          },
          {
            title: "Gathering Ammunition",
            description: "When you ask about their kinks and fetishes, you're getting <strong>ammunition for later</strong>.",
            example: "You can create a 'special video just for him' about his favorite kink.",
            note: "This makes the sale feel personalized and exclusive, not generic."
          },
          {
            title: "Mirroring Their Conversation",
            description: "When you mirror their conversation style, you're figuring out if they're seeking an <strong>emotional connection</strong> or just a quick <strong>transaction</strong>.",
            example: "Long, chatty replies = Emotional connection seeker (high-ticket potential)<br>Short, sexual replies = Quick transaction seeker (lower-ticket, but faster)",
            note: "You match their energy so you don't scare them off. If they're conversational, don't rush to explicit content."
          },
          {
            title: "The Qualification Test",
            description: "After building rapport, send a <strong>low-priced PPV ($15)</strong> as a test.",
            example: "<strong>Example:</strong> <em>\"omg hehe i like you already 😊🙈 would you like me to make you a little something better than my welcome message ? 💕 cos i would love to!\"</em>",
            note: "<strong>If they unlock:</strong> You have a spender. Put in real effort for high-ticket sales.<br><strong>If they don't:</strong> Move on. Don't waste time on non-spenders."
          }
        ],
        bestPractices: [
          {
            title: "Never Skip KYC",
            description: "Even if you're busy, take 5-10 minutes for KYC. It's the foundation for everything that comes after."
          },
          {
            title: "Make It Feel Natural",
            description: "Don't interrogate them. Weave questions into a flowing conversation. Show genuine interest."
          },
          {
            title: "Take Notes",
            description: "Write down key details about each fan. Use these details later to make sales feel personalized and exclusive."
          },
          {
            title: "Use the $15 Test",
            description: "Don't spend an hour on someone before you know if they'll spend. The $15 test qualifies them quickly."
          }
        ]
      },

      overview: {
        description: `<div class="space-y-6">
          <div>
            <div class="p-6 rounded-lg mb-6" style="background: rgba(16, 185, 129, 0.2); border: 2px solid rgba(16, 185, 129, 0.5);">
              <h2 class="font-bold text-white text-3xl mb-3 text-center">KYC is Your Secret Weapon</h2>
              <p class="text-green-200 text-lg text-center">Not just polite conversation. The foundation for big sales.</p>
            </div>
            <p class="text-slate-300 mb-3">Think of KYC as the most important first step you take with any new fan. It's not just polite conversation, it's your secret weapon for making sales later. This is where you figure out what makes them tick and if they have money to spend.</p>
            <div class="grid grid-cols-2 gap-4 my-4">
              <div class="p-4 rounded-lg" style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3);">
                <p class="font-bold text-green-300 mb-2">The What</p>
                <p class="text-slate-300 text-sm">Ask about basic info, kinks, and their vibe to build a customer profile.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3);">
                <p class="font-bold text-green-300 mb-2">The Why</p>
                <p class="text-slate-300 text-sm">Build rapport, gather ammunition for personalized sales, and qualify if they're a spender.</p>
              </div>
            </div>
          </div>
        </div>`,
        goal: "Master the art of KYC to build the foundation for high-ticket sales. Learn to gather strategic information, build genuine rapport, and qualify fans quickly without wasting time. Every question has a purpose. Every detail becomes ammunition for personalized, exclusive sales pitches that convert.",
      },

      mindMap: {
        id: "center",
        title: "KYC System",
        x: 0,
        y: 0,
        color: "#10B981",
        icon: "🎯",
        children: [
          {
            id: "what-is-kyc",
            title: "What is KYC?",
            x: -400,
            y: -180,
            color: "#059669",
            icon: "❓",
            children: [
              {
                id: "basic-info",
                title: "Basic Info",
                x: -680,
                y: -280,
                color: "#047857"
              },
              {
                id: "kinks",
                title: "Their Kinks/Fetishes",
                x: -680,
                y: -200,
                color: "#047857"
              },
              {
                id: "mirroring",
                title: "Mirroring Their Conversation",
                x: -680,
                y: -120,
                color: "#047857"
              }
            ]
          },
          {
            id: "why-critical",
            title: "Why KYC is Critical",
            x: 400,
            y: -180,
            color: "#34D399",
            icon: "💡",
            children: [
              {
                id: "urgency",
                title: "Creates Urgency & Anticipation",
                x: 700,
                y: -280,
                color: "#6EE7B7"
              },
              {
                id: "high-ticket",
                title: "Locks Them In for High-Ticket Sales",
                x: 700,
                y: -200,
                color: "#6EE7B7"
              },
              {
                id: "qualify",
                title: "Stops You From Wasting Time",
                x: 700,
                y: -120,
                color: "#6EE7B7"
              }
            ]
          },
          {
            id: "what-looking-for",
            title: "What You're Looking For",
            x: 0,
            y: 200,
            color: "#10B981",
            icon: "🔍",
            children: [
              {
                id: "rapport",
                title: "Building Natural Rapport",
                x: -280,
                y: 320,
                color: "#059669"
              },
              {
                id: "ammunition",
                title: "Gathering Ammunition",
                x: 0,
                y: 360,
                color: "#059669"
              },
              {
                id: "connection-type",
                title: "Emotional vs Transactional",
                x: 280,
                y: 320,
                color: "#059669"
              }
            ]
          },
          {
            id: "best-practices-kyc",
            title: "Best Practices",
            x: -350,
            y: 50,
            color: "#14B8A6",
            icon: "✨",
            children: [
              {
                id: "never-skip",
                title: "Never Skip KYC",
                x: -650,
                y: 100,
                color: "#0D9488"
              },
              {
                id: "natural",
                title: "Make It Feel Natural",
                x: -650,
                y: 160,
                color: "#0D9488"
              },
              {
                id: "test-15",
                title: "Use the $15 Test",
                x: -650,
                y: 220,
                color: "#0D9488"
              }
            ]
          }
        ]
      },

      steps: [],
      examples: [],
      recap: [
        "KYC is the foundation for every big sale you make",
        "Never skip KYC, even when busy. It's a 5-10 minute investment that pays back in big sales",
        "Ask about basic info to build natural rapport and find non-sexual topics",
        "Ask about kinks and fetishes to gather ammunition for personalized sales later",
        "Read their vibe and energy to match your approach and avoid scaring them off",
        "Use a $15 test PPV to qualify spenders quickly without wasting time",
        "Take notes on key details to make future sales feel exclusive and personalized",
        "The more personal they get, the more invested they are, the more they'll spend",
        "High-ticket buyers need emotional investment, which starts with KYC",
        "Fans aren't buying content, they're buying the feeling that the moment exists just for them",
      ],
    },
    transitions: {
      title: "Mastering Transitions",
      skillType: "Phase Management & Perfect Timing",
      accentColor: "#F59E0B",
      
      // LEFT COLUMN CONTENT - Easy to edit
      leftColumn: {
        subtitle: "The invisible bridge that turns conversation into revenue:",
        sections: [
          {
            title: "Why Transitions Matter",
            whyItWorks: [
              "<strong>Most chatters don't lose sales because their content is bad. They lose sales because the shift from chat to pitch feels awkward.</strong> The subscriber senses the change, their guard goes up, and they disengage.",
              "Elite chatters make the transition invisible. The subscriber doesn't realize they're being sold to until they're already mentally invested in buying."
            ],
            steps: [
              {
                title: "The Core Principle",
                description: "Every transition has two parts: an opener (casual, relatable) and a pivot (the 'if you were here' moment that shifts to intimacy or curiosity). The opener disarms. The pivot sells.",
                example: "Opener: 'I swear I finished everything on Netflix.'<br>Pivot: 'If you were here, what show would you put on for us?'<br><br>The fan responds with something flirty, and you're already in the sale."
              },
              {
                title: "Timing Is Everything",
                description: "Wait 5-10 minutes into natural conversation before transitioning. Too early and you seem transactional. Too late and momentum dies. Find the sweet spot where they're engaged but not yet bored.",
                tip: "Watch for engagement signals: quick replies, emojis, questions back to you. That's your green light."
              },
              {
                title: "Use Bridges, Not Jumps",
                description: "Find a way to connect the fan's previous messages into a sexual topic smoothly. If a fan mentioned surfing, don't ignore it and talk about what content is on the page.",
                example: "\"You make surfing sound kind of tempting. What do you think you'd teach me first?\"<br><br>This shows you were listening while steering toward flirtation."
              },
              {
                title: "Acknowledge & Mirror",
                description: "When the fan gives you a compliment or shares a personal detail, you must acknowledge it clearly. Ignoring it breaks rapport and makes them feel unheard.",
                example: "Fan: \"You're so beautiful\"<br><br><strong>Bad:</strong> Ignore it and continue sexting<br><strong>Good:</strong> \"Aw, that's so sweet! You're making me blush. Tell me, what do you find most attractive about me?\""
              },
              {
                title: "Escalate Gradually",
                description: "Every message must be a little hotter or more engaging than the last one. Start with suggestions, move to descriptions, then explicit actions, and finally the content offer.",
                example: "<strong>Level 1:</strong> \"I'm thinking about you...\"<br><strong>Level 2:</strong> \"I'm thinking about what I'd do if you were here...\"<br><strong>Level 3:</strong> \"I'd start by kissing your neck, then...\"<br><strong>Level 4:</strong> \"I'm getting so turned on. Want to see what you do to me?\"<br><strong>Level 5:</strong> [PPV offer]",
                tip: "If you start at Level 5, you have nowhere to go. The tension flatlines."
              }
            ]
          },
          {
            title: "The Perfect Upsell Formula",
            whyItWorks: [
              "<strong>Once you are deep into sexting, you have built up tension and arousal. Now it's time to make the sale.</strong> This moment requires confidence and follows a formula.",
              "The Perfect Ask is designed to create anticipation, describe the offer clearly, and push for immediate action. All three parts work together to maximize unlock rates."
            ],
            steps: [
              {
                title: "The Power of the Hook",
                description: "You should never just drop the PPV in front of the fan. Before sending the paid content, use a hook or a teaser. Hooks are essential for creating anticipation and keeping momentum.",
                example: "A strong hook: 1) Makes the fan curious, 2) Creates a sense of waiting, and 3) Helps him imagine what comes next."
              },
              {
                title: "Formula: The Perfect Ask (3 Parts)",
                description: "When you are ready to upsell or sell the PPV, make The Ask confidently with three parts in a single sentence.",
                example: "<strong>1. How you feel right now (emotion):</strong> e.g., \"I'm so hot right now...\"<br><br><strong>2. What you will send or do (the offer):</strong> e.g., \"...I want to show you the video I took five minutes ago of me...\"<br><br><strong>3. A yes question (the call to action):</strong> e.g., \"...Do you want to see that?\""
              },
              {
                title: "Match Content & Fantasy",
                description: "The fantasy you are talking about in the sexting must match the intensity and the content (video or picture) you are trying to sell.",
                example: "If you are talking about a gentle massage, do not try to sell an aggressive anal video.",
                tip: "The content must feel like the natural next step in the fantasy you've been building together."
              },
              {
                title: "Use Illusion of Choice",
                description: "Give the illusion of choice while guiding the experience. Both options assume content will be made, eliminating \"no\" as an option.",
                example: "\"Do you prefer doggy style or missionary?\"<br><br>This makes the fan feel in control, while you are actually guiding the conversation to the sale you want."
              }
            ]
          }
        ]
      },

      // RIGHT COLUMN CONTENT - Easy to edit
      rightColumn: {
        sections: [
          {
            title: "Reading Engagement Signals",
            description: "<strong>Green lights:</strong> Quick replies, emojis, questions back to you, flirty language. Transition now.<br><br><strong>Yellow lights:</strong> Slow replies, short answers, topic changes. Build more rapport first.<br><br><strong>Red lights:</strong> One-word answers, ignoring questions, disengagement. Move on.",
            note: "Don't force transitions on unengaged fans. You'll waste time and kill the vibe."
          },
          {
            title: "Match Subscriber Type",
            description: "Casual fans need gentle, playful transitions. Submissive fans respond to direct, dominant language. Kink-focused fans want scenarios that feed their fantasy. One size does not fit all.",
            example: "Casual: 'If you were here, what would you make me for breakfast?'<br>Submissive: 'If we showered together, I'd probably take all the water and make you just watch me.'"
          },
          {
            title: "Building Curiosity for PPV",
            description: "Act hesitant or embarrassed about the video. Vulnerability makes content feel exclusive. Don't reveal what it is - make them ask. Curiosity drives urgency.",
            example: "'I'm on the fence about this one...' beats 'Check out my new video!' every time."
          },
          {
            title: "Context Is King",
            description: "Add reasons or backstory before pivoting. 'I was supposed to pick up a friend but slept in' feels real. 'How would you wake me up?' without context feels forced.",
            note: "Context disarms their guard and makes the pivot feel like natural conversation flow."
          },
          {
            title: "The 3-Part Ask Formula",
            description: "This formula is designed to flow naturally in one sentence while hitting all the psychological triggers.",
            example: "<strong>Emotion + Offer + Call to Action</strong><br><br>\"I'm so wet right now (emotion)... I want to show you the video I just took (offer)... Do you want to see it? (call to action)\"",
            note: "The emotion creates urgency. The offer describes value. The call to action pushes for immediate decision."
          },
          {
            title: "Fatal Mistakes to Avoid",
            description: "<strong>Transitioning too early:</strong> You seem transactional, not relational. Wait 5-10 minutes.<br><br><strong>Being too direct:</strong> 'Want to buy content?' kills the mood. Stay playful and indirect.<br><br><strong>Ignoring subscriber type:</strong> Casual fans need gentle pivots. Submissive fans need dominant language.",
            example: "Match the transition to the fan's energy. One size does not fit all."
          },
          {
            title: "Illusion of Choice Increases Conversions",
            description: "Open-ended questions (\"What do you want?\") can paralyze decision-making. Multiple choice eliminates this problem.",
            example: "\"Do you want to see me bent over or on top?\"<br><br>Both options lead to a sale. The fan feels in control, but you're guiding them to buy something you already have in the vault."
          }
        ],
        bestPractices: [
          {
            title: "Wait 5-10 Minutes Before Transitioning",
            description: "Build rapport first. Fans need to feel comfortable before you shift to sales mode."
          },
          {
            title: "Use Bridges, Not Jumps",
            description: "Connect their interests to sexual topics smoothly. Show you were listening while steering the conversation."
          },
          {
            title: "Always Acknowledge Personal Shares",
            description: "When they open up or compliment you, acknowledge it clearly. This builds emotional investment."
          },
          {
            title: "Escalate in Layers",
            description: "Start suggestive, then descriptive, then explicit. Save the highest intensity for the final upsell."
          },
          {
            title: "Match Energy and Tone",
            description: "Casual fans need playful transitions. Submissive fans need dominant language. Kink fans need fantasy fuel."
          },
          {
            title: "Hook Before You Sell",
            description: "Tease the content before sending the PPV. Build curiosity and anticipation first."
          },
          {
            title: "Use the 3-Part Ask",
            description: "Emotion + Offer + Call to Action. This formula flows naturally and maximizes unlock rates."
          },
          {
            title: "Test and Iterate",
            description: "Not every transition works with every fan. Pay attention to what gets responses and double down on what works."
          },
          {
            title: "Don't Force It",
            description: "If a fan isn't engaging, move on. No transition is good enough to save an uninterested subscriber."
          }
        ]
      },

      overview: {
        description: `<div class="space-y-6">
          <div>
            <div class="p-6 rounded-lg mb-6" style="background: rgba(245, 158, 11, 0.2); border: 2px solid rgba(245, 158, 11, 0.5);">
              <h2 class="font-bold text-white text-3xl mb-3 text-center">The Art of the Invisible Transition</h2>
              <p class="text-amber-200 text-lg text-center">Master the theoretical framework that separates chatters who beg from those who guide subscribers into buying without them noticing.</p>
            </div>
            <p class="text-slate-300 mb-3">Most chatters lose sales the moment they try to sell. The shift from friendly conversation to 'buy my content' is so jarring that subscribers disengage immediately. This module teaches you the psychological framework behind seamless transitions - the principles, timing strategies, and formulas that make sales feel natural instead of forced.</p>
            <div class="grid grid-cols-2 gap-4 my-4">
              <div class="p-4 rounded-lg" style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3);">
                <p class="font-bold text-amber-300 mb-2">Core Framework</p>
                <p class="text-slate-300 text-sm">Pacing, bridging, acknowledgment, and escalation - the foundational principles of invisible selling.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3);">
                <p class="font-bold text-amber-300 mb-2">The Perfect Ask</p>
                <p class="text-slate-300 text-sm">The 3-part formula (Emotion + Offer + Call to Action) that maximizes unlock rates.</p>
              </div>
            </div>
          </div>
        </div>`,
        goal: "Master the psychological framework and core principles behind seamless transitions. Learn the Perfect Ask formula, timing strategies, bridge techniques, and engagement signal reading. Understand how to match your approach to subscriber type, use the illusion of choice, and escalate gradually without alerting their guard. This is the theoretical foundation that makes all transition scripts work.",
      },

      mindMap: {
        id: "center",
        title: "Transition Framework",
        x: 0,
        y: 0,
        color: "#F59E0B",
        icon: "🔄",
        children: [
          {
            id: "chat-to-sexting",
            title: "Conversation to Sexting",
            x: -420,
            y: -200,
            color: "#D97706",
            icon: "💬",
            children: [
              {
                id: "pacing",
                title: "Pacing is Everything",
                x: -720,
                y: -300,
                color: "#B45309"
              },
              {
                id: "bridge",
                title: "Use a Bridge",
                x: -720,
                y: -220,
                color: "#B45309"
              },
              {
                id: "acknowledge",
                title: "Acknowledge & Mirror",
                x: -720,
                y: -140,
                color: "#B45309"
              },
              {
                id: "escalate",
                title: "Escalate Gradually",
                x: -720,
                y: -60,
                color: "#B45309"
              }
            ]
          },
          {
            id: "sexting-to-sales",
            title: "Sexting to Sales",
            x: 420,
            y: -200,
            color: "#FBBF24",
            icon: "💰",
            children: [
              {
                id: "hook",
                title: "The Power of the Hook",
                x: 720,
                y: -300,
                color: "#FCD34D"
              },
              {
                id: "perfect-ask",
                title: "Formula: The Perfect Ask (3 Parts)",
                x: 720,
                y: -220,
                color: "#FCD34D"
              },
              {
                id: "match-content",
                title: "Match Content & Fantasy",
                x: 720,
                y: -140,
                color: "#FCD34D"
              },
              {
                id: "illusion",
                title: "Use Illusion of Choice",
                x: 720,
                y: -60,
                color: "#FCD34D"
              }
            ]
          },
          {
            id: "transition-tips",
            title: "Key Principles",
            x: 0,
            y: 220,
            color: "#F59E0B",
            icon: "✨",
            children: [
              {
                id: "frame-exclusive",
                title: "Frame as Exclusive",
                x: -260,
                y: 340,
                color: "#D97706"
              },
              {
                id: "avoid-jarring",
                title: "Avoid Jarring Shifts",
                x: 0,
                y: 380,
                color: "#D97706"
              },
              {
                id: "build-momentum",
                title: "Build Natural Momentum",
                x: 260,
                y: 340,
                color: "#D97706"
              }
            ]
          }
        ]
      },

      steps: [],
      examples: [],
      recap: [
        "Wait 5-10 minutes into natural conversation before transitioning - too early feels transactional",
        "Every transition has two parts: opener (casual, relatable) and pivot (shifts to intimacy or curiosity)",
        "Use bridges to connect their interests to sexual topics smoothly. Show you were listening",
        "Always acknowledge compliments and personal shares. Ignoring them breaks rapport",
        "Escalate gradually. Each message should be slightly hotter than the last - start at Level 5 and you flatline",
        "Never just drop a PPV. Always use a hook to create anticipation and curiosity first",
        "The Perfect Ask has 3 parts: Emotion + Offer + Call to Action in one sentence",
        "Add context before pivoting: backstory makes transitions feel real, not forced",
        "Use multiple choice questions instead of open-ended ones for higher conversions",
        "Match transitions to subscriber type: casual fans need gentle pivots, submissive fans need dominant language",
        "Watch for engagement signals: quick replies, emojis, questions back to you - that's your green light",
        "The Perfect Ask formula maximizes unlock rates by combining emotion, clear offer, and immediate call to action",
        "Illusion of choice increases conversions - both options lead to a sale but the fan feels in control",
        "If a fan isn't engaging, move on - no transition is good enough to save an uninterested subscriber",
        "Test and iterate: pay attention to what gets responses and double down on what works",
      ],
    },
    transitionTypes: {
      title: "Complete Transition Script Library",
      skillType: "Complete Script Library",
      accentColor: "#F59E0B",
      
      leftColumn: {
        subtitle: "Copy-paste ready scripts for every situation:",
        sections: [
          {
            title: "10 Transitions for Sexting Sequences",
            whyItWorks: [
              "<strong>These transitions guide ongoing conversations into 'if you were here' scenarios.</strong> You're building a mental movie where the subscriber imagines being with you, which makes live content and sexting feel like the only natural next step."
            ],
            steps: [
              {
                title: "Netflix Transition",
                description: "Start with: 'I swear I finished everything on Netflix.' Chat about shows, then pivot with 'If you were here, what show would you put on for us?' Fans usually imply they'd skip the show entirely.",
                tip: "Works best with casual fans who enjoy banter before getting sexual."
              },
              {
                title: "Sleeping In Transition",
                description: "Open with: 'Are you an early riser or a stay-in-bed-till-11 type? I waste so much time.' Add context: 'I was supposed to pick up a friend but slept in.' Pivot: 'How would you wake me up?'",
                example: "The playful, flirty undertone makes them respond with something suggestive."
              },
              {
                title: "Night Out Transition",
                description: "Say: 'My friends want me to go out tomorrow but I'm hesitant.' Discuss the hassle of getting ready, then: 'If you were here, would you help me pick what to wear?' or 'Getting home after is more fun anyway.'",
                tip: "Perfect for selling content featuring outfits or post-night-out scenarios."
              },
              {
                title: "Working Out Transition",
                description: "Open: 'I need to go exercise, I've been resting too hard.' Banter about fitness, then: 'Do you think you could outlift me if we trained together?' Keep it light and jokey to ease into flirtation.",
                example: "Playful challenges lower their guard and make the sexual shift feel natural."
              },
              {
                title: "Shower Transition",
                description: "Start: 'You know when you need to shower but just lie in bed putting it off?' Discuss hot vs. cold showers, then: 'If we showered together, would you try it my way?' Sparks intimacy without force.",
                tip: "Shower scenarios are universally relatable and easily sexualized."
              },
              {
                title: "Air Conditioner Transition",
                description: "Say: 'It's freezing/hot here and my air con's broken.' Complain about discomfort, then: 'How would you cool me down or warm me up if you were here?' Keep it flirty and casual.",
                example: "Temperature complaints are mundane enough to feel natural, intimate enough to pivot."
              },
              {
                title: "Midnight Snack Transition",
                description: "Ask: 'Is getting up to make meals in the middle of the night normal or am I weird?' Chat about food habits, then: 'If you were here, what would you make me?' Prod further: 'What would we have for dessert after?'",
                tip: "Food conversations are safe territory that easily shift to 'after' activities."
              },
              {
                title: "TV Transition (Submissive Fans)",
                description: "Open: 'Watching TV is so boring, it just puts me to sleep.' For femdom/kink fans: 'It would be funny if I stood in front of the TV and made you watch me.' Forward but playful.",
                example: "Only use this with fans who've shown interest in submissive dynamics."
              },
              {
                title: "Shower Transition (Submissive Fans)",
                description: "Say: 'Isn't showering together so overrated?' Then: 'If we showered together, I'd probably take all the water and make you just watch me.' Suits fans into humiliation or domination.",
                tip: "Test the waters first. If they haven't hinted at kink interest, skip this."
              },
              {
                title: "Watch Me Transition (Submissive Fans)",
                description: "Open: 'I had the weirdest dream where I was having sex surrounded by people watching.' Pivot: 'If I told you you could only watch, I doubt you'd even be able to.' Frames content as a teasing game.",
                example: "Appeals to voyeurism and cuckold fantasies. Use only with confirmed kink fans."
              }
            ]
          },
          {
            title: "10 Transitions for PPV Sales",
            whyItWorks: [
              "<strong>PPV transitions build curiosity and exclusivity around individual videos.</strong> You're not selling content directly - you're selling the mystery of what they might see, which makes them ask to unlock it."
            ],
            steps: [
              {
                title: "Deleted Video Transition",
                description: "Open: 'When you go through your camera roll deleting stuff you hate.' Chat about embarrassing videos, then: 'There's this one video I'm on the fence about uploading.' Stay hesitant to build curiosity.",
                tip: "Don't reveal what it is. Make them ask. Curiosity drives the sale."
              },
              {
                title: "Sore Transition",
                description: "Say: 'I am so sore, I need an ice pack.' Act embarrassed, then: 'I did something the other day and kind of regret it.' Hints at a hot video without giving details.",
                example: "Embarrassment signals vulnerability, which makes the content feel exclusive."
              },
              {
                title: "Showering Hint Transition",
                description: "Open: 'Typing with a wet phone is so hard.' Mention taking your phone in the shower, then: 'It's mostly from this one time I recorded something cringe-worthy.' Act awkward to build intrigue.",
                tip: "Awkwardness makes them curious about what you're hiding."
              },
              {
                title: "Returning Outfit Transition",
                description: "Say: 'I want to return some stuff I bought but they won't let me.' Discuss an unusual outfit, then: 'I took a video in it and almost deleted it because I felt embarrassed.' Builds exclusivity.",
                example: "Outfit videos feel special because they're 'not supposed to exist' anymore."
              },
              {
                title: "Voice Transition",
                description: "Open: 'Some guy called my voice annoying, sucks.' Chat about mean fans, then: 'That's why I rarely share videos with me talking.' Perfect for selling JOI or talking videos.",
                tip: "Insecurity about your voice makes talking videos feel rarer and more personal."
              },
              {
                title: "Up All Night Transition",
                description: "Say: 'I'm exhausted, was up all night making something.' Don't reveal what, then: 'I finished it but feel like it might be too much.' Creates exclusivity and vulnerability.",
                example: "The 'too much' framing makes them want to see what crossed the line."
              },
              {
                title: "Boob Job/BBL Transition",
                description: "Ask: 'What are your honest thoughts about BBLs and boob jobs, [Name]?' Personalize with their name. Share a story about someone asking if you'd get surgery, then: 'I sent this one piece of content and now I'm unsure.'",
                tip: "Personalizing with their name increases engagement and makes the ask feel intimate."
              },
              {
                title: "Watching Transition (Submissive Fans)",
                description: "Ask: 'How common is it for guys to like watching other people have sex?' Discuss voyeurism, then: 'I took something the other night while doing it, thinking about you watching.' For cuck/voyeur fans.",
                example: "Only use with fans who've expressed interest in voyeuristic fantasies."
              },
              {
                title: "Annoying Subscriber Transition",
                description: "Say: 'Guys can be so annoying on OF, lol. Not you.' Discuss a fan begging for a video, then: 'If I was going to show anyone, I'd consider you because you've earned it.' Makes the offer feel exclusive.",
                tip: "Rewards loyalty and makes them feel special compared to 'annoying' fans."
              },
              {
                title: "Challenge Transition (Submissive Fans)",
                description: "Ask: 'Do you think it's unreasonable to expect a guy to last 5 minutes?' (adjust time to video length). Share a story about a guy finishing too fast, then: 'I doubt you could last. How will you prove it?'",
                example: "Challenges add a playful competitive edge that makes them want to 'prove' themselves."
              }
            ]
          }
        ]
      },

      rightColumn: {
        sections: [
          {
            title: "The Two Types of Transitions",
            description: "<strong>Sexting Transitions:</strong> Guide ongoing conversations into 'if you were here' scenarios. Build mental movies that make live content feel natural.<br><br><strong>PPV Transitions:</strong> Build curiosity and exclusivity around individual videos. You're selling mystery, not content.",
            note: "Know which type you need before you start. Mixing them confuses the subscriber and kills momentum."
          },
          {
            title: "Match Subscriber Type",
            description: "Casual fans need gentle, playful transitions. Submissive fans respond to direct, dominant language. Kink-focused fans want scenarios that feed their fantasy. One size does not fit all.",
            example: "Casual: 'If you were here, what would you make me for breakfast?'<br>Submissive: 'If we showered together, I'd probably take all the water and make you just watch me.'"
          },
          {
            title: "Building Curiosity for PPV",
            description: "Act hesitant or embarrassed about the video. Vulnerability makes content feel exclusive. Don't reveal what it is - make them ask. Curiosity drives urgency.",
            example: "'I'm on the fence about this one...' beats 'Check out my new video!' every time."
          },
          {
            title: "Context Makes It Real",
            description: "Add reasons or backstory before pivoting. 'I was supposed to pick up a friend but slept in' feels real. 'How would you wake me up?' without context feels forced.",
            note: "Context disarms their guard and makes the pivot feel like natural conversation flow."
          },
          {
            title: "Universal vs. Niche Transitions",
            description: "Netflix, Shower, Night Out, and Workout work with almost everyone. TV Dominance, Watch Me, and Challenge only work with fans who've shown kink interest.",
            example: "Test the waters first. If they haven't hinted at submissive fantasies, stick with universal transitions."
          },
          {
            title: "When to Use Each Script",
            description: "<strong>Morning/Early Day:</strong> Sleeping In, Working Out, Shower<br><br><strong>Evening/Night:</strong> Netflix, Night Out, Midnight Snack<br><br><strong>Any Time:</strong> Deleted Video, Sore, Voice, Up All Night",
            note: "Match the transition to the time of day for maximum believability."
          }
        ],
        bestPractices: [
          {
            title: "Copy the Opener Exactly",
            description: "These scripts work because they've been tested thousands of times. Don't improvise - use the exact opener."
          },
          {
            title: "Add Your Personal Context",
            description: "The opener stays the same, but add your own backstory details to make it feel authentic."
          },
          {
            title: "Watch for Their Response",
            description: "If they engage with the opener, proceed to the pivot. If they ignore it, try a different transition."
          },
          {
            title: "Don't Rush the Pivot",
            description: "Chat about the topic for 2-3 messages before shifting to the 'if you were here' moment."
          },
          {
            title: "Match Intensity to Subscriber Type",
            description: "Casual fans need gentle pivots. Submissive fans need dominant language. Read the room."
          },
          {
            title: "Keep a Rotation",
            description: "Don't use the same transition with the same subscriber twice. Rotate through different scripts."
          },
          {
            title: "Submissive Scripts Need Confirmation",
            description: "Before using TV, Shower (Submissive), Watch Me, or Challenge transitions, make sure the fan has shown kink interest."
          },
          {
            title: "PPV Transitions Require Hesitation",
            description: "The secret to PPV scripts is acting embarrassed or unsure. Confidence kills curiosity."
          },
          {
            title: "Test and Track Results",
            description: "Note which transitions get the best responses and double down on those with similar subscribers."
          }
        ]
      },

      overview: {
        description: `<div class="space-y-6">
          <div>
            <div class="p-6 rounded-lg mb-6" style="background: rgba(245, 158, 11, 0.2); border: 2px solid rgba(245, 158, 11, 0.5);">
              <h2 class="font-bold text-white text-3xl mb-3 text-center">20+ Battle-Tested Transition Scripts</h2>
              <p class="text-amber-200 text-lg text-center">Copy-paste ready transitions for every subscriber type and context. No guessing. No improvising. Just proven scripts that work.</p>
            </div>
            <p class="text-slate-300 mb-3">This is your complete script library - 20+ transitions that have been tested in real conversations and proven to convert. Each script includes the exact opener, conversation flow, and pivot moment. Netflix, Shower, Deleted Video, Sore, Up All Night, and 15+ more scenarios ready to deploy immediately.</p>
            <div class="grid grid-cols-2 gap-4 my-4">
              <div class="p-4 rounded-lg" style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3);">
                <p class="font-bold text-amber-300 mb-2">10 Sexting Transitions</p>
                <p class="text-slate-300 text-sm">Use 'if you were here' scenarios to build mental movies that make live content and sexting feel inevitable.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3);">
                <p class="font-bold text-amber-300 mb-2">10 PPV Transitions</p>
                <p class="text-slate-300 text-sm">Act hesitant or embarrassed about videos. Build curiosity and exclusivity - sell the mystery, not the content.</p>
              </div>
            </div>
          </div>
        </div>`,
        goal: "Get 20+ copy-paste ready transitions for every subscriber type and context. Netflix, Sleeping In, Shower, Working Out for casual fans. TV Dominance, Watch Me, Challenge for submissive fans. Deleted Video, Sore, Voice, Up All Night for PPV sales. Each script includes exact openers, conversation flow, and pivot moments. No theory - just battle-tested scripts you can use immediately.",
      },

      mindMap: {
        id: "center",
        title: "Transition Scripts",
        x: 0,
        y: 0,
        color: "#F59E0B",
        icon: "📝",
        children: [
          {
            id: "sexting-scripts",
            title: "10 Sexting Scripts",
            x: -420,
            y: -200,
            color: "#D97706",
            icon: "💬",
            children: [
              { id: "netflix", title: "Netflix", x: -720, y: -350, color: "#B45309" },
              { id: "sleeping", title: "Sleeping In", x: -720, y: -270, color: "#B45309" },
              { id: "night-out", title: "Night Out", x: -720, y: -190, color: "#B45309" },
              { id: "workout", title: "Working Out", x: -720, y: -110, color: "#B45309" },
              { id: "shower", title: "Shower", x: -720, y: -30, color: "#B45309" }
            ]
          },
          {
            id: "ppv-scripts",
            title: "10 PPV Scripts",
            x: 420,
            y: -200,
            color: "#FBBF24",
            icon: "💰",
            children: [
              { id: "deleted", title: "Deleted Video", x: 720, y: -350, color: "#FCD34D" },
              { id: "sore", title: "Sore", x: 720, y: -270, color: "#FCD34D" },
              { id: "shower-hint", title: "Showering Hint", x: 720, y: -190, color: "#FCD34D" },
              { id: "outfit", title: "Returning Outfit", x: 720, y: -110, color: "#FCD34D" },
              { id: "voice", title: "Voice", x: 720, y: -30, color: "#FCD34D" }
            ]
          },
          {
            id: "submissive-scripts",
            title: "Submissive/Kink Scripts",
            x: 0,
            y: 220,
            color: "#F59E0B",
            icon: "🔥",
            children: [
              { id: "tv-dom", title: "TV Dominance", x: -260, y: 340, color: "#D97706" },
              { id: "shower-dom", title: "Shower Dominance", x: 0, y: 380, color: "#D97706" },
              { id: "watch", title: "Watch Me", x: 260, y: 340, color: "#D97706" }
            ]
          }
        ]
      },

      steps: [],
      examples: [],
      recap: [
        "Netflix, Sleeping In, Night Out, Workout, and Shower transitions work universally with casual fans",
        "Deleted Video, Sore, Showering Hint, Returning Outfit, and Voice build PPV curiosity through hesitation",
        "TV Dominance, Shower (Submissive), Watch Me, and Challenge only work with confirmed kink fans",
        "Every transition has two parts: opener (casual, relatable) and pivot (shifts to intimacy or curiosity)",
        "Add your own context to the opener - the exact words stay the same but make the backstory your own",
        "Act hesitant or embarrassed for PPV transitions - confidence kills curiosity",
        "Match the transition to time of day: Sleeping In for morning, Netflix for evening, Deleted Video anytime",
        "Don't rush the pivot - chat about the topic for 2-3 messages before shifting to 'if you were here'",
        "Watch for engagement signals: quick replies, emojis, questions back - that's your green light to pivot",
        "Rotate through different scripts - don't use the same transition twice with the same subscriber",
        "Submissive scripts need confirmation first - test the waters before going dominant",
        "PPV transitions work because you're selling mystery, not content - make them ask what it is",
        "Copy the opener exactly as written - these have been tested thousands of times",
        "Universal transitions (Netflix, Shower, Night Out) work with 90% of subscribers",
        "If they ignore the opener, try a different transition - not every script works with every fan",
        "Track which transitions get responses and double down on those with similar subscribers",
      ],
    },
    priceResistance: {
      title: "Strategy for Price Resistance",
      skillType: "Authority & Negotiation Tactics",
      accentColor: "#EF4444",
      
      // LEFT COLUMN CONTENT - Easy to edit
      leftColumn: {
        subtitle: "When a fan hesitates on a $55 PPV:",
        sections: [
          {
            title: "Step 1: Maintain Your Authority (Two Great Options)",
            whyItWorks: [
              "<strong>The worst thing you can do is instantly lower the price.</strong> Instead of jumping straight to a discount, you use one of these two moves to keep the content feeling premium and special, which is why it's $55 in the first place.",
              "Both options maintain the content's perceived value while giving you a strategic response that doesn't immediately cave to price resistance."
            ],
            steps: [
              {
                title: "Option A: The 'Save It' Tactic",
                description: "You tell him: 'No worries at all. I totally get it. I'll save this video for later. I only like sending it when it feels right, and I don't want to push you.' (Then, remove the offer if you can.)",
                example: "<strong>What you're doing:</strong> Creating FOMO (Fear of Missing Out). He thinks he missed a unique chance, and the video's value instantly goes up in his eyes. He is much more likely to buy it (or something else) the next time you offer it.",
                tip: "This reversal creates scarcity and makes him reconsider. The content hasn't lost value; it's gained urgency."
              },
              {
                title: "Option B: The 'Price + Bonus' Deal",
                description: "You tell him: 'Because we had such a great conversation, how about we meet in the middle? I can do $50, but I'm going to throw in an extra surprise just for you - something I wouldn't usually give out.'",
                example: "<strong>What you're doing:</strong> You're doing him a favor. He feels like he got an exclusive deal with a bonus, and the small price dip is justified because of the extra content. The content itself still feels valuable.",
                tip: "The bonus changes the psychology. He's not getting a discount because the content isn't worth it; he's getting extra value because you like him."
              }
            ]
          },
          {
            title: "The Danger: Why You Can't Just Discount",
            whyItWorks: [
              "<strong>The training is very strict on this point: Do not immediately discount content.</strong> It might get you a quick sale, but it kills your ability to make money in the long run.",
              "Every time you discount without strategy, you train the fan that your prices are negotiable and your content isn't really worth what you're asking."
            ],
            steps: [
              {
                title: "You Kill Exclusivity and FOMO",
                description: "When you lower the price right away, you teach him that the video wasn't really a 'limited time' or 'special' offer. You just told him it was special, and then you immediately contradict yourself. The value of the content drops.",
                example: "He learns: 'If I wait, she'll lower the price. This isn't actually exclusive.'"
              },
              {
                title: "You Condition Him to Wait",
                description: "If he sees you drop the price once, he realizes: 'If I just ignore her, she'll send it again for $10 less next time.' You are training him to wait you out instead of buying immediately, which slows down your whole shift.",
                example: "Future behavior: He hesitates on every offer, expecting a discount if he just waits long enough."
              },
              {
                title: "He Takes Control",
                description: "When you lower the price, the fan feels like he is in charge of the price. The training says his brain reclassifies the content from premium to negotiable. You want to be the one guiding the sale, not the other way around.",
                example: "Power shift: The content becomes something he can haggle over, not something exclusive he should jump on immediately."
              }
            ]
          }
        ]
      },

      // RIGHT COLUMN CONTENT - Easy to edit
      rightColumn: {
        sections: [
          {
            title: "The Psychology Behind the 'Save It' Tactic",
            description: "When you remove the offer, you're creating <strong>loss aversion</strong>. The fan's brain switches from 'Should I buy this?' to 'Wait, did I just lose my chance?'",
            example: "<strong>Before:</strong> 'Maybe I'll buy it later.'<br><strong>After:</strong> 'I should have gotten it when I had the chance.'",
            note: "Loss aversion is more powerful than gain motivation. People fear missing out more than they desire acquiring something."
          },
          {
            title: "The Psychology Behind the 'Price + Bonus' Deal",
            description: "You're not just lowering the price. You're <strong>reframing the transaction</strong> as a favor and adding extra value that justifies the new price point.",
            example: "He's not thinking: 'She lowered the price because it wasn't worth $55.'<br>He's thinking: 'She likes me enough to throw in extra content. This is a great deal.'",
            note: "The bonus changes the entire frame. It's not a discount; it's an upgrade with a small price adjustment."
          },
          {
            title: "Why Immediate Discounts Kill Long-Term Revenue",
            description: "Every immediate discount teaches the fan that your prices are soft. Once he learns this pattern, he'll <strong>never pay full price again</strong>.",
            example: "<strong>First time:</strong> $55 → You drop to $45<br><strong>Second time:</strong> $55 → He waits → You drop to $45<br><strong>Third time:</strong> $55 → He ignores → Expects $40",
            note: "You've trained him to negotiate every single offer. Your shift becomes slower and less profitable."
          },
          {
            title: "Maintaining Authority Increases Respect",
            description: "When you hold your frame and use strategic responses, the fan <strong>respects your pricing</strong>. This respect translates to higher conversions and bigger sales over time.",
            note: "Fans who respect your authority are more likely to buy high-ticket items without hesitation because they trust the value you're offering."
          },
          {
            title: "The Long-Term Effect of Strategic Responses",
            description: "Using the 'Save It' tactic or 'Price + Bonus' deal doesn't just handle the current objection. It <strong>trains the fan</strong> how to interact with you going forward.",
            example: "<strong>Save It Tactic Result:</strong> He learns offers are limited and he should act fast.<br><strong>Price + Bonus Result:</strong> He learns you're willing to work with him, but only when you're in control.",
            note: "Both tactics keep you in the driver's seat. The fan never learns that hesitation leads to automatic discounts."
          }
        ],
        bestPractices: [
          {
            title: "Never Discount Immediately",
            description: "Always use one of the two strategic responses first. Immediate discounts kill perceived value and train bad behavior."
          },
          {
            title: "Frame Bonuses as Exclusive",
            description: "When using the Price + Bonus deal, make the bonus feel special and limited, not like a standard discount tactic."
          },
          {
            title: "Remove the Offer When Using Save It",
            description: "If you say you're saving it for later, actually remove or delay the offer. This reinforces scarcity and FOMO."
          },
          {
            title: "Keep Price Adjustments Small",
            description: "If you do adjust the price, keep it minimal ($55 to $50, not $55 to $30). Large drops destroy credibility."
          },
          {
            title: "Stay Confident and Warm",
            description: "Never sound desperate or apologetic. Your tone should communicate that you're doing them a favor, not that you need the sale."
          }
        ]
      },

      overview: {
        description: `<div class="space-y-6">
          <div>
            <div class="p-6 rounded-lg mb-6" style="background: rgba(239, 68, 68, 0.2); border: 2px solid rgba(239, 68, 68, 0.5);">
              <h2 class="font-bold text-white text-3xl mb-3 text-center">Hold Your Frame, Keep Your Authority</h2>
              <p class="text-red-200 text-lg text-center">Price resistance is a test. Pass it, and you win the long game.</p>
            </div>
            <p class="text-slate-300 mb-3">When a fan hesitates on a $55 PPV, your response determines not just this sale, but every future interaction. Immediate discounts kill exclusivity, train hesitation, and transfer control to the fan. Strategic responses maintain authority, create urgency, and preserve long-term revenue potential.</p>
            <div class="grid grid-cols-2 gap-4 my-4">
              <div class="p-4 rounded-lg" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3);">
                <p class="font-bold text-red-300 mb-2">The Save It Tactic</p>
                <p class="text-slate-300 text-sm">Remove the offer to create FOMO. The content's value increases when it feels like a missed opportunity.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3);">
                <p class="font-bold text-red-300 mb-2">The Price + Bonus Deal</p>
                <p class="text-slate-300 text-sm">Small price adjustment plus exclusive bonus. Reframe as a favor, not a discount.</p>
              </div>
            </div>
          </div>
        </div>`,
        goal: "Master the art of handling price resistance without destroying long-term value. Learn to maintain authority through strategic responses that preserve exclusivity, create urgency, and train fans to respect your pricing. Every objection is an opportunity to strengthen your position and increase future conversions.",
      },

      mindMap: {
        id: "center",
        title: "Price Resistance Strategy",
        x: 0,
        y: 0,
        color: "#EF4444",
        icon: "💪",
        children: [
          {
            id: "maintain-authority",
            title: "Maintain Your Authority",
            x: -400,
            y: -200,
            color: "#DC2626",
            icon: "👑",
            children: [
              {
                id: "save-it",
                title: "Option A: The 'Save It' Tactic",
                x: -700,
                y: -280,
                color: "#B91C1C"
              },
              {
                id: "price-bonus",
                title: "Option B: The 'Price + Bonus' Deal",
                x: -700,
                y: -180,
                color: "#B91C1C"
              }
            ]
          },
          {
            id: "dangers",
            title: "Why You Can't Just Discount",
            x: 400,
            y: -200,
            color: "#F87171",
            icon: "⚠️",
            children: [
              {
                id: "kill-exclusivity",
                title: "You Kill Exclusivity and FOMO",
                x: 720,
                y: -300,
                color: "#FCA5A5"
              },
              {
                id: "condition-wait",
                title: "You Condition Him to Wait",
                x: 720,
                y: -220,
                color: "#FCA5A5"
              },
              {
                id: "he-controls",
                title: "He Takes Control",
                x: 720,
                y: -140,
                color: "#FCA5A5"
              }
            ]
          },
          {
            id: "psychology",
            title: "The Psychology",
            x: 0,
            y: 180,
            color: "#EF4444",
            icon: "🧠",
            children: [
              {
                id: "loss-aversion",
                title: "Loss Aversion Power",
                x: -280,
                y: 300,
                color: "#DC2626"
              },
              {
                id: "reframe",
                title: "Reframe as Favor Not Discount",
                x: 0,
                y: 340,
                color: "#DC2626"
              },
              {
                id: "long-term",
                title: "Long-Term Revenue Protection",
                x: 280,
                y: 300,
                color: "#DC2626"
              }
            ]
          }
        ]
      },

      overviewImage: objectionHandlingImage,
      steps: [],
      examples: [],
      recap: [
        "Never immediately discount when a fan hesitates on a high-ticket PPV",
        "The Save It Tactic: Remove the offer to create FOMO and increase perceived value",
        "The Price + Bonus Deal: Small adjustment plus bonus reframes as favor, not discount",
        "Immediate discounts kill exclusivity and teach fans your prices are negotiable",
        "Discounting trains fans to wait you out instead of buying immediately",
        "When you lower prices, fans take control and reclassify content as negotiable",
        "Strategic responses maintain authority and increase long-term respect",
        "Hold your frame and keep price adjustments minimal if you do adjust",
        "Fans who respect your authority convert faster and buy bigger tickets",
        "Every price resistance moment is a test that determines all future interactions",
      ],
    },
    objectionHandling: {
      title: "Mastering Objection Handling",
      skillType: "Complete DM Sales System",
      accentColor: "#F97316",
      
      leftColumn: {
        subtitle: "The skill that separates mediocre chatters from elite ones:",
        sections: [
          {
            title: "The Four Fatal Mistakes",
            whyItWorks: [
              "<strong>Most chatters destroy their sales before they even start.</strong> When a subscriber hesitates, they panic and make one of these four mistakes that kills both the current sale and all future revenue.",
              "Understanding these mistakes isn't just about avoiding them - it's about recognizing that objection handling is where amateurs show their hand and professionals show their mastery."
            ],
            steps: [
              {
                title: "Tone Changes (The Biggest Killer)",
                description: "Before asking for money, you're friendly, engaging, using emojis, replying quickly. The moment they hesitate? Your tone goes cold, indifferent, or passive-aggressive. This signals to the subscriber that their only value to you is money. You've just burned a bridge that could have been worth thousands.",
                example: "❌ Before: \"heyy babe! 😊 how was your day? tell me everything!\"<br>✅ After rejection: \"ok\"",
                tip: "Your tone must stay <strong>exactly the same</strong> before and after they decline. If they feel like the relationship only existed to extract money, they'll never spend big with you."
              },
              {
                title: "Desperation and Begging",
                description: "Excessive enthusiasm or begging for a sale backfires completely. People want what they can't have. When you beg, you hand all the power to the subscriber and make your content feel worthless.",
                example: "❌ \"Please please please get this! I worked so hard on it! I really need this sale!\"<br>✅ \"No worries at all! I totally get it 😊\"",
                tip: "Scarcity increases desire. Abundance kills it. Never beg."
              },
              {
                title: "Guilt Tripping",
                description: "Using guilt or negativity to push sales might work once, but it alienates subscribers permanently. Lines like 'So you don't think I'm worth it?' or 'I thought you actually liked me' make them feel manipulated and used.",
                example: "❌ \"wow... i guess you don't really care about me 😔\"<br>✅ \"All good babe! Maybe another time 💕\"",
                tip: "Short-term guilt sales destroy long-term revenue. You want subscribers who spend because they <em>want</em> to, not because they feel bad."
              },
              {
                title: "Price Dumping",
                description: "Dropping from $80 to $50 to $30 in rapid succession tells the subscriber your prices are fake and negotiable. You've just trained them to always push for discounts and never respect your pricing.",
                example: "❌ \"$80! no wait $50! okay fine $30!\"<br>✅ \"The price is $55, but I could add a little bonus if that helps 😊\"",
                tip: "Every time you price dump, you're teaching subscribers to wait you out. Protect your pricing authority like your income depends on it - because it does."
              }
            ]
          },
          {
            title: "Pre-Qualification: Stop Objections Before They Start",
            whyItWorks: [
              "<strong>Most objections happen because you offered the wrong content at the wrong time.</strong> If you qualify subscribers first, you avoid 70% of objections entirely.",
              "This isn't about interrogating them - it's about being strategic so your offers feel natural and perfectly timed."
            ],
            steps: [
              {
                title: "Test Availability Without Being Obvious",
                description: "Don't ask 'What are you up to?' like every other chatter. Use softer alternatives that test availability while feeling natural.",
                example: "✅ \"What are your plans for the evening?\"<br>✅ \"Do you have 20 minutes for me to vent about something?\"<br>✅ \"Are you free right now or are you busy?\"",
                tip: "These questions accomplish the same goal but don't trigger the 'here comes a sales pitch' alarm."
              },
              {
                title: "Match Content to Their Situation",
                description: "If Barry has 5 minutes left on his lunch break, don't try to sell a 30-minute texting script. Sell a quick photo set he can unlock and enjoy immediately. If James is home in bed with time, <em>that's</em> when you pitch the texting session.",
                example: "Quick lunch break = Photo set or short video<br>Home alone for hours = Texting session or long video<br>At work secretly = Something they can save for later",
                tip: "Content that fits their context converts 3x better than random offers."
              },
              {
                title: "Check Their Purchase History",
                description: "Use tools like Inflow to quickly see what they've bought before, how they buy (tips vs. unlocking PPVs), and any notes about upcoming purchases. This tells you what to offer and how to frame it.",
                example: "Bought videos before? Offer a video.<br>Tips frequently? Ask for a tip for 'something special.'<br>Never bought? Start with a low $15 test.",
                tip: "Stop guessing. Let their history tell you what they want."
              },
              {
                title: "Confirm Their Temperature",
                description: "Don't send explicit PPVs to someone who's not warmed up. You need to confirm they're horny enough before you pitch sexual content. Build heat first through flirty conversation, then strike when they're ready.",
                example: "❌ Sending a dildo video out of nowhere to someone watching TV<br>✅ Flirting, escalating tension, <em>then</em> offering the content when they're engaged",
                tip: "Random PPVs have a 5% unlock rate. Warmed-up PPVs have a 40%+ unlock rate. Do the math."
              }
            ]
          },
          {
            title: "Following Up After Sending PPVs",
            whyItWorks: [
              "<strong>Most chatters send a PPV and then... nothing.</strong> They move on to the next subscriber and forget about follow-up. That's leaving money on the table.",
              "Strategic follow-up uncovers objections gently and gives you a second chance to convert without seeming desperate."
            ],
            steps: [
              {
                title: "Don't Ghost Your Own PPVs",
                description: "Pin the chat. Open it in a new tab. Set a reminder. Do <em>something</em> to track whether they've seen it and how they reacted. Most chatters lose sales simply because they forget to follow up.",
                example: "Use your CRM or OnlyFans interface to mark chats with pending PPVs so you can circle back.",
                tip: "You sent the PPV. Now manage it like the asset it is."
              },
              {
                title: "When They Ignore the PPV and Keep Chatting",
                description: "They replied to your message but completely ignored the PPV. Don't beg. Don't change your tone. Stay unfazed and keep chatting. After two replies, casually reference the PPV with low-pressure humor or curiosity.",
                example: "✅ \"haha are you going to get this one or should we stop the fun for tonight? 😊\"<br>✅ \"omg I can't believe that's just sitting in the chat... it makes me nervous 😅\"",
                tip: "Humor and light nervousness spark curiosity without applying pressure. You're uncovering the objection, not forcing the sale."
              },
              {
                title: "When They Leave It on Read",
                description: "They've seen the PPV (blue ticks confirm it), but no response. Wait 3 minutes, then send a simple message with their name and a question mark. That's it. Don't write a paragraph. Don't guilt trip.",
                example: "✅ \"James?\"<br>✅ \"everything okay babe? 😊\"",
                tip: "This prompts a reply without seeming desperate. Once they respond, you can gently ask what's up."
              },
              {
                title: "Send a Timed Message to Re-Engage",
                description: "If they've ghosted the PPV entirely (no read, no response), wait 10-15 minutes, then send a casual, open-ended question that shifts the conversation away from the sale. This ropes them back in without making it about money.",
                example: "✅ \"so tell me... what's your ideal way to spend a Friday night? 🤭\"<br>✅ \"random question: if you could travel anywhere right now, where would you go?\"<br>��� \"okay real talk... what's something you've been craving lately? 😏\"",
                tip: "Open-ended questions restart the conversation on neutral ground. Once they're re-engaged, you can rebuild momentum and circle back to the PPV naturally."
              },
              {
                title: "Uncover the Real Objection",
                description: "Once they explain why they didn't buy or give any cue, now you can handle their specific objection. Don't guess - let them tell you what's stopping them, then address it strategically.",
                example: "They say it's too expensive → Value objection<br>They want different content → Content fit objection<br>They suspect you're an agency → Trust objection",
                tip: "Every objection has a specific playbook. Don't use the same response for every situation."
              }
            ]
          }
        ]
      },

      rightColumn: {
        sections: [
          {
            title: "Handling Value Objections: 'Too Expensive'",
            description: "Value on OnlyFans is entirely subjective. When someone says your content is too expensive, they mean they don't perceive it as worth the price. Your job is to inflate perceived value <em>before</em> you even think about discounting.",
            example: "<strong>Framework:</strong><br>1. Make the offer feel like a big deal<br>2. Add value before cutting price<br>3. Use FOMO and reverse psychology<br>4. Only discount as a last resort (slowly and deliberately)",
            note: "The goal isn't to drop the price - it's to make them <em>want</em> the content so badly that the price feels justified."
          },
          {
            title: "Tactic 1: Make It a Big Deal",
            description: "Use language that emphasizes exclusivity and generosity. Make it feel like they're getting access to something rare and special.",
            example: "✅ \"Okay... just this once because I'm in such a good mood 😊\"<br>✅ \"If you watch this entire video without finishing, I'll send you something extra for free\"<br>✅ \"Hm... I don't know... this one is really personal\""
          },
          {
            title: "Tactic 2: Add Value, Don't Cut Price",
            description: "Before you discount, offer bonuses. Add a dick rating, a texting session, voice notes, or a second video. This increases perceived value without damaging your pricing authority.",
            example: "✅ \"What if I threw in a 10-minute texting session afterward?\"<br>✅ \"Okay, if you get it, I'll rate your dick too 😏\"",
            note: "<strong>Critical:</strong> Don't make bonuses common. They should feel like rare favors, not standard practice."
          },
          {
            title: "Tactic 3: Use FOMO and Reverse Psychology",
            description: "Act nervous or embarrassed about the content. Hint that it's risky or intimate. Make them <em>curious</em> about what you're so worried about sharing.",
            example: "✅ \"I'm so nervous you'll judge me for this...\"<br>✅ \"This was all your fault, I might regret sending it\"<br>✅ \"Okay I'm deleting this in 10 minutes, it's too much\"",
            note: "Curiosity is one of the strongest purchasing triggers. Use it."
          },
          {
            title: "Tactic 4: Discounting (Last Resort Only)",
            description: "If you absolutely must discount, do it slowly and deliberately. Drop no more than 20% at a time. Remove extras instead of cutting price. Never discount more than twice.",
            example: "✅ First: \"Okay, $55 down to $45, but that's it babe\"<br>✅ Second: \"Fine, $40, but I'm removing the bonus\"",
            note: "Every discount trains subscribers to expect future discounts. Protect your pricing like your business depends on it."
          },
          {
            title: "Handling Content Fit Objections",
            description: "The subscriber wants content that doesn't exist in the PPV you sent, or they outright reject the content.",
            example: "<strong>Framework:</strong><br>1. Ignore the question briefly and keep chatting<br>2. Build excitement around a related scenario<br>3. Loop back to the original PPV<br>4. Use voice notes to stimulate imagination<br>5. Upsell with bundles if they still refuse"
          },
          {
            title: "Tactic: Divert with Texting",
            description: "Don't answer their question about specific content. Instead, pivot to a related 'what if' scenario that fits the actual content and gets them excited about it.",
            example: "❌ \"Does the video have X in it?\" → \"No, sorry\"<br>✅ \"Does the video have X in it?\" → \"omg what if I did X while thinking about you... would you like that? 😏\" (then loop back: \"That's exactly what I was thinking about while filming this\")",
            note: "You're redirecting their imagination to what <em>you</em> have, not what they think they want."
          },
          {
            title: "Tactic: Bundle Upsell",
            description: "If they flat-out refuse the content, offer a bundle deal where buying the original unlocks a discount on the content they actually want. Make it a game.",
            example: "✅ \"Okay, how about this: Get this one for $30, and I'll unlock the other one for $20 instead of $50. Deal?\"",
            note: "Bundles increase total spend while making them feel like they're winning."
          },
          {
            title: "Handling Trust Objections",
            description: "Subscribers sometimes suspect they're chatting with an agency, a bot, or that content is pre-recorded. This kills sales instantly if not handled correctly.",
            example: "<strong>Framework:</strong><br>1. Ignore the first time they mention it<br>2. Respond with humor and validation<br>3. Use real or AI voice notes<br>4. Share funny verification stories<br>5. Shift the conversation away from verification",
            note: "The goal is to make them feel heard without getting defensive or stopping the sales process."
          },
          {
            title: "Tactic: Respond with Humor",
            description: "Light-hearted jokes defuse tension and make you seem human without being defensive.",
            example: "✅ \"lol guess I'm ChatGPT on funny mode 😂\"<br>✅ \"Yeah it's so spammy here, I totally get it\"<br>✅ \"If I was a bot, I'd be way better at spelling 😅\"",
            note: "Humor signals authenticity. Defensiveness signals guilt."
          },
          {
            title: "Tactic: Voice Notes",
            description: "Have the creator send voice notes that respond naturally to something the subscriber said. This is the fastest way to build credibility.",
            example: "✅ Send a 5-second voice note laughing at something they said or mentioning their name",
            note: "If you don't have access to real voice notes, high-quality AI voice can work too - just make it natural."
          },
          {
            title: "Handling Mid-Sale Exits",
            description: "Subscriber says they need to leave (gym, work, etc.) during a sale. This could be real or an excuse to avoid spending more.",
            example: "<strong>Framework:</strong><br>1. Ignore the excuse and send the next content<br>2. Push up to two 'no's'<br>3. Back off after the third 'no'<br>4. If they keep buying despite excuses, maximize velocity",
            note: "Balance revenue maximization with relationship preservation. Know when to push and when to stop."
          }
        ],
        bestPractices: [
          {
            title: "Tone Consistency is Everything",
            description: "Your tone before asking for money and after they decline must be identical. Any shift signals that the relationship was transactional, and you'll lose long-term revenue."
          },
          {
            title: "Never Beg or Guilt Trip",
            description: "People want what they can't have. Begging hands them power and kills desire. Guilt works once, then burns the bridge forever."
          },
          {
            title: "Qualify Before You Sell",
            description: "Test availability, match content to their situation, check purchase history, and confirm their mood. Most objections can be avoided entirely with better qualification."
          },
          {
            title: "Follow Up Strategically",
            description: "Don't ghost your PPVs. Pin chats, track reactions, follow up with low-pressure humor or curiosity to uncover objections without seeming desperate."
          },
          {
            title: "Inflate Value Before Discounting",
            description: "Make it a big deal, add bonuses, use FOMO and reverse psychology. Only discount as a last resort, and do it slowly and deliberately."
          },
          {
            title: "Divert Content Fit Objections",
            description: "Don't answer questions about content you don't have. Redirect with 'what if' scenarios that match your actual content, then loop back to the PPV."
          },
          {
            title: "Handle Trust Issues with Humor",
            description: "Never get defensive. Use jokes, validation, voice notes, and funny stories to defuse suspicion and prove authenticity."
          },
          {
            title: "Know When to Push and When to Stop",
            description: "Push up to two 'no's' to maximize revenue, but back off after three to preserve goodwill. Long-term subscriber value beats short-term extraction."
          }
        ]
      },

      overview: {
        description: `<div class="space-y-6">
          <div>
            <div class="p-6 rounded-lg mb-6" style="background: rgba(249, 115, 22, 0.2); border: 2px solid rgba(249, 115, 22, 0.5);">
              <h2 class="font-bold text-white text-3xl mb-3 text-center">The Skill That Separates Amateurs from Professionals</h2>
              <p class="text-orange-200 text-lg text-center">Objection handling isn't a tactic. It's a complete system for maximizing revenue while preserving relationships.</p>
            </div>
            <p class="text-slate-300 mb-3">Most chatters panic when a subscriber hesitates. They beg, guilt trip, or slash prices. All of this destroys trust, kills long-term value, and trains subscribers to expect discounts. Elite chatters handle objections with calm authority, strategic follow-up, and psychological tactics that preserve pricing power while increasing conversions.</p>
            <div class="grid grid-cols-3 gap-4 my-4">
              <div class="p-4 rounded-lg" style="background: rgba(249, 115, 22, 0.15); border: 1px solid rgba(249, 115, 22, 0.3);">
                <p class="font-bold text-orange-300 mb-2">Value Objections</p>
                <p class="text-slate-300 text-sm">Inflate perceived value before considering discounts. Use FOMO, bonuses, and exclusivity.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(249, 115, 22, 0.15); border: 1px solid rgba(249, 115, 22, 0.3);">
                <p class="font-bold text-orange-300 mb-2">Content Fit Objections</p>
                <p class="text-slate-300 text-sm">Redirect with 'what if' scenarios. Build excitement around what you have, not what they think they want.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(249, 115, 22, 0.15); border: 1px solid rgba(249, 115, 22, 0.3);">
                <p class="font-bold text-orange-300 mb-2">Trust Objections</p>
                <p class="text-slate-300 text-sm">Use humor, voice notes, and validation to defuse suspicion without getting defensive.</p>
              </div>
            </div>
          </div>
        </div>`,
        goal: "Master the complete objection handling system that lets you convert hesitant subscribers without damaging pricing authority or burning long-term relationships. Learn the four fatal mistakes to avoid, pre-qualification strategies that prevent objections, follow-up tactics that uncover resistance, and specific playbooks for handling value, content fit, and trust objections with calm authority and psychological precision.",
      },
      overviewImage: objectionHandlingImage,

      mindMap: {
        id: "center",
        title: "Objection Handling System",
        x: 0,
        y: 0,
        color: "#F97316",
        icon: "🎯",
        children: [
          {
            id: "fatal-mistakes",
            title: "Four Fatal Mistakes",
            x: -420,
            y: -220,
            color: "#DC2626",
            icon: "⚠️",
            children: [
              {
                id: "tone-change",
                title: "Tone Changes (The Biggest Killer)",
                x: -750,
                y: -360,
                color: "#B91C1C"
              },
              {
                id: "begging",
                title: "Desperation and Begging",
                x: -750,
                y: -280,
                color: "#B91C1C"
              },
              {
                id: "guilt",
                title: "Guilt Tripping",
                x: -750,
                y: -200,
                color: "#B91C1C"
              },
              {
                id: "price-dump",
                title: "Price Dumping",
                x: -750,
                y: -120,
                color: "#B91C1C"
              }
            ]
          },
          {
            id: "pre-qual",
            title: "Pre-Qualification",
            x: 0,
            y: -280,
            color: "#10B981",
            icon: "✅",
            children: [
              {
                id: "availability",
                title: "Test Availability Without Being Obvious",
                x: -180,
                y: -450,
                color: "#059669"
              },
              {
                id: "match-content",
                title: "Match Content to Their Situation",
                x: 180,
                y: -450,
                color: "#059669"
              },
              {
                id: "history",
                title: "Check Purchase History",
                x: -180,
                y: -520,
                color: "#059669"
              },
              {
                id: "temperature",
                title: "Confirm Their Temperature",
                x: 180,
                y: -520,
                color: "#059669"
              }
            ]
          },
          {
            id: "follow-up",
            title: "Strategic Follow-Up",
            x: 440,
            y: -180,
            color: "#3B82F6",
            icon: "📬",
            children: [
              {
                id: "track-ppv",
                title: "Don't Ghost Your Own PPVs",
                x: 760,
                y: -320,
                color: "#2563EB"
              },
              {
                id: "ignored-ppv",
                title: "When They Ignore the PPV",
                x: 760,
                y: -240,
                color: "#2563EB"
              },
              {
                id: "on-read",
                title: "When They Leave It on Read",
                x: 760,
                y: -160,
                color: "#2563EB"
              },
              {
                id: "timed-message",
                title: "Send Timed Re-Engagement",
                x: 760,
                y: -80,
                color: "#2563EB"
              }
            ]
          },
          {
            id: "value-objections",
            title: "Value Objections ('Too Expensive')",
            x: 460,
            y: 120,
            color: "#EF4444",
            icon: "💰",
            children: [
              {
                id: "big-deal",
                title: "Make It a Big Deal",
                x: 780,
                y: 40,
                color: "#DC2626"
              },
              {
                id: "add-value",
                title: "Add Value, Don't Cut Price",
                x: 780,
                y: 110,
                color: "#DC2626"
              },
              {
                id: "fomo",
                title: "Use FOMO and Reverse Psychology",
                x: 780,
                y: 180,
                color: "#DC2626"
              },
              {
                id: "discount-last",
                title: "Discounting (Last Resort Only)",
                x: 780,
                y: 250,
                color: "#DC2626"
              }
            ]
          },
          {
            id: "content-fit",
            title: "Content Fit Objections",
            x: -50,
            y: 240,
            color: "#8B5CF6",
            icon: "🎭",
            children: [
              {
                id: "divert-texting",
                title: "Divert with Texting",
                x: -340,
                y: 360,
                color: "#7C3AED"
              },
              {
                id: "bundle",
                title: "Bundle Upsell",
                x: -340,
                y: 440,
                color: "#7C3AED"
              },
              {
                id: "voice-notes",
                title: "Use Voice Notes to Stimulate",
                x: 240,
                y: 360,
                color: "#7C3AED"
              }
            ]
          },
          {
            id: "trust",
            title: "Trust Objections",
            x: -420,
            y: 80,
            color: "#06B6D4",
            icon: "🛡️",
            children: [
              {
                id: "humor",
                title: "Respond with Humor",
                x: -720,
                y: 160,
                color: "#0891B2"
              },
              {
                id: "voice-proof",
                title: "Voice Notes for Credibility",
                x: -720,
                y: 230,
                color: "#0891B2"
              },
              {
                id: "shift-topic",
                title: "Shift Conversation Away",
                x: -720,
                y: 300,
                color: "#0891B2"
              }
            ]
          }
        ]
      },

      recap: [
        "The four fatal mistakes: tone changes, begging, guilt tripping, and price dumping all destroy long-term value",
        "Pre-qualify subscribers by testing availability, matching content to context, and confirming temperature before pitching",
        "Follow up strategically with low-pressure humor and curiosity to uncover objections without seeming desperate",
        "Handle value objections by inflating perceived worth - make it a big deal, add bonuses, use FOMO before discounting",
        "Discount only as a last resort: drop no more than 20% at a time, remove extras first, never more than twice",
        "Divert content fit objections with 'what if' scenarios that redirect to your actual content, then loop back to the PPV",
        "Use bundles to upsell when they refuse content: buying the first unlocks a discount on what they actually want",
        "Handle trust objections with humor and validation - never get defensive, use voice notes to prove authenticity",
        "Push up to two 'no's' for mid-sale exits, then back off to preserve goodwill and long-term subscriber value",
        "Tone consistency before and after objections signals authentic relationships, not transactional extraction",
      ],
    },
    exclusivity: {
      title: "Mastering Exclusivity Framing",
      skillType: "Advanced Psychological Positioning",
      accentColor: "#A855F7",
      
      leftColumn: {
        subtitle: "The psychology that transforms transactions into investments:",
        sections: [
          {
            title: "What is Exclusivity Framing?",
            whyItWorks: [
              "<strong>Exclusivity framing is the art of making the subscriber feel like they have access to something rare, special, and not available to others.</strong> You're not selling content. You're selling the feeling of being chosen.",
              "Your goal: Make them believe that what they're getting exists because of them, for them, and only them.",
              "<strong>Skip exclusivity framing and you're just another content seller.</strong> You might make a quick sale, but you'll never build the emotional investment that turns a $50 buyer into a $500+ whale."
            ],
            steps: [
              {
                title: "The Earning Frame",
                description: "Position premium content as something that must be earned, not bought. This shifts the dynamic from transaction to reward. When someone 'earns' access, they value it more and feel special.",
                example: "\"i don't usually go this far... but you've really shown me something different 💕\"<br>\"most people never get to see this side of me\"<br>\"the fact that i'm sharing this with you... says a lot about how i feel\"",
                tip: "Use phrases like 'earned it', 'proven yourself', 'different from everyone else' to activate the exclusivity mindset."
              },
              {
                title: "Rarity Language",
                description: "Emphasize that the content is rare, one-time, or created specifically for them. Scarcity drives desire. When something feels limited or fleeting, the urge to possess it intensifies.",
                example: "\"i've never done this before\"<br>\"this is the first time i've filmed something like this\"<br>\"i might delete this later, it's too much\"<br>\"only sending this to you\"",
                tip: "Even if you've sent similar content before, the feeling of rarity is what matters. Make every moment feel like a first."
              },
              {
                title: "The 'Because of You' Frame",
                description: "Attribute the content's existence to their influence on you. They didn't just buy a video - they inspired it. This creates emotional ownership and investment.",
                example: "\"you got me so worked up i HAD to film this\"<br>\"i couldn't stop thinking about our conversation\"<br>\"this is all your fault 😏\"<br>\"you bring out a side of me that i didn't even know existed\"",
                tip: "Make them feel responsible for the content's creation. This transforms the transaction into a shared experience."
              }
            ]
          },
          {
            title: "Why Exclusivity Framing is Critical",
            whyItWorks: [
              "<strong>Without exclusivity framing, you're competing on price and content quality alone.</strong> With it, you're selling an emotional experience that can't be replicated or compared.",
              "Exclusivity framing is what allows you to charge $115 for a video someone else sells for $30. It's not about the content. It's about how they feel when they unlock it."
            ],
            steps: [
              {
                title: "Eliminates Price Resistance",
                description: "When someone feels they're getting exclusive access to something rare, price becomes irrelevant. They're not evaluating cost vs. content. They're evaluating how special it makes them feel.",
                example: "Without exclusivity: 'Is this $85 video worth it?'<br><br>With exclusivity: 'She made this just for me. I can't miss this.'"
              },
              {
                title: "Creates Emotional Investment",
                description: "Exclusivity makes the subscriber feel seen, valued, and special. This emotional bond is what drives repeat spending. They're not buying content anymore - they're maintaining a relationship.",
                example: "\"i feel like you really get me 💕\"<br>\"this connection feels different\"<br>\"i'm so glad i found you\"<br>← These responses signal successful exclusivity framing."
              },
              {
                title: "Justifies Premium Pricing",
                description: "Exclusivity allows you to charge 3x-5x more than generic content. When something is positioned as rare, custom, or inspired by them specifically, subscribers don't compare it to other purchases.",
                tip: "Never apologize for price. Present it as a natural consequence of the exclusivity and effort involved."
              }
            ]
          }
        ]
      },

      rightColumn: {
        sections: [
          {
            title: "The Three Pillars of Exclusivity",
            description: "Every exclusivity frame should touch on at least one of these psychological triggers:",
            note: "Combine multiple pillars for maximum impact."
          },
          {
            title: "Pillar 1: Scarcity",
            description: "Make it feel <strong>rare, limited, or fleeting</strong>. Use time pressure, limited availability, or one-time offers.",
            example: "\"i'm deleting this in 10 minutes\"<br>\"i've never shared this before\"<br>\"this won't be available again\"",
            note: "Scarcity creates urgency. Urgency drives immediate action."
          },
          {
            title: "Pillar 2: Personalization",
            description: "Make it feel <strong>created for them specifically</strong>. Reference their kinks, name, or previous conversations.",
            example: "\"i remembered you said you loved [specific kink]\"<br>\"i made this thinking about you\"<br>\"this has your name all over it\"",
            note: "Personalization makes them feel like the content has no value to anyone else - only to them."
          },
          {
            title: "Pillar 3: Status",
            description: "Make them feel <strong>chosen, special, or part of an elite group</strong>. Position them above other subscribers.",
            example: "\"most people never get this far with me\"<br>\"you've earned something most fans never see\"<br>\"i only do this for people who really connect with me\"",
            note: "Status appeals to ego. Make them feel like a VIP, not a customer."
          },
          {
            title: "Layering Exclusivity Across the Funnel",
            description: "Exclusivity framing should <strong>escalate</strong> as prices increase. Don't use the same language at $15 that you use at $115.",
            example: "<strong>$15-35:</strong> Mild exclusivity (\"made this just for you\")<br><strong>$55-85:</strong> Moderate exclusivity (\"you've earned this, most people never see this side\")<br><strong>$115+:</strong> Maximum exclusivity (\"i've never done this before, you're the reason this exists\")",
            note: "Each tier should feel like they're unlocking a deeper level of access and intimacy."
          }
        ],
        bestPractices: [
          {
            title: "Never Break the Illusion",
            description: "Once you've positioned content as exclusive or rare, never contradict that frame. Don't send the same 'custom' video to multiple people if they might compare notes."
          },
          {
            title: "Use Subtle Language",
            description: "Don't explicitly say 'this is exclusive.' Show it through your tone, pacing, and word choice. Let them feel special without being told."
          },
          {
            title: "Combine with Emotional Anchoring",
            description: "Exclusivity is most powerful when paired with emotional connection. Reference shared moments, inside jokes, or personal details they've shared."
          },
          {
            title: "Escalate Gradually",
            description: "Don't use maximum exclusivity language too early. Build it progressively so each tier feels like a new level of access and trust."
          }
        ]
      },

      overview: {
        description: `<div class="space-y-6">
          <div>
            <div class="p-6 rounded-lg mb-6" style="background: rgba(168, 85, 247, 0.2); border: 2px solid rgba(168, 85, 247, 0.5);">
              <h2 class="font-bold text-white text-3xl mb-3 text-center">Exclusivity is the Difference Between $50 and $500</h2>
              <p class="text-purple-200 text-lg text-center">You're not selling content. You're selling the feeling of being chosen.</p>
            </div>
            <p class="text-slate-300 mb-3">Exclusivity framing is the psychological positioning that transforms ordinary content into premium experiences. By making subscribers feel like they have access to something rare, personal, and created specifically for them, you eliminate price resistance and build the emotional investment that drives repeat spending.</p>
            <div class="grid grid-cols-3 gap-4 my-4">
              <div class="p-4 rounded-lg" style="background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.3);">
                <p class="font-bold text-purple-300 mb-2">Scarcity</p>
                <p class="text-slate-300 text-sm">Make it feel rare, limited, or fleeting to create urgency.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.3);">
                <p class="font-bold text-purple-300 mb-2">Personalization</p>
                <p class="text-slate-300 text-sm">Make it feel created specifically for them to build ownership.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.3);">
                <p class="font-bold text-purple-300 mb-2">Status</p>
                <p class="text-slate-300 text-sm">Make them feel chosen and special to appeal to ego.</p>
              </div>
            </div>
          </div>
        </div>`,
        goal: "Master the art of exclusivity framing to eliminate price resistance, build emotional investment, and justify premium pricing. Learn the three pillars (scarcity, personalization, status), how to layer exclusivity across the funnel, and the specific language patterns that make subscribers feel chosen rather than sold to.",
      },

      mindMap: {
        id: "center",
        title: "Exclusivity Framing System",
        x: 0,
        y: 0,
        color: "#A855F7",
        icon: "👑",
        children: [
          {
            id: "three-pillars",
            title: "Three Pillars",
            x: -400,
            y: -200,
            color: "#9333EA",
            icon: "💎",
            children: [
              {
                id: "scarcity",
                title: "Scarcity (Rare & Limited)",
                x: -700,
                y: -350,
                color: "#7E22CE"
              },
              {
                id: "personalization",
                title: "Personalization (Just for You)",
                x: -700,
                y: -200,
                color: "#7E22CE"
              },
              {
                id: "status",
                title: "Status (You're Special)",
                x: -700,
                y: -50,
                color: "#7E22CE"
              }
            ]
          },
          {
            id: "framing-techniques",
            title: "Framing Techniques",
            x: 0,
            y: -350,
            color: "#C084FC",
            icon: "🎯",
            children: [
              {
                id: "earning-frame",
                title: "The Earning Frame",
                x: -200,
                y: -550,
                color: "#A855F7"
              },
              {
                id: "because-of-you",
                title: "The 'Because of You' Frame",
                x: 200,
                y: -550,
                color: "#A855F7"
              }
            ]
          },
          {
            id: "language-patterns",
            title: "Key Language Patterns",
            x: 400,
            y: -200,
            color: "#E9D5FF",
            icon: "💬",
            children: [
              {
                id: "rarity-language",
                title: "Rarity Language",
                x: 700,
                y: -350,
                color: "#DDD6FE"
              },
              {
                id: "emotional-ownership",
                title: "Emotional Ownership",
                x: 700,
                y: -200,
                color: "#DDD6FE"
              },
              {
                id: "vip-positioning",
                title: "VIP Positioning",
                x: 700,
                y: -50,
                color: "#DDD6FE"
              }
            ]
          },
          {
            id: "funnel-escalation",
            title: "Funnel Escalation Strategy",
            x: 0,
            y: 200,
            color: "#F3E8FF",
            icon: "📈",
            children: [
              {
                id: "tier-1",
                title: "$15-35: Mild Exclusivity",
                x: -300,
                y: 400,
                color: "#E9D5FF"
              },
              {
                id: "tier-2",
                title: "$55-85: Moderate Exclusivity",
                x: 0,
                y: 400,
                color: "#DDD6FE"
              },
              {
                id: "tier-3",
                title: "$115+: Maximum Exclusivity",
                x: 300,
                y: 400,
                color: "#C4B5FD"
              }
            ]
          }
        ]
      },

      recap: [
        "Exclusivity framing transforms transactions into emotional investments by making subscribers feel chosen and special",
        "The three pillars: Scarcity (rare/limited), Personalization (just for you), Status (you're special)",
        "The Earning Frame positions premium content as a reward that must be earned, not bought",
        "Rarity language emphasizes one-time, limited, or first-time experiences to create urgency",
        "The 'Because of You' frame attributes content creation to their influence, creating emotional ownership",
        "Exclusivity eliminates price resistance by shifting focus from cost to emotional value",
        "Escalate exclusivity language progressively: mild at $15-35, moderate at $55-85, maximum at $115+",
        "Never break the illusion - maintain consistency in positioning content as rare and special",
        "Combine exclusivity with emotional anchoring by referencing shared moments and personal details",
        "Exclusivity is what allows you to charge $115 for content others sell for $30 - it's about feeling, not content",
      ],
    },
    curiosityResub: {
      title: "Curiosity Resub Technique",
      skillType: "Natural Re-Subscription Without Asking",
      accentColor: "#8B5CF6",
      
      leftColumn: {
        subtitle: "How to get expired subscribers to renew without ever asking them to resub:",
        sections: [
          {
            title: "The Curiosity Resub Framework",
            whyItWorks: [
              "<strong>Never ask directly.</strong> The moment you say 'resub to me,' you've lost the battle. They'll feel pressured and defensive.",
              "Instead, you create a situation where they choose to resub on their own because they're curious about what they're missing.",
              "This technique uses KYC data to make natural conversation, then plants a seed of FOMO that makes them resub out of curiosity."
            ],
            steps: [
              {
                title: "Step 1: Use KYC to Re-Engage Naturally",
                description: "When an expired subscriber messages you, don't acknowledge the expired status. Instead, use the KYC data you collected when they first subscribed to start a natural conversation about their interests, location, or hobbies. This makes them feel remembered and valued.",
                example: "If your notes say they're from Denver and love sports:<br>\"yay! alsooo where you from? i'm curled up in bed in Denver rn 💕\"<br><br>If they mentioned basketball before:<br>\"yeah you a huge sports fan? 🏀 i love that!\"",
                tip: "Check your notes before responding. Use specific details they shared before - it makes the conversation feel personal, not transactional."
              },
              {
                title: "Step 2: Build Rapport & Validate",
                description: "Continue the conversation naturally. Share details about yourself. Validate their interests and kinks. Get them comfortable and engaged. The goal is to make them forget they're not subscribed and just enjoy talking to you.",
                example: "\"well, ive always thought its really pretty there.. whats something you really like about living there? 😊\"<br><br>\"We all have our kinks and fetishes 😏 no harm or foul in yours 😘\"",
                tip: "Mirror their energy. If they're chatty, be chatty. If they're flirty, be flirty. Don't rush to content - let the connection build naturally."
              },
              {
                title: "Step 3: Mention Your Content Casually",
                description: "After you've built rapport, casually mention your posts in a way that feels like you're thinking of them. Don't sell - just mention.",
                example: "\"also i hope my posts haven't disappointed you at all? 🙈💕\"",
                tip: "Frame it as concern for their experience, not as a sales pitch. You're checking in, not pushing."
              },
              {
                title: "Step 4: The Curiosity Hook",
                description: "This is the move. When they respond positively (or even neutrally), drop the line that creates FOMO. Make it sound casual and offhand, like you just realized something.",
                example: "\"i mean.. you'd need to be subbed to see tho actually 👀\"",
                tip: "The tone is key - light, playful, not pushy. You're stating a fact, not making a request. The 👀 emoji adds playfulness and intrigue."
              },
              {
                title: "Step 5: Continue Naturally If They Resub",
                description: "If they resub (and they often will), don't make a big deal about it. Just continue the conversation naturally and playfully. This reinforces that the conversation was genuine, not a resub tactic.",
                example: "\"hehe thank you actually 😊.. i wonder if its got you feeling playful at all? and dying to see more?\"",
                tip: "Keep building momentum. They just invested money - now is the time to transition toward a sale while the investment is fresh."
              }
            ]
          },
          {
            title: "Why This Works",
            whyItWorks: [
              "<strong>No pressure = No resistance.</strong> When you don't ask directly, they don't feel defensive or pressured. They feel curious.",
              "<strong>FOMO is powerful.</strong> The phrase 'you'd need to be subbed to see tho' creates instant awareness of what they're missing. It's not you asking - it's them realizing.",
              "<strong>KYC makes it feel genuine.</strong> Because you used their personal details, the whole conversation feels real and natural, not like a sales tactic."
            ],
            steps: [
              {
                title: "The Psychology of Curiosity",
                description: "Humans hate information gaps. When you mention that you have posts they can't see, their brain immediately wants to close that gap. They resub to satisfy their curiosity, not because you asked.",
                tip: "This is why 'you'd need to be subbed to see' works better than 'want to resub?' - one creates curiosity, the other creates obligation."
              },
              {
                title: "Emotional Investment Drives Action",
                description: "By using KYC and building rapport first, you create emotional investment. They're not resubbing to some random model - they're resubbing to someone who remembers them and cares.",
                example: "A stranger asking for money gets ignored. A friend mentioning something you're missing gets action."
              }
            ]
          }
        ]
      },
      
      rightColumn: {
        sections: [
          {
            title: "Real Example Breakdown",
            description: "Let's analyze the exact conversation that got a fan to resub naturally:",
            note: "This fan was expired but messaged the creator. Watch how she uses KYC and curiosity to get the resub."
          },
          {
            title: "Move 1: Natural Re-Engagement",
            description: "Creator uses location KYC:",
            example: "\"yay! alsooo where you from? i'm curled up in bed in Denver rn 💕\"<br><br>Fan responds: \"Indiana, I'm currently in bed but gym soon!\"",
            note: "She didn't ask about subscription status. She started a normal conversation using a detail that makes it personal."
          },
          {
            title: "Move 2: Building Rapport",
            description: "She continues naturally, sharing her own thoughts:",
            example: "\"well, ive always thought its really pretty there.. whats something you really like about living there? 😊\"<br><br>Then validates his interests:<br>\"It's kinda lame but I love how many people here love basketball lol\"",
            note: "She's investing in the conversation. This makes him invest back. No mention of content or money yet."
          },
          {
            title: "Move 3: The KYC Deep Dive",
            description: "She asks about his interests and validates his kinks:",
            example: "\"yeah you a huge sports fan? 🏀 i love that! also how old are you btw? im 23 i hope you dont mind 🙈\"<br><br>\"We all have our kinks and fetishes 😏 no harm or foul in yours 😘\"",
            note: "Now he's fully engaged and comfortable. He's shared personal details and feels validated."
          },
          {
            title: "Move 4: The Casual Content Mention",
            description: "After all that rapport, she mentions her posts casually:",
            example: "\"also i hope my posts haven't disappointed you at all? 🙈💕\"",
            note: "This sounds like genuine concern, not a sales pitch. She's checking in on his experience."
          },
          {
            title: "Move 5: The Curiosity Hook",
            description: "This is where the magic happens:",
            example: "Fan: \"i love that! i cant admit that i am tho! i do love the vibe thooo\"<br><br>Creator: \"i mean.. you'd need to be subbed to see tho actually 👀\"",
            note: "Boom. She didn't ask him to resub. She just stated a fact. His brain immediately realizes what he's missing. The curiosity kicks in."
          },
          {
            title: "The Result",
            description: "System notification: 'JackO has just restarted their monthly subscription.'",
            example: "Fan: \"OMG THANK YOU!\"<br><br>Creator: \"hehe thank you actually 😊.. i wonder if its got you feeling playful at all? and dying to see more?\"",
            note: "He resubbed without being asked. Now she continues naturally, building toward a content sale while the investment is fresh."
          }
        ],
        bestPractices: [
          {
            title: "Always Check Your Notes First",
            description: "Review what KYC data you collected when they first subscribed. Use specific details to make them feel remembered."
          },
          {
            title: "Don't Acknowledge They're Expired",
            description: "Never say 'I see your subscription expired' or 'want to resub?' Treat them like any other conversation."
          },
          {
            title: "Build Rapport Before The Hook",
            description: "Spend 5-10 messages building genuine connection before casually mentioning your posts."
          },
          {
            title: "The Hook Must Sound Casual",
            description: "The 'you'd need to be subbed' line works because it sounds offhand and playful, not pushy or desperate."
          },
          {
            title: "Continue Naturally After Resub",
            description: "Don't celebrate or make it weird. Just keep the conversation flowing toward a content sale."
          }
        ]
      },

      overview: {
        description: `<div class="space-y-6">
          <div>
            <div class="p-6 rounded-lg mb-6" style="background: rgba(139, 92, 246, 0.2); border: 2px solid rgba(139, 92, 246, 0.5);">
              <h2 class="font-bold text-white text-3xl mb-3 text-center">The Art of Natural Re-Subscription</h2>
              <p class="text-violet-200 text-lg text-center">Master the technique that gets expired subscribers to renew without ever asking. Use KYC, curiosity, and FOMO to make them choose to resub on their own.</p>
            </div>
            <p class="text-slate-300 mb-3">The worst thing you can do with an expired subscriber is ask them to resub. The moment you ask, you create pressure and resistance. Instead, this technique uses their own psychology against them - you make natural conversation using their KYC data, then plant a seed of curiosity that makes them realize what they're missing. They resub not because you asked, but because they can't stand not knowing.</p>
            <div class="grid grid-cols-2 gap-4 my-4">
              <div class="p-4 rounded-lg" style="background: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.3);">
                <p class="font-bold text-violet-300 mb-2">KYC Re-Engagement</p>
                <p class="text-slate-300 text-sm">Use personal details from their first interaction to make them feel remembered and valued.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.3);">
                <p class="font-bold text-violet-300 mb-2">The Curiosity Hook</p>
                <p class="text-slate-300 text-sm">A casual, playful line that creates FOMO without pressure: "you'd need to be subbed to see tho actually 👀"</p>
              </div>
            </div>
          </div>
        </div>`,
        goal: "Master the complete framework for getting expired subscribers to renew naturally using KYC data and curiosity. Learn the 5-step process from re-engagement to post-resub momentum building. Understand the psychology of FOMO and information gaps, and why asking directly destroys your chances. See a real conversation breakdown that got an instant resub without ever asking for it.",
      },

      mindMap: {
        id: "center",
        title: "Curiosity Resub Framework",
        x: 0,
        y: 0,
        color: "#8B5CF6",
        icon: "🔄",
        children: [
          {
            id: "kyc-reengagement",
            title: "KYC Re-Engagement",
            x: -420,
            y: -200,
            color: "#7C3AED",
            icon: "👋",
            children: [
              {
                id: "check-notes",
                title: "Check Your Notes First",
                x: -720,
                y: -300,
                color: "#6D28D9"
              },
              {
                id: "personal-details",
                title: "Use Personal Details",
                x: -720,
                y: -220,
                color: "#6D28D9"
              },
              {
                id: "natural-conversation",
                title: "Start Natural Conversation",
                x: -720,
                y: -140,
                color: "#6D28D9"
              },
              {
                id: "no-mention-expired",
                title: "Never Mention Expired Status",
                x: -720,
                y: -60,
                color: "#6D28D9"
              }
            ]
          },
          {
            id: "build-rapport",
            title: "Build Rapport & Connection",
            x: 420,
            y: -200,
            color: "#A78BFA",
            icon: "💬",
            children: [
              {
                id: "share-details",
                title: "Share About Yourself",
                x: 720,
                y: -300,
                color: "#C4B5FD"
              },
              {
                id: "validate-them",
                title: "Validate Their Interests",
                x: 720,
                y: -220,
                color: "#C4B5FD"
              },
              {
                id: "mirror-energy",
                title: "Mirror Their Energy",
                x: 720,
                y: -140,
                color: "#C4B5FD"
              },
              {
                id: "get-comfortable",
                title: "Make Them Comfortable",
                x: 720,
                y: -60,
                color: "#C4B5FD"
              }
            ]
          },
          {
            id: "curiosity-hook",
            title: "The Curiosity Hook",
            x: 0,
            y: 200,
            color: "#DDD6FE",
            icon: "🎣",
            children: [
              {
                id: "casual-mention",
                title: "Mention Content Casually",
                x: -300,
                y: 350,
                color: "#EDE9FE"
              },
              {
                id: "the-line",
                title: "The Line: 'you'd need to be subbed tho'",
                x: 0,
                y: 350,
                color: "#EDE9FE"
              },
              {
                id: "playful-tone",
                title: "Keep Tone Light & Playful",
                x: 300,
                y: 350,
                color: "#EDE9FE"
              }
            ]
          }
        ]
      },

      steps: [],
      examples: [],
      recap: [
        "Never ask for a resub directly - create conditions where they choose to resub on their own",
        "Use KYC data to make the conversation feel natural and personal, not transactional",
        "Build rapport first - get them comfortable and engaged before mentioning content",
        "The curiosity hook ('you'd need to be subbed to see') creates FOMO without pressure",
        "Continue naturally after resub - don't celebrate or make it weird, just keep the conversation flowing",
        "This technique works because it respects their agency while creating irresistible curiosity",
        "Check your notes before responding - specific details make them feel remembered and valued",
        "Never acknowledge expired status - treat them like any other active subscriber",
        "The psychology of information gaps drives the resub - humans hate not knowing what they're missing",
        "Post-resub is prime time for content sales - they just invested money and are emotionally engaged",
      ],
    },
    advancedFrameControl: {
      title: "Advanced Frame Control",
      skillType: "Elite Coaching & Pressure Management",
      accentColor: "#DC2626",
      
      leftColumn: {
        subtitle: "Five advanced techniques that separate elite chatters from amateurs:",
        sections: [
          {
            title: "Pull Conversion: Turning Push into Pull",
            whyItWorks: [
              "<strong>Push lines make fans feel pressured.</strong> Pull lines make them want it on their own. The difference is everything.",
              "When you say 'you're going to love this,' you're pushing. When you say 'I want you to see this,' you're pulling them toward curiosity.",
              "The rule: He must rewrite. Never send a push line. Always convert it to pull first."
            ],
            steps: [
              {
                title: "The Core Concept",
                description: "Push = telling them what they'll feel. Pull = expressing what YOU want or creating their curiosity. Push creates resistance. Pull creates desire.",
                example: "<strong>Push:</strong> 'you're gonna love this'<br><strong>Pull:</strong> 'I want you to see this'<br><br><strong>Push:</strong> 'this will make you cum so hard'<br><strong>Pull:</strong> 'I want you to see this'<br><br><strong>Push:</strong> 'you might not be ready for what I have'<br><strong>Pull:</strong> 'I don't think you're ready for this yet'"
              },
              {
                title: "The Pull Conversion Formula",
                description: "Before sending ANY message about content, ask: Am I telling him what he'll feel (push) or am I expressing what I want (pull)? If it's push, rewrite it as pull.",
                tip: "Pull keeps you in control. Push gives control to them by trying to convince them how they'll feel."
              },
              {
                title: "When to Use Pull",
                description: "Always. Every single time. Drill until natural. There is no situation where push is better than pull for high-ticket sales.",
                example: "Visual reference available in training dashboard showing full conversion examples."
              }
            ]
          },
          {
            title: "Control Reset: When You Lose Frame",
            whyItWorks: [
              "<strong>You will lose control sometimes.</strong> When there's pressure, reactive energy creeps in. The fan senses it and resists.",
              "Elite chatters recognize when they've lost frame and reset immediately. They don't panic or double down on reactive energy.",
              "The reset is simple: Acknowledge the loss, state what you're fixing, then send controlled messages one at a time."
            ],
            steps: [
              {
                title: "The Control Reset Protocol",
                description: "When you realize you're being reactive (multiple messages, explaining yourself, lowering price, showing insecurity), STOP. Say out loud: 'Alright, first thing we're fixing is control.'",
                example: "'Right now, you lose frame when there's pressure. That stops today.'<br>'I'm going to send you messages.'<br>'Your job is simple. Stay in control. No lowering price. No explaining. No insecurity.'"
              },
              {
                title: "Send One Message at a Time",
                description: "After each message you send, wait for his response. Don't send multiple messages in a row. That's reactive energy and it signals desperation.",
                tip: "If he slips into reactive mode (too expensive, this feels forced, etc.), you STOP and coach: 'Stop. That's reactive. Do it again. You're leading, not chasing.'"
              },
              {
                title: "Good Control vs Reactive",
                description: "Good control looks like: 'Good. That's control. Keep that energy.' Reactive looks like explaining, justifying, or trying to convince.",
                example: "Visual reference available showing exact coaching dialogue."
              }
            ]
          },
          {
            title: "Push vs Pull: When to Use Each",
            whyItWorks: [
              "<strong>Most chatters push too much.</strong> This makes clients resist. Switching to pull changes everything.",
              "The framework: If they're pushing too much, switch them into pull. Don't just tell them to rewrite - show them the SAME situation but with the first answer they'd normally give, then coach them into pull lines.",
              "Pull isn't manipulation. It's leadership. Your job is not to sell. Your job is to make him want it."
            ],
            steps: [
              {
                title: "Recognizing Push Energy",
                description: "Push energy: 'You're going to love this.' 'This will make you feel X.' 'You're not ready for this.' These are all trying to convince the fan how they'll feel. That's push.",
                example: "Say this: 'You're pushing too much. That's why clients resist. We're switching you into pull.'"
              },
              {
                title: "The Pull Reframe",
                description: "Same situation. First, let them answer how they normally would. Then say: 'Now rewrite it. No convincing. Make him come to you.' Coach them into lines like: 'maybe this just isn't for you then 🤷‍♀️' or 'I don't think you're ready for this yet.'",
                tip: "Reinforce: 'Your job is not to sell. Your job is to make him want it.'"
              },
              {
                title: "The Psychological Shift",
                description: "Pull lines flip the power dynamic. Instead of chasing the fan, you make them chase you. This is how you command premium prices.",
                example: "Visual reference available showing full push/pull conversion training."
              }
            ]
          },
          {
            title: "Value Hold: Never Lower Price",
            whyItWorks: [
              "<strong>The moment you drop price, you drop value.</strong> High-ticket sales require absolute conviction in your worth.",
              "Fans test you with price objections. Most chatters fold immediately. Elite chatters hold firm and increase desire instead.",
              "The rule: You are NOT allowed to discount. At all. If he tries to negotiate, you don't lower price - you increase desire."
            ],
            steps: [
              {
                title: "The Value Hold Principle",
                description: "Now we fix your biggest money leak: dropping value too fast. When a fan says 'too expensive' or 'add more' or 'I'll only do 20,' you ACT AS CLIENT and demonstrate the wrong response first.",
                example: "<strong>Wrong (most chatters):</strong> 'too expensive' → Lower price<br>'add more' → Add more content<br>'I'll only do 20' → Accept 20<br><br><strong>The Rule:</strong> You are NOT allowed to discount. At all."
              },
              {
                title: "Value Hold in Action",
                description: "If he tries price negotiation, you don't lower price. You push him toward teasing, exclusivity, confidence. Make HIM increase desire, not you decrease price.",
                example: "Example coaching line: 'You don't lower price. You increase desire.'"
              },
              {
                title: "The Reset After Value Drop",
                description: "If they slip and lower price, STOP. 'No. You just lost value. Reset.' Make them try again with a line that holds value.",
                tip: "Visual reference available showing the exact value hold framework and coaching dialogue."
              }
            ]
          },
          {
            title: "Reactive Sexting: Fix Generic Lines",
            whyItWorks: [
              "<strong>Generic lines kill immersion.</strong> When fans sense you're scripted, they disengage and don't unlock.",
              "Reactive sexting means every reply uses something HE said. No generic lines. Ever.",
              "The test: If you could send that same line to any fan, it's generic. If it only works for THIS fan in THIS moment, it's reactive."
            ],
            steps: [
              {
                title: "The Reactive Sexting Rule",
                description: "You get scripted sometimes. We fix that now. Every reply must use something HE said. No generic lines.",
                example: "Send this: 'I'd pin you against the wall' OR 'I'd take it slow first' OR 'I want to dominate you' OR 'I'd make you beg'"
              },
              {
                title: "Spotting Generic vs Reactive",
                description: "If he ignores your message, it was generic. Coach: 'Stop. That's generic. Use his words.' If good, affirm: 'Perfect. That feels real.'",
                tip: "The goal: Make him feel like this conversation is uniquely his, not copy-paste from your vault."
              },
              {
                title: "The Reactive Rewrite",
                description: "When they send a generic line, make them rewrite it using specific words or phrases the fan just said. This creates immersion and emotional investment.",
                example: "Visual reference available showing reactive sexting coaching examples."
              }
            ]
          }
        ]
      },
      
      rightColumn: {
        sections: [
          {
            title: "Pull Conversion Reference",
            description: "Visual breakdown of converting push lines to pull lines:",
            example: `<img src="${pullConversionImage}" alt="Pull Conversion Framework" style="width: 100%; border-radius: 8px; margin: 12px 0;" />`,
            note: "Key insight: Push tells them what they'll feel. Pull expresses what YOU want. Pull always wins."
          },
          {
            title: "Control Reset Protocol",
            description: "Step-by-step protocol for regaining frame when you lose control:",
            example: `<img src="${controlResetImage}" alt="Control Reset Framework" style="width: 100%; border-radius: 8px; margin: 12px 0;" />`,
            note: "When pressure hits, reactive energy appears. Recognize it, reset it, regain control through one message at a time."
          },
          {
            title: "Push vs Pull Framework",
            description: "Understanding when and how to switch from push to pull energy:",
            example: `<img src="${pushVsPullImage}" alt="Push vs Pull Framework" style="width: 100%; border-radius: 8px; margin: 12px 0;" />`,
            note: "Your job is not to sell. Your job is to make him want it. Pull makes them chase you."
          },
          {
            title: "Value Hold Technique",
            description: "Never lower price - increase desire instead:",
            example: `<img src="${valueHoldImage}" alt="Value Hold Framework" style="width: 100%; border-radius: 8px; margin: 12px 0;" />`,
            note: "The moment you drop price, you drop value. Hold firm and push toward teasing, exclusivity, confidence."
          },
          {
            title: "Reactive Sexting Standards",
            description: "Fix generic lines by using his exact words:",
            example: `<img src="${reactiveSextingImage}" alt="Reactive Sexting Framework" style="width: 100%; border-radius: 8px; margin: 12px 0;" />`,
            note: "If you could send it to anyone, it's generic. If it only works for THIS fan, it's reactive. Always be reactive."
          }
        ],
        bestPractices: [
          {
            title: "Always Convert Push to Pull",
            description: "Before sending any message about content, ask: Am I pushing or pulling? If pushing, rewrite it."
          },
          {
            title: "Reset Control Immediately",
            description: "The moment you feel reactive energy (multiple messages, explaining, justifying), stop and reset. One message at a time."
          },
          {
            title: "Never Discount Your Price",
            description: "Price objections are tests. Don't lower price - increase desire through teasing and exclusivity."
          },
          {
            title: "Use His Exact Words",
            description: "Every sexting reply must reference something he said. Generic lines break immersion and kill sales."
          },
          {
            title: "Coach Through Mistakes",
            description: "When you slip into reactive mode, stop immediately. Acknowledge it, reset, and try again with controlled energy."
          }
        ]
      },

      overview: {
        description: `<div class="space-y-6">
          <div>
            <div class="p-6 rounded-lg mb-6" style="background: rgba(220, 38, 38, 0.2); border: 2px solid rgba(220, 38, 38, 0.5);">
              <h2 class="font-bold text-white text-3xl mb-3 text-center">Elite Frame Control Mastery</h2>
              <p class="text-red-200 text-lg text-center">Five advanced techniques that separate chatters who struggle from those who consistently close high-ticket sales with complete emotional control.</p>
            </div>
            <p class="text-slate-300 mb-3">Most chatters lose sales because of frame issues, not content quality. They push instead of pull. They react instead of lead. They drop price instead of increasing desire. They send generic lines instead of reactive ones. This module teaches the five critical frame control techniques that elite chatters use to maintain authority, command premium prices, and make fans feel like every interaction is uniquely theirs.</p>
            <div class="grid grid-cols-2 gap-4 my-4">
              <div class="p-4 rounded-lg" style="background: rgba(220, 38, 38, 0.15); border: 1px solid rgba(220, 38, 38, 0.3);">
                <p class="font-bold text-red-300 mb-2">Pull Conversion</p>
                <p class="text-slate-300 text-sm">Transform push energy into pull energy. Make them want it instead of trying to convince them.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(220, 38, 38, 0.15); border: 1px solid rgba(220, 38, 38, 0.3);">
                <p class="font-bold text-red-300 mb-2">Control Reset</p>
                <p class="text-slate-300 text-sm">Recognize when you've lost frame and reset immediately before damage spreads.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(220, 38, 38, 0.15); border: 1px solid rgba(220, 38, 38, 0.3);">
                <p class="font-bold text-red-300 mb-2">Value Hold</p>
                <p class="text-slate-300 text-sm">Never lower price. Increase desire through teasing, exclusivity, and confidence.</p>
              </div>
              <div class="p-4 rounded-lg" style="background: rgba(220, 38, 38, 0.15); border: 1px solid rgba(220, 38, 38, 0.3);">
                <p class="font-bold text-red-300 mb-2">Reactive Sexting</p>
                <p class="text-slate-300 text-sm">Use his exact words in every reply. Kill generic lines that break immersion.</p>
              </div>
            </div>
          </div>
        </div>`,
        goal: "Master five elite-level frame control techniques: Pull Conversion (turning push into pull), Control Reset (regaining frame under pressure), Push vs Pull mastery (knowing when to use each), Value Hold (never discounting), and Reactive Sexting (eliminating generic lines). Learn to recognize reactive energy in yourself and reset immediately. Understand why pull always beats push for high-ticket sales, and why holding price increases desire more than lowering it ever will.",
      },

      mindMap: {
        id: "center",
        title: "Advanced Frame Control",
        x: 0,
        y: 0,
        color: "#DC2626",
        icon: "🎯",
        children: [
          {
            id: "pull-conversion",
            title: "Pull Conversion",
            x: -500,
            y: -250,
            color: "#EF4444",
            icon: "🧲",
            children: [
              {
                id: "push-definition",
                title: "Push = Telling Them What They'll Feel",
                x: -800,
                y: -350,
                color: "#F87171"
              },
              {
                id: "pull-definition",
                title: "Pull = Expressing What You Want",
                x: -800,
                y: -270,
                color: "#F87171"
              },
              {
                id: "he-must-rewrite",
                title: "He Must Rewrite All Push Lines",
                x: -800,
                y: -190,
                color: "#F87171"
              }
            ]
          },
          {
            id: "control-reset",
            title: "Control Reset",
            x: 500,
            y: -250,
            color: "#F59E0B",
            icon: "🔄",
            children: [
              {
                id: "recognize-loss",
                title: "Recognize When You Lose Frame",
                x: 800,
                y: -350,
                color: "#FBBF24"
              },
              {
                id: "stop-immediately",
                title: "Stop & Reset Immediately",
                x: 800,
                y: -270,
                color: "#FBBF24"
              },
              {
                id: "one-at-time",
                title: "Send One Message at a Time",
                x: 800,
                y: -190,
                color: "#FBBF24"
              }
            ]
          },
          {
            id: "value-hold",
            title: "Value Hold",
            x: -500,
            y: 250,
            color: "#10B981",
            icon: "💎",
            children: [
              {
                id: "no-discount",
                title: "Never Discount Price",
                x: -800,
                y: 350,
                color: "#34D399"
              },
              {
                id: "increase-desire",
                title: "Increase Desire Instead",
                x: -800,
                y: 430,
                color: "#34D399"
              },
              {
                id: "test-conviction",
                title: "Price Objections Are Tests",
                x: -800,
                y: 510,
                color: "#34D399"
              }
            ]
          },
          {
            id: "reactive-sexting",
            title: "Reactive Sexting",
            x: 500,
            y: 250,
            color: "#8B5CF6",
            icon: "💬",
            children: [
              {
                id: "use-his-words",
                title: "Use His Exact Words",
                x: 800,
                y: 350,
                color: "#A78BFA"
              },
              {
                id: "no-generic",
                title: "No Generic Lines Ever",
                x: 800,
                y: 430,
                color: "#A78BFA"
              },
              {
                id: "immersion-test",
                title: "Could This Be Sent to Anyone? = Generic",
                x: 800,
                y: 510,
                color: "#A78BFA"
              }
            ]
          }
        ]
      },

      steps: [],
      examples: [],
      recap: [
        "Push lines try to convince. Pull lines create desire. Always convert push to pull before sending.",
        "When you lose control (reactive energy, explaining, justifying), reset immediately and send one message at a time",
        "Never lower your price. Ever. Price objections are tests - increase desire instead through teasing and exclusivity",
        "Generic sexting lines kill immersion. Use his exact words in every reply to make it feel uniquely his",
        "Your job is not to sell. Your job is to make him want it. Pull makes them chase you.",
        "Control Reset Protocol: Recognize reactive energy → Stop → State what you're fixing → Send controlled messages",
        "The Value Hold rule: Dropping price drops value. Hold firm and push toward confidence, not compromise",
        "Reactive Sexting test: If you could send that line to anyone, it's generic and must be rewritten",
        "Pull Conversion examples: 'you're gonna love this' → 'I want you to see this' / 'this will make you cum' → 'I want you to see this'",
        "Elite chatters recognize frame loss instantly and reset. Amateurs double down on reactive energy and lose the sale",
      ],
    },
  };

  // If no module selected, show card selection screen
  if (!activeModule) {
    return (
      <div className="min-h-screen bg-slate-950 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-slate-950 to-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.08),transparent_50%)]" />

        {/* Noise texture */}
        <div
          className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.5\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Header */}
        <div className="relative z-10 border-b px-8 py-4" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
          <div className="flex flex-col items-center gap-3">
            <Link
              to="/"
              className="self-start inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 hover:from-purple-500 hover:via-purple-400 hover:to-blue-400 text-white text-center font-bold text-sm tracking-wider rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 animate-pulse flex-shrink-0"
              style={{
                textShadow: '0 0 10px rgba(255,255,255,0.5)',
              }}
            >
              <ArrowLeft className="size-4" />
              <span className="tracking-wide">BACK TO MAIN</span>
            </Link>
            <div className="flex flex-col items-center">
              <img src={trainingModulesHeader} alt="Training Modules" className="h-32" />
            </div>
            <button
              onClick={handleLogout}
              className="self-end inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 text-slate-300 hover:text-white text-center font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 flex-shrink-0"
            >
              <Lock className="size-4" />
              <span className="tracking-wide">LOCK</span>
            </button>
          </div>
        </div>

        {/* Card Grid */}
        <div className="relative z-10 p-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* KYC Card */}
            <button
              onClick={() => setActiveModule("kyc")}
              className="group relative rounded-3xl p-8 text-left transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(16, 185, 129, 0.3)",
                boxShadow: "0 8px 40px rgba(16, 185, 129, 0.2)",
              }}
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ background: trainingModules.kyc.accentColor }}
              />

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-white text-2xl mb-2">
                      {trainingModules.kyc.title}
                    </h2>
                    <p className="text-green-400 text-sm font-bold tracking-wider">
                      {trainingModules.kyc.skillType}
                    </p>
                  </div>
                  <ArrowRight
                    className="size-8 text-green-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>

                <EditableText
                  contentKey="kyc-card-description"
                  defaultValue="The most important first step with any new fan. Learn to build rapport, gather strategic information, and qualify spenders quickly. KYC is the foundation for every big sale."
                  className="text-slate-300 text-base leading-relaxed mb-6 block"
                  as="p"
                />

                {/* Key Points */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <EditableText
                      contentKey="kyc-point-1"
                      defaultValue="Build natural rapport and emotional investment"
                      className="text-slate-400 text-sm"
                      as="span"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <EditableText
                      contentKey="kyc-point-2"
                      defaultValue="Gather ammunition for personalized sales pitches"
                      className="text-slate-400 text-sm"
                      as="span"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <EditableText
                      contentKey="kyc-point-3"
                      defaultValue="Qualify spenders with the $15 test strategy"
                      className="text-slate-400 text-sm"
                      as="span"
                    />
                  </div>
                </div>
              </div>
            </button>

            {/* Transitions Card */}
            <button
              onClick={() => setActiveModule("transitions")}
              className="group relative rounded-3xl p-8 text-left transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(245, 158, 11, 0.3)",
                boxShadow: "0 8px 40px rgba(245, 158, 11, 0.2)",
              }}
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ background: trainingModules.transitions.accentColor }}
              />

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-white text-2xl mb-2">
                      {trainingModules.transitions.title}
                    </h2>
                    <p className="text-amber-400 text-sm font-bold tracking-wider">
                      {trainingModules.transitions.skillType}
                    </p>
                  </div>
                  <ArrowRight
                    className="size-8 text-amber-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  What separates a good chatter from a great one. Master the critical moments between phases 
                  using pacing, bridges, and the perfect upsell formula.
                </p>

                {/* Key Points */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Transition smoothly from conversation to sexting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Use bridges to connect interests to sexual topics</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Execute the 3-part ask: Emotion + Offer + Action</p>
                  </div>
                </div>

              </div>
            </button>

            {/* Price Resistance Card */}
            <button
              onClick={() => setActiveModule("priceResistance")}
              className="group relative rounded-3xl p-8 text-left transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(239, 68, 68, 0.3)",
                boxShadow: "0 8px 40px rgba(239, 68, 68, 0.2)",
              }}
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ background: trainingModules.priceResistance.accentColor }}
              />

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-white text-2xl mb-2">
                      {trainingModules.priceResistance.title}
                    </h2>
                    <p className="text-red-400 text-sm font-bold tracking-wider">
                      {trainingModules.priceResistance.skillType}
                    </p>
                  </div>
                  <ArrowRight
                    className="size-8 text-red-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  When a fan hesitates on a high-ticket PPV, your response determines every future interaction. 
                  Learn to maintain authority without destroying long-term value.
                </p>

                {/* Key Points */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Use the Save It tactic to create FOMO and urgency</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Deploy Price + Bonus to reframe as a favor, not discount</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Avoid immediate discounts that train bad behavior</p>
                  </div>
                </div>

              </div>
            </button>

            {/* Objection Handling Card */}
            <button
              onClick={() => setActiveModule("objectionHandling")}
              className="group relative rounded-3xl p-8 text-left transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(249, 115, 22, 0.3)",
                boxShadow: "0 8px 40px rgba(249, 115, 22, 0.2)",
              }}
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ background: trainingModules.objectionHandling.accentColor }}
              />

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-white text-2xl mb-2">
                      {trainingModules.objectionHandling.title}
                    </h2>
                    <p className="text-orange-400 text-sm font-bold tracking-wider">
                      {trainingModules.objectionHandling.skillType}
                    </p>
                  </div>
                  <ArrowRight
                    className="size-8 text-orange-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  The skill that separates amateurs from professionals. Master strategic follow-up, psychological tactics, and pricing authority to convert hesitant subscribers without destroying trust.
                </p>

                {/* Key Points */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Avoid the four fatal mistakes that kill sales and future revenue</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Handle value, trust, and content objections with calm authority</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Protect pricing power while preserving long-term relationships</p>
                  </div>
                </div>

              </div>
            </button>

            {/* Exclusivity Framing Card */}
            <button
              onClick={() => setActiveModule("exclusivity")}
              className="group relative rounded-3xl p-8 text-left transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(168, 85, 247, 0.3)",
                boxShadow: "0 8px 40px rgba(168, 85, 247, 0.2)",
              }}
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ background: trainingModules.exclusivity.accentColor }}
              />

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-white text-2xl mb-2">
                      {trainingModules.exclusivity.title}
                    </h2>
                    <p className="text-purple-400 text-sm font-bold tracking-wider">
                      {trainingModules.exclusivity.skillType}
                    </p>
                  </div>
                  <ArrowRight
                    className="size-8 text-purple-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  The psychological positioning that transforms ordinary content into premium experiences. Make subscribers feel chosen, not sold to.
                </p>

                {/* Key Points */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Master the three pillars: Scarcity, Personalization, Status</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Use the 'Because of You' frame for emotional ownership</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Escalate exclusivity language progressively across the funnel</p>
                  </div>
                </div>

              </div>
            </button>

            {/* 20+ Transition Types Card */}
            <button
              onClick={() => setActiveModule("transitionTypes")}
              className="group relative rounded-3xl p-8 text-left transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(245, 158, 11, 0.3)",
                boxShadow: "0 8px 40px rgba(245, 158, 11, 0.2)",
              }}
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ background: trainingModules.transitionTypes.accentColor }}
              />

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-white text-2xl mb-2">
                      Complete Transition Script Library
                    </h2>
                    <p className="text-amber-400 text-sm font-bold tracking-wider">
                      20+ Battle-Tested Scripts for Every Situation
                    </p>
                  </div>
                  <ArrowRight
                    className="size-8 text-amber-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Copy-paste ready transitions for every subscriber type and context. Netflix, Shower, Deleted Video, Morning After, and 17+ more battle-tested scripts.
                </p>

                {/* Key Points */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">20+ different transition types for every scenario</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Copy-paste scripts: Netflix, Shower, Workout, Gaming, more</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Match transition style to subscriber psychology & context</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-sm">Script Library</span>
                    <span
                      className="px-4 py-2 rounded-lg font-bold text-sm text-white"
                      style={{ background: trainingModules.transitionTypes.accentColor }}
                    >
                      View Scripts
                    </span>
                  </div>
                </div>
              </div>
            </button>

            {/* Curiosity Resub Card */}
            <button
              onClick={() => setActiveModule("curiosityResub")}
              className="group relative rounded-3xl p-8 text-left transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(139, 92, 246, 0.3)",
                boxShadow: "0 8px 40px rgba(139, 92, 246, 0.2)",
              }}
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ background: trainingModules.curiosityResub.accentColor }}
              />

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-white text-2xl mb-2">
                      {trainingModules.curiosityResub.title}
                    </h2>
                    <p className="text-violet-400 text-sm font-bold tracking-wider">
                      {trainingModules.curiosityResub.skillType}
                    </p>
                  </div>
                  <ArrowRight
                    className="size-8 text-violet-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Get expired subscribers to renew naturally without ever asking. Use KYC data and curiosity to make them choose to resub on their own.
                </p>

                {/* Key Points */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-violet-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Never ask directly - create FOMO through natural conversation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-violet-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Use KYC to make expired fans feel remembered and valued</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-violet-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">The curiosity hook: 'you'd need to be subbed to see tho'</p>
                  </div>
                </div>

              </div>
            </button>

            {/* Advanced Frame Control Card */}
            <button
              onClick={() => setActiveModule("advancedFrameControl")}
              className="group relative rounded-3xl p-8 text-left transition-all hover:scale-[1.02] cursor-pointer"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(220, 38, 38, 0.3)",
                boxShadow: "0 8px 40px rgba(220, 38, 38, 0.2)",
              }}
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ background: trainingModules.advancedFrameControl.accentColor }}
              />

              {/* Content */}
              <div className="mt-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-bold text-white text-2xl mb-2">
                      {trainingModules.advancedFrameControl.title}
                    </h2>
                    <p className="text-red-400 text-sm font-bold tracking-wider">
                      {trainingModules.advancedFrameControl.skillType}
                    </p>
                  </div>
                  <ArrowRight
                    className="size-8 text-red-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  />
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Five elite techniques that separate amateurs from pros: Pull Conversion, Control Reset, Value Hold, Push vs Pull mastery, and Reactive Sexting. Master frame control under pressure.
                </p>

                {/* Key Points */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Convert push energy to pull - make them want it, don't convince</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Reset control when reactive energy appears - one message at a time</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 text-sm flex-shrink-0 mt-0.5">✓</span>
                    <p className="text-slate-400 text-sm">Never lower price - increase desire through value hold technique</p>
                  </div>
                </div>

              </div>
            </button>
          </div>

          {/* OnlyFans Milking Roadmap - Standalone training module */}
          <div className="mt-12 pt-12 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
            <Link
              to="/onlyfans-milking-roadmap"
              className="group relative rounded-3xl p-12 text-center transition-all hover:scale-[1.02] cursor-pointer block"
              style={{
                background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
                backdropFilter: "blur(20px)",
                border: "3px solid rgba(16, 185, 129, 0.5)",
                boxShadow: "0 12px 50px rgba(16, 185, 129, 0.3)",
              }}
            >
              {/* Animated gradient overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-green-500 to-cyan-600">
                    <FileText className="size-10 text-white" />
                  </div>
                </div>
                <h2 className="font-bold text-white text-4xl mb-3">
                  OnlyFans Milking Roadmap
                </h2>
                <p className="text-green-300 text-xl font-bold tracking-wider mb-4">
                  Templated Scripts for Writers
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                  Bare-bones templates with placeholders you can copy-paste and customize. 
                  Complete phase-by-phase scripts from $0 to $500-1000+ with the structure intact.
                </p>

                <div className="flex items-center justify-center gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                      6 Phases
                    </div>
                    <div className="text-white/60 text-sm mt-1">Copy-Paste Ready</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                      Templates
                    </div>
                    <div className="text-white/60 text-sm mt-1">Easy Customization</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                      $500-1000+
                    </div>
                    <div className="text-white/60 text-sm mt-1">Target Revenue</div>
                  </div>
                </div>

                <div className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold text-lg group-hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-shadow">
                  View Templates
                  <ArrowRight className="size-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Safety check: ensure the selected module exists
  if (activeModule && !trainingModules[activeModule]) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
          <p className="text-slate-400 mb-6">The requested training module "{activeModule}" does not exist.</p>
          <button
            onClick={() => setActiveModule(null)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold transition-colors"
          >
            Back to Modules
          </button>
        </div>
      </div>
    );
  }

  // Special handling for Advanced Frame Control - use interactive training
  if (activeModule === "advancedFrameControl") {
    return (
      <AdvancedFrameControlTraining
        onBack={() => setActiveModule(null)}
      />
    );
  }

  return (
    <TrainingDashboard
      modules={trainingModules}
      activeModule={activeModule!}
      setActiveModule={setActiveModule}
    />
  );
}