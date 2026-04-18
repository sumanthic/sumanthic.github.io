# Phase 4 — Typography & Base CSS: Plan

Each group is a discrete, shippable unit. Complete in order.

---

## Group 1 — Create the stylesheet

1. Create `static/css/main.css` with:
   - CSS custom properties (`:root` block with all five `--*` tokens)
   - `body` rule: `background`, `color`, `font-family`, `font-size`, `line-height`
   - `a` rule: `color: var(--link)`
   - `.content` (or `main`) wrapper: `max-width: 720px`, `margin: 0 auto`, horizontal padding
   - `pre`, `code` rules: `background: var(--code-bg)`, monospace font, padding, `overflow-x: auto`

---

## Group 2 — Wire the stylesheet into the layout

2. Locate where `<head>` is defined (`baseof.html` or `layouts/partials/head.html`)
3. Add `<link rel="stylesheet" href="/css/main.css">` inside `<head>`

---

## Group 3 — Smoke test locally

4. Run `hugo server`
5. Visit `localhost:1313` and verify:
   - Page background is `#fafafa`, text is `#111111`, links are `#2563eb`
   - Content column is centered and ~720px wide
   - Body text is 18px, line-height is comfortable
   - A post with a code block shows `#f4f4f4` background, monospace font, and scrolls horizontally for long lines
6. Check on a narrow viewport (resize browser or DevTools mobile view) — content should not overflow

---

## Group 4 — Update roadmap

7. Mark Phase 4 as ✅ in `specs/roadmap.md`
