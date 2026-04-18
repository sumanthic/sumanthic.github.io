# Phase 1 — Scaffold & Hello World: Validation

## Merge bar

**`localhost:1313` renders without errors — that's the only hard requirement.**

---

## Checklist

Run through this before opening a PR or merging to `main`.

### Hugo runs

- [ ] `hugo version` reports v0.125.0 (pinned — must match CI in Phase 7)
- [ ] `hugo server` starts with no ERROR lines in terminal
- [ ] `http://localhost:1313` returns a page (any page — blank body is fine)

### hugo.toml is correct

- [ ] `title = "sumanthic"`
- [ ] `baseURL = "https://sumanthic.github.io"`
- [ ] `languageCode = "en-us"`
- [ ] No leftover generated keys (e.g. no `theme = ""`)

### File structure is clean

- [ ] `layouts/_default/baseof.html` exists and has `{{ block "main" . }}{{ end }}`
- [ ] `content/posts/hello.md` exists with `draft: false`
- [ ] `themes/` directory does not exist
- [ ] `public/` is not committed (covered by `.gitignore`)

### Git hygiene

- [ ] Only Hugo project files are staged — no screenshots, no `.DS_Store`
- [ ] Branch is `phase-1-scaffold`, not `main`
- [ ] Commit message is clear and scoped to this phase

---

## What "renders" means here

A blank white page at `localhost:1313` with the correct `<title>` tag is a pass.
No content, no styling, no nav — all of that is future phases.

## What is NOT validated in this phase

- Production build (`hugo --minify`) — validated from Phase 7 onward
- Mobile layout — no CSS exists yet
- Any links — no nav, no internal links exist yet
- Dark mode, syntax highlighting, categories — all future phases
