# Phase 1 — Scaffold & Hello World: Plan

Micro phase — target ~1 hour. Each group below is a discrete checkpoint.

---

## Group 1 — Install Hugo

**1.1** Verify Hugo is installed and at the right version:
```bash
hugo version
# must show v0.125.0 or higher
```

**1.2** If not installed or outdated:
```bash
brew install hugo
# or: brew upgrade hugo
```

---

## Group 2 — Scaffold the site

**2.1** Run from the repo root (not inside a subdirectory):
```bash
hugo new site . --force
# --force because the directory already exists (specs/, .gitignore are there)
```

**2.2** Confirm Hugo created the standard directories:
```
archetypes/   content/   layouts/   static/   themes/
```

**2.3** Delete `themes/` — sumanthic uses no external theme:
```bash
rm -rf themes/
```

---

## Group 3 — Configure hugo.toml

**3.1** Replace the generated `hugo.toml` with the exact values from requirements:
```toml
title        = "sumanthic"
baseURL      = "https://sumanthic.github.io"
languageCode = "en-us"
```

**3.2** Verify no leftover keys from the generated default remain.

---

## Group 4 — Create the base layout

**4.1** Create `layouts/_default/baseof.html` with a minimal block skeleton:
```html
<!DOCTYPE html>
<html lang="{{ .Site.LanguageCode }}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ .Title }} · {{ .Site.Title }}</title>
</head>
<body>
  {{ block "main" . }}{{ end }}
</body>
</html>
```

**4.2** No partials yet — header and footer are Phase 5 and 6.

---

## Group 5 — Create the placeholder post

**5.1** Create `content/posts/hello.md` with minimal front matter only:
```markdown
---
title: "Hello"
date: 2026-04-18
draft: false
---
```

**5.2** No body content — an empty body is intentional at this stage.

---

## Group 6 — Verify locally

**6.1** Start the dev server:
```bash
hugo server
```

**6.2** Open `http://localhost:1313` — confirm a page loads without errors.

**6.3** Check the terminal for any WARN or ERROR lines — resolve before committing.

---

## Group 7 — Commit

**7.1** Stage only Hugo project files (not `public/`):
```bash
git add hugo.toml content/ layouts/ static/ archetypes/
git status   # verify public/ is absent
```

**7.2** Commit:
```bash
git commit -m "feat: scaffold Hugo site for sumanthic"
```

**7.3** Push branch:
```bash
git push -u origin phase-1-scaffold
```
