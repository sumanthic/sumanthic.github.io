# Phase 3 — Single Post Page: Plan

Micro phase — target ~1 hour. Each group is a discrete checkpoint.

---

## Group 1 — Update hello.md for testing

1. Add `categories: [Notes]` to `hello.md` front matter
2. Add a short body so the post has renderable content:
   ```markdown
   ---
   title: "Hello"
   date: 2026-04-18
   categories: [Notes]
   draft: false
   ---

   First post. This is sumanthic.
   ```

---

## Group 2 — Create the single post template

3. Create `layouts/_default/single.html`
4. Extend `baseof.html` via `{{ define "main" }}`
5. Render the post title as `<h1>{{ .Title }}</h1>`
6. Render the metadata row — date and first category:
   ```html
   <p>
     <time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "Jan 02 2006" }}</time>
     {{ with index .Params.categories 0 }} · {{ . }}{{ end }}
   </p>
   ```
7. Render the markdown body:
   ```html
   <article>
     {{ .Content }}
   </article>
   ```
8. Render Prev/Next navigation at the bottom:
   ```html
   <nav>
     {{ with .PrevInSection }}
       <a href="{{ .Permalink }}">← Older: {{ .Title }}</a>
     {{ end }}
     {{ with .NextInSection }}
       <a href="{{ .Permalink }}">Newer: {{ .Title }} →</a>
     {{ end }}
   </nav>
   ```

---

## Group 3 — Verify locally

9. Run `hugo server` and open `http://localhost:1313/posts/`
10. Click the `Hello` post link from the archive
11. Confirm the post page shows:
    - `Hello` as the `<h1>`
    - `Apr 18 2026 · Notes` in the metadata row
    - `First post. This is sumanthic.` as body text
12. Confirm no ERROR lines in terminal
13. Confirm Prev/Next links appear only when adjacent posts exist (with only one post, neither should show)
