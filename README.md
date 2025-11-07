# SkyForge — Static Site for GitHub Pages

A lightweight, modern, and minimal static site ready for GitHub Pages. Designed to mirror and improve the current Squarespace structure with a brighter aesthetic.

## What’s inside
- `index.html` — hero, waitlist, highlights, pilot program
- `why-now.html` — explanation page with FAQ
- `styles.css` — light, modern styling
- `scripts.js` — waitlist demo + Formspark/Formspree hook
- `assets/` — place images here (optional)

## How to publish on GitHub Pages
1. Create a new public repo, e.g. `skyforge`.
2. Upload all files from this folder into the repo root (or push via git).
3. In the repo: **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` (or `master`) / root.
4. Open the URL shown there. Add your custom domain later under Pages settings if needed.

### Custom domain
- Add your domain in **Settings → Pages**. This creates `CNAME` automatically.
- Update DNS at your registrar:
  - `A` records for apex (example.com) → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `CNAME` for `www` → `USERNAME.github.io`
- Enable HTTPS in Pages.

### Make the waitlist live
- Create a form at Formspark or Formspree.
- In `index.html`: change `<form ... data-mode="demo">` to remove the demo flag.
- In `scripts.js`: set your endpoint (see commented example).

### Notes
- Content is intentionally concise; feel free to expand sections.
- If you later want a blog, we can switch to Jekyll/Hugo while keeping the design.