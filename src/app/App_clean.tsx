import { AccordionCard } from "./components/AccordionCard";
import { MessageCircle, Eye, Flame, Crown, Gem } from "lucide-react";
import { HARD_SELL_NESTED_ITEMS } from "./components/HARD_SELL_ENHANCED";
import { STEP1_NESTED_ITEMS } from "./components/STEP1_NESTED_ITEMS";
import { STEP4_NESTED_ITEMS } from "./components/STEP4_NESTED_ITEMS";
import { STEP5_NESTED_ITEMS } from "./components/STEP5_ENHANCED";
import { CardProvider, useCardContext } from "./components/CardContext";
import { EditModeProvider } from "./components/EditModeContext";
import { EditModeToggle } from "./components/EditModeToggle";
import { motion } from "motion/react";
import exampleImage1 from 'figma:asset/4085468b323d7cafdf3aeaf67fd2ab967691eae1.png';
import exampleImage2 from 'figma:asset/ee23a2e1b9c0977300558f4224696b52d96fe54a.png';
import kycFramework from 'figma:asset/11678c957b84b0a8b19d8198d1bf8bd11cc0536e.png';
import hardSellExample1 from 'figma:asset/bff7870dd5836ab61a684d81857821322674fdd9.png';
import hardSellExample2 from 'figma:asset/25b3e29b9ead5674fdf04cdad8159604c15aaf43.png';
import { ImageZoom } from "./components/ImageZoom";

function AppContent() {
  const { expandedCard } = useCardContext();
  
  return (
      <div className="min-h-screen bg-black p-8 relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Hard Sell reference card - overlays when open */}
        <div className="absolute left-0 top-20 w-96 z-50">
          <AccordionCard
            title="HARD SELL"
            description="direct intent → controlled conversion"
            icon={<Flame className="size-6" />}
            color="#9CA3AF"
            width="100%"
            content={`The hard sell happens when the fan asks for content. They are already deciding. You are not warming them up anymore. You are guiding what they want and how they buy it.

A proper hard sell has four parts: confidence, redirection, arousal, control.

You shape what they want. You shape how they pay for it.`}
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
          />
        </div>

        {/* Main content area */}
        <div className="max-w-2xl ml-auto mr-0">
          <motion.div 
            className="text-center mb-12"
            animate={{
              filter: expandedCard ? "blur(8px)" : "blur(0px)",
              opacity: expandedCard ? 0.3 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-slate-100 mb-3">HOW TO SELL</h1>
            <p className="text-slate-400">
              A STEP BY STEP GUIDE ON HOW TO RUN UP A CLIENT
            </p>
          </motion.div>

          <div className="space-y-5">
            <AccordionCard
            title="STEP 1: Know Your Client"
            description="everything to know about KYC"
            icon={<MessageCircle className="size-6" />}
            color="#9CA3AF"
            width="65%"
            content={`

KYC lowers defenses. It replaces caution with comfort. This is where real engagement begins.

When fans first arrive, they expect to be rushed or sold to. They have their walls up. Every creator wants something from them. This is what they have learned. Your job is to break that expectation immediately.

You slow down instead of speeding up. You show genuine curiosity instead of pitching content. This signals safety. It signals that this interaction is personal, not transactional. The fan relaxes because nothing is being asked of them yet except to talk about themselves.

Simple questions are your tool here. Where are you from. What brought you here. How did you find me. These feel casual. But they are strategic. They let the fan talk without pressure. People open up when they feel no pressure.

As their guard drops, you will see it in their replies. Messages get longer. Tone becomes natural. They start asking questions back. The conversation flows instead of feeling forced. This is the signal that KYC is working.

Most writers skip this step. They jump straight to flirting or sending PPVs. This kills trust before it forms. The fan feels hunted. They ghost or stay transactional. You lose the ability to build a real connection.

KYC is not filler. It is the foundation. Without it, the fan stays guarded. They pull away the moment escalation happens. They do not unlock PPVs because they do not feel safe yet. They chargeback because they feel sold to, not connected to.

With strong KYC, walls come down. Trust forms. The fan starts to believe this interaction is different. That you actually care. This belief is what allows every next step to feel natural instead of abrupt.

The time you invest here pays off across the entire funnel. Fans who feel known spend more. They stay longer. They forgive mistakes. They become repeat clients instead of one time buyers. KYC is not about delaying sales. It is about making sales possible.


Goal
Create safety, curiosity, and emotional comfort before anything sexual or paid is introduced.`}
            nestedItems={STEP1_NESTED_ITEMS}
            defaultOpen={true}
          />

          <AccordionCard
            title="STEP 2: FIRST PPV OR TEASE"
            description="Low friction lock in phase"
            icon={<Eye className="size-6" />}
            color="#9CA3AF"
            width="80%"
            content={`

This phase matters because the first teaser or low friction PPV is where curiosity turns into arousal and interest turns into commitment, and the goal here isn't to sell big yet but to mentally lock the client in. At this point, the fan is already comfortable from KYC, so this step works by shifting their attention from conversation into visualization, giving them just enough to spark desire without satisfying it. 

A small teaser or low priced PPV conditions spending early, creates momentum, and reframes the dynamic so paying feels natural instead of transactional, because they're not buying content, they're continuing an experience. When done correctly, this step increases emotional and sexual investment at the same time, making the client feel chosen, teased, and slightly unfinished, which is exactly what keeps them engaged. 

This is why the content here should feel intentional and personal, not explicit overload, because the power of this phase comes from restraint and timing, allowing anticipation to build while anchoring arousal to you specifically. 

Once this lock in happens, higher priced PPVs no longer feel like a decision based on price, but a continuation of something they're already mentally inside of, which is what turns curiosity into compliance and casual fans into buyers who want more.




GOAL
            
Low friction first unlock or tease. Condition spending and curiosity.`}
            nestedItems={[
              {
                label: "See examples",
                content: (
                  <div className="space-y-4">
                    <ImageZoom src={exampleImage1} alt="First PPV example 1" />
                    <ImageZoom src={exampleImage2} alt="First PPV example 2" />
                  </div>
                )
              }
            ]}
          />

          <AccordionCard
            title="STEP 3: SECOND PPV ($35)"
            description="Increase intimacy and sexual control"
            icon={<Flame className="size-6" />}
            color="#9CA3AF"
            width="55%"
            content={`

The second PPV is where the dynamic truly shifts. They have already paid once. That first payment was the hardest barrier to cross. Now the question is not whether they will spend. The question is whether they feel special enough to keep spending.

This is where you move from proving value to creating exclusivity. The first PPV showed them you deliver. The second PPV shows them this connection is different. It is not generic. It is personal. It is happening because of who they are and how they responded.

The language here changes. You stop asking for permission. You stop explaining why content costs money. Instead, you frame the offer as spontaneous. Unplanned. Earned through their behavior. This makes the price feel justified without you having to justify it.

Exclusivity framing is the core tool at this stage. You use phrases like "I wasn't planning to share this yet" or "You're the first person I've wanted to do this with." Even if you say this to multiple clients, each one believes the moment is rare. This belief creates perceived scarcity. Scarcity increases willingness to pay.

Sexual control also deepens here. You introduce edging language. You ask consent in ways that make them complicit. You confess desire in ways that make them feel like they are affecting you emotionally. This is not just content anymore. This is a shared fantasy where they feel like an active participant.

The price increase from $15 to $35 is strategic. It is large enough to signal premium value. But not so large that it breaks momentum. You earned trust with the first unlock. The second unlock tests whether that trust is durable. Most fans who unlock twice will unlock again. That is why this step matters so much.

If the first PPV was about curiosity, the second PPV is about identity. They are no longer testing whether you deliver. They are testing whether they see themselves as the kind of person who spends on you. This is emotional anchoring. You are building a self concept inside them where spending on you feels consistent with who they are.

Your role here is to validate their decision to spend. Acknowledge their choice. Make them feel seen. Show that this moment exists because of them. This reinforces the behavior and increases the likelihood of future spending.

GOAL

Create exclusivity, intimacy, and emotional investment while doubling the price comfortably.`}
            nestedItems={[
              {
                label: "See framework",
                content: (
                  <div>
                    <ImageZoom src={kycFramework} alt="KYC Framework" />
                  </div>
                )
              }
            ]}
          />

          <AccordionCard
            title="STEP 4: THIRD PPV ($55)"
            description="Premium immersion and penetration play"
            icon={<Crown className="size-6" />}
            color="#9CA3AF"
            width="50%"
            content={`

This is where you move from intimacy to immersion. The fan has unlocked twice already. They have spent close to $50 on you. They are not casual anymore. They are invested.

At this stage, they are not buying content. They are buying the feeling that this moment exists for them. That you are responding to them specifically. That what they unlock is not something everyone gets. This is high tier psychological framing.

The content itself should escalate visibly. Penetration. Explicit toys. Language that acknowledges intensity. But the content alone is not what justifies the price. What justifies the price is how you position it. You do not ask permission anymore. You do not pitch features. You lead with confidence. You tell them what is about to happen. You make them feel like they have earned access to something rare.

Control language becomes critical here. You introduce commands. You ask them to imagine themselves in the scene. You use second person framing so the fantasy becomes participatory instead of observational. This shifts their role from viewer to participant. That shift is what makes premium prices feel worth it.

Timing matters too. You do not rush to this offer. You let the previous unlock sit. You rebuild arousal. You ask questions that prime visualization. You plant the idea that something bigger is coming before you reveal what it is. This creates mental readiness. When the offer finally arrives, it feels earned instead of pushy.

Not every fan will reach this tier. That is intentional. The ones who do are your high value clients. These are the fans worth nurturing for long term relationships. This step is not just about revenue. It is about identifying who is serious.

GOAL

Escalate content intensity while framing the experience as rare, personal, and participant driven.`}
            nestedItems={STEP4_NESTED_ITEMS}
          />

          <AccordionCard
            title="STEP 5: FOURTH PPV ($115)"
            description="Exclusive access to unseen content"
            icon={<Gem className="size-6" />}
            color="#9CA3AF"
            width="60%"
            content={`

This is the top of the funnel. Not everyone reaches this point. That is intentional.

The fans who arrive here have already spent close to $100. They have unlocked three separate PPVs. They have stayed engaged through escalation. They are not casual buyers anymore. They are invested clients.

By now, they are not paying for content. They are paying for access, attention, and the feeling that this moment exists because of them specifically. The content itself is secondary. What they want is the belief that you see them differently than everyone else.

This is where most creators fail. They push harder. They talk faster. They oversell because the price is high. This breaks the frame completely. The fan realizes they were being guided through a funnel, not building a real connection. Trust collapses. They ghost or chargeback.

Your job at this tier is to slow everything down. You hold the frame. You make the offer feel earned, not sold. You acknowledge how far they have come with you. You position this tier as rare access that most people never see. You remove the transactional feeling by focusing on intimacy and exclusivity instead of features and price.

If Step 4 was about tension, Step 5 is about meaning. The fan needs to feel like this moment matters. Like they are crossing a threshold that marks them as different. Like you are choosing to share this with them because of who they are, not what they paid.

The language here must feel slower, softer, and more vulnerable. You are not chasing the sale. You are inviting them into something that feels sacred. This reframe is what justifies the premium price without you having to justify it.

Not everyone will unlock the fourth PPV. That is the point. The ones who do are your highest value clients. These are the fans worth nurturing for custom content, ongoing subscriptions, and long term relationships. This tier is not just about monetization. It is about identifying who is ready to stay.

GOAL

Create a sense of rarity, intimacy, and emotional significance that makes premium pricing feel natural.`}
            nestedItems={STEP5_NESTED_ITEMS}
          />

          <AccordionCard
            title="RETENTION"
            description="Keeping them coming back"
            icon={<RefreshCw className="size-6" />}
            color="#9CA3AF"
            width="45%"
            content={`

Retention is not about sending more content. It is about creating patterns that make the fan believe staying is worth it.

Most creators focus only on acquisition. They run up a client once and move on. This is inefficient. The highest value is not in the first unlock. It is in the second month. The third month. The client who renews and spends again.

Retention happens when the fan believes three things. First, that you remember them. Second, that future interactions will feel as good as past ones. Third, that leaving means losing access to something they cannot get elsewhere.

To create these beliefs, you do not need to message them every day. You need to create moments where they feel seen. A callback to something they shared during KYC. A message that references their preferences. A piece of content that feels like it was made with them in mind. These moments build loyalty.

You also need to avoid patterns that signal you only care when they spend. If you only reach out when you have a new PPV, they will notice. Retention requires balance. Sometimes you message just to check in. Sometimes you share something personal. Sometimes you tease future content without asking for payment yet.

The goal is to make them feel like they are part of something ongoing instead of a one time transaction. This is what turns buyers into subscribers. Subscribers into long term clients. Long term clients into repeat spenders who bring consistent revenue.

GOAL

Build loyalty and long term value by creating patterns that make staying feel rewarding.`}
          />
          </div>
        </div>
      </div>
      </div>
  );
}

export default function App() {
  const initialData = {
    // Your card data will go here - for now it's managed by the components
  };

  return (
    <EditModeProvider initialData={initialData}>
      <CardProvider>
        <EditModeToggle />
        <AppContent />
      </CardProvider>
    </EditModeProvider>
  );
}