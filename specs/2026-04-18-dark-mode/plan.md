# Plan — Phase 7

## Group 1 — Dark Mode

1. Append `@media (prefers-color-scheme: dark)` block to `static/css/main.css` with the five overriding custom properties.
2. Manually verify in browser: toggle OS dark/light and confirm all surfaces (background, text, links, code blocks, borders) switch correctly.

## Group 2 — Syntax Highlighting

1. Add `[markup.highlight]` section to `hugo.toml`:
   ```toml
   [markup.highlight]
     style      = "github"
     lineNos    = false
     codeFences = true
     noClasses  = true
   ```
2. Add or verify at least one fenced code block in a post (e.g. `content/posts/hello.md`) to exercise the highlighter.
3. Confirm rendered code block shows syntax colors in light mode.

## Group 3 — Categories

1. Create `layouts/_default/terms.html` — list all taxonomy terms (category names) with post counts, linking each to its taxonomy page.
2. Create `layouts/_default/taxonomy.html` — chronological list of posts for a single category, consistent with the existing archive list style.
3. Add Categories link to `layouts/partials/header.html` (after the Posts link).
4. Confirm existing category labels on single post pages still link correctly.
