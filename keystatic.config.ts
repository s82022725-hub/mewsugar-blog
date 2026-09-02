import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 's82022725-hub/mewsugar-blog'
  },
  ui: {
    brand: { name: '半糖日常 CMS' }
  },
  collections: {
    posts: collection({
      label: '部落格文章',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: '標題' } }),
        description: fields.text({ label: '簡介 (SEO Description)' }),
        pubDate: fields.date({ label: '發布日期' }),
        updatedDate: fields.date({ label: '更新日期' }),
        heroImage: fields.text({ label: '封面圖片路徑', defaultValue: '../../assets/blog-placeholder-1.jpg' }),
        category: fields.text({ label: '分類', defaultValue: 'health' }),
        author: fields.text({ label: '作者', defaultValue: '半糖日常' }),
        featured: fields.checkbox({ label: '首頁精選', defaultValue: true }),
        content: fields.markdoc({ label: '文章內容' }),
      },
    }),
  },
});
