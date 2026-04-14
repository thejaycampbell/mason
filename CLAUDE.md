# Mason — Claude Code Project Context

Mason is a **Claude Code agent bundle** for website creation. It is not a traditional software project — the "code" is primarily markdown agent instruction files.

## What This Repo Is

Five specialized agents that work in sequence to build websites:

1. `mason` (orchestrator) — runs the session, maps routes, classifies site type
2. `mason-brand` — reads codebase + Cadence/Jarvis files, outputs brand profile
3. `mason-copy` — writes all copy using PAS and benefit-first frameworks
4. `mason-builder` — generates code in the detected stack with performance patterns
5. `mason-deploy` — detects hosting config and guides deployment
6. `mason-audit` — reviews an existing site for conversion and quality gaps

## Core Philosophy

- **Ask less, infer more** — read the project before asking anything
- **Stack-agnostic** — detect and match; never impose a framework
- **Real content only** — no placeholders, ever
- **Offer, don't gate** — preview and deploy are options, not requirements
- **Specialists do the work** — orchestrator directs, specialists generate

## File Naming Rules

All Mason agents use the `mason-` prefix. This is intentional — it prevents conflicts when Mason is installed into Cadence, Jarvis, or any other Claude Code project. Do not rename agents or remove this prefix.

## When Working on This Repo

- Changes to `.claude/agents/*.md` are the most impactful — they directly change Mason's output quality
- The preview server (`scripts/preview-server.js`) is plain Node.js with no dependencies — keep it that way
- `examples/` is the most valuable thing missing — working examples of real sites built with Mason

## Testing Changes

There is no automated test suite. To validate a change:
1. Open this repo (or a target project with Mason installed) in Claude Code
2. Run `/mason:build` and describe a site
3. Evaluate whether the output improved

## Do Not

- Add npm dependencies to the preview server
- Rename agent files without updating all references in orchestrator + docs
- Remove the `mason-` prefix from any agent or command file
- Add framework-specific code to the agents — keep them stack-agnostic
