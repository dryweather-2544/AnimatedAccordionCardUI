import React, { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import watermarkImage from "figma:asset/56a1d58f4d7ee6f9fd72ce8b2bcf220a7b61a340.png";
import { MindMap } from "./MindMap";

// Helper component to render HTML content safely
function HtmlContent({ html, className = "" }: { html: string; className?: string }) {
  return (
    <span 
      className={className}
      dangerouslySetInnerHTML={{ __html: html }} 
    />
  );
}

interface MindMapNode {
  id: string;
  title: string;
  x: number;
  y: number;
  color?: string;
  icon?: string;
  children?: MindMapNode[];
}

interface ModuleData {
  title: string;
  skillType: string;
  accentColor: string;
  overview: {
    description: string;
    goal: string;
  };
  overviewImage?: string;
  mindMap?: MindMapNode;
  leftColumn: {
    subtitle: string;
    sections: Array<{
      title: string;
      whyItWorks?: string[];
      steps: Array<{
        title: string;
        description: string;
        example?: string;
        tip?: string;
        fullExample?: string;
      }>;
    }>;
  };
  rightColumn: {
    sections: Array<{
      title: string;
      description: string;
      example?: string;
      note?: string;
    }>;
    bestPractices: Array<{
      title: string;
      description: string;
    }>;
  };
  recap: string[];
}

interface TrainingDashboardProps {
  modules: Record<string, ModuleData>;
  activeModule: string;
  setActiveModule: (module: string | null) => void;
}

export function TrainingDashboard({
  modules,
  activeModule,
  setActiveModule,
}: TrainingDashboardProps) {
  const currentModule = modules[activeModule];
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  
  if (!currentModule) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
          <p className="text-slate-400">The requested training module "{activeModule}" does not exist.</p>
        </div>
      </div>
    );
  }

  const { title, skillType, accentColor, leftColumn, rightColumn, recap } = currentModule;

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setImageZoom((prev) => Math.max(0.5, Math.min(3, prev + delta)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - imagePosition.x,
      y: e.clientY - imagePosition.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setImagePosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetImageView = () => {
    setImageZoom(1);
    setImagePosition({ x: 0, y: 0 });
  };

  // Handle mind map node clicks
  const handleNodeClick = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    setSidePanelOpen(true);
  };

  // Get detailed content for a node
  const getNodeDetails = (nodeId: string) => {
    if (!currentModule.leftColumn) return null;
    
    // Map node IDs to actual content from leftColumn.sections
    const allSteps: Array<any> = [];
    currentModule.leftColumn.sections.forEach(section => {
      section.steps.forEach((step, index) => {
        allSteps.push({
          ...step,
          sectionTitle: section.title,
          stepIndex: index
        });
      });
    });

    // For transition examples module, map specific node IDs to steps
    if (activeModule === 'transitionExamples') {
      // Mapping for sexting transitions
      if (nodeId === 'sexting-1') return allSteps[0]; // Netflix
      if (nodeId === 'sexting-2') return allSteps[1]; // Sleeping In
      if (nodeId === 'sexting-3') return allSteps[2]; // Night Out
      
      // Mapping for best practices
      if (nodeId === 'bp-1') return { title: "Wait 5-10 Minutes Before Transitioning", description: "Build rapport first. Fans need to feel comfortable before you shift to sales mode. Too early and you seem transactional. Wait for engagement signals: quick replies, emojis, questions back to you.", tip: "Watch for engagement signals to find the sweet spot." };
      if (nodeId === 'bp-2') return { title: "Provide Context for Questions", description: "Add reasons or backstory before pivoting. 'I was supposed to pick up a friend but slept in' feels real. 'How would you wake me up?' without context feels forced. Context disarms their guard and makes the pivot feel like natural conversation flow.", example: "Always add a personal story or situation before asking the transition question." };
      if (nodeId === 'bp-3') return { title: "Use Humor to Reduce Pressure", description: "Light, playful language makes transitions feel natural, not forced. A well-placed emoji lowers their guard. Use jokes and casual banter to create a relaxed atmosphere where sales feel organic.", example: "Try: 'I'm the worst at picking shows 😅 If you were here, what would we watch?'" };
      
      // Mapping for PPV transitions
      if (nodeId === 'ppv-1') return allSteps[10]; // Deleted Video
      if (nodeId === 'ppv-2') return allSteps[11]; // Sore Transition
      if (nodeId === 'ppv-3') return allSteps[12]; // Showering Hint
      
      // Mapping for submissive transitions
      if (nodeId === 'sub-1') return allSteps[7]; // TV Transition (Submissive)
      if (nodeId === 'sub-2') return allSteps[8]; // Shower Transition (Submissive)
      if (nodeId === 'sub-3') return allSteps[9]; // Watch Me Transition
      
      // Mapping for resources
      if (nodeId === 'res-1') return { title: "Documented Script Library", description: "Create a personal library of transitions that work for your audience. Test different approaches and document which ones get the best responses. Organize by subscriber type (casual, submissive, kink-focused) for quick reference.", tip: "Keep a swipe file of your highest-converting transitions." };
      if (nodeId === 'res-2') return { title: "Follow-up Sexting Techniques", description: "After a successful transition, maintain momentum with escalating messages. Each message should be slightly hotter than the last. Use open-ended questions to transfer control and make them an active participant in the fantasy.", example: "Build from suggestions to descriptions to explicit actions, then make the offer." };
    }

    // Mapping for KYC module
    if (activeModule === 'kyc') {
      if (nodeId === 'basic-info') return allSteps[0];
      if (nodeId === 'kinks') return allSteps[1];
      if (nodeId === 'mirroring') return allSteps[2];
      if (nodeId === 'urgency') return allSteps[3];
      if (nodeId === 'high-ticket') return allSteps[4];
      if (nodeId === 'qualify') return allSteps[5];
      if (nodeId === 'rapport') return { title: "Building Natural Rapport", description: "When you ask about their basic info, you're building natural rapport and finding non-sexual topics to talk about.", example: "The more personal they get, the more invested they are.", tip: "Personal investment = Emotional investment = Higher willingness to spend" };
      if (nodeId === 'ammunition') return { title: "Gathering Ammunition", description: "When you ask about their kinks and fetishes, you're getting ammunition for later.", example: "You can create a 'special video just for him' about his favorite kink.", tip: "This makes the sale feel personalized and exclusive, not generic." };
      if (nodeId === 'connection-type') return { title: "Emotional vs Transactional", description: "When you mirror their conversation style, you're figuring out if they're seeking an emotional connection or just a quick transaction.", example: "Long, chatty replies = Emotional connection seeker (high-ticket potential)<br>Short, sexual replies = Quick transaction seeker (lower-ticket, but faster)", tip: "You match their energy so you don't scare them off. If they're conversational, don't rush to explicit content." };
      if (nodeId === 'never-skip') return { title: "Never Skip KYC", description: "Even if you're busy, take 5-10 minutes for KYC. It's the foundation for everything that comes after.", tip: "A 5-10 minute investment pays back in big sales later." };
      if (nodeId === 'natural') return { title: "Make It Feel Natural", description: "Don't interrogate them. Weave questions into a flowing conversation. Show genuine interest.", example: "Share your own details first when you ask. This opens them up on a psychological level." };
      if (nodeId === 'test-15') return { title: "Use the $15 Test", description: "Don't spend an hour on someone before you know if they'll spend. The $15 test qualifies them quickly.", tip: "If they don't unlock the $15 test, you haven't lost much time and can move on to the next fan." };
    }

    // Mapping for transitions module
    if (activeModule === 'transitions') {
      if (nodeId === 'pacing') return allSteps[0];
      if (nodeId === 'bridge') return allSteps[1];
      if (nodeId === 'acknowledge') return allSteps[2];
      if (nodeId === 'escalate') return allSteps[3];
      if (nodeId === 'hook') return allSteps[4];
      if (nodeId === 'perfect-ask') return allSteps[5];
      if (nodeId === 'match-content') return allSteps[6];
      if (nodeId === 'illusion') return allSteps[7];
      if (nodeId === 'frame-exclusive') return { title: "Frame as Exclusive", description: "Make the transition feel like a special moment that only this subscriber is experiencing.", example: "The subscriber should feel like they're getting access to something rare and personal." };
      if (nodeId === 'avoid-jarring') return { title: "Avoid Jarring Shifts", description: "Jumping too quickly from casual conversation to explicit sexual content creates a jarring experience. The fan feels like you're following a script instead of having a genuine interaction.", tip: "The result: They disengage. The arousal drops. The sale becomes harder or impossible." };
      if (nodeId === 'build-momentum') return { title: "Build Natural Momentum", description: "Every transition should feel like a natural progression in the conversation. Use bridges, acknowledge their input, and escalate gradually so the shift feels organic.", example: "The fan shouldn't realize they're being sold to until they're already mentally invested in buying." };
    }

    // Mapping for transitionTypes module
    if (activeModule === 'transitionTypes') {
      // Sexting scripts
      if (nodeId === 'netflix') return allSteps[0];
      if (nodeId === 'sleeping') return allSteps[1];
      if (nodeId === 'night-out') return allSteps[2];
      if (nodeId === 'workout') return allSteps[3];
      if (nodeId === 'shower') return allSteps[4];
      // PPV scripts
      if (nodeId === 'deleted') return allSteps[10];
      if (nodeId === 'sore') return allSteps[11];
      if (nodeId === 'shower-hint') return allSteps[12];
      if (nodeId === 'outfit') return allSteps[13];
      if (nodeId === 'voice') return allSteps[14];
      // Submissive scripts
      if (nodeId === 'tv-dom') return allSteps[7];
      if (nodeId === 'shower-dom') return allSteps[8];
      if (nodeId === 'watch') return allSteps[9];
    }

    // Mapping for price resistance module
    if (activeModule === 'priceResistance') {
      if (nodeId === 'save-it') return allSteps[0];
      if (nodeId === 'price-bonus') return allSteps[1];
      if (nodeId === 'kill-exclusivity') return allSteps[2];
      if (nodeId === 'condition-wait') return allSteps[3];
      if (nodeId === 'he-controls') return allSteps[4];
      if (nodeId === 'loss-aversion') return { title: "Loss Aversion Power", description: "When you remove the offer, you're creating loss aversion. The fan's brain switches from 'Should I buy this?' to 'Wait, did I just lose my chance?'", example: "Before: 'Maybe I'll buy it later.'<br>After: 'I should have gotten it when I had the chance.'", tip: "Loss aversion is more powerful than gain motivation. People fear missing out more than they desire acquiring something." };
      if (nodeId === 'reframe') return { title: "Reframe as Favor Not Discount", description: "You're not just lowering the price. You're reframing the transaction as a favor and adding extra value that justifies the new price point.", example: "He's not thinking: 'She lowered the price because it wasn't worth $55.'<br>He's thinking: 'She likes me enough to throw in extra content. This is a great deal.'", tip: "The bonus changes the entire frame. It's not a discount; it's an upgrade with a small price adjustment." };
      if (nodeId === 'long-term') return { title: "Long-Term Revenue Protection", description: "Every immediate discount teaches the fan that your prices are soft. Once he learns this pattern, he'll never pay full price again.", example: "First time: $55 → You drop to $45<br>Second time: $55 → He waits → You drop to $45<br>Third time: $55 → He ignores → Expects $40", tip: "You've trained him to negotiate every single offer. Your shift becomes slower and less profitable." };
    }

    // Mapping for exclusivity module
    if (activeModule === 'exclusivity') {
      if (nodeId === 'value-perception') return { title: "Value Perception", description: "Frame content as 'exclusive' or 'limited time' to increase perceived value far beyond the actual price.", example: "When you use words like 'cant believe i did this .. i almost didn't sent it 😳 keep this between us' you are selling a status. The status of being one of the few who gets to see it.", tip: "This scarcity elevates a simple photo or video into a rare moment, justifying a higher price point." };
      if (nodeId === 'fomo-tactic') return { title: "FOMO (Fear of Missing Out)", description: "Make the fan feel special, which increases value due to the fear of missing out on a rare moment.", example: "This directly taps into the fan's desire for connection. By making the opportunity a 'rare moment,' you are implying that the experience, and thus their closeness to you, is fleeting.", tip: "The anxiety of missing a unique interaction or piece of content motivates immediate action and purchase." };
      if (nodeId === 'seeding') return { title: "Subtle Seeding/Hints", description: "Hint in casual chat that you are doing something. Build anticipation before flirting starts.", example: "\"Just got out of the gym... I'm so sweaty and need to jump in the shower soon. How's your day going? 🤭💕\"", tip: "Plant seeds 10-15 minutes before you intend to pitch. This primes their mind without pressure." };
      if (nodeId === 'urgency-tactics') return { title: "Urgency Forces Action", description: "Pitch the sale by explaining why the opportunity is special right now. Add a bonus to sweeten the deal.", example: "\"fuckk baby, i'm just thinking of all the ways you could explore me.. and hmmm you know.. i'd love to make you a lil surprise showing how your wet i got with you.. wait here and let me show you how i want you to slide it in and spank me okay? 🥹🩷 if you get this NOW ? Ive got 3 surprises waiting for you\"", tip: "Urgency forces action. A limited-time offer combats indecision. The bonus creates fear of missing extra value, not just the core content." };
      if (nodeId === 'keep-momentum') return { title: "Keep Momentum Up", description: "The excitement must always be going up, never let the energy drop. Quick, engaging replies avoid momentum breaks.", tip: "Every message must increase sexual tension. Never let it drop." };
      if (nodeId === 'gradual-escalation') return { title: "Gradual Escalation", description: "Every message must be hotter than the last. Start with suggestions, move to descriptions, then explicit actions.", example: "Example progression: 1. \"Just thinking about you...\" 2. \"Wondering what you'd do if you were here...\" 3. \"Tell me... what are you really craving right now?\" 4. \"I'm getting so turned on talking to you...\" 5. \"Do you want me bent over or on top?\"", tip: "Starting too explicit leaves you nowhere to go. Map out a 5-level escalation path before starting." };
      if (nodeId === 'content-matching') return { title: "Match Content to Fantasy", description: "The fantasy you are talking about in the sexting must match the intensity and the content you are trying to sell.", example: "The conversation should be a narrative preview for the purchased content. If you are selling a \"shower video,\" your sexting should involve getting hot and steamy and deciding to jump in the shower.", tip: "This makes the final sale a logical necessity for the fan to complete the fantasy you've collaboratively built." };
      if (nodeId === 'open-ended') return { title: "Open-Ended Questions", description: "Transfer control to the fan, making them an active participant rather than a passive reader.", example: "Examples:<br>\"What do you want me to do to you right now?\"<br>\"Tell me... what's been on your mind today?\"<br>\"What are you really craving right now?\"", tip: "Open-ended questions make fans feel they are directing the experience, increasing emotional investment." };
      if (nodeId === 'multiple-choice') return { title: "Multiple Choice Questions", description: "Give the illusion of choice while guiding the entire experience. Both options assume content will be made, eliminating \"no\" as an option.", example: "\"you've impressed me so much.. i'll let you pick how i fuck myself next.. wanna see me ride it in doggy or missionary, baby? 😈\"", tip: "Prepare 3-5 multiple choice options for common sales scenarios. This keeps momentum high." };
      if (nodeId === 'timing') return { title: "Timing is Everything", description: "Pitch at peak arousal for maximum conversion. When decision-making is emotional, not logical, you close the deal.", tip: "Watch for engagement signals and strike when they're most invested." };
      if (nodeId === 'know-selling') return { title: "Always Know What You're Selling", description: "Before starting sexting, have the content ready. The conversation should preview the purchased content.", tip: "Don't start building a fantasy without knowing how you'll complete it with a sale." };
      if (nodeId === 'confident-language') return { title: "Eliminate Uncertain Language", description: "Use declarative statements about value. No \"maybe\" or \"if you want.\" Confidence is key.", example: "Confident language validates the purchase as an emotional, personal experience rather than a mere transaction.", tip: "It reinforces this is curated specifically for them." };
    }

    // Mapping for objection handling module
    if (activeModule === 'objectionHandling') {
      // Four Fatal Mistakes
      if (nodeId === 'tone-change') return { 
        title: "Tone Changes (The Biggest Killer)", 
        description: "Before asking for money, you're friendly, engaging, using emojis, replying quickly. The moment they hesitate? Your tone goes cold, indifferent, or passive-aggressive. This signals to the subscriber that their only value to you is money. You've just burned a bridge that could have been worth thousands.", 
        example: "❌ Before: \"heyy babe! 😊 how was your day? tell me everything!\"<br>✅ After rejection: \"ok\"", 
        tip: "Your tone must stay exactly the same before and after they decline. If they feel like the relationship only existed to extract money, they'll never spend big with you." 
      };
      if (nodeId === 'begging') return { 
        title: "Desperation and Begging", 
        description: "Excessive enthusiasm or begging for a sale backfires completely. People want what they can't have. When you beg, you hand all the power to the subscriber and make your content feel worthless.", 
        example: "❌ \"Please please please get this! I worked so hard on it! I really need this sale!\"<br>✅ \"No worries at all! I totally get it 😊\"", 
        tip: "Scarcity increases desire. Abundance kills it. Never beg." 
      };
      if (nodeId === 'guilt') return { 
        title: "Guilt Tripping", 
        description: "Using guilt or negativity to push sales might work once, but it alienates subscribers permanently. Lines like 'So you don't think I'm worth it?' or 'I thought you actually liked me' make them feel manipulated and used.", 
        example: "❌ \"wow... i guess you don't really care about me 😔\"<br>✅ \"All good babe! Maybe another time 💕\"", 
        tip: "Short-term guilt sales destroy long-term revenue. You want subscribers who spend because they want to, not because they feel bad." 
      };
      if (nodeId === 'price-dump') return { 
        title: "Price Dumping", 
        description: "Dropping from $80 to $50 to $30 in rapid succession tells the subscriber your prices are fake and negotiable. You've just trained them to always push for discounts and never respect your pricing.", 
        example: "❌ \"$80! no wait $50! okay fine $30!\"<br>✅ \"The price is $55, but I could add a little bonus if that helps 😊\"", 
        tip: "Every time you price dump, you're teaching subscribers to wait you out. Protect your pricing authority like your income depends on it - because it does." 
      };

      // Pre-Qualification
      if (nodeId === 'availability') return { 
        title: "Test Availability Without Being Obvious", 
        description: "Don't ask 'What are you up to?' like every other chatter. Use softer alternatives that test availability while feeling natural.", 
        example: "✅ \"What are your plans for the evening?\"<br>✅ \"Do you have 20 minutes for me to vent about something?\"<br>✅ \"Are you free right now or are you busy?\"", 
        tip: "These questions accomplish the same goal but don't trigger the 'here comes a sales pitch' alarm." 
      };
      if (nodeId === 'match-content') return { 
        title: "Match Content to Their Situation", 
        description: "If Barry has 5 minutes left on his lunch break, don't try to sell a 30-minute texting script. Sell a quick photo set he can unlock and enjoy immediately. If James is home in bed with time, that's when you pitch the texting session.", 
        example: "Quick lunch break = Photo set or short video<br>Home alone for hours = Texting session or long video<br>At work secretly = Something they can save for later", 
        tip: "Content that fits their context converts 3x better than random offers." 
      };
      if (nodeId === 'history') return { 
        title: "Check Their Purchase History", 
        description: "Use tools like Inflow to quickly see what they've bought before, how they buy (tips vs. unlocking PPVs), and any notes about upcoming purchases. This tells you what to offer and how to frame it.", 
        example: "Bought videos before? Offer a video.<br>Tips frequently? Ask for a tip for 'something special.'<br>Never bought? Start with a low $15 test.", 
        tip: "Stop guessing. Let their history tell you what they want." 
      };
      if (nodeId === 'temperature') return { 
        title: "Confirm Their Temperature", 
        description: "Don't send explicit PPVs to someone who's not warmed up. You need to confirm they're horny enough before you pitch sexual content. Build heat first through flirty conversation, then strike when they're ready.", 
        example: "❌ Sending a dildo video out of nowhere to someone watching TV<br>✅ Flirting, escalating tension, then offering the content when they're engaged", 
        tip: "Random PPVs have a 5% unlock rate. Warmed-up PPVs have a 40%+ unlock rate. Do the math." 
      };

      // Strategic Follow-Up
      if (nodeId === 'track-ppv') return { 
        title: "Don't Ghost Your Own PPVs", 
        description: "Pin the chat. Open it in a new tab. Set a reminder. Do something to track whether they've seen it and how they reacted. Most chatters lose sales simply because they forget to follow up.", 
        example: "Use your CRM or OnlyFans interface to mark chats with pending PPVs so you can circle back.", 
        tip: "You sent the PPV. Now manage it like the asset it is." 
      };
      if (nodeId === 'ignored-ppv') return { 
        title: "When They Ignore the PPV and Keep Chatting", 
        description: "They replied to your message but completely ignored the PPV. Don't beg. Don't change your tone. Stay unfazed and keep chatting. After two replies, casually reference the PPV with low-pressure humor or curiosity.", 
        example: "✅ \"haha are you going to get this one or should we stop the fun for tonight? 😊\"<br>✅ \"omg I can't believe that's just sitting in the chat... it makes me nervous 😅\"", 
        tip: "Humor and light nervousness spark curiosity without applying pressure. You're uncovering the objection, not forcing the sale." 
      };
      if (nodeId === 'on-read') return { 
        title: "When They Leave It on Read", 
        description: "They've seen the PPV (blue ticks confirm it), but no response. Wait 3 minutes, then send a simple message with their name and a question mark. That's it. Don't write a paragraph. Don't guilt trip.", 
        example: "✅ \"James?\"<br>✅ \"everything okay babe? 😊\"", 
        tip: "This prompts a reply without seeming desperate. Once they respond, you can gently ask what's up." 
      };
      if (nodeId === 'timed-message') return { 
        title: "Send a Timed Message to Re-Engage", 
        description: "If they've ghosted the PPV entirely (no read, no response), wait 10-15 minutes, then send a casual, open-ended question that shifts the conversation away from the sale. This ropes them back in without making it about money.", 
        example: "✅ \"so tell me... what's your ideal way to spend a Friday night? 🤭\"<br>✅ \"random question: if you could travel anywhere right now, where would you go?\"<br>✅ \"okay real talk... what's something you've been craving lately? 😏\"", 
        tip: "Open-ended questions restart the conversation on neutral ground. Once they're re-engaged, you can rebuild momentum and circle back to the PPV naturally." 
      };

      // Value Objections
      if (nodeId === 'big-deal') return { 
        title: "Make It a Big Deal", 
        description: "Use language that emphasizes exclusivity and generosity. Make it feel like they're getting access to something rare and special.", 
        example: "✅ \"Okay... just this once because I'm in such a good mood 😊\"<br>✅ \"If you watch this entire video without finishing, I'll send you something extra for free\"<br>✅ \"Hm... I don't know... this one is really personal\"", 
        tip: "Exclusivity inflates perceived value. Make them feel like this is a rare opportunity." 
      };
      if (nodeId === 'add-value') return { 
        title: "Add Value, Don't Cut Price", 
        description: "Before you discount, offer bonuses. Add a dick rating, a texting session, voice notes, or a second video. This increases perceived value without damaging your pricing authority.", 
        example: "✅ \"What if I threw in a 10-minute texting session afterward?\"<br>✅ \"Okay, if you get it, I'll rate your dick too 😏\"", 
        tip: "Don't make bonuses common. They should feel like rare favors, not standard practice." 
      };
      if (nodeId === 'fomo') return { 
        title: "Use FOMO and Reverse Psychology", 
        description: "Act nervous or embarrassed about the content. Hint that it's risky or intimate. Make them curious about what you're so worried about sharing.", 
        example: "✅ \"I'm so nervous you'll judge me for this...\"<br>✅ \"This was all your fault, I might regret sending it\"<br>✅ \"Okay I'm deleting this in 10 minutes, it's too much\"", 
        tip: "Curiosity is one of the strongest purchasing triggers. Use it." 
      };
      if (nodeId === 'discount-last') return { 
        title: "Discounting (Last Resort Only)", 
        description: "If you absolutely must discount, do it slowly and deliberately. Drop no more than 20% at a time. Remove extras instead of cutting price. Never discount more than twice.", 
        example: "✅ First: \"Okay, $55 down to $45, but that's it babe\"<br>✅ Second: \"Fine, $40, but I'm removing the bonus\"", 
        tip: "Every discount trains subscribers to expect future discounts. Protect your pricing like your business depends on it." 
      };

      // Content Fit Objections
      if (nodeId === 'divert-texting') return { 
        title: "Divert with Texting", 
        description: "Don't answer their question about specific content. Instead, pivot to a related 'what if' scenario that fits the actual content and gets them excited about it.", 
        example: "❌ \"Does the video have X in it?\" → \"No, sorry\"<br>✅ \"Does the video have X in it?\" → \"omg what if I did X while thinking about you... would you like that? 😏\" (then loop back: \"That's exactly what I was thinking about while filming this\")", 
        tip: "You're redirecting their imagination to what you have, not what they think they want." 
      };
      if (nodeId === 'bundle') return { 
        title: "Bundle Upsell", 
        description: "If they flat-out refuse the content, offer a bundle deal where buying the original unlocks a discount on the content they actually want. Make it a game.", 
        example: "✅ \"Okay, how about this: Get this one for $30, and I'll unlock the other one for $20 instead of $50. Deal?\"", 
        tip: "Bundles increase total spend while making them feel like they're winning." 
      };
      if (nodeId === 'voice-notes') return { 
        title: "Use Voice Notes to Stimulate Imagination", 
        description: "Send voice notes that describe what's happening in the content or how you're feeling. Your voice adds intimacy and makes the content feel more personal and exclusive.", 
        example: "✅ \"I just recorded this for you... listening to my breathing in this one makes me blush 😳\"", 
        tip: "Voice notes bridge the gap between text and real intimacy. They prove authenticity and build emotional connection." 
      };

      // Trust Objections
      if (nodeId === 'humor') return { 
        title: "Respond with Humor", 
        description: "Light-hearted jokes defuse tension and make you seem human without being defensive.", 
        example: "✅ \"lol guess I'm ChatGPT on funny mode 😂\"<br>✅ \"Yeah it's so spammy here, I totally get it\"<br>✅ \"If I was a bot, I'd be way better at spelling 😅\"", 
        tip: "Humor signals authenticity. Defensiveness signals guilt." 
      };
      if (nodeId === 'voice-proof') return { 
        title: "Voice Notes for Credibility", 
        description: "Have the creator send voice notes that respond naturally to something the subscriber said. This is the fastest way to build credibility.", 
        example: "✅ Send a 5-second voice note laughing at something they said or mentioning their name", 
        tip: "If you don't have access to real voice notes, high-quality AI voice can work too - just make it natural." 
      };
      if (nodeId === 'shift-topic') return { 
        title: "Shift Conversation Away from Verification", 
        description: "After addressing the trust concern once with humor or a voice note, immediately shift the conversation back to building connection and arousal. Don't dwell on proving yourself.", 
        example: "✅ After sending voice note: \"Anyway, back to what we were talking about... you never answered my question 😏\"", 
        tip: "Dwelling on verification makes you seem more suspicious. Prove it once, then move on confidently." 
      };
    }
    
    return null;
  };

  const selectedNodeDetails = selectedNodeId ? getNodeDetails(selectedNodeId) : null;

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(to bottom right, #1a1f2e, #0f1419)",
      }}
    >
      {/* Subtle background grain */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.5\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Watermark Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${watermarkImage})`,
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
          backgroundPosition: "center",
          opacity: 0.6,
          filter: "brightness(1.2) contrast(1.4)",
          transform: "rotate(-45deg)",
          transformOrigin: "center center",
          width: "300%",
          height: "300%",
          left: "-100%",
          top: "-100%",
        }}
      />

      {/* Very faint layer between watermark and content */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: "rgba(10, 14, 26, 0.15)",
          backdropFilter: "blur(0.5px)",
        }}
      />

      {/* Header */}
      <div 
        className="sticky top-0 z-50 border-b px-8 py-4"
        style={{
          background: "rgba(10, 14, 26, 0.95)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveModule(null)}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-sm"
            >
              <ArrowLeft className="size-4" />
              <span className="tracking-wide">ALL MODULES</span>
            </button>
          </div>
          <div className="text-center">
            <h1 
              className="font-bold text-2xl" 
              style={{ 
                color: "#ffffff",
                textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4), 0 2px 8px rgba(0, 0, 0, 0.9)"
              }}
            >
              {title}
            </h1>
            <p className="text-xs text-slate-400">{skillType}</p>
          </div>
          <div className="w-[240px]"></div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-2 min-h-[calc(100vh-80px)]">
          {/* LEFT COLUMN - Dark Background */}
          <div 
            className="p-12 overflow-y-auto relative z-10"
            style={{
              background: "rgba(30, 41, 59, 0.15)",
              borderRight: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div className="space-y-8 max-w-2xl">
              {/* Overview Section */}
              {currentModule.overview && (
                <div className="mb-8 pb-8 border-b border-slate-700">
                  <div className="prose prose-invert max-w-none">
                    <HtmlContent html={currentModule.overview.description} />
                  </div>
                  
                  {currentModule.overview.goal && (
                    <div 
                      className="mt-6 p-6 rounded-lg border-2"
                      style={{ 
                        background: "rgba(139, 92, 246, 0.1)",
                        borderColor: accentColor 
                      }}
                    >
                      <p className="font-bold text-purple-400 text-sm mb-3 uppercase tracking-wider">
                        Training Goal
                      </p>
                      <p className="text-slate-200 text-base leading-relaxed">
                        <HtmlContent html={currentModule.overview.goal} />
                      </p>
                    </div>
                  )}

                  {/* Mind Map - if available */}
                  {currentModule.mindMap && (
                    <div className="mt-6">
                      <p className="font-bold text-purple-400 text-sm mb-3 uppercase tracking-wider">
                        Visual Overview
                      </p>
                      <MindMap 
                        data={currentModule.mindMap} 
                        className="h-[500px]" 
                        onNodeClick={handleNodeClick}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Main Title */}
              <div>
                <h2 
                  className="font-bold text-4xl mb-4 leading-tight" 
                  style={{ 
                    color: "#ffffff",
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(255, 255, 255, 0.5), 0 2px 12px rgba(0, 0, 0, 1)"
                  }}
                >
                  {title}
                </h2>
                <p className="text-slate-400 text-lg mb-6">{leftColumn.subtitle}</p>
              </div>

              {/* Sections */}
              {leftColumn.sections.map((section, sectionIdx) => (
                <div 
                  key={sectionIdx}
                  className={sectionIdx > 0 ? "pt-8 border-t border-slate-700" : ""}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        rotate: 0, 
                        opacity: 1 
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: sectionIdx * 0.2
                      }}
                      className="relative flex-shrink-0"
                    >
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(34, 197, 94, 0.4)",
                            "0 0 30px rgba(34, 197, 94, 0.6)",
                            "0 0 20px rgba(34, 197, 94, 0.4)",
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="flex items-center justify-center rounded-full font-bold text-xl"
                        style={{
                          width: "48px",
                          height: "48px",
                          background: "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.3))",
                          border: "2px solid rgba(34, 197, 94, 0.5)",
                          color: "#22c55e"
                        }}
                      >
                        {sectionIdx + 1}
                      </motion.div>
                    </motion.div>
                    <h3 className="font-bold text-green-400 text-2xl">
                      {section.title}
                    </h3>
                  </div>
                  
                  {/* Why It Works */}
                  {section.whyItWorks && section.whyItWorks.length > 0 && (
                    <div className="mb-6">
                      <p className="font-bold text-green-400 text-sm mb-3 flex items-center gap-2">
                        <span>✅</span> Why It Works:
                      </p>
                      <ul className="space-y-3 text-slate-300 text-base ml-6">
                        {section.whyItWorks.map((point, idx) => (
                          <li key={idx} className="leading-relaxed">
                            <HtmlContent html={point} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Steps */}
                  <div className="space-y-6">
                    {section.steps.map((step, stepIdx) => (
                      <div key={stepIdx}>
                        <h4 className="font-bold text-white text-lg mb-2">{step.title}</h4>
                        <p className="text-slate-300 text-base leading-relaxed mb-3">
                          <HtmlContent html={step.description} />
                        </p>
                        
                        {/* Example */}
                        {step.example && (
                          <div className="pl-4 border-l-2 border-slate-600 mb-3">
                            <p className="text-slate-400 text-sm mb-1">Example:</p>
                            <p className="text-slate-200 italic text-base">
                              <HtmlContent html={step.example} />
                            </p>
                          </div>
                        )}

                        {/* Tip */}
                        {step.tip && (
                          <div className="mt-3 p-3 rounded-lg" style={{ background: "rgba(255, 255, 255, 0.05)" }}>
                            <p className="text-slate-400 text-sm">
                              <strong>Tip:</strong> <HtmlContent html={step.tip} />
                            </p>
                          </div>
                        )}

                        {/* Full Example */}
                        {step.fullExample && (
                          <div 
                            className="mt-4 p-6 rounded-lg border-2 border-purple-500/30" 
                            style={{ background: "rgba(139, 92, 246, 0.08)" }}
                          >
                            <p className="text-purple-400 font-bold text-sm mb-3 uppercase tracking-wider">Full Conversation Example:</p>
                            <div className="text-slate-200 text-base leading-relaxed whitespace-pre-line font-mono">
                              {step.fullExample}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Light Background */}
          <div 
            className="p-12 overflow-y-auto"
            style={{
              background: "rgba(30, 41, 59, 0.25)",
            }}
          >
            <div className="space-y-8 max-w-2xl text-slate-100">
              {/* Step by Step Breakdown */}
              {rightColumn.sections.map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-2xl mb-6">{section.title}</h3>
                  <p className="mb-4 text-lg">
                    <HtmlContent html={section.description} />
                  </p>
                  
                  {section.example && (
                    <div className="p-4 rounded-lg mb-4" style={{ background: "rgba(139, 92, 246, 0.1)" }}>
                      <p className="text-base">
                        <HtmlContent html={section.example} />
                      </p>
                    </div>
                  )}

                  {section.note && (
                    <div className="p-4 rounded-lg" style={{ background: "rgba(15, 23, 42, 0.6)", border: "2px solid rgba(100, 116, 139, 0.3)" }}>
                      <p className="text-base leading-relaxed">
                        <HtmlContent html={section.note} />
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Best Practices Summary */}
              <div className="pt-8 border-t-2 border-slate-600">
                <h3 className="font-bold text-2xl mb-6">Best Practices Summary</h3>
                <div className="space-y-4">
                  {rightColumn.bestPractices.map((practice, idx) => (
                    <div key={idx}>
                      <p className="font-bold text-green-400 text-base mb-2 flex items-center gap-2">
                        <span>✅</span> {practice.title}:
                      </p>
                      <p className="text-base leading-relaxed ml-6">
                        <HtmlContent html={practice.description} />
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="pt-8">
                <h3 className="font-bold text-2xl mb-6">Key Takeaways</h3>
                <div 
                  className="p-6 rounded-lg"
                  style={{ background: "rgba(139, 92, 246, 0.15)", border: "2px solid rgba(139, 92, 246, 0.3)" }}
                >
                  <ul className="space-y-3">
                    {recap.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="font-bold text-purple-400 flex-shrink-0">•</span>
                        <span className="text-base leading-relaxed text-slate-100">
                          <HtmlContent html={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {imageModalOpen && currentModule.overviewImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-8"
          style={{
            background: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(10px)",
          }}
          onClick={() => setImageModalOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors z-10"
            onClick={() => setImageModalOpen(false)}
          >
            <X className="size-10" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-move"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <img
              src={currentModule.overviewImage}
              alt="Objection Handling Fundamentals Mind Map"
              className="rounded-lg border-2 border-white/30 select-none"
              draggable={false}
              style={{
                transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${imageZoom})`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                maxWidth: '90vw',
                maxHeight: '90vh',
              }}
            />
          </div>

          {/* Instructions */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-sm text-center">
            Scroll to zoom • Click and drag to pan • Click outside to close
          </div>
        </motion.div>
      )}

      {/* Side Panel for Node Details */}
      {sidePanelOpen && selectedNodeDetails && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setSidePanelOpen(false)}
          />
          
          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[600px] z-[101] overflow-y-auto"
            style={{
              background: "linear-gradient(to bottom, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))",
              backdropFilter: "blur(20px)",
              borderLeft: "2px solid rgba(168, 85, 247, 0.3)",
              boxShadow: "-10px 0 50px rgba(0, 0, 0, 0.5)"
            }}
          >
            {/* Header */}
            <div 
              className="sticky top-0 z-10 p-6 border-b"
              style={{
                background: "rgba(15, 23, 42, 0.95)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(255, 255, 255, 0.08)"
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-2xl text-white mb-1">
                    {selectedNodeDetails.title}
                  </h3>
                  <p className="text-purple-400 text-sm uppercase tracking-wider">
                    Transition Detail
                  </p>
                </div>
                <button
                  onClick={() => setSidePanelOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                >
                  <X className="size-6 text-slate-400 hover:text-white" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <p className="text-slate-300 text-base leading-relaxed">
                  <HtmlContent html={selectedNodeDetails.description} />
                </p>
              </div>

              {/* Example */}
              {selectedNodeDetails.example && (
                <div 
                  className="p-4 rounded-lg border-2"
                  style={{
                    background: "rgba(168, 85, 247, 0.1)",
                    borderColor: "rgba(168, 85, 247, 0.3)"
                  }}
                >
                  <p className="text-purple-400 font-bold text-sm mb-2 uppercase tracking-wider">
                    Example:
                  </p>
                  <p className="text-slate-200 text-base leading-relaxed">
                    <HtmlContent html={selectedNodeDetails.example} />
                  </p>
                </div>
              )}

              {/* Tip */}
              {selectedNodeDetails.tip && (
                <div 
                  className="p-4 rounded-lg border-2"
                  style={{
                    background: "rgba(34, 197, 94, 0.1)",
                    borderColor: "rgba(34, 197, 94, 0.3)"
                  }}
                >
                  <p className="text-green-400 font-bold text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                    <span>💡</span> Pro Tip:
                  </p>
                  <p className="text-slate-200 text-base leading-relaxed">
                    <HtmlContent html={selectedNodeDetails.tip} />
                  </p>
                </div>
              )}

              {/* Full Example */}
              {selectedNodeDetails.fullExample && (
                <div 
                  className="p-6 rounded-lg border-2"
                  style={{
                    background: "rgba(139, 92, 246, 0.08)",
                    borderColor: "rgba(139, 92, 246, 0.3)"
                  }}
                >
                  <p className="text-purple-400 font-bold text-sm mb-3 uppercase tracking-wider">
                    Full Conversation Example:
                  </p>
                  <div className="text-slate-200 text-sm leading-relaxed whitespace-pre-line font-mono">
                    {selectedNodeDetails.fullExample}
                  </div>
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSidePanelOpen(false)}
                className="w-full py-3 px-4 rounded-lg font-bold text-white transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(139, 92, 246, 0.8))",
                  boxShadow: "0 4px 20px rgba(168, 85, 247, 0.3)"
                }}
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}