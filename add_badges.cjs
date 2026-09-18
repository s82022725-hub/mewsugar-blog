const fs = require('fs');

const badgeHtml = `
								{post.data.featured && (
									<span class="absolute top-4 left-4 bg-[#FF6F61] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">精選</span>
								)}
`;

['src/pages/index.astro', 'src/pages/blog/index.astro'].forEach(file => {
	let content = fs.readFileSync(file, 'utf8');
	if (!content.includes('bg-[#FF6F61]')) {
		content = content.replace(
			/<\/div>\s*<div class="p-6/g,
			`${badgeHtml}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="p-6`
		);
		fs.writeFileSync(file, content, 'utf8');
	}
});
