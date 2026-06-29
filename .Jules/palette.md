# Palette's Journal - UX & Accessibility Learnings

## 2025-05-14 - Documentation Metadata Syntax Consistency
**Learning:** In technical SDK documentation where code samples are meant to be executed directly, incorrect metadata syntax (like the `#:property` directive format) can lead to developer frustration and build failures. Standardizing these directives across all samples ensures a smooth onboarding experience.
**Action:** Always verify metadata syntax against the project's supported formats (e.g., `Key=Value` for .NET 10 single-file snippets) and perform a repository-wide audit when a discrepancy is found.
