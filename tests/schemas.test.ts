import { describe, expect, it } from "vitest";
import {
  componentCatalogSchema,
  collectionItemSchema,
  collectionRegistrySchema,
  draftRecordSchema,
  editableManifestSchema,
  pageVersionRecordSchema,
  previewTokenRecordSchema,
  pageDocumentSchema,
  promptEditOutputSchema,
  themeIngestionOutputSchema,
  themeTokensSchema
} from "../src/index.js";

const validManifest = {
  version: 1,
  siteType: "brochure",
  paths: {
    theme: "src/data/theme.json",
    site: "src/data/site.json",
    pages: "src/data/pages",
    collections: "src/data/collections.json",
    collectionItems: "src/data/collections"
  },
  targets: [
    {
      key: "home",
      label: "Homepage",
      filePath: "src/data/pages/home.json",
      fields: {
        "seo.title": { type: "string", maxLength: 70 },
        "sections.0.props.heading": { type: "string", maxLength: 120 },
        "sections.0.props.primaryCta.href": { type: "url", maxLength: 160 }
      }
    }
  ],
  allowedComponents: ["Nav", "HomeHero", "FeatureGrid", "CTA", "Footer"]
};

const validPage = {
  version: 1,
  pageType: "home",
  slug: "home",
  urlPath: "/",
  status: "published",
  seo: {
    title: "Vanilla Websites",
    description: "Fast business websites with controlled AI content workflows.",
    canonicalPath: "/"
  },
  sections: [
    {
      id: "hero",
      component: "HomeHero",
      props: {
        heading: "Launch a sharper website",
        subheading: "Structured content, reviewed changes, and fast previews."
      }
    }
  ]
};

const validCatalog = {
  version: 1,
  components: [
    {
      name: "HomeHero",
      category: "section",
      version: 1,
      props: {
        heading: { type: "string", required: true, maxLength: 120 },
        subheading: { type: "string", maxLength: 240 }
      },
      editableProps: {
        heading: { type: "string", maxLength: 120 }
      }
    }
  ]
};

const validTheme = {
  version: 1,
  colors: {
    primary: "#145C9E",
    accent: "#F2B84B",
    surface: "#FFFFFF"
  },
  fonts: {
    heading: "Inter",
    body: "Inter"
  },
  radii: {
    sm: "4px",
    md: "8px"
  },
  spacing: {
    sm: "0.5rem",
    md: "1rem"
  }
};

describe("editableManifestSchema", () => {
  it("accepts a valid manifest", () => {
    expect(editableManifestSchema.parse(validManifest).targets[0]?.key).toBe("home");
  });

  it("rejects unknown field paths", () => {
    const result = editableManifestSchema.safeParse({
      ...validManifest,
      targets: [
        {
          ...validManifest.targets[0],
          fields: {
            "../bad": { type: "string" }
          }
        }
      ]
    });

    expect(result.success).toBe(false);
  });

  it("rejects duplicate components", () => {
    const result = editableManifestSchema.safeParse({
      ...validManifest,
      allowedComponents: ["HomeHero", "HomeHero"]
    });

    expect(result.success).toBe(false);
  });
});

describe("pageDocumentSchema", () => {
  it("accepts a valid page document", () => {
    expect(pageDocumentSchema.parse(validPage).sections[0]?.component).toBe("HomeHero");
  });

  it("rejects invalid component names", () => {
    const result = pageDocumentSchema.safeParse({
      ...validPage,
      sections: [{ ...validPage.sections[0], component: "homeHero" }]
    });

    expect(result.success).toBe(false);
  });

  it("rejects SEO titles over the limit", () => {
    const result = pageDocumentSchema.safeParse({
      ...validPage,
      seo: { ...validPage.seo, title: "x".repeat(71) }
    });

    expect(result.success).toBe(false);
  });

  it("rejects unsafe page paths", () => {
    const result = pageDocumentSchema.safeParse({
      ...validPage,
      slug: "admin",
      urlPath: "/admin/",
      seo: { ...validPage.seo, canonicalPath: "/admin/" }
    });

    expect(result.success).toBe(false);
  });

  it("allows canonical path overrides for SEO consolidation", () => {
    const result = pageDocumentSchema.safeParse({
      ...validPage,
      slug: "services",
      pageType: "services_index",
      urlPath: "/services/",
      seo: { ...validPage.seo, canonicalPath: "/different/" }
    });

    expect(result.success).toBe(true);
  });

  it("requires slug to match the final page URL segment", () => {
    const result = pageDocumentSchema.safeParse({
      ...validPage,
      slug: "website-design",
      pageType: "service_detail",
      urlPath: "/services/seo/",
      seo: { ...validPage.seo, canonicalPath: "/services/seo/" }
    });

    expect(result.success).toBe(false);
  });

  it("rejects duplicate section ids", () => {
    const result = pageDocumentSchema.safeParse({
      ...validPage,
      sections: [
        validPage.sections[0],
        {
          ...validPage.sections[0],
          props: {
            heading: "Another section"
          }
        }
      ]
    });

    expect(result.success).toBe(false);
  });
});

describe("content store schemas", () => {
  it("accepts page version, draft, and preview token records", () => {
    const pageVersion = pageVersionRecordSchema.parse({
      id: "page_home_v1",
      pageId: "page_home",
      versionNumber: 1,
      content: validPage,
      seo: validPage.seo,
      route: { path: "/" },
      validationStatus: "valid",
      validationResult: {},
      createdAt: "2026-05-17T08:00:00.000Z"
    });

    const draft = draftRecordSchema.parse({
      id: "draft_home",
      siteId: "site_demo",
      pageId: "page_home",
      basePageVersionId: pageVersion.id,
      currentDraftContent: validPage,
      status: "open",
      createdAt: "2026-05-17T08:00:00.000Z",
      updatedAt: "2026-05-17T08:00:00.000Z"
    });

    const token = previewTokenRecordSchema.parse({
      id: "preview_token_home",
      tokenHash: "a".repeat(64),
      siteId: "site_demo",
      draftId: draft.id,
      allowedPathPrefix: "/",
      expiresAt: "2026-05-31T08:00:00.000Z",
      createdAt: "2026-05-17T08:00:00.000Z"
    });

    expect(pageVersion.content.slug).toBe("home");
    expect(draft.status).toBe("open");
    expect(token.tokenHash).toHaveLength(64);
  });
});

describe("collection schemas", () => {
  it("accepts a valid collection registry and item", () => {
    const registry = collectionRegistrySchema.parse({
      version: 1,
      collections: [
        {
          key: "blog",
          label: "Blog Posts",
          singularLabel: "Blog Post",
          enabled: true,
          routeBase: "/blog/",
          hasIndex: true,
          indexPageTarget: "blog",
          detailTemplate: "generic-detail",
          itemLabelField: "title",
          fields: [{ key: "author", label: "Author", type: "string", maxLength: 120 }]
        }
      ]
    });

    const item = collectionItemSchema.parse({
      version: 1,
      collection: "blog",
      slug: "controlled-ai-website-edits",
      urlPath: "/blog/controlled-ai-website-edits/",
      status: "published",
      title: "Controlled AI website edits",
      excerpt: "Why structured content contracts make AI-assisted updates reviewable.",
      date: "2026-05-02",
      featuredImage: "",
      seo: {
        title: "Controlled AI website edits",
        description: "Why structured content contracts make AI-assisted website updates reviewable.",
        canonicalPath: "/blog/controlled-ai-website-edits/",
        schemaType: "BlogPosting"
      },
      content: [{ id: "body", component: "RichTextSection", props: { content: "Structured content keeps edits reviewable." } }],
      custom: { author: "Vanilla Websites" }
    });

    expect(registry.collections[0]?.key).toBe("blog");
    expect(registry.collections[0]?.rendering).toEqual({ index: "page-section", detail: "generated" });
    expect(item.collection).toBe("blog");
  });

  it("accepts explicit collection rendering modes", () => {
    const registry = collectionRegistrySchema.parse({
      version: 1,
      collections: [
        {
          key: "testimonials",
          label: "Testimonials",
          singularLabel: "Testimonial",
          enabled: true,
          routeBase: "/testimonials/",
          hasIndex: false,
          rendering: {
            index: "page-section",
            detail: "none"
          },
          detailTemplate: null,
          itemLabelField: "title",
          fields: []
        }
      ]
    });

    expect(registry.collections[0]?.rendering).toEqual({ index: "page-section", detail: "none" });
  });

  it("rejects invalid collection rendering modes", () => {
    const result = collectionRegistrySchema.safeParse({
      version: 1,
      collections: [
        {
          key: "portfolio",
          label: "Portfolio",
          singularLabel: "Project",
          enabled: true,
          routeBase: "/portfolio/",
          hasIndex: true,
          rendering: {
            index: "route",
            detail: "generated"
          },
          fields: []
        }
      ]
    });

    expect(result.success).toBe(false);
  });
});

describe("componentCatalogSchema", () => {
  it("accepts a valid catalog", () => {
    expect(componentCatalogSchema.parse(validCatalog).components).toHaveLength(1);
  });

  it("rejects duplicate component definitions", () => {
    const result = componentCatalogSchema.safeParse({
      version: 1,
      components: [validCatalog.components[0], validCatalog.components[0]]
    });

    expect(result.success).toBe(false);
  });
});

describe("themeTokensSchema", () => {
  it("accepts valid theme tokens", () => {
    expect(themeTokensSchema.parse(validTheme).colors.primary).toBe("#145C9E");
  });

  it("rejects invalid color tokens", () => {
    const result = themeTokensSchema.safeParse({
      ...validTheme,
      colors: { primary: "blue" }
    });

    expect(result.success).toBe(false);
  });
});

describe("agent output schemas", () => {
  it("accepts prompt edit changes", () => {
    const result = promptEditOutputSchema.parse({
      changes: [{ field: "sections.0.props.heading", value: "New heading" }]
    });

    expect(result.changes).toHaveLength(1);
  });

  it("accepts prompt edit section order changes without field changes", () => {
    const result = promptEditOutputSchema.parse({
      changes: [],
      sectionOrder: { sectionIds: ["hero", "proof"] }
    });

    expect(result.sectionOrder?.sectionIds).toEqual(["hero", "proof"]);
  });

  it("accepts prompt edit section add changes without field changes", () => {
    const result = promptEditOutputSchema.parse({
      changes: [],
      sectionAdds: [{ sectionId: "notes", component: "RichTextSection", props: { body: ["Draft notes"] } }]
    });

    expect(result.sectionAdds?.[0]?.sectionId).toBe("notes");
  });

  it("accepts prompt edit section prop changes without field changes", () => {
    const result = promptEditOutputSchema.parse({
      changes: [],
      sectionProps: [{ sectionId: "hero", props: { primaryCta: { label: "Start", href: "/contact/" } } }]
    });

    expect(result.sectionProps?.[0]?.props).toMatchObject({ primaryCta: { label: "Start", href: "/contact/" } });
  });

  it("accepts prompt edit section status changes without field changes", () => {
    const result = promptEditOutputSchema.parse({
      changes: [],
      sectionStatusChanges: [{ sectionId: "hero", status: "hidden" }]
    });

    expect(result.sectionStatusChanges?.[0]).toMatchObject({ sectionId: "hero", status: "hidden" });
  });

  it("accepts prompt edit section remove changes without field changes", () => {
    const result = promptEditOutputSchema.parse({
      changes: [],
      sectionRemoves: [{ sectionId: "proof" }]
    });

    expect(result.sectionRemoves?.[0]?.sectionId).toBe("proof");
  });

  it("rejects prompt edits without field or section changes", () => {
    expect(promptEditOutputSchema.safeParse({ changes: [] }).success).toBe(false);
  });

  it("accepts theme ingestion output", () => {
    const result = themeIngestionOutputSchema.parse({
      summary: "Mapped the reference theme to one page and base tokens.",
      pages: [validPage],
      theme: validTheme
    });

    expect(result.pages[0]?.slug).toBe("home");
  });

  it("rejects generated pages with invalid component names", () => {
    const result = themeIngestionOutputSchema.safeParse({
      summary: "Invalid page component.",
      pages: [
        {
          ...validPage,
          sections: [{ ...validPage.sections[0], component: "bad-component" }]
        }
      ],
      theme: validTheme
    });

    expect(result.success).toBe(false);
  });
});
