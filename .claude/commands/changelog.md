Update or create CHANGELOG.md in the project root.

## Steps

1. **Check if CHANGELOG.md exists** at the project root.

2. **If it does not exist:**
   - Run `git log --format="%ad|%s" --date=short` to get all commits with their dates.
   - Group commits by date (descending — most recent first).
   - Build the full CHANGELOG.md from scratch using the format below.
   - Write the file.

3. **If it does exist:**
   - Read CHANGELOG.md to find the most recent date heading (format `## YYYY-MM-DD`).
   - Run `git log --format="%ad|%s" --date=short` and filter to commits strictly after that date.
   - If there are no new commits, tell the user the changelog is already up to date and stop.
   - Prepend the new date sections to the top of the existing changelog (below any `# Changelog` title line).
   - Write the updated file.

## Format

```
# Changelog

## YYYY-MM-DD

- commit subject line
- commit subject line

## YYYY-MM-DD

- commit subject line
```

## Rules

- One `## YYYY-MM-DD` heading per date, most recent at the top.
- Each commit is one `- subject` bullet under its date.
- Exclude merge commits (lines whose subject starts with `merge:` or `Merge`).
- Keep subjects as-is — do not rephrase or summarize.
- Do not add any other content, commentary, or trailing newlines beyond the format above.
