# Mason — Troubleshooting

Common issues and how to fix them.

---

## Mason generates the wrong stack

**Symptom:** You have a Next.js project but Mason generates plain HTML, or vice versa.

**Why it happens:** Mason detects the stack from config files. If `next.config.js` or `vite.config.ts` is missing, or if there's no `package.json`, Mason defaults to plain HTML.

**Fix:** Make sure your project has the right config files in the root:
- Next.js → `next.config.js` or `next.config.ts`
- Vite + React → `vite.config.ts`
- Astro → `astro.config.mjs`

If the files exist and Mason still gets it wrong, explicitly tell it:
> "This is a Next.js App Router project with Tailwind. Generate `.tsx` files in `app/`."

---

## Copy is generic — it doesn't sound like my brand

**Symptom:** Mason produces marketing copy that could be for any product, not yours specifically.

**Why it happens:** Mason infers voice from existing copy in your project. If there's no existing copy (new project, placeholders everywhere), it has nothing to learn from.

**Fix option 1:** Give Mason more to work with before building:
> "Before you start, I want my tone to be: direct, no jargon, confident but not aggressive. My audience is solo founders, not enterprise teams."

**Fix option 2:** Use Cadence or Jarvis. If you have a `.claude/voice/` directory with tone guidelines, Mason reads it automatically and produces on-brand copy without being asked.

**Fix option 3:** After generation, ask Mason to revise:
> "Rewrite the hero headline — it's too generic. Make it more direct and specific to project management for freelancers."

---

## Preview server won't start

**Symptom:** Running `node scripts/preview-server.js` fails, or nothing appears at `localhost:4242`.

**Common causes and fixes:**

**Port in use:**
```bash
# Try a different port
node scripts/preview-server.js --port 3001
```

**Node.js version too old:**
```bash
node --version  # needs to be 18+
```
Update Node.js at [nodejs.org](https://nodejs.org) if it's below 18.

**`_preview/` directory is empty:**
The preview server serves `_preview/`. If Mason hasn't built anything yet, the directory only contains a placeholder. Run `/mason:build` first.

**Firewall blocking localhost:**
On some corporate networks, `127.0.0.1` is blocked. Check your firewall settings or try opening the file directly in your browser instead.

---

## Mason generates a page but it doesn't show my existing styles

**Symptom:** The generated page renders without Tailwind classes, or with unstyled HTML.

**Why it happens:** Mason generates code that references Tailwind classes, but the generated page isn't inside your project's build system. The preview server serves static files and doesn't run your build pipeline.

**Fix:** Open the generated files in your actual dev server instead of the preview server:
1. Copy the generated files to the correct location in your project (mason-builder should do this automatically)
2. Run your existing dev server (`npm run dev` / `npx next dev` / `npx vite`)
3. Open `localhost:3000` (or your usual port)

---

## Dark mode components look broken

**Symptom:** Generated components look fine in light mode but are unreadable in dark mode.

**Why it happens:** mason-brand may not have detected dark mode, so mason-builder didn't add `dark:` classes.

**Fix:** Tell Mason explicitly:
> "This project uses Tailwind dark mode with the `class` strategy. All components need `dark:` variants."

Or check your `tailwind.config.js` and confirm `darkMode: 'class'` is set — Mason's detection depends on this.

---

## mason-deploy fails with a build error

**Symptom:** `vercel deploy --prod` fails with a build error.

**Fix:** Run the build locally first to see the exact error:
```bash
npm run build
# or
npx next build
```

Paste the error back to Mason and it will diagnose the issue. Common causes:
- **Missing env vars** — required environment variables aren't set in the platform dashboard
- **TypeScript errors** — type issues introduced in generated code; Mason will fix them
- **Missing dependencies** — a package that Mason referenced isn't installed; run `npm install`
- **Node version** — your platform's Node version differs from local; check `.nvmrc` or `engines` in `package.json`

---

## Mason keeps asking questions I've already answered

**Symptom:** Mason asks about your brand, tone, or audience even though you've told it before.

**Why it happens:** Mason doesn't persist memory between sessions by default. Each new conversation starts fresh.

**Fix:** Use Cadence or Jarvis. Once your brand, voice, and goals are captured in `.claude/identity/` and `.claude/voice/` files, Mason reads them at the start of every session without asking.

If you don't use Cadence/Jarvis, brief Mason at the start of each session:
> "Quick context before we start: this is a B2B SaaS for freelance project management. Tone is direct and confident, audience is solo founders."

---

## Mason builds the wrong page or ignores existing pages

**Symptom:** Mason suggests building a page that already exists, or doesn't notice that half the site is already built.

**Why it happens:** Mason maps routes from your `app/` or `pages/` directory during orientation. If your project doesn't use standard Next.js routing (e.g., custom file structure, or a different framework), route detection may miss pages.

**Fix:** Tell Mason what exists:
> "We already have `/`, `/about`, and `/pricing`. I need `/blog` and a blog post template."

---

## The generated code has TypeScript errors

**Symptom:** Mason generates `.tsx` files that fail `tsc`.

**Why it happens:** Mason can't run your TypeScript compiler during generation. It does a mental self-check, but occasionally misses mismatches.

**Fix:** Paste the exact error to Mason:
> "This generated code has a type error: [paste error]. Fix it."

Mason will identify and fix the issue — it won't tell you to "just ignore" TypeScript errors.

---

## Getting More Help

- **GitHub Issues:** [github.com/thejaycampbell/mason/issues](https://github.com/thejaycampbell/mason/issues) — use the bug report template
- **GitHub Discussions:** For questions, ideas, and sharing what you've built
