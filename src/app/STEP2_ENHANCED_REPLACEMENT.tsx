// COMPLETE ENHANCED STEP 2 REPLACEMENT
// This should replace lines 956-1169 in App.tsx

<AccordionCard
  title="STEP 2: FIRST PPV OR TEASE"
  description="Low friction lock in phase"
  icon={<Eye className="size-6" />}
  color="#E8F3FF"
  width="80%"
  content={`

🔍 Purpose

This step exists to convert curiosity into arousal and arousal into commitment. The fan is already comfortable from KYC, but they are not yet invested. The goal here is not to sell big, but to mentally lock them into the experience so spending feels natural instead of transactional.




GOAL
            
Low friction first unlock or tease. Condition spending and curiosity.`}
  nestedItems={[
    {
      label: "Purpose",
      content: (
        <div className="space-y-4">
          <OneLiner text="Shift from conversation into participation without breaking comfort" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This step exists to convert curiosity into arousal and arousal into commitment.</p>
            
            <p className="text-slate-200">The fan is already comfortable from KYC, but they are not yet invested.</p>
            
            <p className="text-slate-200">The goal here is not to sell big, but to mentally lock them into the experience so spending feels natural instead of transactional.</p>
          </div>
          
          <OneLiner text="Give just enough stimulation to spark desire without satisfying it" />
          
          <CopyPastePrompts 
            structure={[
              "Frame the moment casually and playfully",
              "Keep the tease short and incomplete",
              "Leave emotional and sexual curiosity unresolved"
            ]}
            prompts={[
              "id LOVE to show you my outfit for the day… and the tail end of an intense orgasm hehe",
              "i just finished something and honestly… youre the first person i thought of sending it to",
              "okay this might be too much but… i recorded the exact moment i [specific detail] and i cant stop thinking about your reaction"
            ]}
          />
          
          <IfSkipped consequences={[
            "Fan stays in 'just chatting' mode",
            "First PPV feels abrupt or salesy",
            "No momentum carries forward"
          ]} />
          
          <MicroBranch branches={[
            { condition: "fan hesitates", action: "Lower price or soften framing, not explicitness" },
            { condition: "fan unlocks quickly", action: "Move immediately to post unlock engagement" },
            { condition: "fan reacts minimally", action: "Ask a question to pull them back in" }
          ]} />
          
          <WhenThisWorked indicators={[
            "Fan unlocks without price resistance",
            "Tone stays flirty after the unlock",
            "Conversation continues naturally"
          ]} />
        </div>
      )
    },
    {
      label: "Step 1: Post PPV framing",
      content: (
        <div className="space-y-4">
          <OneLiner text="Make the PPV feel like a moment, not a product" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This happens before the unlock and determines how the PPV is perceived.</p>
            
            <p className="text-slate-200">Your wording decides whether the unlock ends the interaction or begins the next phase.</p>
            
            <p className="text-slate-200">When you frame the content as something you're excited to share - casually, playfully, without pressure - the fan focuses on curiosity instead of price.</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Frame content as something you want to share",
              "Keep tone curious, not promotional",
              "Make it feel part of a shared moment"
            ]}
            prompts={[
              "id LOVE to show you my outfit for the day… and the tail end of an intense orgasm hehe",
              "i just finished something and honestly… youre the first person i thought of sending it to",
              "okay this might be too much but… i recorded the exact moment i came thinking about you and i cant stop replaying it"
            ]}
          />
          
          <WatchFor signals={[
            "Good framing sounds excited and personal, not salesy",
            "Bad framing mentions price or features upfront",
            "If they respond with 'how much?' instead of curiosity, framing was weak"
          ]} />
          
          <IfSkipped consequences={[
            "Unlock feels transactional",
            "Fan disengages after viewing",
            "Interaction resets"
          ]} />
          
          <MicroBranch branches={[
            { condition: "it sounds salesy", action: "Add curiosity or vulnerability" },
            { condition: "fan asks about price", action: "Reframe experience before answering" }
          ]} />
          
          <WhenThisWorked indicators={[
            "Fan focuses on content, not cost",
            "Unlock feels natural",
            "Engagement continues after purchase"
          ]} />
        </div>
      )
    },
    {
      label: "Step 2: Post unlock engagement",
      content: (
        <div className="space-y-4">
          <OneLiner text="The highest attention moment - don't waste it" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">The second the fan unlocks is when attention is highest.</p>
            
            <p className="text-slate-200">Silence here kills momentum. Engagement must happen immediately.</p>
            
            <p className="text-slate-200">Asking a question keeps them active instead of passive and turns them from a consumer back into a participant.</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Ask a reaction based question",
              "Keep it open ended",
              "Pull them back into participation"
            ]}
            prompts={[
              "omg hehe tell me honestly… which part caught your attention the most?",
              "okay so… what did you think? 😊",
              "be honest with me… did that live up to what you were hoping for?"
            ]}
          />
          
          <IfSkipped consequences={[
            "Fan consumes and disengages",
            "Momentum collapses",
            "No setup for escalation"
          ]} />
          
          <MicroBranch branches={[
            { condition: "fan gives short response", action: "Follow up with a specific question" },
            { condition: "fan reacts strongly", action: "Amplify and mirror excitement" }
          ]} />
          
          <Checklist 
            items={[
              "They unlocked the PPV",
              "You sent engagement question within 30 seconds",
              "They responded to your question",
              "You validated their answer before proceeding"
            ]}
            completionMessage="Perfect! Momentum is maintained. Proceed to exclusivity positioning."
          />
          
          <WhenThisWorked indicators={[
            "Fan keeps talking",
            "Emotional energy stays high",
            "You gain insight for escalation"
          ]} />
        </div>
      )
    },
    {
      label: "Step 3: Exclusivity positioning",
      content: (
        <div className="space-y-4">
          <OneLiner text="Make them feel chosen, not sold to" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This step reframes the content as personal and selective.</p>
            
            <p className="text-slate-200">It's not about truth - it's about perception.</p>
            
            <p className="text-slate-200">People don't pay more for content. They pay more for feeling singled out.</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Imply selectiveness",
              "Reference the chat as the reason",
              "Avoid over explaining"
            ]}
            prompts={[
              "i dont usually send little moments like this… but something about our chat made me want to share it with you",
              "honestly i dont share stuff like this with just anyone… but you made me feel comfortable",
              "this might sound weird but… i feel like i can be myself with you in a way i cant with most people"
            ]}
          />
          
          <IfSkipped consequences={[
            "Content feels generic",
            "Perceived value drops",
            "Fan becomes price focused"
          ]} />
          
          <MicroBranch branches={[
            { condition: "fan feels unsure", action: "Reinforce personal connection" }
          ]} />
          
          <WhenThisWorked indicators={[
            "They respond with emotional language ('that means a lot', 'im honored', etc.)",
            "They double text or send multiple messages",
            "They ask questions about you or the content"
          ]} />
        </div>
      )
    },
    {
      label: "Step 4: Rebuilding intimacy",
      content: (
        <div className="space-y-4">
          <OneLiner text="Purchases create distance unless you close it" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">After a transaction, intimacy drops automatically.</p>
            
            <p className="text-slate-200">This step reestablishes connection.</p>
            
            <p className="text-slate-200">A short, flirty acknowledgement bridges the gap between "I paid" and "we're still flirting."</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Acknowledge the unlock",
              "Keep it short and flirty",
              "Stay present"
            ]}
            prompts={[
              "mm im glad to hear that 😈",
              "hehe good… that makes me happy 🥰",
              "okay you're actually really sweet… i like this"
            ]}
          />
          
          <OneLiner text="A purchase is not intimacy. Intimacy must be rebuilt immediately after." />
          
          <IfSkipped consequences={[
            "Chat goes cold",
            "Fan disengages",
            "No continuation"
          ]} />
          
          <DecisionCheck conditions={[
            { condition: "they respond warmly", action: "Proceed to visualization escalation" },
            { condition: "they give short replies ('yeah', 'cool')", action: "Ask an open ended question to reengage" },
            { condition: "they go silent", action: "Wait 10 min, then pivot to conversation (don't chase)" }
          ]} />
          
          <MicroBranch branches={[
            { condition: "fan goes quiet", action: "Reengage immediately with warmth" }
          ]} />
          
          <WhenThisWorked indicators={[
            "Fan stays emotionally connected",
            "Conversation doesn't stall"
          ]} />
        </div>
      )
    },
    {
      label: "Step 5: Visualization escalation",
      content: (
        <div className="space-y-4">
          <OneLiner text="Move from watching to imagining" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Escalation starts in the mind.</p>
            
            <p className="text-slate-200">This step guides the fan into picturing themselves involved.</p>
            
            <p className="text-slate-200">Asking about physical traits guides the fan's imagination into a shared scenario.</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Ask a physical or scenario based question",
              "Keep it imaginative, not explicit",
              "Build shared imagery"
            ]}
            prompts={[
              "so tell me… how tall are you? im trying to imagine what it'd be like if you were here",
              "wait actually… are you more like athletic build or bigger? im picturing something in my head hehe",
              "okay random but… what do your hands look like? i have a thing 🙈"
            ]}
          />
          
          <OneLiner text="Escalation doesn't start with more explicit content. It starts with clearer mental pictures." />
          
          <IfSkipped consequences={[
            "Escalation feels forced later",
            "Higher PPVs don't land"
          ]} />
          
          <WatchFor signals={[
            "They answer with detail instead of one word",
            "They ask you a question back",
            "They use flirty or curious language"
          ]} />
          
          <MicroBranch branches={[
            { condition: "fan struggles to imagine", action: "Add gentle prompting" }
          ]} />
          
          <WhenThisWorked indicators={[
            "Fan responds descriptively",
            "Immersion increases"
          ]} />
        </div>
      )
    },
    {
      label: "Step 6: Physical anchoring + freebie",
      content: (
        <div className="space-y-4">
          <OneLiner text="Reward engagement, don't satisfy desire" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">A small tease reinforces participation and conditions expectation.</p>
            
            <p className="text-slate-200">This does three things: keeps arousal high, reinforces that engaging gets rewarded, and conditions them to expect escalation.</p>
            
            <p className="text-slate-200">The key is restraint. The freebie should activate desire, not satisfy it.</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Anchor fantasy to physical detail",
              "Keep it brief",
              "Leave desire unresolved"
            ]}
            prompts={[
              "im only 5'4 hehe 🤭 now imagine pulling me back into your lap and holding me there for a second… would you suck on my tits or pinch my nipples to make me moan while we make out? 😈",
              "mmm okay so if you were here right now… id be sitting on your lap facing you… what would your hands do first?",
              "close your eyes and picture this… you walk in and catch me touching myself… do you watch or do you join?"
            ]}
          />
          
          <DoNotYet 
            items={[
              "Don't send explicit photos for free",
              "Don't satisfy the fantasy fully",
              "Don't ask them to send content back yet"
            ]}
            reason="The goal is to activate desire and create anticipation, not to climax the fantasy. If you satisfy them here, the next PPV becomes unnecessary."
          />
          
          <OneLiner text="Freebies aren't gifts. They're conditioning tools." />
          
          <IfSkipped consequences={[
            "Engagement drops",
            "No reinforcement loop"
          ]} />
          
          <MicroBranch branches={[
            { condition: "fan escalates fast", action: "Slow pacing, not energy" }
          ]} />
          
          <WhenThisWorked indicators={[
            "Desire increases",
            "Fan expects continuation"
          ]} />
        </div>
      )
    },
    {
      label: "Step 7: Control seed",
      content: (
        <div className="space-y-4">
          <OneLiner text="Signal that this moment isn't finished" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Control language here creates anticipation and opens the loop for the next PPV.</p>
            
            <p className="text-slate-200">You're telling them, implicitly, that this moment isn't complete yet.</p>
            
            <p className="text-slate-200">That psychological "unfinished loop" is what makes the next PPV feel necessary instead of optional.</p>
          </div>
          
          <CopyPastePrompts 
            structure={[
              "Imply continuation",
              "Create tension",
              "Do not resolve the moment"
            ]}
            prompts={[
              "promise me you wont cum to this next okay? 🙈",
              "hands off for now… i want you edging for what comes next",
              "youre not allowed to finish yet… im not done with you"
            ]}
          />
          
          <OneLiner text="Control creates tension. Tension creates continuation." />
          
          <IfSkipped consequences={[
            "Next PPV feels optional",
            "Momentum drops"
          ]} />
          
          <Checklist 
            items={[
              "You've completed all 7 loop steps",
              "The fan is still actively responding",
              "You've planted the control seed",
              "They're showing signs of continued engagement"
            ]}
            completionMessage="Loop complete! You're now ready to proceed to the second PPV with high probability of conversion."
          />
          
          <WhenThisWorked indicators={[
            "Fan is primed for next unlock",
            "Escalation feels natural"
          ]} />
        </div>
      )
    },
    {
      label: "Visual example",
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 mb-4">
            Here's a real conversation showing the complete flow from PPV framing through control seed. Notice how each step builds on the previous one without letting the conversation reset:
          </p>
          <div className="space-y-4">
            <img 
              src={exampleImage1} 
              alt="Example conversation showing PPV framing and post unlock engagement" 
              className="w-full rounded-lg border border-slate-700"
            />
            <img 
              src={exampleImage2} 
              alt="Example conversation showing visualization escalation and control seed" 
              className="w-full rounded-lg border border-slate-700"
            />
          </div>
          <p className="text-slate-400 text-sm mt-4">
            Study how the writer maintains momentum at every step. The fan never gets a chance to mentally exit the experience. That's the difference between a $15 unlock that ends there and one that leads to $35+ naturally.
          </p>
          
          <OneLiner text="This isn't sexting. This is experience management. You are controlling attention, pacing, imagination, and emotional investment. The content is just the vehicle." />
        </div>
      )
    },
    {
      label: "Core takeaway",
      content: (
        <div className="space-y-4">
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200 font-semibold">STEP 2 is not about selling content.</p>
            <p className="text-slate-200">It is about locking attention, conditioning spending, and preserving momentum.</p>
            <p className="text-slate-200">When done correctly, every step after becomes easier.</p>
          </div>
        </div>
      )
    }
  ]}
  quiz={[
    {
      type: 'scenario',
      question: "You've finished KYC. The fan is warm, engaged, asking questions. You send: 'id LOVE to show you my outfit for the day… and the tail end of an intense orgasm hehe' for $8. They reply: 'damn that sounds hot but $8 is kinda steep for me rn.' What's your best move?",
      options: [
        "Lower the price to $5 to secure the sale and build momentum",
        "Reassure them there's no pressure, pivot back to conversation, offer a free tease later",
        "Send a free preview clip to show them what they're missing",
        "Explain that $8 is already discounted and this is exclusive content"
      ],
      correctAnswer: 1,
      explanation: "Price objections at the first PPV usually mean comfort isn't locked in enough yet, not that $8 is actually too expensive. Lowering price or defending it both create pressure. Pivoting back to conversation maintains frame, removes friction, and allows you to rebuild arousal naturally before offering again.",
      wrongAnswerExplanations: [
        "Lowering price immediately signals desperation and teaches them to negotiate. It also doesn't address the real issue: they're not emotionally invested enough yet to justify ANY spend.",
        "", // Correct answer
        "Free previews can work, but timing matters. Sending one RIGHT after a price objection looks reactive and weak. You'd be rewarding resistance instead of rebuilding comfort first.",
        "Defending the price creates friction and makes it transactional. Even if you're right that $8 is fair, you're now in a negotiation instead of a seduction. Frame is lost."
      ]
    },
    {
      type: 'diagnostic',
      question: "A fan unlocks your first PPV. You immediately send: 'did you like it babe? i have something even hotter if you wanna see 😈 only $20.' They don't respond. What's the core mistake?",
      options: [
        "The second PPV price was too high compared to the first",
        "You didn't reengage with conversation - you made it feel transactional",
        "You should have waited longer before offering more content",
        "The message lacked enough sexual detail to create urgency"
      ],
      correctAnswer: 1,
      explanation: "The issue isn't price, timing, or detail - it's that you turned an intimate moment into a sales pipeline. After unlock, fans need acknowledgment, curiosity, and connection ('omg tell me which part caught your attention?'). Immediately pitching another PPV breaks trust and signals you only care about money.",
      wrongAnswerExplanations: [
        "Price increase can be fine if framed correctly. The real problem is you didn't rebuild arousal or connection first. Going from $8 to $20 isn't inherently bad, but doing it without conversational buffer makes it feel like a cash grab.",
        "", // Correct answer
        "Timing isn't the issue - transition quality is. You could offer content 30 seconds later or 30 minutes later; if you skip the conversational reengagement, it'll still feel wrong.",
        "More sexual detail wouldn't fix the structural problem. You're treating them like a transaction log instead of a person. Fans ghost when they feel used, not when descriptions are too short."
      ]
    },
    {
      type: 'comparison',
      question: "Which post unlock message better sets up the next sale?\n\nA: 'omg hehe tell me honestly… which part caught your attention the most?'\n\nB: 'glad you liked it 😊 i actually just finished filming something way better if you wanna unlock that too'",
      options: [
        "A - it rebuilds conversation and gathers intel on what arouses them",
        "B - it capitalizes on momentum while they're already in buying mode",
        "A - but only if you actually plan to use their answer to customize content",
        "B - because speed matters more than conversation at this stage"
      ],
      correctAnswer: 0,
      explanation: "A keeps the interaction human, learns what they respond to, and maintains arousal without selling. B breaks immersion by immediately pivoting back to transactions. Even if B leads to a sale short term, it trains the fan to see you as a vending machine, not a connection.",
      wrongAnswerExplanations: [
        "", // Correct answer
        "'Buying mode' is a retail mindset that doesn't apply here. Fans aren't shopping for products - they're seeking experiences. Treating unlocks as momentum for more unlocks kills the intimacy that drives long term spending.",
        "You don't need to literally customize content based on every answer. The value is in ASKING, which makes them feel seen and keeps them talking. The intel is a bonus, but the real win is maintaining non transactional energy.",
        "Speed kills intimacy. The goal isn't to extract maximum value per hour, it's to build a client who spends repeatedly over weeks. Slowing down here creates bigger long term revenue than rushing to the next PPV."
      ]
    },
    {
      type: 'scenario',
      question: "After sending your first PPV, the fan unlocks it and says: 'holy fuck that was amazing 🔥🔥 you're so hot.' You want to escalate toward a higher PPV. What's the smartest sequence?",
      options: [
        "Thank them, then immediately introduce the next PPV with a teaser description",
        "Ask a physical/visualization question, give free escalation, then offer custom content",
        "Ride the compliment energy and send a second PPV at the same price to build trust",
        "Tell them you're glad they liked it and suggest they check your pinned posts"
      ],
      correctAnswer: 1,
      explanation: "This follows the escalation sequence: reengage → personalize → visualize → offer. Asking 'how tall are you? im trying to imagine...' shifts into roleplay, free content deepens arousal, and THEN you offer something bigger. This feels natural, not mechanical.",
      wrongAnswerExplanations: [
        "Thanking them is fine, but jumping straight to the next PPV wastes the arousal spike they just gave you. Their compliment is an invitation to deepen the interaction, not close the next sale.",
        "", // Correct answer
        "Sending another PPV at the same price might feel 'safe,' but it's not strategic. You're not trying to build trust through price consistency - you're building it through intimacy and escalation. This move leaves money on the table.",
        "This is passive and low effort. You just had a conversion AND positive feedback. Redirecting them to generic posts kills the personal momentum you've built. Never send engaged fans to mass content when they're primed for 1 on 1 escalation."
      ]
    }
  ]}
/>
