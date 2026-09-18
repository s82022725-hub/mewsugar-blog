const fs = require('fs');
let file = fs.readFileSync('src/content/blog/what-is-cat-diabetes.md', 'utf8');
file = file.replace(
  "heroImage: '../../assets/cat-diabetes-hero.png'",
  "heroImage: '../../assets/what-is-cat-diabetes/heroImage.jpeg'"
);
fs.writeFileSync('src/content/blog/what-is-cat-diabetes.md', file, 'utf8');
