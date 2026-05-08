# Liftoff Schemas

Shared runtime validation and TypeScript types for Liftoff.

This package is the contract layer between:

- `vanilla-brochure-starter`
- `vanilla-editor-platform`
- future theme ingestion and agent workflows

## Schemas

- Editable manifests.
- Page documents.
- Component catalogs.
- Theme tokens.
- Agent outputs.

## Commands

```bash
npm install
npm run build
npm test
```

## Design Rules

- Keep schemas strict by default.
- Reject unknown top-level object keys.
- Validate generated AI output before writing site files.
- Treat manifests and page documents as versioned contracts.
