const fs = require('fs');

const sortLogic = `
	.sort((a, b) => {
		const aFeatured = !!a.data.featured;
		const bFeatured = !!b.data.featured;
		if (aFeatured === bFeatured) {
			return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
		}
		return aFeatured ? -1 : 1;
	})
`;

// Update index.astro
let indexFile = fs.readFileSync('src/pages/index.astro', 'utf8');
indexFile = indexFile.replace(
	/\.sort\([\s\S]*?\)/,
	sortLogic.trim()
);
fs.writeFileSync('src/pages/index.astro', indexFile, 'utf8');

// Update blog/index.astro
let blogFile = fs.readFileSync('src/pages/blog/index.astro', 'utf8');
blogFile = blogFile.replace(
	/\.sort\([\s\S]*?\)/,
	sortLogic.trim()
);
fs.writeFileSync('src/pages/blog/index.astro', blogFile, 'utf8');

// Update category/[category].astro
let catFile = fs.readFileSync('src/pages/category/[category].astro', 'utf8');
catFile = catFile.replace(
	/\.sort\([\s\S]*?\)/,
	sortLogic.trim()
);
// Also need to add the badge to blog/index.astro and index.astro if they don't have it!
