import { z } from "zod";
import { componentNameSchema, fieldPathSchema, identifierSchema, relativePathSchema } from "./common.js";
export const editableFieldTypeSchema = z.enum([
    "string",
    "text",
    "url",
    "email",
    "phone",
    "number",
    "boolean",
    "markdown",
    "richText",
    "asset"
]);
export const editableFieldSchema = z
    .object({
    type: editableFieldTypeSchema,
    label: z.string().min(1).max(120).optional(),
    maxLength: z.number().int().positive().max(5000).optional(),
    minLength: z.number().int().nonnegative().max(5000).optional(),
    allowHtml: z.boolean().default(false).optional(),
    required: z.boolean().default(false).optional(),
    pattern: z.string().min(1).max(240).optional(),
    allowedValues: z.array(z.string().min(1).max(160)).min(1).max(100).optional()
})
    .strict()
    .superRefine((field, context) => {
    if (field.minLength !== undefined && field.maxLength !== undefined && field.minLength > field.maxLength) {
        context.addIssue({
            code: "custom",
            message: "minLength must not exceed maxLength",
            path: ["minLength"]
        });
    }
});
export const editableTargetSchema = z
    .object({
    key: identifierSchema,
    label: z.string().min(1).max(120),
    filePath: relativePathSchema,
    fields: z.record(fieldPathSchema, editableFieldSchema).refine((fields) => Object.keys(fields).length > 0, {
        message: "At least one editable field is required"
    })
})
    .strict();
export const editableManifestSchema = z
    .object({
    version: z.literal(1),
    siteType: z.enum(["brochure"]),
    paths: z
        .object({
        theme: relativePathSchema,
        site: relativePathSchema,
        pages: relativePathSchema,
        collections: relativePathSchema.optional(),
        collectionItems: relativePathSchema.optional()
    })
        .strict(),
    targets: z.array(editableTargetSchema).min(1),
    allowedComponents: z.array(componentNameSchema).min(1)
})
    .strict()
    .superRefine((manifest, context) => {
    const targetKeys = new Set();
    for (const [index, target] of manifest.targets.entries()) {
        if (targetKeys.has(target.key)) {
            context.addIssue({
                code: "custom",
                message: `Duplicate target key: ${target.key}`,
                path: ["targets", index, "key"]
            });
        }
        targetKeys.add(target.key);
    }
    const components = new Set();
    for (const [index, component] of manifest.allowedComponents.entries()) {
        if (components.has(component)) {
            context.addIssue({
                code: "custom",
                message: `Duplicate component: ${component}`,
                path: ["allowedComponents", index]
            });
        }
        components.add(component);
    }
});
