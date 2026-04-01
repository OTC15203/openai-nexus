# Approval Flow

## Standard Path
1. Create a feature branch.
2. Open a pull request.
3. Request review.
4. Merge only after required approvals.

## Structural Changes
Use this path for repository role, naming, top-level layout, and branch policy changes.
- Require at least two approvals.
- Confirm the change does not blur the boundary between upstream code and Nexus-owned assets.

## Suggested First Structural Decision
Decide whether `OTC15203/openai-nexus` is:
- a reference SDK mirror, or
- a Nexus control-plane repository
