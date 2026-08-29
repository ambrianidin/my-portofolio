# Nadine Ambriani — Portfolio

Personal portfolio site for Nadine Ambriani, a fullstack developer from Bogor, Indonesia. Single page, light theme, built from a Claude Design canvas.

Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Open <http://localhost:3000>.

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server with Fast Refresh |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

Type checking is not wired to a script — run `npx tsc --noEmit`.

## Structure

```
src/
├── app/
│   ├── globals.css        Design tokens + Tailwind import. No plain CSS rules.
│   ├── layout.tsx         Fonts, metadata, <html>/<body> shell
│   └── page.tsx           Section order
├── components/
│   ├── sections/          Hero, About, Certifications, Projects, Contact
│   ├── panels/            Tab panels inside the About section
│   ├── cursor-follower.tsx
│   ├── media-frame.tsx    Image with a labelled placeholder fallback
│   ├── reveal.tsx         Fade + slide-up on scroll into view
│   ├── slider.tsx         Snap-scroll track + prev/next buttons
│   ├── site-nav.tsx
│   └── site-footer.tsx
└── lib/
    └── content.ts         Every piece of copy and data on the site
```

The page renders five sections in order: **Hero → About → Certifications → Projects → Contact**.

The About section carries three tabs — *About*, *Tech stack*, *Experience* — so what used to be three separate sections now shares one heading that follows the active tab.

## Editing content

All copy lives in [`src/lib/content.ts`](src/lib/content.ts). The components read from it and hold no strings of their own beyond headings. Five exports:

| Export | Feeds |
| --- | --- |
| `skillGroups` | Tech stack tab — split into Technical and Non-technical |
| `experiences` | Experience tab — a carousel of wide cards |
| `certifications` | Certifications carousel |
| `projects` | Scroll-pinned project panels |
| `contact` | Email and social links |

Images and documents go in `public/` and are referenced by raw path (spaces included — the components call `encodeURI` where a URL is needed).

- **Certificates** carry both an `image` (the card preview) and an `href` (what opens on click — an official verification page where one exists, otherwise the file itself). Omit `image` to fall back to a neutral placeholder.
- **Experience** entries take an optional `image`.
- `MediaFrame` accepts `fit="contain"` for portrait scans that would otherwise be cropped by the landscape card.

## Design notes

- **Light only.** `globals.css` pins `color-scheme: light` and defines one palette — the design canvas has no dark variant, so a `prefers-color-scheme: dark` block would invent colours the design never specified.
- **Tokens, not hardcoded colours.** `--background`, `--surface`, `--foreground`, `--muted`, `--border`, `--accent` are exposed to Tailwind through `@theme inline`.
- **Fonts** via `next/font/google`: Josefin Sans (display), Chivo (sans), Caveat (the script signature in the hero).
- **Motion degrades.** All three motion pieces honour `prefers-reduced-motion`. Beyond that: the pinned project scroll falls back to a plain stacked list below `md`, and the cursor follower is hidden below `md` and skipped entirely for coarse pointers.

## Next.js version

This is Next.js 16, which changed APIs and conventions from earlier majors. The version's own docs ship with the package at `node_modules/next/dist/docs/` — read those rather than older tutorials when working against its APIs.
