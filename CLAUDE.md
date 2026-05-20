# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WELMUN 2026 is the website for the 12th edition of Welham Boys' School Model United Nations Conference (July 28-30, 2026, Dehradun). It is a Vite + React + TypeScript SPA with Tailwind CSS, deployed via Lovable.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build
npm run lint       # ESLint
npm test           # Run Vitest once
npm run test:watch # Vitest in watch mode
npm run preview    # Preview production build locally
```

## Architecture

**Routing**: React Router v6 in [src/App.tsx](src/App.tsx). Routes: `/`, `/addressals`, `/registration`, `/schedule`, `/committees`, `/committees/:id`, `/conference-details`, `/gallery`, `/contact`.

**Launch gate**: The site shows a countdown until May 12, 2026 15:00 UTC (controlled in [src/App.tsx](src/App.tsx)); session storage persists the unlocked state.

**Committee data**: All committee metadata, chair letters, executive board members, and document links live in [src/data/committees.ts](src/data/committees.ts). This is the single source of truth — pages consume it directly, no backend queries involved.

**Assets**:
- Committee card images → [src/assets/committees/](src/assets/committees/)
- Executive board portraits → [src/assets/eb/](src/assets/eb/)
- Static PDFs/DOCXs (background guides, schedules, forms) → [public/docs/](public/docs/)
- Hero/background images → [public/images/](public/images/)

**Backend**: Supabase is configured via [src/integrations/supabase/](src/integrations/supabase/) but the schema is empty — no tables are in use. The `.env` file holds `VITE_SUPABASE_*` credentials.

**Styling**: Tailwind CSS with a gold/brown/blue-accent custom palette and Playfair Display + Inter fonts — defined in [tailwind.config.ts](tailwind.config.ts). CSS custom properties (theme variables) are in [src/index.css](src/index.css).

**Animations**: Framer Motion for page/section transitions; `ParticleCanvas` in [src/components/ParticleCanvas.tsx](src/components/ParticleCanvas.tsx) for background effects; `CustomCursor` for the branded cursor.

**UI primitives**: shadcn/ui components live in [src/components/ui/](src/components/ui/) — edit these carefully as they are generated and may be overwritten.

**Path alias**: `@/` maps to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).
