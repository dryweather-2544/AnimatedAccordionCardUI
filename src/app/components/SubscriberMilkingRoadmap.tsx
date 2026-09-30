import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, ChevronUp, DollarSign, Clock, Target, Zap, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  timeRange: string;
  priceRange: string;
  goal: string;
  triggers: string[];
  scripts: {
    category: string;
    items: string[];
  }[];
  keyTactics: string[];
  color: string;
  icon: React.ReactNode;
}

const phases: Phase[] = [
  {
    id: 0,
    title: "Phase 0: Immediate Post-Sub Welcome",
    subtitle: "Hook Fast",
    timeRange: "0-5 min",
    priceRange: "$0",
    goal: "Make them feel seen/special instantly; gather intel; plant first PPV seed.",
    triggers: [
      "They reply with name/location/why subbed",
      "Show interest in more",
    ],
    scripts: [
      {
        category: "Hello Opener",
        items: [
          "hello there stranger :) or maybe I will be allowed to call you your name already? 😊",
          "hello there stranger :) and yes ill find out what NAMMEEEEE means soon enough, can I ask you something?",
        ],
      },
      {
        category: "Quick Rapport Probes",
        items: [
          "thank you! well im super curious how you found out about me .. and where are you from ? ... im from [Your Location] 🥰",
          "baby… you actually came at the perfect time <3",
          "before you run off… can i ask you something real quick? 💕 what made you wanna talk to me when you first subbed? alsooo where you from? i'm curled up in bed in [Your City] rn 👀",
          "well, ive always thought its really pretty there .. whats something you really like about living there? 😊",
        ],
      },
      {
        category: "Age/Kink Soft Probe",
        items: [
          "also how old are you btw ? im 19 i hope you dont mind 🙈",
          "i like it that you're older than me.. ill be honest its actually a pretty big kink of mine if you dont think thats weird 🙈👀",
          "im really glad you feel that way ... you older guys seem a lot more comfortable in your skin and have a lot more tricks up your sleeves.. wouldn't you agree ?",
        ],
      },
      {
        category: "Compliment & Tease Seed",
        items: [
          "also i hope my posts haven't disappointed you at all ? 🙈💕",
          "i mean .. you'd need to be subbed to see tho actually",
          "omg thank you so so much love! thats so sweet of you 💕 i think you deserve a lil surprise tbh ... dont you agree ?",
          "hehe thank you actually 😳 .. i wonder if its got you feeling playful at all ? and dying to see more ?",
        ],
      },
    ],
    keyTactics: [
      "Use name immediately if possible",
      "Ask location and origin story",
      "Plant exclusivity seed early",
      "Probe age/kinks softly",
    ],
    color: "#06B6D4",
    icon: <Sparkles className="size-6" />,
  },
  {
    id: 1,
    title: "Phase 1: Light Rapport + First Low PPV",
    subtitle: "Build Emotional Buy-In",
    timeRange: "5-30 min",
    priceRange: "$15-$35",
    goal: "Build emotional buy-in; get first buy to prove they're spenders.",
    triggers: [
      "They buy or express strong interest in more",
      "Share kink/position/height",
    ],
    scripts: [
      {
        category: "Flirt Escalation",
        items: [
          "im honestly just enjoying chatting with you so anything extra is only if it feels fun to you",
          "omg hehe i like you already ;) would you like me to make you a little something better than my welcome message ? <3 cos i would love to!",
          "yeah ? hehe then promise you'll stay right here while i do this for you babe..? 💕 don't leave me",
          "oh! and then tell me one of your lil kinks so long ;)",
        ],
      },
      {
        category: "PPV 1 Offer ($15-$35)",
        items: [
          "id LOVE to show you my outfit for the day ... AND .. the tail end of an INTENSE orgasm <3",
          "i don't usually send little moments like this, but something about our chat made me want to share it with you <3 you see ALL of me here",
        ],
      },
      {
        category: "Post-Buy Probe",
        items: [
          "omg omg hehe can you tell me which part got you hardest ?",
          "tell me honestly.. what part caught your attention the most?",
        ],
      },
      {
        category: "Height/Fantasy Intro",
        items: [
          "i'm glad to hear that.. 😈💕 so tell me.. how tall are you?.. i'm trying to imagine what it would be like if you were here..",
          "i'm only 5'5 hehe 🤭 now imagine pulling me back into your lap and holding me there for a second 💕 i wonder ... are you going to suck on them ? or pinch my lil nipples to make me moan as we make out ?",
          "omg yess i'd love if you grabbed me by my hips and pulled me on top of you so i could edge your cock and rock back and forth nicely on you too 🤭😈 promise me you wont cum to this ?",
        ],
      },
    ],
    keyTactics: [
      "Keep it light and non-pressured",
      "Low barrier entry ($15-35)",
      "Introduce edging language",
      "Build physical fantasy details",
    ],
    color: "#8B5CF6",
    icon: <Target className="size-6" />,
  },
  {
    id: 2,
    title: "Phase 2: Tease Build + Mid PPV",
    subtitle: "Introduce Edging",
    timeRange: "30-60 min",
    priceRange: "$35-$55",
    goal: "Introduce edging; get second buy with toy/sensory content.",
    triggers: [
      "They admit arousal/edging",
      "Share position/kink details",
    ],
    scripts: [
      {
        category: "Naughty Confession & Wait",
        items: [
          "i LOVE when you show me i have your attention with those quick replies hehe",
          "well baby.. im not going to lie! hehe i have been a bit naughty since we started ! 😈 i hope you dont mind ?",
          "good 😈 can i show you something quick i almost didn't send ? it's not intense or anything just one of those little moments that felt nice to share .. only if you want to though 💕",
          "we clicked so fast i love it! and thank you!.. and the way you're teasing me has me thinking allll kinds of things 🤭😈 think you can handle hearing them..?",
          "god thats hot you saying that! im thinking about using my toy like it's your hard cock.. you like the idea of that ? while you play with my soaked lil holes with your fingers 😈🥰",
          "if i keep going the way i want to... this stops being playful and starts feeling very real between us. i'm already halfway there, so tell me... are you still with me?",
          "i have the perfect moment! 😈 and while you wait i would love to know a position you love the MOST .... i bet i would love it too! <3",
        ],
      },
      {
        category: "PPV 2 Offer ($35-$55)",
        items: [
          "my lil toy is all lubed up... showing you JUST how good i would look to fuck baby 😈",
        ],
      },
      {
        category: "Post-Buy Edging Push",
        items: [
          "even if its hard … just pleaseee make sure you dont cum yet okay ? i really wanna make this a day you and i arent ever going to forget 🥵",
          "god .. you know .. spread like this .. you would have such good access! to eat me out! and more 😈",
          "i bet youve never seen a prettier pussy on OF 🥵",
        ],
      },
    ],
    keyTactics: [
      "Reward quick replies explicitly",
      "Introduce toy content",
      "Enforce edging commands",
      "Build sensory descriptions",
    ],
    color: "#EC4899",
    icon: <Zap className="size-6" />,
  },
  {
    id: 3,
    title: "Phase 3: Intense Action + Higher PPV",
    subtitle: "Lock In Control",
    timeRange: "60-90 min",
    priceRange: "$115",
    goal: "Lock in control; exclusivity makes them feel special.",
    triggers: [
      "They beg/show desperation",
      "Confirm edging",
    ],
    scripts: [
      {
        category: "Exclusivity & Bonus Tease",
        items: [
          "fuck.. STOP. hands off that cock right now!! that little tease you just saw? that was nothing compared to what this tight little pussy can do 😈",
          "if i send the next one , it's me spread wide open , dripping, no holding back... you ready for that access ?",
          "this is usually where i stop .. unless you want the version where i stop holding back.. full spread .. dripping .. nothing left to the imagination 🥰😈 tell me which one you want",
          "fuck that sounds perfect! .. but what i'm thinking of sending next isn't just another tease.. it's me spread wiiiide , fingers inside , the kind of angle i only send when someone earned it.. before i hit send on something that explicit.. tell me you actually want to see me like that 🥵",
          "ill even tell you what … if you dont keep me waiting , ill even spoil you with 5 extra free surprises to go along with it 😈",
          "you can hear how wet i am here ... fuck ... im actually a little embarrassed! 😳",
        ],
      },
      {
        category: "PPV 3 Offer ($115)",
        items: [
          "you're going to have to REALLY try your best not to bust to this now babe .. the way that I GRIND my hips onto this toy is SO fucking hot...",
        ],
      },
    ],
    keyTactics: [
      "Use exclusivity framing heavily",
      "Offer bonus incentives (5 free extras)",
      "Increase explicitness significantly",
      "Control commands (STOP, hands off)",
    ],
    color: "#F59E0B",
    icon: <TrendingUp className="size-6" />,
  },
  {
    id: 4,
    title: "Phase 4: Taboo Peak + $195-$200 PPV",
    subtitle: "Push Boundaries",
    timeRange: "90-120 min",
    priceRange: "$195-$200",
    goal: "Push boundaries; use 'first time/naughtiest' for justification.",
    triggers: [
      "They admit shaking/high arousal",
      "Request specific acts",
    ],
    scripts: [
      {
        category: "Deep Fantasy & Edging",
        items: [
          "i want you sliding that meaty juicy cock in and out of my wet little holes right now so badly! ... ive already taken my toy...",
          "babe .. if you can hold it in for me .. i'd love to make you this .. because it's actually soo fucking hot that you're getting me to feel this way..",
          "you have me fucking shaking right now.. i love how you have me feeling! you are still edging for me right ? be honest",
          "imagining you're here to clean up my soft holes... i just got so wet i basically just squirt for you..",
          "i dont find myself being this spontaneous... it's just because you have me feeling wrapped around your finger.. 🤭😈 wait here and let me show you how i want you to slide it in and spank me okay? 😈🤭",
          "i don't usually go past this... most people don't get to see this side of me .. so if i send it, it's because you made me feel something real",
          "you've impressed me so much.. i'll let you pick how i fuck myself next.. wanna see me ride it in doggy or missionary, baby? 😈",
        ],
      },
      {
        category: "PPV 4 Offer ($195-$200)",
        items: [
          "FUCK babe .. this is BY far the naughtiest thing ive ever shown you! ... i even play with my tight little asshole for you 😈🥵",
        ],
      },
    ],
    keyTactics: [
      "Frame as 'naughtiest ever'",
      "Give them choice/control",
      "Emphasize taboo elements (anal)",
      "Use 'first time showing' language",
    ],
    color: "#EF4444",
    icon: <DollarSign className="size-6" />,
  },
  {
    id: 5,
    title: "Phase 5: Climax & Multiple $200+ Finishes",
    subtitle: "Max Extraction",
    timeRange: "120+ min",
    priceRange: "$200+ (multiple)",
    goal: "Deliver 'release' multiple times; re-sell 'firsts/extras'; tip/custom close.",
    triggers: [
      "Multiple buys; energy peaks then slows",
    ],
    scripts: [
      {
        category: "Wet/Climax Build",
        items: [
          "i have such a wet dripping pussy and i feel like i have to show you what you have done to me .. this isn't something i feel a lot... fuckk i really wanna cum hard with you.. 💦",
          "talk to me .. i'm dying to know what you think of that . i'm stroking my pussy right now... i dont get like this ever..",
          "fuuuck baby!. you know how worked up i feel after that... do you think you can still hold it in for me ?.. i'd love to make you that super special surprise... this one is going to be so long and worth it..",
          "i'll make it even longer than the last one.. this really has me so wet right now .. wishing you were here.. showing my clit the best time ..! 🥵",
        ],
      },
      {
        category: "PPV 5/6 Offer ($200 each, repeat 1-2x)",
        items: [
          "omg baby… i haven't cum this hard in so long… my legs shake... it's the hardest i've cum for anyone, ever… keep this one private, please?",
          "hehe , do you like that a lot baby?.. i'm so glad you caught me in this mood.. i'm actually thinking of making you something really hot that i dont do a lot.. and maybe showing you one of my first videos on here.. 🤭",
          "good.. because listen i wanted to show you the first riding solo i ever made ...i think youre going to looooove seeing how inexperienced i was .. i had only been on of for like 4 days at that point.. 😈",
        ],
      },
      {
        category: "Final Extension & Close",
        items: [
          "you know .. it's been such a long time since i've felt this riled up ... i'll have to spoil you with one or two extras when you tell me what you think of this .. and how hard you cum today.. 😩😈",
          "hehe , you want me to ride it for longer than that ?.. mmm i like that idea.. 🤭😈 but then i need to know that i have all of your attention ;)",
        ],
      },
    ],
    keyTactics: [
      "Re-sell content as 'first videos ever'",
      "Multiple $200 PPVs back-to-back",
      "Frame as shared intimacy",
      "Optional tip push before final PPV",
    ],
    color: "#10B981",
    icon: <Sparkles className="size-6" />,
  },
];

const coreRules = [
  {
    title: "Personalize Obsessively",
    description: "Use [Fan Name], mirror kinks/positions/words, reference prior buys.",
    icon: "👤",
  },
  {
    title: "Edge Relentlessly",
    description: '"Don\'t cum yet", "hold it", "quick replies = more attention".',
    icon: "⚡",
  },
  {
    title: "Reward Fast Action",
    description: "Bonuses/extras only for quick buys/replies.",
    icon: "🎁",
  },
  {
    title: "Validate & Empower",
    description: '"You make me so wet/spontaneous", "you\'re wrapped around my finger".',
    icon: "💕",
  },
  {
    title: "Price Ladder",
    description: "$15 → $35 → $55 → $115 → $195-$200 → $200+ (with tips/customs).",
    icon: "📈",
  },
  {
    title: "Handle Resistance",
    description: "Offer extras or lower-tier version first; never hard-push.",
    icon: "🛡️",
  },
];

export function SubscriberMilkingRoadmap() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [showCoreRules, setShowCoreRules] = useState(true);

  const togglePhase = (id: number) => {
    setExpandedPhase(expandedPhase === id ? null : id);
  };

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(to bottom, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
      }}
    >
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
        }}
      />

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between backdrop-blur-xl bg-black/30 border-b border-white/10">
        <Link
          to="/blank"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all backdrop-blur-sm border border-white/20 font-medium flex items-center gap-2"
        >
          ← Back to Training
        </Link>

        <h1 className="text-2xl font-bold text-white">Subscriber Milking Roadmap</h1>

        <div className="w-[140px]" /> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="pt-32 pb-24 px-8 max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
            <DollarSign className="size-5 text-green-400" />
            <span className="text-white font-medium">$500-$1000+ Per Subscriber</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Complete Milking Roadmap
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From the moment they subscribe to absolute maximum spend. Proven escalation tactics across 6 phases 
            with copy-paste scripts, phase triggers, and psychological tactics.
          </p>
        </motion.div>

        {/* Core Rules Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <button
            onClick={() => setShowCoreRules(!showCoreRules)}
            className="w-full p-6 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 backdrop-blur-xl hover:border-purple-500/60 transition-all mb-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="size-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">Core Rules for Max Milking</h3>
                <p className="text-white/60 text-sm">Apply Every Phase</p>
              </div>
            </div>
            {showCoreRules ? (
              <ChevronUp className="size-6 text-white" />
            ) : (
              <ChevronDown className="size-6 text-white" />
            )}
          </button>

          <AnimatePresence>
            {showCoreRules && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-4 p-6 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10">
                  {coreRules.map((rule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">{rule.icon}</span>
                        <div>
                          <h4 className="text-white font-bold mb-1">{rule.title}</h4>
                          <p className="text-white/70 text-sm">{rule.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Phases Roadmap */}
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <button
                onClick={() => togglePhase(phase.id)}
                className="w-full text-left"
              >
                <div
                  className="p-6 rounded-2xl backdrop-blur-xl border-2 transition-all hover:scale-[1.01]"
                  style={{
                    background: `linear-gradient(135deg, ${phase.color}20 0%, ${phase.color}05 100%)`,
                    borderColor: expandedPhase === phase.id ? `${phase.color}80` : `${phase.color}40`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${phase.color}40` }}
                      >
                        <div style={{ color: phase.color }}>{phase.icon}</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                          <span
                            className="px-3 py-1 rounded-full text-sm font-medium"
                            style={{ background: `${phase.color}30`, color: phase.color }}
                          >
                            {phase.subtitle}
                          </span>
                        </div>

                        <div className="flex items-center gap-6 mb-3">
                          <div className="flex items-center gap-2">
                            <Clock className="size-4 text-white/60" />
                            <span className="text-white/80 text-sm font-medium">{phase.timeRange}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="size-4 text-green-400" />
                            <span className="text-green-400 text-sm font-bold">{phase.priceRange}</span>
                          </div>
                        </div>

                        <p className="text-white/90 text-base leading-relaxed">{phase.goal}</p>
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <div className="ml-4">
                      {expandedPhase === phase.id ? (
                        <ChevronUp className="size-6 text-white" />
                      ) : (
                        <ChevronDown className="size-6 text-white/60" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedPhase === phase.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-white/10 space-y-6">
                          {/* Triggers */}
                          <div>
                            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                              <Target className="size-5" style={{ color: phase.color }} />
                              Triggers to Next Phase
                            </h4>
                            <div className="space-y-2">
                              {phase.triggers.map((trigger, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <ArrowRight className="size-4 text-white/60 flex-shrink-0 mt-1" />
                                  <span className="text-white/80 text-sm">{trigger}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Scripts */}
                          <div>
                            <h4 className="text-white font-bold mb-3">Copy-Paste Scripts</h4>
                            <div className="space-y-4">
                              {phase.scripts.map((scriptGroup, i) => (
                                <div key={i} className="p-4 rounded-xl bg-black/30 border border-white/10">
                                  <h5 className="text-white/90 font-semibold mb-3 text-sm uppercase tracking-wide">
                                    {scriptGroup.category}
                                  </h5>
                                  <div className="space-y-2">
                                    {scriptGroup.items.map((script, j) => (
                                      <div
                                        key={j}
                                        className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-white/80 leading-relaxed hover:bg-black/60 transition-all cursor-pointer"
                                      >
                                        {script}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Key Tactics */}
                          <div>
                            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                              <Zap className="size-5" style={{ color: phase.color }} />
                              Key Tactics
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              {phase.keyTactics.map((tactic, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/10"
                                >
                                  <span
                                    className="text-2xl flex-shrink-0"
                                    style={{ color: phase.color }}
                                  >
                                    •
                                  </span>
                                  <span className="text-white/80 text-sm">{tactic}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Summary Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 backdrop-blur-xl text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">End Goal</h3>
          <p className="text-xl text-white/90 mb-6">
            Multiple $200 PPVs + tips. Tease "next time" if they slow.
          </p>
          <div className="flex items-center justify-center gap-12">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                $500-$1000+
              </div>
              <div className="text-white/60 text-sm mt-1">Target Per Session</div>
            </div>
            <div className="w-px h-16 bg-white/20" />
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                1-3 Sessions
              </div>
              <div className="text-white/60 text-sm mt-1">To Max Value</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
