import type { Block } from 'payload'

export const CtaDarkBlock: Block = {
  slug: 'ctaDark',
  labels: { singular: 'Dark CTA', plural: 'Dark CTAs' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'body', type: 'textarea' },
    { name: 'primaryLabel', type: 'text', label: 'Primary Button Label' },
    { name: 'primaryHref', type: 'text', label: 'Primary Button Link' },
    { name: 'secondaryLabel', type: 'text', label: 'Secondary Button Label' },
    { name: 'secondaryHref', type: 'text', label: 'Secondary Button Link' },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Side Image (optional)' },
  ],
}
