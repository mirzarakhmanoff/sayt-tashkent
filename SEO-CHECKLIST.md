# SEO Optimization Checklist

## ✅ Completed

### 1. Metadata Optimization
- [x] Dynamic titles for each language (uz/ru)
- [x] SEO-optimized descriptions (155-160 characters)
- [x] Relevant keywords for each language
- [x] Author and publisher information
- [x] Canonical URLs for each page
- [x] Alternate language links (hreflang)

### 2. Open Graph & Social Media
- [x] Open Graph title, description, image
- [x] Twitter Card metadata
- [x] Locale and alternate locale tags
- [x] Social media image (1200x630px recommended)

### 3. Structured Data (JSON-LD)
- [x] Organization schema
- [x] Website schema
- [x] Local Business schema
- [x] Service schema
- [x] Breadcrumb schema

### 4. Technical SEO
- [x] robots.txt file
- [x] XML sitemap (dynamic)
- [x] Web app manifest
- [x] Favicon configuration
- [x] Apple touch icons
- [x] Mobile-friendly viewport
- [x] Language-based routing (/uz, /ru)

### 5. Robots & Crawling
- [x] Proper robots meta tags
- [x] Google/Yandex bot configuration
- [x] Max image preview and snippet settings

---

## ⚠️ Todo (Manual Steps Required)

### 1. Images & Media
- [ ] **Add OG image**: Create `/public/og-image.jpg` (1200x630px)
  - Design a professional banner with your logo and service description
  - Include Uzbek and Russian text if needed

- [ ] **Add favicons**:
  - `/public/favicon.ico` (32x32, 16x16)
  - `/public/icon-192.png` (192x192)
  - `/public/icon-512.png` (512x512)
  - `/public/apple-touch-icon.png` (180x180)
  - Use tools like [Favicon Generator](https://realfavicongenerator.net/)

- [ ] **Optimize all images**:
  - Add `alt` attributes to all images
  - Use next/image component for automatic optimization
  - Compress images (use WebP format)
  - Implement lazy loading

### 2. Verification Codes
Update in `app/[lang]/layout.tsx`:
```typescript
verification: {
  google: "your-google-verification-code",  // ← Replace this
  yandex: "your-yandex-verification-code",  // ← Replace this
}
```

**How to get verification codes:**
1. **Google Search Console**: https://search.google.com/search-console
   - Add property → HTML tag method → Copy meta tag content
2. **Yandex Webmaster**: https://webmaster.yandex.com/
   - Add site → HTML tag method → Copy meta tag content

### 3. Update Contact Information
Update in `components/structured-data.tsx`:
```typescript
telephone: "+998901234567",  // ← Your real phone number
```

Update social media links:
```typescript
sameAs: [
  "https://t.me/sayttashkent",         // ← Your Telegram
  "https://instagram.com/sayttashkent", // ← Your Instagram
  "https://facebook.com/sayttashkent",  // ← Your Facebook
],
```

### 4. Update Domain
If your domain is different from `sayt-tashkent.uz`, update in:
- `app/[lang]/layout.tsx` (baseUrl)
- `app/robots.ts` (sitemap URL)
- `app/sitemap.ts` (baseUrl)
- `components/structured-data.tsx` (all URLs)

### 5. Performance Optimization
- [ ] Enable Next.js image optimization
- [ ] Add loading states for components
- [ ] Implement code splitting
- [ ] Optimize fonts (already using Font.display: swap ✓)
- [ ] Enable compression (Gzip/Brotli on server)
- [ ] Set up CDN for static assets

### 6. Analytics Setup
- [ ] Add Google Analytics 4
- [ ] Add Yandex Metrica
- [ ] Set up conversion tracking
- [ ] Configure goal tracking

Example (add to `app/layout.tsx`):
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 7. Content Optimization
- [ ] Add H1-H6 heading hierarchy
- [ ] Use semantic HTML (header, nav, main, section, article, footer)
- [ ] Add schema markup for FAQ section (if applicable)
- [ ] Create blog section for content marketing
- [ ] Add customer testimonials with schema markup

### 8. Local SEO
- [ ] Register on Google My Business
- [ ] Add business to Yandex Maps
- [ ] Add business to 2GIS
- [ ] Get backlinks from local directories
- [ ] Add location-specific keywords

### 9. Mobile Optimization
- [ ] Test mobile usability (Google Mobile-Friendly Test)
- [ ] Test page speed (PageSpeed Insights)
- [ ] Ensure touch targets are large enough (48x48px minimum)
- [ ] Test on real devices

### 10. Security & HTTPS
- [ ] Ensure HTTPS is enabled
- [ ] Add security headers (CSP, X-Frame-Options, etc.)
- [ ] Set up SSL certificate
- [ ] Configure HSTS

---

## 🔧 Advanced SEO Features

### A. Add Blog/Articles Section
Create dynamic routes for blog posts with individual metadata:
```
app/[lang]/blog/[slug]/page.tsx
```

### B. Add FAQ Section
With FAQ schema markup for rich snippets in search results.

### C. Implement AMP (Accelerated Mobile Pages)
For faster mobile loading and better mobile SEO.

### D. Add Video Content
With VideoObject schema markup if you create promotional videos.

### E. International SEO
- Consider adding English version (/en)
- Use proper hreflang tags (already implemented ✓)
- Target different regions

---

## 📊 SEO Monitoring

### Tools to Use:
1. **Google Search Console** - Track search performance
2. **Yandex Webmaster** - Track Yandex search performance
3. **Google Analytics** - Track user behavior
4. **PageSpeed Insights** - Monitor site speed
5. **Lighthouse** - Audit performance, accessibility, SEO
6. **Screaming Frog** - Technical SEO audit

### Regular Tasks:
- [ ] Submit sitemap to Google/Yandex
- [ ] Monitor crawl errors
- [ ] Track keyword rankings
- [ ] Analyze user behavior
- [ ] Update content regularly
- [ ] Build quality backlinks

---

## 🎯 Quick Wins

1. **Create og-image.jpg** - Improves social media sharing
2. **Add Google/Yandex verification** - Start tracking in Search Console
3. **Set up Analytics** - Understand your users
4. **Optimize images** - Faster loading = better SEO
5. **Add real contact info** - Better local SEO

---

## 📝 Notes

- All technical SEO foundations are now in place
- Focus on content quality and user experience
- Build backlinks from relevant websites
- Keep content fresh and updated
- Monitor and iterate based on analytics

Good luck with your SEO! 🚀
