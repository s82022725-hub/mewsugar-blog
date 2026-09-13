const fs = require('fs');
let content = fs.readFileSync('src/pages/index.astro', 'utf8');

// Add import
if (!content.includes('import heroHome')) {
    content = content.replace("import { Image } from 'astro:assets';", "import { Image } from 'astro:assets';\nimport heroHome from '../assets/hero-home.jpg';");
}

// Replace img
content = content.replace(/<img src="https:\/\/images\.unsplash\.com[^>]+>/, '<Image src={heroHome} alt="可愛貓咪" class="w-full h-full object-cover opacity-90" />');

fs.writeFileSync('src/pages/index.astro', content);
