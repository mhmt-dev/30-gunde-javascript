# Deployment Guide - InsightHub Blog

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   cd /vercel/sandbox/adsense-blog
   git init
   git add .
   git commit -m "Initial commit - AdSense ready blog"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your blog will be live in ~2 minutes

3. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

### Option 3: Self-Hosted (VPS/Cloud)

1. **Requirements**
   - Node.js 18+ installed
   - PM2 or similar process manager
   - Nginx for reverse proxy

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "insighthub" -- start
   pm2 save
   pm2 startup
   ```

4. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Post-Deployment Checklist

### 1. Update Site URL
After deployment, update the base URL in:
- `app/sitemap.ts` - Change `https://insighthub.com` to your actual domain
- `app/robots.ts` - Update sitemap URL

### 2. Verify All Pages Work
Test these URLs:
- ✅ Homepage: `/`
- ✅ Articles: `/articles`
- ✅ Categories: `/categories`
- ✅ About: `/about`
- ✅ Contact: `/contact`
- ✅ Privacy: `/privacy`
- ✅ Terms: `/terms`
- ✅ Disclaimer: `/disclaimer`
- ✅ Sitemap: `/sitemap.xml`
- ✅ Robots: `/robots.txt`

### 3. Test Individual Articles
- Click on any article from homepage
- Verify images load correctly
- Check related articles section
- Test social share buttons

### 4. Mobile Testing
- Open site on mobile device
- Test navigation menu
- Verify responsive layout
- Check image loading

### 5. Performance Check
- Run Google PageSpeed Insights
- Aim for 90+ score
- Fix any issues found

## Google Search Console Setup

1. **Add Property**
   - Go to https://search.google.com/search-console
   - Add your domain
   - Verify ownership (DNS or HTML file)

2. **Submit Sitemap**
   - In Search Console, go to Sitemaps
   - Submit: `https://yourdomain.com/sitemap.xml`

3. **Monitor Indexing**
   - Check "Coverage" report
   - Ensure pages are being indexed
   - Fix any errors

## Google AdSense Application

### Prerequisites (Wait 1-2 Weeks After Deployment)
- ✅ Site is live and accessible
- ✅ Content is indexed by Google
- ✅ Domain is at least 6 months old (preferred, not required)
- ✅ Site has regular traffic (even small amounts)

### Application Steps

1. **Apply for AdSense**
   - Go to https://www.google.com/adsense
   - Click "Get Started"
   - Enter your website URL
   - Fill in your information

2. **Add AdSense Code**
   - Copy the AdSense code provided
   - Add to `app/layout.tsx` in the `<head>` section:
   ```tsx
   <head>
     {/* AdSense Code */}
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"></script>
   </head>
   ```

3. **Wait for Approval**
   - Usually takes 1-3 days
   - Check email for approval notification
   - Some applications may take up to 2 weeks

### After Approval

1. **Create Ad Units**
   - In AdSense dashboard, create ad units
   - Choose sizes: 728x90 (header), 300x250 (sidebar), 336x280 (content)

2. **Place Ads Strategically**
   
   **Header Ad** (app/layout.tsx):
   ```tsx
   <header>
     {/* Navigation */}
     <div className="max-w-7xl mx-auto px-4">
       {/* AdSense Header Ad */}
       <ins className="adsbygoogle"
            style={{display:'block'}}
            data-ad-client="ca-pub-XXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="horizontal"></ins>
     </div>
   </header>
   ```

   **Sidebar Ad** (article pages):
   ```tsx
   <aside className="lg:col-span-1">
     <ins className="adsbygoogle"
          style={{display:'block'}}
          data-ad-client="ca-pub-XXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="rectangle"></ins>
   </aside>
   ```

   **In-Article Ad**:
   ```tsx
   <div className="my-8">
     <ins className="adsbygoogle"
          style={{display:'block', textAlign:'center'}}
          data-ad-client="ca-pub-XXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="fluid"></ins>
   </div>
   ```

3. **Initialize Ads**
   Add to `app/layout.tsx` after body:
   ```tsx
   <Script id="adsense-init">
     {`(adsbygoogle = window.adsbygoogle || []).push({});`}
   </Script>
   ```

## Optimization Tips

### 1. Content Strategy
- Add 2-3 new articles per week
- Update old articles regularly
- Respond to comments
- Share on social media

### 2. SEO Improvements
- Add internal links between articles
- Optimize images (compress, add alt text)
- Use descriptive URLs
- Add schema markup for articles

### 3. Performance
- Enable caching
- Use CDN for images
- Minimize JavaScript
- Enable compression

### 4. Analytics
- Add Google Analytics
- Track user behavior
- Monitor bounce rate
- Analyze popular content

## Troubleshooting

### AdSense Rejection Reasons

1. **Insufficient Content**
   - Solution: Add more articles (aim for 30+)
   - Ensure each article is 1000+ words

2. **Site Under Construction**
   - Solution: Ensure all pages are complete
   - Remove any "coming soon" messages

3. **Difficult Navigation**
   - Solution: Simplify menu structure
   - Add breadcrumbs
   - Improve internal linking

4. **Policy Violations**
   - Solution: Review AdSense policies
   - Remove any prohibited content
   - Ensure content is original

5. **Low-Value Content**
   - Solution: Improve article quality
   - Add more depth and detail
   - Include images and formatting

### Common Issues

**Images Not Loading**
- Check image URLs in `lib/articles.ts`
- Verify Unsplash URLs are accessible
- Add `remotePatterns` in `next.config.ts`

**Build Errors**
- Run `npm run build` locally first
- Fix any TypeScript errors
- Check for missing dependencies

**Slow Performance**
- Optimize images
- Enable caching
- Use CDN
- Minimize CSS/JS

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **AdSense Help**: https://support.google.com/adsense
- **Search Console**: https://search.google.com/search-console
- **PageSpeed Insights**: https://pagespeed.web.dev

## Success Metrics

Track these after deployment:
- ✅ Google indexing (50+ pages indexed)
- ✅ Organic traffic (even 10-20 visitors/day is good)
- ✅ Low bounce rate (<70%)
- ✅ Good page speed (90+ score)
- ✅ Mobile usability (no errors)

---

**Good luck with your AdSense application! 🎉**

Your blog is professionally built and meets all requirements. Follow this guide, and you should get approved within 1-2 weeks of applying.
