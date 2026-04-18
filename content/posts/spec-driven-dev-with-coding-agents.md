---
title: "Spec-Driven Development with Coding Agents: How to Ship Without Losing Control"
date: 2026-04-18
categories: [AI]
---

Coding agents can write a lot of code, fast. That's both the promise and the problem. Without a disciplined workflow around them, you end up with a sprawling codebase you didn't fully design, specs that no longer match reality, and a growing sense that the agent is driving and you're just along for the ride.

Spec-driven development puts you back in control. Here's the framework.

---

## Your Specs Are the Source of Truth

Before any agent writes a line of code, your specs need to be solid — and they need to stay solid throughout the project. This means maintaining:

- A **living markdown file of recurring problems** the agent should check before starting work. Real bugs, gotchas, and failure patterns your codebase has already surfaced. Don't let the agent rediscover them.
- A **triage diagram of your visit/request lifecycle** so the agent always knows how data flows through the system and where a new feature fits.
- A **full API pipeline walkthrough** for the relevant endpoints.
- A **database schema** for the affected tables.

Agents don't have institutional knowledge. Your specs are how you give it to them.

---

## Structure Every Feature Phase Around Three Documents

Each feature moves through three documents before implementation begins:

- **Plan.md** — what you're building, why it matters, and how it fits the roadmap
- **Requirements.md** — the concrete spec: inputs, outputs, edge cases, acceptance criteria
- **Validation.md** — how you'll verify the feature is complete and correct

This structure creates a hard separation between the **planning phase** and the **implementation phase**. That separation matters: mixing the two is the fastest way to overflow the agent's context and your own.

---

## The Feature Phase Checklist

Before starting any new feature, run through this checklist to ensure you're starting clean:

1. **Do I have unfinished work?** Resolve it before opening a new branch.
2. **Is the last feature branch merged to main?** Don't stack work on unreviewed code.
3. **Is the next roadmap item still the right thing to build?** Re-evaluate after every merge.
4. **Have I cleared the agent's context?** Make sure the specs capture your current intent before spinning up a new session.

Starting in the right flow state is not a soft concern — it directly affects the quality of what gets generated.

---

## Ship in Small, Manageable Stages

Coding agents produce a lot of output quickly. The risk isn't that they'll write too little — it's that they'll write too much, in the wrong direction, before you catch it. A few principles to manage this:

- **Keep changes small and reviewable.** If a feature feels large, ask the agent to implement one part of it first before continuing.
- **Start with an MVP.** Don't move to full implementation until you have a concrete plan. Ask the agent to propose an MVP approach and validate it before committing.
- **Build in replanning time between features.** Use it to update your product specs, feature specs, and constitution to reflect what actually shipped — not what you originally planned.
- **Maintain clean divisions between feature phases.** This reduces confusion when reviewing history and makes it easier to understand which version of the spec produced which code.

---

## Replanning Is Part of the Process

After each feature ships, take time to replan before moving on:

- Update your **constitution** (your top-level product spec) to reflect what changed. Versioning it helps you trace which code came from which intent.
- If the implementation revealed new requirements, update your product and feature specs to match reality.
- If a change is large enough, give it its own feature phase on the roadmap rather than folding it into the next item.
- You can merge roadmap phases when they're tightly related — but do it deliberately, not by accident.

---

## Trust the Agent, but Verify Independently

Agents can produce a lot of code with a lot of confidence. That confidence is not always warranted. Two practices help:

- **Spawn parallel subagents for deep review.** When introducing a significant feature, don't rely on a single agent pass. Spawn several subagents to independently review the project with that feature change in mind. They'll catch things a single thread misses.
- **Re-validate your spec after every implementation.** Specs drift. Code drifts. Check that they still match each other before moving on.

---

## Agent Skills: Giving Your Coding Agent the Right Context on Demand

One reason coding agents underperform isn't lack of capability — it's lack of context. Agent Skills solve this by packaging procedural knowledge and codebase-specific context that the agent can load on demand.

Think of skills as the **institutional knowledge layer** for your agent. Instead of re-explaining your architecture, your conventions, or your deployment process every session, you encode it once in a skill and the agent loads it when relevant.

### What Skills Enable for Software Development

- **Domain expertise** — Package your team's conventions, architectural patterns, or review processes into reusable instructions.
- **New capabilities** — Give your agent the ability to follow a specific deployment pipeline, generate a particular file format, or interface with a custom internal tool.
- **Repeatable workflows** — Turn multi-step processes (migrations, code reviews, test generation) into consistent, auditable routines.
- **Portability** — Reuse the same skill across different agent tools and sessions without re-prompting from scratch.

For teams, skills are version-controlled packages of organisational knowledge. For individual developers, they're how you stop repeating yourself every time you open a new agent session.

---

## The Core Insight

The bottleneck when developing software with coding agents is not the agent's capability. It's **spec quality, context management, and phase discipline**. 

Write the spec. Keep it honest. Ship in small stages. Replan often. The agent handles the code — you handle the architecture of thought around it.
