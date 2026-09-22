const fs = require('fs');

['src/pages/index.astro', 'src/pages/blog/index.astro'].forEach(file => {
	let content = fs.readFileSync(file, 'utf8');
	// It looks like:
	// .sort((a, b) => {
	// ...
	// }) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	// );
	content = content.replace(/\)\s*=>\s*b\.data\.pubDate\.valueOf\(\)\s*-\s*a\.data\.pubDate\.valueOf\(\),/g, ')');
	fs.writeFileSync(file, content, 'utf8');
});

// Category page has a similar issue probably
let catFile = 'src/pages/category/[category].astro';
let catContent = fs.readFileSync(catFile, 'utf8');
catContent = catContent.replace(/\)\s*=>\s*b\.data\.pubDate\.valueOf\(\)\s*-\s*a\.data\.pubDate\.valueOf\(\)\);/g, '));');
fs.writeFileSync(catFile, catContent, 'utf8');
