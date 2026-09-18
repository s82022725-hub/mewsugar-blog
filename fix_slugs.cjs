const fs = require('fs');

let file1 = fs.readFileSync('src/content/blog/what-is-cat-diabetes.md', 'utf8');
if (!file1.includes("slug: 'what-is-cat-diabetes'")) {
    file1 = file1.replace("---\n", "---\nslug: 'what-is-cat-diabetes'\n");
    fs.writeFileSync('src/content/blog/what-is-cat-diabetes.md', file1, 'utf8');
}

let file2 = fs.readFileSync('src/content/blog/cat-drinking-much-water.md', 'utf8');
if (!file2.includes("slug: 'cat-drinking-much-water'")) {
    file2 = file2.replace("---\n", "---\nslug: 'cat-drinking-much-water'\n");
    fs.writeFileSync('src/content/blog/cat-drinking-much-water.md', file2, 'utf8');
}
