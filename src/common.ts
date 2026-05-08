import { z } from "zod";

export const identifierSchema = z
  .string()
  .min(1)
  .max(80)
  .regex(/^[A-Za-z][A-Za-z0-9_-]*$/);

export const componentNameSchema = z
  .string()
  .min(1)
  .max(80)
  .regex(/^[A-Z][A-Za-z0-9]*$/);

export const relativePathSchema = z
  .string()
  .min(1)
  .max(240)
  .refine((value) => !value.includes("\\"), "Use forward slashes in paths")
  .refine((value) => !value.startsWith("/"), "Path must be relative")
  .refine((value) => !value.split("/").includes(".."), "Path must not traverse directories");

export const fieldPathSchema = z
  .string()
  .min(1)
  .max(160)
  .regex(/^[A-Za-z0-9_]+(\.[A-Za-z0-9_]+|\.\d+)*$/);

export const urlPathSchema = z
  .string()
  .min(1)
  .max(180)
  .regex(/^\/[A-Za-z0-9/_#?.=&%-]*$/);

export const hexColorSchema = z
  .string()
  .regex(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/);

export const tokenNameSchema = z
  .string()
  .min(1)
  .max(80)
  .regex(/^[a-z][a-z0-9-]*$/);

export const jsonPrimitiveSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);

export type JsonPrimitive = z.infer<typeof jsonPrimitiveSchema>;
