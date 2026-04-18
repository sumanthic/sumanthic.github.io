# Phase 3 — Single Post Page: Requirements

## Scope

Build `layouts/_default/single.html` so that clicking a post from the archive renders its full content with metadata. No styling — semantic HTML only.

## Decisions

| Decision | Choice | Reason |
|---|---|---|
| Date format | `Dec 25 2025` | Matches vanducng.dev; readable without being verbose |
| Metadata separator | `·` (middle dot) between date and category | Clean visual separator, no punctuation overhead |
| Prev/Next labels | `← Older` / `Newer →` | Intuitive for a journal; directional in time |
| Prev/Next order | Newer post = `.Next`, Older post = `.Prev` in Hugo | Hugo's default page ordering by date descending |
| Code blocks | `<pre><code>` only — no syntax highlighting | Chroma comes in Phase 9 |
| hello.md | Updated with category + short body | Makes single.html testable without extra dummy posts |
| Styling | None | CSS comes in Phase 4 |

## Metadata row format

```
Dec 25 2025  ·  AI
```

Hugo template:
```html
<time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "Jan 02 2006" }}</time>
· {{ index .Params.categories 0 }}
```

## Prev/Next format

```
← Older: Go API Auth          Newer: Spark Notes →
```

Hugo variables: `.PrevInSection` (older) and `.NextInSection` (newer).

## File structure after this phase

```
layouts/
  _default/
    baseof.html     ← Phase 1, unchanged
    list.html       ← Phase 2, unchanged
    single.html     ← NEW: single post template
content/
  posts/
    hello.md        ← UPDATED: category + short body added
```

## Out of scope

- CSS / styling (Phase 4)
- Navigation header / footer (Phase 5 & 6)
- Syntax highlighting (Phase 9)
- Categories page (Phase 10)
- Reading time, social share, Open Graph (Parking Lot)

## Context

- Builds on Phase 2: archive links now need a destination
- `hello.md` is the only post used for testing — no dummy posts needed
- Tech stack: Hugo Go templates, `{{ .Content }}` renders markdown to HTML automatically
- Reference: [vanducng.dev post](https://vanducng.dev) — title, date · category, body, prev/next
