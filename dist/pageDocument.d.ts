import { z } from "zod";
export declare const pageTypeSchema: z.ZodEnum<{
    home: "home";
    standard: "standard";
    services_index: "services_index";
    service_detail: "service_detail";
    landing: "landing";
    location_index: "location_index";
    location_detail: "location_detail";
    sector: "sector";
    comparison: "comparison";
    problem_solution: "problem_solution";
    campaign: "campaign";
    case_studies_index: "case_studies_index";
    case_study_detail: "case_study_detail";
    blog_index: "blog_index";
    blog_post: "blog_post";
    contact: "contact";
    thank_you: "thank_you";
    legal: "legal";
}>;
export declare const pageStatusSchema: z.ZodEnum<{
    draft: "draft";
    published: "published";
    archived: "archived";
}>;
export declare const pageUrlPathSchema: z.ZodString;
export declare const seoSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    canonicalPath: z.ZodOptional<z.ZodString>;
    noindex: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    socialImage: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const pageSectionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    component: z.ZodString;
    props: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, z.core.$strict>;
export declare const pageDocumentSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    pageType: z.ZodEnum<{
        home: "home";
        standard: "standard";
        services_index: "services_index";
        service_detail: "service_detail";
        landing: "landing";
        location_index: "location_index";
        location_detail: "location_detail";
        sector: "sector";
        comparison: "comparison";
        problem_solution: "problem_solution";
        campaign: "campaign";
        case_studies_index: "case_studies_index";
        case_study_detail: "case_study_detail";
        blog_index: "blog_index";
        blog_post: "blog_post";
        contact: "contact";
        thank_you: "thank_you";
        legal: "legal";
    }>;
    slug: z.ZodString;
    urlPath: z.ZodString;
    status: z.ZodEnum<{
        draft: "draft";
        published: "published";
        archived: "archived";
    }>;
    seo: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        canonicalPath: z.ZodOptional<z.ZodString>;
        noindex: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        socialImage: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    sections: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        component: z.ZodString;
        props: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type PageType = z.infer<typeof pageTypeSchema>;
export type PageStatus = z.infer<typeof pageStatusSchema>;
export type Seo = z.infer<typeof seoSchema>;
export type PageSection = z.infer<typeof pageSectionSchema>;
export type PageDocument = z.infer<typeof pageDocumentSchema>;
//# sourceMappingURL=pageDocument.d.ts.map