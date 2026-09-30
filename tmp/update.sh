#!/bin/bash
cd /tmp/sandbox/src/app
cp App.tsx App_BACKUP.tsx
cat <(head -n 954 App.tsx) \
    <(echo "") \
    <(tail -n +4 STEP2_ENHANCED_REPLACEMENT.tsx) \
    <(echo "") \
    <(tail -n +4 STEP3_ENHANCED.tsx) \
    <(echo "") \
    <(tail -n +4 STEP4_ENHANCED.tsx) \
    <(echo "") \
    <(tail -n +4 STEP5_ENHANCED.tsx) \
    <(echo "") \
    <(tail -n +4 OBJECTION_HANDLING_ENHANCED.tsx) \
    <(echo "") \
    <(tail -n +4 POST_CONVERSION_ENHANCED.tsx) \
    <(tail -n 5 App_BACKUP.tsx) \
    > App.tsx
echo "✅ App.tsx successfully updated!"
