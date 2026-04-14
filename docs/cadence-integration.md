# Mason — Cadence & Jarvis Integration Guide

Mason is designed to slot directly into Cadence or Jarvis setups. When it detects your identity, voice, and goals files, it generates fully on-brand output without asking you about tone, audience, or positioning.

---

## Installing Mason into Cadence or Jarvis

Three commands. No conflicts — Mason uses the `mason-` prefix on everything.

**macOS / Linux:**
```bash
# From your Cadence/Jarvis root directory:
cp -r path/to/mason/.claude/agents/* .claude/agents/
cp -r path/to/mason/.claude/commands/* .claude/commands/
cp -r path/to/mason/.claude/rules/* .claude/rules/
```

**Windows (PowerShell):**
```powershell
# From your Cadence/Jarvis root directory:
Copy-Item -Recurse path\to\mason\.claude\agents\* .claude\agents\
Copy-Item -Recurse path\to\mason\.claude\commands\* .claude\commands\
Copy-Item -Recurse path\to\mason\.claude\rules\* .claude\rules\
```

That's it. Open your project in Claude Code and Mason is available.

---

## What Mason Reads

When Mason detects a Cadence or Jarvis environment, it reads:

| File/Directory | What Mason uses it for |
|---------------|----------------------|
| `.claude/identity/*` | Brand name, positioning, what you do and who you serve |
| `.claude/voice/*` | Tone guidelines, writing rules, personality, vocabulary |
| `.claude/goals/*` | Business objectives, target outcomes, priorities |
| `.claude/memory/*` | Accumulated context — decisions, patterns, preferences |

Mason reads these **before** your first conversation turn. By the time it says hello, it already knows your brand.

---

## What Changes in Cadence/Jarvis Mode

**Fewer questions.** In standalone mode, Mason might ask 1-2 questions about your brand before building. In Cadence/Jarvis mode, it skips those entirely — it already has the answers.

**On-brand copy.** The copy mason-copy generates will match your voice guidelines exactly. Same sentence structure, same vocabulary, same personality.

**Audience-aware content.** mason-copy knows who you're writing for and adjusts complexity, terminology, and tone accordingly.

**Goal-aligned structure.** mason-builder knows your priorities and can make informed layout and hierarchy decisions — not just generic "best practice" patterns.

---

## Detection Logic

Mason auto-detects your environment by checking for these directories at project start:

```
.claude/identity/   ← triggers Cadence/Jarvis mode
.claude/voice/      ← triggers Cadence/Jarvis mode
.claude/memory/     ← triggers Cadence/Jarvis mode
```

If any of these exist, Mason switches to full context mode automatically. No configuration needed.

---

## Using Mason Commands

The commands work the same way in Cadence/Jarvis as in standalone:

```
/mason:build    ← start a build session
/mason:preview  ← preview generated pages locally
/mason:deploy   ← deploy the site
```

---

## Example Flow

In a Cadence-based project for a B2B SaaS company:

1. `/mason:build`
2. Mason reads `.claude/identity/`, `.claude/voice/`, existing components, `package.json`
3. Mason says: "I see you're building for enterprise procurement teams. You don't have a pricing page yet — want me to start there? I'll write it in your direct, no-fluff tone and generate the Next.js components to match your existing layout."
4. You say yes. Mason builds — no questions about tone, no questions about audience.
5. The output sounds like you wrote it.

---

## File Conflicts

Mason uses the `mason-` prefix on all agent and command files:

- `.claude/agents/mason.md`
- `.claude/agents/mason-brand.md`
- `.claude/agents/mason-copy.md`
- `.claude/agents/mason-builder.md`
- `.claude/agents/mason-deploy.md`
- `.claude/commands/mason-build.md`
- `.claude/commands/mason-preview.md`
- `.claude/commands/mason-deploy.md`
- `.claude/rules/mason.md`

None of these will overwrite standard Cadence agents or commands.
