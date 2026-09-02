import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 's82022725-hub/mewsugar-blog'
  },
  ui: {
    brand: { name: '???亙虜 CMS' }
  },
  collections: {
    posts: collection({
      label: '?刻?潭?蝡?,
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: '璅?' } }),
        description: fields.text({ label: '蝪∩? (SEO Description)' }),
        pubDate: fields.date({ label: '?澆??交?' }),
        updatedDate: fields.date({ label: '?湔?交?' }),
        heroImage: fields.text({ label: '撠??頝臬?', defaultValue: '../../assets/blog-placeholder-1.jpg' }),
        category: fields.text({ label: '??', defaultValue: 'health' }),
        author: fields.text({ label: '作者', defaultValue: '半糖日常' }),
        tags: fields.array(fields.text({ label: '標籤' }), { label: '標籤', itemLabel: props => props.value }),
        featured: fields.checkbox({ label: '首頁精選', defaultValue: true }),
        content: fields.markdoc({ label: '???批捆' }),
      },
    }),
  },
});
