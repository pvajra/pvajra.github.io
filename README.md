# pvajra.github.io

Personal portfolio for Pandurang Vajramatti, built with [Astro](https://astro.build) as a single static page. Live at **https://pvajra.github.io**.

## Run locally

Requires Node.js 22 or later.

```bash
npm install
npm run dev        # http://localhost:4321 with live reload
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Edit content

All text lives in **`src/data/profile.ts`**. Change it there and the page updates. You should not need to touch any component.

| What you want to change | Where in `profile.ts` |
| --- | --- |
| Name, headline, tagline, email, links, location | `person` |
| Page title, meta description, CV file name | `site` |
| About text and the four highlight cards | `about` |
| Jobs on the timeline | `experience` (newest first, first role opens by default) |
| Dissertation section, stat cards, C1–C3 cards | `featured` |
| Project cards | `projects` |
| Skill chips | `skills` |
| Degrees | `education` |
| Header links | `nav` |

Other files you may want:

- **CV:** replace `public/Pandurang_Arun_Vajramatti_Android_Engineer_CV.pdf`. If the file name changes, update `site.cvFile`.
- **Favicon:** `public/favicon.svg`.
- **Open Graph image and Apple touch icon:** `public/og-image.png` and `public/apple-touch-icon.png`. To regenerate them after changing the name or headline, edit `scripts/generate-images.mjs` and run:
  ```bash
  npm i -D playwright && npx playwright install chromium
  node scripts/generate-images.mjs
  ```
- **Colours:** the CSS variables at the top of `src/styles/global.css`. `--accent` is the single accent colour, with a separate value for dark mode.

## Project structure

```
src/
  data/profile.ts        all content
  layouts/Base.astro     <head>: SEO, Open Graph, JSON-LD, theme script
  components/            one component per section
  styles/global.css      design tokens and shared styles
  pages/index.astro      assembles the sections
public/                  CV, favicon, OG image, robots.txt
.github/workflows/       GitHub Pages deployment
```

## Deploy to GitHub Pages

The site is set up to be served from `https://pvajra.github.io`, so the repository must be named **`pvajra.github.io`**.

1. On GitHub, rename the repository: **Settings → General → Repository name** → `pvajra.github.io`.
2. Under **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it. You can also run it by hand from the **Actions** tab.

If you ever serve the site from a different repository name, set `base: '/<repo-name>'` in `astro.config.mjs` and update `site` URLs in `astro.config.mjs`, `src/data/profile.ts` and `public/robots.txt`.

## What's included

- Light and dark themes, which follow the system setting until you choose one with the toggle
- Mobile-first layout, keyboard navigable, with a skip link, visible focus styles and reduced-motion support
- Colour contrast meets WCAG AA in both themes
- Meta description, canonical URL, Open Graph and Twitter cards, JSON-LD `Person` data, `sitemap-index.xml` and `robots.txt`
- No tracking or analytics, and no web fonts (uses the system font stack)
