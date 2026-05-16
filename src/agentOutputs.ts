import { z } from "zod";
import { fieldPathSchema, jsonPrimitiveSchema, relativePathSchema } from "./common.js";
import { pageDocumentSchema } from "./pageDocument.js";
import { themeTokensSchema } from "./themeTokens.js";

export const promptChangeSchema = z
  .object({
    field: fieldPathSchema,
    value: jsonPrimitiveSchema,
    reason: z.string().min(1).max(300).optional()
  })
  .strict();

export const promptEditOutputSchema = z
  .object({
    changes: z.array(promptChangeSchema).max(100).default([]).optional(),
    sectionOrder: z
      .object({
        sectionIds: z.array(z.string().min(1).max(80).regex(/^[A-Za-z][A-Za-z0-9_-]*$/)).min(1).max(40)
      })
      .strict()
      .optional()
  })
  .strict()
  .superRefine((output, context) => {
    if ((!output.changes || output.changes.length === 0) && !output.sectionOrder) {
      context.addIssue({
        code: "custom",
        message: "At least one content change or section order change is required"
      });
    }
  });

export const generatedFileSchema = z
  .object({
    filePath: relativePathSchema,
    kind: z.enum(["page", "theme", "manifest", "content", "assetReference"]),
    document: z.unknown()
  })
  .strict();

export const themeIngestionOutputSchema = z
  .object({
    summary: z.string().min(1).max(1000),
    pages: z.array(pageDocumentSchema).min(1),
    theme: themeTokensSchema,
    files: z.array(generatedFileSchema).default([]).optional()
  })
  .strict();

export type PromptChange = z.infer<typeof promptChangeSchema>;
export type PromptEditOutput = z.infer<typeof promptEditOutputSchema>;
export type GeneratedFile = z.infer<typeof generatedFileSchema>;
export type ThemeIngestionOutput = z.infer<typeof themeIngestionOutputSchema>;
