import type { Block } from 'payload'

export const PrinciplesBlock: Block = {
  slug: 'principles',
  labels: { singular: 'Principles Grid', plural: 'Principles Grids' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'subheading', type: 'textarea' },
    {
      name: 'principles',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Leaf', value: 'leaf' },
            { label: 'Globe', value: 'globe' },
            { label: 'Heart', value: 'heart' },
            { label: 'Users', value: 'users' },
            { label: 'Tree', value: 'tree' },
            { label: 'Droplets', value: 'droplets' },
            { label: 'Star', value: 'star' },
            { label: 'Sparkles', value: 'sparkles' },
            { label: 'Shield', value: 'shield' },
          ],
        },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
