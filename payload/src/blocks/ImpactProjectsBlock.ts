import type { Block } from 'payload'

export const ImpactProjectsBlock: Block = {
  slug: 'impactProjects',
  labels: { singular: 'Impact Projects', plural: 'Impact Projects' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    {
      name: 'projects',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'location', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'stat', type: 'text', label: 'Stat (e.g. $2.4M raised)' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
