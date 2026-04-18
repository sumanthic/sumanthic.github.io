# Phase 2 — Post Archive Page: Requirements

## Scope

Build the post archive at `/posts/` — a chronological list of all posts grouped by year.
No styling, no icons, no pagination. Semantic HTML only.

## Decisions

| Decision | Choice | Reason |
|---|---|---|
| Homepage | Stays as Phase 1 h1 placeholder | `/posts/` is the archive; homepage updated in a later phase |
| Year heading markup | `<h2>` per year | Clean DOM hierarchy; easy to style in Phase 4 |
| Post row format | `<time>MMM DD</time>  <a>Title</a>` | Matches roadmap spec; mirrors vanducng.dev aesthetic |
| Dummy post bodies | Empty — front matter only | Only titles and dates matter for archive testing |
| Dummy post categories | Real categories (AI, Backend, Notes) | Front matter stays realistic; no cleanup beyond deleting files |
| Styling | None | CSS comes in Phase 4; don't couple concerns |
| Series icon | Omitted | Parking Lot item — explicitly out of scope |

## hugo.toml taxonomy config

Categories are used in dummy post front matter. Hugo auto-discovers them — no explicit taxonomy config needed until Phase 10.

## File structure after this phase

```
layouts/
  _default/
    baseof.html     ← Phase 1, unchanged
    list.html       ← NEW: year-grouped archive template
  index.html        ← Phase 1, unchanged (h1 placeholder)
content/
  posts/
    hello.md        ← Phase 1 placeholder, kept
    (5 dummy posts) ← created for testing, deleted before merge
```

## Out of scope

- Styling or colors (Phase 4)
- Navigation header / footer (Phase 5 & 6)
- Single post template — `single.html` (Phase 3)
- Categories page (Phase 10)
- Series grouping or series icons (Parking Lot)
- Pagination (Parking Lot)

## Context

- Builds on Phase 1: `baseof.html`, `hugo.toml`, `content/posts/` already exist
- Homepage (`/`) stays separate — `/posts/` is the primary archive entry point
- Reference aesthetic: [vanducng.dev/posts](https://vanducng.dev/posts/) — plain, year-grouped, no excerpts
- Tech stack: Hugo v0.125.0+, Go templates, plain HTML — no JS, no CSS
