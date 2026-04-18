# Validation — Phase 7

## Dark Mode

- [ ] With OS set to **dark**: page background is `#0d1117`, body text is `#e6edf3`, links are `#58a6ff`, code background is `#161b22`, border/dividers are `#30363d`.
- [ ] With OS set to **light**: original palette is restored — background `#fafafa`, text `#111111`, links `#2563eb`.
- [ ] No JavaScript is involved — toggling OS setting triggers the change without any JS running.
- [ ] No visible flash or unstyled content on load in either mode.

## Syntax Highlighting

- [ ] A fenced code block (e.g. ` ```go `) renders with syntax colors in **light mode**.
- [ ] `lineNos` is absent — no line numbers shown.
- [ ] Inline styles are used (no external highlight CSS file required).
- [ ] Non-code prose is unaffected.
- [ ] *(Known limitation, not a failure)* Code block colors look slightly off in dark mode — acceptable until dual-theme fix.

## Categories

- [ ] `/categories/` renders a list of all category names with post counts.
- [ ] Clicking a category name navigates to `/categories/<slug>/` and shows only posts in that category.
- [ ] Header nav contains a **Categories** link pointing to `/categories/`.
- [ ] Category label on a single post page still links to the correct taxonomy page.
- [ ] A category with only one post still renders correctly (no plural/singular bug).

## General

- [ ] `hugo server` runs with no errors or warnings introduced by this phase.
- [ ] All existing pages (archive, single post, header, footer) are unaffected in light mode.
