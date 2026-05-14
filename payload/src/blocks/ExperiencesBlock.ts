import type { Block } from 'payload'

export const ExperiencesBlock: Block = {
  slug: 'experiences',
  labels: { singular: 'Experiences Section', plural: 'Experiences Sections' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Curated Experiences',
    },
    {
      name: 'experiences',
      type: 'array',
      required: true,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link URL',
        },
      ],
    },
  ],
}
