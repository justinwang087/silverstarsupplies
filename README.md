# Silverstar Roofing Supplies — website rebuild

Plain HTML/CSS/JS rebuild of silverstarsupplies.com — no framework, no
build step, no CMS. Deploys to GitHub Pages straight from this repo's
root (see `.github/workflows/deploy.yml`).

## Structure

```
index.html                   Home                        — Person A
location.html                Location & Hours             — Person A
products-shingles.html       )
products-commercial.html     ) one shared template         — Person B
products-accessories.html    )
partners.html                Partner site viewer           — Person C
contact.html                 Contact / Request a Quote     — Person C

css/tokens.css                Design tokens — frozen after setup
css/base.css                  Header, footer, nav, buttons — frozen after setup
css/home.css                  Person A
css/products.css              Person B
css/partners.css              Person C
css/contact.css               Person C

js/main.js                    Mobile nav + hours badge — frozen after setup
js/partners-viewer.js         Person C
js/contact-form.js            Person C

templates/page-template.html  Copy this to start any new page
templates/header-footer.html  Reference copy of the header/footer block

images/                       See images/README.md for what's needed
```

## Team

| Branch     | Owns                                             |
|------------|---------------------------------------------------|
| (Person A) | `index.html`, `location.html`, `css/home.css`      |
| (Person B) | the three `products-*.html` pages, `css/products.css` |
| (Person C) | `partners.html`, `contact.html`, `css/partners.css`, `css/contact.css`, `js/partners-viewer.js`, `js/contact-form.js` |

## Scaffolding — what's already done

- Folder structure, design tokens, base stylesheet, shared header/footer
  markup, shared JS utilities (mobile nav, live open/closed badge)
- `index.html` — structured with real sections, some content still
  marked `TODO`
- `location.html`, `products-shingles.html`, `products-commercial.html`,
  `products-accessories.html` — stub pages ready to fill in
- `partners.html` — the sidebar + iframe "partner viewer" is functional,
  but **task C1 (test which of the 6 brand sites actually allow being
  embedded) hasn't been run yet** — do that before assuming the embed
  path works for all of them
- `contact.html` — form validates and submits via a `mailto:` link as a
  zero-backend default; task C9 (decide if that's good enough, or if it
  should POST to a real form backend) is still open