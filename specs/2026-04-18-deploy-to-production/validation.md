# Phase 6 — Deploy to Production: Validation

## Merge criteria

All of the following must be true before merging.

### CI

- [ ] Push to `main` triggers the `Deploy Hugo site to GitHub Pages` workflow
- [ ] All workflow steps pass (green check on the commit in GitHub)
- [ ] No errors in the `hugo --minify` build step

### Live site

- [ ] https://sumanthic.github.io loads without error
- [ ] Header shows `< sumanthic />` logo and Posts / About links
- [ ] `/posts/` archive lists posts grouped by year
- [ ] A single post renders with date, category, and body content
- [ ] Footer shows copyright year and GitHub link

### Cleanliness

- [ ] `public/` is in `.gitignore` and not tracked in git
- [ ] `hello.md` no longer contains the Phase 4 test code block
