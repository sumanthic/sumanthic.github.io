# Phase 2 — Post Archive Page: Validation

## Done when

`/posts/` lists all posts grouped by year, plain text, no icons. (Matches roadmap.)

---

## Checklist

### Structure
- [ ] `layouts/_default/list.html` exists and extends `baseof.html`
- [ ] Page renders at `http://localhost:1313/posts/` with no ERROR lines

### Year grouping
- [ ] At least 2 year groups visible during testing (`2024`, `2025`, `2026`)
- [ ] Years render as `<h2>` elements
- [ ] Year order is descending — most recent year at top
- [ ] Posts within each year are ordered newest-first

### Post rows
- [ ] Each row shows date formatted as `MMM DD` (e.g. `Jan 15`)
- [ ] Each row has a linked post title
- [ ] Links are correct URLs (clicking 404s — `single.html` is Phase 3)

### Homepage unchanged
- [ ] `http://localhost:1313/` still renders the Phase 1 `< sumanthic />` h1

### What must NOT be present
- [ ] No CSS classes from a stylesheet
- [ ] No series icons or badges
- [ ] No excerpts or descriptions
- [ ] No pagination controls

---

## Merge criteria

- All checklist items pass
- `hugo server` runs with no ERROR lines (WARNs about `single.html` and taxonomy templates are expected — Phase 3 and Phase 10)
- 5 dummy posts deleted — only `hello.md` remains in `content/posts/`
- Only `layouts/_default/list.html` and `specs/2026-04-18-post-archive/` are committed
