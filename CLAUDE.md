# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WELMUN 2026 is the website for the 12th edition of Welham Boys' School Model United Nations Conference (July 28-30, 2026, Dehradun). It is a Vite + React + TypeScript SPA with Tailwind CSS, deployed via Lovable.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build
npm run build:dev  # Build in development mode (unminified)
npm run lint       # ESLint
npm test           # Run Vitest once
npm run test:watch # Vitest in watch mode
npm run preview    # Preview production build locally
```

## Architecture

**Routing**: React Router v6 in [src/App.tsx](src/App.tsx). Routes: `/`, `/addressals`, `/registration`, `/schedule`, `/committees`, `/committees/:id`, `/conference-details`, `/gallery`, `/contact`, plus a `*` catch-all → `NotFound`. `/registration` is a single page ([src/pages/Registration.tsx](src/pages/Registration.tsx)). Note: [src/pages/registration/](src/pages/registration/) (8 `Registration*` sub-pages) and [src/pages/ImportantDownloads.tsx](src/pages/ImportantDownloads.tsx) exist but are **not imported or routed anywhere** — treat them as dead/legacy unless you wire them up.

**Launch gate**: [src/App.tsx](src/App.tsx) holds `LAUNCH_AT` (`2026-05-12T15:00:00`, parsed as **local** time — no `Z`/UTC). Before that moment the `<Countdown>` overlay from [src/pages/Countdown.tsx](src/pages/Countdown.tsx) renders over the app; unlocking is in-memory `useState` only and is **not** persisted, so a reload re-gates until `LAUNCH_AT` passes. (Separately, [src/pages/Index.tsx](src/pages/Index.tsx) uses `sessionStorage["welmun-intro-seen"]` to show the one-time `IntroScreen` per tab session — unrelated to the launch gate.)

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
