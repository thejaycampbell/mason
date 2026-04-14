# Mason

**Mason is your website creation agent.** It reads your codebase, learns your brand, writes your copy, generates your code, and ships your site — all in one conversation.

---

## What Mason Does

Mason produces fully working, content-filled websites. Not wireframes. Not specs. Not placeholder copy. Actual pages with real code and real content, in whatever stack you're already using.

**The loop:**
1. Reads your project — stack, colors, fonts, existing components, tone
2. Asks where to start (or suggests, if you're not sure)
3. Proposes a build plan, gets your approval
4. Writes the copy, generates the code, previews it locally
5. Iterates on your feedback until it's right
6. Offers to deploy

---

## Quick Start

**Option 1 — Standalone (new project)**

```bash
git clone https://github.com/thejaycampbell/mason.git
cd mason
```

Open the folder in Claude Code. Talk to Mason:

> "I want to build a landing page for my SaaS. It handles project management for freelancers."

Mason takes it from there.

---

**Option 2 — Add to an existing project**

Copy Mason's agent files into your project's `.claude/` directory:

```bash
cp -r mason/.claude/agents/* your-project/.claude/agents/
cp -r mason/.claude/commands/* your-project/.claude/commands/
cp -r mason/.claude/rules/* your-project/.claude/rules/
```

Open your project in Claude Code. Mason will detect your stack, read your existing components and copy, and build in what you already have.

---

**Option 3 — Cadence or Jarvis users**

Same as Option 2. If your project has `.claude/identity/`, `.claude/voice/`, or `.claude/goals/` files, Mason reads them automatically and generates fully on-brand output without asking you about tone, audience, or positioning.

---

## Commands

| Command | What it does |
|---------|-------------|
| `/mason:build` | Start a build session — Mason orients, plans, and builds |
| `/mason:preview` | Spin up a local preview server at `localhost:4242` |
| `/mason:deploy` | Detect hosting config and deploy (or guide through setup) |

---

## Project Structure

```
mason/
├── .claude/
│   ├── agents/
│   │   ├── mason.md          ← orchestrator
│   │   ├── mason-brand.md    ← brand extraction
│   │   ├── mason-copy.md     ← content writing
│   │   ├── mason-builder.md  ← code generation
│   │   └── mason-deploy.md   ← deployment
│   ├── commands/
│   │   ├── mason-build.md
│   │   ├── mason-preview.md
│   │   └── mason-deploy.md
│   └── rules/
│       └── mason.md          ← always-on principles
├── scripts/
│   └── preview-server.js     ← optional local preview server
└── docs/
    ├── standalone.md
    └── cadence-integration.md
```

---

## How It Works

Mason is a Claude Code agent bundle — no server, no framework, no dependencies beyond Claude Code itself.

Under the hood, five specialized agents work in sequence:

- **mason** (orchestrator) — runs the session, directs the specialists
- **mason-brand** — reads the codebase and extracts brand context
- **mason-copy** — writes all the text (headlines, body, CTAs, meta)
- **mason-builder** — generates the code in your detected stack
- **mason-deploy** — handles deployment and setup guidance

The preview server (`scripts/preview-server.js`) is optional. It requires Node.js but has no npm dependencies.

---

## Requirements

- [Claude Code](https://claude.ai/code) — that's it for standalone use
- Node.js — only needed for the preview server (`/mason:preview`)

---

## Docs

- [Standalone usage guide](docs/standalone.md)
- [Cadence & Jarvis integration](docs/cadence-integration.md)
