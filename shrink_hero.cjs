const fs = require('fs');
let file = fs.readFileSync('src/layouts/BlogPost.astro', 'utf8');

file = file.replace(
  'class="relative w-full max-h-[600px] overflow-hidden flex items-center justify-center bg-gray-900 border-b border-gray-100"',
  'class="relative w-full max-h-[400px] overflow-hidden flex items-center justify-center bg-gray-900 border-b border-gray-100"'
);

file = file.replace(
  'class="relative z-10 w-full max-h-[600px] object-cover drop-shadow-2xl"',
  'class="relative z-10 w-full max-h-[400px] object-cover drop-shadow-2xl"'
);

fs.writeFileSync('src/layouts/BlogPost.astro', file, 'utf8');
