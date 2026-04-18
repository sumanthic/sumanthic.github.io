# Phase 7 — Dark Mode (System Preference)

## Goal
Add dark mode that follows the OS preference. No JS, no toggle button.

## Change
Add `@media (prefers-color-scheme: dark)` block to `static/css/main.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg:       #0d1117;
    --text:     #e6edf3;
    --link:     #58a6ff;
    --code-bg:  #161b22;
    --border:   #30363d;
  }
}
```

## Out of scope
- No JS toggle
- No transition animations
- Syntax highlighting colors (code blocks will look slightly off in dark — deferred to Parking Lot dual-theme fix)

## Done when
Blog switches palette automatically with OS dark/light setting.
