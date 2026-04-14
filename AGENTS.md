# Mason — Agent Context

This file describes Mason for AI coding tools (Cursor, Windsurf, GitHub Copilot, Gemini Code Assist, and others).

## What This Project Is

Mason is a **Claude Code agent bundle** — a set of `.claude/` markdown files that turn Claude Code into a website creation assistant. It is not a traditional software project. The "code" is primarily agent instruction files written in markdown.

## What Mason Does

When someone opens this repo (or a project with Mason installed) in Claude Code and runs `/mason:build`, Mason:

1. Reads the codebase silently — stack, colors, fonts, existing components, routes, tone
2. Classifies the site type and maps existing pages
3. Asks where to start (or suggests a starting point)
4. Proposes a build plan, gets approval
5. Writes copy and generates code together
6. Previews locally or points to the running dev server
7. Offers deployment

## Project Structure

```
mason/
├── .claude/
│   ├── agents/           ← The core agents (most impactful files to edit)
│   │   ├── mason.md          orchestrator
│   │   ├── mason-brand.md    brand extraction
│   │   ├── mason-copy.md     content writing
│   │   ├── mason-builder.md  code generation
│   │   ├── mason-deploy.md   deployment
│   │   └── mason-audit.md    site auditing
│   ├── commands/         ← /mason:* slash command entry points
│   └── rules/            ← Always-on principles
├── scripts/
│   └── preview-server.js ← Lightweight static server (zero deps)
├── docs/                 ← User-facing documentation
└── examples/             ← Example sites built with Mason
```

## How to Work on This Project

**The agents are the product.** Editing `.claude/agents/mason-copy.md` directly changes how Mason writes copy for every user. Changes to these files are the highest-leverage work in the repo.

**The preview server is intentionally dependency-free.** `scripts/preview-server.js` uses only Node.js built-ins. Do not add npm dependencies to it.

**All agent files use the `mason-` prefix.** This prevents naming conflicts when Mason is installed into other projects alongside other Claude Code agent bundles. Do not rename agents or remove this prefix.

**There is no automated test suite.** To validate a change:
1. Open this repo (or a target project with Mason installed) in Claude Code
2. Run `/mason:build` and describe a site
3. Evaluate whether the output improved

## Key Conventions

- Agent files: `.claude/agents/mason-*.md`
- Command files: `.claude/commands/mason-*.md`
- Rules file: `.claude/rules/mason.md`
- All documentation: `docs/`
- Example outputs: `examples/`

## What Not to Change

- Do not add npm dependencies to the preview server
- Do not rename agent files without updating all references in the orchestrator and docs
- Do not remove the `mason-` prefix from any agent or command file
- Do not add framework-specific assumptions to the agents — they must remain stack-agnostic
