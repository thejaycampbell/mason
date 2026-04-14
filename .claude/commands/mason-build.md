---
description: Start a Mason website build session. Mason will read the project, ask where to begin, and build code + content together.
---

Use the mason agent to start a website build session for this project.

Current project context:
- Directory: !`pwd`
- Files: !`ls -1 2>/dev/null | head -30`
- Package info: !`cat package.json 2>/dev/null | head -20 || echo "No package.json"`
- Existing Claude context: !`ls .claude/ 2>/dev/null || echo "No .claude directory"`
- Git status: !`git status --short 2>/dev/null || echo "Not a git repo"`
