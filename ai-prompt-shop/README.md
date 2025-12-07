# 🚀 AI Prompt Shop - Viral Digital Product Landing Page

A complete, production-ready Next.js application for selling digital products with Stripe payment integration. Perfect for selling AI prompts, ebooks, templates, or any digital product.

## ✨ Features

- 🎨 **Conversion-Optimized Landing Page** - Beautiful, responsive design that sells
- 💳 **Stripe Payment Integration** - Secure checkout with multiple pricing tiers
- ⚡ **Instant Digital Delivery** - Automatic product delivery after purchase
- 📱 **Mobile-First Design** - Looks great on all devices
- 🔒 **Secure & Production-Ready** - Built with best practices
- 🎯 **SEO Optimized** - Meta tags and OpenGraph for social sharing
- 📊 **Analytics Ready** - Easy integration with Google Analytics & Facebook Pixel
- 💰 **Multiple Price Points** - Basic, Pro, and Ultimate packages

## 🎯 Perfect For

- AI Prompt Libraries
- Digital Templates
- Ebooks & Guides
- Online Courses
- Software Tools
- Design Assets
- Any digital product!

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Payment:** Stripe
- **Language:** TypeScript
- **Icons:** Lucide React

## 📋 Prerequisites

Before you begin, make sure you have:

- Node.js 18+ installed
- A Stripe account ([sign up free](https://stripe.com))
- Basic command line knowledge

## 🚀 Quick Start

### 1. Clone or Download

```bash
# If in a git repository
git clone <your-repo-url>
cd ai-prompt-shop

# Or just navigate to the project folder
cd ai-prompt-shop
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Stripe

#### Create Stripe Account & Get API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Sign up or log in
3. Go to **Developers > API Keys**
4. Copy your **Publishable key** (starts with `pk_test_`)
5. Copy your **Secret key** (starts with `sk_test_`)

#### Create Products in Stripe

1. Go to **Products** in Stripe Dashboard
2. Click **Add Product**
3. Create 3 products:

   **Product 1: Starter Pack**
   - Name: AI Prompt Library - Starter Pack
   - Description: 500+ Premium AI Prompts
   - Price: $2.99 USD (one-time payment)
   - Copy the **Price ID** (starts with `price_`)

   **Product 2: Pro Pack** ⭐ Most Popular
   - Name: AI Prompt Library - Pro Pack
   - Description: 1000+ Premium AI Prompts
   - Price: $4.99 USD (one-time payment)
   - Copy the **Price ID**

   **Product 3: Ultimate Pack**
   - Name: AI Prompt Library - Ultimate Pack
   - Description: 2000+ Prompts + Lifetime Updates
   - Price: $9.99 USD (one-time payment)
   - Copy the **Price ID**

### 4. Configure Environment Variables

```bash
# Copy the example file
cp .env.local.example .env.local
```

Edit `.env.local` and add your values:

```env
# Stripe Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
STRIPE_SECRET_KEY=sk_test_your_actual_key_here
STRIPE_WEBHOOK_SECRET=whsec_leave_empty_for_now

# Stripe Price IDs (from step 3)
NEXT_PUBLIC_STRIPE_PRICE_BASIC=price_your_basic_price_id
NEXT_PUBLIC_STRIPE_PRICE_PRO=price_your_pro_price_id
NEXT_PUBLIC_STRIPE_PRICE_ULTIMATE=price_your_ultimate_price_id

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser! 🎉

### 6. Test the Payment Flow

1. Click "Get Instant Access Now" button
2. You'll be redirected to Stripe Checkout
3. Use test card: `4242 4242 4242 4242`
4. Any future expiry date (e.g., 12/34)
5. Any 3-digit CVC (e.g., 123)
6. Any billing details
7. Complete purchase and see success page!

## 🔄 Setting Up Webhooks (For Production)

Webhooks allow Stripe to notify your app about successful payments.

### Local Development

```bash
# Install Stripe CLI
# Mac
brew install stripe/stripe-cli/stripe

# Windows / Linux - download from https://stripe.com/docs/stripe-cli

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhook
```

Copy the webhook signing secret (starts with `whsec_`) and add to `.env.local`:

```env
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

### Production Deployment

1. Deploy your app (Vercel, Netlify, etc.)
2. Go to Stripe Dashboard > **Developers > Webhooks**
3. Click **Add Endpoint**
4. Enter: `https://yourdomain.com/api/webhook`
5. Select events: `checkout.session.completed`
6. Copy the **Signing secret** and add to your production environment variables

## 📦 Product Delivery

Currently, the success page shows download buttons as placeholders. To actually deliver your product:

### Option 1: Direct Download Links (Simple)

1. Upload your PDF/files to your hosting or cloud storage (AWS S3, Google Drive, Dropbox)
2. Get shareable download links
3. Edit `app/success/page.tsx` and add the actual download URLs

### Option 2: Email Delivery (Recommended)

Integrate an email service to automatically send products:

**Using Resend (Recommended)**

```bash
npm install resend
```

Create `lib/email.ts`:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendProductEmail(email: string, planName: string) {
  await resend.emails.send({
    from: 'Your Store <onboarding@resend.dev>',
    to: email,
    subject: 'Your AI Prompt Library is Ready! 🎉',
    html: `
      <h1>Thank you for your purchase!</h1>
      <p>Download your ${planName}:</p>
      <a href="YOUR_DOWNLOAD_LINK">Download Now</a>
    `
  })
}
```

Update `app/api/webhook/route.ts` to send email after successful payment.

### Option 3: Secure Download Links

Generate unique, expiring download links for each customer using:
- AWS S3 Pre-signed URLs
- Firebase Storage
- Supabase Storage

## 🎨 Customization

### Change Branding

Edit `app/page.tsx`:
- Line 33: Main headline
- Line 37: Subheadline
- Line 78-86: Pricing plans
- Line 282: Footer text

### Change Colors

Edit `app/globals.css`:
- Lines 21-24: Gradient colors
- Tailwind classes: Replace `purple-600` and `blue-600` with your brand colors

### Add Your Logo

```bash
# Add logo to public folder
public/logo.png

# Update in app/page.tsx
<img src="/logo.png" alt="Logo" />
```

## 📊 Analytics Integration

### Google Analytics

Add to `app/layout.tsx`:

```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Facebook Pixel

Add to `app/layout.tsx`:

```typescript
<Script id="facebook-pixel">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_STRIPE_PRICE_BASIC`
   - `NEXT_PUBLIC_STRIPE_PRICE_PRO`
   - `NEXT_PUBLIC_STRIPE_PRICE_ULTIMATE`
   - `NEXT_PUBLIC_APP_URL` (your Vercel URL)
6. Click "Deploy"

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any Node.js hosting

## 🎯 Marketing Tips

### 1. Create Viral Social Media Content

- Share sample prompts on Twitter/LinkedIn
- Create before/after examples
- Post customer testimonials
- Use trending AI hashtags

### 2. Run Facebook/Instagram Ads

Target audience:
- Interests: ChatGPT, AI, Productivity, Marketing
- Age: 25-45
- Budget: Start with $10-20/day
- Use video ads showing product value

### 3. Google Ads

Keywords:
- "ChatGPT prompts"
- "AI prompts for business"
- "Best ChatGPT prompts"
- "AI productivity tools"

### 4. Content Marketing

- Write blog posts about AI prompt engineering
- Create YouTube tutorials
- Start a newsletter
- Guest post on Medium

### 5. Affiliate Program

- Offer 30% commission
- Use Gumroad or Lemon Squeezy for affiliate tracking
- Recruit influencers in AI/productivity space

## 💡 Growth Strategies

1. **Start with low price** ($2.99) to maximize conversions
2. **Collect emails** for future upsells
3. **Create urgency** with limited-time offers
4. **Add social proof** with real testimonials
5. **A/B test** headlines and pricing
6. **Upsell** with premium tiers or updates
7. **Build community** around your product

## 🔒 Security Best Practices

- ✅ Never commit `.env.local` to git (it's in `.gitignore`)
- ✅ Use environment variables for all secrets
- ✅ Validate webhook signatures
- ✅ Use Stripe's test mode during development
- ✅ Keep dependencies updated: `npm audit`

## 🐛 Troubleshooting

### Payment not working?

- Check Stripe keys are correct in `.env.local`
- Ensure Price IDs match your Stripe products
- Check browser console for errors
- Verify `NEXT_PUBLIC_APP_URL` is correct

### Webhook not receiving events?

- Check webhook secret is correct
- Verify endpoint URL is accessible
- Check Stripe Dashboard > Webhooks > Logs

### Styling looks broken?

```bash
# Rebuild Tailwind
npm run dev
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

## 🤝 Support

Need help? Have questions?

- 📧 Email: your-email@example.com
- 💬 Twitter: @yourusername
- 📖 Documentation: [Link to your docs]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 What's Next?

1. ✅ Set up your Stripe account
2. ✅ Configure environment variables
3. ✅ Customize the design
4. ✅ Add your digital product
5. ✅ Deploy to production
6. ✅ Start marketing!

---

**Good luck with your digital product business! 🚀**

If you make sales using this template, I'd love to hear about it!
