---
description: Audit an existing site for conversion gaps, copy quality, performance issues, and structural problems. Mason will produce a prioritized fix list.
---

Use the mason-audit agent to review this project.

Current project context:
- Directory: !`pwd`
- Files: !`ls -1 2>/dev/null | head -30`
- Package info: !`cat package.json 2>/dev/null | head -10 || echo "No package.json"`
- Existing routes: !`ls app/ pages/ 2>/dev/null || echo "No app/pages directory found"`
- Public assets: !`ls public/ 2>/dev/null | head -20 || echo "No public directory"`
