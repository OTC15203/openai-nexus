# Palette's Journal - UX & Accessibility Learnings

## 2025-05-14 - Avoiding Infrastructure Bloat in Documentation PRs
**Learning:** Running `pnpm install` in a workspace can generate unwanted lockfiles (like `codegen/pnpm-lock.yaml`) that should not be committed if they are unrelated to the UX task. Always use `git status` and `git diff --cached` to verify that only intended files are being staged.
**Action:** Before submitting, perform a targeted cleanup of any local artifacts (`node_modules`, lockfiles) that were created during verification but are not part of the intended change.
