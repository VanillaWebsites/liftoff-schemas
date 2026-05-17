import { z } from "zod";
import { identifierSchema, urlPathSchema } from "./common.js";
import { pageDocumentSchema } from "./pageDocument.js";

export const contentRecordIdSchema = z.string().min(1).max(160).regex(/^[a-zA-Z0-9_-]+$/);

export const pageRecordSchema = z
  .object({
    id: contentRecordIdSchema,
    siteId: contentRecordIdSchema,
    stableKey: identifierSchema,
    path: urlPathSchema,
    pageType: z.string().min(1).max(80),
    status: z.enum(["draft", "published", "archived"]),
    createdAt: z.string().min(1),
    updatedAt: z.string().min(1)
  })
  .strict();

export const pageVersionRecordSchema = z
  .object({
    id: contentRecordIdSchema,
    pageId: contentRecordIdSchema,
    versionNumber: z.number().int().positive(),
    content: pageDocumentSchema,
    seo: z.record(z.string(), z.unknown()).default({}),
    route: z.record(z.string(), z.unknown()).default({}),
    sourceDraftId: contentRecordIdSchema.optional(),
    validationStatus: z.enum(["valid", "invalid", "pending"]),
    validationResult: z.record(z.string(), z.unknown()).default({}),
    createdByUserId: contentRecordIdSchema.optional(),
    createdAt: z.string().min(1)
  })
  .strict();

export const publishedRevisionRecordSchema = z
  .object({
    id: contentRecordIdSchema,
    siteId: contentRecordIdSchema,
    pageId: contentRecordIdSchema,
    pageVersionId: contentRecordIdSchema,
    previousPageVersionId: contentRecordIdSchema.optional(),
    publishedByUserId: contentRecordIdSchema.optional(),
    publishedAt: z.string().min(1)
  })
  .strict();

export const draftRecordSchema = z
  .object({
    id: contentRecordIdSchema,
    siteId: contentRecordIdSchema,
    pageId: contentRecordIdSchema,
    basePageVersionId: contentRecordIdSchema,
    currentDraftContent: pageDocumentSchema,
    status: z.enum(["open", "published", "abandoned"]),
    createdByUserId: contentRecordIdSchema.optional(),
    updatedByUserId: contentRecordIdSchema.optional(),
    createdAt: z.string().min(1),
    updatedAt: z.string().min(1)
  })
  .strict();

export const previewTokenRecordSchema = z
  .object({
    id: contentRecordIdSchema,
    tokenHash: z.string().length(64),
    siteId: contentRecordIdSchema,
    draftId: contentRecordIdSchema,
    allowedPathPrefix: urlPathSchema,
    expiresAt: z.string().min(1),
    createdByUserId: contentRecordIdSchema.optional(),
    revokedAt: z.string().min(1).optional(),
    createdAt: z.string().min(1)
  })
  .strict();

export const cacheInvalidationEventRecordSchema = z
  .object({
    id: contentRecordIdSchema,
    siteId: contentRecordIdSchema,
    affectedPaths: z.array(urlPathSchema),
    affectedTags: z.array(z.string().min(1).max(160)),
    triggerType: z.enum(["publish", "rollback", "route_change", "manual"]),
    publishRevisionId: contentRecordIdSchema.optional(),
    providerResult: z.record(z.string(), z.unknown()).default({}),
    retryCount: z.number().int().min(0),
    status: z.enum(["queued", "sent", "failed"]),
    createdAt: z.string().min(1)
  })
  .strict();

export type PageRecord = z.infer<typeof pageRecordSchema>;
export type PageVersionRecord = z.infer<typeof pageVersionRecordSchema>;
export type PublishedRevisionRecord = z.infer<typeof publishedRevisionRecordSchema>;
export type DraftRecord = z.infer<typeof draftRecordSchema>;
export type PreviewTokenRecord = z.infer<typeof previewTokenRecordSchema>;
export type CacheInvalidationEventRecord = z.infer<typeof cacheInvalidationEventRecordSchema>;
