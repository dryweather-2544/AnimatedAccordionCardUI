#!/usr/bin/env python3
import os
import glob

# Find all .tsx files
tsx_files = []
for root, dirs, files in os.walk('/src'):
    for file in files:
        if file.endswith('.tsx'):
            tsx_files.append(os.path.join(root, file))

print(f"Found {len(tsx_files)} .tsx files")

# Replace em dashes with regular hyphens
for filepath in tsx_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace em dash (—) with regular hyphen surrounded by spaces
        new_content = content.replace('—', ' - ')
        
        if content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated: {filepath}")
        else:
            print(f"No changes: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

print("Done!")
