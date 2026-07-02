# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - Documentation Directive Format Consistency
**Learning:** In technical SDK documentation using custom C# snippet runners, the `#:property` directive format must be strictly `Key=Value`. Incorrect guidance (suggesting space-separated) leads to build failures and poor DX.
**Action:** Always verify directive syntax against actual working samples in the `docs/` directory before updating documentation guides.
