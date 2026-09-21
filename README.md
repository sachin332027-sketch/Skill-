# Jarvis — Technology & Strategy Consulting

A premium, technology-first redesign of the Jarvis Technology & Strategy
Consulting website. Built as a single-page, choreographed digital
experience across strategy, technology, data, AI, governance and political
intelligence.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** — dark-first design system (tokens in `app/globals.css`)
- **Framer Motion** — scroll reveals, hover interactions, animated counters
- **Lenis** — smooth scrolling
- Canvas-based animated intelligence network in the hero
- Custom cursor with contextual labels (desktop only)

## Structure

All sections live in `app/components/`, composed in `app/page.tsx`:

Header → Hero → Scale → Capabilities → Technology/AI Flow → Ecosystem →
Impact → Case Studies → Insights → About → India Footprint → Careers →
Contact → Footer.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

Respects `prefers-reduced-motion`; hover-only interactions degrade to tap
targets on touch devices (see the Ecosystem section for an example).
