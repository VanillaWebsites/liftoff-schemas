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
    robots: z.enum(["index,follow", "noindex,follow", "index,nofollow", "noindex,nofollow"]).optional(),
    socialImage: z.string().max(240).optional(),
    ogTitle: z.string().max(95).optional(),
    ogDescription: z.string().max(220).optional(),
    ogImage: z.string().max(240).optional(),
    twitterTitle: z.string().max(70).optional(),
    twitterDescription: z.string().max(200).optional(),
    twitterImage: z.string().max(240).optional(),
    schemaType: z.enum(["WebPage", "AboutPage", "ContactPage", "Service", "FAQPage", "Article", "BlogPosting", "LocalBusiness", "Organization", "Product"]).optional(),
    faq: z.array(z.object({
        question: z.string().max(160),
        answer: z.string().max(800)
    }).strict()).max(20).optional(),
    service: z.object({
        name: z.string().max(120).optional(),
        description: z.string().max(500).optional(),
        serviceType: z.string().max(120).optional(),
        areaServed: z.string().max(160).optional(),
        providerName: z.string().max(120).optional()
    }).strict().optional(),
    localBusiness: z.object({
        name: z.string().max(120).optional(),
        phone: z.string().max(40).optional(),
        email: z.string().max(120).optional(),
        address: z.string().max(300).optional(),
        openingHours: z.string().max(160).optional(),
        sameAs: z.string().max(1000).optional()
    }).strict().optional(),
    schemaJson: z.string().max(5000).optional(),
    headCode: z.string().max(5000).optional()
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
