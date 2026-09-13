import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// ?啣???憿?璅惜蝟餌絞
			category: z.enum(['health', 'pets-life', 'reviews', 'notes']),
			featured: z.boolean().default(false).optional(),
			draft: z.boolean().default(false).optional(),
			author: z.string().default('???亙虜'),
			// ???怎??亙熒??????皞?			references: z.array(z.string()).optional(),
		}),
});

export const collections = { blog };

