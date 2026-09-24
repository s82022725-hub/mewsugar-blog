const fs = require('fs');
let content = fs.readFileSync('src/pages/app.astro', 'utf8');

// Replace Feature 1
const feat1Regex = /<div class="w-full md:w-1\/2 bg-gray-50 rounded-3xl flex items-center justify-center shadow-inner overflow-hidden" style="height: 400px;">\s*<img src="\/app-chart\.png".*?\/>\s*<\/div>/;
const newFeat1 = `<div class="w-full md:w-1/2 flex justify-center">
							<img src="/app-chart.png" alt="自動生成血糖曲線圖" class="max-h-[450px] w-auto rounded-[2rem] shadow-2xl border-4 border-gray-50" />
						</div>`;
content = content.replace(feat1Regex, newFeat1);

// Replace Feature 3 (Change image to app-export.png too as user requested)
const feat3Regex = /<div class="w-full md:w-1\/2 bg-gray-50 rounded-3xl flex items-center justify-center shadow-inner overflow-hidden" style="height: 400px;">\s*<img src="\/app-list\.png".*?\/>\s*<\/div>/;
const newFeat3 = `<div class="w-full md:w-1/2 flex justify-center">
							<img src="/app-export.png" alt="資料匯出與報告" class="max-h-[450px] w-auto rounded-[2rem] shadow-2xl border-4 border-gray-50" />
						</div>`;
content = content.replace(feat3Regex, newFeat3);

fs.writeFileSync('src/pages/app.astro', content, 'utf8');
