const fs = require('fs');
let content = fs.readFileSync('src/pages/app.astro', 'utf8');

// 1. Hero
const heroRegex = /<div class="max-w-md mx-auto bg-white rounded-\[2rem\] shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden relative" style="height: 600px;">\s*<img src="\/app-hero\.png" alt="MewSugar App 操作畫面" class="w-full h-full object-contain hover:scale-\[1\.02\] transition-transform duration-700" \/>\s*<\/div>/;
const newHero = `<div class="max-w-xs mx-auto flex justify-center relative">
					<img src="/app-hero.png" alt="MewSugar App 操作畫面" class="w-full h-auto rounded-[2.5rem] shadow-2xl border-4 border-gray-50 hover:scale-[1.02] transition-transform duration-700" />
				</div>`;
content = content.replace(heroRegex, newHero);

// 2. Feature 1: Chart
const chartRegex = /<div class="w-full md:w-1\/2 bg-\[#FFF8F6\] rounded-3xl flex items-center justify-center shadow-inner overflow-hidden" style="height: 400px; border: 1px solid #FFE8E3;">\s*<img src="\/app-chart\.png" alt="自動生成血糖曲線圖" class="w-full h-full object-contain" \/>\s*<\/div>/;
const newChart = `<div class="w-full md:w-1/2 flex justify-center">
							<img src="/app-chart.png" alt="自動生成血糖曲線圖" class="max-h-[450px] w-auto rounded-[2rem] shadow-2xl border-4 border-gray-50" />
						</div>`;
content = content.replace(chartRegex, newChart);

// 3. Feature 2: Calculator
const calcRegex = /<div class="w-full md:w-1\/2 bg-\[#F8F5F0\] rounded-3xl flex items-center justify-center shadow-inner overflow-hidden" style="height: 400px; border: 1px solid #EBE4D5;">\s*<img src="\/app-calc\.png" alt="內建數值計算機" class="w-full h-full object-contain" \/>\s*<\/div>/;
const newCalc = `<div class="w-full md:w-1/2 flex justify-center">
							<img src="/app-calc.png" alt="內建數值計算機" class="max-h-[450px] w-auto rounded-[2rem] shadow-2xl border-4 border-gray-50" />
						</div>`;
content = content.replace(calcRegex, newCalc);

// 4. Feature 3: Export
const exportRegex = /<div class="w-full md:w-1\/2 bg-\[#F4FBFA\] rounded-3xl flex items-center justify-center shadow-inner overflow-hidden" style="height: 400px; border: 1px solid #E2F2EF;">\s*<img src="\/app-export\.png" alt="資料匯出與報告" class="w-full h-full object-contain" \/>\s*<\/div>/;
const newExport = `<div class="w-full md:w-1/2 flex justify-center">
							<img src="/app-export.png" alt="資料匯出與報告" class="max-h-[450px] w-auto rounded-[2rem] shadow-2xl border-4 border-gray-50" />
						</div>`;
content = content.replace(exportRegex, newExport);

fs.writeFileSync('src/pages/app.astro', content, 'utf8');
console.log('Images unboxed!');
