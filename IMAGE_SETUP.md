# How to Add Your Images

## Option 1: Add Images to Public Folder (Easiest)
1. Create a folder `/public/images/` if it doesn't exist
2. Drag and drop your images into `/public/images/`
3. Reference them in code like: `/images/your-image.jpg`

**Example:**
\`\`\`tsx
<img src="/images/team-member.jpg" alt="Team Member" />
\`\`\`

## Option 2: Use in Code
Simply update any image path in the code from placeholder URLs to your actual image paths.

**Before:**
\`\`\`tsx
image: "https://placehold.co/300x400"
\`\`\`

**After:**
\`\`\`tsx
image: "/images/my-image.jpg"
\`\`\`

## Images Already Referenced in About Page
These team member images need to be added to `/public/images/`:
- IMG-20241101-WA0001 - Bello Zainab.jpg
- IMG_0239 - Obase Oyeni Ayomobi.jpeg
- Snapchat-457251043 - Wiqoyah Akinwunmi.jpg
- IMG_2254 - Hephzibah Iyanu.JPG
- 1758965671104 - Seun Shodipo.jpg
- headshot - Barika-Bodunrin Yusuf.jpg

## Note on Stripe and Nigeria
✓ Stripe fully supports Nigeria with NGN currency
✓ You'll need to verify your Nigerian business details in Stripe
✓ Payout goes to your Nigerian bank account
✓ Updated donation amounts to Naira (1,000 - 50,000 NGN range)
