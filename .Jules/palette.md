# Palette's Journal - UX & Accessibility Learnings

## 2026-06-15 - [Documentation UX & DX Improvements]
**Learning:** Absolute GitHub URLs in documentation hinder navigation in forks and local environments. Additionally, incorrect syntax for build directives (like `#:property`) in code snippets creates friction for developers following quickstart guides.
**Action:** Always use relative paths for internal repository links in Markdown. Ensure code snippets include necessary build properties (e.g., `PublishAot=false`) and verify the exact syntax of custom directives before documenting them.
