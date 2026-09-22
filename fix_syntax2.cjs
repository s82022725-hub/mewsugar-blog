const fs = require('fs');

const goodBlock = `const posts = (await getCollection('blog'))
	.filter(post => !post.data.draft && post.data.pubDate <= new Date())
	.sort((a, b) => {
		const aFeatured = !!a.data.featured;
		const bFeatured = !!b.data.featured;
		if (aFeatured === bFeatured) {
			return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
		}
		return aFeatured ? -1 : 1;
	});`;

['src/pages/index.astro', 'src/pages/blog/index.astro'].forEach(file => {
	let content = fs.readFileSync(file, 'utf8');
	content = content.replace(/const posts = \(await getCollection\('blog'\)\)[\s\S]*?\)\s*;/g, goodBlock);
	fs.writeFileSync(file, content, 'utf8');
});

const catGoodBlock = `const publicPosts = posts.filter((post) => !post.data.draft && post.data.pubDate <= new Date());

	return categories.map((category) => {
		const filteredPosts = publicPosts.filter((post) => post.data.category === category.id)
			.sort((a, b) => {
				const aFeatured = !!a.data.featured;
				const bFeatured = !!b.data.featured;
				if (aFeatured === bFeatured) {
					return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
				}
				return aFeatured ? -1 : 1;
			});`;

let catFile = 'src/pages/category/[category].astro';
let catContent = fs.readFileSync(catFile, 'utf8');
catContent = catContent.replace(/const publicPosts = posts\.filter[\s\S]*?\)\);/g, catGoodBlock);
fs.writeFileSync(catFile, catContent, 'utf8');

