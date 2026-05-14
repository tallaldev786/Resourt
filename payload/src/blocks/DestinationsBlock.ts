import type { Block } from 'payload'

export const DestinationsBlock: Block = {
  slug: 'destinations',
  labels: { singular: 'Destinations Section', plural: 'Destinations Sections' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Where will you go?',
    },
    {
      name: 'destinations',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'location',
          type: 'text',
          required: true,
          label: 'Region / Country',
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Destination Name',
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
