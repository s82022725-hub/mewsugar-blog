const fs = require('fs');
let content = fs.readFileSync('src/pages/app.astro', 'utf8');

// 1. Hero
// Find the hero placeholder
const heroRegex = /<div class="max-w-4xl mx-auto bg-white rounded-\[2rem\] shadow-xl border border-gray-100 aspect-\[16\/9\] flex items-center justify-center overflow-hidden relative">[\s\S]*?<\/div>/;
const newHero = `<div class="max-w-md mx-auto bg-white rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden relative" style="height: 600px;">
					<img src="/app-hero.png" alt="MewSugar App 操作畫面" class="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-700" />
				</div>`;
content = content.replace(heroRegex, newHero);

// 2. Feature 1: Chart
const chartRegex = /<div class="w-full md:w-1\/2 bg-gray-100 aspect-video rounded-3xl flex items-center justify-center text-gray-300 font-bold shadow-inner">\s*\[自動生成血糖曲線圖示意圖\]\s*<\/div>/;
const newChart = `<div class="w-full md:w-1/2 bg-[#FFF8F6] rounded-3xl flex items-center justify-center shadow-inner overflow-hidden" style="height: 400px; border: 1px solid #FFE8E3;">
							<img src="/app-chart.png" alt="自動生成血糖曲線圖" class="w-full h-full object-contain" />
						</div>`;
content = content.replace(chartRegex, newChart);

// 3. Feature 2: Calculator
const calcRegex = /<div class="w-full md:w-1\/2 bg-gray-100 aspect-video rounded-3xl flex items-center justify-center text-gray-300 font-bold shadow-inner">\s*\[內建計算機操作示意圖\]\s*<\/div>/;
const newCalc = `<div class="w-full md:w-1/2 bg-[#F8F5F0] rounded-3xl flex items-center justify-center shadow-inner overflow-hidden" style="height: 400px; border: 1px solid #EBE4D5;">
							<img src="/app-calc.png" alt="內建數值計算機" class="w-full h-full object-contain" />
						</div>`;
content = content.replace(calcRegex, newCalc);

// 4. Feature 3: Export
const exportRegex = /<div class="w-full md:w-1\/2 bg-gray-100 aspect-video rounded-3xl flex items-center justify-center text-gray-300 font-bold shadow-inner">\s*\[匯出報表示意圖\]\s*<\/div>/;
const newExport = `<div class="w-full md:w-1/2 bg-[#F4FBFA] rounded-3xl flex items-center justify-center shadow-inner overflow-hidden" style="height: 400px; border: 1px solid #E2F2EF;">
							<img src="/app-export.png" alt="資料匯出與報告" class="w-full h-full object-contain" />
						</div>`;
content = content.replace(exportRegex, newExport);

fs.writeFileSync('src/pages/app.astro', content, 'utf8');
console.log('App page updated!');
