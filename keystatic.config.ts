import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 's82022725-hub/mewsugar-blog'
  },
  ui: {
    brand: { name: 'MewSugar Blog CMS' }
  },
  collections: {
    posts: collection({
      label: '部落格文章',
      slugField: 'slug',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: '文章標題 (寫中文)', validation: { length: { min: 1 } } }),
        slug: fields.text({ label: '專屬網址 (僅限英文與橫線)', validation: { length: { min: 1 } } }),
        description: fields.text({ label: '文章簡介 (用於預覽與SEO)' }),
        pubDate: fields.date({ label: '發布日期' }),
        updatedDate: fields.date({ label: '最後更新日期' }),
        heroImage: fields.image({ label: '封面圖片', directory: 'src/assets', publicPath: '../../assets', validation: { isRequired: false } }),
        category: fields.text({ label: '文章分類', defaultValue: 'health' }),
        author: fields.text({ label: '作者', defaultValue: 'MewSugar' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: '標籤', itemLabel: props => props.value }),
        featured: fields.checkbox({ label: '置頂精選', defaultValue: true }),
        draft: fields.checkbox({ label: '草稿 (勾選時不會顯示在首頁，僅限隱藏網址預覽)', defaultValue: true }),
        content: fields.markdoc({ label: '文章內容', extension: 'md' }),
      },
    }),
  },
});






