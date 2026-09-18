# zeyadfarouk.tech

Premium portfolio and lead-generation website for a senior graphic designer, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Features

- Luxury-style Arabic-first UI (RTL) with bilingual-ready structure
- Premium landing page with clear CTAs (`اطلب مشروعك` / `شاهد الأعمال`)
- Portfolio page with category filters
- Dynamic project details page (`/portfolio/[slug]`)
- Dedicated services, about, and contact pages
- Safe frontend-only inquiry flow with validation (no fake backend sending)
- Responsive navigation with active state + mobile menu
- Footer CTA, availability indicator, and social/contact links
- Reduced-motion support and focus-visible accessibility states
- Basic SEO metadata + Open Graph setup

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build & Lint

```bash
npm run lint
npm run build
```

## Deployment

The project is ready for deployment on platforms supporting Next.js (e.g. Vercel).

Typical production start command:

```bash
npm run build
npm run start
```

## Content & Asset Replacement

All editable placeholder/site content is centralized in:

- `/home/runner/work/zeyadfarouk.tech/zeyadfarouk.tech/src/data/site-content.ts`

Update this file to replace:

- Personal and contact info (`brand`)
- Services and process
- Portfolio projects and details
- Testimonials (currently marked as placeholders)
- Budget/timeline options for inquiry form

### Replacing Placeholder Visuals

Project visuals are currently art-directed gradient placeholders rendered through CSS classes:

- `/home/runner/work/zeyadfarouk.tech/zeyadfarouk.tech/src/components/project-card.tsx`
- `/home/runner/work/zeyadfarouk.tech/zeyadfarouk.tech/src/app/portfolio/[slug]/page.tsx`
- `/home/runner/work/zeyadfarouk.tech/zeyadfarouk.tech/src/app/globals.css`

You can replace them with real images using Next.js `Image` and assets under `public/`.

## Inquiry Form Integration (Email/API)

Current form behavior is intentionally safe and frontend-only:

- Validates inputs client-side
- Shows success state
- Provides a `mailto:` fallback with prefilled project details

Form component:

- `/home/runner/work/zeyadfarouk.tech/zeyadfarouk.tech/src/components/contact-form.tsx`

To connect real submissions:

1. Create a secure backend endpoint (e.g. Next.js Route Handler under `src/app/api/inquiries/route.ts`)
2. Send form data using `fetch` from `ContactForm`
3. Validate and sanitize server-side
4. Use server-side secrets from environment variables (never expose in client code)
5. Return robust success/error responses for UX states

## Accessibility Notes

- Semantic landmarks and headings across pages
- Keyboard focus states for interactive controls
- Color contrast designed for dark premium theme
- `prefers-reduced-motion` support to reduce animation for sensitive users
