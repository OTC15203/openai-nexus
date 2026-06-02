# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Documentation Property Directive Syntax
**Learning:** The .NET 10 single-file documentation snippets require space-separated property directives (e.g., `#:property Name Value`). Using an equals sign (`=`) is a common mistake that leads to build errors as noted in the project's troubleshooting guide.
**Action:** Always verify snippet syntax against `docs/README.md` when adding or modifying .NET 10 documentation guides.
