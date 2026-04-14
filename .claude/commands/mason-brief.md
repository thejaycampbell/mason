Start a new Mason project from scratch. Invokes mason-brief to run a structured intake interview before building anything.

Use this when you have no existing codebase — just an idea.

---

Project context:

Current directory: !`pwd`

Existing files (if any): !`ls -la 2>/dev/null | head -20`

package.json (if exists): !`cat package.json 2>/dev/null || echo "none"`

Cadence/Jarvis context (if exists): !`ls .claude/ 2>/dev/null || echo "none"`

---

Spawn mason-brief to run the intake interview. After the interview, mason-brief will produce a complete brand profile. Then proceed with the full Mason build loop: plan → copy → code → preview → ship.
