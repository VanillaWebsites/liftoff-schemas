import { z } from "zod";
export declare const editableFieldTypeSchema: z.ZodEnum<{
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
export declare const editableFieldSchema: z.ZodObject<{
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
}, z.core.$strict>;
export declare const editableTargetSchema: z.ZodObject<{
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
}, z.core.$strict>;
export declare const editableManifestSchema: z.ZodObject<{
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
export type EditableFieldType = z.infer<typeof editableFieldTypeSchema>;
export type EditableField = z.infer<typeof editableFieldSchema>;
export type EditableTarget = z.infer<typeof editableTargetSchema>;
export type EditableManifest = z.infer<typeof editableManifestSchema>;
//# sourceMappingURL=editableManifest.d.ts.map