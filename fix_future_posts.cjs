const fs = require('fs');

const filesToUpdate = [
    'src/pages/index.astro',
    'src/pages/blog/index.astro',
    'src/pages/category/[category].astro',
    'src/pages/rss.xml.js'
];

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // For single line arrow functions
    content = content.replace(
        /filter\(\(post\) => !post\.data\.draft\)/g,
        "filter((post) => !post.data.draft && post.data.pubDate <= new Date())"
    );
    content = content.replace(
        /filter\(post => !post\.data\.draft\)/g,
        "filter(post => !post.data.draft && post.data.pubDate <= new Date())"
    );
    fs.writeFileSync(file, content, 'utf8');
});
