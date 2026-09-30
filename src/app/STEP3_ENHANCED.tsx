// COMPLETE ENHANCED STEP 3 REPLACEMENT
// This should replace lines 1171-1303 in App.tsx

<AccordionCard
  title="STEP 3: SECOND PPV ($35)"
  description="Trust based intimacy escalation"
  icon={<Flame className="size-6" />}
  color="#A8C99A"
  width="55%"
  content={`

🔍 Purpose

This phase marks the transition from controlled teasing into trust based intimacy. The fan has already crossed the mental barrier of paying, so the second PPV isn't about convincing them to spend - it's about making them feel chosen, special, and emotionally locked into a dynamic that feels mutual and personal rather than transactional.




GOAL
            
Increase intimacy and sexual control while testing emotional investment.`}
  nestedItems={[
    {
      label: "Purpose",
      content: (
        <div className="space-y-4">
          <OneLiner text="Test emotional investment and spending capacity without breaking frame" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This phase matters because it's where controlled escalation turns into trust based intimacy.</p>
            
            <p className="text-slate-200">The goal is to deepen sexual and emotional investment simultaneously while conditioning the client to spend at higher price points without resistance.</p>
            
            <p className="text-slate-200">If they're still engaged after the second PPV, they're not a casual fan anymore - they're a client who's mentally committed.</p>
          </div>
          
          <OneLiner text="Balance exclusivity framing with sexual control to justify higher price" />
          
          <IfSkipped consequences={[
            "Fan caps out at low tier spending",
            "No pathway to premium content",
            "Dynamic feels transactional instead of intimate"
          ]} />
        </div>
      )
    },
    {
      label: "Step 1: Soft proposal",
      content: (
        <div className="space-y-4">
          <OneLiner text="Frame the second PPV as spontaneous and earned, not planned" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This frames the second PPV as earned through their behavior, not a planned upsell.</p>
            
            <p className="text-slate-200">The "wasn't planning to" language makes it feel exclusive and reactive to the connection you've built.</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Acknowledge how they handled the first PPV",
              "Frame the second as unplanned",
              "Reference the current mood as the reason"
            ]}
            prompts={[
              "you handled that really well.. honestly better than i expected 😏 i wasn't planning to share this yet, but i already feel comfortable with you. i'm gonna send one more thing while the mood is still right",
              "okay so… you're making this really easy for me and i love that. i wasnt gonna send this today but… fuck it. you earned it",
              "the way you reacted to that… honestly made me wanna go further with you. i dont usually do this but im gonna send you something i keep for special people"
            ]}
          />
          
          <WatchFor signals={[
            "They respond with excitement or curiosity",
            "They don't ask about price first",
            "They thank you or express feeling special"
          ]} />
          
          <IfSkipped consequences={[
            "Second PPV feels like a planned upsell",
            "Spontaneity and exclusivity are lost",
            "Fan becomes price focused instead of experience focused"
          ]} />
          
          <MicroBranch branches={[
            { condition: "they hesitate or ask about price", action: "Soften with 'no pressure' and pivot back to conversation" },
            { condition: "they respond enthusiastically", action: "Send the PPV immediately with minimal description" }
          ]} />
        </div>
      )
    },
    {
      label: "Step 2: Exclusivity framing",
      content: (
        <div className="space-y-4">
          <OneLiner text="Make them feel uniquely chosen to justify higher price" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This creates scarcity and makes them feel uniquely chosen.</p>
            
            <p className="text-slate-200">Even if you say this to multiple clients, each one believes this moment is special and reserved for them.</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Imply rarity or selectiveness",
              "Reference them specifically as the reason",
              "Avoid over explaining or defending"
            ]}
            prompts={[
              "i dont ever usually do this… like EVER… but youre the first person ive wanted to share this with",
              "this might sound weird but i feel like i can actually be myself with you… most people dont get this from me",
              "honestly i dont share stuff like this with just anyone… something about you makes me feel safe"
            ]}
          />
          
          <OneLiner text="Perceived exclusivity justifies higher spend more than content quality" />
          
          <IfSkipped consequences={[
            "Content feels generic and transactional",
            "Perceived value drops significantly",
            "Fan becomes price resistant"
          ]} />
          
          <WhenThisWorked indicators={[
            "They respond with emotional language ('that means a lot', 'wow really?')",
            "They double text or send multiple messages",
            "Their willingness to spend increases"
          ]} />
        </div>
      )
    },
    {
      label: "Step 3: Post unlock continuation",
      content: (
        <div className="space-y-4">
          <OneLiner text="Prevent interaction from ending at the transaction" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This happens after they unlock the second PPV.</p>
            
            <p className="text-slate-200">By positioning them as the one driving your arousal, you flip the power dynamic and make them feel wanted.</p>
            
            <p className="text-slate-200">The question format creates curiosity and invites them deeper into the interaction.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "we clicked so fast i love it! and thank you!.. and the way you're teasing me has me thinking allll kinds of things 🤭😈 think you can handle hearing them..?",
              "okay so… the fact that you unlocked that has me feeling some type of way. should i tell you what im thinking or is that too much?",
              "mmm youre making this really fun for me… and also making me think about things i probably shouldn't say out loud yet 🙈"
            ]}
          />
          
          <IfSkipped consequences={[
            "Momentum dies after unlock",
            "Interaction feels one sided",
            "No setup for further escalation"
          ]} />
          
          <Checklist 
            items={[
              "They unlocked the second PPV",
              "You acknowledged it warmly",
              "You positioned them as affecting you",
              "You asked a question to keep them engaged"
            ]}
            completionMessage="Momentum maintained! Ready to proceed to emotional reinforcement."
          />
        </div>
      )
    },
    {
      label: "Step 4: Emotional reinforcement",
      content: (
        <div className="space-y-4">
          <OneLiner text="Make the interaction feel reciprocal, not one sided" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Reinforces the connection and makes the interaction feel reciprocal.</p>
            
            <p className="text-slate-200">They're not just consuming content - they're actively affecting you.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "we clicked so fast i love it… and the way youre teasing me has me thinking all kinds of things 🤭",
              "i honestly wasnt expecting to feel this comfortable with someone this fast… but here we are",
              "the energy between us is actually really good… like i can tell this is different"
            ]}
          />
          
          <WatchFor signals={[
            "They reciprocate emotional language",
            "They express feeling connected",
            "They ask questions about you"
          ]} />
          
          <IfSkipped consequences={[
            "Fan feels like a transaction, not a person",
            "Emotional investment plateaus",
            "Future spending becomes harder"
          ]} />
        </div>
      )
    },
    {
      label: "Step 5: Desire confession",
      content: (
        <div className="space-y-4">
          <OneLiner text="Vulnerability mixed with desire deepens parasocial intimacy" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This makes them feel like they're affecting you emotionally and sexually.</p>
            
            <p className="text-slate-200">The "cant believe im saying this" frames it as crossing a boundary, which adds weight.</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Express disbelief or vulnerability",
              "State desire clearly",
              "Show physical/emotional effect"
            ]}
            prompts={[
              "because i cant believe im saying this… but i wanna take it further with you… im already such a mess just thinking about it 🥵",
              "okay this is probably too honest but… talking to you like this has me feeling things i wasnt expecting",
              "i shouldnt admit this but… youre actually making me really worked up right now and its been a minute since someone did that"
            ]}
          />
          
          <DoNotYet 
            items={[
              "Don't make it feel scripted or rehearsed",
              "Don't overdo the vulnerability to where it feels needy",
              "Don't confess desire without showing restraint"
            ]}
            reason="Desire confessions work when they feel spontaneous and slightly reluctant. If it sounds planned or desperate, it loses impact."
          />
          
          <WhenThisWorked indicators={[
            "They mirror your energy",
            "They express their own desire",
            "They ask what you want to do next"
          ]} />
        </div>
      )
    },
    {
      label: "Step 6: Escalation consent",
      content: (
        <div className="space-y-4">
          <OneLiner text="Make them complicit in escalation to remove buyer regret" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Creates a moment of choice that makes them complicit in the escalation.</p>
            
            <p className="text-slate-200">By asking consent, you're framing the next level as something they're choosing together.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "if i keep going the way i want to… this stops being playful and starts feeling very real between us. i'm already halfway there, so tell me.. are you still with me?",
              "okay so… if we keep going at this pace things are gonna get intense really fast. you good with that or should i slow down?",
              "i need to know youre actually ready for this because once we cross this line it changes the vibe completely"
            ]}
          />
          
          <OneLiner text="Verbal commitment increases psychological investment and follow through" />
          
          <IfSkipped consequences={[
            "Escalation feels imposed, not mutual",
            "Higher chance of buyer regret",
            "Fan may ghost after spending"
          ]} />
          
          <MicroBranch branches={[
            { condition: "they affirm enthusiastically", action: "Proceed with confidence to next escalation" },
            { condition: "they hesitate or seem uncertain", action: "Slow down and rebuild comfort before proceeding" }
          ]} />
          
          <Checklist 
            items={[
              "You've completed soft proposal",
              "Exclusivity has been framed",
              "Emotional reinforcement delivered",
              "They've verbally consented to escalation"
            ]}
            completionMessage="STEP 3 complete! Fan is primed for premium tier content."
          />
        </div>
      )
    },
    {
      label: "Core takeaway",
      content: (
        <div className="space-y-4">
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200 font-semibold">STEP 3 is where casual buyers become committed clients.</p>
            <p className="text-slate-200">The difference between a one time $35 unlock and a client who spends $200+ is how well you execute this phase.</p>
            <p className="text-slate-200">Miss the emotional framing here, and you cap out. Nail it, and everything after becomes easier.</p>
          </div>
        </div>
      )
    }
  ]}
  quiz={[
    {
      type: 'scenario',
      question: "After the first PPV unlock, you've reengaged with conversation and light roleplay. The fan is responding well. You want to introduce the second PPV ($35). Which approach best maintains frame while testing their investment?",
      options: [
        "Send the PPV immediately with description and price - momentum is high",
        "Say 'you handled that really well... i wasn't planning to share this yet, but i already feel comfortable with you'",
        "Ask if they want to see more content before mentioning there's a cost",
        "Send a free preview of the next level to build desire, then offer the full version"
      ],
      correctAnswer: 1,
      explanation: "This option frames the second PPV as spontaneous and earned, not planned. It positions their behavior as the reason you're sharing, which creates exclusivity and justifies the higher price. It maintains control while making them feel chosen.",
      wrongAnswerExplanations: [
        "High momentum doesn't mean you skip framing. Sending the PPV without emotional setup makes it feel like a product pitch rather than an intimate progression. You're leaving value on the table by not positioning it as special.",
        "", // Correct answer
        "Asking permission weakens frame. You're the one leading the interaction. Asking 'do you want to see more' before mentioning cost creates awkwardness when you then reveal it's paid. It signals uncertainty.",
        "Free previews right before a $35 offer can work, but they risk satisfying arousal instead of building it. You also train them to expect free content before paying, which undermines future offers."
      ]
    },
    {
      type: 'diagnostic',
      question: "A fan unlocks your first PPV ($8). You say: 'omg did you like it? 😍' They reply: 'yeah that was hot.' You immediately send: 'i have way better content for $35 if you want it.' They ghost. What's the core issue?",
      options: [
        "The price jump from $8 to $35 was too steep too fast",
        "You skipped rebuilding arousal and emotional connection between offers",
        "You asked if they wanted it instead of confidently offering it",
        "The phrase 'way better content' implies the first PPV wasn't good enough"
      ],
      correctAnswer: 1,
      explanation: "Price isn't the issue - transition quality is. You went straight from transaction to transaction without rebuilding intimacy, arousal, or exclusivity framing. Fans need conversational buffer, visualization, and emotional investment before spending more. Without it, they feel like an ATM.",
      wrongAnswerExplanations: [
        "The price jump isn't inherently wrong if framed correctly. $8 to $35 can work when there's proper escalation, exclusivity framing, and arousal buildup. The issue is you skipped all of that.",
        "", // Correct answer
        "The phrasing is weak, but it's not the core problem. Even confidently offering would fail here because you haven't rebuilt arousal or connection. Confidence doesn't fix structural mistakes.",
        "This is a minor issue compared to the main problem. The phrase is clumsy, but even perfect phrasing wouldn't save this transition. You're treating them like a sales funnel instead of a person."
      ]
    },
    {
      type: 'comparison',
      question: "Which message better positions the second PPV as exclusive and earned?\n\nA: 'i dont ever usually do this… like EVER… but youre the first person ive wanted to share this with'\n\nB: 'i just made some really hot content and i think you'd love it based on what you unlocked earlier'",
      options: [
        "A - it creates scarcity and makes them feel uniquely chosen",
        "B - it's more honest and personalized to their previous unlock",
        "A - but only if they've been chatting for at least 30 minutes",
        "B - because it references their behavior, which builds continuity"
      ],
      correctAnswer: 0,
      explanation: "A creates perceived exclusivity and emotional weight. The fan feels like this is rare and happening because of who they are, not what they bought. B is functional but frames it as a product recommendation, not an intimate share. Scarcity beats personalization here.",
      wrongAnswerExplanations: [
        "", // Correct answer
        "Honesty isn't the goal - emotional impact is. B is technically personalized, but it lacks exclusivity framing. It sounds like you're matching content to preferences, which is smart but transactional. A makes them feel special.",
        "Time doesn't determine when exclusivity language works - emotional investment does. If you've built strong KYC and they unlocked the first PPV enthusiastically, A works even at 15 minutes. Arbitrary time rules miss the point.",
        "Referencing behavior is good for continuity, but it doesn't create urgency or scarcity. B is safe and logical, but A creates emotional elevation. In high ticket offers, elevation beats logic."
      ]
    },
    {
      type: 'scenario',
      question: "You're about to send the second PPV. The fan has unlocked the first, engaged well, and seems aroused. Before sending the offer, you want to maximize willingness to spend. What's the best preoffer sequence?",
      options: [
        "Send edging control language ('lets see those edging skills hehe'), then offer immediately",
        "Give free escalation content, check their arousal level, then frame the offer as spontaneous",
        "Ask a consent style question ('are you still with me?') before revealing the price",
        "Build urgency by saying you're about to go offline soon and want to share this first"
      ],
      correctAnswer: 1,
      explanation: "This sequence maximizes arousal, tests engagement, and frames the offer as reactive to the moment rather than planned. Free escalation deepens investment, the arousal check confirms they're primed, and spontaneous framing removes resistance. It's the full buildup.",
      wrongAnswerExplanations: [
        "Edging language is powerful, but sending the offer immediately after it wastes the arousal you just created. You need conversational buffer and emotional framing between the tease and the transaction, or it feels mechanical.",
        "", // Correct answer
        "Consent questions can work, but asking before revealing price creates anxiety. They don't know what they're consenting to yet, which makes the question feel heavy. Better to ask consent AFTER arousal is high and framing is set.",
        "False urgency ('going offline soon') can work tactically, but it doesn't build arousal or intimacy. It creates pressure, not desire. If you have to manufacture scarcity through time limits, your framing wasn't strong enough."
      ]
    }
  ]}
/>
