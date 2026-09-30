const fs = require('fs');

// Read the file
const filePath = '/src/app/components/BlankPageRedesigned.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Define the old string (exactly as it appears in the file)
const oldString = `             example: \"<strong>Example:</strong> <em>\\\"the very first video I ever shot the week I turned 18… the one where I swore I'd never sell because it's literally me at my most innocent (and somehow dirtiest) moment… the original, uncensored &quot;18th birthday solo&quot; that started everything… ❤️ im only sharing it with 5 people today and 3 already got it\\\"</em>\",`;

// Define the new string
const newString = `             example: \"<strong>Example:</strong> <em>\\\"fuckk baby, i'm just thinking of all the ways you could explore me.. and hmmm you know.. i'd love to make you a lil surprise showing how your wet i got with you.. wait here and let me show you how i want you to slide it in and spank me okay? 🥹🩷<br /><br />if you get this NOW ? Ive got 3 surprises waiting for you\\\"</em>\",`;

// Perform the replacement
const newContent = content.replace(oldString, newString);

// Write back to the file
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('Replacement complete');
