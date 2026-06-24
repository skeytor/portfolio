# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Type-check + build (tsc -b && vite build)
pnpm lint         # Run ESLint
pnpm preview      # Preview production build
pnpm deploy       # Build and deploy to GitHub Pages (gh-pages -d build)
```

No test suite is configured.

## Architecture

Single-page React portfolio built with Vite, TypeScript, and Tailwind CSS. The Contact section exists but is commented out in `src/App.tsx`.

**Page flow:** `App.tsx` composes full-page sections in order — Hero → Experience → Projects → About — each wrapped in `SectionContainer` with a matching `id` for Header nav links.

**Data lives in the page components**, not in separate data files:
- `src/pages/Projects.tsx` — `PROJECTS` array with typed `Project` objects; tags reference a local `TAGS` array of `Tag` objects (each tag has a name, icon component, and Tailwind class)
- `src/pages/Experience.tsx` — similar inline data pattern
- `src/types.ts` — shared interfaces: `Project`, `ExperienceItem`, `FormState`, `Tag`, and the `TagType` union

**Adding a new technology tag** requires: (1) creating an icon in `src/icons/`, (2) adding an entry to the `TAGS` array in `Projects.tsx`, and (3) extending the `TagType` union in `src/types.ts`.

**Icons** (`src/icons/`) are plain React SVG components that accept a `className` prop.

**Key dependencies:** `@emailjs/browser` (Contact form, currently commented out), `flowbite-react` (UI components), `@fontsource-variable/onest` (font).
