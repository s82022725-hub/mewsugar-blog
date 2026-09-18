const fs = require('fs');
let file = fs.readFileSync('src/pages/index.astro', 'utf8');

file = file.replace(
    "import { Image } from 'astro:assets';",
    "import { Image } from 'astro:assets';\nimport FormattedDate from '../components/FormattedDate.astro';"
);

file = file.replace(
    "const latestPost = posts[0];",
    "const latestPosts = posts.slice(0, 3);"
);

const oldBlock = `{latestPost && (
						<div class="max-w-4xl mx-auto mb-10">
							<a href={'/blog/' + latestPost.id + '/'} class="group flex flex-col bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
								<div class="aspect-[16/9] md:aspect-[2/1] bg-gray-200 overflow-hidden relative">
									{latestPost.data.heroImage && <Image src={latestPost.data.heroImage} alt={latestPost.data.title} width={800} height={400} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
								</div>
								<div class="p-8 flex flex-col flex-1">
									<span class="text-xs font-bold text-[#7E9883] uppercase tracking-wider mb-2">{latestPost.data.category || '未分類'}</span>
									<h3 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#A67C52] transition-colors">{latestPost.data.title}</h3>
									<p class="text-gray-500 mb-4 line-clamp-3">{latestPost.data.description}</p>
									<div class="mt-auto text-xs text-gray-400 font-medium">
										2026/09/02
									</div>
								</div>
							</a>
						</div>
					)}`;

const newBlock = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
					{
						latestPosts.map((post) => (
							<a href={\`/blog/\${post.id}/\`} class="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1">
								<div class="aspect-[4/3] bg-gray-100 overflow-hidden relative">
									{post.data.heroImage ? (
										<Image width={600} height={450} src={post.data.heroImage} alt={post.data.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
									) : (
										<div class="w-full h-full flex items-center justify-center text-gray-400">無圖片</div>
									)}
								</div>
								<div class="p-6 flex flex-col flex-grow">
									{post.data.category && (
										<span class="text-xs font-bold text-[#7E9883] uppercase tracking-wider mb-2">{post.data.category}</span>
									)}
									<h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#A67C52] transition-colors line-clamp-2">{post.data.title}</h3>
									<p class="text-gray-500 text-sm mb-4 line-clamp-3">{post.data.description}</p>
									<div class="mt-auto text-xs text-gray-400 font-medium pt-4 border-t border-gray-50">
										<FormattedDate date={post.data.pubDate} />
									</div>
								</div>
							</a>
						))
					}
					</div>`;

// Note: The oldBlock in my script has `未分類` but the actual file has garbled text. I'll use regex.
file = file.replace(/\{latestPost && \([\s\S]*?<\/a>\s*<\/div>\s*\)\}/, newBlock);

fs.writeFileSync('src/pages/index.astro', file, 'utf8');
