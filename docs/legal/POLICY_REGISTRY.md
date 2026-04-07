# Policy Registry

## Purpose
Map repository-level policy decisions to concrete implementation and review points.

## Current Repository State
- Repo name: `openai-nexus`
- Current codebase identity: OpenAI .NET SDK-style project
- Alignment status: partial

## Initial Policy Entries
### PR-001
**Policy:** Structural repo-role changes must be reviewed before merging.
**Applies to:** README replacement, top-level layout, branch policy, repo positioning.
**Control point:** Pull request review.

### PR-002
**Policy:** Credentials must not be committed to the repository.
**Applies to:** example code, tests, scripts, configuration.
**Control point:** review and secret scanning.

### PR-003
**Policy:** Upstream code and Nexus-owned assets should remain clearly separated until the repository role is finalized.
**Applies to:** docs, services, configs, and future control-plane code.
**Control point:** branch review and directory layout.
