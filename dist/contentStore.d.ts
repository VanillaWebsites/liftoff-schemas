import { z } from "zod";
export declare const contentRecordIdSchema: z.ZodString;
export declare const pageRecordSchema: z.ZodObject<{
    id: z.ZodString;
    siteId: z.ZodString;
    stableKey: z.ZodString;
    path: z.ZodString;
    pageType: z.ZodString;
    status: z.ZodEnum<{
        draft: "draft";
        published: "published";
        archived: "archived";
    }>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export declare const pageVersionRecordSchema: z.ZodObject<{
    id: z.ZodString;
    pageId: z.ZodString;
    versionNumber: z.ZodNumber;
    content: z.ZodObject<{
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
        sections: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            component: z.ZodString;
            status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
                draft: "draft";
                visible: "visible";
                hidden: "hidden";
            }>>>;
            props: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    seo: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    route: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    sourceDraftId: z.ZodOptional<z.ZodString>;
    validationStatus: z.ZodEnum<{
        valid: "valid";
        invalid: "invalid";
        pending: "pending";
    }>;
    validationResult: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    createdByUserId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strict>;
export declare const publishedRevisionRecordSchema: z.ZodObject<{
    id: z.ZodString;
    siteId: z.ZodString;
    pageId: z.ZodString;
    pageVersionId: z.ZodString;
    previousPageVersionId: z.ZodOptional<z.ZodString>;
    publishedByUserId: z.ZodOptional<z.ZodString>;
    publishedAt: z.ZodString;
}, z.core.$strict>;
export declare const draftRecordSchema: z.ZodObject<{
    id: z.ZodString;
    siteId: z.ZodString;
    pageId: z.ZodString;
    basePageVersionId: z.ZodString;
    currentDraftContent: z.ZodObject<{
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
        sections: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            component: z.ZodString;
            status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
                draft: "draft";
                visible: "visible";
                hidden: "hidden";
            }>>>;
            props: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    status: z.ZodEnum<{
        published: "published";
        open: "open";
        abandoned: "abandoned";
    }>;
    createdByUserId: z.ZodOptional<z.ZodString>;
    updatedByUserId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strict>;
export declare const previewTokenRecordSchema: z.ZodObject<{
    id: z.ZodString;
    tokenHash: z.ZodString;
    siteId: z.ZodString;
    draftId: z.ZodString;
    allowedPathPrefix: z.ZodString;
    expiresAt: z.ZodString;
    createdByUserId: z.ZodOptional<z.ZodString>;
    revokedAt: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
}, z.core.$strict>;
export declare const cacheInvalidationEventRecordSchema: z.ZodObject<{
    id: z.ZodString;
    siteId: z.ZodString;
    affectedPaths: z.ZodArray<z.ZodString>;
    affectedTags: z.ZodArray<z.ZodString>;
    triggerType: z.ZodEnum<{
        publish: "publish";
        rollback: "rollback";
        route_change: "route_change";
        manual: "manual";
    }>;
    publishRevisionId: z.ZodOptional<z.ZodString>;
    providerResult: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    retryCount: z.ZodNumber;
    status: z.ZodEnum<{
        queued: "queued";
        sent: "sent";
        failed: "failed";
    }>;
    createdAt: z.ZodString;
}, z.core.$strict>;
export type PageRecord = z.infer<typeof pageRecordSchema>;
export type PageVersionRecord = z.infer<typeof pageVersionRecordSchema>;
export type PublishedRevisionRecord = z.infer<typeof publishedRevisionRecordSchema>;
export type DraftRecord = z.infer<typeof draftRecordSchema>;
export type PreviewTokenRecord = z.infer<typeof previewTokenRecordSchema>;
export type CacheInvalidationEventRecord = z.infer<typeof cacheInvalidationEventRecordSchema>;
//# sourceMappingURL=contentStore.d.ts.map