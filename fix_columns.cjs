const fs = require('fs');
let keystatic = fs.readFileSync('keystatic.config.ts', 'utf8');
if (!keystatic.includes("columns: ['title']")) {
    keystatic = keystatic.replace(
      "slugField: 'slug',",
      "slugField: 'slug',\n      columns: ['title'],"
    );
    fs.writeFileSync('keystatic.config.ts', keystatic, 'utf8');
}
