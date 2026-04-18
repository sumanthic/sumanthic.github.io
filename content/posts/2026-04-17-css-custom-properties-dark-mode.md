---
title: "CSS custom properties are the right primitive for dark mode"
date: 2026-04-17
categories: [Frontend]
---

The pattern that actually works: define all colors as custom properties on `:root`, then override just the properties inside a media query or a data attribute.

```css
:root {
  --bg: #fafafa;
  --text: #111;
}

@media (prefers-color-scheme: dark) {
  :root { --bg: #0d1117; --text: #e6edf3; }
}

/* explicit toggle via JS */
:root[data-theme="dark"] { --bg: #0d1117; --text: #e6edf3; }
:root[data-theme="light"] { --bg: #fafafa; --text: #111; }
```

The `[data-theme]` selector has higher specificity than the media query block, so the explicit toggle wins over the OS preference. No JS framework needed.

The trap: using `opacity` to fake muted text. It mutes the whole element including borders and backgrounds. Use an explicit `--muted` color token instead.
