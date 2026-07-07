# Palette's Journal - UX & Accessibility Learnings

## 2026-07-07 - Correcting .NET 10 Snippet Directives & Improving Repo Branding
**Learning:** The `#:property` directive in the .NET 10 single-file execution format requires a `Key=Value` syntax. Documentation previously suggested a space-separated format which results in build errors (`error: The directive should contain a name without special characters and an optional value separated by '=' like '#:property Name=Value'`).
**Action:** Always use `Key=Value` for `#:property` directives and ensure documentation correctly reflects this to prevent DX friction.

**Learning:** Internal repository links in `README.md` should be relative (`./path/to/file`) rather than absolute GitHub URLs to ensure a seamless experience when browsing local clones or forks.
**Action:** Prefer relative paths for internal navigation links in Markdown files.
