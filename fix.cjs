const fs = require('fs');
let content = fs.readFileSync('src/content/blog/what-is-cat-diabetes.md', 'utf8');
content = content.replace(/^---[\r\n]+(?:title:.*[\r\n]+)?description:/m, '---\ntitle: 貓咪糖尿病是什麼？症狀、原因、治療與日常照護一次看懂\ndescription:');
fs.writeFileSync('src/content/blog/what-is-cat-diabetes.md', content);
