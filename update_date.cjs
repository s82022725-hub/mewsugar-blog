const fs = require('fs');
let file = fs.readFileSync('src/content/blog/how-to-use-human-blood-glucose-meter-for-cats.md', 'utf8');

file = file.replace(
  'pubDate: "2026-09-19"',
  'pubDate: "2026-09-17"'
);

fs.writeFileSync('src/content/blog/how-to-use-human-blood-glucose-meter-for-cats.md', file, 'utf8');
