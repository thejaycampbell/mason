---
description: Deploy the site using the mason-deploy agent. Detects hosting config and handles deployment or guides through full setup from scratch.
allowed-tools: Bash(vercel:*), Bash(netlify:*), Bash(firebase:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*)
---

Use the mason-deploy agent to deploy this project.

Current deployment context:
- Hosting config: !`ls vercel.json netlify.toml .vercel .netlify firebase.json 2>/dev/null || echo "No hosting config found"`
- CI/CD workflows: !`ls .github/workflows/ 2>/dev/null || echo "No GitHub workflows"`
- Git status: !`git status --short 2>/dev/null || echo "Not a git repo"`
- Current branch: !`git branch --show-current 2>/dev/null || echo "unknown"`
- Remote: !`git remote -v 2>/dev/null | head -2 || echo "No remote"`
