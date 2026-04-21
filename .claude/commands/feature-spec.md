Find the next incomplete phase in specs/roadmap.md (first phase not marked with ✅).

Then do the following in order:

## Step 1 — Read context
Read these three files before doing anything else:
- specs/roadmap.md
- specs/mission.md
- specs/tech-stack.md

## Step 2 — Create branch
Create a git branch named after the phase (e.g. `phase-8-syntax-highlighting` or `feature-rss-feed`). Use kebab-case, keep it short.

## Step 3 — Ask before writing anything
Use the AskUserQuestion tool with exactly 3 questions grouped in a single call — one per spec file. Do NOT write any files before receiving answers.

Questions to ask:
1. **plan.md** — How should tasks be grouped? (e.g. by feature area, by work type, or other)
2. **requirements.md** — What decisions, constraints, or context should be captured beyond what's in the roadmap?
3. **validation.md** — How thorough should validation be? (checklist per feature, or done-when statements only)

## Step 4 — Create spec directory
Create `specs/YYYY-MM-DD-feature-name/` using today's date and a short slug matching the feature. Example: `specs/2026-04-18-dark-mode/`.

## Step 5 — Write the three files
Using the roadmap phase details, mission.md, tech-stack.md, and the user's answers, write:

### plan.md
A series of numbered task groups. Each group has a short name and a numbered list of concrete implementation steps. Reference specific files to create or edit where known.

### requirements.md
- What is in scope (per the roadmap phase)
- Key constraints and decisions (no JS, plain CSS, Hugo-native, etc. — draw from tech-stack.md and mission.md)
- Why this phase exists / what motivated it
- What is explicitly out of scope

### validation.md
A checklist of specific, checkable criteria — not vague "done when" statements. Each item should be something you can verify by looking at the browser or running a command. Group by feature area if the phase covers multiple things.

## Rules
- Never write to disk before AskUserQuestion answers are received
- Keep all three files concise — no multi-paragraph filler
- Draw from mission.md and tech-stack.md for constraints (don't invent them)
- The branch name and directory slug should match
