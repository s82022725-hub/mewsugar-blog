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
        pubDate: fields.date({ label: '?澆???' }),
        updatedDate: fields.date({ label: '?湔??' }),
        heroImage: fields.text({ label: '撠?楝敺?, defaultValue: '../../assets/blog-placeholder-1.jpg' }),
        category: fields.text({ label: '??', defaultValue: 'health' }),
        author: fields.text({ label: '雿?, defaultValue: '???亙虜' }),
        tags: fields.array(fields.text({ label: '璅惜' }), { label: '璅惜', itemLabel: props => props.value }),
        featured: fields.checkbox({ label: '擐?蝎暸', defaultValue: true }),
        content: fields.markdoc({ label: '???批捆' }),
      },
    }),
  },
});

