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
export declare const sectionStatusSchema: z.ZodEnum<{
    draft: "draft";
    visible: "visible";
    hidden: "hidden";
}>;
export declare const pageUrlPathSchema: z.ZodString;
export declare const seoSchema: z.ZodObject<{
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
export declare const pageSectionSchema: z.ZodObject<{
    id: z.ZodString;
    component: z.ZodString;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        draft: "draft";
        visible: "visible";
        hidden: "hidden";
    }>>>;
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
export type PageType = z.infer<typeof pageTypeSchema>;
export type PageStatus = z.infer<typeof pageStatusSchema>;
export type SectionStatus = z.infer<typeof sectionStatusSchema>;
export type Seo = z.infer<typeof seoSchema>;
export type PageSection = z.infer<typeof pageSectionSchema>;
export type PageDocument = z.infer<typeof pageDocumentSchema>;
//# sourceMappingURL=pageDocument.d.ts.map