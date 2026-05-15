import type { Block } from 'payload'

export const InnerHeroBlock: Block = {
  slug: 'innerHero',
  labels: { singular: 'Inner Hero', plural: 'Inner Heroes' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Eyebrow Text' },
    { name: 'heading', type: 'text', required: true, label: 'Heading' },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media', label: 'Background Image' },
    {
      name: 'overlayOpacity',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Medium', value: 'medium' },
        { label: 'Dark', value: 'dark' },
      ],
    },
  ],
}
