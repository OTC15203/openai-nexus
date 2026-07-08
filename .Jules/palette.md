# Palette's Journal - UX & Accessibility Learnings

## 2024-05-14 - Correcting .NET 10 property directive format
**Learning:** The documentation previously suggested a space-separated format for `#:property` directives, but the .NET 10 compiler explicitly requires `Key=Value`. Incorrect documentation leads to poor developer experience (DX) and build failures.
**Action:** Always verify directive syntax against compiler output when updating technical documentation.
