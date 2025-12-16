# 🚀 Modern Portfolio Website

A stunning, performant portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **⚡ High Performance**: Built with Next.js 14+ App Router for optimal performance
- **🎨 Modern Design**: Stunning UI with smooth animations powered by Framer Motion
- **📱 Fully Responsive**: Works seamlessly on all devices
- **🎯 SEO Optimized**: Built-in SEO best practices for better visibility
- **🔧 Type Safe**: Full TypeScript support for robust code
- **🎭 Smooth Animations**: Fluid page transitions and interactive elements
- **📬 Contact Form**: Functional contact form with validation
- **🌈 Custom Theme**: Beautiful dark theme with gradient accents

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter & Montserrat (Google Fonts)

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles and theme
├── components/
│   └── sections/
│       ├── Navbar.tsx      # Navigation with smooth scroll
│       ├── Hero.tsx        # Hero section with typing animation
│       ├── About.tsx       # About section highlighting hybrid skills
│       ├── Services.tsx    # Services grid (Dev/Design/Marketing)
│       ├── Portfolio.tsx   # Project showcase grid
│       ├── Contact.tsx     # Contact form and information
│       └── Footer.tsx      # Footer with links and social media
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization Guide

### 1. Personal Information

**Hero Section** (`components/sections/Hero.tsx`):
- Update "Your Name" (line 100)
- Modify social media links (lines 152-174)

**About Section** (`components/sections/About.tsx`):
- Add your bio and experience (lines 89-103)

**Contact Section** (`components/sections/Contact.tsx`):
- Update email, phone, location (lines 26-30)
- Update social media links (lines 32-36)

**Metadata** (`app/layout.tsx`):
- Update title, description, keywords (lines 18-28)

### 2. Projects

Edit `components/sections/Portfolio.tsx` (lines 8-65):
- Replace with your actual projects
- Add project images to `/public` folder
- Update GitHub and live demo links

### 3. Theme Colors

Edit `app/globals.css`:
```css
:root {
  --primary: #6366f1;      /* Indigo */
  --secondary: #8b5cf6;    /* Purple */
  --accent: #ec4899;       /* Pink */
}
```

### 4. Form Submission

Current form is simulated. To make it functional:
- Use [Formspree](https://formspree.io/)
- Use [EmailJS](https://www.emailjs.com/)
- Or create custom API route

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- Netlify
- AWS Amplify
- Any Node.js hosting

---

**Made with ❤️ using Next.js, TypeScript & Tailwind CSS**
