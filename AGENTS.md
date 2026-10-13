# Veinshot

Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 4, Motion and npm. Read the relevant bundled guide in `node_modules/next/dist/docs/` before changing Next.js behavior; this version has breaking changes.

## Workflow

- Install with `npm ci`; run `npm run dev` locally.
- Run `npm run verify` (typecheck, lint, Vitest, build). Individual scripts are in package.json.
- Keep routes thin and features under `src/features`. Default to Server Components; client components are for interactivity or Motion.
- Localized UI copy belongs in `src/features/landing/content/en.ts` and `es.ts`; identifiers and comments default to English.
- Named imports only. Avoid manual useMemo/useCallback. Use cn() only for conditional classes.
- Conventional commits; no AI attribution.

## Brand and motion

- Use tokens from `src/app/globals.css`, not hardcoded hex or var() in className. Arterial is the sole bold accent; venous is secondary; stage panels remain dark in both themes.
- Geist Sans serves display/body; Geist Mono serves small uppercase labels.
- Keep flat clinical geometry: no realism, gloss, bevels or anatomy. No stock illustrations, animated gradient backgrounds or marketplace hero copies.
- Third-party logos/names belong only in neutral static stack rows, never brand marks or animations.
- One orchestrated page-load sequence per view; micro-interactions under 300ms with strong ease-out. Honor reduced motion, retaining opacity cues.
- Prefer transform/opacity; CSS for predetermined sequences and Motion for dynamic/interruptible ones.
