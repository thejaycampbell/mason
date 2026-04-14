# Changelog

All notable changes to Mason are documented here.

Format: [Semantic Versioning](https://semver.org). Types: `Added`, `Changed`, `Fixed`, `Removed`.

---

## [Unreleased]

---

## [0.3.5] — 2026-04-14

### Added

**New agent: `mason-onboard`**
- Brand onboarding specialist — invoked by `/mason:start` when the user has existing branding to set up
- Checks for Cadence/Jarvis identity files, fetches existing site URL if available, reads `public/` assets and CSS variables before asking any questions
- Asks only what's missing — one question at a time, skips anything already answered
- Confirms the full profile with the user before writing anything
- Writes a persistent `.claude/mason/brand.md` in the exact schema mason-brand produces — downstream agents can't tell the difference
- Handles update flow: if a profile already exists, asks whether to update or start fresh

**New command: `/mason:start`**
- Entry point for brand onboarding with existing branding
- Injects: existing brand profile (if any), Cadence/Jarvis context files, package.json, public assets
- Replaces the "run `/mason:build` and hope it infers everything" pattern for users who want explicit brand setup

**Persistent brand profile: `.claude/mason/brand.md`**
- Written once by mason-onboard, read automatically by mason-brand on every future session
- mason-brand checks for this file first — if found, skips re-extracting Identity, Visual, and Voice; only runs stack/component detection (project-specific)
- Users can edit the file directly anytime — it's plain markdown

### Changed
- `mason-brand.md` — added Persistent Brand Profile section at the top; checks for `.claude/mason/brand.md` before codebase scan; merges saved profile with fresh stack/component detection
- `mason.md` — Step 1 (Orient) now notes the persistent brand profile if present
- `README.md` — added `/mason:start` to commands table, `mason-onboard` to project structure and agent list

---

## [0.3.0] — 2026-04-14

### Added

**New agent: `mason-brief`**
- Intake interview specialist for blank projects — no existing codebase required
- 5-7 structured questions asked one at a time (not a form dump)
- Outputs a synthetic brand profile in the exact same schema as mason-brand — downstream agents can't tell the difference
- Covers: product identity + ICP, site type, competitive positioning, color direction, stack choice, asset availability, primary conversion goal
- Skips questions already answered by the user's first message (reads context before asking)
- Case 2 mode: fills only `[NEEDS BRIEF]` gaps in an incomplete brand profile

**New commands: `/mason:brief` and `/mason:revise`**
- `/mason:brief` — explicit entry point for new projects; invokes mason-brief before building
- `/mason:revise` — targeted post-build revision; activates Revision Mode in the orchestrator (copy only / code only / both / new section). Does not re-run the full pipeline for single-section changes.

**Agent improvements**

`mason.md` orchestrator:
- Blank Project Detection (Step 0) — checks for existing components, markup files, and README before orienting; routes to mason-brief on blank projects
- Profile Validation step (between mason-brand and mason-copy) — scans for `[NEEDS BRIEF]` sentinels and resolves them before proceeding
- Revision Mode section — scope classification, targeted specialist dispatch, `Revision scope:` handoff field

`mason-brand.md`:
- Required Fields Contract table — defines required vs. optional fields and fallback behavior
- `[NEEDS BRIEF]` sentinel — required fields that can't be inferred get this marker instead of "unknown"; orchestrator catches and resolves
- `Asset status` field in Existing Assets — `present` or `minimal — builder will use fallbacks`

`mason-copy.md`:
- Missing Field Protocol — scans for `[NEEDS BRIEF]` in received brand profile; asks one targeted question per gap; never passes `[NEEDS BRIEF]` downstream
- Copy Mode Declaration — `Conversion` / `Citation / AEO` / `Hybrid` per page; resolves the zero-click vs. conversion contradiction
- Copy Length Standards table — word count targets for every section type (hero: 15-25 word subheadline, FAQ: 40-80 words, etc.)
- FAQ Objection Framework — objection categories by site type (SaaS, Service, Portfolio) with answer structure (direct answer first sentence)

`mason-builder.md`:
- Conversion Architecture section — above-the-fold checklist, CTA placement rules (3× minimum), trust signal placement pattern, social proof specificity rule (all four fields required), form friction rules
- Asset Fallback section — CSS wordmark, gradient hero, SVG letter favicon, designed mockup frames; triggered when `Asset status: minimal`

**New example: `examples/vite-react-agency/`**
- Complete Vite + React agency site (Forma — brand and web design studio)
- Service/Agency section order (Problem → Services → How It Works → Portfolio → Testimonials → FAQ → CTA)
- Demonstrates all three asset fallbacks: gradient hero, CSS wordmark, mockup frames for portfolio items
- Vite patterns: `React.lazy` + `Suspense` code splitting, `loading="lazy"` on images, preconnect in `index.html`
- FAQPage schema co-located with component data
- CSS wordmark in Header (no logo asset), SVG letter favicon in `index.html`

**CI update: `.github/workflows/validate.yml`**
- Updated to check for mason-brief.md in the required agents list

### Changed
- `README.md` — added mason-brief and /mason:revise to commands table; updated project structure tree and agent list

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
