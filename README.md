# Veinshot

Bilingual software-studio landing page built with Next.js 16, React 19, Tailwind CSS 4 and Motion. English uses the root URL; Spanish uses /es.

## Develop and verify

Use Node.js 20.9+ and npm:

```sh
npm ci
npm run dev
npm run verify
```

Open http://localhost:3000. The verification script runs type checking, ESLint, Vitest and the production build; the build fetches Geist fonts. Use `npm start` after a successful build.

Routes live in `src/app/[lang]`, locale negotiation in `src/proxy.ts`, copy in `src/features/landing/content`, and design tokens in `src/app/globals.css`. See [AGENTS.md](AGENTS.md) for brand and implementation constraints.
