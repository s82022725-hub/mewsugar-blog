const fs = require('fs');
let keystatic = fs.readFileSync('keystatic.config.ts', 'utf8');
keystatic = keystatic.replace(
  "featured: fields.checkbox({ label: 'Featured', defaultValue: true }),",
  "featured: fields.checkbox({ label: 'Featured', defaultValue: true }),\n        draft: fields.checkbox({ label: '草稿 (勾選時不會顯示在首頁，僅限隱藏網址預覽)', defaultValue: true }),"
);
fs.writeFileSync('keystatic.config.ts', keystatic, 'utf8');

let content = fs.readFileSync('src/content.config.ts', 'utf8');
content = content.replace(
  "featured: z.boolean().default(false).optional(),",
  "featured: z.boolean().default(false).optional(),\n\t\t\tdraft: z.boolean().default(false).optional(),"
);
fs.writeFileSync('src/content.config.ts', content, 'utf8');

let baseHead = fs.readFileSync('src/components/BaseHead.astro', 'utf8');
baseHead = baseHead.replace(
  "const { title, description, image = '/blog-placeholder-1.jpg' } = Astro.props;",
  "const { title, description, image = '/blog-placeholder-1.jpg', draft = false } = Astro.props;"
);
baseHead = baseHead.replace(
  "</head>",
  "{draft && <meta name=\"robots\" content=\"noindex, nofollow\" />}\n</head>"
);
fs.writeFileSync('src/components/BaseHead.astro', baseHead, 'utf8');

let blogPost = fs.readFileSync('src/layouts/BlogPost.astro', 'utf8');
blogPost = blogPost.replace(
  "<BaseHead title={title} description={description} image={heroImage} />",
  "<BaseHead title={title} description={description} image={heroImage} draft={draft} />"
);
blogPost = blogPost.replace(
  "const { title, description, pubDate, updatedDate, heroImage, category } = Astro.props;",
  "const { title, description, pubDate, updatedDate, heroImage, category, draft } = Astro.props;"
);
fs.writeFileSync('src/layouts/BlogPost.astro', blogPost, 'utf8');
