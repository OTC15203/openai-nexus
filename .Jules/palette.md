# Palette's Journal - UX & Accessibility Learnings

## 2026-06-23 - [DX] Standardizing Documentation Snippet Metadata
**Learning:** In technical SDKs, Developer Experience (DX) is a core component of UX. Correct metadata syntax in documentation snippets (e.g., `#:property Key=Value`) is critical for ensuring code samples are runnable. Inconsistent or incorrect documentation leads to immediate user friction.
**Action:** Always verify snippet runner syntax against the actual implementation or authoritative documentation before mass-applying updates. Ensure all standalone samples include necessary execution properties like `PublishAot=false` for consistent behavior across environments.
