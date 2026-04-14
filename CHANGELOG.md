# Changelog

All notable changes to Mason are documented here.

Format: [Semantic Versioning](https://semver.org). Types: `Added`, `Changed`, `Fixed`, `Removed`.

---

## [Unreleased]

---

## [0.2.0] — 2026-04-14

### Added

**New agents and commands**
- `mason-audit` agent — reviews existing sites for conversion gaps, copy quality, performance issues, and structural problems; produces a prioritized fix list
- `mason-seo` agent — technical SEO audit post-build: canonical tags, sitemap, robots.txt, structured data, Core Web Vitals, AEO, AI traffic tracking
- `/mason:audit` command — entry point for audit sessions
- `/mason:seo` command — entry point for SEO audit sessions

**Examples**
- `examples/saas-landing.html` — complete SaaS landing page in plain HTML (Dispatch, dark theme, real copy, no placeholders)
- `examples/nextjs-saas/` — complete Next.js App Router example showing component architecture, TypeScript interfaces, interactivity stubs, animation patterns, and full SEO output; 8 focused section components, root layout with Organization + SoftwareApplication schema, `sitemap.ts`, `robots.ts`

**GitHub Actions**
- `.github/workflows/validate.yml` — CI workflow that verifies all 7 agent files, 3 command files, rules file, frontmatter fields, and example files are present on every push and PR to `main`
- `.github/ISSUE_TEMPLATE/` — structured bug report and feature request templates
- `.github/PULL_REQUEST_TEMPLATE.md` — PR checklist enforcing `mason-` prefix and testing guidance

**Repository files**
- `AGENTS.md` — describes Mason to AI coding tools (Cursor, Windsurf, Copilot, etc.)
- `CONTRIBUTING.md` — contribution guide
- `CLAUDE.md` — project context for Claude Code users
- `CHANGELOG.md` — this file
- `package.json` — project metadata and `npm run preview` shortcut
- `docs/architecture.md` — why sequential pipeline, why markdown not framework, preview server design
- `docs/troubleshooting.md` — wrong stack detection, generic copy, dark mode, TypeScript errors

**mason-builder improvements**
- Component architecture guidance — generate a directory of focused components, not a monolith; `interface Props {}` on every component
- Interactivity stubs — FAQ accordion with `aria-expanded`/`aria-controls`, mobile nav toggle, pricing monthly/annual switch; full React + vanilla JS implementations
- Component state patterns — idle/loading/success/error for forms; skeleton loaders for data-driven components
- Animation system — `transition-colors` on interactive elements, `AnimateOnScroll` utility with `IntersectionObserver`, staggered delays via inline `style` (not dynamic Tailwind classes), `prefers-reduced-motion` guard
- SEO standard output — canonical tags, Organization schema in root layout, `datePublished`/`dateModified` content freshness signals on every generated page
- Component reuse rule — use shadcn/Radix before building from scratch
- Dark mode code generation and asset reuse rules
- Performance patterns per stack (Next.js `next/image`, plain HTML `loading="lazy"`, Vite/React)

**mason-copy improvements**
- AEO (Answer Engine Optimization) writing principles — verification-first hero, citable claims over vague language, `[STAT NEEDED]` marker for missing specifics
- ICP specificity principle — naming your buyer is what separates AI recommendation from AI listing
- About page positioning statement guidance — write as if AI will quote verbatim
- New section types: Multi-Stakeholder (14-person buying committee), Differentiation/Comparison, Press & Media, Linkable Asset/Research, Zero-Click/Definition, Pillar Page/Topic Hub, Blog Post/Article
- Meta output now includes `canonical_url`, `date_published`, `date_modified`

**mason-seo additions**
- Canonical tag templates for all stacks (Next.js App Router, Pages Router, plain HTML)
- Full sitemap generation templates for all stacks
- `robots.txt` with AI crawler allowance (GPTBot, ClaudeBot, PerplexityBot) — blocking these flagged as Critical
- Organization schema + `sameAs` JSON-LD for entity identity
- AI traffic tracking setup (GA4 and Plausible filter setup for Claude/ChatGPT/Perplexity referrals)
- AEO section: FAQPage schema, claim specificity check, BreadcrumbList, AI citation guidance

**mason-audit additions**
- AI visibility audit category with buyer-perspective diagnostic (ChatGPT/Perplexity check)
- Earned media readiness category — press page, linkable assets, publication shortlist
- ICP specificity and About page positioning checks

**mason-brand additions**
- Competitive positioning extraction (explicit comparisons, differentiators, positioning angles)
- ICP and positioning statement fields in brand profile output
- Dark mode detection (Tailwind class/media, CSS media, user-controlled)
- Component library detection table (shadcn/ui, Radix, DaisyUI, Headless UI, MUI, Chakra, Ant Design, Flowbite)

**mason orchestrator additions**
- Structured handoff context block format between agents
- Multi-page session guidance with page map, pacing, and mid-build ship offers

**Preview server**
- `--port` CLI flag for custom port
- Expanded MIME type support (`.webp`, `.avif`, `.mjs`, `.mp4`, `.webm`, `.pdf`)

### Changed
- `README.md` — full rewrite with demo conversation, requirements table, known limitations, roadmap, and docs section
- `.gitignore` — expanded with `.env*`, `.vercel/`, logs, OS files, editor files, build output
- Windows PowerShell install instructions added throughout docs

---

## [0.1.0] — 2026-04-10

### Added
- Initial Mason agent bundle
- `mason` orchestrator — orient → ask → plan → build → preview → iterate → ship loop
- `mason-brand` — brand extraction from codebase and Cadence/Jarvis context files
- `mason-copy` — content writing with PAS framework and structured section output
- `mason-builder` — stack-agnostic code generation with performance patterns
- `mason-deploy` — deployment with Vercel, Netlify, Firebase, CI/CD, and from-scratch guidance
- `/mason:build`, `/mason:preview`, `/mason:deploy` slash commands
- `scripts/preview-server.js` — lightweight static file server (zero npm dependencies)
- `docs/standalone.md` — standalone usage guide
- `docs/cadence-integration.md` — Cadence and Jarvis integration guide
- `README.md`, `LICENSE`, `.gitignore`

---

[Unreleased]: https://github.com/thejaycampbell/mason/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/thejaycampbell/mason/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/thejaycampbell/mason/releases/tag/v0.1.0
