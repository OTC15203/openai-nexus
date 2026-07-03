# Palette's Journal - UX & Accessibility Learnings

## 2025-05-15 - Standardizing .NET 10 Documentation Directives
**Learning:** In technical SDKs without a web UI, the documentation and code snippets serve as the primary "User Interface". Inconsistencies between tutorial guidance and actual code metadata (like the `#:property` directive) create significant friction for developers.
**Action:** Always verify that documentation troubleshooting steps match the syntax used in the actual code samples, and favor `Key=Value` pairs over space-separated ones when programmatically configuring build properties in snippets.
