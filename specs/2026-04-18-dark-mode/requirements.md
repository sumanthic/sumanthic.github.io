# Requirements — Phase 7

## Scope

Three features shipped as one phase because they are small, self-contained, and share no cross-cutting concerns. Batching avoids three separate branch/review/merge cycles for ~30 lines of total change.

### Dark Mode
- Add `@media (prefers-color-scheme: dark)` to `static/css/main.css` overriding the five CSS custom properties.
- Palette tokens: `--bg #0d1117`, `--text #e6edf3`, `--link #58a6ff`, `--code-bg #161b22`, `--border #30363d`.

### Syntax Highlighting
- Enable Hugo's built-in Chroma highlighter via `hugo.toml`.
- Style: `github`. `lineNos = false`, `codeFences = true`, `noClasses = true` (inline styles, no extra CSS file needed).

### Categories
- Add `layouts/_default/terms.html` — index of all categories with post counts.
- Add `layouts/_default/taxonomy.html` — filtered post list for a single category.
- Add Categories link (`/categories/`) to `layouts/partials/header.html`.

## Key constraints

- **No JavaScript.** Dark mode is CSS-only via `prefers-color-scheme`. No toggle button.
- **No extra dependencies.** Syntax highlighting uses Hugo's built-in Chroma — no npm, no JS libraries.
- **Plain CSS only.** No Tailwind, no utility frameworks. Styles stay in `static/css/main.css`.
- **Hugo taxonomy system.** Categories are already declared in `hugo.toml`; only the layout templates are missing.

## Explicitly out of scope

- Dark/light toggle button — Parking Lot item.
- Dual syntax highlight themes (github + github-dark) — Parking Lot. Code blocks will look slightly off in dark mode; this is a known, accepted limitation.
- RSS link in `<head>` or footer.
- About page with real content.
- Reading time estimates.
