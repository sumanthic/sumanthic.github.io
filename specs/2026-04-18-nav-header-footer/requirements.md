# Phase 5 — Navigation Header & Footer: Requirements

## Scope

Add a persistent header and footer to every page via Hugo partials. No JS, no icons, no dropdowns.

## Decisions

- **Roadmap:** followed exactly as specced
- **Starting state:** clean — no `header.html` or `footer.html` exist; `baseof.html` has only the `{{ block "main" }}` with no surrounding nav or footer
- **Validation:** not required — implementation is trusted on merge

## What gets built

### `layouts/partials/header.html`
- Left side: `< sumanthic />` in monospace, links to `/`
- Right side: two links separated by `·`
  - Posts → `/posts/`
  - About → `https://github.com/sumanthic` (external, `target="_blank"`)
- Minimal — no dropdowns, no icons, no active-link highlighting

### `layouts/partials/footer.html`
- Single line: `© {{ now.Year }} sumanthic` · GitHub link (`https://github.com/sumanthic`)
- No clutter

### `layouts/_default/baseof.html`
- Wire both partials in: `{{ partial "header.html" . }}` before `{{ block "main" }}`, `{{ partial "footer.html" . }}` after

### `static/css/main.css`
- Minimal header styles: flex layout to push logo left and nav right, padding
- Footer styles: centered or left-aligned, muted, small top margin/border

## Out of scope

- Active-link highlighting
- Mobile hamburger menu
- Categories link in nav (Phase 9)
- About page content (Parking Lot)
