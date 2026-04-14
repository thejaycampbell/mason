Start here when you have existing branding to set up with Mason. Mason will learn your brand once and use it automatically in every future session.

**Use this when:**
- You have an existing website, style guide, or brand assets
- You use Cadence or Jarvis and want Mason to read your identity files
- You want Mason to stop re-inferring your brand from the codebase on every build

**Use `/mason:build` instead when:**
- You just want to build (Mason reads the codebase automatically)
- You have no brand yet and are starting from scratch (Mason will run a brief intake)

---

Existing brand profile: !`cat .claude/mason/brand.md 2>/dev/null && echo "--- found ---" || echo "none"`

Cadence/Jarvis context: !`ls .claude/identity/ .claude/voice/ .claude/goals/ 2>/dev/null || echo "none"`

package.json: !`cat package.json 2>/dev/null | head -10 || echo "none"`

Public assets: !`ls public/ 2>/dev/null || echo "none"`

Current directory: !`pwd`

---

Spawn mason-onboard to run brand onboarding. After the profile is confirmed and saved, tell the user to run `/mason:build` to start building.
