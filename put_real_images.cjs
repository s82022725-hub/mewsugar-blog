const fs = require('fs');
let content = fs.readFileSync('src/pages/app.astro', 'utf8');

// Replace Hero Placeholder
const heroPlaceholderRegex = /<div class="max-w-4xl mx-auto bg-white rounded-\[2rem\] shadow-xl border border-gray-100 aspect-\[16\/9\] flex items-center justify-center overflow-hidden relative">[\s\S]*?<\/div>/;
const newHero = `<div class="max-w-md mx-auto bg-white rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden relative" style="height: 600px;">
					<img src="/app-chart.png" alt="MewSugar App 操作畫面" class="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-700" />
				</div>`;
content = content.replace(heroPlaceholderRegex, newHero);

// Replace Feature 1 (Chart)
content = content.replace(
	/<div class="w-full md:w-1\/2 bg-gray-100 aspect-video rounded-3xl flex items-center justify-center text-gray-300 font-bold shadow-inner">\s*\[自動生成血糖曲線圖示意圖\]\s*<\/div>/,
	`<div class="w-full md:w-1/2 bg-gray-50 rounded-3xl flex items-center justify-center shadow-inner overflow-hidden" style="height: 400px;">
							<img src="/app-chart.png" alt="自動生成血糖曲線圖" class="w-full h-full object-contain" />
						</div>`
);

// Replace Feature 3 (List/Export) - Wait, let me check what Feature 3 is called exactly
// Let's just blindly replace the word [匯出報表示意圖] and its parent div
content = content.replace(
	/<div class="w-full md:w-1\/2 bg-gray-100 aspect-video rounded-3xl flex items-center justify-center text-gray-300 font-bold shadow-inner">\s*\[匯出報表示意圖\]\s*<\/div>/,
	`<div class="w-full md:w-1/2 bg-gray-50 rounded-3xl flex items-center justify-center shadow-inner overflow-hidden" style="height: 400px;">
							<img src="/app-list.png" alt="歷史紀錄明細" class="w-full h-full object-contain" />
						</div>`
);

fs.writeFileSync('src/pages/app.astro', content, 'utf8');
