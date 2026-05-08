import { z } from "zod";
export declare const identifierSchema: z.ZodString;
export declare const componentNameSchema: z.ZodString;
export declare const relativePathSchema: z.ZodString;
export declare const fieldPathSchema: z.ZodString;
export declare const urlPathSchema: z.ZodString;
export declare const hexColorSchema: z.ZodString;
export declare const tokenNameSchema: z.ZodString;
export declare const jsonPrimitiveSchema: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
export type JsonPrimitive = z.infer<typeof jsonPrimitiveSchema>;
//# sourceMappingURL=common.d.ts.map