const fs = require('fs');

const indexTop = `---
import BaseHead from '../components/BaseHead.astro';
import Footer from '../components/Footer.astro';
import Header from '../components/Header.astro';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getCollection } from 'astro:content';
import { Image } from 'astro:assets';
import FormattedDate from '../components/FormattedDate.astro';
import heroHome from '../assets/hero-home.jpg';

const posts = (await getCollection('blog'))
	.filter(post => !post.data.draft && post.data.pubDate <= new Date())
	.sort((a, b) => {
		const aFeatured = !!a.data.featured;
		const bFeatured = !!b.data.featured;
		if (aFeatured === bFeatured) {
			return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
		}
		return aFeatured ? -1 : 1;
	});

const latestPosts = posts.slice(0, 3);
---`;

let indexFile = fs.readFileSync('src/pages/index.astro', 'utf8');
indexFile = indexFile.replace(/^---[\s\S]*?---/, indexTop);
fs.writeFileSync('src/pages/index.astro', indexFile, 'utf8');

const blogTop = `---
import { Image } from 'astro:assets';
import { getCollection } from 'astro:content';
import BaseHead from '../../components/BaseHead.astro';
import Footer from '../../components/Footer.astro';
import FormattedDate from '../../components/FormattedDate.astro';
import Header from '../../components/Header.astro';
import { SITE_DESCRIPTION, SITE_TITLE } from '../../consts';

const posts = (await getCollection('blog'))
	.filter(post => !post.data.draft && post.data.pubDate <= new Date())
	.sort((a, b) => {
		const aFeatured = !!a.data.featured;
		const bFeatured = !!b.data.featured;
		if (aFeatured === bFeatured) {
			return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
		}
		return aFeatured ? -1 : 1;
	});
---`;

let blogFile = fs.readFileSync('src/pages/blog/index.astro', 'utf8');
blogFile = blogFile.replace(/^---[\s\S]*?---/, blogTop);
fs.writeFileSync('src/pages/blog/index.astro', blogFile, 'utf8');

console.log("Done");
