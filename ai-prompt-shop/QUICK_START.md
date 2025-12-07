# ⚡ Quick Start Guide - Start Making Money in 30 Minutes

## ✅ Step-by-Step Setup

### Step 1: Install Dependencies (2 minutes)

```bash
cd ai-prompt-shop
npm install
```

### Step 2: Set Up Stripe (10 minutes)

1. **Create Stripe Account**
   - Go to https://stripe.com
   - Sign up (it's free!)
   - Skip onboarding for now (use Test Mode)

2. **Get API Keys**
   - Go to https://dashboard.stripe.com/test/apikeys
   - Copy **Publishable key** (starts with `pk_test_`)
   - Copy **Secret key** (starts with `sk_test_`)

3. **Create Products**
   - Go to https://dashboard.stripe.com/test/products
   - Click **"Add product"**

   **Create Product #1:**
   ```
   Name: AI Prompt Library - Starter Pack
   Description: 500+ Premium AI Prompts
   Pricing: One-time payment
   Price: $2.99 USD
   ```
   Click Save → Copy the **Price ID** (starts with `price_`)

   **Create Product #2:**
   ```
   Name: AI Prompt Library - Pro Pack
   Description: 1000+ Premium AI Prompts
   Pricing: One-time payment
   Price: $4.99 USD
   ```
   Click Save → Copy the **Price ID**

   **Create Product #3:**
   ```
   Name: AI Prompt Library - Ultimate Pack
   Description: 2000+ Prompts + Lifetime Updates
   Pricing: One-time payment
   Price: $9.99 USD
   ```
   Click Save → Copy the **Price ID**

### Step 3: Configure Environment (3 minutes)

```bash
# Copy the example file
cp .env.local.example .env.local
```

Open `.env.local` in a text editor and fill in:

```env
# Paste your Stripe keys here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE

# Paste your Price IDs here
NEXT_PUBLIC_STRIPE_PRICE_BASIC=price_YOUR_BASIC_ID
NEXT_PUBLIC_STRIPE_PRICE_PRO=price_YOUR_PRO_ID
NEXT_PUBLIC_STRIPE_PRICE_ULTIMATE=price_YOUR_ULTIMATE_ID

# Keep these as is
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Save the file!

### Step 4: Run Locally (1 minute)

```bash
npm run dev
```

Open http://localhost:3000 in your browser! 🎉

### Step 5: Test Payment (5 minutes)

1. Click **"Get Instant Access Now"**
2. You'll be redirected to Stripe Checkout
3. Use test credit card:
   ```
   Card Number: 4242 4242 4242 4242
   Expiry: Any future date (e.g., 12/34)
   CVC: Any 3 digits (e.g., 123)
   Name: Test User
   Email: test@example.com
   ```
4. Complete the payment
5. You'll be redirected to the success page! ✅

Check your Stripe Dashboard to see the test payment!

### Step 6: Create Your Product (30 minutes - 2 hours)

You need to create the actual digital product. Here are options:

#### Option A: Quick Start (Use AI - 30 minutes)

**Use ChatGPT to generate prompts:**

```
Prompt to ChatGPT:
"Create a comprehensive list of 50 professional ChatGPT prompts for [business/marketing/coding/writing].

For each prompt include:
1. Category
2. Use case
3. The actual prompt
4. Expected output example

Format as a well-structured document."
```

Repeat for different categories until you have 500-1000 prompts.

#### Option B: Curate Existing (1-2 hours)

1. Search Twitter for popular AI prompts
2. Check Reddit r/ChatGPT
3. Browse prompt websites
4. Test and organize the best ones
5. Add your own commentary/improvements

#### Option C: Research & Create (2-4 hours)

1. Research your target audience's problems
2. Create custom prompts solving those problems
3. Test each prompt thoroughly
4. Organize by category
5. Add examples and use cases

**Format Your Product:**
- Use Google Docs or Microsoft Word
- Export as PDF
- Make it look professional:
  - Add cover page
  - Table of contents
  - Clear categories
  - Easy to navigate

### Step 7: Add Download Links (10 minutes)

1. **Upload your product file:**
   - Google Drive (Make shareable, get link)
   - Dropbox (Get sharing link)
   - Amazon S3 (If you're technical)

2. **Update success page:**
   Edit `app/success/page.tsx` around line 50-60

   Replace the download button's `onClick` or add `href`:
   ```tsx
   <a
     href="YOUR_DOWNLOAD_LINK_HERE"
     download
     className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow flex items-center gap-2"
   >
     <Download className="w-5 h-5" />
     Download
   </a>
   ```

### Step 8: Deploy to Production (10 minutes)

**Using Vercel (Recommended - FREE):**

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Add Environment Variables:
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
     - `STRIPE_SECRET_KEY`
     - `NEXT_PUBLIC_STRIPE_PRICE_BASIC`
     - `NEXT_PUBLIC_STRIPE_PRICE_PRO`
     - `NEXT_PUBLIC_STRIPE_PRICE_ULTIMATE`
     - `NEXT_PUBLIC_APP_URL` (use your Vercel URL)
   - Click "Deploy"

3. **Switch to Live Mode in Stripe:**
   - Go to Stripe Dashboard
   - Toggle from "Test mode" to "Live mode"
   - Get new API keys (pk_live_ and sk_live_)
   - Create products again (same as before)
   - Update environment variables in Vercel

4. **Set up Webhooks:**
   - Stripe Dashboard → Developers → Webhooks
   - Add endpoint: `https://your-domain.vercel.app/api/webhook`
   - Select event: `checkout.session.completed`
   - Copy webhook secret to Vercel env vars

Done! Your store is LIVE! 🚀

## 🎯 Now Start Marketing!

### Day 1: Free Marketing

1. **Twitter/X:**
   ```
   I just launched my AI Prompt Library! 🚀

   1000+ tested ChatGPT prompts for:
   ✅ Business
   ✅ Marketing
   ✅ Coding
   ✅ Writing

   And much more!

   Here's a free sample: [share 1 great prompt]

   Full library: [your link]
   ```

2. **Reddit Post (r/ChatGPT):**
   ```
   Title: "I spent 3 months testing ChatGPT prompts. Here are my top 10"

   [Share 10 amazing prompts with examples]

   Edit: Since people are asking, I've collected 1000+ prompts here: [your link]
   ```

3. **LinkedIn:**
   ```
   Most professionals waste 5+ hours per week on ChatGPT prompts that don't work.

   Here's the framework I use:
   [Share your best prompt formula]

   I've collected 1000+ prompts like this: [your link]
   ```

### Day 2-7: Content Blitz

- Post 3x per day on Twitter
- Share in Facebook groups (10+ relevant groups)
- Post on LinkedIn
- Create TikTok/Reels (show prompts in action)
- Answer questions in AI communities

### Week 2: Paid Ads

Start with $10-20/day:
- Facebook ads targeting "ChatGPT" interest
- Google ads for "chatgpt prompts buy"

See MARKETING.md for detailed strategy!

## 💰 Expected Results

**Week 1 (Free Marketing):**
- 500-2,000 visitors
- 1-3% conversion
- 5-60 sales
- $15-300 revenue

**Week 2-4 (With Ads):**
- 2,000-10,000 visitors
- 2-4% conversion
- 40-400 sales
- $200-2,000 revenue

**Month 2+ (Scaling):**
- 10,000+ visitors
- 3-5% conversion
- 300-500 sales
- $1,500-$2,500 revenue

## 🐛 Troubleshooting

**❌ "Payment doesn't work"**
- Check Stripe keys in .env.local
- Make sure you're using test keys for testing
- Check browser console for errors

**❌ "Build fails"**
- Run `npm install` again
- Check Node.js version: `node --version` (need 18+)
- Delete `node_modules` and `.next` folders, reinstall

**❌ "Page looks broken"**
- Clear browser cache
- Run `npm run dev` again
- Check if all CSS files are present

**❌ "No sales after 1 week"**
- You need TRAFFIC first! See MARKETING.md
- Test your conversion rate (need 100+ visitors)
- Try lowering the price to $2.99

**❌ "Stripe webhook not working"**
- Add webhook URL in Stripe Dashboard
- Copy webhook secret to env vars
- Check webhook logs in Stripe

## 📞 Need Help?

1. Check README.md for detailed docs
2. Check MARKETING.md for marketing help
3. Google your specific error
4. Ask in communities:
   - r/Entrepreneur
   - Indie Hackers
   - Twitter #BuildInPublic

## 🎉 You're All Set!

**You now have:**
- ✅ Working payment system
- ✅ Beautiful landing page
- ✅ Digital product
- ✅ Live website
- ✅ Marketing strategy

**All you need now is TRAFFIC!**

Start posting, sharing, and promoting your product.

The first sale is always the hardest. After that, it gets easier! 💪

Good luck! 🚀💰

---

**Quick Checklist:**
- [ ] npm install ✓
- [ ] Stripe account created ✓
- [ ] Products created in Stripe ✓
- [ ] .env.local configured ✓
- [ ] Tested locally ✓
- [ ] Created digital product ✓
- [ ] Added download links ✓
- [ ] Deployed to Vercel ✓
- [ ] Started marketing ✓
- [ ] Made first sale! 🎉
