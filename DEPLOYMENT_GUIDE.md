# Vectorium Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   npm run build
   vercel --prod
   ```

4. **Custom Domain Setup:**
   - Go to Vercel Dashboard
   - Select your project
   - Go to Settings > Domains
   - Add `www.vectorium.co` and `vectorium.co`
   - Configure DNS records as instructed

### Option 2: Netlify
1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

4. **Custom Domain Setup:**
   - Go to Netlify Dashboard
   - Select your site
   - Go to Domain Management
   - Add custom domain `www.vectorium.co`
   - Configure DNS records

### Option 3: GitHub Pages
1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

## 🔧 Pre-Deployment Checklist

### 1. Google Analytics Setup
Replace `G-XXXXXXXXXX` in `index.html` with your actual GA4 tracking ID:

```html
<!-- Replace this line -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    page_title: document.title,
    page_location: window.location.href,
  });
</script>
```

### 2. Build and Test Locally
```bash
npm run build
npm run preview
```

### 3. Verify SEO Files
- ✅ `sitemap.xml` is in `public/` directory
- ✅ `robots.txt` is in `public/` directory
- ✅ All URLs point to `https://www.vectorium.co/`

## 📊 Post-Deployment Setup

### 1. Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.vectorium.co/`
3. Verify ownership (HTML file upload or DNS record)
4. Submit sitemap: `https://www.vectorium.co/sitemap.xml`

### 2. Google Analytics 4
1. Go to [Google Analytics](https://analytics.google.com)
2. Create new GA4 property for `vectorium.co`
3. Get your tracking ID (format: G-XXXXXXXXXX)
4. Update `index.html` with the real tracking ID

### 3. URL Verification
Test these URLs after deployment:
- ✅ `https://www.vectorium.co/`
- ✅ `https://www.vectorium.co/#vision`
- ✅ `https://www.vectorium.co/#technology`
- ✅ `https://www.vectorium.co/#ai-asset-manager`
- ✅ `https://www.vectorium.co/#market`
- ✅ `https://www.vectorium.co/#executive-structure`
- ✅ `https://www.vectorium.co/#roadmap`
- ✅ `https://www.vectorium.co/#contact`
- ✅ `https://www.vectorium.co/sitemap.xml`
- ✅ `https://www.vectorium.co/robots.txt`

## 🔍 Performance Optimization

### Build Optimization
The Vite config is optimized for production:
- Code splitting for vendor libraries
- Terser minification
- Asset optimization
- Source map disabled for production

### SEO Optimization
- Meta tags configured
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Cards
- Canonical URLs
- Sitemap and robots.txt

## 🚨 Troubleshooting

### Common Issues
1. **404 on refresh:** Ensure SPA routing is configured
2. **Assets not loading:** Check base path in vite.config.ts
3. **SEO not working:** Verify meta tags and structured data
4. **Analytics not tracking:** Check GA4 tracking ID

### Debug Commands
```bash
# Check build output
npm run build && ls -la dist/

# Test locally
npm run preview

# Check for errors
npm run lint
```

## 📈 Monitoring Setup

### Essential Tools
1. **Google Search Console** - SEO monitoring
2. **Google Analytics 4** - Traffic analytics
3. **PageSpeed Insights** - Performance monitoring
4. **GTmetrix** - Detailed performance analysis

### Key Metrics to Track
- Page load speed
- Core Web Vitals
- Search rankings for target keywords
- Organic traffic growth
- User engagement metrics

## 🎯 Next Steps After Deployment

1. **Submit to search engines:**
   - Google Search Console
   - Bing Webmaster Tools
   - Yandex Webmaster

2. **Social media setup:**
   - Create Twitter account (@vectorium)
   - Create LinkedIn company page
   - Update social URLs in structured data

3. **Content marketing:**
   - Regular blog posts about crypto energy
   - Industry news and updates
   - Technical documentation

4. **Link building:**
   - Industry partnerships
   - Guest posting
   - Directory submissions

## 📞 Support

For deployment issues:
- Check the console for build errors
- Verify all environment variables
- Ensure all dependencies are installed
- Test locally before deploying

Your site is now ready for production deployment! 🚀
