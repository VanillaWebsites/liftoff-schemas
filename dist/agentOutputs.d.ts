import { z } from "zod";
export declare const promptChangeSchema: z.ZodObject<{
    field: z.ZodString;
    value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
    reason: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const promptEditOutputSchema: z.ZodObject<{
    changes: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
        reason: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export declare const generatedFileSchema: z.ZodObject<{
    filePath: z.ZodString;
    kind: z.ZodEnum<{
        page: "page";
        theme: "theme";
        manifest: "manifest";
        content: "content";
        assetReference: "assetReference";
    }>;
    document: z.ZodUnknown;
}, z.core.$strict>;
export declare const themeIngestionOutputSchema: z.ZodObject<{
    summary: z.ZodString;
    pages: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strict>>;
    theme: z.ZodObject<{
        version: z.ZodLiteral<1>;
        colors: z.ZodRecord<z.ZodString, z.ZodString>;
        fonts: z.ZodObject<{
            heading: z.ZodString;
            body: z.ZodString;
            mono: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>;
        radii: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        spacing: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        shadows: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    }, z.core.$strict>;
    files: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        filePath: z.ZodString;
        kind: z.ZodEnum<{
            page: "page";
            theme: "theme";
            manifest: "manifest";
            content: "content";
            assetReference: "assetReference";
        }>;
        document: z.ZodUnknown;
    }, z.core.$strict>>>>;
}, z.core.$strict>;
export type PromptChange = z.infer<typeof promptChangeSchema>;
export type PromptEditOutput = z.infer<typeof promptEditOutputSchema>;
export type GeneratedFile = z.infer<typeof generatedFileSchema>;
export type ThemeIngestionOutput = z.infer<typeof themeIngestionOutputSchema>;
//# sourceMappingURL=agentOutputs.d.ts.map