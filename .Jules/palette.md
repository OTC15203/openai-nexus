## 2025-05-14 - Documentation Portability and Link Resilience
**Learning:** Absolute GitHub URLs in documentation (e.g., `https://github.com/user/repo/blob/main/file.md`) hinder portability. They break when browsing the repo in forks, feature branches, or local environments, often redirecting users back to the `main` branch of the upstream repository.
**Action:** Use relative paths (e.g., `./file.md` or `../dir/file.md`) for all internal repository links to ensure seamless navigation across different repository states and environments.
