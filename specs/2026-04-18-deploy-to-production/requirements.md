# Phase 6 — Deploy to Production: Requirements

## Scope

Wire up continuous deployment so that every push to `main` automatically builds
and publishes the site to https://sumanthic.github.io. Full roadmap scope — no deviations.

## Starting state

- GitHub repo does not exist yet — must be created from scratch
- Local `main` branch has all Phase 1–5 work committed and pushed to origin (once repo exists)
- `baseURL = "https://sumanthic.github.io"` is already correct in `hugo.toml`

## Manual steps (done once by the user, outside the codebase)

1. Create repo at https://github.com/new
   - Name: `sumanthic` (must match username for Pages to serve at `sumanthic.github.io`)
   - Visibility: Public
   - No README / .gitignore — repo initialised locally
2. Add remote and push: `git remote add origin https://github.com/sumanthic/sumanthic.git && git push -u origin main`
3. In repo Settings → Pages → Source: select **GitHub Actions**
4. In repo Settings → Actions → General: confirm "Allow all actions and reusable workflows"

## Code changes

### `.gitignore`
- Add `public/` — Hugo build output; CI generates it fresh on every run

### `content/posts/hello.md`
- Remove the dummy code block added during Phase 4 testing (keep the post itself)

### `.github/workflows/hugo.yml`
- Trigger: push to `main`
- Permissions: `contents: read`, `pages: write`, `id-token: write`
- Steps: checkout → install Hugo 0.160.1 → `hugo --minify` → upload artifact → deploy to Pages
- Uses GitHub's official `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4`
- No personal token or `peaceiris/actions-gh-pages` needed

## Validation

- Push to `main` triggers the workflow
- GitHub Actions run passes (green)
- https://sumanthic.github.io loads and shows the blog with header, posts, footer
