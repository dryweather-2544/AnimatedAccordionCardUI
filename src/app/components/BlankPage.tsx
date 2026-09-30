import { Link } from "react-router";
import { ArrowLeft, MessageCircle, Flame, Brain, Heart, Users, Sparkles, Zap } from "lucide-react";
import { AccordionCard } from "./AccordionCard";
import { HARD_SELL_NESTED_ITEMS, HARD_SELL_QUIZ_DATA } from "./HARD_SELL_ENHANCED";
import { EXACT_SCRIPTS_NESTED_ITEMS } from "./EXACT_SCRIPTS";
import { FUNNEL_MASTERY_QUIZ_DATA } from "./FUNNEL_MASTERY_QUIZ";
import { RELATIONSHIP_BUILDING_NESTED_ITEMS } from "./RELATIONSHIP_BUILDING";
import { UNIVERSAL_CHALLENGES_NESTED_ITEMS } from "./UNIVERSAL_CHALLENGES";
import { KYC_DEEP_DIVE_NESTED_ITEMS } from "./KYC_DEEP_DIVE";
import { SEXTING_DEEP_DIVE_NESTED_ITEMS } from "./SEXTING_DEEP_DIVE";
import { FLIRTING_DEEP_DIVE_NESTED_ITEMS } from "./FLIRTING_DEEP_DIVE";
import { ImageZoom } from "./ImageZoom";
import hardSellExample1 from 'figma:asset/bff7870dd5836ab61a684d81857821322674fdd9.png';
import hardSellExample2 from 'figma:asset/25b3e29b9ead5674fdf04cdad8159604c15aaf43.png';
import { CardProvider } from "./CardContext";

export function BlankPage() {
  return (
    <CardProvider>
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
        
        <div className="max-w-[1800px] mx-auto relative px-8 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors mb-8"
          >
            <ArrowLeft className="size-4" />
            <span className="text-sm tracking-wider">BACK TO MAIN</span>
          </Link>
          
          {/* Two column layout */}
          <div className="flex gap-12 items-start">
            {/* Left column */}
            <div className="w-96 flex-shrink-0 space-y-8">
              <div className="relative">
                <AccordionCard
                  title="HARD SELL"
                  description="direct intent → controlled conversion"
                  icon={<Flame className="size-6" />}
                  color="linear-gradient(135deg, #2FAE9E 0%, #238E82 100%)"
                  width="100%"
                  brightness={0.75}
                  content={`The Hard Sell is not a lengthy process of persuasion, but a rapid, four-part tactical maneuver the writer executes in an instant to seize control of a sale. It is a single, focused movement designed to convert a client's expressed desire into your structured, high-ticket content purchase.`}
                  nestedItems={[
                    ...HARD_SELL_NESTED_ITEMS,
                    {
                      label: "See what this looks like in practice",
                      content: (
                        <div className="space-y-4">
                          <ImageZoom src={hardSellExample1} alt="Hard sell example part 1" />
                          <ImageZoom src={hardSellExample2} alt="Hard sell example part 2" />
                        </div>
                      )
                    }
                  ]}
                  quiz={HARD_SELL_QUIZ_DATA}
                />
              </div>

              <div className="relative">
                <AccordionCard
                  title="SCRIPTS"
                  description=""
                  icon={<MessageCircle className="size-6" />}
                  color="linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)"
                  width="100%"
                  brightness={0.9}
                  content={`Exact scripts from actual conversations.

From opening lines to the complete Terry conversation with timestamps.`}
                  nestedItems={EXACT_SCRIPTS_NESTED_ITEMS}
                />
              </div>

              <div className="relative">
                <AccordionCard
                  title="FUNNEL MASTERY QUIZ"
                  description="Test your understanding"
                  icon={<Brain className="size-6" />}
                  color="linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
                  width="100%"
                  brightness={0.85}
                  content=""
                  quiz={FUNNEL_MASTERY_QUIZ_DATA}
                />
              </div>
            </div>

            {/* Right column */}
            <div className="w-96 flex-shrink-0 space-y-8">
              <div className="relative">
                <AccordionCard
                  title="RELATIONSHIP BUILDING"
                  description="Long term compounding"
                  icon={<Heart className="size-6" />}
                  color="linear-gradient(135deg, #E91E63 0%, #C2185B 100%)"
                  width="100%"
                  brightness={0.75}
                  content={`Relationship building is the foundation of long term revenue. When clients feel emotionally connected, they spend more, stay longer, and forgive mistakes.

Goal: Move clients through stages S0 to S3 using specific language and emotional positioning at each level.`}
                  nestedItems={RELATIONSHIP_BUILDING_NESTED_ITEMS}
                />
              </div>

              <div className="relative">
                <AccordionCard
                  title="UNIVERSAL CHALLENGES"
                  description="Common obstacles & solutions"
                  icon={<Brain className="size-6" />}
                  color="linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)"
                  width="100%"
                  brightness={0.75}
                  content={`Every writer faces recurring challenges that derail sales and destroy momentum. This section maps the most common obstacles and provides immediate, tested solutions.

Goal: Recognize challenges as they appear and apply the exact framework to overcome them without losing the sale.`}
                  nestedItems={UNIVERSAL_CHALLENGES_NESTED_ITEMS}
                />
              </div>

              <div className="relative">
                <AccordionCard
                  title="KYC DEEP DIVE"
                  description="Know your client"
                  icon={<Users className="size-6" />}
                  color="linear-gradient(135deg, #FF9900 0%, #FF5733 100%)"
                  width="100%"
                  brightness={0.75}
                  content={`Knowing your client is crucial for building trust and personalizing your approach. This section provides deep insights into client behavior, preferences, and pain points.

Goal: Use this knowledge to tailor your sales pitch and build a stronger connection with your clients.`}
                  nestedItems={KYC_DEEP_DIVE_NESTED_ITEMS}
                />
              </div>

              <div className="relative">
                <AccordionCard
                  title="SEXTING DEEP DIVE"
                  description="Escalation to arousal peak"
                  icon={<Sparkles className="size-6" />}
                  color="linear-gradient(135deg, #EC4899 0%, #DB2777 100%)"
                  width="100%"
                  brightness={0.75}
                  content={`The Sexing phase shifts the conversation from subtle tension to explicit fantasy, building arousal to its peak state.

Goal: Make the PPV drop feel like the client's idea, the inevitable next step in the fantasy.`}
                  nestedItems={SEXTING_DEEP_DIVE_NESTED_ITEMS}
                />
              </div>

              <div className="relative">
                <AccordionCard
                  title="FLIRTING DEEP DIVE"
                  description="Building the spark"
                  icon={<Zap className="size-6" />}
                  color="linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
                  width="100%"
                  brightness={0.75}
                  content={`Flirting is the critical second phase that builds anticipation and prevents the conversation from burning out.

Goal: Establish light romantic and sexual tension, making the transition to Sexing feel smooth like butter.`}
                  nestedItems={FLIRTING_DEEP_DIVE_NESTED_ITEMS}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardProvider>
  );
}