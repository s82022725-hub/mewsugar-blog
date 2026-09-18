const fs = require('fs');
const filePath = 'src/content/blog/cat-drinking-much-water.md';
let fileContent = fs.readFileSync(filePath, 'utf8');

const parts = fileContent.split('---');
if (parts.length >= 3) {
    const frontmatter = parts[1];
    const newContent = \---
\---
\ + process.env.NEW_BODY;
    fs.writeFileSync(filePath, newContent, 'utf8');
}
