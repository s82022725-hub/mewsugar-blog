const fs = require('fs');
let content = fs.readFileSync('src/pages/app.astro', 'utf8');

const brokenHeroRegex = /<div class="max-w-md mx-auto bg-white rounded-\[2rem\] shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden relative" style="height: 600px;">[\s\S]*?<p class="text-gray-400 font-bold text-lg">.*?<\/p>\s*<\/div>\s*<\/div>/;

const fixedHero = `<div class="max-w-md mx-auto bg-white rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden relative" style="height: 600px;">
					<img src="/app-hero.png" alt="MewSugar App 操作畫面" class="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-700" />
				</div>`;

content = content.replace(brokenHeroRegex, fixedHero);

fs.writeFileSync('src/pages/app.astro', content, 'utf8');
