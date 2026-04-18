# Tech Stack

## Generator: Hugo

- **Pinned version: v0.125.0** (minimum v0.110+ for `hugo.toml`; pin this in CI to avoid drift)
- Static site generator written in Go
- Markdown-first: posts live in `content/posts/*.md`
- Zero JavaScript required by default
- Extremely fast builds (sub-second for small blogs)
- Single binary — no Node, no package.json, no node_modules

## Content

- Posts written in Markdown with YAML front matter
- Front matter fields: `title`, `date`, `categories`, `draft`
- No CMS — files are the source of truth

Hugo taxonomy configured (Phase 1):
- `categories` — broad topic labels (e.g. AI, Backend, Notes); first-class nav item (Phase 10)

Not configured yet (Parking Lot):
- `series` — named multi-post collections; add to `hugo.toml` only when the Series phase is scheduled

## Templating

Hugo's built-in Go template language:
- `layouts/_default/list.html` — archive page
- `layouts/_default/single.html` — individual post
- `layouts/partials/` — reusable header, footer, head

## Styling

- Plain CSS (no Tailwind, no Bootstrap)
- CSS custom properties for theming
- System font stack — no web font downloads
- **Content column:** 720px max-width, centered

### Light mode palette (Phase 4 baseline)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#fafafa` | Page background |
| `--text` | `#111111` | Body text |
| `--link` | `#2563eb` | Links |
| `--code-bg` | `#f4f4f4` | Inline + block code background |
| `--border` | `#e5e5e5` | Dividers, rule lines |

### Dark mode palette (Phase 8 overrides via `prefers-color-scheme: dark`)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0d1117` | Page background |
| `--text` | `#e6edf3` | Body text |
| `--link` | `#58a6ff` | Links |
| `--code-bg` | `#161b22` | Code background |
| `--border` | `#30363d` | Dividers |

### Syntax highlighting

- Theme: **github** (Chroma built-in, matches the light palette)
- Enabled via `hugo.toml`: `[markup.highlight] style = "github"`

## Deployment

- **Host:** GitHub Pages (free, stays inside GitHub)
- **Live URL:** https://sumanthic.github.io
- **CI:** `.github/workflows/hugo.yml` — triggers on push to `main`, uses `peaceiris/actions-hugo@v3` pinned to v0.125.0
- Hugo build command: `hugo --minify`
- Output: `public/` directory (deployed to `gh-pages` branch)

## What we deliberately leave out (for now)

- JavaScript search
- Dark/light toggle button — Phase 8 uses `prefers-color-scheme` media query only (JS toggle is a Parking Lot item)
- Comments (no Disqus, no utterances)
- Analytics
- RSS (Hugo generates it for free — add it when needed)

## Reference site

[vanducng.dev](https://vanducng.dev) — Hugo, similar structure, more features.
We start with a strict subset and add only what earns its place.
