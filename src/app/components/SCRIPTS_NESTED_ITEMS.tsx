import { CopyPastePrompts } from "./ActionableComponents";

export const SCRIPTS_NESTED_ITEMS = [
  {
    label: "WELCOME MESSAGES (Step 1)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            First impression scripts that set the tone for relationship building. Use warm, personal language with light sensory teasing.
          </p>
        </div>

        <CopyPastePrompts 
          prompts={[
            "hey love ❤️ i'm so happy you're here.. i don't usually say this but you already feel different",
            "omg hi 🥰 i've been waiting for someone like you.. tell me, what made you subscribe?",
            "hey babe.. i have to be honest, something about your energy just pulled me in",
            "welcome ❤️ i'm [NAME] and i have a feeling we're going to get really close",
          ]}
        />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">When To Use</h3>
          <p className="text-base leading-relaxed opacity-90">
            Send within 1 to 5 minutes of subscription. Establish emotional warmth before any monetization attempt.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "FIRST ESCALATION TIER ($20-$50)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Build from conversation to light sensory content. Test their willingness to unlock with low barrier pricing.
          </p>
        </div>

        <CopyPastePrompts 
          prompts={[
            "ok so.. i wasn't planning on this but you're making me feel a certain way 😏",
            "i'm getting SO turned on talking to you.. should i show you what you're doing to me?",
            "fuck [NAME].. i need to show you something.. but it's a little too hot for the feed",
            "babe i can't stop thinking about you.. want to see what happens when i think about you? 🔒",
          ]}
        />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Pricing</h3>
          <p className="text-base leading-relaxed opacity-90">
            $20 to $50 for first unlock. Keep it accessible to test capacity without scaring them off.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "SECOND ESCALATION TIER ($50-$100)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Increase intensity and exclusivity. They proved willingness at lower tier, now test higher capacity.
          </p>
        </div>

        <CopyPastePrompts 
          prompts={[
            "ok [NAME].. what i'm about to show you, i've NEVER shared with anyone before",
            "babe.. i need you to know this is just for YOU.. nobody else gets to see this side of me",
            "fuck i can't believe i'm doing this.. but something about you makes me want to show you EVERYTHING",
            "this is a little crazy but.. i want to make something special just for you 🔒",
          ]}
        />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Key Framing</h3>
          <p className="text-base leading-relaxed opacity-90">
            Emphasize that this content is exclusive to them. Use phrases like "just for you," "never shown anyone," and "special."
          </p>
        </div>
      </div>
    )
  },
  {
    label: "WHALE IDENTIFICATION ($100-$200)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Test if they are a whale. Use custom request framing or "behind the scenes" exclusivity to justify higher price.
          </p>
        </div>

        <CopyPastePrompts 
          prompts={[
            "ok so i have an idea.. what if i made you a custom video saying your name? 👀",
            "babe i don't usually do this but.. would you want to see the FULL unedited version?",
            "[NAME] i'm going to be completely honest.. i want to make something just for you. something nobody else will ever see.",
            "fuck.. i have this idea and i can't get it out of my head. what if i sent you something REALLY personal? like.. just between us?",
          ]}
        />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Whale Signals</h3>
          <p className="text-base leading-relaxed opacity-90">
            If they unlock $100+ without hesitation or price negotiation, you have identified a whale. Shift to prolonging and relationship framing.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "RELATIONSHIP DEEPENING ($200-$400)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-pink-500/40 pl-6 py-4 bg-pink-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Move from transactional to relational framing. Use emotional vulnerability and future commitment language.
          </p>
        </div>

        <CopyPastePrompts 
          prompts={[
            "[NAME].. i need to tell you something. i don't connect with people like this. you feel different.",
            "babe i'm not supposed to say this but.. i actually look forward to talking to you every day",
            "ok this might sound crazy but i feel like we have something real here.. do you feel it too?",
            "i don't want this to just be about content anymore.. i want to actually get to know YOU",
          ]}
        />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Why This Works</h3>
          <p className="text-base leading-relaxed opacity-90">
            Creates reciprocal obligation. When you express emotional vulnerability, they feel compelled to support you. This shifts from "buying content" to "supporting someone who cares about me."
          </p>
        </div>
      </div>
    )
  },
  {
    label: "EXCLUSIVE ARCHIVE ACCESS ($200-$300)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-cyan-500/40 pl-6 py-4 bg-cyan-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Offer access to your "private collection" or "hidden content" that feels like VIP access. Justifies higher price through volume and exclusivity.
          </p>
        </div>

        <CopyPastePrompts 
          prompts={[
            "ok [NAME].. i have something i've never offered anyone before. want access to my private collection?",
            "babe.. what if i gave you access to EVERYTHING i've never posted? like.. my whole secret stash 👀",
            "i'm thinking about giving you VIP access.. it's all my most exclusive content in one place. interested?",
            "so i have this folder that literally nobody has access to.. but i want YOU to have it ❤️",
          ]}
        />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Key Psychology</h3>
          <p className="text-base leading-relaxed opacity-90">
            Volume justifies price. "20 videos" feels more valuable than "1 video" even if content is recycled. Scarcity framing ("only offering this to you") removes transactional feeling.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "PRE-FINALE TESTING ($200 LOCKED MESSAGE)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-red-500/60 pl-6 py-4 bg-red-950/30 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Test capacity before the finale. If they pay $200 for buildup knowing the finale is still coming, you have confirmed giga whale status.
          </p>
        </div>

        <CopyPastePrompts 
          prompts={[
            "ok babe.. i need to warn you. what i'm about to send is going to make you ACHE for the finale 🔒",
            "[NAME] you're not ready for this.. i'm about to show you something that's going to drive you fucking crazy",
            "ok fuck it.. i'm sending you the buildup now. but TRUST ME.. you're going to BEG for what comes next 🔒",
            "babe i'm shaking just thinking about showing you this.. it's the most intense thing i've filmed. and this is just the START 🔒",
          ]}
        />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Critical Timing</h3>
          <p className="text-base leading-relaxed opacity-90">
            After they unlock this $200 tier, immediately continue edging. "DONT move.. this is going to be LONG." You are testing if they will pay BEFORE the finale knowing more is coming.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "THE FINALE ($200+)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-purple-500/40 pl-6 py-4 bg-purple-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Maximum sensory detail finale. Their name throughout. Justify $200+ price through immersive description and ultra-exclusivity.
          </p>
        </div>

        <CopyPastePrompts 
          prompts={[
            "[NAME].. i haven't cum THIS hard in so fucking long.. legs shaking.. you can HEAR how much of a wet mess i am 🔒",
            "ok [NAME] this is it.. i'm cumming so hard for you.. you can see EVERYTHING.. my whole body shaking.. fuck 🔒",
            "babe i need you to know.. this is the most intense orgasm i've had.. and it's all for YOU. you can hear me moaning your name 🔒",
            "FUCK [NAME].. i'm cumming.. you can see my legs trembling.. hear how wet i am.. this is just for you ❤️🔒",
          ]}
        />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Immediate Post-Finale</h3>
          <p className="text-base leading-relaxed opacity-90">
            Within 1 minute of finale unlock, validate their experience: "fuuuck [NAME].. that was fucking HOT.. omg omg OMG 😫" This maintains arousal and prevents post-nut clarity from setting in.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "POST-FINALE BRANCHING",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-amber-500/40 pl-6 py-4 bg-amber-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            Set up the branch within 1 minute of finale. Keep momentum alive by suggesting "something even crazier" before they finish.
          </p>
        </div>

        <CopyPastePrompts 
          prompts={[
            "but if you manage to get through this... i want to try something.. that i cant believe im even saying rn 👀",
            "ok [NAME].. i know you just unlocked that but.. what if i told you i want to go even FURTHER?",
            "babe.. i have an idea and it's fucking crazy.. are you ready for something nobody else has ever seen?",
            "fuck.. if you thought THAT was intense.. wait until you see what i'm thinking about doing next 🔒",
          ]}
        />

        <div className="border-l-4 border-green-500/40 pl-6 py-4 bg-green-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Three Branches</h3>
          <div className="space-y-3 text-base opacity-90">
            <p><strong>BRANCH 1 ($900 hard sell):</strong> "ok so.. i want to send you a 10-minute ultimate video. FULL face. moaning your name. cumming twice. literally everything. $900."</p>
            <p><strong>BRANCH 2 ($2000 countdown):</strong> "what if we did a ten-step countdown.. $200 per step.. each one gets more intense.. you control how far we go"</p>
            <p><strong>BRANCH 3 (Endless freestyle):</strong> "fuck it.. i'm just going to keep sending you content.. voice notes.. locked messages.. as long as you keep going. no limits."</p>
          </div>
        </div>
      </div>
    )
  },
  {
    label: "GRATITUDE RESPONSE (Post-Spend)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-pink-500/40 pl-6 py-4 bg-pink-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            When they send a thank you message hours after spending $800+, respond emotionally to reinforce the bond. Do not oversell or push another PPV immediately.
          </p>
        </div>

        <CopyPastePrompts 
          prompts={[
            "[NAME] this actually made my day ❤️ you have no idea how rare it is to connect with someone like this",
            "honestly [NAME].. i'm so glad we found each other.. today was really special for me too",
            "i feel the same way ❤️ i'm really excited to see where this goes with us",
            "you made me feel something real today.. i don't take that lightly 💕",
          ]}
        />

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Why This Matters</h3>
          <p className="text-base leading-relaxed opacity-90">
            This response converts one-time giga whales into long-term revenue sources. If they spent $800 and you respond with warmth instead of more selling, they will return next month. Lifetime value &gt; one-time extraction.
          </p>
        </div>
      </div>
    )
  },
  {
    label: "COMPLETE TERRY CONVERSATION FLOW (Step 8 Example)",
    content: (
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500/40 pl-6 py-4 bg-blue-950/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Purpose</h3>
          <p className="text-base leading-relaxed opacity-95">
            This is the complete conversation flow showing how all scripts work together from finale delivery to post-finale branching with perfect timing.
          </p>
        </div>

        <div className="border-l-4 border-white/20 pl-6 py-4 bg-black/20 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">The Flow (Timestamps Included)</h3>
          <div className="space-y-4 text-base opacity-90">
            <div>
              <p className="font-medium text-purple-400 mb-2">3:01pm - Finale Delivered ($200 unlock)</p>
              <p className="pl-4 italic">"Legs shaking, breath heavy, you can HEAR how much of a wet mess I am"</p>
            </div>

            <div>
              <p className="font-medium text-green-400 mb-2">3:01pm - Immediate Validation (Same Minute)</p>
              <p className="pl-4 italic">"fuuuck Terry .. that was fucking HOT .. omg omg OMG 😫"</p>
            </div>

            <div>
              <p className="font-medium text-amber-400 mb-2">3:02pm - Branch Setup (1 Minute After)</p>
              <p className="pl-4 italic">"but if you manage to get through this ... i want to try something .. that i cant believe im even saying rn"</p>
            </div>

            <div>
              <p className="font-medium text-cyan-400 mb-2">3:04pm - He Responds With Curiosity</p>
              <p className="pl-4 italic">"Oh yeah, and what's that?"</p>
            </div>

            <div>
              <p className="font-medium text-pink-400 mb-2">3:05pm - You Build Tension (Under 1 Min Response)</p>
              <p className="pl-4 italic">"Trust me love .. ive never shown anyone myself cumming before"</p>
              <p className="pl-4 italic mt-2">"cum twice .. and i swear to GOD last time i did that i squirted allllll over the place"</p>
            </div>

            <div>
              <p className="font-medium text-purple-400 mb-2">3:07pm - You Continue Building</p>
              <p className="pl-4 italic">"OMG ok babe this is something ive NEVER done before"</p>
            </div>

            <div>
              <p className="font-medium text-green-400 mb-2">3:10pm - Second $200 Unlock Happens</p>
              <p className="pl-4">From branch setup (3:02pm) to unlock (3:10pm) = 8 minutes of rapid-fire engagement with ZERO delays from you.</p>
            </div>

            <div>
              <p className="font-medium text-amber-400 mb-2">5:42pm - His Thank You Message (2.5 Hours Later)</p>
              <p className="pl-4 italic">"THANK YOU for today Ariel !! i know i was a little pushy but honestly it really means the fucking world to me... id really like for us to get closer ❤️"</p>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-red-500/60 pl-6 py-4 bg-red-950/30 rounded-r-lg">
          <h3 className="font-semibold text-lg mb-3 opacity-100">Critical Timing Lessons</h3>
          <div className="space-y-2 opacity-90">
            <p>Every response from you came within 10 to 60 seconds of his question</p>
            <p>Zero delays allowed rational thinking to return</p>
            <p>Branch setup happened within 1 minute of finale unlock</p>
            <p>8 minutes from branch to second unlock with constant engagement</p>
            <p>Result: $800+ spend and grateful thank you message hours later (proving no buyer's remorse)</p>
            <p className="font-medium mt-4 text-red-400">If you had delayed 2 to 3 minutes at any point, post-nut clarity would have killed momentum and cost you $2000+</p>
          </div>
        </div>
      </div>
    )
  }
];