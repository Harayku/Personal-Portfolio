# 🧑‍💻 Personal Portfolio — React + Tailwind CSS

A fully-featured personal portfolio website built with **Vite + React + React Router + Tailwind CSS v4**.

## 🚀 Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with dark mode toggle, mobile drawer
│   ├── Footer.jsx          # Footer with links and socials
│   ├── ProjectCard.jsx     # Card for projects AND certificates
│   ├── ProjectGrid.jsx     # Responsive grid + loading skeletons + empty state
│   ├── CategoryFilter.jsx  # Search bar + category pill buttons
│   ├── ContactForm.jsx     # Validated form with success/error states
│   ├── Modal.jsx           # Certificate detail modal (Escape key, focus trap)
│   └── SocialIcons.jsx     # Inline SVG: GitHub, LinkedIn, Twitter/X
├── pages/
│   ├── Home.jsx            # Hero, highlights, featured projects, CTA
│   ├── Projects.jsx        # Full project/cert grid with filtering
│   ├── About.jsx           # Bio, skills, education
│   └── Contact.jsx         # Contact form + info panel
├── data/
│   ├── projects.js         # ← REPLACE: your projects data
│   ├── certificates.js     # ← REPLACE: your certifications
│   ├── about.js            # ← REPLACE: your personal info
│   └── contact.js          # ← REPLACE: contact details + API endpoint
├── App.jsx                 # Router setup, lazy loading, dark mode
├── main.jsx                # Entry point
└── index.css               # Tailwind v4 + custom CSS (glass, gradient-text, etc.)
public/
├── images/                 # ← ADD: your screenshots, badges, avatar
├── certs/                  # ← ADD: your certificate PDFs
└── resume.pdf              # ← ADD: your resume
netlify/
└── functions/
    └── contact.js          # Serverless contact form handler
```

## ✏️ Personalizing the Site

All content is driven from `src/data/`. Search for **`REPLACE`** comments across the codebase — every one needs your real information.

### Priority changes:

1. **`src/data/about.js`** — Your name, tagline, bio, email, GitHub, LinkedIn
2. **`src/data/projects.js`** — Your real project entries
3. **`src/data/certificates.js`** — Your certifications with credential IDs
4. **`src/data/contact.js`** — Your contact email, API endpoint
5. **`src/components/Navbar.jsx`** & **`Footer.jsx`** — Brand name in the logo
6. **`index.html`** — SEO title and meta description
7. **`public/images/`** — Add your photos, screenshots, badges (see `public/images/README.md`)
8. **`public/resume.pdf`** — Your resume

## 🎨 Design System

| Class          | Purpose                              |
|----------------|--------------------------------------|
| `.glass`       | Glassmorphism card (backdrop blur)   |
| `.gradient-text` | Sky→Violet→Pink gradient text      |
| `.glow-border` | Animated gradient border on hover    |
| `.tag`         | Pill-style tech badge                |
| `.section-title` | Large section headings             |
| `.section-sub` | Subtitle text below section heading  |
| `.animate-float` | Floating animation (avatar)        |
| `.animate-glow` | Pulsing glow animation              |
| `.bg-grid`     | Subtle dot grid background           |

## 📧 Contact Form Setup

The form submits to `contact.apiEndpoint` (set in `src/data/contact.js`).

### Netlify (recommended)
1. Update `contact.js` → `apiEndpoint: "/.netlify/functions/contact"`
2. Install SendGrid: `npm install @sendgrid/mail`
3. Uncomment the SendGrid code in `netlify/functions/contact.js`
4. Add `SENDGRID_API_KEY` in Netlify environment variables
5. Push to GitHub and connect to Netlify

### Vercel
1. Copy the Vercel example from the bottom of `netlify/functions/contact.js`
2. Create `/api/contact.js` in the project root
3. Update `contact.js` → `apiEndpoint: "/api/contact"`
4. Set up `SENDGRID_API_KEY` in Vercel environment variables

### Alternatives
- **Resend**: `npm install resend` — modern, easy setup
- **Nodemailer + Gmail SMTP**: Free but requires app passwords
- **EmailJS**: No backend needed, use from the frontend directly

## 🚢 Deployment

### Netlify (drag & drop)
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Netlify (Git integration)
1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build` | Publish dir: `dist`

### Vercel
```bash
npx -y vercel --prod
```
Or connect your GitHub repo at [vercel.com](https://vercel.com).

## 🔧 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Vite | 8.x | Build tool |
| React | 19.x | UI framework |
| React Router | 7.x | SPA routing |
| Tailwind CSS | 4.x | Utility-first styling |
| lucide-react | 1.x | Icon library |
| @headlessui/react | 2.x | Accessible UI primitives |

## ♿ Accessibility

- Semantic HTML throughout (`<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`, `<aside>`)
- ARIA labels on all interactive elements
- `aria-pressed` on filter buttons
- `aria-dialog` + focus trap on certificate modal
- Skip-to-content link at page top
- Screen reader-only labels where needed
- `role="alert"` on form validation messages
