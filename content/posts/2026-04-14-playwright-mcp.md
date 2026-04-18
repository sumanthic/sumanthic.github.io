---
title: "Using Playwright via MCP to inspect live pages"
date: 2026-04-14
categories: [Tools]
---

Been using the Playwright MCP server to let an AI agent drive a browser during development — navigate, screenshot, and run `evaluate()` against live pages.

The useful pattern: instead of eyeballing screenshots, use `browser_evaluate` to measure exact pixel positions and computed styles.

```js
() => ({
  left: el.getBoundingClientRect().left,
  paddingLeft: getComputedStyle(el).paddingLeft,
})
```

This lets you compare your site against a reference numerically, not just visually. Found that my archive row gap was 28px when the reference was 12px — something I wouldn't have caught reliably from screenshots alone.

The other useful one: `browser_evaluate` to force a state change (like toggling dark mode via `dataset.theme`) and then screenshot, without having to manually change your OS preference.

Setup is just adding the MCP server to your Claude config. No Playwright test boilerplate needed.
