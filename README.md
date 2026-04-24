[![RepoRanker](https://reporanker.com/badge/thejaycampbell/mason)](https://reporanker.com/repos/thejaycampbell/mason)
# Mason

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Requires Claude Code](https://img.shields.io/badge/Requires-Claude%20Code-orange.svg)](https://claude.ai/code)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Mason is your website creation agent.** It reads your codebase, learns your brand, writes your copy, generates your code, and ships your site — all in one conversation.

---

## Demo

> **Screenshot/GIF coming soon** — if you've built something with Mason, [open an issue](https://github.com/thejaycampbell/mason/issues) and share it.

**The conversation looks like this:**

```
You:   /mason:build

Mason: I looked at your project — Next.js + Tailwind, dark mode active,
       no hero section yet. Want me to start there? I'll write the copy
       and build the component to match your existing setup.

You:   Yes, go for it.

Mason: [builds hero section with real copy, matching your stack and brand]
       Preview at http://localhost:4242 — take a look.
       Ready to ship? I can deploy this to Vercel in one command.
```

---

## What Mason Does

Mason produces fully working, content-filled websites. Not wireframes. Not specs. Not placeholder copy. Actual pages with real code and real content, in whatever stack you're already using.

**The loop:**
1. Reads your project — stack, colors, fonts, existing components, routes, tone
2. Classifies site type and maps existing pages
3. Asks where to start (or suggests, if you're not sure)
4. Proposes a build plan, gets your approval
5. Writes the copy, generates the code, previews it locally
6. Iterates on your feedback until it's right
7. Offers to deploy

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

**macOS / Linux:**
```bash
cp -r mason/.claude/agents/* your-project/.claude/agents/
cp -r mason/.claude/commands/* your-project/.claude/commands/
cp -r mason/.claude/rules/* your-project/.claude/rules/
```

**Windows (PowerShell):**
```powershell
Copy-Item -Recurse mason\.claude\agents\* your-project\.claude\agents\
Copy-Item -Recurse mason\.claude\commands\* your-project\.claude\commands\
Copy-Item -Recurse mason\.claude\rules\* your-project\.claude\rules\
```

Open your project in Claude Code. Mason will detect your stack, read your existing components and copy, and build in what you already have.

---

**Option 3 — Cadence or Jarvis users**

Same as Option 2. If your project has `.claude/identity/`, `.claude/voice/`, or `.claude/goals/` files, Mason reads them automatically and generates fully on-brand output without asking you about tone, audience, or positioning.

---

## Commands

| Command | What it does |
|---------|-------------|
| `/mason:start` | Set up your brand once — Mason learns it and remembers it for every future session |
| `/mason:build` | Start a build session — Mason orients, plans, and builds |
| `/mason:brief` | Start a brand-new project from scratch — runs an intake interview before building |
| `/mason:revise` | Revise an existing build — targeted changes without re-running the full pipeline |
| `/mason:preview` | Spin up a local preview server at `localhost:4242` |
| `/mason:deploy` | Detect hosting config and deploy (or guide through setup) |
| `/mason:audit` | Review an existing site for conversion, copy, and performance gaps |
| `/mason:seo` | Technical SEO audit — meta tags, structured data, Core Web Vitals, sitemap |

---

## Requirements

| Requirement | Version |
|-------------|---------|
| [Claude Code](https://claude.ai/code) | Latest |
| Node.js *(preview server only)* | 18+ |

No `npm install` needed. The preview server uses only Node.js built-ins.

---

## Project Structure

```
mason/
├── .claude/
│   ├── agents/
│   │   ├── mason.md            ← orchestrator
│   │   ├── mason-onboard.md    ← brand onboarding (persistent profile)
│   │   ├── mason-brand.md      ← brand extraction
│   │   ├── mason-brief.md      ← intake interview for blank projects
│   │   ├── mason-copy.md       ← content writing
│   │   ├── mason-builder.md    ← code generation
│   │   ├── mason-deploy.md     ← deployment
│   │   ├── mason-audit.md      ← site auditing
│   │   └── mason-seo.md        ← technical SEO
│   ├── commands/
│   │   ├── mason-start.md
│   │   ├── mason-build.md
│   │   ├── mason-brief.md
│   │   ├── mason-revise.md
│   │   ├── mason-preview.md
│   │   ├── mason-deploy.md
│   │   ├── mason-audit.md
│   │   └── mason-seo.md
│   └── rules/
│       └── mason.md          ← always-on principles
├── scripts/
│   └── preview-server.js     ← optional local preview server (Node 18+, no deps)
├── examples/
│   ├── saas-landing.html           ← SaaS landing page (plain HTML)
│   ├── nextjs-saas/                ← SaaS landing page (Next.js App Router)
│   └── vite-react-agency/          ← Agency site (Vite + React, asset fallbacks)
└── docs/
    ├── standalone.md
    ├── cadence-integration.md
    ├── architecture.md       ← how Mason works under the hood
    └── troubleshooting.md    ← common issues and fixes
```

---

## How It Works

Mason is a Claude Code agent bundle — no server, no framework, no dependencies beyond Claude Code itself.

Under the hood, specialized agents work in sequence:

- **mason** (orchestrator) — maps routes, classifies site type, runs the session; detects blank projects and routes to mason-brief
- **mason-onboard** — brand onboarding for users with existing branding; writes a persistent `.claude/mason/brand.md` that all future sessions use automatically
- **mason-brief** — intake interview for new projects with no codebase; outputs a synthetic brand profile identical to mason-brand's format
- **mason-brand** — reads existing codebase (or persistent brand profile), detects component libraries, dark mode, assets, competitive positioning
- **mason-copy** — writes all text using proven conversion frameworks (PAS, benefit-first)
- **mason-builder** — generates code with performance patterns baked in (next/image, lazy loading, CLS prevention)
- **mason-deploy** — detects platform (Vercel, Netlify, CI/CD) and handles deployment
- **mason-audit** — reviews existing sites for conversion, copy, and performance gaps
- **mason-seo** — technical SEO audit: meta tags, structured data, Core Web Vitals, sitemap

---

## Known Limitations

- **No browser-rendered preview** — preview server serves static files. Next.js/Vite projects need their own dev server running to see the full rendered output.
- **Image generation** — Mason references images that exist in `public/` but does not generate or source new images.
- **Multi-page builds** — Mason builds one page or section at a time. Full site generation across many pages works but takes multiple sessions.
- **Authenticated pages** — Mason does not handle auth-gated routes or dynamic data fetching beyond static content.

---

## Roadmap

- [ ] `examples/` — sample projects built with Mason for common site types
- [ ] `mason-audit` agent — reviews an existing site and identifies conversion gaps
- [ ] Storybook integration — generate component stories alongside components
- [ ] Multi-page session — build a full site in one go with a structured plan
- [ ] `mason-seo` agent — technical SEO audit + fixes post-build

---

## Social Preview

To set a custom social preview image for this repo (shown when shared on Twitter/LinkedIn), go to **Settings → Social Preview** in the GitHub repo and upload an image. Recommended size: 1280×640px.

## Discussions

Questions and ideas live in [GitHub Discussions](https://github.com/thejaycampbell/mason/discussions). Use Issues for bugs and feature requests only.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## License

[MIT](LICENSE) — © 2026 Jay Campbell

---

## Docs

- [Standalone usage guide](docs/standalone.md)
- [Cadence & Jarvis integration](docs/cadence-integration.md)
- [Architecture — how Mason works](docs/architecture.md)
- [Troubleshooting](docs/troubleshooting.md)
