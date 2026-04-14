# Changelog

All notable changes to Mason are documented here.

Format: [Semantic Versioning](https://semver.org). Types: `Added`, `Changed`, `Fixed`, `Removed`.

---

## [Unreleased]

---

## [0.2.0] — 2026-04-14

### Added
- `mason-audit` agent — reviews existing sites for conversion gaps, copy quality, performance issues, and structural problems. Produces a prioritized fix list.
- `/mason:audit` command — entry point for audit sessions
- `mason-seo` agent — technical SEO audit and fixes post-build
- `AGENTS.md` — describes Mason to AI coding tools (Cursor, Windsurf, Copilot, etc.)
- `CONTRIBUTING.md` — contribution guide explaining how to improve agents, report bugs, and submit PRs
- `CLAUDE.md` — project context file for Claude Code users
- `CHANGELOG.md` — this file
- `package.json` — project metadata, `npm run preview` shortcut, Node.js engine requirement
- `examples/` directory with contribution guide and real example output
- `.github/ISSUE_TEMPLATE/` — structured bug report and feature request templates
- `.github/PULL_REQUEST_TEMPLATE.md` — PR checklist enforcing `mason-` prefix and testing guidance
- `--port` CLI flag for the preview server (`node scripts/preview-server.js --port 3001`)
- Expanded MIME type support in preview server (`.webp`, `.avif`, `.mjs`, `.mp4`, `.webm`, `.pdf`)
- Windows PowerShell install instructions in `README.md` and `docs/cadence-integration.md`
- Dark mode detection in `mason-brand` (Tailwind class/media, CSS media, user-controlled)
- Component library detection table in `mason-brand` (shadcn/ui, Radix, DaisyUI, Headless UI, MUI, Chakra, Ant Design, Flowbite)
- Asset scan of `public/` in `mason-brand` (logos, favicons, images, icons)
- Site type classification in `mason` orchestrator (SaaS/Product, Service/Agency, Portfolio, E-commerce, Blog, Landing Page)
- Proven section order defaults per site type in `mason-copy`
- PAS copywriting framework and benefit-first feature copy guidance in `mason-copy`
- FAQ section type with objection-handling guidance in `mason-copy`
- Component reuse rule in `mason-builder` (use shadcn/Radix before building from scratch)
- Dark mode code generation rule in `mason-builder`
- Asset reuse rule in `mason-builder` (use real logos from `public/`)
- Performance patterns per stack in `mason-builder` (Next.js, plain HTML, Vite/React)
- Error recovery self-check in `mason-builder`
- Rollback guidance in `mason-deploy` (Vercel, Netlify, CI/CD)

### Changed
- `README.md` — full rewrite with demo conversation, requirements table, known limitations, and roadmap
- `.gitignore` — expanded with `.env*`, `.vercel/`, logs, OS files, editor files, build output

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
