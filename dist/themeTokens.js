import { z } from "zod";
import { hexColorSchema, tokenNameSchema } from "./common.js";
export const fontTokensSchema = z
    .object({
    heading: z.string().min(1).max(120),
    body: z.string().min(1).max(120),
    mono: z.string().min(1).max(120).optional()
})
    .strict();
export const radiusTokensSchema = z.record(tokenNameSchema, z.string().regex(/^\d+(?:\.\d+)?(?:px|rem)$/));
export const spacingTokensSchema = z.record(tokenNameSchema, z.string().regex(/^\d+(?:\.\d+)?(?:px|rem)$/));
export const themeTokensSchema = z
    .object({
    version: z.literal(1),
    colors: z.record(tokenNameSchema, hexColorSchema).refine((colors) => Object.keys(colors).length > 0, {
        message: "At least one color token is required"
    }),
    fonts: fontTokensSchema,
    radii: radiusTokensSchema.default({}).optional(),
    spacing: spacingTokensSchema.default({}).optional(),
    shadows: z.record(tokenNameSchema, z.string().min(1).max(240)).default({}).optional()
})
    .strict();
