<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Veinshot — Agency Site

Landing page for Veinshot, a software studio. Brand promise: solutions straight to the vein — precise scope, senior execution, zero bloat.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript strict · Tailwind CSS 4 · Motion (`motion/react`)
- Package manager: npm. Fonts: Geist Sans / Geist Mono via `next/font`.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npx tsc --noEmit` — typecheck
- Vitest is pending: add it (mirroring the portfolio repo's `verify` script) when the first non-trivial logic lands.

## Architecture

- Feature-based (screaming architecture): `src/features/<feature>/{components,content.ts,types.ts}`.
- `src/app/` routes stay thin: pages compose feature components; no business logic in routes.
- Server Components by default; add `"use client"` only for interactivity or Motion.
- UI copy lives in `content.ts` files, never inline in components.

## Design system

Tokens live in `src/app/globals.css` under `@theme`. Never hardcode hex or `var()` inside `className` — use token classes (`bg-arterial`, `stroke-venous`, `text-stage-muted`, ...).

| Token group | Role |
| --- | --- |
| `arterial` | The single bold accent: CTAs, pulse, dose |
| `venous` | Quiet secondary: lines, diagrams, nodes |
| `background` / `foreground` / `muted` / `line` | Cold clinical neutrals (blue-green bias), theme-aware |
| `stage-*` | Dark "lab screen" panels; stay dark in both themes |

Typography: Geist Sans for display (extrabold, tight tracking) and body; Geist Mono for labels (uppercase, letter-spaced, 11–12px) — specimen-tag style.

### Art direction rules (non-negotiable)

1. Flat clinical geometry. No realism, gloss, bevels, or anatomy (skin, arms, realistic needles). The flatness is what keeps the injection metaphor out of drug-imagery territory.
2. Arterial is the only bold accent. One bold moment per view; everything around it stays quiet.
3. Third-party logos or product names (Claude, AWS, GPT, ...) never appear inside brand marks or brand animations — only in neutral, static stack rows.
4. Motion is orchestrated, not scattered: one page-load sequence per view. UI micro-interactions under 300ms with strong ease-out curves. `prefers-reduced-motion` is always honored (reduce movement, keep opacity cues).
5. No stock illustrations, no animated gradient backgrounds, no copy-pasted marketplace hero sections. The hero is the brand.

## Code conventions

- Named imports only; no `import React`.
- No manual `useMemo` / `useCallback` — React Compiler era.
- `cn()` only for conditional classes; static class lists go straight in `className`.
- Only animate `transform` and `opacity` where possible; prefer CSS animations for predetermined sequences, Motion for dynamic/interruptible ones.
- All UI copy, comments, and identifiers in English.
- Conventional commits. No AI attribution in commits.
