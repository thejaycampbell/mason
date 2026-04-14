# Mason — Standalone Usage Guide

This guide covers using Mason as a standalone project — cloning the repo and using it directly to build a new site.

---

## Setup

```bash
git clone https://github.com/thejaycampbell/mason.git
cd mason
```

Open the folder in Claude Code. No `npm install` needed.

---

## Starting a Build

**Option A — Use the slash command:**

```
/mason:build
```

This loads project context automatically and starts Mason.

**Option B — Talk to Mason directly:**

Just describe what you want to build:

> "I need a landing page for a freelance design studio. Clean, minimal, focused on portfolio work."

Mason will orient on any existing files, ask one question if needed, and propose a build plan before touching anything.

---

## The Build Session

### What Mason asks

Mason reads your project before asking anything. It only asks about things it genuinely can't infer. In a completely empty project, you might get one or two questions:

- "What's the site for, and who's the target audience?"
- "Do you have a preferred stack, or should I use plain HTML?"

Once you answer, Mason runs the full build: brand profile → copy → code.

### What Mason produces

Generated files land in your project directory following the detected stack's conventions. For a plain HTML project, you'll get `index.html` and supporting files. For a Next.js project, you'll get components in `components/` and pages in `app/` or `pages/`.

---

## Preview

After building, Mason offers a preview. If you say yes:

```
/mason:preview
```

Or Mason runs it automatically. The preview server starts at `http://localhost:4242` and serves files from `_preview/`.

**If you don't have Node.js:** You can open the generated HTML files directly in a browser. The preview server is optional.

---

## Iterating

Give feedback directly in the conversation:

> "The headline is good but the CTA feels too generic. And can you add a social proof section?"

Mason identifies whether the change needs copy, code, or both — and reruns just the necessary specialists.

---

## Deploying

When you're happy:

```
/mason:deploy
```

Mason checks for hosting config and handles it. If you don't have hosting set up yet, Mason walks you through Vercel setup (recommended) or guides you to another platform.

---

## Gitignore

Add this to your `.gitignore`:

```
_preview/
.superpowers/
```

The `_preview/` directory is temporary working space for Mason. `.superpowers/` is used during brainstorming sessions.
