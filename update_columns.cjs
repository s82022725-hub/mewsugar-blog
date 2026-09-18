const fs = require('fs');
let file = fs.readFileSync('keystatic.config.ts', 'utf8');

file = file.replace(
  "columns: ['title'],",
  "columns: ['title', 'pubDate', 'draft'],"
);

fs.writeFileSync('keystatic.config.ts', file, 'utf8');
