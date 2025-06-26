import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        post: defineCollection({
            source: "**/posts/*.md",
            type: "page",
            schema : z.object({
                title: z.string(),
                date: z.coerce.date(),
                description: z.string()
            })
        })
    }
})
