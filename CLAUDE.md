# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Plain HTML/CSS/JS rebuild of silverstarsupplies.com — no framework, no build step, no CMS, no package manager. Deploys to GitHub Pages straight from the repo root via `.github/workflows/deploy.yml` (push to `main` → `actions/upload-pages-artifact` + `actions/deploy-pages`).

There is nothing to build, lint, or test with tooling — verify changes by opening the HTML files directly in a browser (or serving the folder with any static file server).

## Architecture

**No include mechanism.** Every page pastes the header and footer markup in directly — there's no templating engine. `templates/header-footer.html` is the reference copy; `templates/page-template.html` is the starting point for any new page. If the shared header/footer ever changes, it must be updated in the template **and every page that copied it** — nothing propagates automatically.

**Ownership boundaries** (see README.md for the full table) — three tracks, kept isolated so contributors don't collide:
- `index.html`, `location.html`, `css/home.css`
- `products-shingles.html`, `products-commercial.html`, `products-accessories.html`, the individual `product-*.html` detail pages, `js/product-detail.js`, `css/products.css`
- `partners.html`, `contact.html`, `css/partners.css`, `css/contact.css`, `js/partners-viewer.js`, `js/contact-form.js`

`faq.html` doesn't belong to any track — it reuses `css/home.css` and has no dedicated stylesheet or owner.

`css/tokens.css`, `css/base.css`, and `js/main.js` are Phase-0 scaffolding and are **frozen** — treat changes to these as cross-cutting and coordinate rather than editing freely. `tokens.css` is the single source of truth for color/type/spacing; other stylesheets reference its custom properties rather than hardcoding hex values or one-off sizes. Keep it to one page-specific stylesheet per page.

**`js/main.js`** owns two site-wide behaviors every page depends on: the mobile nav toggle and a live "open/closed" hours badge (`[data-hours-badge]` elements), computed client-side from a single seasonal-hours table (`HOURS` — summer Apr–Nov 6:30am–9pm, winter Dec–Mar 9am–5pm) and re-checked every 5 minutes. `window.Silverstar.isOpenNow` is exposed for reuse by other pages (e.g. highlighting the current row in a hours table). If hours ever change, this is the one place to edit — nothing is hardcoded per-page.

**`js/partners-viewer.js`** drives `partners.html`: a sidebar of brand buttons swaps the `src` of a single `<iframe>` — the modern replacement for the old site's `<frameset>`. Important constraint: most manufacturer sites block being framed via `X-Frame-Options`/CSP, and a cross-origin iframe gives JS no reliable way to detect *why* it failed to load — `BLOCK_TIMEOUT_MS` is a best-effort heuristic, not a certainty. On mobile it skips the iframe entirely and opens in a new tab. Whatever the embeddability findings turn out to be per brand, the "open in new tab" fallback must keep working for all six.

**`js/product-detail.js`** drives every `product-*.html` page from a single `PRODUCTS` object keyed by `<category>-<slug>` (e.g. `shingles-gaf`, `commercial-cap-app`). Each product page sets `data-product="<key>"` on `<body>` and an empty `<div data-product-page-content>`; the script looks up the matching entry and renders the hero, related-products, and detail sections into that div — there's no per-page markup to edit, only the data object. Adding a product means adding a `PRODUCTS` entry, a `product-<key>.html` shell (copy an existing one), and a card linking to it from the matching `products-*.html` listing page. Each entry's `related` array must reference other existing `PRODUCTS` keys — an entry pointing at a nonexistent key gets silently dropped from the rendered list but *not* from the index used to build hrefs for the remaining related cards, so a stale key skews the links for the rest of that page's related-products row (see `accessories-underlayment`, which references a `-pro` variant that doesn't exist).

**`js/contact-form.js`** validates the contact form (name, phone, and at least one checked product with a quantity) and submits via `fetch()` to a Formspree endpoint (`contact.html`'s `<form action="https://formspree.io/f/...">`) rather than `mailto:`. Each product checkbox has a paired quantity `<input>` that's disabled until its checkbox is checked; selected products are serialized into a `product_summary` field before posting.

**Images**: nothing is committed under `images/` yet. Pages already reference the expected filenames (`images/logo.svg`, `images/favicon.png`, `images/hero-yard.jpg`, `images/products/*.jpg`) — see `images/README.md` for the full list. Dropping in a correctly-named file is all that's needed for it to appear; no code changes required.

## Conventions worth preserving

- Explicit `<meta charset="UTF-8">` on every page (fixes a bug in the old site).
- `aria-current="page"` set on the nav link matching the current page.
- HTML entities for typographic characters (`&mdash;`, `&ndash;`, `&amp;`), matching existing markup.
- Comments in scaffolding files (`main.js`, `tokens.css`, `header-footer.html`) document *why*, including ownership notes and TODOs tied to specific tracked tasks (e.g. "task C1", "task A2") — read them before changing frozen files, they explain constraints that aren't obvious from the code alone.
