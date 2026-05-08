import { z } from "zod";
import { componentNameSchema, identifierSchema, urlPathSchema } from "./common.js";

export const pageTypeSchema = z.enum([
  "home",
  "standard",
  "services_index",
  "service_detail",
  "landing",
  "location_index",
  "location_detail",
  "sector",
  "comparison",
  "problem_solution",
  "campaign",
  "case_studies_index",
  "case_study_detail",
  "blog_index",
  "blog_post",
  "contact",
  "thank_you",
  "legal"
]);

export const pageStatusSchema = z.enum(["draft", "published", "archived"]);

export const pageUrlPathSchema = urlPathSchema
  .regex(/^\/$|^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*\/)+$/, {
    message: "URL paths must be / or lowercase slug segments with trailing slash"
  })
  .refine((value) => !value.includes(".."), "URL path must not contain traversal")
  .refine((value) => !value.includes("//"), "URL path must not contain duplicate slashes")
  .refine((value) => {
    const firstSegment = value.split("/").filter(Boolean)[0];
    return !firstSegment || !["admin", "api", "app", "_astro", ".well-known"].includes(firstSegment);
  }, "URL path uses a reserved route segment");

export const seoSchema = z
  .object({
    title: z.string().min(1).max(70),
    description: z.string().min(1).max(160),
    canonicalPath: pageUrlPathSchema.optional(),
    noindex: z.boolean().default(false).optional(),
    socialImage: z.string().min(1).max(240).optional()
  })
  .strict();

export const pageSectionSchema = z
  .object({
    id: identifierSchema.optional(),
    component: componentNameSchema,
    props: z.record(z.string().min(1), z.unknown())
  })
  .strict();

export const pageDocumentSchema = z
  .object({
    version: z.literal(1),
    pageType: pageTypeSchema,
    slug: z.string().min(1).max(120).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    urlPath: pageUrlPathSchema,
    status: pageStatusSchema,
    seo: seoSchema,
    sections: z.array(pageSectionSchema).min(1).max(40)
  })
  .strict()
  .superRefine((page, context) => {
    if (page.seo.canonicalPath !== undefined && page.seo.canonicalPath !== page.urlPath) {
      context.addIssue({
        code: "custom",
        message: "seo.canonicalPath must match urlPath",
        path: ["seo", "canonicalPath"]
      });
    }

    if (page.urlPath !== "/") {
      const segments = page.urlPath.split("/").filter(Boolean);
      const lastSegment = segments.at(-1);
      if (lastSegment !== page.slug) {
        context.addIssue({
          code: "custom",
          message: "slug must match the final urlPath segment",
          path: ["slug"]
        });
      }
    }
  });

export type PageType = z.infer<typeof pageTypeSchema>;
export type PageStatus = z.infer<typeof pageStatusSchema>;
export type Seo = z.infer<typeof seoSchema>;
export type PageSection = z.infer<typeof pageSectionSchema>;
export type PageDocument = z.infer<typeof pageDocumentSchema>;
