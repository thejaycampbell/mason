Revise an existing Mason build. Targeted changes only — copy, layout, or both — without re-running the full pipeline.

Use this after `/mason:build` when you want to change specific sections.

---

Build context:

Current directory: !`pwd`

Existing components: !`ls components/sections/ app/components/sections/ src/components/sections/ 2>/dev/null | head -20`

Recent changes: !`git diff --stat HEAD~3..HEAD 2>/dev/null | head -20`

Current headings (to orient on structure): !`grep -r "h1\|h2\|<h1\|<h2" components/ app/ src/ --include="*.tsx" --include="*.jsx" --include="*.html" -l 2>/dev/null | head -10`

Page structure: !`ls app/ pages/ src/ 2>/dev/null | head -10`

---

Activate Revision Mode in the mason orchestrator. Ask the user what they want to change, then classify the scope and spawn only the necessary specialists on only the affected components.

Do not re-run the full pipeline. Work only on what changed.
