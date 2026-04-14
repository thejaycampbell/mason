# Mason — Architecture

How Mason works under the hood, and why it's designed this way.

---

## The Core Idea

Mason is a **multi-agent pipeline** implemented entirely as Claude Code markdown files. There is no server, no runtime, and no framework. The "code" is instruction files — and Claude Code is the runtime.

This design means:
- Anyone with Claude Code can use Mason with no install step
- Mason works in any project without modifying the project itself
- Updating Mason means editing markdown, not deploying software

---

## The Agent Pipeline

Mason delegates all generation work to specialists. The orchestrator coordinates; the specialists produce.

```
User
 │
 ▼
mason (orchestrator)
 │  orient → ask → plan → confirm
 │
 ├─▶  mason-brand  ──────────▶  brand profile
 │                                   │
 ├─▶  mason-copy  ◀──────────────────┤
 │       │ structured copy output    │
 │       ▼                           │
 ├─▶  mason-builder  ◀───────────────┘
 │       │ complete code files
 │       ▼
 │    preview / iterate
 │
 └─▶  mason-deploy  (offer, not requirement)
```

Each step in the pipeline feeds the next:
- **mason-brand** reads the codebase and outputs a brand profile
- **mason-copy** receives the brand profile and outputs structured copy (headlines, CTAs, body text)
- **mason-builder** receives both and outputs complete, working code files

The orchestrator never generates code or copy itself. It coordinates, passes context, and manages the user interaction.

---

## Why Sequential, Not Parallel

The pipeline runs sequentially because each stage depends on the output of the previous one:

- mason-copy needs the brand profile to write on-brand copy
- mason-builder needs the copy to slot into components — it can't generate placeholder copy and fix it later

Running them in parallel would produce code with generic copy, requiring a second pass to replace it. Sequential execution produces correct output in one pass.

---

## Context Handoff Format

When the orchestrator passes context between agents, it uses a structured block:

```
## Handoff Context

**Brand Profile:** [full output from mason-brand]

**Build Plan:**
- Site type: [SaaS / Service / Portfolio / E-commerce / Blog / Landing Page]
- Pages to build: [list]
- Sections per page: [list]
- User-confirmed decisions: [any explicit choices the user made]

**Structured Copy:** [full output from mason-copy — included when passing to mason-builder]
```

This format ensures each specialist has everything it needs without needing to re-read the codebase.

---

## Cadence / Jarvis Mode

Mason detects its environment at orientation time by checking for:

```
.claude/identity/   → brand name, positioning, description
.claude/voice/      → tone guidelines, vocabulary, writing rules
.claude/goals/      → business objectives, target audience
.claude/memory/     → accumulated context and past decisions
```

If any of these directories exist, Mason is in **Cadence/Jarvis mode**. This changes two things:

1. mason-brand reads these files as the primary source of brand context (over what it infers from code)
2. mason-copy uses the voice guidelines directly and skips generic defaults

The detection is intentionally broad — any of the three directories triggers it. This is because partial setups (e.g., identity but no goals) are common, and the extra context is always useful even when incomplete.

---

## Why Markdown, Not a Framework

Early designs considered building Mason as a Node.js CLI or a VS Code extension. The markdown approach won for three reasons:

**Zero install friction.** A Node CLI requires `npm install`. A VS Code extension requires a marketplace install. Markdown files require nothing — just copy them into `.claude/` and open Claude Code.

**Composability.** Mason can coexist with any other Claude Code agent bundle. The `mason-` prefix prevents conflicts. Users install Mason alongside their existing setup by copying three directories.

**Low barrier to contribution.** Improving Mason's copy output means editing `mason-copy.md`. Improving stack detection means editing `mason-brand.md`. No build step, no test suite to run, no local dev environment to set up. Anyone comfortable reading marketing copy or editing documentation can improve Mason.

---

## The Preview Server

`scripts/preview-server.js` is a lightweight static file server that:
- Serves files from `_preview/`
- Has zero npm dependencies (uses only Node.js built-ins)
- Auto-creates `_preview/` with a placeholder if it doesn't exist
- Finds an available port starting from 4242
- Prevents path traversal attacks

It is intentionally minimal. It does not run build pipelines, transpile code, or handle hot reloading. For those, the user's existing dev server (Next.js, Vite, etc.) is the right tool — Mason points users there when it detects a dev server is already running.

The preview server exists for users who don't have a dev server running — plain HTML projects, quick experiments, or when the user just wants to see generated output before deciding where it goes.

---

## The `mason-` Prefix Convention

Every file Mason owns uses the `mason-` prefix:

- `.claude/agents/mason.md`, `mason-brand.md`, etc.
- `.claude/commands/mason-build.md`, etc.
- `.claude/rules/mason.md`

This is intentional. Claude Code agent bundles from different projects coexist in the same `.claude/` directory. Without a prefix, a common name like `builder.md` or `deploy.md` would conflict with agents from other bundles. The `mason-` prefix guarantees Mason never overwrites another project's agents when installed.

---

## Adding a New Agent

To add a new specialist to Mason:

1. Create `.claude/agents/mason-[name].md` with the appropriate frontmatter:
   ```yaml
   ---
   name: mason-[name]
   description: [one sentence — this is what Claude uses to decide when to invoke it]
   model: sonnet
   color: [any color name]
   ---
   ```

2. Define what inputs the agent receives and what it outputs

3. Update `mason.md` (orchestrator) to invoke the new agent at the right step

4. If the agent should be user-invocable directly, add `.claude/commands/mason-[name].md`

5. Add the new agent to the `mason-` prefix convention — it must use the prefix

6. Update `README.md` to mention the new agent, and `CHANGELOG.md` under `[Unreleased]`

---

## Relationship to Cadence

[Cadence](https://github.com/thejaycampbell/cadence) is a Claude Code setup skeleton for building personal AI systems (Chief of Staff workflows, context files, memory systems). Mason is a capability bundle that plugs into Cadence.

When Mason is installed into Cadence:
- Mason inherits Cadence's identity, voice, and goals files automatically
- Cadence's memory system persists Mason's build decisions across sessions
- The user gets Mason's build capabilities plus Cadence's persistent context — no re-briefing required
