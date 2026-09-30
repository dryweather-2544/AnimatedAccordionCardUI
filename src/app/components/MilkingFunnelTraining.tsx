import { useState } from "react";
import { ChevronLeft, ChevronRight, DollarSign, Target, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";

export function MilkingFunnelTraining() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      type: "title",
      title: "Mastering the OnlyFans Milking Funnel",
      subtitle: "High-Spend Client Strategy",
      description: "Based on Two Real Transcripts: Train Your Team to Extract $400-800+ Per Session",
      stats: [
        { label: "Milk 1", value: "$190+", detail: "Quick escalation, 4 PPVs" },
        { label: "Milk 2", value: "$600+", detail: "Extended session, 6 PPVs" },
      ],
    },
    {
      id: 1,
      type: "concept",
      title: "Understanding the Milking Method",
      icon: <Target className="size-16 text-pink-400" />,
      definition: "Milking refers to a strategic conversation flow on OnlyFans to gradually escalate arousal and emotional investment, leading to repeated high-value PPV purchases.",
      keyPsychology: "Build trust → Tease desire → Control release (edging) → Offer exclusivity/urgency → Close with climactic content.",
      whyItWorks: "Turns casual chats into addictive sessions by mirroring client energy, personalizing, and using FOMO and reciprocity.",
      insights: [
        "Gradual price ramp: $35 → $200+",
        "Edging commands build tension",
        "Bonuses incentivize quick buys",
        "Exclusivity creates perceived value",
      ],
    },
    {
      id: 2,
      type: "principles",
      title: "Core Principles of the Milking Formula",
      icon: <TrendingUp className="size-16 text-emerald-400" />,
      principles: [
        {
          title: "Personalization",
          description: "Use [Fan Name], incorporate details (age, height, kinks, positions).",
          color: "#EC4899",
        },
        {
          title: "Edging & Control",
          description: 'Commands like "Don\'t cum yet" to build tension.',
          color: "#8B5CF6",
        },
        {
          title: "Urgency/Exclusivity",
          description: '"Never shown before," "Earned it," bonuses for fast replies.',
          color: "#F59E0B",
        },
        {
          title: "Reciprocity/Validation",
          description: 'Compliment ("You have me wrapped around your finger"), offer extras.',
          color: "#10B981",
        },
        {
          title: "Price Escalation",
          description: "Start low (~$35 tease) → Ramp to $200+ (orgasm vids).",
          color: "#3B82F6",
        },
        {
          title: "Objection Handling",
          description: "Empathize with budget/payment issues, provide fixes.",
          color: "#EF4444",
        },
      ],
      sessionGoal: "4-6 PPVs, 1-3 hours; end teasing future if energy drops.",
    },
    {
      id: 3,
      type: "case-study",
      title: "Milk 1: Quick Escalation Example",
      caseNumber: "01",
      spend: "$190+",
      duration: "~1.5 hours",
      breakdown: [
        { amount: "$35", description: "Tease with audio" },
        { amount: "$40", description: "Toy insertion" },
        { amount: "$115", description: "Grinding action" },
        { amount: "$195", description: "Anal content (pending)" },
      ],
      successFactors: [
        "Fast rapport building (age/location)",
        "Gradual explicitness increase",
        "Edging to sustain desire",
        'Key quote: "You have me wrapped around your finger"',
      ],
      lessons: [
        "Quick replies maintain momentum",
        "Vulnerability creates connection",
        "Personalization drives investment",
      ],
    },
    {
      id: 4,
      type: "case-study",
      title: "Milk 2: Extended High-Spend Example",
      caseNumber: "02",
      spend: "$600+",
      duration: "~2.5 hours",
      breakdown: [
        { amount: "$35", description: "Audio tease" },
        { amount: "$55", description: "Toy slide with edging" },
        { amount: "$115", description: "Grinding with bonus" },
        { amount: "$195", description: "Anal/squirt taboo" },
        { amount: "$200", description: "Orgasm video 1" },
        { amount: "$200", description: "Orgasm video 2" },
      ],
      successFactors: [
        "Handled payment issues empathetically",
        "Re-used content as exclusive extras",
        "Deeper personalization (anal fantasies)",
        'Key quote: "I\'ve never shown anyone me cumming before"',
      ],
      lessons: [
        "Resilience through technical issues pays off",
        "Feedback loops sustain engagement",
        "Exclusivity peaks drive premium pricing",
      ],
    },
    {
      id: 5,
      type: "roadmap",
      title: "The Milking Funnel Roadmap",
      icon: <Clock className="size-16 text-blue-400" />,
      phases: [
        {
          phase: "Phase 1: Rapport",
          time: "0-20 min",
          spend: "$0",
          goal: "Build connection and trust",
          tactics: ["Personal questions", "Share details first", "Find common ground"],
        },
        {
          phase: "Phase 2: First PPV",
          time: "20-40 min",
          spend: "~$35",
          goal: "Soft tease to qualify spender",
          tactics: ["Audio tease", "Low entry price", "Test willingness to buy"],
        },
        {
          phase: "Phase 3: Second PPV",
          time: "40-60 min",
          spend: "~$40-55",
          goal: "Introduce toys and escalation",
          tactics: ["Toy content", "Incorporate their preferences", "Build momentum"],
        },
        {
          phase: "Phase 4: Third PPV",
          time: "60-90 min",
          spend: "~$115",
          goal: "Intense action with exclusivity",
          tactics: ["Grinding/bouncing", "Exclusivity framing", "Bonus incentives"],
        },
        {
          phase: "Phase 5: Fourth PPV",
          time: "90-120 min",
          spend: "~$195",
          goal: "Push taboo boundaries",
          tactics: ["Anal/squirt content", "Taboo escalation", "Create FOMO"],
        },
        {
          phase: "Phase 6: Final PPV(s)",
          time: "120+ min",
          spend: "~$200+",
          goal: "Climactic finish with premium pricing",
          tactics: ["Orgasm videos", "Never-before-seen angle", "Ultimate exclusivity"],
        },
      ],
    },
    {
      id: 6,
      type: "tools",
      title: "Global Tools & Quick Scripts",
      icon: <CheckCircle2 className="size-16 text-purple-400" />,
      tools: [
        {
          category: "Edging Commands",
          scripts: [
            "DONT CUM!!!",
            "wait for me baby, don't finish yet",
            "hold it for me, I want us to cum together",
          ],
        },
        {
          category: "Bonus Incentives",
          scripts: [
            "ill even spoil you with 5 extra free surprises 😈",
            "if you unlock this now, I'll throw in something special just for you",
            "quick buyers get a bonus you won't want to miss",
          ],
        },
        {
          category: "Payment Fixes",
          scripts: [
            "you need to verify your account... 😊💕",
            "try using a different card, sometimes that helps!",
            "no worries babe! here's what to do...",
          ],
        },
        {
          category: "Exclusivity Framing",
          scripts: [
            "I've never shown this to anyone before",
            "you're the first person who gets to see this",
            "this is just for you, no one else has unlocked this",
          ],
        },
      ],
      tips: [
        "Customize scripts to match your style and voice",
        "Track spends in a spreadsheet or Notion database",
        "Practice with role-play scenarios",
        "Monitor which scripts convert best",
      ],
    },
    {
      id: 7,
      type: "metrics",
      title: "Measuring Success",
      icon: <DollarSign className="size-16 text-green-400" />,
      trackingMetrics: [
        { metric: "Spend per Session", target: "$300-600+", importance: "Primary KPI" },
        { metric: "PPVs per Session", target: "4-6", importance: "Volume indicator" },
        { metric: "Drop-off Phase", target: "Phase 5+", importance: "Funnel health" },
        { metric: "Session Duration", target: "1.5-3 hours", importance: "Engagement level" },
        { metric: "Return Rate", target: "30%+", importance: "Long-term value" },
      ],
      goal: "Aim for 20% increase in average spend after implementing this training.",
      tools: [
        "Use Notion or Excel to log each session",
        "Track which phases generate most revenue",
        "Identify patterns in high-spend clients",
        "A/B test different scripts and tactics",
      ],
    },
    {
      id: 8,
      type: "action",
      title: "Ready to Milk?",
      subtitle: "Implementation Checklist",
      checklist: [
        "Review all 6 phases of the funnel roadmap",
        "Save quick scripts for edging, bonuses, and exclusivity",
        "Set up tracking system (Notion/Excel)",
        "Practice Phase 1 rapport building with next 3 clients",
        "Test $35 entry PPV to qualify spenders",
        "Gradually escalate to $115+ as trust builds",
        "Track results and refine approach weekly",
      ],
      callout: "Start with your next conversation. Copy these scripts, adapt to your style, and watch the revenue multiply.",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen relative" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}>
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/10">
        <Link
          to="/blank"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all backdrop-blur-sm border border-white/20 font-medium"
        >
          ← Back to Training
        </Link>
        
        <div className="flex items-center gap-4">
          <span className="text-white/60 text-sm font-medium">
            Slide {currentSlide + 1} / {slides.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/20"
            >
              <ChevronLeft className="size-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-white/20"
            >
              <ChevronRight className="size-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Progress Dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-pink-400" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Slide Content */}
      <div className="pt-32 pb-24 px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            {/* Title Slide */}
            {currentSlideData.type === "title" && (
              <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl" />
                  <h1 className="text-7xl font-bold text-white mb-6 relative">
                    {currentSlideData.title}
                  </h1>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl text-pink-300 font-medium mb-4"
                >
                  {currentSlideData.subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-white/70 mb-16 max-w-3xl"
                >
                  {currentSlideData.description}
                </motion.p>

                {/* Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-2 gap-8 w-full max-w-2xl"
                >
                  {currentSlideData.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20"
                    >
                      <p className="text-white/60 text-sm font-medium mb-2">{stat.label}</p>
                      <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-2">
                        {stat.value}
                      </p>
                      <p className="text-white/50 text-sm">{stat.detail}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Concept Slide */}
            {currentSlideData.type === "concept" && (
              <div className="space-y-8">
                <div className="flex items-center gap-6 mb-12">
                  {currentSlideData.icon}
                  <h2 className="text-5xl font-bold text-white">{currentSlideData.title}</h2>
                </div>

                <div className="grid gap-6">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 backdrop-blur-xl border border-pink-500/30">
                    <h3 className="text-2xl font-bold text-pink-300 mb-4">Definition</h3>
                    <p className="text-xl text-white/90 leading-relaxed">{currentSlideData.definition}</p>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-xl border border-purple-500/30">
                    <h3 className="text-2xl font-bold text-purple-300 mb-4">Key Psychology</h3>
                    <p className="text-xl text-white/90 leading-relaxed">{currentSlideData.keyPsychology}</p>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-xl border border-blue-500/30">
                    <h3 className="text-2xl font-bold text-blue-300 mb-4">Why It Works</h3>
                    <p className="text-xl text-white/90 leading-relaxed mb-6">{currentSlideData.whyItWorks}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {currentSlideData.insights.map((insight, index) => (
                        <div key={index} className="flex items-center gap-3 text-white/80">
                          <CheckCircle2 className="size-5 text-blue-400 flex-shrink-0" />
                          <span className="text-lg">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Principles Slide */}
            {currentSlideData.type === "principles" && (
              <div className="space-y-8">
                <div className="flex items-center gap-6 mb-12">
                  {currentSlideData.icon}
                  <h2 className="text-5xl font-bold text-white">{currentSlideData.title}</h2>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {currentSlideData.principles.map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20"
                      style={{
                        borderTopColor: principle.color,
                        borderTopWidth: "3px",
                      }}
                    >
                      <h3 className="text-xl font-bold text-white mb-3" style={{ color: principle.color }}>
                        {principle.title}
                      </h3>
                      <p className="text-white/80">{principle.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl border border-amber-500/30">
                  <h3 className="text-xl font-bold text-amber-300 mb-2">Session Goal</h3>
                  <p className="text-white/90 text-lg">{currentSlideData.sessionGoal}</p>
                </div>
              </div>
            )}

            {/* Case Study Slide */}
            {currentSlideData.type === "case-study" && (
              <div className="space-y-8">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl font-bold text-white/20">#{currentSlideData.caseNumber}</span>
                      <h2 className="text-5xl font-bold text-white">{currentSlideData.title}</h2>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <DollarSign className="size-6 text-green-400" />
                        <span className="text-2xl font-bold text-green-400">{currentSlideData.spend}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="size-6 text-blue-400" />
                        <span className="text-xl text-blue-400">{currentSlideData.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {/* Spend Breakdown */}
                  <div className="col-span-1 p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-xl border border-green-500/30">
                    <h3 className="text-xl font-bold text-green-300 mb-4">Spend Breakdown</h3>
                    <div className="space-y-3">
                      {currentSlideData.breakdown.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-2xl font-bold text-green-400 min-w-[80px]">{item.amount}</span>
                          <span className="text-white/80">{item.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Success Factors */}
                  <div className="col-span-1 p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-xl border border-purple-500/30">
                    <h3 className="text-xl font-bold text-purple-300 mb-4">Success Factors</h3>
                    <div className="space-y-3">
                      {currentSlideData.successFactors.map((factor, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="size-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Lessons */}
                  <div className="col-span-1 p-6 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 backdrop-blur-xl border border-amber-500/30">
                    <h3 className="text-xl font-bold text-amber-300 mb-4">Key Lessons</h3>
                    <div className="space-y-3">
                      {currentSlideData.lessons.map((lesson, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-amber-400 font-bold flex-shrink-0">{index + 1}.</span>
                          <span className="text-white/80 text-sm">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Roadmap Slide */}
            {currentSlideData.type === "roadmap" && (
              <div className="space-y-8">
                <div className="flex items-center gap-6 mb-12">
                  {currentSlideData.icon}
                  <h2 className="text-5xl font-bold text-white">{currentSlideData.title}</h2>
                </div>

                <div className="space-y-4">
                  {currentSlideData.phases.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                          <p className="text-lg text-white/70 mb-3">{phase.goal}</p>
                          <div className="flex flex-wrap gap-2">
                            {phase.tactics.map((tactic, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/20"
                              >
                                {tactic}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right ml-6">
                          <div className="text-3xl font-bold text-green-400 mb-1">{phase.spend}</div>
                          <div className="text-sm text-white/60">{phase.time}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Slide */}
            {currentSlideData.type === "tools" && (
              <div className="space-y-8">
                <div className="flex items-center gap-6 mb-12">
                  {currentSlideData.icon}
                  <h2 className="text-5xl font-bold text-white">{currentSlideData.title}</h2>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {currentSlideData.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20"
                    >
                      <h3 className="text-xl font-bold text-pink-300 mb-4">{tool.category}</h3>
                      <div className="space-y-3">
                        {tool.scripts.map((script, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-black/30 border border-white/10 font-mono text-sm text-white/90"
                          >
                            {script}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30">
                  <h3 className="text-xl font-bold text-blue-300 mb-4">Implementation Tips</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {currentSlideData.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Metrics Slide */}
            {currentSlideData.type === "metrics" && (
              <div className="space-y-8">
                <div className="flex items-center gap-6 mb-12">
                  {currentSlideData.icon}
                  <h2 className="text-5xl font-bold text-white">{currentSlideData.title}</h2>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 mb-8">
                  <h3 className="text-2xl font-bold text-green-300 mb-2">Primary Goal</h3>
                  <p className="text-xl text-white/90">{currentSlideData.goal}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {currentSlideData.trackingMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{metric.metric}</h3>
                          <p className="text-white/60 text-sm">{metric.importance}</p>
                        </div>
                        <div className="text-3xl font-bold text-green-400">{metric.target}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-xl border border-purple-500/30">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">Tracking Tools</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {currentSlideData.tools.map((tool, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Action Slide */}
            {currentSlideData.type === "action" && (
              <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative mb-12"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl" />
                  <h1 className="text-7xl font-bold text-white mb-4 relative">{currentSlideData.title}</h1>
                  <p className="text-2xl text-green-300 font-medium">{currentSlideData.subtitle}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full max-w-3xl"
                >
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 mb-8">
                    <div className="space-y-4">
                      {currentSlideData.checklist.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-start gap-4 text-left"
                        >
                          <CheckCircle2 className="size-6 text-green-400 flex-shrink-0 mt-1" />
                          <span className="text-xl text-white/90">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="p-6 rounded-xl bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-xl border-2 border-pink-500/50"
                  >
                    <p className="text-xl text-white/90 italic">{currentSlideData.callout}</p>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
