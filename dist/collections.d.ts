import { z } from "zod";
export declare const collectionKeySchema: z.ZodString;
export declare const collectionFieldTypeSchema: z.ZodEnum<{
    string: "string";
    boolean: "boolean";
    date: "date";
    url: "url";
    text: "text";
    image: "image";
    select: "select";
}>;
export declare const collectionRenderingSchema: z.ZodObject<{
    index: z.ZodDefault<z.ZodEnum<{
        "page-section": "page-section";
        generated: "generated";
        none: "none";
    }>>;
    detail: z.ZodDefault<z.ZodEnum<{
        generated: "generated";
        none: "none";
    }>>;
}, z.core.$strict>;
export declare const collectionFieldDefinitionSchema: z.ZodObject<{
    key: z.ZodString;
    label: z.ZodString;
    type: z.ZodEnum<{
        string: "string";
        boolean: "boolean";
        date: "date";
        url: "url";
        text: "text";
        image: "image";
        select: "select";
    }>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    options: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export declare const collectionDefinitionSchema: z.ZodPipe<z.ZodObject<{
    key: z.ZodString;
    label: z.ZodString;
    singularLabel: z.ZodString;
    enabled: z.ZodDefault<z.ZodBoolean>;
    routeBase: z.ZodString;
    hasIndex: z.ZodDefault<z.ZodBoolean>;
    rendering: z.ZodOptional<z.ZodObject<{
        index: z.ZodDefault<z.ZodEnum<{
            "page-section": "page-section";
            generated: "generated";
            none: "none";
        }>>;
        detail: z.ZodDefault<z.ZodEnum<{
            generated: "generated";
            none: "none";
        }>>;
    }, z.core.$strict>>;
    indexPageTarget: z.ZodOptional<z.ZodString>;
    detailTemplate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    itemLabelField: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    fields: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<{
            string: "string";
            boolean: "boolean";
            date: "date";
            url: "url";
            text: "text";
            image: "image";
            select: "select";
        }>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        options: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>>;
}, z.core.$strict>, z.ZodTransform<{
    rendering: {
        index: "page-section" | "generated" | "none";
        detail: "generated" | "none";
    };
    key: string;
    label: string;
    singularLabel: string;
    enabled: boolean;
    routeBase: string;
    hasIndex: boolean;
    fields: {
        key: string;
        label: string;
        type: "string" | "boolean" | "date" | "url" | "text" | "image" | "select";
        maxLength?: number | undefined;
        required?: boolean | undefined;
        options?: string[] | undefined;
    }[];
    indexPageTarget?: string | undefined;
    detailTemplate?: string | null | undefined;
    itemLabelField?: string | undefined;
}, {
    key: string;
    label: string;
    singularLabel: string;
    enabled: boolean;
    routeBase: string;
    hasIndex: boolean;
    fields: {
        key: string;
        label: string;
        type: "string" | "boolean" | "date" | "url" | "text" | "image" | "select";
        maxLength?: number | undefined;
        required?: boolean | undefined;
        options?: string[] | undefined;
    }[];
    rendering?: {
        index: "page-section" | "generated" | "none";
        detail: "generated" | "none";
    } | undefined;
    indexPageTarget?: string | undefined;
    detailTemplate?: string | null | undefined;
    itemLabelField?: string | undefined;
}>>;
export declare const collectionRegistrySchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    collections: z.ZodArray<z.ZodPipe<z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
        singularLabel: z.ZodString;
        enabled: z.ZodDefault<z.ZodBoolean>;
        routeBase: z.ZodString;
        hasIndex: z.ZodDefault<z.ZodBoolean>;
        rendering: z.ZodOptional<z.ZodObject<{
            index: z.ZodDefault<z.ZodEnum<{
                "page-section": "page-section";
                generated: "generated";
                none: "none";
            }>>;
            detail: z.ZodDefault<z.ZodEnum<{
                generated: "generated";
                none: "none";
            }>>;
        }, z.core.$strict>>;
        indexPageTarget: z.ZodOptional<z.ZodString>;
        detailTemplate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        itemLabelField: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        fields: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            label: z.ZodString;
            type: z.ZodEnum<{
                string: "string";
                boolean: "boolean";
                date: "date";
                url: "url";
                text: "text";
                image: "image";
                select: "select";
            }>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            options: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strict>>>;
    }, z.core.$strict>, z.ZodTransform<{
        rendering: {
            index: "page-section" | "generated" | "none";
            detail: "generated" | "none";
        };
        key: string;
        label: string;
        singularLabel: string;
        enabled: boolean;
        routeBase: string;
        hasIndex: boolean;
        fields: {
            key: string;
            label: string;
            type: "string" | "boolean" | "date" | "url" | "text" | "image" | "select";
            maxLength?: number | undefined;
            required?: boolean | undefined;
            options?: string[] | undefined;
        }[];
        indexPageTarget?: string | undefined;
        detailTemplate?: string | null | undefined;
        itemLabelField?: string | undefined;
    }, {
        key: string;
        label: string;
        singularLabel: string;
        enabled: boolean;
        routeBase: string;
        hasIndex: boolean;
        fields: {
            key: string;
            label: string;
            type: "string" | "boolean" | "date" | "url" | "text" | "image" | "select";
            maxLength?: number | undefined;
            required?: boolean | undefined;
            options?: string[] | undefined;
        }[];
        rendering?: {
            index: "page-section" | "generated" | "none";
            detail: "generated" | "none";
        } | undefined;
        indexPageTarget?: string | undefined;
        detailTemplate?: string | null | undefined;
        itemLabelField?: string | undefined;
    }>>>;
}, z.core.$strict>;
export declare const collectionItemSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    collection: z.ZodString;
    slug: z.ZodString;
    urlPath: z.ZodString;
    status: z.ZodEnum<{
        draft: "draft";
        published: "published";
        archived: "archived";
    }>;
    title: z.ZodString;
    excerpt: z.ZodDefault<z.ZodString>;
    date: z.ZodOptional<z.ZodString>;
    featuredImage: z.ZodDefault<z.ZodString>;
    seo: z.ZodObject<{
        title: z.ZodString;
        description: z.ZodString;
        canonicalPath: z.ZodOptional<z.ZodString>;
        noindex: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        robots: z.ZodOptional<z.ZodEnum<{
            "index,follow": "index,follow";
            "noindex,follow": "noindex,follow";
            "index,nofollow": "index,nofollow";
            "noindex,nofollow": "noindex,nofollow";
        }>>;
        socialImage: z.ZodOptional<z.ZodString>;
        ogTitle: z.ZodOptional<z.ZodString>;
        ogDescription: z.ZodOptional<z.ZodString>;
        ogImage: z.ZodOptional<z.ZodString>;
        twitterTitle: z.ZodOptional<z.ZodString>;
        twitterDescription: z.ZodOptional<z.ZodString>;
        twitterImage: z.ZodOptional<z.ZodString>;
        schemaType: z.ZodOptional<z.ZodEnum<{
            WebPage: "WebPage";
            AboutPage: "AboutPage";
            ContactPage: "ContactPage";
            Service: "Service";
            FAQPage: "FAQPage";
            Article: "Article";
            BlogPosting: "BlogPosting";
            CreativeWork: "CreativeWork";
            Person: "Person";
            LocalBusiness: "LocalBusiness";
            Organization: "Organization";
            Product: "Product";
        }>>;
        faq: z.ZodOptional<z.ZodArray<z.ZodObject<{
            question: z.ZodString;
            answer: z.ZodString;
        }, z.core.$strict>>>;
        service: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            serviceType: z.ZodOptional<z.ZodString>;
            areaServed: z.ZodOptional<z.ZodString>;
            providerName: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        localBusiness: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            address: z.ZodOptional<z.ZodString>;
            openingHours: z.ZodOptional<z.ZodString>;
            sameAs: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        schemaJson: z.ZodOptional<z.ZodString>;
        headCode: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    content: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        component: z.ZodString;
        status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
            draft: "draft";
            visible: "visible";
            hidden: "hidden";
        }>>>;
        props: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, z.core.$strict>>>;
    custom: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strict>;
export declare const collectionStatusSchema: z.ZodEnum<{
    draft: "draft";
    published: "published";
    archived: "archived";
}>;
export type CollectionKey = z.infer<typeof collectionKeySchema>;
export type CollectionFieldType = z.infer<typeof collectionFieldTypeSchema>;
export type CollectionFieldDefinition = z.infer<typeof collectionFieldDefinitionSchema>;
export type CollectionRendering = z.infer<typeof collectionRenderingSchema>;
export type CollectionDefinition = z.infer<typeof collectionDefinitionSchema>;
export type CollectionRegistry = z.infer<typeof collectionRegistrySchema>;
export type CollectionItem = z.infer<typeof collectionItemSchema>;
export type CollectionStatus = z.infer<typeof collectionStatusSchema>;
//# sourceMappingURL=collections.d.ts.map