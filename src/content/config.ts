import { defineCollection, z } from "astro:content";

const crew = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    heroImage: z.string(),
  }),
});

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
    room: z.string(),
    roomName: z.string(),
    presenter: z.string(),
  }),
});

export const collections = { crew, speaker, track };
