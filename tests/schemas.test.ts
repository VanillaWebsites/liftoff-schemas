import { describe, expect, it } from "vitest";
import {
  componentCatalogSchema,
  editableManifestSchema,
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
    pages: "src/data/pages"
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

  it("rejects empty prompt edit changes", () => {
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
