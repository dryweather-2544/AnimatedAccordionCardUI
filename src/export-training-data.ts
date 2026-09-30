/**
 * Training Data Export Script
 * Run with: npx tsx src/export-training-data.ts
 */

import { pricingStrategyModule } from './app/components/PricingStrategyModule';
import { sextingModule } from './app/components/SextingModule';
import { trickierQuestionsModule } from './app/components/TrickierQuestionsModule';
import { upsellingModule } from './app/components/UpsellingModule';
import { ppvProposalModule } from './app/components/PPVProposalModule';
import * as fs from 'fs';
import * as path from 'path';

// Advanced Frame Control exercises (extracted from AdvancedFrameControlTraining.tsx)
const advancedFrameControlExercises = [
  {
    id: "pull-1",
    technique: "Pull Conversion",
    scenario: "Writer wants to pitch custom content",
    prompt: "They're about to send: 'you're gonna love this custom I made for you 😍'\n\nRewrite this as PULL:",
    goodExamples: [
      "I want you to see this",
      "I want you to see what I made",
      "I made something for you",
    ],
    badExamples: [
      "you're gonna love this",
      "this will make you so hard",
      "you're not ready for this",
      "this is gonna blow your mind",
    ],
    coachingHints: [
      "Push = telling them what they'll feel",
      "Pull = expressing what YOU want",
      "Remove predictions about their reaction",
      "Make it about what you want them to see, not what they'll feel",
    ],
  },
  {
    id: "pull-2",
    technique: "Pull Conversion",
    scenario: "Writer is teasing new content",
    prompt: "They're about to send: 'this video is gonna make you cum so hard 💦'\n\nRewrite this as PULL:",
    goodExamples: [
      "I want you to see this video",
      "I need you to see what I made",
      "I want you to watch this",
    ],
    badExamples: [
      "this will make you cum so hard",
      "you're gonna love this video",
      "this is gonna make you explode",
    ],
    coachingHints: [
      "Stop telling him what he'll feel",
      "Express what YOU want instead",
      "Pull makes them curious, push makes them resist",
    ],
  },
  {
    id: "pull-3",
    technique: "Pull Conversion",
    scenario: "Writer is introducing exclusive content",
    prompt: "They're about to send: 'you might not be ready for what I have 😏'\n\nRewrite this as PULL:",
    goodExamples: [
      "I don't think you're ready for this yet",
      "not sure you can handle this",
      "I don't know if you're ready for what I have",
    ],
    badExamples: [
      "you might not be ready",
      "this might be too much for you",
      "you're probably not ready",
    ],
    coachingHints: [
      "Flip it: YOU decide if they're ready, not them",
      "Make it about YOUR judgment, not their potential reaction",
      "Pull = you hold the power",
    ],
  },
  {
    id: "reset-1",
    technique: "Control Reset",
    scenario: "Writer is losing control - sent 3 messages in a row explaining the price",
    prompt: "They just sent:\n'well the content is really high quality'\n'I spent a lot of time on it'\n'most people think it's worth way more'\n\nWhat should they do RIGHT NOW?",
    goodExamples: [
      "Stop. You just lost control. Reset.",
      "Stop. That's reactive. Reset control.",
      "You're explaining yourself. Stop. Reset.",
    ],
    badExamples: [
      "send another message",
      "lower the price",
      "add more content to the bundle",
      "justify it more",
    ],
    coachingHints: [
      "Multiple messages = reactive energy",
      "Explaining = loss of control",
      "Reset immediately before more damage",
      "Say: 'Stop. Reset. One message at a time.'",
    ],
  },
  {
    id: "reset-2",
    technique: "Control Reset",
    scenario: "Fan says 'that's too expensive' and writer immediately starts justifying",
    prompt: "Writer is about to explain why the price is fair.\n\nWhat's the intervention?",
    goodExamples: [
      "Stop. Don't justify. Reset control.",
      "That's reactive energy. Stop and reset.",
      "No explaining. Reset and send ONE controlled message.",
    ],
    badExamples: [
      "explain the value",
      "lower the price",
      "tell them why it's worth it",
    ],
    coachingHints: [
      "Justifying = losing frame",
      "Price objections are tests, not invitations to explain",
      "Reset to controlled, non-reactive energy",
    ],
  },
  {
    id: "value-1",
    technique: "Value Hold",
    scenario: "Fan says: 'can you do $20 instead of $30?'",
    prompt: "Writer is about to accept $20.\n\nWhat should they say instead?",
    goodExamples: [
      "No discount. Say: 'price is firm babe'",
      "Hold value. Say: 'I don't do discounts'",
      "Don't lower price. Say: 'that's the price'",
      "Say: 'maybe this just isn't for you then 🤷‍♀️'",
    ],
    badExamples: [
      "okay $20 works",
      "I can do $25",
      "how about $22?",
      "I'll add more content for $30",
    ],
    coachingHints: [
      "Never lower price. Ever.",
      "Dropping price = dropping value",
      "Hold firm and increase desire instead",
      "Price objections are tests of conviction",
    ],
  },
  {
    id: "value-2",
    technique: "Value Hold",
    scenario: "Fan says: 'too expensive, add more and I'll pay'",
    prompt: "Writer is about to add more content to justify the price.\n\nWhat's the response?",
    goodExamples: [
      "No. Don't add more. Hold the value.",
      "Stop. That's the bundle. Price is firm.",
      "No negotiation. The price is the price.",
    ],
    badExamples: [
      "okay I'll add another video",
      "how about I throw in some photos",
      "I can add more if you want",
    ],
    coachingHints: [
      "Adding more = lowering value per item",
      "You don't negotiate. You hold firm.",
      "Increase desire, don't increase quantity",
    ],
  },
  {
    id: "value-3",
    technique: "Value Hold",
    scenario: "Fan says: 'I'll only pay $15'",
    prompt: "What's the value hold response they should send?",
    goodExamples: [
      "maybe this just isn't for you then 🤷‍♀️",
      "that's the price babe",
      "I don't do discounts",
      "price is firm",
    ],
    badExamples: [
      "okay $15 works",
      "I can do $18",
      "how about $17?",
    ],
    coachingHints: [
      "Make THEM increase desire, don't you decrease price",
      "Pull away when they push for discount",
      "Confidence holds value",
    ],
  },
  {
    id: "reactive-1",
    technique: "Reactive Sexting",
    scenario: "Fan says: 'I'd pin you against the wall'\nWriter is about to send a generic sexting line",
    prompt: "Respond using HIS exact words:",
    goodExamples: [
      "Use 'pin me against the wall' in your response",
      "Reference 'the wall' - make it reactive",
      "Say something like: 'mmm pin me against the wall and...'",
    ],
    badExamples: [
      "I'd ride you so hard",
      "mmm that's hot",
      "I want you inside me",
      "you're making me wet",
    ],
    coachingHints: [
      "Generic = could be sent to anyone",
      "Reactive = uses HIS words",
      "Echo back what he said, then build on it",
    ],
  },
  {
    id: "reactive-2",
    technique: "Reactive Sexting",
    scenario: "Fan says: 'I want to take it slow with you'\nWriter sends: 'I want you so bad 💦'",
    prompt: "That's generic. What should they send instead?",
    goodExamples: [
      "Stop. Use his words. Reference 'slow'",
      "Rewrite it: 'mmm taking it slow with you...'",
      "Reactive response using 'slow' in your message",
    ],
    badExamples: [
      "I want you so bad",
      "you're making me wet",
      "I need you inside me",
    ],
    coachingHints: [
      "He said 'slow' - use that word",
      "If you could send it to anyone, it's generic",
      "Make every reply reference what HE said",
    ],
  },
  {
    id: "reactive-3",
    technique: "Reactive Sexting",
    scenario: "Fan says: 'I'd make you beg for it'\nWriter sends: 'mmm I'm so horny'",
    prompt: "That's generic. Fix it:",
    goodExamples: [
      "Use 'beg' in your response",
      "Say: 'make me beg for it then...'",
      "Reference what he said: 'you'd make me beg?'",
    ],
    badExamples: [
      "I'm so horny",
      "I want you",
      "you're so hot",
    ],
    coachingHints: [
      "Every reply must use something he said",
      "Generic kills immersion",
      "Reactive creates emotional investment",
    ],
  },
];

// Compile all training data
const trainingData = {
  metadata: {
    exportDate: new Date().toISOString(),
    version: "1.0",
    description: "Complete training material export from Figma Make application",
    totalModules: 6,
  },
  modules: {
    pricingStrategy: pricingStrategyModule,
    sexting: sextingModule,
    trickierQuestions: trickierQuestionsModule,
    upselling: upsellingModule,
    ppvProposal: ppvProposalModule,
    advancedFrameControl: {
      title: "ADVANCED FRAME CONTROL",
      skillType: "Live Coaching",
      accentColor: "#8B5CF6",
      description: "Live coaching scripts - Read this with your writer in real time",
      exercises: advancedFrameControlExercises,
    },
  },
};

// Write to JSON file in the root directory
const outputPath = path.join(process.cwd(), 'training-data-export.json');
fs.writeFileSync(outputPath, JSON.stringify(trainingData, null, 2), 'utf-8');

console.log('✅ Training data exported successfully!');
console.log(`📁 File location: ${outputPath}`);
console.log(`📊 Total modules exported: ${Object.keys(trainingData.modules).length}`);
console.log(`📝 Advanced Frame Control exercises: ${advancedFrameControlExercises.length}`);
console.log('\nModule breakdown:');
console.log(`  - Pricing Strategy: ${pricingStrategyModule.steps.length} steps`);
console.log(`  - Sexting: ${sextingModule.steps.length} steps`);
console.log(`  - Trickier Questions: ${trickierQuestionsModule.steps.length} steps`);
console.log(`  - Upselling: ${upsellingModule.steps.length} steps`);
console.log(`  - PPV Proposal: ${ppvProposalModule.steps.length} steps`);
console.log(`  - Advanced Frame Control: ${advancedFrameControlExercises.length} exercises`);
