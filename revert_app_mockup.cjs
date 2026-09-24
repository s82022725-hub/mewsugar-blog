const fs = require('fs');
let content = fs.readFileSync('src/pages/app.astro', 'utf8');

const oldCode = `<div class="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden relative">
					<img src="/app-mockup.jpg" alt="MewSugar App ???面" class="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700" />
				</div>`;
const oldCodeRegex = /<div class="max-w-4xl mx-auto bg-white rounded-\[2rem\] shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden relative">[\s\S]*?<\/div>/;

const placeholder = `<div class="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl border border-gray-100 aspect-[16/9] flex items-center justify-center overflow-hidden relative">
					<div class="absolute inset-0 bg-gradient-to-tr from-gray-50 to-gray-100 opacity-50"></div>
					<div class="text-center z-10">
						<svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
						<p class="text-gray-400 font-bold text-lg">未來這裡會放上一張真實的 App 操作畫面截圖</p>
					</div>
				</div>`;

content = content.replace(oldCodeRegex, placeholder);
fs.writeFileSync('src/pages/app.astro', content, 'utf8');
