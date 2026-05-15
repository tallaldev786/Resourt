import type { Block } from 'payload'

export const TeamBlock: Block = {
  slug: 'team',
  labels: { singular: 'Team Grid', plural: 'Team Grids' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Eyebrow Text' },
    { name: 'heading', type: 'text', label: 'Heading' },
    {
      name: 'members',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
        { name: 'bio', type: 'textarea' },
        { name: 'photo', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
