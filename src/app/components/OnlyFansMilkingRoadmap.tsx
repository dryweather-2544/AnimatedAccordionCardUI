import { Link } from "react-router";
import { Copy, DollarSign, TrendingUp, Clock, Trash2, GripVertical, Save, RotateCcw } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface ScriptSection {
  title: string;
  scripts: string[];
}

interface Phase {
  id: number;
  title: string;
  timeRange: string;
  priceRange: string;
  goal: string;
  triggers: string;
  sections: ScriptSection[];
  bgColor: string;
  borderColor: string;
  phaseDescription: string;
  psychologyMechanisms: string[];
}

const phases: Phase[] = [
  {
    id: 0,
    title: "Phase 0: Immediate Post-Sub Welcome",
    timeRange: "0-5 min",
    priceRange: "$0",
    goal: "Make them feel special; gather intel; plant first PPV seed.",
    triggers: "They reply with name/location/why subbed; show interest in more.",
    phaseDescription: "Make the subscriber feel seen immediately. Use friendly openers and light probes (name, location, why subbed) to gather intel and plant the first content seed. Success relies on shifting from anonymous to personal without pressure. Advance when they share details or show curiosity.",
    psychologyMechanisms: [
      "Reciprocity (strongest in Phases 0 to 2): The model gives first. Personal attention, compliments, vulnerability confessions (\"you make me so naughty/spontaneous\"), and small \"free\" teases or bonuses. Humans feel a powerful social obligation to reciprocate. When the fan receives emotional validation or a \"gift,\" he is far more likely to return the favor with money (first low PPV, then escalating buys).",
      "Emotional Bonding & Parasocial Intimacy (Phases 0 to 5): Personal questions, shared \"secrets,\" mirroring the fan's language, and vulnerability confessions create a simulated intimate relationship. The stronger the perceived emotional connection, the more the fan is willing to invest financially to preserve or deepen it.",
    ],
    sections: [
      {
        title: "Hello opener template",
        scripts: [
          "hello there stranger :) or maybe I will be allowed to call you [Fan Name] already? 😊",
        ],
      },
      {
        title: "Quick rapport probes template",
        scripts: [
          "thank you! well im super curious how you found out about me .. and where are you from ? ... im from [Your Location] 🥰",
          "baby… you actually came at the perfect time <3",
          "before you run off… can i ask you something real quick? 💕 what made you wanna talk to me when you first subbed? alsooo where you from? i'm curled up in bed in [Your City] rn 👀",
          "well, ive always thought its really pretty there .. whats something you really like about living there? 😊",
        ],
      },
      {
        title: "Age/kink soft probe template",
        scripts: [
          "also how old are you btw ? im [Your Age] i hope you dont mind 🙈",
          "i like it that you're [older/younger] than me.. ill be honest its actually a pretty big kink of mine if you dont think thats weird 🙈👀",
          "im really glad you feel that way ... you [older/younger] guys seem a lot more comfortable in your skin and have a lot more tricks up your sleeves.. wouldn't you agree ?",
        ],
      },
      {
        title: "Compliment & tease seed template",
        scripts: [
          "also i hope my posts haven't disappointed you at all ? 🙈💕",
          "i mean .. you'd need to be subbed to see tho actually",
          "omg thank you so so much love! thats so sweet of you 💕 i think you deserve a lil surprise tbh ... dont you agree ?",
          "hehe thank you actually 😳 .. i wonder if its got you feeling playful at all ? and dying to see more ?",
        ],
      },
    ],
    bgColor: "rgba(6, 182, 212, 0.08)",
    borderColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    id: 1,
    title: "Phase 1: Light Rapport + First Low PPV",
    timeRange: "5-30 min",
    priceRange: "$15-$35",
    goal: "Build emotional buy-in; get first buy to prove they're spenders.",
    triggers: "They buy or express strong interest in more; share kink/position/height.",
    phaseDescription: "Deepen connection with flirtatious compliments, height/kink probes, and gentle edging hints. Secure the first purchase with affordable, sensory content (e.g., outfit or orgasm glimpse). The low price lowers barriers; personalization builds investment. Advance when they buy or express strong interest in more.",
    psychologyMechanisms: [
      "Commitment and Consistency: Once the fan makes a small commitment (sharing personal details, buying the $15 to $35 PPV), he becomes motivated to act consistently with that initial choice. Cognitive dissonance pushes him to justify earlier spends by continuing to invest (\"I already bought once, so this next one makes sense\"). Each purchase reinforces the identity of being a \"generous/spoiler\" fan.",
      "Variable Reward & Dopamine Loops: The model delivers unpredictable rewards: sometimes a quick reply, sometimes a bonus, sometimes a hotter-than-expected PPV. This mirrors slot-machine psychology. Variable reinforcement is the most addictive pattern known. Each message or unlock triggers a dopamine hit, keeping the fan checking and paying repeatedly.",
      "Social Proof & Authority Inversion: The model subtly positions the fan as powerful (\"you have me wrapped around your finger,\" \"you made me feel something real\"). This inverts the usual buyer-seller dynamic: the fan feels like he's \"earning\" access through his desirability, making him more willing to pay to maintain that status.",
    ],
    sections: [
      {
        title: "Flirt escalation template",
        scripts: [
          "im honestly just enjoying chatting with you so anything extra is only if it feels fun to you",
          "omg hehe i like you already ;) would you like me to make you a little something better than my welcome message ? <3 cos i would love to!",
          "yeah ? hehe then promise you'll stay right here while i do this for you babe..? 💕 don't leave me",
          "oh! and then tell me one of your lil kinks so long ;)",
        ],
      },
      {
        title: "PPV 1 Offer template (soft entry, outfit/orgasm tail or tease)",
        scripts: [
          "id LOVE to show you my [Tease Element, e.g., outfit for the day] ... AND .. the tail end of an INTENSE orgasm <3",
          "i don't usually send little moments like this, but something about our chat made me want to share it with you <3 you see ALL of me here",
          "ppv [Price: 15 or 35]",
        ],
      },
      {
        title: "Post-buy probe template",
        scripts: [
          "omg omg hehe can you tell me which part got you hardest ?",
          "tell me honestly.. what part caught your attention the most?",
        ],
      },
      {
        title: "Height/fantasy intro template",
        scripts: [
          "i'm glad to hear that.. 😈💕 so tell me.. how tall are you?.. i'm trying to imagine what it would be like if you were here..",
          "i'm only [Your Height] hehe 🤭 now imagine pulling me back into your lap and holding me there for a second 💕 i wonder ... are you going to [Fantasy Action, e.g., suck on them] ? or [Alternate Action, e.g., pinch my lil nipples] to make me moan as we make out ?",
          "omg yess i'd love if you grabbed me by my hips and pulled me on top of you so i could edge your cock and rock back and forth nicely on you too 🤭😈 promise me you wont cum to this ?",
        ],
      },
    ],
    bgColor: "rgba(139, 92, 246, 0.08)",
    borderColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    id: 2,
    title: "Phase 2: Tease Build + Mid PPV",
    timeRange: "30-60 min",
    priceRange: "$35-$55",
    goal: "Introduce edging; get second buy with toy/sensory content.",
    triggers: "They admit arousal/edging; share position/kink details.",
    phaseDescription: "Introduce explicit edging and toy play. Confess naughtiness for intimacy, incorporate fan preferences (positions), and offer a mid-price PPV with stronger visuals. Tension from edging sustains desire. Advance when they admit arousal or confirm edging.",
    psychologyMechanisms: [
      "Sunk-Cost Fallacy: After the first few buys, the fan has already invested time, emotion, and money. Stopping feels like \"wasting\" what he's already put in, so he keeps going to \"see it through\" or \"get the full experience,\" even as prices rise sharply.",
      "Edging & Intermittent Reinforcement: Repeated \"don't cum yet,\" \"hold it,\" \"wait here\" commands create prolonged sexual frustration. The brain associates the model with escalating pleasure that is always just out of reach. This intermittent reinforcement (reward comes after unpredictable delay) is extremely habit-forming and mirrors gambling/addiction loops.",
    ],
    sections: [
      {
        title: "Naughty confession & wait template",
        scripts: [
          "i LOVE when you show me i have your attention with those quick replies hehe",
          "well baby.. im not going to lie! hehe i have been a bit naughty since we started ! 😈 i hope you dont mind ?",
          "good 😈 can i show you something quick i almost didn't send ? it's not intense or anything just one of those little moments that felt nice to share .. only if you want to though 💕",
          "we clicked so fast i love it! and thank you!.. and the way you're teasing me has me thinking allll kinds of things 🤭😈 think you can handle hearing them..?",
          "god thats hot you saying that! im thinking about using my toy like it's your hard cock.. you like the idea of that ? while you play with my soaked lil holes with your fingers 😈🥰",
          "if i keep going the way i want to... this stops being playful and starts feeling very real between us. i'm already halfway there, so tell me... are you still with me?",
          "i have the perfect moment! 😈 and while you wait i would love to know a position you love the MOST .... i bet i would love it too! <3",
        ],
      },
      {
        title: "PPV 2 Offer template (toy tease/bend-over)",
        scripts: [
          "ppv [Price: 35 or 55]",
          "my lil toy is all lubed up... showing you JUST how good i would look to fuck baby 😈",
        ],
      },
      {
        title: "Post-buy edging push template",
        scripts: [
          "even if its hard … just pleaseee make sure you dont cum yet okay ? i really wanna make this a day you and i arent ever going to forget 🥵",
          "god .. you know .. spread like this .. you would have such good access! to eat me out! and more 😈",
          "i bet youve never seen a prettier [Body Part, e.g., pussy] on OF 🥵",
        ],
      },
    ],
    bgColor: "rgba(236, 72, 153, 0.08)",
    borderColor: "rgba(236, 72, 153, 0.3)",
  },
  {
    id: 3,
    title: "Phase 3: Intense Action + Higher PPV",
    timeRange: "60-90 min",
    priceRange: "$115",
    goal: "Lock in control; exclusivity makes them feel special.",
    triggers: "They beg/show desperation; confirm edging.",
    phaseDescription: "Tighten control with strict edging commands and exclusivity ('earned it'). Tease graphic access and bonuses for quick buys. Deliver dynamic content (grinding/bouncing) to match the price jump. Advance when desperation or begging appears.",
    psychologyMechanisms: [
      "Scarcity & Loss Aversion: Phrases like \"this is usually where I stop,\" \"only send when someone earned it,\" \"if you don't keep me waiting,\" and \"naughtiest thing I've ever shown\" create perceived scarcity. People fear missing out more than they value gaining something (loss aversion). The threat of losing access to exclusive/rare content drives quicker, higher spends.",
    ],
    sections: [
      {
        title: "Exclusivity & bonus tease template",
        scripts: [
          "fuck.. STOP. hands off that cock right now!! that little tease you just saw? that was nothing compared to what this tight little pussy can do 😈",
          "if i send the next one , it's me spread wide open , dripping, no holding back... you ready for that access ?",
          "this is usually where i stop .. unless you want the version where i stop holding back.. full spread .. dripping .. nothing left to the imagination 🥰😈 tell me which one you want",
          "fuck that sounds perfect! .. but what i'm thinking of sending next isn't just another tease.. it's me spread wiiiide , fingers inside , the kind of angle i only send when someone earned it.. before i hit send on something that explicit.. tell me you actually want to see me like that 🥵",
          "ill even tell you what … if you dont keep me waiting , ill even spoil you with [Number, e.g., 5] extra free surprises to go along with it 😈",
          "you can hear how wet i am here ... fuck ... im actually a little embarrassed! 😳",
        ],
      },
      {
        title: "PPV 3 Offer template (grinding/bouncing)",
        scripts: [
          "ppv [Price: 115]",
          "you're going to have to REALLY try your best not to bust to this now babe .. the way that I GRIND my hips onto this toy is SO fucking hot...",
        ],
      },
    ],
    bgColor: "rgba(245, 158, 11, 0.08)",
    borderColor: "rgba(245, 158, 11, 0.3)",
  },
  {
    id: 4,
    title: "Phase 4: Taboo Peak",
    timeRange: "90-120 min",
    priceRange: "$195-$200",
    goal: 'Push boundaries; use "first time/naughtiest" for justification.',
    triggers: "They admit shaking/high arousal; request specific acts.",
    phaseDescription: "Push boundaries with taboo elements (anal, squirting) framed as rare/first-time. Use vulnerability, fan-chosen acts, and urgency to justify the high price. Peak emotional and financial impact occurs here. Advance when peak arousal (shaking, specific requests) is evident.",
    psychologyMechanisms: [
      "Peak Convergence: This is where all prior psychological mechanisms reach maximum intensity. The fan has been edged for 90+ minutes, invested $150+, and feels deeply bonded. Taboo content (anal, squirting) creates a 'point of no return' sensation. The combination of prolonged arousal, sunk costs, emotional intimacy, and scarcity create the highest willingness to spend. This phase extracts the largest single purchases by framing them as rare, earned, and emotionally significant.",
    ],
    sections: [
      {
        title: "Deep fantasy & edging template",
        scripts: [
          "i want you sliding that meaty juicy cock in and out of my wet little holes right now so badly! ... ive already taken my toy...",
          "babe .. if you can hold it in for me .. i'd love to make you this .. because it's actually soo fucking hot that you're getting me to feel this way..",
          "you have me fucking shaking right now.. i love how you have me feeling! you are still edging for me right ? be honest",
          "imagining you're here to clean up my soft holes... i just got so wet i basically just squirt for you..",
          "i dont find myself being this spontaneous... it's just because you have me feeling wrapped around your finger.. 🤭😈 wait here and let me show you how i want you to slide it in and spank me okay? 😈🤭",
          "i don't usually go past this... most people don't get to see this side of me .. so if i send it, it's because you made me feel something real",
          "you've impressed me so much.. i'll let you pick how i fuck myself next.. wanna see me ride it in [Position, e.g., doggy or missionary], baby? 😈",
        ],
      },
      {
        title: "PPV 4 Offer template (anal/squirt/doggy)",
        scripts: [
          "ppv [Price: 195 or 200]",
          "FUCK babe .. this is BY far the naughtiest thing ive ever shown you! ... i even play with my tight little [Taboo Element, e.g., asshole] for you 😈🥵",
        ],
      },
    ],
    bgColor: "rgba(239, 68, 68, 0.08)",
    borderColor: "rgba(239, 68, 68, 0.3)",
  },
  {
    id: 5,
    title: "Phase 5: Climax & Multiple $200+ Finishes",
    timeRange: "120+ min",
    priceRange: "$200+ (multiple)",
    goal: 'Deliver "release" multiple times; re-sell "firsts/extras"; tip/custom close.',
    triggers: "Multiple buys; energy peaks then slows.",
    phaseDescription: "Provide repeated 'release' via orgasm content. Re-sell archival material as extras; close with tips or customs. Sustain momentum through feedback loops and promises of more. End when spending slows, leaving a tease for future sessions.",
    psychologyMechanisms: [
      "Variable Reward & Dopamine Loops (SUSTAINED): The model delivers unpredictable rewards: sometimes a quick reply, sometimes a bonus, sometimes a hotter-than-expected PPV. This mirrors slot-machine psychology. Variable reinforcement is the most addictive pattern known. Each message or unlock triggers a dopamine hit, keeping the fan checking and paying repeatedly.",
      "Sunk-Cost Fallacy (MAXIMUM): After the first few buys, the fan has already invested time, emotion, and money. Stopping feels like \"wasting\" what he's already put in, so he keeps going to \"see it through\" or \"get the full experience,\" even as prices rise sharply.",
      "Emotional Bonding & Parasocial Intimacy (SUSTAINED): Personal questions, shared \"secrets,\" mirroring the fan's language, and vulnerability confessions create a simulated intimate relationship. The stronger the perceived emotional connection, the more the fan is willing to invest financially to preserve or deepen it.",
      "Re-selling & Archival Content Strategy: Offering past content as 'extras' or 'first-time' content maximizes value from existing material. Framing old content as rare or exclusive keeps the perceived value high while minimizing production effort.",
      "Feedback Loops & Future Teasing: Using feedback requests ('tell me what you think') and future promises ('we'll do this again') creates anticipation for the next session, turning one-time buyers into repeat customers.",
    ],
    sections: [
      {
        title: "Wet/climax build template",
        scripts: [
          "i have such a wet dripping pussy and i feel like i have to show you what you have done to me .. this isn't something i feel a lot ... fuckk i really wanna cum hard with you.. 💦",
          "talk to me .. i'm dying to know what you think of that . i'm stroking my pussy right now... i dont get like this ever..",
          "fuuuck baby!. you know how worked up i feel after that... do you think you can still hold it in for me ?.. i'd love to make you that super special surprise... this one is going to be so long and worth it..",
          "i'll make it even longer than the last one.. this really has me so wet right now .. wishing you were here.. showing my [Body Part, e.g., clit] the best time ..! 🥵",
        ],
      },
      {
        title: "PPV 5/6 Offer template (hard cum/orgasm vid + re-sell)",
        scripts: [
          "ppv [Price: 200] (repeat 1 to 2 times)",
          "omg baby… i haven't cum this hard in so long… my legs shake... it's the hardest i've cum for anyone, ever… keep this one private, please?",
          "hehe , do you like that a lot baby?.. i'm so glad you caught me in this mood.. i'm actually thinking of making you something really hot that i dont do a lot.. and maybe showing you one of my first videos on here.. 🤭",
          "good.. because listen i wanted to show you the first [Content Type, e.g., riding solo] i ever made ...i think youre going to looooove seeing how inexperienced i was .. i had only been on of for like [Time Frame, e.g., 4 days] at that point.. 😈",
        ],
      },
      {
        title: "Final extension & close template",
        scripts: [
          "you know .. it's been such a long time since i've felt this riled up ... i'll have to spoil you with one or two extras when you tell me what you think of this .. and how hard you cum today.. 😩😈",
          "hehe , you want me to [Action, e.g., ride it] for longer than that ?.. mmm i like that idea.. 🤭😈 but then i need to know that i have all of your attention ;)",
          "(Optional tip/custom push: ppv [Price: 200] maybe [Tip Amount: 200] tip before sending locked too)",
        ],
      },
    ],
    bgColor: "rgba(16, 185, 129, 0.08)",
    borderColor: "rgba(16, 185, 129, 0.3)",
  },
];

const coreRules = [
  "Replace placeholders with specifics (e.g., personalize with fan details).",
  "Keep edging, urgency, exclusivity, and reciprocity intact.",
  "Adjust phrasing to your style, but don't alter the logical progression or PPV escalations.",
  "Price ladder: Start low, ramp up. $15/$35 to $35/$55 to $115 to $195-$200 to Multiple $200+.",
  "Aim for $500 to $1000+ total; extend Phase 5 with re-sells if they're hooked.",
];

const STORAGE_KEY = 'onlyfans-milking-roadmap-custom';

export function OnlyFansMilkingRoadmap() {
  const [copiedScript, setCopiedScript] = useState<string | null>(null);
  const [localPhases, setLocalPhases] = useState<Phase[]>(() => {
    // Load saved changes from localStorage on mount
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const savedPhases = JSON.parse(saved);
        // Merge saved scripts with default psychology mechanisms
        return phases.map((defaultPhase, index) => {
          const savedPhase = savedPhases[index];
          if (savedPhase && savedPhase.id === defaultPhase.id) {
            // Keep saved scripts but use default psychology mechanisms
            return {
              ...defaultPhase,
              sections: savedPhase.sections || defaultPhase.sections,
            };
          }
          return defaultPhase;
        });
      } catch {
        return phases;
      }
    }
    return phases;
  });
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);
  const [isControlsExpanded, setIsControlsExpanded] = useState(false);

  // Track changes
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const currentState = JSON.stringify(localPhases);
    const savedState = saved || JSON.stringify(phases);
    setHasUnsavedChanges(currentState !== savedState);
  }, [localPhases]);

  const saveChanges = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(localPhases));
    setHasUnsavedChanges(false);
    setShowSaveConfirmation(true);
    setTimeout(() => setShowSaveConfirmation(false), 3000);
  };

  const resetToDefault = () => {
    if (confirm('Are you sure you want to reset all changes and restore the original scripts?')) {
      localStorage.removeItem(STORAGE_KEY);
      setLocalPhases(phases);
      setHasUnsavedChanges(false);
    }
  };

  const copyToClipboard = (text: string) => {
    // Try modern clipboard API first, fallback to legacy method
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedScript(text);
          setTimeout(() => setCopiedScript(null), 2000);
        })
        .catch(() => {
          // Fallback to older method
          fallbackCopy(text);
        });
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text: string) => {
    // Create temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    
    try {
      textarea.select();
      textarea.setSelectionRange(0, text.length);
      document.execCommand('copy');
      setCopiedScript(text);
      setTimeout(() => setCopiedScript(null), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const deleteScript = (phaseId: number, sectionIndex: number, scriptIndex: number) => {
    setLocalPhases(prevPhases => 
      prevPhases.map(phase => {
        if (phase.id === phaseId) {
          return {
            ...phase,
            sections: phase.sections.map((section, sIdx) => {
              if (sIdx === sectionIndex) {
                return {
                  ...section,
                  scripts: section.scripts.filter((_, scriptIdx) => scriptIdx !== scriptIndex)
                };
              }
              return section;
            }).filter(section => section.scripts.length > 0) // Remove empty sections
          };
        }
        return phase;
      })
    );
  };

  const moveScript = (phaseId: number, sectionIndex: number, scriptIndex: number, direction: 'up' | 'down') => {
    setLocalPhases(prevPhases => 
      prevPhases.map(phase => {
        if (phase.id === phaseId) {
          return {
            ...phase,
            sections: phase.sections.map((section, sIdx) => {
              if (sIdx === sectionIndex) {
                const scripts = [...section.scripts];
                const currentIndex = scriptIndex;
                const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
                if (newIndex >= 0 && newIndex < scripts.length) {
                  [scripts[currentIndex], scripts[newIndex]] = [scripts[newIndex], scripts[currentIndex]];
                }
                return {
                  ...section,
                  scripts: scripts
                };
              }
              return section;
            })
          };
        }
        return phase;
      })
    );
  };

  const moveScriptToSection = (
    fromPhaseId: number, 
    fromSectionIndex: number, 
    fromScriptIndex: number,
    toPhaseId: number,
    toSectionIndex: number,
    toScriptIndex?: number
  ) => {
    setLocalPhases(prevPhases => {
      // First, get the script we're moving
      let scriptToMove: string | null = null;
      
      prevPhases.forEach(phase => {
        if (phase.id === fromPhaseId) {
          const section = phase.sections[fromSectionIndex];
          if (section) {
            scriptToMove = section.scripts[fromScriptIndex];
          }
        }
      });

      if (!scriptToMove) return prevPhases;

      // Remove from source
      let newPhases = prevPhases.map(phase => {
        if (phase.id === fromPhaseId) {
          return {
            ...phase,
            sections: phase.sections.map((section, sIdx) => {
              if (sIdx === fromSectionIndex) {
                return {
                  ...section,
                  scripts: section.scripts.filter((_, idx) => idx !== fromScriptIndex)
                };
              }
              return section;
            }).filter(section => section.scripts.length > 0)
          };
        }
        return phase;
      });

      // Add to destination
      newPhases = newPhases.map(phase => {
        if (phase.id === toPhaseId) {
          return {
            ...phase,
            sections: phase.sections.map((section, sIdx) => {
              if (sIdx === toSectionIndex) {
                const newScripts = [...section.scripts];
                const insertIndex = toScriptIndex !== undefined ? toScriptIndex : newScripts.length;
                newScripts.splice(insertIndex, 0, scriptToMove!);
                return {
                  ...section,
                  scripts: newScripts
                };
              }
              return section;
            })
          };
        }
        return phase;
      });

      return newPhases;
    });
  };

  const ScriptItem = ({ phaseId, sectionIndex, scriptIndex, script }: { phaseId: number, sectionIndex: number, scriptIndex: number, script: string }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'SCRIPT',
      item: { phaseId, sectionIndex, scriptIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [{ canDrop }, drop] = useDrop({
      accept: 'SCRIPT',
      drop: (item: { phaseId: number, sectionIndex: number, scriptIndex: number }) => {
        if (item.phaseId === phaseId && item.sectionIndex === sectionIndex) {
          moveScript(phaseId, sectionIndex, item.scriptIndex, scriptIndex < item.scriptIndex ? 'up' : 'down');
        }
      },
      collect: (monitor) => ({
        canDrop: monitor.canDrop(),
      }),
    });

    return (
      <div
        ref={(node) => { drag(node); drop(node); }}
        className="group relative p-4 rounded-lg bg-black/30 border border-white/10 hover:border-white/20 transition-all"
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      >
        <p className="text-white/80 text-sm leading-relaxed font-mono pr-10">
          {script}
        </p>
        <button
          onClick={() => copyToClipboard(script)}
          className="absolute top-3 right-3 p-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 opacity-0 group-hover:opacity-100 transition-all"
          title="Copy to clipboard"
        >
          {copiedScript === script ? (
            <span className="text-green-400 text-xs font-medium">✓</span>
          ) : (
            <Copy className="size-4 text-white/60" />
          )}
        </button>
        <button
          onClick={() => deleteScript(phaseId, sectionIndex, scriptIndex)}
          className="absolute top-3 left-3 p-2 rounded-md bg-red-500/5 hover:bg-red-500/10 border border-red-500/30 opacity-0 group-hover:opacity-100 transition-all"
          title="Delete script"
        >
          <Trash2 className="size-4 text-red-500" />
        </button>
        <GripVertical className="absolute top-3 right-10 p-2 rounded-md bg-gray-500/5 hover:bg-gray-500/10 border border-gray-500/30 opacity-0 group-hover:opacity-100 transition-all size-4 text-gray-500" />
      </div>
    );
  };

  const SectionDropZone = ({ phaseId, sectionIndex, sectionTitle, children }: { phaseId: number, sectionIndex: number, sectionTitle: string, children: React.ReactNode }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
      accept: 'SCRIPT',
      drop: (item: { phaseId: number, sectionIndex: number, scriptIndex: number }) => {
        // Only move if it's a different section
        if (!(item.phaseId === phaseId && item.sectionIndex === sectionIndex)) {
          moveScriptToSection(item.phaseId, item.sectionIndex, item.scriptIndex, phaseId, sectionIndex);
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });

    const isActive = isOver && canDrop;

    return (
      <div ref={drop} className="relative space-y-3">
        {/* Visual feedback overlay */}
        {canDrop && (
          <div
            className={`absolute inset-0 rounded-lg transition-all pointer-events-none z-0 ${
              isActive 
                ? 'bg-green-500/20 border-2 border-green-500/50 backdrop-blur-sm' 
                : 'bg-white/5 border-2 border-white/20'
            }`}
          >
            {isActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-green-500/90 text-white px-4 py-2 rounded-lg font-medium text-sm shadow-lg">
                  Drop to move here
                </div>
              </div>
            )}
          </div>
        )}
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className="min-h-screen relative"
        style={{
          background: "linear-gradient(to bottom, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        }}
      >
        {/* Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between backdrop-blur-xl bg-black/40 border-b border-white/10">
          <Link
            to="/blank"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all backdrop-blur-sm border border-white/20 font-medium"
          >
            ← Back to Training
          </Link>

          <h1 className="text-2xl font-bold text-white">Roadmap</h1>

          {/* Expandable Controls Dot */}
          <div className="relative">
            <button
              onClick={() => setIsControlsExpanded(!isControlsExpanded)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm border ${
                hasUnsavedChanges
                  ? 'bg-amber-500/20 border-amber-500/50 hover:bg-amber-500/30'
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
              title={hasUnsavedChanges ? 'Unsaved changes - click to manage' : 'Manage scripts'}
            >
              {hasUnsavedChanges ? (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-white/60" />
              )}
            </button>

            {/* Expandable Menu */}
            <motion.div
              initial={false}
              animate={{
                opacity: isControlsExpanded ? 1 : 0,
                scale: isControlsExpanded ? 1 : 0.95,
                y: isControlsExpanded ? 0 : -10,
                pointerEvents: isControlsExpanded ? 'auto' : 'none',
              }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-14 min-w-64 p-4 rounded-xl bg-black/90 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <div className="space-y-3">
                {hasUnsavedChanges && (
                  <div className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
                    <p className="text-amber-400 text-xs font-medium">
                      You have unsaved changes
                    </p>
                  </div>
                )}

                <button
                  onClick={() => {
                    saveChanges();
                    setIsControlsExpanded(false);
                  }}
                  disabled={!hasUnsavedChanges}
                  className={`w-full px-4 py-3 rounded-lg transition-all backdrop-blur-sm border font-medium flex items-center gap-2 justify-center ${
                    hasUnsavedChanges
                      ? 'bg-green-500/20 hover:bg-green-500/30 text-green-400 border-green-500/30'
                      : 'bg-white/5 text-white/30 border-white/10 cursor-not-allowed'
                  }`}
                  title={hasUnsavedChanges ? 'Save changes to browser storage' : 'No changes to save'}
                >
                  <Save className="size-4" />
                  {showSaveConfirmation ? '✓ Saved!' : 'Save Changes'}
                </button>

                <button
                  onClick={() => {
                    resetToDefault();
                    setIsControlsExpanded(false);
                  }}
                  className="w-full px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all backdrop-blur-sm border border-red-500/30 font-medium flex items-center gap-2 justify-center"
                  title="Reset to original scripts"
                >
                  <RotateCcw className="size-4" />
                  Reset to Default
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Roadmap
            </h2>
            <p className="text-2xl text-white/90 font-semibold mb-4">
              Templated Scripts
            </p>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              Full end-to-end roadmap with bare-bones templates. Copy-paste skeletons with placeholders 
              that you can customize to your voice. Keep the structure and progression intact.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm">
              <TrendingUp className="size-5 text-green-400" />
              <span className="text-white font-medium">Target: $500-$1000+ Total</span>
            </div>
          </motion.div>

          {/* Core Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Core Rules for Customization & Max Milking</h3>
            <div className="space-y-3">
              {coreRules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl flex-shrink-0 mt-1">•</span>
                  <p className="text-white/90 text-base leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Phases */}
          <div className="space-y-12">
            {localPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {/* Left Column: Psychology Card */}
                <div 
                  className="p-6 rounded-2xl backdrop-blur-xl border-2 h-fit sticky top-32"
                  style={{
                    background: phase.bgColor,
                    borderColor: phase.borderColor,
                  }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/10">
                      <TrendingUp className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Psychology</h3>
                      <p className="text-white/60 text-sm">{phase.title}</p>
                    </div>
                  </div>

                  {phase.psychologyMechanisms && (
                    <div className="space-y-4">
                      {/* Overview */}
                      <div>
                        <h4 className="text-base font-bold text-white uppercase tracking-wider mb-3">
                          Overview
                        </h4>
                        <p className="text-white text-base leading-relaxed font-medium">
                          {phase.phaseDescription}
                        </p>
                      </div>

                      {/* Mechanisms */}
                      <div>
                        <h4 className="text-base font-bold text-white uppercase tracking-wider mb-3">
                          Key Mechanisms
                        </h4>
                        <div className="space-y-3">
                          {phase.psychologyMechanisms.map((mechanism, idx) => (
                            <div 
                              key={idx}
                              className="p-4 rounded-lg bg-black/40 border border-white/20"
                            >
                              <p className="text-white text-base leading-relaxed">{mechanism}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Phase Scripts Card */}
                <div
                  className="p-8 rounded-2xl backdrop-blur-xl border-2"
                  style={{
                    background: phase.bgColor,
                    borderColor: phase.borderColor,
                  }}
                >
                  {/* Phase Header */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-4">{phase.title}</h3>
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="size-5 text-white/60" />
                        <span className="text-white/80 font-medium">{phase.timeRange}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="size-5 text-green-400" />
                        <span className="text-green-400 font-bold">{phase.priceRange}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/90">
                        <span className="font-semibold text-white">Goal:</span> {phase.goal}
                      </p>
                      <p className="text-white/90">
                        <span className="font-semibold text-white">Triggers:</span> {phase.triggers}
                      </p>
                    </div>
                  </div>

                  {/* Script Sections */}
                  <div className="space-y-6">
                    {phase.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="relative space-y-3">
                        <SectionDropZone
                          phaseId={phase.id}
                          sectionIndex={sectionIndex}
                          sectionTitle={section.title}
                        >
                          <h4 className="text-lg font-semibold text-white/90 relative z-10">{section.title}</h4>
                          <div className="space-y-2 relative z-10">
                            {section.scripts.map((script, scriptIndex) => (
                              <ScriptItem
                                key={scriptIndex}
                                phaseId={phase.id}
                                sectionIndex={sectionIndex}
                                scriptIndex={scriptIndex}
                                script={script}
                              />
                            ))}
                          </div>
                        </SectionDropZone>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Remember</h3>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
              These are bare-bones templates. Add your emojis, slang, and personal flair. 
              But keep the logical progression, price escalations, and psychological tactics intact.
            </p>
          </motion.div>
        </div>
      </div>
    </DndProvider>
  );
}