# Phase 3 — Single Post Page: Validation

## Done when

Clicking a post from the archive renders its full content with date + category metadata. (Matches roadmap.)

---

## Checklist

### Structure
- [ ] `layouts/_default/single.html` exists and extends `baseof.html`
- [ ] `hello.md` has `categories: [Notes]` and a short body

### Post renders correctly
- [ ] `http://localhost:1313/posts/hello/` loads without ERROR
- [ ] Title renders as `<h1>`
- [ ] Metadata row shows `Apr 18 2026 · Notes`
- [ ] Body content renders as HTML from markdown

### Prev/Next navigation
- [ ] `← Older` link appears only when an older post exists
- [ ] `Newer →` link appears only when a newer post exists
- [ ] With only `hello.md`, neither link appears (correct — no adjacent posts)

### Archive still works
- [ ] `http://localhost:1313/posts/` still renders the year-grouped list
- [ ] Clicking `Hello` from the archive lands on the correct post page

### What must NOT be present
- [ ] No CSS stylesheet linked
- [ ] No syntax highlighting on code blocks (plain `<pre><code>` only)
- [ ] No reading time, social share, or Open Graph tags

---

## Merge criteria

- All checklist items pass
- `hugo server` runs with no ERROR lines
- WARNs about taxonomy templates are expected — Phase 10
- Only `layouts/_default/single.html`, updated `content/posts/hello.md`, and `specs/2026-04-18-single-post/` are committed
