import type { Block } from 'payload'

export const ToursBlock: Block = {
  slug: 'tours',
  labels: { singular: 'Tours Section', plural: 'Tours Sections' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Featured Tours',
    },
    {
      name: 'tours',
      type: 'relationship',
      relationTo: 'tours',
      hasMany: true,
      label: 'Select Tours to Display',
    },
    {
      name: 'showAll',
      type: 'checkbox',
      label: 'Show all tours (overrides selection)',
      defaultValue: false,
    },
  ],
}
