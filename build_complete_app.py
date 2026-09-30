#!/usr/bin/env python3
"""
Build complete App.tsx with all enhanced sections
"""

import re

# Read the original App.tsx
with open('/tmp/sandbox/src/app/App.tsx', 'r') as f:
    app_content = f.read()

# Read all enhanced sections
with open('/tmp/sandbox/src/app/STEP2_ENHANCED_REPLACEMENT.tsx', 'r') as f:
    step2_enhanced = f.read().split('\n', 3)[3]  # Skip first 3 lines (comments)

with open('/tmp/sandbox/src/app/STEP3_ENHANCED.tsx', 'r') as f:
    step3_enhanced = f.read().split('\n', 3)[3]

with open('/tmp/sandbox/src/app/STEP4_ENHANCED.tsx', 'r') as f:
    step4_enhanced = f.read().split('\n', 3)[3]

with open('/tmp/sandbox/src/app/STEP5_ENHANCED.tsx', 'r') as f:
    step5_enhanced = f.read().split('\n', 3)[3]

with open('/tmp/sandbox/src/app/OBJECTION_HANDLING_ENHANCED.tsx', 'r') as f:
    objection_enhanced = f.read().split('\n', 3)[3]

with open('/tmp/sandbox/src/app/POST_CONVERSION_ENHANCED.tsx', 'r') as f:
    post_conversion_enhanced = f.read().split('\n', 3)[3]

# Function to replace section in App.tsx
def replace_accordion_section(content, title_pattern, replacement):
    """Replace an entire <AccordionCard> section"""
    # Pattern to match entire AccordionCard
    pattern = rf'<AccordionCard\s+title="{title_pattern}".*?(?=\s*<AccordionCard|\s*</div>\s*</div>\s*</div>\s*</div>\s*\);\s*\}})'
    
    result = re.sub(pattern, replacement.rstrip(), content, flags=re.DOTALL)
    return result

# Replace each section
print("Replacing STEP 2...")
app_content = replace_accordion_section(app_content, "STEP 2: FIRST PPV OR TEASE", step2_enhanced)

print("Replacing STEP 3...")
app_content = replace_accordion_section(app_content, "STEP 3: SECOND PPV \\(\\$35\\)", step3_enhanced)

print("Replacing STEP 4...")
app_content = replace_accordion_section(app_content, "STEP 4: THIRD PPV \\(\\$55\\)", step4_enhanced)

print("Replacing STEP 5...")
app_content = replace_accordion_section(app_content, "STEP 5: FOURTH PPV \\(\\$115\\)", step5_enhanced)

print("Replacing OBJECTION HANDLING...")
app_content = replace_accordion_section(app_content, "OBJECTION HANDLING", objection_enhanced)

print("Replacing POST CONVERSION RETENTION...")
app_content = replace_accordion_section(app_content, "POST CONVERSION RETENTION", post_conversion_enhanced)

# Write the complete new App.tsx
with open('/tmp/sandbox/src/app/App.tsx', 'w') as f:
    f.write(app_content)

print("✅ App.tsx successfully updated with all enhanced sections!")
