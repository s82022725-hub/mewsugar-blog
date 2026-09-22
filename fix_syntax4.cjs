const fs = require('fs');

const catTop = `---
import { getCollection } from 'astro:content';
import { Image } from 'astro:assets';
import BaseHead from '../../components/BaseHead.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../consts';

export async function getStaticPaths() {
	const categories = [
		{ id: 'health', name: '寵物健康' },
		{ id: 'pets-life', name: '毛孩生活' },
		{ id: 'reviews', name: '生活實用' },
		{ id: 'notes', name: '半糖日常' },
	];

	const posts = await getCollection('blog');
	const publicPosts = posts.filter((post) => !post.data.draft && post.data.pubDate <= new Date());

	return categories.map((category) => {
		const filteredPosts = publicPosts.filter((post) => post.data.category === category.id)
			.sort((a, b) => {
				const aFeatured = !!a.data.featured;
				const bFeatured = !!b.data.featured;
				if (aFeatured === bFeatured) {
					return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
				}
				return aFeatured ? -1 : 1;
			});
		return {
			params: { category: category.id },
			props: { categoryName: category.name, posts: filteredPosts },
		};
	});
}

const { category } = Astro.params;
const { categoryName, posts } = Astro.props;
---`;

let catFile = 'src/pages/category/[category].astro';
let catContent = fs.readFileSync(catFile, 'utf8');
catContent = catContent.replace(/^---[\s\S]*?---/, catTop);
fs.writeFileSync(catFile, catContent, 'utf8');

console.log("Done");
