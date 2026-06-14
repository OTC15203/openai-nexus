# Palette's Journal - UX & Accessibility Learnings

## 2026-06-14 - [Documentation DX & Branding]
**Learning:** Absolute GitHub URLs to internal files break navigation in local previews and forks; relative paths with explicit './' or '../' prefixes provide a much smoother developer experience. Additionally, the space-separated format for '#:property' directives previously suggested in troubleshooting was incorrect and led to build errors; 'Key=Value' is the required format.
**Action:** Always prefer relative paths for internal repository navigation and verify '#:property' directive syntax against the actual parser requirements (Key=Value).
