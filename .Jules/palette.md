# Palette's Journal - UX & Accessibility Learnings

## 2025-06-30 - Documentation Metadata Integrity and Context Retention
**Learning:** In technical SDKs, Developer Experience (DX) is the primary UI. Misleading metadata instructions (like the incorrect space-separated format for # :property) directly break the "it just works" experience. Additionally, absolute GitHub links in the README force users out of their local/forked context, while relative links preserve it.
**Action:** Always verify documentation metadata syntax against actual code implementation and prioritize relative internal links for better navigation flow in non-upstream environments.
