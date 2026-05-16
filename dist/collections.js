import { z } from "zod";
import { fieldPathSchema } from "./common.js";
import { pageSectionSchema, pageStatusSchema, pageUrlPathSchema, seoSchema } from "./pageDocument.js";
export const collectionKeySchema = z
    .string()
    .min(1)
    .max(80)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
export const collectionFieldTypeSchema = z.enum(["string", "text", "date", "url", "image", "boolean", "select"]);
export const collectionRenderingSchema = z
    .object({
    index: z.enum(["page-section", "generated", "none"]).default("page-section"),
    detail: z.enum(["generated", "none"]).default("none")
})
    .strict();
export const collectionFieldDefinitionSchema = z
    .object({
    key: fieldPathSchema.refine((value) => !value.includes("."), "Collection field keys must be a single field path segment"),
    label: z.string().min(1).max(120),
    type: collectionFieldTypeSchema,
    maxLength: z.number().int().positive().max(5000).optional(),
    required: z.boolean().default(false).optional(),
    options: z.array(z.string().min(1).max(160)).min(1).max(100).optional()
})
    .strict()
    .superRefine((field, context) => {
    if (field.type === "select" && !field.options?.length) {
        context.addIssue({
            code: "custom",
            message: "select fields require options",
            path: ["options"]
        });
    }
});
const collectionDefinitionBaseSchema = z
    .object({
    key: collectionKeySchema,
    label: z.string().min(1).max(120),
    singularLabel: z.string().min(1).max(120),
    enabled: z.boolean().default(false),
    routeBase: pageUrlPathSchema,
    hasIndex: z.boolean().default(true),
    rendering: collectionRenderingSchema.optional(),
    indexPageTarget: collectionKeySchema.optional(),
    detailTemplate: collectionKeySchema.nullable().optional(),
    itemLabelField: z.string().min(1).max(80).default("title").optional(),
    fields: z.array(collectionFieldDefinitionSchema).max(40).default([])
})
    .strict()
    .superRefine((definition, context) => {
    const routeSegment = definition.routeBase.split("/").filter(Boolean).at(-1);
    if (!routeSegment || definition.routeBase !== `/${routeSegment}/`) {
        context.addIssue({
            code: "custom",
            message: "routeBase must be a single top-level route segment with trailing slash",
            path: ["routeBase"]
        });
    }
});
export const collectionDefinitionSchema = collectionDefinitionBaseSchema.transform((definition) => ({
    ...definition,
    rendering: definition.rendering ??
        {
            index: definition.hasIndex ? "page-section" : "none",
            detail: definition.detailTemplate ? "generated" : "none"
        }
}));
export const collectionRegistrySchema = z
    .object({
    version: z.literal(1),
    collections: z.array(collectionDefinitionSchema).min(1).max(40)
})
    .strict()
    .superRefine((registry, context) => {
    const keys = new Set();
    const routeBases = new Set();
    for (const [index, collection] of registry.collections.entries()) {
        if (keys.has(collection.key)) {
            context.addIssue({ code: "custom", message: `Duplicate collection key: ${collection.key}`, path: ["collections", index, "key"] });
        }
        if (routeBases.has(collection.routeBase)) {
            context.addIssue({ code: "custom", message: `Duplicate collection routeBase: ${collection.routeBase}`, path: ["collections", index, "routeBase"] });
        }
        keys.add(collection.key);
        routeBases.add(collection.routeBase);
    }
});
export const collectionItemSchema = z
    .object({
    version: z.literal(1),
    collection: collectionKeySchema,
    slug: collectionKeySchema,
    urlPath: pageUrlPathSchema,
    status: pageStatusSchema,
    title: z.string().min(1).max(160),
    excerpt: z.string().max(500).default(""),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    featuredImage: z.string().max(240).default(""),
    seo: seoSchema,
    content: z.array(pageSectionSchema).max(40).default([]),
    custom: z.record(z.string().min(1).max(80), z.unknown()).default({})
})
    .strict()
    .superRefine((item, context) => {
    const expectedSuffix = `/${item.slug}/`;
    if (!item.urlPath.endsWith(expectedSuffix)) {
        context.addIssue({
            code: "custom",
            message: "slug must match the final urlPath segment",
            path: ["slug"]
        });
    }
});
export const collectionStatusSchema = pageStatusSchema;
