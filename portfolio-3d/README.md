# 🌌 K Satish Phanindra - Cinematic 3D Portfolio

A **scroll-stopping, cinematic 3D portfolio** website built with **Next.js 14**, **Three.js**, and **React Three Fiber**.

## 🚀 Quick Start

```bash
# Start development server
npm run dev

# Build for production
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
app/                    # Next.js app routes & API endpoints
├── api/                # REST API routes (contact, projects, skills)
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx            # Home page

components/3d/          # Three.js 3D components
├── Hero3D.tsx          # Particle hero with text animation
├── Services3D.tsx      # 6 service cards grid
├── Portfolio3D.tsx     # 3D gallery with modal
├── SkillsUniverse.tsx  # Orbiting skill nodes
└── ContactForm3D.tsx   # Contact form with celebration

hooks/                  # Custom React hooks
├── useProjects.ts      # Fetch projects from API
└── useSkills.ts        # Fetch skills from API

lib/
├── api-client.ts       # Axios instance & API methods
└── utils.ts            # Utility functions

types/
└── index.ts            # TypeScript interfaces

public/
├── ai-assets/          # AI-generated images & videos
├── models/             # 3D .glb models
└── fonts/              # Custom fonts
```

## 🎨 Design System

| Element | Value |
|---------|-------|
| **Primary Dark** | `#0A0A0A` |
| **Accent Orange** | `#FF6A00` |
| **Accent Blue** | `#0066FF` |
| **Success Green** | `#00FF88` |
| **Display Font** | Satoshi Bold |
| **Body Font** | DM Sans |

## 🔧 Environment Variables

```env
# Required
NEXT_PUBLIC_API_URL=http://localhost:5000

# Optional
NEXT_PUBLIC_CLOUDINARY_NAME=your_cloudinary_name
NEXT_PUBLIC_ENABLE_3D=true
```

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| **Next.js 14** | React framework |
| **Three.js** | 3D graphics |
| **React Three Fiber** | React renderer for Three.js |
| **@react-three/drei** | Helper utilities |
| **Framer Motion** | Component animations |
| **GSAP** | Advanced timeline animations |
| **Tailwind CSS** | Utility CSS styling |
| **Axios** | HTTP requests |
| **React Hook Form** | Form handling |
| **Zod** | Schema validation |
| **Zustand** | State management |
| **Cannon-es** | Physics engine |

## ✅ Build Status

**Latest Build:** ✓ Successful (Compiled 4.0s)

```
✓ TypeScript checks passed
✓ All routes compiled
✓ Static pages generated
✓ Production ready
```

## 🎬 Component Status

| Component | Status | Task |
|-----------|--------|------|
| **Hero3D** | 🔨 WIP | Build particle system + text animation |
| **Services3D** | ✓ Placeholder | Add scroll animations |
| **Portfolio3D** | ✓ Placeholder | Add 3D gallery + modal |
| **SkillsUniverse** | ✓ Placeholder | Add orbit physics + interactions |
| **ContactForm3D** | ✓ Placeholder | Add validation + celebration animation |

## 🚀 Next Steps

### 1. **Build Hero3D Component**
Add interactive particle system with:
- 500 converging cubes → logo shape
- 3D text animation ("PHANINDRA")
- Typewriter tagline effect
- Glow effects and scroll trigger

### 2. **Generate AI Assets**
- 5 section background images (from `AI_GENERATION_PROMPTS.md`)
- 5 project demo videos (15s each)
- 5 social media banners

### 3. **Build Backend API**
- Express.js server
- MongoDB integration
- Project CRUD endpoints
- Contact form submission

### 4. **Deploy**
- Frontend → Vercel
- Backend → Railway
- Custom domain setup

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Three.js Docs](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP Docs](https://greensock.com/gsap)

## 🎯 Performance Targets

- Lighthouse score: **>90**
- First Contentful Paint: **<1.8s**
- Largest Contentful Paint: **<2.5s**
- 60fps smooth scrolling
- Mobile responsive (<768px)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- 4.5:1 color contrast ratio
- Focus indicators (3px orange)
- Keyboard navigation supported
- Touch targets ≥44x44px
- Respects `prefers-reduced-motion`

## 📞 Development

```bash
# Watch mode with hot reload
npm run dev

# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Format code
npm run format
```

## 📄 License

Personal use only.

---

**Building the portfolio that showcases your creative genius.** ✨
