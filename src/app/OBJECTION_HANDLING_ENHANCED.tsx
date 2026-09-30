// COMPLETE ENHANCED OBJECTION HANDLING REPLACEMENT
// This should replace lines 1583-1725 in App.tsx (approximately)

<AccordionCard
  title="OBJECTION HANDLING"
  description="Maintain frame through price resistance"
  icon={<MessageSquare className="size-6" />}
  color="#E5C8A8"
  width="65%"
  content={`

🔍 Purpose

Objections aren't rejections - they're opportunities to rebuild comfort, reframe value, or identify clients who aren't ready yet. Most price resistance isn't actually about money; it's about insufficient emotional investment, unclear value, or lack of trust.




GOAL
            
Maintain frame, rebuild comfort, and reframe value without chasing or defending.`}
  nestedItems={[
    {
      label: "Purpose",
      content: (
        <div className="space-y-4">
          <OneLiner text="How you handle objections determines whether you maintain frame and long term potential" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Your response should never be defensive, desperate, or focused on lowering price.</p>
            
            <p className="text-slate-200">That signals low value and trains clients to negotiate.</p>
            
            <p className="text-slate-200">The goal is to maintain frame, remove pressure, and pivot back to building arousal and connection.</p>
          </div>
          
          <OneLiner text="Strong objection handling separates amateurs who chase from professionals who protect value" />
          
          <IfSkipped consequences={[
            "You signal desperation by defending or lowering price",
            "Clients learn to negotiate",
            "Your value perception drops permanently"
          ]} />
        </div>
      )
    },
    {
      label: "Response 1: 'I don't have money right now'",
      content: (
        <div className="space-y-4">
          <OneLiner text="Remove pressure and pivot to conversation" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This keeps the door open without chasing or defending.</p>
            
            <p className="text-slate-200">If they're genuinely interested, they'll bring it up again or spend when they have funds.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "totally okay babe, theres no pressure at all 😊 i just loved chatting with you and wanted to share. how about we just keep talking for now?",
              "no worries at all! i completely understand. lets just vibe for now… i like talking to you anyway",
              "all good love! money stuff happens. lets just enjoy chatting 💕"
            ]}
          />
          
          <DoNotYet 
            items={[
              "Don't offer a discount",
              "Don't ask when they'll have money",
              "Don't send free previews to convince them"
            ]}
            reason="All of these signal desperation and train them to use money objections to get discounts or free content."
          />
          
          <WhenThisWorked indicators={[
            "They continue engaging warmly",
            "They bring up the content again later",
            "They spend when they're ready without prompting"
          ]} />
        </div>
      )
    },
    {
      label: "Response 2: 'That's too expensive'",
      content: (
        <div className="space-y-4">
          <OneLiner text="Never lower price or justify cost" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Remove friction and maintain the interaction.</p>
            
            <p className="text-slate-200">If they're invested, they'll reconsider. If they're not, you've avoided devaluing yourself.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "i totally get it! no worries at all love 💕 im just happy youre here. lets just vibe for now",
              "all good babe! no pressure ever. i just like our energy anyway",
              "totally understand! lets just keep chatting… i enjoy talking to you regardless"
            ]}
          />
          
          <IfSkipped consequences={[
            "You lower price and signal low value",
            "You defend price and create friction",
            "Frame is broken either way"
          ]} />
          
          <MicroBranch branches={[
            { condition: "they continue chatting warmly", action: "Rebuild arousal naturally and offer again later" },
            { condition: "they go quiet", action: "They weren't invested enough - move on" }
          ]} />
        </div>
      )
    },
    {
      label: "Response 3: 'Can you send a preview first?'",
      content: (
        <div className="space-y-4">
          <OneLiner text="Maintain value without being rude" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Offering previews after objections signals desperation.</p>
            
            <p className="text-slate-200">Instead, reframe it as protecting their experience while subtly referencing their preferences.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "i dont usually do previews because it kinda ruins the surprise 🙈 but i promise you wont be disappointed based on what you like",
              "i prefer keeping it as a full experience rather than spoiling it hehe… but trust me it matches your vibe perfectly",
              "previews kinda kill the anticipation for me 🙈 but based on what you told me you like, i know this will hit"
            ]}
          />
          
          <DoNotYet 
            items={[
              "Don't send a preview after they ask",
              "Don't justify why you don't do previews extensively",
              "Don't make them feel bad for asking"
            ]}
            reason="Sending previews trains them to always ask. Over explaining breaks frame. Making them feel bad creates friction."
          />
          
          <WatchFor signals={[
            "They accept your reframe and unlock anyway",
            "They continue chatting without pushing",
            "They respect your boundary"
          ]} />
        </div>
      )
    },
    {
      label: "Response 4: 'I already spent a lot today'",
      content: (
        <div className="space-y-4">
          <OneLiner text="Acknowledge spending without pressure" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This makes them feel appreciated, removes guilt, and keeps them engaged.</p>
            
            <p className="text-slate-200">Often, they'll spend again later when they feel less pressure.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "omg no i totally understand! you've already been so sweet to me 🥰 lets just chat and see where the vibe goes",
              "youre literally the best already! no pressure at all… i just like talking to you anyway",
              "honestly youve been amazing to me already 💕 lets just enjoy chatting for now"
            ]}
          />
          
          <WhenThisWorked indicators={[
            "They feel appreciated, not pressured",
            "They continue engaging",
            "They spend again when ready"
          ]} />
        </div>
      )
    },
    {
      label: "Response 5: 'Maybe later'",
      content: (
        <div className="space-y-4">
          <OneLiner text="Never chase 'maybe later'" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Accept it, remove pressure, and continue the interaction.</p>
            
            <p className="text-slate-200">If they're genuinely interested, they'll return to it. If not, you've avoided looking desperate.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "of course! no rush at all 😊 im just enjoying talking to you anyway",
              "totally fine babe! whenever youre ready or not at all… no pressure",
              "all good! lets just keep chatting 💕"
            ]}
          />
          
          <DoNotYet 
            items={[
              "Don't ask 'are you sure?'",
              "Don't offer discounts to convert the maybe",
              "Don't follow up asking if they're ready yet"
            ]}
            reason="All of these break frame and signal desperation. 'Maybe later' is a soft no - respect it and move on."
          />
        </div>
      )
    },
    {
      label: "Response 6: Silence after sending PPV",
      content: (
        <div className="space-y-4">
          <OneLiner text="Don't double text or ask if they saw it" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">Wait 10 to 15 minutes, then pivot back to conversation.</p>
            
            <p className="text-slate-200">This shows you're not just waiting for a transaction.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "anyway, i was thinking about what you said earlier about [KYC detail]… that was actually really interesting",
              "random thought but [reference something from earlier conversation]… did you ever figure that out?",
              "okay unrelated but i just remembered you said [KYC detail] and i wanted to ask you more about that"
            ]}
          />
          
          <IfSkipped consequences={[
            "You chase with 'did you see it?' and look desperate",
            "Awkward pressure builds",
            "They ghost permanently"
          ]} />
          
          <Checklist 
            items={[
              "PPV was sent",
              "10-15 minutes have passed",
              "You've pivoted to conversation naturally",
              "No mention of the unanswered offer"
            ]}
            completionMessage="Frame maintained! If they're interested, they'll return to it."
          />
        </div>
      )
    },
    {
      label: "Response 7: 'Can you lower the price?'",
      content: (
        <div className="space-y-4">
          <OneLiner text="Firm but friendly - never negotiate price" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">This trains clients to always ask for discounts and devalues your content.</p>
            
            <p className="text-slate-200">Instead, reframe the interaction as enjoyable regardless of spending.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "i wish i could but i dont really do discounts 🙈 it wouldnt be fair to everyone else. but theres no pressure! we can just keep chatting",
              "i keep my prices consistent for everyone babe! but no worries… lets just vibe regardless",
              "i dont do discounts but i totally understand! lets just enjoy talking 💕"
            ]}
          />
          
          <DoNotYet 
            items={[
              "Don't negotiate even a little",
              "Don't offer 'just this once' discounts",
              "Don't ask what price would work for them"
            ]}
            reason="Any negotiation trains them and future clients to always ask for discounts. Protect your value absolutely."
          />
        </div>
      )
    },
    {
      label: "When to walk away",
      content: (
        <div className="space-y-4">
          <OneLiner text="Don't waste energy on nonbuyers" />
          
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200">If after 2 to 3 objections they still haven't unlocked anything and aren't reengaging in conversation, they're not a buyer.</p>
            
            <p className="text-slate-200">Gracefully disengage and focus energy on engaged clients who show investment potential.</p>
          </div>
          
          <CopyPastePrompts 
            prompts={[
              "youre sweet! im gonna go for now but feel free to message me anytime 💕",
              "okay babe i gotta run but it was nice chatting! hit me up whenever 😊",
              "im gonna hop off for now but message me anytime you want! 💕"
            ]}
          />
          
          <WatchFor signals={[
            "Multiple objections without unlocks",
            "Minimal conversation reengagement",
            "Consistent price focus instead of connection focus"
          ]} />
          
          <Checklist 
            items={[
              "2-3 objections have occurred",
              "No unlocks despite good framing",
              "Conversation isn't flowing naturally",
              "You've gracefully disengaged"
            ]}
            completionMessage="Energy protected! Focus on clients who show real investment potential."
          />
        </div>
      )
    },
    {
      label: "Core takeaway",
      content: (
        <div className="space-y-4">
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="text-slate-200 font-semibold">Objections are data, not personal rejection.</p>
            <p className="text-slate-200">How you respond determines whether you maintain high value positioning or train clients to negotiate.</p>
            <p className="text-slate-200">Never chase, defend, or discount. Pivot to conversation and let them self select.</p>
          </div>
        </div>
      )
    }
  ]}
  quiz={[
    {
      type: 'scenario',
      question: "You offer a $15 PPV after solid KYC. The fan replies: 'that's kinda expensive for me rn.' What's the best response?",
      options: [
        "'i can do $10 if that helps?'",
        "'totally okay babe, no pressure at all 😊 how about we just keep talking for now?'",
        "'its only $15 and its exclusive content just for you'",
        "Don't respond to the objection, just send a preview clip to show value"
      ],
      correctAnswer: 1,
      explanation: "This removes pressure, maintains frame, and pivots back to conversation. Price objections usually mean comfort isn't locked in yet, not that the actual number is wrong. Lowering price or defending it both signal desperation. Pivoting back to conversation keeps the relationship alive.",
      wrongAnswerExplanations: [
        "Lowering price immediately teaches them to negotiate and signals your content isn't worth the original price. It also doesn't address the real issue: they're not emotionally invested enough yet to justify ANY spend.",
        "", // Correct answer
        "Defending price creates friction and makes it transactional. You're now in a negotiation instead of a seduction. Even if your logic is sound, you've lost frame by explaining instead of leading.",
        "Sending a preview after objection looks reactive and desperate. You're rewarding resistance, which trains them to always ask for free content before paying. It also devalues your content by suggesting it needs proof."
      ]
    },
    {
      type: 'diagnostic',
      question: "A fan says 'maybe later' after you offer a PPV. You respond: 'are you sure? its really good content and i made it just for you.' They ghost. What went wrong?",
      options: [
        "You pressured them after they gave a soft no, which broke frame and made you look desperate",
        "You should have offered a discount to convert the 'maybe later' into a sale",
        "You mentioned making it 'just for you' which created guilt and pressure",
        "You should have sent it anyway and let them decide after seeing it"
      ],
      correctAnswer: 0,
      explanation: "'Maybe later' is a soft no. Pushing after that signals desperation and breaks frame. The correct move is to accept it gracefully, remove pressure, and pivot back to conversation. If they're interested, they'll return to it. If not, chasing them ensures they ghost.",
      wrongAnswerExplanations: [
        "", // Correct answer
        "Offering discounts after objections is the worst possible move. It signals desperation, trains them to negotiate, and devalues your content. It also doesn't address the real issue: lack of emotional investment.",
        "The guilt angle is clumsy, but the core issue is chasing after a soft no. Even without the 'just for you' language, asking 'are you sure?' breaks frame. The phrasing is a symptom, not the disease.",
        "Sending content without payment is a massive frame break and signals zero value for your work. This guarantees they won't pay and trains them to expect free content. Never do this."
      ]
    },
    {
      type: 'comparison',
      question: "Fan says: 'can you send a preview first?' Which response better maintains value?\n\nA: 'i dont usually do previews because it ruins the surprise 🙈 but i promise you wont be disappointed'\n\nB: 'sure! let me send you a quick clip so you can see what youre getting'",
      options: [
        "A - it maintains value and reframes previews as diminishing the experience",
        "B - it removes friction and makes them more likely to buy after seeing quality",
        "A - but only if they've already spent money before",
        "B - because transparency builds trust and reduces buyer hesitation"
      ],
      correctAnswer: 0,
      explanation: "A protects value by reframing previews as negative (ruins the surprise) while maintaining confidence in your content. B signals desperation and trains them to always expect free content before paying. At best, you convert this one sale but create a bad precedent.",
      wrongAnswerExplanations: [
        "", // Correct answer
        "B might convert this sale, but it trains them and future clients to always demand previews. You're solving a short term problem by creating a long term one. Removing friction by giving away free content isn't strategy - it's desperation.",
        "A works regardless of payment history. The principle is universal: maintain value perception and never give away content to overcome objections. Frame matters more than history.",
        "Transparency isn't the issue - frame is. B isn't about transparency, it's about giving free content to overcome objections, which signals your content needs proof to justify payment. Confidence builds trust, not free samples."
      ]
    },
    {
      type: 'scenario',
      question: "You sent a PPV 10 minutes ago. The fan read it but didn't respond. What's the best move?",
      options: [
        "Send: 'did you see my message babe?'",
        "Wait another 10 to 15 min, then pivot to conversation: 'anyway, i was thinking about what you said earlier about [KYC detail]'",
        "Send a followup: 'no pressure if youre not interested! just wanted to share'",
        "Send a preview clip to reignite interest"
      ],
      correctAnswer: 1,
      explanation: "This removes the pressure of the unanswered offer and shows you value the conversation beyond transactions. It rebuilds connection naturally without chasing. If they're interested in the PPV, they'll return to it. If not, you've maintained frame.",
      wrongAnswerExplanations: [
        "This is chasing and signals desperation. It also puts them on the spot, which creates pressure and makes them more likely to ghost. Never double text about an unanswered offer.",
        "", // Correct answer
        "This acknowledges the silence, which draws attention to the rejection. Better to pivot naturally without referencing the unanswered offer. Saying 'no pressure' after they've already ignored it makes the pressure more obvious.",
        "Sending previews after silence is reactive and desperate. You're rewarding nonresponse with free content, which trains them to ignore offers and wait for previews. This is a losing strategy."
      ]
    }
  ]}
/>