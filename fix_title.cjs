const fs = require('fs');
let content = fs.readFileSync('src/content/blog/what-is-cat-diabetes.md', 'utf8');
if (!content.includes('title:')) {
    content = content.replace(/^---[\r\n]+description:/m, '---\ntitle: 貓咪糖尿病是什麼？症狀、原因、治療與日常照護一次看懂\ndescription:');
    fs.writeFileSync('src/content/blog/what-is-cat-diabetes.md', content);
}

let ks = fs.readFileSync('keystatic.config.ts', 'utf8');
ks = ks.replace(/title: fields\.text\(\{ label: 'Title' \}\),/, "title: fields.text({ label: 'Title', validation: { length: { min: 1 } } }),");
fs.writeFileSync('keystatic.config.ts', ks);
