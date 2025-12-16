# 📝 Customization Checklist

Use this checklist to personalize your portfolio website.

## ✅ Essential Updates

### 1. Personal Information

#### Hero Section
File: `components/sections/Hero.tsx`

- [ ] Line 100: Replace "Your Name" with your actual name
- [ ] Lines 152-174: Update social media links
  - GitHub: `https://github.com/YOUR_USERNAME`
  - LinkedIn: `https://linkedin.com/in/YOUR_PROFILE`
  - Email: `your.email@example.com`

#### About Section
File: `components/sections/About.tsx`

- [ ] Lines 89-103: Write your personal bio
- [ ] Line 85: Update years of experience badge
- [ ] Line 93: Update number of projects badge

#### Contact Section
File: `components/sections/Contact.tsx`

- [ ] Line 26: Update email address
- [ ] Line 27: Update phone number
- [ ] Line 28: Update location
- [ ] Lines 32-36: Update social media links

#### Footer
File: `components/sections/Footer.tsx`

- [ ] Line 108: Update copyright name

#### Metadata (SEO)
File: `app/layout.tsx`

- [ ] Line 18: Update page title
- [ ] Line 19: Update description
- [ ] Line 20: Update keywords
- [ ] Line 21: Update author name

---

## 🎨 Content Updates

### 2. Projects Portfolio

File: `components/sections/Portfolio.tsx`

Replace the example projects (lines 8-65) with your actual projects:

```typescript
{
  title: "Your Project Name",
  category: "Full Stack Development", // or "Graphic Design" or "Digital Marketing"
  description: "Brief description of your project",
  image: "/project-image.jpg", // Add image to /public folder
  tags: ["React", "Node.js", "etc"],
  gradient: "from-indigo-500 to-blue-600",
  github: "https://github.com/user/repo", // or null if private
  live: "https://your-project-url.com",
}
```

**Steps:**
1. [ ] Add project images to `/public` folder
2. [ ] Update all 6 project objects with your work
3. [ ] Update project links (GitHub & live demos)

### 3. Services

File: `components/sections/Services.tsx`

Customize your service offerings (lines 14-55):
- [ ] Update service descriptions
- [ ] Modify features list for each service
- [ ] Adjust service titles if needed

---

## 🎨 Visual Customization

### 4. Color Theme

File: `app/globals.css`

Update CSS variables (lines 5-11):

```css
:root {
  --primary: #6366f1;      /* Main brand color */
  --secondary: #8b5cf6;    /* Secondary accent */
  --accent: #ec4899;       /* Highlight color */
}
```

**Color Combinations to Try:**
- **Blue Theme**: `#3b82f6, #60a5fa, #06b6d4`
- **Purple Theme**: `#8b5cf6, #a78bfa, #c084fc`
- **Green Theme**: `#10b981, #34d399, #6ee7b7`
- **Orange Theme**: `#f59e0b, #fbbf24, #fb923c`

### 5. Typography

File: `app/layout.tsx`

Currently using:
- Headings: Montserrat
- Body: Inter

To change fonts, update imports (lines 2-14):
```typescript
import { YourFont, AnotherFont } from "next/font/google";
```

---

## 📧 Functional Updates

### 6. Contact Form Setup

File: `components/sections/Contact.tsx`

Current form is simulated. To make it functional:

#### Option A: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update line 26-36 with:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

#### Option B: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Follow their React integration guide

#### Option C: Custom API
Create `app/api/contact/route.ts` with your email logic

---

## 🚀 Deployment

### 7. GitHub Setup

Already initialized! Next steps:

1. [ ] Create repository on GitHub
2. [ ] Connect local repo:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### 8. Deploy to Vercel

1. [ ] Visit [vercel.com](https://vercel.com)
2. [ ] Import your GitHub repository
3. [ ] Click "Deploy"
4. [ ] Your site is live! 🎉

---

## 📸 Images & Assets

### 9. Add Your Assets

Files to add to `/public` folder:

- [ ] Profile photo (for About section)
- [ ] Project screenshots (6 images for portfolio)
- [ ] Favicon (`favicon.ico`)
- [ ] Open Graph image (for social sharing)

**Recommended sizes:**
- Profile: 500x500px
- Projects: 1200x800px
- Favicon: 32x32px
- OG Image: 1200x630px

---

## 🔍 SEO Optimization

### 10. Additional SEO

File: `app/layout.tsx`

Add these metadata fields:

```typescript
export const metadata: Metadata = {
  // ... existing fields
  robots: "index, follow",
  openGraph: {
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter",
  },
};
```

---

## ✨ Final Touches

### 11. Testing Checklist

- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Test all external links (social media, projects)
- [ ] Verify all images load correctly
- [ ] Check page load performance
- [ ] Test on different browsers

### 12. Analytics (Optional)

Add Google Analytics:
1. Create GA4 property
2. Install `npm install @next/third-parties`
3. Add to `layout.tsx`

---

## 💡 Pro Tips

- **Performance**: Keep images under 500KB (use WebP format)
- **Accessibility**: Ensure all images have alt text
- **Mobile First**: Test on mobile devices frequently
- **Content**: Keep descriptions concise and impactful
- **Updates**: Regularly add new projects to portfolio

---

**Need help?** Check the main README.md for detailed documentation.

**Questions?** Create an issue on GitHub or reach out!
