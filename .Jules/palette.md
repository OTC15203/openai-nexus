# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - Relative Links and Documentation Accuracy
**Learning:** For technical documentation within a repository, using relative links (e.g., `./api/File.cs`) is superior to absolute GitHub URLs because it maintains navigational context in forks, branches, and local environments. Additionally, DX (Developer Experience) is compromised when troubleshooting guides provide incorrect syntax (e.g., recommending space-separated property directives when the compiler requires `Key=Value`).
**Action:** Always prefer relative paths for internal navigation in READMEs and verify technical syntax against actual working code samples in the repository.
