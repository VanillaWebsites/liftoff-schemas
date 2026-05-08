import { z } from "zod";
import { componentNameSchema, fieldPathSchema, identifierSchema } from "./common.js";
import { editableFieldSchema } from "./editableManifest.js";

export const propDefinitionSchema = z
  .object({
    type: z.enum(["string", "number", "boolean", "object", "array", "image", "link", "richText"]),
    required: z.boolean().default(false).optional(),
    description: z.string().min(1).max(240).optional(),
    maxLength: z.number().int().positive().max(5000).optional()
  })
  .strict();

export const catalogComponentSchema = z
  .object({
    name: componentNameSchema,
    category: z.enum(["global", "layout", "section"]),
    version: z.number().int().positive(),
    description: z.string().min(1).max(300).optional(),
    props: z.record(identifierSchema, propDefinitionSchema),
    editableProps: z.record(fieldPathSchema, editableFieldSchema).default({}).optional()
  })
  .strict();

export const componentCatalogSchema = z
  .object({
    version: z.literal(1),
    components: z.array(catalogComponentSchema).min(1)
  })
  .strict()
  .superRefine((catalog, context) => {
    const names = new Set<string>();
    for (const [index, component] of catalog.components.entries()) {
      if (names.has(component.name)) {
        context.addIssue({
          code: "custom",
          message: `Duplicate component: ${component.name}`,
          path: ["components", index, "name"]
        });
      }
      names.add(component.name);
    }
  });

export type PropDefinition = z.infer<typeof propDefinitionSchema>;
export type CatalogComponent = z.infer<typeof catalogComponentSchema>;
export type ComponentCatalog = z.infer<typeof componentCatalogSchema>;
