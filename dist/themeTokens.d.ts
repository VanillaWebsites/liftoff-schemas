import { z } from "zod";
export declare const fontTokensSchema: z.ZodObject<{
    heading: z.ZodString;
    body: z.ZodString;
    mono: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const radiusTokensSchema: z.ZodRecord<z.ZodString, z.ZodString>;
export declare const spacingTokensSchema: z.ZodRecord<z.ZodString, z.ZodString>;
export declare const themeTokensSchema: z.ZodObject<{
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
export type FontTokens = z.infer<typeof fontTokensSchema>;
export type ThemeTokens = z.infer<typeof themeTokensSchema>;
//# sourceMappingURL=themeTokens.d.ts.map