# Governance

## Objective
Create a reviewable governance layer for `openai-nexus` while preserving the current codebase during evaluation.

## Roles
- Repository owner: final merge and release authority.
- Governance reviewer: validates repository identity and structure.
- Security reviewer: validates secrets handling and execution safety.

## Decision Model
- Avoid direct pushes to `main` for structural changes.
- Route structural changes through pull requests.
- Make the repository role explicit: reference SDK or Nexus anchor.

## Approval Rules
- Documentation updates: 1 reviewer.
- Structural changes: 2 reviewers.
- Sensitive execution-path changes: 2 reviewers including security review.
