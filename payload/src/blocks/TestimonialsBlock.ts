import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: { singular: 'Testimonials Section', plural: 'Testimonials Sections' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'What our couples say',
    },
    {
      name: 'testimonials',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'authorName',
          type: 'text',
          required: true,
        },
        {
          name: 'authorImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'destination',
          type: 'text',
          label: 'Destination / Trip',
        },
      ],
    },
  ],
}
