---
title: "Hugo's template lookup order is not obvious"
date: 2026-04-18
categories: [Notes]
---

Spent 20 minutes wondering why my `taxonomy.html` wasn't being picked up. Turns out Hugo has a strict lookup order and `_default/taxonomy.html` only applies when there's no more specific match.

The order (simplified):

1. `layouts/<type>/<layout>.html`
2. `layouts/_default/<layout>.html`
3. `layouts/_default/list.html` (fallback)

The part I missed: `kind` matters. A taxonomy page (e.g. `/categories/notes/`) has kind `taxonomy`, not `list`. A terms page (`/categories/`) has kind `term`. Getting this wrong silently falls back to `list.html` and you get no error.

Fix was just moving the file to the right path and verifying with `hugo --verbose`.
