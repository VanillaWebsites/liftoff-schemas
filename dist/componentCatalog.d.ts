import { z } from "zod";
export declare const propDefinitionSchema: z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        object: "object";
        array: "array";
        image: "image";
        richText: "richText";
        link: "link";
    }>;
    required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    description: z.ZodOptional<z.ZodString>;
    maxLength: z.ZodOptional<z.ZodNumber>;
    minItems: z.ZodOptional<z.ZodNumber>;
    maxItems: z.ZodOptional<z.ZodNumber>;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
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
    }, z.core.$strict>>>;
    item: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            string: "string";
            object: "object";
            text: "text";
            richText: "richText";
            link: "link";
        }>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
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
        }, z.core.$strict>>>;
    }, z.core.$strict>>;
    ui: z.ZodOptional<z.ZodObject<{
        widget: z.ZodOptional<z.ZodEnum<{
            cards: "cards";
            list: "list";
            paragraphs: "paragraphs";
            link: "link";
        }>>;
        itemLabelField: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export declare const catalogComponentSchema: z.ZodObject<{
    name: z.ZodString;
    category: z.ZodEnum<{
        section: "section";
        global: "global";
        layout: "layout";
    }>;
    version: z.ZodNumber;
    description: z.ZodOptional<z.ZodString>;
    props: z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodEnum<{
            string: "string";
            number: "number";
            boolean: "boolean";
            object: "object";
            array: "array";
            image: "image";
            richText: "richText";
            link: "link";
        }>;
        required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        description: z.ZodOptional<z.ZodString>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        minItems: z.ZodOptional<z.ZodNumber>;
        maxItems: z.ZodOptional<z.ZodNumber>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
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
        }, z.core.$strict>>>;
        item: z.ZodOptional<z.ZodObject<{
            type: z.ZodEnum<{
                string: "string";
                object: "object";
                text: "text";
                richText: "richText";
                link: "link";
            }>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
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
            }, z.core.$strict>>>;
        }, z.core.$strict>>;
        ui: z.ZodOptional<z.ZodObject<{
            widget: z.ZodOptional<z.ZodEnum<{
                cards: "cards";
                list: "list";
                paragraphs: "paragraphs";
                link: "link";
            }>>;
            itemLabelField: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    editableProps: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
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
    }, z.core.$strict>>>>;
}, z.core.$strict>;
export declare const componentCatalogSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    components: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        category: z.ZodEnum<{
            section: "section";
            global: "global";
            layout: "layout";
        }>;
        version: z.ZodNumber;
        description: z.ZodOptional<z.ZodString>;
        props: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodEnum<{
                string: "string";
                number: "number";
                boolean: "boolean";
                object: "object";
                array: "array";
                image: "image";
                richText: "richText";
                link: "link";
            }>;
            required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            description: z.ZodOptional<z.ZodString>;
            maxLength: z.ZodOptional<z.ZodNumber>;
            minItems: z.ZodOptional<z.ZodNumber>;
            maxItems: z.ZodOptional<z.ZodNumber>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
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
            }, z.core.$strict>>>;
            item: z.ZodOptional<z.ZodObject<{
                type: z.ZodEnum<{
                    string: "string";
                    object: "object";
                    text: "text";
                    richText: "richText";
                    link: "link";
                }>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
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
                }, z.core.$strict>>>;
            }, z.core.$strict>>;
            ui: z.ZodOptional<z.ZodObject<{
                widget: z.ZodOptional<z.ZodEnum<{
                    cards: "cards";
                    list: "list";
                    paragraphs: "paragraphs";
                    link: "link";
                }>>;
                itemLabelField: z.ZodOptional<z.ZodString>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
        editableProps: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
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
        }, z.core.$strict>>>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type PropDefinition = z.infer<typeof propDefinitionSchema>;
export type CatalogComponent = z.infer<typeof catalogComponentSchema>;
export type ComponentCatalog = z.infer<typeof componentCatalogSchema>;
//# sourceMappingURL=componentCatalog.d.ts.map