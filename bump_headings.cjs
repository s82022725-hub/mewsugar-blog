const fs = require('fs');
const files = [
	'src/content/blog/cat-blood-sugar-fluctuation-reasons.md',
	'src/content/blog/cat-insulin-injection-tips-and-myths.md',
	'src/content/blog/cat-normal-blood-sugar-levels.md'
];

files.forEach(file => {
	let lines = fs.readFileSync(file, 'utf8').split('\n');
	
	// We only want to bump headings in the markdown body, not in frontmatter
	// Actually, frontmatter shouldn't have lines starting with `# ` at the beginning of the line anyway.
	let inFrontmatter = false;
	let frontmatterCount = 0;
	
	for (let i = 0; i < lines.length; i++) {
		if (lines[i].trim() === '---') {
			frontmatterCount++;
			if (frontmatterCount === 1) inFrontmatter = true;
			if (frontmatterCount === 2) inFrontmatter = false;
			continue;
		}
		
		if (!inFrontmatter && lines[i].match(/^#+ /)) {
			lines[i] = '#' + lines[i]; // prepend one '#'
		}
	}
	
	fs.writeFileSync(file, lines.join('\n'), 'utf8');
});
console.log("Headings bumped!");
