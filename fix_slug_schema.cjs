const fs = require('fs');
let keystatic = fs.readFileSync('keystatic.config.ts', 'utf8');
keystatic = keystatic.replace(
  "slugField: 'title',",
  "slugField: 'slug',"
);
keystatic = keystatic.replace(
  "title: fields.text({ label: '文章標題', validation: { length: { min: 1 } } }),",
  "title: fields.text({ label: '文章標題', validation: { length: { min: 1 } } }),\n        slug: fields.text({ label: '專屬網址 (自動產生，請勿修改)', validation: { length: { min: 1 } } }),"
);
fs.writeFileSync('keystatic.config.ts', keystatic, 'utf8');
