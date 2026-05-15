import type { Block } from 'payload'

export const QuoteImageBlock: Block = {
  slug: 'quoteImage',
  labels: { singular: 'Quote Image', plural: 'Quote Images' },
  fields: [
    { name: 'quote', type: 'textarea', required: true },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
  ],
}
