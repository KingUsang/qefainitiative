# QEFAI - Quality Education For All Initiative

A modern Next.js website for QEFAI, featuring donation capabilities and contact form integration.

## Features

- **Next.js 16** with App Router
- **Responsive Design** with Tailwind CSS
- **Donation System** with Paystack integration
- **Contact Form** with email notifications via Resend
- **Server Actions** for email and payment processing
- **Type-Safe** with TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables by copying `.env.example` to `.env.local`:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. Add your API keys:
   - **Resend API Key**: Get from [resend.com](https://resend.com)
   - **Paystack Secret Key**: Get from [paystack.com](https://paystack.com) (Settings → API Keys)

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx          # About page
│   ├── programs/page.tsx       # Programs page
│   ├── contact/page.tsx        # Contact form
│   ├── donate/page.tsx         # Donation page
│   ├── partnership/page.tsx    # Partnership inquiries
│   ├── volunteer/page.tsx      # Volunteer registration
│   ├── api/
│   │   ├── send-email/route.ts       # Email API endpoint
│   │   ├── create-checkout/route.ts  # Paystack checkout
│   │   └── paystack-callback/route.ts # Payment callback
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer
│   ├── Hero.tsx                # Hero section
│   ├── donation-form.tsx       # Donation form component
│   └── ImpactSection.tsx       # Impact stats
└── package.json                # Dependencies
\`\`\`

## Configuration

### Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`:
   \`\`\`
   RESEND_API_KEY=your_key_here
   \`\`\`
4. Update the recipient email in `app/api/send-email/route.ts`

### Payment Setup (Paystack)

1. Sign up at [paystack.com](https://paystack.com)
2. Go to Settings → API Keys & Webhooks
3. Copy your Secret Key (starts with `sk_test_` for test mode)
4. Add to `.env.local`:
   \`\`\`
   PAYSTACK_SECRET_KEY=sk_test_your_secret_key
   NEXT_PUBLIC_URL=http://localhost:3000
   \`\`\`
5. For production, use your live secret key (starts with `sk_live_`)

**Important:** You need to add the `PAYSTACK_SECRET_KEY` environment variable in the **Vars section** of the in-chat sidebar or your `.env.local` file for donations to work.

## Deployment

Deploy to Vercel with one click:

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel settings:
   - `RESEND_API_KEY`
   - `PAYSTACK_SECRET_KEY`
   - `NEXT_PUBLIC_URL` (your production domain)
4. Deploy

## Support

For issues or questions, contact: info@qefai.org
