import { defineCollection, z } from "astro:content";

const speaker = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    description: z.string(),
    image: z.string().optional(),
    jobTitle: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

const track = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    description: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    presenterSlug: z.array(z.string()).optional(),
    language: z.string().default('fr'),
  }),
});

export const collections = { speaker, track };
