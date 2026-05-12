# External Blocked Tasks

This document tracks tasks that are identified as necessary for the `OTC15203/FISK-DIMENSION` Unity runtime and associated .NET SDKs, but cannot be implemented in the current repository due to environmental constraints or repository scope boundaries.

## Unity Runtime Tasks

### 1. EpisodeLoader.cs JSON Mutation Hack
- **Issue:** The current implementation uses raw string replacement on JSON payloads (e.g., `jsonText.Replace("\"char\":", "\"char_id\":")`).
- **Risk:** High stability and security risk; can corrupt payloads or dialogue text.
- **Recommended Fix:** Refactor to use structured DTOs with `JsonProperty` attributes (e.g., using Newtonsoft.Json).
- **Status:** Blocked (External Repo).

### 2. Resource Loading Optimization
- **Issue:** `Resources.Load<T>()` is used synchronously, which can cause main-thread stalls.
- **Recommended Fix:** Replace with `Resources.LoadAsync<T>()` and implement async/await or coroutine flow.
- **Status:** Blocked (External Repo).

### 3. ChoiceOverlay Performance
- **Issue:** Repeated `GetComponentInChildren<Text>()` calls inside interaction loops.
- **Recommended Fix:** Cache component references during `Awake()`.
- **Status:** Blocked (External Repo).

## .NET SDK Tasks

### 1. AsyncSseUpdateCollection<T> Refactor
- **Issue:** The current SSE streaming implementation needs refinement for proper resource disposal and robustness.
- **Recommended Fix:** Internalize utilities and ensure `CancellationToken` propagation is consistent across the `IAsyncEnumerable` chain.
- **Status:** Blocked (External Repo).

### 2. Automated Test Coverage
- **Issue:** Weak coverage for error paths and malformed JSON in the loader.
- **Recommended Fix:** Add NUnit tests for `EpisodeLoader` and `StreamingSource` utility.
- **Status:** Blocked (External Repo).
