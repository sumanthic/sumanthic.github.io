# Phase 2 — Post Archive Page: Plan

Micro phase — target ~1 hour. Each group is a discrete checkpoint.

---

## Group 1 — Create the list template

1. Create `layouts/_default/list.html`
2. Extend `baseof.html` via `{{ define "main" }}`
3. Group posts by year: `{{ range .Pages.GroupByDate "2006" }}`
4. Render each year as `<h2>{{ .Key }}</h2>`
5. Under each year, render a `<ul>` of posts:
   ```html
   <li>
     <time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "Jan 02" }}</time>
     <a href="{{ .Permalink }}">{{ .Title }}</a>
   </li>
   ```
6. Wrap in `<main>`

---

## Group 2 — Add dummy posts

7. Create 5 posts in `content/posts/` spanning at least 2 years:
   - `2024-12-10-go-api-auth.md` — category: Backend
   - `2025-03-22-rag-evaluation.md` — category: AI
   - `2025-09-05-spark-notes.md` — category: Notes
   - `2026-01-15-langgraph-agents.md` — category: AI
   - `2026-04-01-postgres-patterns.md` — category: Backend
8. Each post front matter (no body content):
   ```yaml
   ---
   title: "Post Title"
   date: YYYY-MM-DD
   categories: [Category]
   draft: false
   ---
   ```

---

## Group 3 — Verify locally

9. Run `hugo server` and navigate to `http://localhost:1313/posts/`
10. Confirm 3 year groups visible: `2026`, `2025`, `2024`
11. Confirm year order is descending — 2026 at top
12. Confirm each row shows `MMM DD   Post Title` with a linked title
13. Confirm `http://localhost:1313/` still shows the Phase 1 `< sumanthic />` h1
14. Confirm no ERROR lines in terminal (WARNs about `single.html` and taxonomy are expected)

---

## Group 4 — Clean up

15. Delete the 5 dummy posts (keep `hello.md`):
    ```bash
    rm content/posts/2024-12-10-go-api-auth.md
    rm content/posts/2025-03-22-rag-evaluation.md
    rm content/posts/2025-09-05-spark-notes.md
    rm content/posts/2026-01-15-langgraph-agents.md
    rm content/posts/2026-04-01-postgres-patterns.md
    ```
16. Confirm `hugo server` still runs cleanly after deletion
