# AI Headshot Pro - Professional AI Headshots Generator

Transform your selfie into stunning professional headshots in 60 seconds! Perfect for LinkedIn, resumes, and social media.

## 🚀 Features

- **Lightning Fast**: Get 6 professional headshots in under 60 seconds
- **Multiple Styles**: Corporate, Creative, Casual, Executive, Modern, and Classic
- **High Resolution**: Perfect quality for print, web, and social media
- **Secure Payment**: Integrated with Stripe for safe transactions
- **Mobile Responsive**: Beautiful design that works on all devices
- **Viral-Ready**: Optimized for Facebook Ads and Google AdWords

## 💰 Pricing

**$2.99** - One-time payment for 6 professional AI-generated headshots

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 3.4
- **Payment**: Stripe
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-headshot-pro
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
# Stripe Keys (Get from https://dashboard.stripe.com/test/apikeys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Product Price (in cents)
NEXT_PUBLIC_PRICE=299
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔑 Stripe Setup

### 1. Get Your API Keys

1. Sign up for a [Stripe account](https://dashboard.stripe.com/register)
2. Go to [API Keys](https://dashboard.stripe.com/test/apikeys)
3. Copy your **Publishable key** and **Secret key**
4. Add them to your `.env.local` file

### 2. Set Up Webhooks (for production)

1. Go to [Webhooks](https://dashboard.stripe.com/test/webhooks)
2. Click "Add endpoint"
3. Enter your webhook URL: `https://yourdomain.com/api/webhooks`
4. Select events: `checkout.session.completed`
5. Copy the **Signing secret** and add it to `.env.local`

### 3. Test Payment

Use Stripe's test card numbers:
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- Use any future expiry date and any 3-digit CVC

## 📁 Project Structure

```
ai-headshot-pro/
├── app/
│   ├── api/
│   │   ├── create-checkout-session/
│   │   │   └── route.ts          # Stripe checkout session creation
│   │   └── webhooks/
│   │       └── route.ts          # Stripe webhook handler
│   ├── upload/
│   │   └── page.tsx              # Image upload page
│   ├── success/
│   │   └── page.tsx              # Post-payment success page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── components/
│   ├── Hero.tsx                  # Hero section
│   ├── Gallery.tsx               # Before/After gallery
│   ├── Features.tsx              # Features section
│   ├── Testimonials.tsx          # Customer testimonials
│   ├── Pricing.tsx               # Pricing section
│   ├── FAQ.tsx                   # FAQ accordion
│   └── Footer.tsx                # Footer
├── lib/
│   └── stripe.ts                 # Stripe configuration
└── public/                       # Static assets
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to add all environment variables from `.env.local` to your Vercel project settings, using your **live** Stripe keys instead of test keys.

## 🎨 Customization

### Change Pricing

Edit the `NEXT_PUBLIC_PRICE` in `.env.local` (amount in cents):
- $2.99 = 299
- $4.99 = 499
- $9.99 = 999

### Modify Styles

The project uses Tailwind CSS. Edit the components in the `components/` directory to customize the design.

### Add Real AI Processing

Currently, the app uses mock AI processing. To add real AI:

1. Choose an AI service (e.g., Replicate, Stability AI, or custom model)
2. Add API integration in `app/api/process-image/route.ts`
3. Update the success page to show real generated images

## 📊 Marketing Tips

### Facebook Ads
- Target: Professionals, job seekers, entrepreneurs
- Age: 25-55
- Interests: LinkedIn, career development, professional networking

### Google AdWords
- Keywords: "professional headshot", "LinkedIn photo", "AI headshot generator"
- Landing page: Optimized for conversions with clear CTA

### Viral Content Ideas
- Before/After transformations on social media
- "Get LinkedIn-ready in 60 seconds" videos
- User testimonials and success stories

## 🔒 Security

- All payments processed securely through Stripe
- No credit card data stored on your servers
- HTTPS required for production
- Webhook signature verification enabled

## 📝 License

MIT License - feel free to use this for your own projects!

## 🤝 Support

For issues or questions:
- Open an issue on GitHub
- Contact: your-email@example.com

## 🎯 Roadmap

- [ ] Real AI integration (Replicate/Stability AI)
- [ ] Email delivery system
- [ ] User accounts and order history
- [ ] Bulk processing discounts
- [ ] Referral program
- [ ] Multiple language support

---

**Built with ❤️ using Next.js and Stripe**
