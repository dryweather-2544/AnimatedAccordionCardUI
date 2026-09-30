const fs = require('fs');
const path = require('path');

const baseDir = '/tmp/sandbox/src/app';

// Read original App.tsx
const appContent = fs.readFileSync(path.join(baseDir, 'App.tsx'), 'utf8');
const appLines = appContent.split('\n');

// Read all enhanced sections (skip first 3 comment lines)
const step2Lines = fs.readFileSync(path.join(baseDir, 'STEP2_ENHANCED_REPLACEMENT.tsx'), 'utf8').split('\n').slice(3);
const step3Lines = fs.readFileSync(path.join(baseDir, 'STEP3_ENHANCED.tsx'), 'utf8').split('\n').slice(3);
const step4Lines = fs.readFileSync(path.join(baseDir, 'STEP4_ENHANCED.tsx'), 'utf8').split('\n').slice(3);
const step5Lines = fs.readFileSync(path.join(baseDir, 'STEP5_ENHANCED.tsx'), 'utf8').split('\n').slice(3);
const objectionLines = fs.readFileSync(path.join(baseDir, 'OBJECTION_HANDLING_ENHANCED.tsx'), 'utf8').split('\n').slice(3);
const postConvLines = fs.readFileSync(path.join(baseDir, 'POST_CONVERSION_ENHANCED.tsx'), 'utf8').split('\n').slice(3);

// Build new App.tsx
const newAppLines = [
  ...appLines.slice(0, 955),      // Header + STEP 1
  '',
  ...step2Lines,                   // Enhanced STEP 2
  '',
  ...step3Lines,                   // Enhanced STEP 3
  '',
  ...step4Lines,                   // Enhanced STEP 4
  '',
  ...step5Lines,                   // Enhanced STEP 5
  '',
  ...objectionLines,               // Enhanced OBJECTION HANDLING
  '',
  ...postConvLines,                // Enhanced POST CONVERSION
  ...appLines.slice(1877)          // Footer
];

// Write new App.tsx
fs.writeFileSync(path.join(baseDir, 'App.tsx'), newAppLines.join('\n'), 'utf8');

console.log('✅ App.tsx successfully updated with all enhanced sections!');
console.log(`   Original: ${appLines.length} lines`);
console.log(`   New: ${newAppLines.length} lines`);
