# Roadmap

Micro phases — each is ~1-2 hours of focused work.
Ship something real at the end of every phase. Never have broken state on main.

---

## ✅ Phase 1 — Scaffold & Hello World
- `hugo new site sumanthic` (repo root = hugo site)
- `hugo.toml` with concrete values:
  ```toml
  title        = "sumanthic"
  baseURL      = "https://sumanthic.github.io"
  languageCode = "en-us"
  ```
- One placeholder post in `content/posts/hello.md`
- Blank `layouts/_default/baseof.html` with `{{ block "main" . }}{{ end }}`
- Run `hugo server` locally and confirm a page renders

**Done when:** `localhost:1313` shows something.

---

## ✅ Phase 2 — Post Archive Page
- `layouts/_default/list.html`: chronological list of posts grouped by year
- Each row: `MMM DD   Post Title` (no series icon yet — that's Parking Lot)
- No styling yet — just semantic HTML (`<ul>`, `<time>`, `<a>`)
- Add 3–5 dummy posts with different dates to test year grouping (delete before launch)

**Done when:** `/posts/` lists all posts grouped by year, plain text, no icons.

---

## ✅ Phase 3 — Single Post Page
- `layouts/_default/single.html`: title, date, category label, post body (markdown rendered)
- Metadata row: `Dec 25 2025  [category]` — mirrors what vanducng.dev shows per post
- Prev/Next navigation: ordered by date, newest post = "next", oldest = "prev"
- Code blocks get `<pre><code>` — no syntax highlighting yet

**Done when:** clicking a post from the archive renders its full content with date + category metadata.

---

## Phase 4 — Typography & Base CSS
- `static/css/main.css` linked in `baseof.html`
- **720px** max-width content column, centered
- System font stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- Line-height 1.7, body font-size 18px
- Apply the light palette CSS custom properties:
  ```css
  :root {
    --bg:       #fafafa;
    --text:     #111111;
    --link:     #2563eb;
    --code-bg:  #f4f4f4;
    --border:   #e5e5e5;
  }
  body { background: var(--bg); color: var(--text); }
  a    { color: var(--link); }
  ```
- Code blocks: `var(--code-bg)` background, monospace, padding, horizontal scroll

**Done when:** posts are comfortable to read on desktop and mobile with correct colors.

---

## Phase 5 — Navigation Header
- `layouts/partials/header.html`
- Left: `< sumanthic />` (monospace, links to `/`)
- Right: Posts link (`/posts/`) · About link (`https://github.com/sumanthic` — external, opens GitHub profile until About page exists)
- Minimal — no dropdowns, no icons

**Done when:** every page has a consistent nav bar with correct links.

---

## Phase 6 — Footer
- `layouts/partials/footer.html`
- `© {{ now.Year }} sumanthic` · GitHub link (`https://github.com/sumanthic`)
- One line, no clutter

**Done when:** every page has a footer.

---

## Phase 7 — Deploy to Production
- Create `.github/workflows/hugo.yml`:
  ```yaml
  name: Deploy Hugo site to GitHub Pages

  on:
    push:
      branches: [main]

  permissions:
    contents: write

  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
          with:
            submodules: true
        - uses: peaceiris/actions-hugo@v3
          with:
            hugo-version: '0.125.0'
            extended: true
        - run: hugo --minify
        - uses: peaceiris/actions-gh-pages@v3
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./public
  ```
- Enable GitHub Pages on `gh-pages` branch in repo Settings → Pages
- Confirm `baseURL = "https://sumanthic.github.io"` in `hugo.toml`

**Done when:** pushing to `main` auto-deploys to https://sumanthic.github.io.

---

## Phase 8 — Dark Mode (System Preference)
- Add `@media (prefers-color-scheme: dark)` block to `main.css`:
  ```css
  @media (prefers-color-scheme: dark) {
    :root {
      --bg:       #0d1117;
      --text:     #e6edf3;
      --link:     #58a6ff;
      --code-bg:  #161b22;
      --border:   #30363d;
    }
  }
  ```
- No JavaScript, no toggle button — OS setting controls it

**Done when:** blog switches palette automatically with OS dark/light setting.

---

## Phase 9 — Syntax Highlighting
- Add to `hugo.toml`:
  ```toml
  [markup.highlight]
    style      = "github"
    lineNos    = false
    codeFences = true
    noClasses  = true
  ```
- Verify fenced code blocks (` ```go `, ` ```python `, etc.) render with github theme colors
- **Known limitation:** `github` theme is light-background only — code blocks will look slightly off in dark mode until the dual-theme fix is pulled from Parking Lot

**Done when:** code blocks in posts have syntax colors matching the github theme in light mode.

---

## Phase 10 — Categories
- `categories` already appears in post front matter from Phase 3 — now make it navigable
- `layouts/_default/terms.html` — lists all category names with post counts
- `layouts/_default/taxonomy.html` — all posts for a given category
- Update `header.html`: add Categories link (`/categories/`) to nav

**Done when:** `/categories/` lists all categories; clicking one shows filtered posts; nav has Categories link.

---

## Parking Lot (not scheduled)

Things that can earn a phase later, once the core is solid:

- RSS feed (Hugo auto-generates — expose link in `<head>` and footer)
- About page with real content (nav currently points to GitHub profile)
- Reading time estimate (`{{ .ReadingTime }} min read`)
- Series grouping — named multi-post collections with their own index page
- Series icon on archive rows (the stacked-layers icon vanducng shows per post)
- Dark/light toggle button (JS-based; Phase 8 covers CSS-only auto-detection first)
- Dual syntax highlight themes — `github` (light) + `github-dark` (dark) switching via CSS media query
- Search (requires JS + index — add last)
- Social share buttons
- Open Graph / Twitter Card meta tags
- Pagination (add when post list exceeds one comfortable scroll)
