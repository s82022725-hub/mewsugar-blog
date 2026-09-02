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
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        pubDate: fields.date({ label: 'Publish Date' }),
        updatedDate: fields.date({ label: 'Update Date' }),
        heroImage: fields.image({ label: '封面圖', directory: 'src/assets', publicPath: '../../assets' }),
        category: fields.text({ label: 'Category', defaultValue: 'health' }),
        author: fields.text({ label: 'Author', defaultValue: 'MewSugar' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags', itemLabel: props => props.value }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: true }),
        content: fields.markdoc({ label: 'Content', extension: 'md' }),
      },
    }),
  },
});


