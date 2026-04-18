---
title: "git worktree lets you check out two branches at once"
date: 2026-04-16
categories: [Tools]
---

Didn't know this existed until today. `git worktree add` creates a second working directory linked to the same repo, checked out to a different branch.

```bash
git worktree add ../my-repo-feature feature-branch
```

Now `../my-repo-feature` is on `feature-branch` while the original directory stays on `main`. Both share the same `.git` — no double cloning.

Useful when you're in the middle of something and need to quickly check or run code from another branch without stashing or committing.

Remove it with:

```bash
git worktree remove ../my-repo-feature
```

The thing I didn't expect: the linked worktree doesn't have its own `.git` directory — just a `.git` file that points back to the main repo. So it's lightweight.
