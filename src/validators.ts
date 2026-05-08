import type { z } from "zod";
import { promptEditOutputSchema, themeIngestionOutputSchema } from "./agentOutputs.js";
import { componentCatalogSchema } from "./componentCatalog.js";
import { editableManifestSchema } from "./editableManifest.js";
import { pageDocumentSchema } from "./pageDocument.js";
import { themeTokensSchema } from "./themeTokens.js";

export const schemas = {
  editableManifest: editableManifestSchema,
  pageDocument: pageDocumentSchema,
  componentCatalog: componentCatalogSchema,
  themeTokens: themeTokensSchema,
  promptEditOutput: promptEditOutputSchema,
  themeIngestionOutput: themeIngestionOutputSchema
} as const;

export function parseEditableManifest(input: unknown) {
  return editableManifestSchema.parse(input);
}

export function parsePageDocument(input: unknown) {
  return pageDocumentSchema.parse(input);
}

export function parseComponentCatalog(input: unknown) {
  return componentCatalogSchema.parse(input);
}

export function parseThemeTokens(input: unknown) {
  return themeTokensSchema.parse(input);
}

export function parsePromptEditOutput(input: unknown) {
  return promptEditOutputSchema.parse(input);
}

export function parseThemeIngestionOutput(input: unknown) {
  return themeIngestionOutputSchema.parse(input);
}

export function formatZodError(error: z.ZodError): string[] {
  return error.issues.map((issue) => {
    const path = issue.path.length > 0 ? issue.path.join(".") : "(root)";
    return `${path}: ${issue.message}`;
  });
}
