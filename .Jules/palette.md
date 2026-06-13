# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - [DX: Documentation Property Directive Syntax]
**Learning:** The troubleshooting advice in documentation contained an incorrect syntax for .NET 10 property directives. Space-separated values (e.g., `#:property Key Value`) are invalid and cause build errors, whereas `Key=Value` is the required format.
**Action:** Always verify property directive syntax against successful build outputs or working samples.

## 2025-05-15 - [DX: Relative Navigation in Documentation]
**Learning:** Absolute GitHub URLs in documentation break the navigation experience when users view the project in forks, branches, or local IDEs. Relative links provide a seamless "just works" experience across all environments.
**Action:** Prefer relative paths for internal repository navigation in all Markdown files.
