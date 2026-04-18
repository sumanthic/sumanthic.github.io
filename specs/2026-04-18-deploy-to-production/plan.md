# Phase 6 — Deploy to Production: Plan

---

## Group 1 — Pre-flight code cleanup

1. Add `public/` (and `/resources/`) to `.gitignore`
2. Strip the dummy code block from `content/posts/hello.md` (keep the post, remove the python snippet and inline code added in Phase 4)

---

## Group 2 — Create the CI workflow

3. Create `.github/workflows/hugo.yml` with the following steps:
   - `actions/checkout@v4`
   - `peaceiris/actions-hugo@v3` pinned to `hugo-version: '0.160.1'`
   - `hugo --minify`
   - `actions/upload-pages-artifact@v3` with `path: ./public`
   - `actions/deploy-pages@v4`
4. Set workflow permissions: `contents: read`, `pages: write`, `id-token: write`
5. Set job environment to `github-pages` so the deploy URL is surfaced in the Actions UI

---

## Group 3 — Manual GitHub setup (user does this)

6. Create the GitHub repo at https://github.com/new (name: `sumanthic`, Public)
7. Add remote and push all local commits to origin
8. In repo Settings → Pages → Source: set to **GitHub Actions**
9. In repo Settings → Actions → General: confirm actions are allowed

---

## Group 4 — Validate and mark done

10. Confirm the workflow triggered and passed (green check on the commit)
11. Visit https://sumanthic.github.io and verify the site loads with header, posts, and footer
