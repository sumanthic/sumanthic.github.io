# Phase 5 — Navigation Header & Footer: Plan

---

## Group 1 — Create the partials

1. Create `layouts/partials/header.html`:
   - Outer `<header>` element
   - Logo: `<a href="/">< sumanthic /></a>` styled monospace
   - Nav: `<nav>` with Posts and About links
2. Create `layouts/partials/footer.html`:
   - Outer `<footer>` element
   - `© {{ now.Year }} sumanthic` · `<a href="https://github.com/sumanthic" target="_blank">GitHub</a>`

---

## Group 2 — Wire partials into baseof.html

3. Add `{{ partial "header.html" . }}` immediately after `<body>`
4. Add `{{ partial "footer.html" . }}` immediately before `</body>`

---

## Group 3 — Add CSS for header and footer

5. Add to `static/css/main.css`:
   - `header`: flex, space-between, padding, border-bottom using `var(--border)`
   - `.logo`: monospace font, no underline, `var(--text)` color
   - `nav a`: spacing between links
   - `footer`: top border using `var(--border)`, padding, small font-size

---
