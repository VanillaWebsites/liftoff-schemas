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
};
export function parseEditableManifest(input) {
    return editableManifestSchema.parse(input);
}
export function parsePageDocument(input) {
    return pageDocumentSchema.parse(input);
}
export function parseComponentCatalog(input) {
    return componentCatalogSchema.parse(input);
}
export function parseThemeTokens(input) {
    return themeTokensSchema.parse(input);
}
export function parsePromptEditOutput(input) {
    return promptEditOutputSchema.parse(input);
}
export function parseThemeIngestionOutput(input) {
    return themeIngestionOutputSchema.parse(input);
}
export function formatZodError(error) {
    return error.issues.map((issue) => {
        const path = issue.path.length > 0 ? issue.path.join(".") : "(root)";
        return `${path}: ${issue.message}`;
    });
}
