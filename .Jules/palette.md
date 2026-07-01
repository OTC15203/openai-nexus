# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - Improving Onboarding DX and Navigation context
**Learning:** In technical SDK repositories, Developer Experience (DX) is the primary user interface. Absolute GitHub URLs in documentation break the mental model and physical navigation when developers are working in local clones or forks. Correcting metadata syntax (like `#:property`) in samples is critical to preventing first-run failures that frustrate new users.

**Action:** Prefer relative internal navigation links (using `./` or `../`) over absolute GitHub URLs to maintain context. Ensure centered repository branding is present in primary entry points for a professional feel. Always verify documentation metadata syntax against the actual parser behavior.
