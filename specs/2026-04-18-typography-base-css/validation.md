# Phase 4 — Typography & Base CSS: Validation

## How to know it's done

Run `hugo server` and open `localhost:1313`. All of the following must be true before merging.

---

## Checklist

### Colors
- [ ] Page background is `#fafafa` (off-white, not stark white)
- [ ] Body text is `#111111` (near-black)
- [ ] Links are `#2563eb` (blue)
- [ ] Code blocks have `#f4f4f4` background

### Layout
- [ ] Content column is centered on the page
- [ ] Column width is approximately 720px on a wide desktop viewport
- [ ] Content does not touch the browser edges on a narrow viewport (padding present)

### Typography
- [ ] Body font is a system font (no web font download in Network tab)
- [ ] Font size reads as 18px (inspect with DevTools → Computed)
- [ ] Line-height feels comfortable — not cramped, not double-spaced

### Code blocks
- [ ] `<pre><code>` blocks have a distinct background color
- [ ] Font inside code blocks is monospace
- [ ] A line of code longer than the column width triggers a horizontal scrollbar on the block (not the page)

### No regressions
- [ ] `/posts/` archive page still lists all posts
- [ ] Clicking a post still renders the full content
- [ ] No broken layout on the post detail page

## Merge criteria

All checkboxes above pass on both:
- Desktop (wide viewport)
- Mobile-width viewport (DevTools emulation is fine — no real device required)
