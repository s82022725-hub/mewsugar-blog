const fs = require('fs');

let content = fs.readFileSync('src/components/BaseHead.astro', 'utf8');

// Replace favicon tags
content = content.replace(/<link rel="icon" type="image\/jpeg" href="\/favicon\.jpg" \/>\n<link rel="icon" href="\/favicon\.ico" \/>/g, '<link rel="icon" type="image/jpeg" href="/favicon.jpg" />');
// If it didn't match perfectly, just remove the ico line:
content = content.replace(/<link rel="icon" href="\/favicon\.ico" \/>\n/g, '');

// Add JSON-LD before Canonical URL
const jsonLd = `
<!-- Site Name JSON-LD -->
<script type="application/ld+json" is:inline set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_TITLE,
  "url": Astro.site
})} />

<!-- Canonical URL -->`;

content = content.replace(/<!-- Canonical URL -->/, jsonLd);

fs.writeFileSync('src/components/BaseHead.astro', content, 'utf8');
console.log("Done");
