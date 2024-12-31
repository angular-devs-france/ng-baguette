import { defineCollection, z } from 'astro:content';

const crew = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		name: z.string(),
		title: z.string(),
		bio: z.string(),
		heroImage: z.string(),
	}),
});

export const collections = { crew };
