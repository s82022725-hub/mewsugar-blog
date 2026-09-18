const fs = require('fs');
let file = fs.readFileSync('src/layouts/BlogPost.astro', 'utf8');

file = file.replace(
  'class="relative z-10 w-full max-h-[400px] object-cover drop-shadow-2xl"',
  'class="relative z-10 w-full max-h-[400px] object-contain drop-shadow-2xl"'
);

fs.writeFileSync('src/layouts/BlogPost.astro', file, 'utf8');
