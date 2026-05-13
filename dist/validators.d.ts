import type { z } from "zod";
export declare const schemas: {
    readonly editableManifest: z.ZodObject<{
        version: z.ZodLiteral<1>;
        siteType: z.ZodEnum<{
            brochure: "brochure";
        }>;
        paths: z.ZodObject<{
            theme: z.ZodString;
            site: z.ZodString;
            pages: z.ZodString;
        }, z.core.$strict>;
        targets: z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            label: z.ZodString;
            filePath: z.ZodString;
            fields: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodEnum<{
                    string: "string";
                    number: "number";
                    boolean: "boolean";
                    phone: "phone";
                    email: "email";
                    url: "url";
                    text: "text";
                    markdown: "markdown";
                    richText: "richText";
                    asset: "asset";
                }>;
                label: z.ZodOptional<z.ZodString>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minLength: z.ZodOptional<z.ZodNumber>;
                allowHtml: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
                required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
                pattern: z.ZodOptional<z.ZodString>;
                allowedValues: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        allowedComponents: z.ZodArray<z.ZodString>;
    }, z.core.$strict>;
    readonly pageDocument: z.ZodObject<{
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
        sections: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            component: z.ZodString;
            props: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    readonly componentCatalog: z.ZodObject<{
        version: z.ZodLiteral<1>;
        components: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            category: z.ZodEnum<{
                global: "global";
                layout: "layout";
                section: "section";
            }>;
            version: z.ZodNumber;
            description: z.ZodOptional<z.ZodString>;
            props: z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodEnum<{
                    string: "string";
                    number: "number";
                    boolean: "boolean";
                    object: "object";
                    array: "array";
                    richText: "richText";
                    image: "image";
                    link: "link";
                }>;
                required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
                description: z.ZodOptional<z.ZodString>;
                maxLength: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strict>>;
            editableProps: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodEnum<{
                    string: "string";
                    number: "number";
                    boolean: "boolean";
                    phone: "phone";
                    email: "email";
                    url: "url";
                    text: "text";
                    markdown: "markdown";
                    richText: "richText";
                    asset: "asset";
                }>;
                label: z.ZodOptional<z.ZodString>;
                maxLength: z.ZodOptional<z.ZodNumber>;
                minLength: z.ZodOptional<z.ZodNumber>;
                allowHtml: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
                required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
                pattern: z.ZodOptional<z.ZodString>;
                allowedValues: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strict>>>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    readonly themeTokens: z.ZodObject<{
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
    readonly promptEditOutput: z.ZodObject<{
        changes: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
            reason: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    readonly themeIngestionOutput: z.ZodObject<{
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
};
export declare function parseEditableManifest(input: unknown): {
    version: 1;
    siteType: "brochure";
    paths: {
        theme: string;
        site: string;
        pages: string;
    };
    targets: {
        key: string;
        label: string;
        filePath: string;
        fields: Record<string, {
            type: "string" | "number" | "boolean" | "phone" | "email" | "url" | "text" | "markdown" | "richText" | "asset";
            label?: string | undefined;
            maxLength?: number | undefined;
            minLength?: number | undefined;
            allowHtml?: boolean | undefined;
            required?: boolean | undefined;
            pattern?: string | undefined;
            allowedValues?: string[] | undefined;
        }>;
    }[];
    allowedComponents: string[];
};
export declare function parsePageDocument(input: unknown): {
    version: 1;
    pageType: "home" | "standard" | "services_index" | "service_detail" | "landing" | "location_index" | "location_detail" | "sector" | "comparison" | "problem_solution" | "campaign" | "case_studies_index" | "case_study_detail" | "blog_index" | "blog_post" | "contact" | "thank_you" | "legal";
    slug: string;
    urlPath: string;
    status: "draft" | "published" | "archived";
    seo: {
        title: string;
        description: string;
        canonicalPath?: string | undefined;
        noindex?: boolean | undefined;
        robots?: "index,follow" | "noindex,follow" | "index,nofollow" | "noindex,nofollow" | undefined;
        socialImage?: string | undefined;
        ogTitle?: string | undefined;
        ogDescription?: string | undefined;
        ogImage?: string | undefined;
        twitterTitle?: string | undefined;
        twitterDescription?: string | undefined;
        twitterImage?: string | undefined;
        schemaType?: "WebPage" | "AboutPage" | "ContactPage" | "Service" | "FAQPage" | "Article" | "BlogPosting" | "LocalBusiness" | "Organization" | "Product" | undefined;
        faq?: {
            question: string;
            answer: string;
        }[] | undefined;
        service?: {
            name?: string | undefined;
            description?: string | undefined;
            serviceType?: string | undefined;
            areaServed?: string | undefined;
            providerName?: string | undefined;
        } | undefined;
        localBusiness?: {
            name?: string | undefined;
            phone?: string | undefined;
            email?: string | undefined;
            address?: string | undefined;
            openingHours?: string | undefined;
            sameAs?: string | undefined;
        } | undefined;
        schemaJson?: string | undefined;
        headCode?: string | undefined;
    };
    sections: {
        component: string;
        props: Record<string, unknown>;
        id?: string | undefined;
    }[];
};
export declare function parseComponentCatalog(input: unknown): {
    version: 1;
    components: {
        name: string;
        category: "global" | "layout" | "section";
        version: number;
        props: Record<string, {
            type: "string" | "number" | "boolean" | "object" | "array" | "richText" | "image" | "link";
            required?: boolean | undefined;
            description?: string | undefined;
            maxLength?: number | undefined;
        }>;
        description?: string | undefined;
        editableProps?: Record<string, {
            type: "string" | "number" | "boolean" | "phone" | "email" | "url" | "text" | "markdown" | "richText" | "asset";
            label?: string | undefined;
            maxLength?: number | undefined;
            minLength?: number | undefined;
            allowHtml?: boolean | undefined;
            required?: boolean | undefined;
            pattern?: string | undefined;
            allowedValues?: string[] | undefined;
        }> | undefined;
    }[];
};
export declare function parseThemeTokens(input: unknown): {
    version: 1;
    colors: Record<string, string>;
    fonts: {
        heading: string;
        body: string;
        mono?: string | undefined;
    };
    radii?: Record<string, string> | undefined;
    spacing?: Record<string, string> | undefined;
    shadows?: Record<string, string> | undefined;
};
export declare function parsePromptEditOutput(input: unknown): {
    changes: {
        field: string;
        value: string | number | boolean | null;
        reason?: string | undefined;
    }[];
};
export declare function parseThemeIngestionOutput(input: unknown): {
    summary: string;
    pages: {
        version: 1;
        pageType: "home" | "standard" | "services_index" | "service_detail" | "landing" | "location_index" | "location_detail" | "sector" | "comparison" | "problem_solution" | "campaign" | "case_studies_index" | "case_study_detail" | "blog_index" | "blog_post" | "contact" | "thank_you" | "legal";
        slug: string;
        urlPath: string;
        status: "draft" | "published" | "archived";
        seo: {
            title: string;
            description: string;
            canonicalPath?: string | undefined;
            noindex?: boolean | undefined;
            robots?: "index,follow" | "noindex,follow" | "index,nofollow" | "noindex,nofollow" | undefined;
            socialImage?: string | undefined;
            ogTitle?: string | undefined;
            ogDescription?: string | undefined;
            ogImage?: string | undefined;
            twitterTitle?: string | undefined;
            twitterDescription?: string | undefined;
            twitterImage?: string | undefined;
            schemaType?: "WebPage" | "AboutPage" | "ContactPage" | "Service" | "FAQPage" | "Article" | "BlogPosting" | "LocalBusiness" | "Organization" | "Product" | undefined;
            faq?: {
                question: string;
                answer: string;
            }[] | undefined;
            service?: {
                name?: string | undefined;
                description?: string | undefined;
                serviceType?: string | undefined;
                areaServed?: string | undefined;
                providerName?: string | undefined;
            } | undefined;
            localBusiness?: {
                name?: string | undefined;
                phone?: string | undefined;
                email?: string | undefined;
                address?: string | undefined;
                openingHours?: string | undefined;
                sameAs?: string | undefined;
            } | undefined;
            schemaJson?: string | undefined;
            headCode?: string | undefined;
        };
        sections: {
            component: string;
            props: Record<string, unknown>;
            id?: string | undefined;
        }[];
    }[];
    theme: {
        version: 1;
        colors: Record<string, string>;
        fonts: {
            heading: string;
            body: string;
            mono?: string | undefined;
        };
        radii?: Record<string, string> | undefined;
        spacing?: Record<string, string> | undefined;
        shadows?: Record<string, string> | undefined;
    };
    files?: {
        filePath: string;
        kind: "page" | "theme" | "manifest" | "content" | "assetReference";
        document: unknown;
    }[] | undefined;
};
export declare function formatZodError(error: z.ZodError): string[];
//# sourceMappingURL=validators.d.ts.map