import type { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  labels: { singular: 'Features Section', plural: 'Features Sections' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Why Choose Resourt',
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Sparkles', value: 'sparkles' },
            { label: 'Heart', value: 'heart' },
            { label: 'Leaf', value: 'leaf' },
            { label: 'Star', value: 'star' },
            { label: 'Globe', value: 'globe' },
            { label: 'Shield', value: 'shield' },
          ],
          defaultValue: 'sparkles',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
