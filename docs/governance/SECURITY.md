# Security

## Baseline
- Keep credentials out of source control.
- Prefer environment variables or a secrets manager.
- Review external dependencies before promoting them into the Nexus role.

## Branch Safety
- Use pull requests for structural changes.
- Review unusual branch names and default branch drift.
- Keep a clear record of repo-role changes.

## Immediate Focus
- Confirm whether this repo remains an SDK mirror or becomes a Nexus anchor.
- Avoid mixing upstream dependency code with Nexus-specific control-plane code without a documented boundary.
