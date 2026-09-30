// COMPLETE ENHANCED POST CONVERSION RETENTION REPLACEMENT
// This should replace lines 1727-1876 in App.tsx (approximately)

<AccordionCard
  title="POST CONVERSION RETENTION"
  description="Build loyalty and repeat revenue"
  icon={<RefreshCw className="size-6" />}
  color="#7A6A5D"
  width="75%"
  content={`

🔍 Purpose

Post conversion retention is where most creators fail because they treat the sale as the end goal instead of the beginning of a long term relationship. The period immediately after a purchase is when clients are most emotionally open, most receptive to continued engagement, and most likely to spend again if handled correctly.




GOAL
            
Maintain connection, build loyalty, and set up future conversions without immediate selling.`}
  nestedItems={[
    {
      label: "Purpose",
      content: (
        <div className="space-y-4">
          <OneLiner text="One time buyers stay one time buyers unless you execute retention" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">The work doesn't stop after the unlock - in fact, it intensifies.</p>
            
            <p className="text-slate-200">Clients who feel valued beyond their wallets become loyal, high LTV fans who spend repeatedly over weeks and months.</p>
            
            <p className="text-slate-200">This requires strategic aftercare, periodic checkins, and relationship maintenance that keeps you top of mind.</p>
          </div>
          
          <OneLiner text="Strong retention separates grinders from builders of sustainable income" />
          
          <IfSkipped consequences={[
            "One time buyers never return",
            "You constantly grind for new clients",
            "Revenue is unstable and exhausting"
          ]} />
          
          <WatchFor signals={[
            "This is where the real money lives",
            "Repeat buyers require less effort to convert",
            "Trust and arousal are already established"
          ]} />
        </div>
      )
    },
    {
      label: "Step 1: Immediate aftercare (0-5 min post unlock)",
      content: (
        <div className="space-y-4">
          <OneLiner text="Don't let conversation end with the transaction" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Immediate aftercare maintains the emotional high.</p>
            
            <p className="text-slate-200">Makes them feel valued beyond the sale and keeps the interaction alive.</p>
            
            <p className="text-slate-200">This is critical for future conversions.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "okay so be honest… how are you feeling right now? 😊",
              "that was intense hehe… you handled that really well",
              "mm so tell me… what did that do to you?",
              "okay but real talk… did that live up to what you were hoping for?"
            ]}
          />
          
          <IfSkipped consequences={[
            "Conversation dies after transaction",
            "They feel used, not valued",
            "No foundation for future spending"
          ]} />
          
          <Checklist 
            items={[
              "They unlocked the content",
              "You sent aftercare within 5 minutes",
              "You asked an engaging question",
              "Conversation is continuing"
            ]}
            completionMessage="Aftercare complete! Foundation set for retention."
          />
        </div>
      )
    },
    {
      label: "Step 2: Delayed checkin (2-4 hours later)",
      content: (
        <div className="space-y-4">
          <OneLiner text="Show you remember them beyond the transaction" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Reaching back out later shows you value the interaction beyond money.</p>
            
            <p className="text-slate-200">This creates emotional stickiness and keeps you top of mind.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "heyy just wanted to check in… did you end up finishing to that or are you still edging for me? 🙈",
              "ive been thinking about our chat earlier… youre actually really fun to talk to",
              "okay random but i cant stop thinking about what you said earlier… that was actually hot",
              "hey! hope your day is going well… i genuinely enjoyed our vibe earlier 😊"
            ]}
          />
          
          <WhenThisWorked indicators={[
            "They respond warmly",
            "They reference the earlier interaction",
            "They seem happy you reached out"
          ]} />
        </div>
      )
    },
    {
      label: "Step 3: Next day reengagement",
      content: (
        <div className="space-y-4">
          <OneLiner text="Signal they're not forgotten" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Next day messages signal that they're not forgotten.</p>
            
            <p className="text-slate-200">Keep it light, flirty, and nontransactional.</p>
            
            <p className="text-slate-200">This maintains the connection without pressure and sets up future spending.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "good morning babe 😊 hope you slept well… i definitely had some interesting dreams after our chat yesterday hehe",
              "morning! honestly cant stop thinking about how fun our conversation was yesterday",
              "hey you! hope youre having a good day… yesterday was actually really nice 💕",
              "good morning 😊 just wanted to say i really enjoyed chatting with you yesterday"
            ]}
          />
          
          <DoNotYet 
            items={[
              "Don't immediately sell after the greeting",
              "Don't reference only the transaction",
              "Don't make it feel obligatory"
            ]}
            reason="The goal is to maintain warmth and connection, not jump back into selling. Let the conversation flow naturally."
          />
        </div>
      )
    },
    {
      label: "Step 4: Value add content (free)",
      content: (
        <div className="space-y-4">
          <OneLiner text="Prevent every interaction from costing money" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Occasional free content between paid offers maintains arousal and rewards loyalty.</p>
            
            <p className="text-slate-200">This builds goodwill that converts to higher spending later.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "was just thinking about you… wanted to share this 💕",
              "okay so this made me think of you hehe… no charge just wanted you to have it",
              "you were on my mind so i wanted to send you something special 😊",
              "this is just for you because i appreciate you 💕"
            ]}
          />
          
          <OneLiner text="Strategic freebies aren't losses - they're investments in future revenue" />
          
          <WatchFor signals={[
            "They express gratitude and appreciation",
            "They reciprocate with engagement",
            "Future paid offers convert easier"
          ]} />
        </div>
      )
    },
    {
      label: "Step 5: Soft reactivation (3-7 days post purchase)",
      content: (
        <div className="space-y-4">
          <OneLiner text="Revive quiet clients with emotional framing, not selling" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">For clients who went quiet after purchase, soft reengagement with emotional framing can revive the connection.</p>
            
            <p className="text-slate-200">If they respond warmly, you can escalate. If not, let them go.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "i know its been a few days but i cant stop thinking about how good our vibe was… miss chatting with you honestly",
              "hey! been a minute but i genuinely enjoyed our energy… hope youre doing well 💕",
              "okay so random but you popped into my head today… our chat was actually really fun",
              "its been a few days and i realized i miss talking to you hehe… hows everything going?"
            ]}
          />
          
          <MicroBranch branches={[
            { condition: "they respond warmly", action: "Rebuild connection and escalate when natural" },
            { condition: "they respond coldly or briefly", action: "Keep it light and don't push" },
            { condition: "no response", action: "Try once more in 7 days, then move on" }
          ]} />
        </div>
      )
    },
    {
      label: "Step 6: Exclusive updates for spenders",
      content: (
        <div className="space-y-4">
          <OneLiner text="Reward previous spending with preferential treatment" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Preferential treatment for previous spenders makes them feel VIP.</p>
            
            <p className="text-slate-200">This increases likelihood of repeat purchases.</p>
            
            <p className="text-slate-200">They've already proven they'll spend - reward that behavior to reinforce it.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "hey! so i dont usually do this but since you were so sweet to me last time… i wanted to give you first access to something im making",
              "okay so youre literally one of my favorite people to talk to… wanna see something before anyone else?",
              "you were so good to me before so i wanted to make sure you got this first 💕",
              "since you were so sweet last time… i wanted you to have early access to this"
            ]}
          />
          
          <WhenThisWorked indicators={[
            "They feel special and valued",
            "Conversion rate on offers increases",
            "They spend more frequently"
          ]} />
        </div>
      )
    },
    {
      label: "Step 7: Relationship maintenance (ongoing)",
      content: (
        <div className="space-y-4">
          <OneLiner text="Keep relationships warm without always selling" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Continue light conversation every few days without always selling.</p>
            
            <p className="text-slate-200">This keeps the relationship warm and low pressure.</p>
            
            <p className="text-slate-200">When you do offer content, it feels natural instead of like you only message when you want money.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "hows your week going babe?",
              "random question but [something from KYC]… did you ever end up doing that?",
              "hey you! just wanted to check in and see how things are going 😊",
              "thinking about you! hows life treating you?"
            ]}
          />
          
          <OneLiner text="The ratio should be 3:1 conversation to selling for maximum retention" />
          
          <IfSkipped consequences={[
            "Relationship feels transactional",
            "They only hear from you when you're selling",
            "Trust and warmth evaporate"
          ]} />
        </div>
      )
    },
    {
      label: "Step 8: Win back for ghosted clients",
      content: (
        <div className="space-y-4">
          <OneLiner text="One final soft reengagement, then move on" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">If they went cold after spending, try one final soft reengagement after 1 to 2 weeks.</p>
            
            <p className="text-slate-200">If no response, move on. Don't chase beyond this.</p>
            
            <p className="text-slate-200">Your energy is better spent on active clients.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "hey! i know we havent talked in a bit but i genuinely enjoyed our time together… if youre ever in the mood to chat again im around 💕",
              "its been a minute but i wanted to reach out… i really did enjoy talking to you. if youre around id love to chat again 😊",
              "i know its been a while but you were actually really cool to talk to… if you ever wanna chat again im here",
              "hey! just wanted to say i enjoyed our vibe… if you ever want to reconnect im around 💕"
            ]}
          />
          
          <DoNotYet 
            items={[
              "Don't guilt them for ghosting",
              "Don't ask what went wrong",
              "Don't offer discounts to bring them back"
            ]}
            reason="Keep it warm and no pressure. If they don't respond to this, they're done. Accept it and focus energy elsewhere."
          />
          
          <Checklist 
            items={[
              "Client has been quiet for 1-2 weeks",
              "You've sent one final warm reengagement",
              "Message is no pressure and friendly",
              "You're prepared to move on if no response"
            ]}
            completionMessage="Final reengagement sent! If no response, invest energy in active clients."
          />
        </div>
      )
    },
    {
      label: "Core takeaway",
      content: (
        <div className="space-y-4">
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200 font-semibold">Retention is what separates unstable income from sustainable revenue.</p>
            <p className="text-slate-200">A client who spends $50 once is worth far less than a client who spends $20 five times.</p>
            <p className="text-slate-200">Invest in relationships, not transactions. The compounding returns are exponential.</p>
          </div>
        </div>
      )
    }
  ]}
  quiz={[
    {
      type: 'scenario',
      question: "A fan just unlocked a $35 PPV and sent: 'holy fuck that was amazing 🔥' What's your best immediate response to maximize retention?",
      options: [
        "'im so glad you liked it! let me know if you ever want more content'",
        "'okay so be honest… how are you feeling right now? 😊'",
        "'thank you babe! check your DMs tomorrow for something special'",
        "Like their message and wait for them to reengage first"
      ],
      correctAnswer: 1,
      explanation: "This maintains the emotional high, keeps the conversation going, and makes them feel valued beyond the transaction. It's personal, curious, and nontransactional. The other options either sell too soon, make promises that create pressure, or passively disengage.",
      wrongAnswerExplanations: [
        "This immediately pivots back to selling ('let me know if you ever want more') which breaks the intimacy of the moment and makes them feel like the interaction was transactional. You just had a conversion - don't kill it by chasing the next one.",
        "A maintains intimacy and creates anticipation while removing performance pressure. It keeps the dynamic alive and positions you for continued engagement without immediately selling again. It's warm, playful, and non transactional.",
        "Making promises ('something special tomorrow') creates expectations and pressure. Better to maintain the present moment connection than create future obligations. Also, you're still ending the current conversation instead of extending it.",
        "Passive responses after major purchases feel cold and transactional. They just gave you money and positive feedback - ignoring that momentum wastes retention potential. Always reengage after unlocks."
      ]
    },
    {
      type: 'diagnostic',
      question: "A client spent $98 across three PPVs over two days. You sent aftercare immediately after each unlock. Now it's day 3 and they haven't messaged. What's the best move?",
      options: [
        "Send: 'hey babe! i have new content if you wanna unlock'",
        "Send: 'good morning 😊 hope youre having a great day… been thinking about our chats'",
        "Wait for them to reach out first - they know where to find you",
        "Send a free tease with 'miss you 💕'"
      ],
      correctAnswer: 1,
      explanation: "This reengages without selling and maintains the emotional connection. After significant spending, clients need breathing room before more offers, but you don't want to go completely silent either. Light, friendly checkins keep you top of mind without pressure.",
      wrongAnswerExplanations: [
        "They just spent $98 in two days. Leading with selling after that makes you look greedy and breaks the relationship. They need emotional connection and space, not immediate upsells. This move burns the client.",
        "", // Correct answer
        "Waiting passively wastes retention potential. They might be busy, might be processing the spending, or might be waiting for you to reengage. Don't assume silence means disinterest - reengage warmly and gauge response.",
        "A free tease with 'miss you' can work, but it's slightly manipulative without conversational context. Better to lead with genuine checkin first, then offer free content as a natural extension if the vibe is good."
      ]
    },
    {
      type: 'comparison',
      question: "A fan spent $55 three days ago and hasn't messaged since. Which reengagement works better?\n\nA: 'i know its been a few days but i cant stop thinking about how good our vibe was… miss chatting with you'\n\nB: 'hey! just wanted to let you know i have new content available if youre interested'",
      options: [
        "A - it's emotionally driven and focuses on connection, not selling",
        "B - it's direct and gives them a clear action to take",
        "A - but only if they were highly engaged during the original conversation",
        "B - because being clear about intent respects their time"
      ],
      correctAnswer: 0,
      explanation: "A focuses on relationship and emotional connection, which is what brings clients back long term. B is pure transaction and signals you only care about selling, which makes them less likely to respond. After silence, rebuilding connection comes before selling.",
      wrongAnswerExplanations: [
        "", // Correct answer
        "Directness isn't always good. B gives them a clear action (spend money), which creates immediate pressure after they've been quiet. Most people won't respond to this because it feels like spam. You need to rebuild warmth first.",
        "Emotional reengagement works regardless of previous engagement level, as long as they spent. The act of spending proves some level of investment. If anything, clients who were less chatty need MORE emotional warmth to bring them back.",
        "This isn't about respecting time - it's about maximizing response rate. B gets ignored because it's transactional. A gets responses because it appeals to emotions and connection. 'Clear intent' is a corporate concept that doesn't apply to intimacy based selling."
      ]
    },
    {
      type: 'scenario',
      question: "A client spent $220 total over one week, then went completely quiet for 10 days. You sent one soft reengagement on day 7 with no response. What now?",
      options: [
        "Send one final message: 'hey! genuinely enjoyed our time… if youre around im here 💕' then move on",
        "Send a free preview of your best content to reignite interest",
        "Keep trying every few days - they spent too much money to give up on",
        "Remove them from your focus entirely and invest energy in active clients"
      ],
      correctAnswer: 0,
      explanation: "One final soft attempt respects the relationship while protecting your energy. If they don't respond to this, they've either moved on, hit their spending limit, or lost interest. Further chasing looks desperate and wastes time better spent on engaged clients.",
      wrongAnswerExplanations: [
        "", // Correct answer
        "Sending free content to ghosted clients rarely works and sets a bad precedent. If emotional reengagement didn't work, free content won't either. You're rewarding silence, which is the opposite of what you want to train.",
        "Sunk cost fallacy. Past spending doesn't obligate you to chase forever. They're signaling disinterest through silence. Continued pursuit after two attempts looks desperate and damages your value. Let them go.",
        "Too harsh. One final warm attempt costs minimal effort and sometimes works. Going from soft reengagement to complete removal skips a step. Give them one last chance, then move on if no response."
      ]
    }
  ]}
/>