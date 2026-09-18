const fs = require('fs');
let file = fs.readFileSync('src/content/blog/cat-normal-blood-sugar-levels.md', 'utf8');

file = file.replace(
  'pubDate: "2026-09-22"',
  'pubDate: "2026-09-18"'
);

fs.writeFileSync('src/content/blog/cat-normal-blood-sugar-levels.md', file, 'utf8');
