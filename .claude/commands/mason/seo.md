---
description: Run a technical SEO audit on the current site. Mason will check meta tags, structured data, Core Web Vitals code patterns, sitemap, and crawlability — then produce a prioritized fix list.
---

Use the mason-seo agent to audit this project for technical SEO issues.

Current project context:
- Directory: !`pwd`
- Files: !`ls -1 2>/dev/null | head -30`
- Package info: !`cat package.json 2>/dev/null | head -10 || echo "No package.json"`
- Existing routes: !`ls app/ pages/ 2>/dev/null || echo "No app/pages directory found"`
- Public assets: !`ls public/ 2>/dev/null | head -20 || echo "No public directory"`
- robots.txt: !`cat public/robots.txt 2>/dev/null || echo "No robots.txt found"`
- Sitemap: !`ls public/sitemap* app/sitemap* pages/sitemap* 2>/dev/null || echo "No sitemap found"`
