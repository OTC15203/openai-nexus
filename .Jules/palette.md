## 2025-05-22 - .NET 10 Documentation Runner Syntax
**Learning:** The new .NET 10 single-file runner (`dotnet run example.cs`) requires property directives to use space-separated syntax (e.g., `#:property PublishAot false`) rather than assignment syntax (`#:property PublishAot=false`). Using the incorrect syntax prevents properties from being applied correctly during direct execution.
**Action:** Always use space-separated syntax for `#:property` directives in C# documentation snippets and verify against the Troubleshooting guide in `docs/README.md`.
