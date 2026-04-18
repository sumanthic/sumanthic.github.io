# Phase 4 — Typography & Base CSS: Requirements

## Scope

Wire up the first stylesheet for the blog. No JS, no frameworks — plain CSS only.

## Decisions

- **Roadmap:** followed exactly as specced
- **Starting state:** clean slate — no existing CSS or partials; `baseof.html` exists but has no `<link>` tag yet
- **No deviations** from the roadmap items below

## What gets built

1. `static/css/main.css` — single stylesheet for the entire site
2. `<link>` tag added to `layouts/partials/head.html` (or directly in `baseof.html` `<head>`)

## Exact spec

### Layout
- Max-width: **720px**, centered (`margin: 0 auto`)
- Horizontal padding so content doesn't touch edges on narrow viewports

### Typography
- Font: system font stack — `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Body font-size: **18px**
- Line-height: **1.7**

### Light mode palette (CSS custom properties on `:root`)

| Property    | Value     |
|-------------|-----------|
| `--bg`      | `#fafafa` |
| `--text`    | `#111111` |
| `--link`    | `#2563eb` |
| `--code-bg` | `#f4f4f4` |
| `--border`  | `#e5e5e5` |

- `body { background: var(--bg); color: var(--text); }`
- `a { color: var(--link); }`

### Code blocks
- Background: `var(--code-bg)`
- Font: monospace
- Padding applied
- `overflow-x: auto` (horizontal scroll for long lines)

## Out of scope

- Dark mode (Phase 8)
- Responsive breakpoints beyond the 720px column (not needed yet)
- Navigation header (Phase 5)
- Footer (Phase 6)
- Syntax highlighting (Phase 9)
