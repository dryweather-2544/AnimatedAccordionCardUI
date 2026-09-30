// COMPLETE ENHANCED STEP 4 REPLACEMENT
// This should replace lines 1305-1439 in App.tsx

<AccordionCard
  title="STEP 4: THIRD PPV ($55)"
  description="Premium immersion and penetration play"
  icon={<Crown className="size-6" />}
  color="#D9DADB"
  width="70%"
  content={`

🔍 Purpose

This phase marks the transition from controlled teasing into explicit fantasy fulfillment. The fan has proven willingness to invest financially and emotionally. Now you reward that investment with higher intensity content that delivers on the arousal you've been building.




GOAL
            
Premium immersion and penetration play with explicit fantasy fulfillment.`}
  nestedItems={[
    {
      label: "Purpose",
      content: (
        <div className="space-y-4">
          <OneLiner text="Test sustained high spending capacity and separate casual buyers from committed clients" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">At this point, the dynamic is established, trust is locked in, and the fan isn't questioning whether they should spend - they're anticipating what comes next.</p>
            
            <p className="text-slate-200">The power of this phase is combining premium pricing with intimate personalization, using their specific kinks and fantasies to create content that feels custom made.</p>
            
            <p className="text-slate-200">Their response to this offer tells you if they're worth nurturing for custom content, longer term engagement, or VIP treatment.</p>
          </div>
          
          <OneLiner text="Hesitation or softness reads as inauthentic after everything you've built" />
          
          <IfSkipped consequences={[
            "You leave premium revenue on the table",
            "Can't identify whale clients",
            "Dynamic caps at mid tier spending"
          ]} />
        </div>
      )
    },
    {
      label: "Step 1: Explicit fantasy opener",
      content: (
        <div className="space-y-4">
          <OneLiner text="Position them as the subject of your fantasy, not generic content" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Direct, visual, and immediately arousing.</p>
            
            <p className="text-slate-200">This positions them as the subject of your fantasy, which makes the content feel personal rather than generic.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "im thinking about using my toy like its you",
              "i cant stop picturing you here right now… and what id make you do to me",
              "okay so… im about to use my toy and all i can think about is replacing it with you"
            ]}
          />
          
          <WatchFor signals={[
            "They respond with arousal indicators",
            "They ask what you're thinking",
            "They reciprocate with their own fantasy"
          ]} />
          
          <IfSkipped consequences={[
            "Content feels transactional, not personal",
            "Premium price isn't justified",
            "Fan doesn't feel like the fantasy is about them"
          ]} />
        </div>
      )
    },
    {
      label: "Step 2: Choice illusion",
      content: (
        <div className="space-y-4">
          <OneLiner text="Give sense of control while maintaining frame" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Gives them a sense of control while you maintain the frame.</p>
            
            <p className="text-slate-200">The answer is obvious (keep going), but asking makes them feel complicit in the escalation.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "do you want me to behave or keep going?",
              "should i stop here or… keep pushing?",
              "tell me right now… do you want me to hold back or go all the way?"
            ]}
          />
          
          <OneLiner text="Asking deepens investment even though the outcome is predetermined" />
          
          <MicroBranch branches={[
            { condition: "they say 'keep going'", action: "Proceed with authority shift" },
            { condition: "they hesitate", action: "Tease them gently for hesitating, then proceed anyway" }
          ]} />
        </div>
      )
    },
    {
      label: "Step 3: Authority shift",
      content: (
        <div className="space-y-4">
          <OneLiner text="Signal tone change to justify premium price" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Clear boundary that signals a tone change.</p>
            
            <p className="text-slate-200">This makes the content feel more serious, intimate, and intense.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "this is where things stop being playful",
              "okay… everything after this is serious",
              "from here on out im not holding back anymore"
            ]}
          />
          
          <IfSkipped consequences={[
            "Premium content doesn't feel differentiated",
            "Price jump seems arbitrary",
            "Fan doesn't understand why this costs more"
          ]} />
          
          <WhenThisWorked indicators={[
            "They acknowledge the shift",
            "Their language becomes more serious or intense",
            "They express readiness or anticipation"
          ]} />
        </div>
      )
    },
    {
      label: "Step 4: Kink extraction",
      content: (
        <div className="space-y-4">
          <OneLiner text="Make them feel involved in content creation even if you don't use their exact kink" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Gathers personalization data while making them feel involved in content creation.</p>
            
            <p className="text-slate-200">Even if you don't use their exact kink, the act of asking makes them feel seen and invested in the outcome.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "tell me one kink you really love while I make this",
              "before i start… whats something that always gets you off?",
              "okay real talk… whats your biggest turn on? i wanna keep it in mind while i do this"
            ]}
          />
          
          <DoNotYet 
            items={[
              "Don't promise to use their kink if you can't",
              "Don't ask for kinks you're uncomfortable with",
              "Don't judge their answer"
            ]}
            reason="The value is in asking and making them feel heard, not in literal customization."
          />
          
          <WatchFor signals={[
            "They share detailed kinks",
            "They ask if you're into the same things",
            "They express excitement about being asked"
          ]} />
        </div>
      )
    },
    {
      label: "Step 5: Immersive scenario building",
      content: (
        <div className="space-y-4">
          <OneLiner text="Specificity makes content feel real and personal, not generic" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Detailed, immersive fantasy that positions them as an active participant.</p>
            
            <p className="text-slate-200">This level of specificity makes the content feel real and personal.</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Set a specific scenario",
              "Place them in the scenario",
              "Describe what happens next"
            ]}
            prompts={[
              "im gonna imagine you walking in on me… catching me in the middle of touching myself… and deciding you're not gonna let me finish alone",
              "picture this: you come home early and find me already in bed… legs spread… waiting. what do you do first?",
              "okay so in my head youre pinning me down right now… telling me to stay still while you figure out exactly how youre gonna make me beg"
            ]}
          />
          
          <IfSkipped consequences={[
            "Content feels generic and impersonal",
            "Premium price isn't emotionally justified",
            "Fan doesn't feel immersed in the fantasy"
          ]} />
        </div>
      )
    },
    {
      label: "Step 6: Intensity acknowledgment",
      content: (
        <div className="space-y-4">
          <OneLiner text="Create anticipation and reinforce exclusivity before the send" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Creates anticipation and reinforces exclusivity.</p>
            
            <p className="text-slate-200">Even if it's not literally true, it makes them feel like they're accessing a rare level of intimacy.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "this is honestly the most explicit thing ive shared with anyone in a while… so i hope you're ready",
              "okay just so you know… what im about to send is not something i share lightly",
              "i need you to understand that this is like… next level for me. most people never see this side"
            ]}
          />
          
          <WhenThisWorked indicators={[
            "They express readiness or excitement",
            "They thank you in advance",
            "They affirm they can handle it"
          ]} />
        </div>
      )
    },
    {
      label: "Step 7: Post send control check",
      content: (
        <div className="space-y-4">
          <OneLiner text="Maintain control after sale to keep dynamic alive" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Maintains control even after the sale, which keeps the dynamic alive and sets up continued engagement.</p>
            
            <p className="text-slate-200">This also tests their compliance and investment in the roleplay.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "okay… before you watch it… promise me you're gonna edge through the whole thing and not finish until i say you can",
              "hands off while you watch this. i wanna know youre following my rules",
              "dont you dare finish to this without asking me first"
            ]}
          />
          
          <Checklist 
            items={[
              "You've sent the $55 PPV",
              "You gave control command immediately",
              "They've responded with compliance",
              "Dynamic remains active post purchase"
            ]}
            completionMessage="STEP 4 complete! Fan is primed for top tier content and potential VIP treatment."
          />
        </div>
      )
    },
    {
      label: "Core takeaway",
      content: (
        <div className="space-y-4">
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200 font-semibold">STEP 4 separates casual buyers from whale clients.</p>
            <p className="text-slate-200">How they respond to premium pricing and explicit content tells you everything about their long term value.</p>
            <p className="text-slate-200">Direct, unapologetic sexual language is expected here. Hesitation kills the sale.</p>
          </div>
        </div>
      )
    }
  ]}
  quiz={[
    {
      type: 'scenario',
      question: "You're preparing to send the third PPV ($55) after two successful unlocks. The fan has been engaged and compliant. Which opening best positions this as a premium, exclusive experience?",
      options: [
        "Say 'i have my best content ready for you if you wanna unlock it'",
        "Say 'im thinking about using my toy like its you… this is where things stop being playful'",
        "Send the PPV immediately with a detailed description and price",
        "Ask 'are you ready to see something really explicit?' before revealing the offer"
      ],
      correctAnswer: 1,
      explanation: "This combines immersive fantasy ('using my toy like its you') with a clear tone shift ('things stop being playful'). It signals escalation, creates arousal, and positions the content as intimate and intense, which justifies the premium price. The other options lack emotional weight.",
      wrongAnswerExplanations: [
        "This is generic and product focused. 'My best content' sounds like marketing copy, not intimate escalation. You're not selling features, you're creating an experience. This language breaks immersion.",
        "", // Correct answer
        "Sending without emotional framing wastes the opportunity to build arousal and exclusivity. At this price point, the setup matters as much as the content itself. You need to create anticipation.",
        "Asking permission here weakens frame. You should be leading confidently at this stage, not checking if they're ready. The question also creates hesitation instead of momentum."
      ]
    },
    {
      type: 'diagnostic',
      question: "A fan unlocks your second PPV ($35). You immediately send: 'glad you liked it! i have a $55 PPV with penetration if you're interested.' They read it but don't respond. What's the problem?",
      options: [
        "The price jump from $35 to $55 was too steep",
        "You didn't rebuild arousal or frame the offer with exclusivity and fantasy",
        "Mentioning penetration explicitly was too forward",
        "You should have waited 24 hours before offering more content"
      ],
      correctAnswer: 1,
      explanation: "Price isn't the issue - framing is. You went straight from transaction to transaction without rebuilding connection, arousal, or exclusivity. Fans need immersion, personalization, and emotional investment before high ticket offers. Without it, even great content feels like a cash grab.",
      wrongAnswerExplanations: [
        "", // Correct answer
        "Being explicit isn't the problem - being transactional is. Mentioning penetration can work if it's wrapped in fantasy and desire, not listed as a product feature. The issue is the delivery, not the content.",
        "Timing isn't the core issue. You could offer premium content 10 minutes later or 24 hours later - if you skip arousal rebuild and exclusivity framing, it'll still feel wrong. Structure matters more than delay."
      ]
    },
    {
      type: 'comparison',
      question: "Which message better sets up a $55 PPV after previous unlocks?\n\nA: 'this is where things stop being playful… tell me one kink you really love while I make this'\n\nB: 'i just filmed something really hot with my toy, way more explicit than before. lmk if you want it'",
      options: [
        "A - it shifts tone, personalizes the experience, and involves them in the process",
        "B - it's clear about what the content includes and sets expectations",
        "A - but only if you actually plan to incorporate their kink into the content",
        "B - because transparency about explicitness helps justify the higher price"
      ],
      correctAnswer: 0,
      explanation: "A creates immersion, authority, and personalization all at once. The tone shift signals premium content, asking for their kink makes it feel custom, and the 'while I make this' implies effort on your part. B is transactional and generic, lacking emotional or sexual weight.",
      wrongAnswerExplanations: [
        "", // Correct answer
        "Clarity isn't the goal here - arousal and exclusivity are. B reads like a product description, not an intimate escalation. Fans at this price point aren't buying transparency, they're buying fantasy and connection.",
        "You don't need to literally incorporate every kink they mention. The value is in ASKING, which involves them and makes them feel seen. The intel is useful, but the real win is transforming a transaction into a collaborative fantasy.",
        "Transparency about explicitness is fine, but B lacks the framing that makes it feel special. You're not trying to justify price through features - you're justifying it through exclusivity and intimacy. B misses that entirely."
      ]
    },
    {
      type: 'scenario',
      question: "The fan unlocks your $55 PPV. They message: 'holy shit that was so hot 🔥' What's your best next move to maintain momentum without immediately selling again?",
      options: [
        "Thank them and ask which part made them hardest to gauge their preferences",
        "Send a control command like 'hands off. wait right there. don't finish yet'",
        "Acknowledge it briefly then pivot to asking about custom content interest",
        "Tell them you're glad they liked it and ask if they followed your edging instructions"
      ],
      correctAnswer: 1,
      explanation: "This maintains sexual control and keeps the dynamic alive without selling. It shows you're still leading the interaction, not just collecting payments. It also sets up continued engagement and positions you for higher offers later without breaking immersion now.",
      wrongAnswerExplanations: [
        "This is functional but misses the opportunity to maintain sexual tension and control. You're treating it like market research instead of continuing the fantasy. You can gather intel later - right now, maintain frame.",
        "", // Correct answer
        "Pivoting to custom content immediately breaks immersion and makes it transactional. They just unlocked premium content - let them marinate in the arousal before introducing more spending. This move kills momentum.",
        "This is better than selling immediately, but it's reactive rather than dominant. You're checking compliance instead of commanding it. The energy shift is subtle but important at this price tier."
      ]
    }
  ]}
/>