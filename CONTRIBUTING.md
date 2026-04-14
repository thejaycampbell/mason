# Contributing to Mason

Thanks for your interest in improving Mason. Contributions are welcome — bug fixes, new agent improvements, documentation, examples, and ideas.

---

## What Mason Is (and Isn't)

Mason is a **Claude Code agent bundle** — it's markdown files, not a traditional software project. "Code contributions" here mostly means improving agent instructions, adding new specialist agents, or improving the preview server script.

Keep that in mind: the quality bar is clear writing and well-reasoned agent behavior, not complex software architecture.

---

## Ways to Contribute

**Improve an existing agent**
If Mason produces bad output in a specific situation (wrong stack detected, generic copy, broken component), open an issue describing the input and what it produced. Better yet, open a PR with a fix to the relevant `.claude/agents/*.md` file.

**Add an example**
Build something with Mason and share it. An `examples/` directory with real-world site types (SaaS landing page, portfolio, etc.) would help users get started faster.

**Fix the preview server**
`scripts/preview-server.js` is plain Node.js with no dependencies. It's the most traditional code in the repo — PRs for correctness, MIME type coverage, and error handling are welcome.

**Improve documentation**
If something in the docs was confusing or incomplete, fix it.

---

## Getting Started

1. Fork the repo
2. Clone your fork
3. Make changes
4. Test manually by opening the project in Claude Code and running `/mason:build`
5. Submit a PR

No build step, no test suite to run. The main way to validate Mason is to use it.

---

## PR Guidelines

- **One thing per PR.** A PR that improves `mason-copy.md` and also rewrites the README is hard to review.
- **Describe the problem, not just the fix.** What input was producing bad output? What did you change and why?
- **Don't change agent names or command names** without opening an issue first — these are part of the public API for Cadence/Jarvis integrations.
- **Keep the `mason-` prefix** on all agent and command files. This prevents conflicts when Mason is installed into existing projects.

---

## Reporting Bugs

Use the [bug report template](https://github.com/thejaycampbell/mason/issues/new?template=bug_report.md). Include:
- What you asked Mason to build
- What stack/project type
- What it produced vs. what you expected

---

## Questions

Open a [discussion](https://github.com/thejaycampbell/mason/discussions) rather than an issue for general questions.
