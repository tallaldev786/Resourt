import type { Block } from 'payload'

export const TextImageBlock: Block = {
  slug: 'textImage',
  labels: { singular: 'Text + Image', plural: 'Text + Image Sections' },
  fields: [
    { name: 'eyebrow', type: 'text' },
    { name: 'heading', type: 'text' },
    { name: 'body', type: 'richText', label: 'Body Text' },
    { name: 'ctaLabel', type: 'text', label: 'CTA Button Label' },
    { name: 'ctaHref', type: 'text', label: 'CTA Button Link' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'imagePosition',
      type: 'select',
      defaultValue: 'right',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'background',
      type: 'select',
      defaultValue: 'white',
      options: [
        { label: 'White', value: 'white' },
        { label: 'Grey', value: 'grey' },
      ],
    },
  ],
}
