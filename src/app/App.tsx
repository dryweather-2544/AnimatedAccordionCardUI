import { RouterProvider, createBrowserRouter } from "react-router";
import { BlankPage } from "./components/BlankPage";
import { BlankPageRedesigned } from "./components/BlankPageRedesigned";
import { MilkingFunnelTraining } from "./components/MilkingFunnelTraining";
import { SubscriberMilkingRoadmap } from "./components/SubscriberMilkingRoadmap";
import { OnlyFansMilkingRoadmap } from "./components/OnlyFansMilkingRoadmap";
import { FunnelMindMap } from "./components/FunnelMindMap";
import { AccordionCard } from "./components/AccordionCard";
import { MessageCircle, Flame, Crown, Gem, Sparkles } from "lucide-react";
import { HARD_SELL_NESTED_ITEMS, HARD_SELL_QUIZ_DATA } from "./components/HARD_SELL_ENHANCED";
import { STEP1_V2_NESTED_ITEMS } from "./components/STEP1_V2_NESTED";
import { STEP1_AND_2_MERGED } from "./components/STEP1_AND_2_MERGED";
import { STEP2_V2_NESTED_ITEMS } from "./components/STEP2_V2_NESTED";
import { STEP3_NESTED_ITEMS } from "./components/STEP3_NESTED_ITEMS";
import { STEP4_NESTED_ITEMS, STEP4_QUIZ_DATA } from "./components/STEP4_NESTED_ITEMS";
import { STEP5_NESTED_ITEMS } from "./components/STEP5_ENHANCED";
import { STEP6_NESTED_ITEMS } from "./components/STEP6_NESTED_ITEMS";
import { STEP7_NESTED_ITEMS } from "./components/STEP7_NESTED_ITEMS";
import { STEP8_NESTED_ITEMS } from "./components/STEP8_BRANCH_POINT";
import { STEP9_NESTED_ITEMS } from "./components/STEP9_NESTED_ITEMS";
import exampleImage1 from 'figma:asset/4085468b323d7cafdf3aeaf67fd2ab967691eae1.png';
import exampleImage2 from 'figma:asset/ee23a2e1b9c0977300558f4224696b52d96fe54a.png';
import kycFramework from 'figma:asset/11678c957b84b0a8b19d8198d1bf8bd11cc0536e.png';
import hardSellExample1 from 'figma:asset/bff7870dd5836ab61a684d81857821322674fdd9.png';
import hardSellExample2 from 'figma:asset/25b3e29b9ead5674fdf04cdad8159604c15aaf43.png';
import { ImageZoom } from "./components/ImageZoom";
import { CardProvider, useCardContext } from "./components/CardContext";
import { EditableContentProvider } from "./hooks/useEditableContent";
import { EditModeProvider } from "./components/EditModeContext";
// import { EditModeControls } from "./components/EditModeControls"; // Removed - can be added back later
import { motion } from "motion/react";
import { Link } from "react-router";

function AppContent() {
  const { expandedCard } = useCardContext();
  
  return (
      <div className="min-h-screen relative" style={{
        background: '#0B0F1A',
      }}>
      {/* Subtle background grain */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.5\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
      
      {/* Subtle vignette around edges */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(11, 15, 26, 0.6) 100%)',
        }}
      />
      
      {/* Soft radial glow behind center column - cooler tone */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(59, 110, 235, 0.06) 0%, transparent 70%)',
        }}
      />
      
      <div className="max-w-[1800px] mx-auto relative px-8 py-12">
        <Link
          to="/blank"
          className="absolute top-8 right-8 z-50 block px-10 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 hover:from-purple-500 hover:via-purple-400 hover:to-blue-400 text-white text-center font-bold text-sm tracking-wider rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 animate-pulse"
          style={{
            textShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
        >
          TRAINING MODULES
        </Link>

        <motion.div 
          className="text-center mb-20"
          animate={{
            filter: expandedCard ? "blur(8px)" : "blur(0px)",
            opacity: expandedCard ? 0.3 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-slate-100 mb-3 tracking-[0.3em] text-3xl font-medium">HOW TO SELL</h1>
          <p className="text-slate-400 tracking-[0.15em] text-sm uppercase mb-4">
            A STEP BY STEP GUIDE ON HOW TO RUN UP A CLIENT
          </p>
          <Link
            to="/funnel-mind-map"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs tracking-wider rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(59,110,235,0.3)] hover:shadow-[0_0_30px_rgba(59,110,235,0.5)] hover:scale-105 font-bold"
          >
            <span>🗺️</span>
            <span>VIEW MIND MAP</span>
          </Link>
        </motion.div>

        {/* Two column layout: Hard Sell on left, Steps on right */}
        <div className="flex gap-24 items-start">
          {/* Left column - Hard Sell */}
          <div className="w-80 flex-shrink-0 mt-[85px]">
            <div className="relative">
              <div className="absolute -top-3 left-0 right-0 text-center">
                <span className="text-[10px] tracking-[0.2em] text-emerald-400/60 uppercase font-medium">Mental Mode: Rapid Execution</span>
              </div>
              <AccordionCard
                title="HARD SELL"
                description="Four part rapid strike framework"
                icon={<Flame className="size-6" />}
                color="linear-gradient(135deg, #10B981 0%, #059669 100%)"
                width="100%"
                brightness={0.85}
                content={`This is not a multi-step journey. This is a rapid, four-part tactical maneuver executed as a single focused movement when the client demonstrates the psychological markers of immediate readiness.

Goal: Move from stranger to $500+ in under 15 minutes by compressing the entire funnel into four tactical strikes executed in rapid succession.`}
                nestedItems={HARD_SELL_NESTED_ITEMS}
                quiz={HARD_SELL_QUIZ_DATA}
              />
            </div>
          </div>

          {/* Right column - Main timeline */}
          <div className="flex-1 max-w-4xl">
            {/* Vertical spine connecting steps with glowing dots */}
            <div className="relative">
              {/* Main timeline line - extended with glow effect */}
              <div 
                className="absolute w-[2px] z-0"
                style={{ 
                  left: '-60px',
                  top: '-40px',
                  bottom: '-100px',
                  background: 'linear-gradient(180deg, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.9) 15%, rgba(99, 102, 241, 0.9) 85%, rgba(99, 102, 241, 0) 100%)',
                  boxShadow: '0 0 10px rgba(99, 102, 241, 0.6), 0 0 20px rgba(99, 102, 241, 0.3)',
                }}
              />
              
              <div className="space-y-8 relative z-10">
                {/* PHASE 1: ENGAGEMENT */}
                <div className="relative">
                  <div className="mb-6 pl-4 border-l-2 border-blue-500/30">
                    <h3 className="text-[11px] tracking-[0.25em] text-blue-400/70 uppercase font-semibold mb-1">Phase 1</h3>
                    <p className="text-sm text-slate-400/80">Engagement</p>
                  </div>

                  {/* Step 1 - FOUNDATION */}
                  <div className="relative">
                    {/* Timeline dot - Blue for Trust/Information */}
                    <div
                      className="absolute w-4 h-4 rounded-full z-10"
                      style={{
                        left: '-67px',
                        top: '32px',
                        background: 'radial-gradient(circle, #3B6EEB 0%, #2952BB 100%)',
                        boxShadow: '0 0 25px rgba(59, 110, 235, 0.9), 0 0 45px rgba(59, 110, 235, 0.5), 0 0 60px rgba(59, 110, 235, 0.3)',
                      }}
                    />

                    <AccordionCard
                      title="STEP 1: Know Your Client"
                      description="Build trust before selling"
                      icon={<MessageCircle className="size-6" />}
                      color="linear-gradient(135deg, #3B6EEB 0%, #2952BB 100%)"
                      width="85%"
                      brightness={0.85}
                      content={`This phase is the foundational conversation where real engagement begins. Its goal is to create emotional connection and comfort, ensuring the client feels seen and special. By using open-ended questions and mirroring their energy, you differentiate serious spenders from casual browsers, making the transition to the first paid offer feel natural and exclusive.`}
                      v2Content={`I want you to understand something first.

You don't need to be perfect.
You don't need to be clever.
You don't need to rush.

Your job is simple:
Make the person on the other side feel comfortable talking to you.

That's it.

Everything else builds from there.`}
                      v2NestedItems={STEP1_V2_NESTED_ITEMS}
                      nestedItems={STEP1_AND_2_MERGED}
                      defaultOpen={true}
                    />
                  </div>
                </div>

                {/* PHASE 2: ESCALATION */}
                <div className="relative mt-16">
                  <div className="mb-6 pl-4 border-l-2 border-orange-500/30">
                    <h3 className="text-[11px] tracking-[0.25em] text-orange-400/70 uppercase font-semibold mb-1">Phase 2</h3>
                    <p className="text-sm text-slate-400/80">Escalation</p>
                  </div>

                  <div className="space-y-8">
                    {/* Step 2 - Action/Escalation Orange */}
                    <div className="relative">
                      <div
                        className="absolute w-4 h-4 rounded-full z-10"
                        style={{
                          left: '-67px',
                          top: '32px',
                          background: 'radial-gradient(circle, #F5A524 0%, #D98B1A 100%)',
                          boxShadow: '0 0 35px rgba(245, 165, 36, 1.0), 0 0 60px rgba(245, 165, 36, 0.7), 0 0 90px rgba(245, 165, 36, 0.4)',
                        }}
                      />
                      <AccordionCard
                        title="STEP 2: The Exclusivity Bridge ($35)"
                        description="Transaction to Investment"
                        icon={<Flame className="size-6" />}
                        color="linear-gradient(135deg, #F5A524 0%, #D98B1A 100%)"
                        width="80%"
                        brightness={1.15}
                        content={`The Core Strategy: Transaction to Investment

This phase is the crucial shift from a client buying content (the first $15 PPV) to a client investing in a unique, shared experience. By leveraging the intimacy and comfort built in the first step, the goal is to double the price comfortably while elevating the perceived value.

Its purpose is to move from simply proving your value to creating exclusivity. You are establishing that their first purchase was the "key" to unlock a deeper, more intimate tier of connection and content that is not available to casual followers. This psychological framing justifies the price jump by making the client feel special and highly-valued.`}
                        nestedItems={STEP2_V2_NESTED_ITEMS}
                      />
                    </div>

                    {/* Step 3 - Crimson escalation */}
                    <div className="relative">
                      <div
                        className="absolute w-4 h-4 rounded-full z-10"
                        style={{
                          left: '-67px',
                          top: '32px',
                          background: 'radial-gradient(circle, #EF4444 0%, #DC2626 100%)',
                          boxShadow: '0 0 25px rgba(239, 68, 68, 0.9), 0 0 45px rgba(239, 68, 68, 0.5), 0 0 60px rgba(239, 68, 68, 0.3)',
                        }}
                      />
                      <AccordionCard
                        title="STEP 3: Transaction to Shared Reality ($55)"
                        description="Intimacy to Immersion"
                        icon={<Crown className="size-6" />}
                        color="linear-gradient(135deg, #EF4444 0%, #DC2626 100%)"
                        width="70%"
                        content={`The Core Strategy: Transaction to Shared Reality

This phase represents the highest level of psychological framing and is designed to turn the client into a true investor in the relationship. At this stage, the client is no longer casually buying videos; they are buying the feeling that this moment exists for them specifically.

The goal is to transition the experience from simple intimacy (the $35 tier) to complete sexual immersion (the $55 tier). By elevating the frame to one of rarity and shared reality, you comfortably justify the final price jump and secure the client as a high-tier spender who values the emotional exclusivity above the monetary cost.`}
                        nestedItems={STEP3_NESTED_ITEMS}
                        quiz={STEP4_QUIZ_DATA}
                      />
                    </div>

                    {/* Step 4 - Deep red escalation */}
                    <div className="relative">
                      <div
                        className="absolute w-4 h-4 rounded-full z-10"
                        style={{
                          left: '-67px',
                          top: '32px',
                          background: 'radial-gradient(circle, #B91C1C 0%, #991B1B 100%)',
                          boxShadow: '0 0 25px rgba(185, 28, 28, 0.9), 0 0 45px rgba(185, 28, 28, 0.5), 0 0 60px rgba(185, 28, 28, 0.3)',
                        }}
                      />
                      <AccordionCard
                        title="STEP 4: The High-Tier Access ($115)"
                        description="Shared Reality to Emotional Significance"
                        icon={<Gem className="size-6" />}
                        color="linear-gradient(135deg, #B91C1C 0%, #991B1B 100%)"
                        width="75%"
                        brightness={0.85}
                        content={`The Core Strategy: Shared Reality to Emotional Significance

This phase is the transition to some of the highest level of spending. The client has already purchased the $15, $35, and a second $35 item, proving their commitment. At this point, the transaction is completely de-emphasized.

The goal is to frame the experience as one of rarity and emotional significance. The client is no longer simply paying for a file; they are paying for access, attention, and the feeling that this exclusive moment exists solely because of their investment and relationship with you. This psychological anchor (that they are the sole reason for the content's existence) is what makes the premium $115 price feel natural, personal, and irresistible.`}
                        nestedItems={STEP4_NESTED_ITEMS}
                      />
                    </div>
                  </div>
                </div>

                {/* PHASE 3: THE FINALE */}
                <div className="relative mt-16">
                  <div className="mb-6 pl-4 border-l-2 border-purple-500/30">
                    <h3 className="text-[11px] tracking-[0.25em] text-purple-400/70 uppercase font-semibold mb-1">Phase 3</h3>
                    <p className="text-sm text-slate-400/80">The Finale</p>
                  </div>

                  <div className="space-y-8">
                    {/* Step 5 - Purple for Exclusivity/Status */}
                    <div className="relative">
                      <div
                        className="absolute w-4 h-4 rounded-full z-10"
                        style={{
                          left: '-67px',
                          top: '32px',
                          background: 'radial-gradient(circle, #7A4AE6 0%, #5F35B8 100%)',
                          boxShadow: '0 0 25px rgba(122, 74, 230, 0.9), 0 0 45px rgba(122, 74, 230, 0.5), 0 0 60px rgba(122, 74, 230, 0.3)',
                        }}
                      />
                      <AccordionCard
                        title="STEP 5: The Ultimate Scarcity Tier ($195)"
                        description="Singular Access to Emotional Reality"
                        icon={<Sparkles className="size-6" />}
                        color="linear-gradient(135deg, #7A4AE6 0%, #5F35B8 100%)"
                        width="70%"
                        brightness={0.85}
                        content={`This is the absolute peak of the funnel, intentionally designed for fewer than one percent of clients. At this level, the client has earned the right to face the final, non-monetary Scarcity Barrier. The goal is to create the feeling of ultimate exclusivity and singular access that makes the premium $195 price feel completely justified through emotional significance, not financial explanation.`}
                        nestedItems={STEP5_NESTED_ITEMS}
                      />
                    </div>

                    {/* Step 6 - Deep Purple/Gold Archive */}
                    <div className="relative">
                      <div
                        className="absolute w-4 h-4 rounded-full z-10"
                        style={{
                          left: '-67px',
                          top: '32px',
                          background: 'radial-gradient(circle, #9333EA 0%, #7E22CE 100%)',
                          boxShadow: '0 0 25px rgba(147, 51, 234, 0.9), 0 0 45px rgba(147, 51, 234, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)',
                        }}
                      />
                      <AccordionCard
                        title="STEP 6: The Ultimate Trust Vault ($200)"
                        description="Gratitude framing to secure whale status"
                        icon={<Sparkles className="size-6" />}
                        color="linear-gradient(135deg, #9333EA 0%, #7E22CE 100%)"
                        width="70%"
                        brightness={0.85}
                        content={`The Core Strategy: Gratitude Framing to Secure Whale Status

This is the final checkpoint and The Giga Whale Test. The client has now proven their commitment across four separate transactions (totaling over $200). At this point, the focus shifts entirely from content value to rewarding their proven loyalty.

The goal is to test for an ultra-high spend capacity ($400+ total) by using Gratitude Framing and offering Exclusive Archive Access. This removes any last trace of a transactional feeling. By saying you are giving them access as a thank you for their exceptional support, you make the $200 price feel like a justified privilege that confirms their status as your single, most important client.`}
                        nestedItems={STEP6_NESTED_ITEMS}
                      />
                    </div>
                  </div>
                </div>

                {/* PHASE 4: MILKING */}
                <div className="relative mt-16">
                  <div className="mb-6 pl-4 border-l-2 border-amber-500/30">
                    <h3 className="text-[11px] tracking-[0.25em] text-amber-400/70 uppercase font-semibold mb-1">Phase 4</h3>
                    <p className="text-sm text-slate-400/80">Milking</p>
                  </div>

                  <div className="space-y-8">
                    {/* Step 7 - Gold for High Value/Rarity */}
                    <div className="relative">
                      <div
                        className="absolute w-4 h-4 rounded-full z-10"
                        style={{
                          left: '-67px',
                          top: '32px',
                          background: 'radial-gradient(circle, #F59E0B 0%, #D97706 100%)',
                          boxShadow: '0 0 30px rgba(245, 158, 11, 1.0), 0 0 50px rgba(245, 158, 11, 0.6), 0 0 80px rgba(245, 158, 11, 0.3)',
                        }}
                      />
                      <AccordionCard
                        title="STEP 7: Giga Whale Finale ($400)"
                        description="Testing capacity at $800+ while delivering emotionally charged finale"
                        icon={<Sparkles className="size-6" />}
                        color="linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
                        width="70%"
                        brightness={0.95}
                        content={`This is giga whale territory. By this point, they have spent $400 to $600. The next moves will reveal if they can reach $1000, $2000, or beyond.

Goal: Test capacity at $800+, deliver maximum intensity finale with ultra-exclusivity framing, then branch into $900 to $2500+ depending on whale psychology.`}
                        nestedItems={STEP7_NESTED_ITEMS}
                      />
                    </div>

                    {/* Step 8 - Branch Point (Gold/Purple) */}
                    <div className="relative">
                      <div
                        className="absolute w-4 h-4 rounded-full z-10"
                        style={{
                          left: '-67px',
                          top: '32px',
                          background: 'radial-gradient(circle, #A855F7 0%, #9333EA 100%)',
                          boxShadow: '0 0 30px rgba(168, 85, 247, 1.0), 0 0 50px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.3)',
                        }}
                      />
                      <AccordionCard
                        title="STEP 8: The Giga Whale Branch Point"
                        description="Three paths calibrated to whale psychology ($900 to $2500+)"
                        icon={<Sparkles className="size-6" />}
                        color="linear-gradient(135deg, #A855F7 0%, #9333EA 100%)"
                        width="70%"
                        brightness={0.9}
                        content={`The Core Strategy: Classified Monetization for Long-Term Value ($900 - $2500+)

This is the most critical strategic moment in the entire funnel. The client is at peak arousal, having proven their Giga Whale status with an $800+ total spend. The goal is no longer a simple PPV, but the conversion of the relationship into a long-term asset.

The writer achieves this by immediately offering three distinct paths, each calibrated to a specific whale psychology (the "Branch Point"). By correctly identifying the client's psychological profile (e.g., whether they seek control, rarity, or convenience) and offering the matching high-value product, the writer extends the milk beyond the finale, securing total lifetime value ranging from $900 to $2500+ through customs, bundles, or exclusive access.`}
                        nestedItems={STEP8_NESTED_ITEMS}
                      />
                    </div>

                    {/* Step 9 - RED WARNING (only red in entire system) */}
                    <div className="relative">
                      <div
                        className="absolute w-4 h-4 rounded-full z-10"
                        style={{
                          left: '-67px',
                          top: '32px',
                          background: 'radial-gradient(circle, #DC2626 0%, #991B1B 100%)',
                          boxShadow: '0 0 35px rgba(220, 38, 38, 1.0), 0 0 60px rgba(220, 38, 38, 0.7), 0 0 90px rgba(220, 38, 38, 0.4)',
                        }}
                      />
                      <AccordionCard
                        title="STEP 9: THE 45-SECOND RULE ⚠️"
                        description="Why timing kills milks"
                        icon={<Sparkles className="size-6" />}
                        color="linear-gradient(135deg, #DC2626 0%, #991B1B 100%)"
                        width="70%"
                        brightness={0.85}
                        content={`This is the rule most writers never learn. At giga whale tiers, you are working with seconds, not minutes.

Goal: Master response timing at giga whale tiers. Prioritize ruthlessly. Seconds determine whether you secure $2000 or lose everything to post-nut clarity.`}
                        nestedItems={STEP9_NESTED_ITEMS}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppContent />,
    },
    {
      path: "/blank",
      element: <BlankPageRedesigned />,
    },
    {
      path: "/funnel-mind-map",
      element: <FunnelMindMap />,
    },
    {
      path: "/milking-funnel-training",
      element: <MilkingFunnelTraining />,
    },
    {
      path: "/subscriber-milking-roadmap",
      element: <SubscriberMilkingRoadmap />,
    },
    {
      path: "/onlyfans-milking-roadmap",
      element: <OnlyFansMilkingRoadmap />,
    },
  ]);

  return (
    <CardProvider>
      <EditableContentProvider>
        <EditModeProvider initialData={{}}>
          <RouterProvider router={router} />
          {/* <EditModeControls /> - Removed - can be added back later */}
        </EditModeProvider>
      </EditableContentProvider>
    </CardProvider>
  );
}