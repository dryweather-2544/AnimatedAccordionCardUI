#!/bin/bash
# Script to update STEP 2 in App.tsx with enhanced version

cd /tmp/sandbox/src/app

# Create backup
cp App.tsx App_BACKUP_$(date +%s).tsx

# Build new App.tsx
{
  # Part 1: Everything before STEP 2 (lines 1-955)
  head -n 955 App.tsx
  
  # Add blank line
  echo ""
  
  # Part 2: Enhanced STEP 2 (skip first 3 comment lines)
  tail -n +4 STEP2_ENHANCED_REPLACEMENT.tsx
  
  # Part 3: Everything after STEP 2 (from line 1171 onwards)
  tail -n +1171 App.tsx
  
} > App_NEW.tsx

# Replace original with new version
mv App_NEW.tsx App.tsx

echo "✅ SUCCESS! STEP 2 has been updated with all enhanced components!"
echo "Refresh your browser to see:"
echo "  - OneLiner components"
echo "  - CopyPastePrompts with structure arrays"
echo "  - IfSkipped consequence blocks"
echo "  - MicroBranch decision trees"
echo "  - WatchFor signal blocks"
echo "  - DecisionCheck components"
echo "  - Checklist components"
echo "  - WhenThisWorked indicators"
