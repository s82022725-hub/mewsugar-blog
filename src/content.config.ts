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
			// 新增的分類與標籤系統
			category: z.enum(['health', 'pets-life', 'reviews', 'notes']),
			featured: z.boolean().default(false).optional(),
			author: z.string().default('半糖日常'),
			// 針對醫療健康文章的參考來源
			references: z.array(z.string()).optional(),
		}),
});

export const collections = { blog };
