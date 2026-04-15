---
description: Spin up a local preview to view Mason-generated pages before committing.
allowed-tools: Bash(node scripts/preview-server.js:*), Bash(lsof:*)
---

Check if a dev server is already running, then either point to it or spin up the Mason preview server.

Running dev server check: !`lsof -ti:3000,5173,8080,4321 2>/dev/null | head -1 || echo "none"`

Preview directory: !`ls _preview/ 2>/dev/null || echo "No _preview directory yet — run /mason:build first"`

If a dev server is already running on 3000, 5173, 8080, or 4321, tell the user to open that. Otherwise, check if `_preview/` has content and run:

```bash
node scripts/preview-server.js
```

If `scripts/preview-server.js` does not exist, let the user know they can open the files in `_preview/` directly in their browser.
