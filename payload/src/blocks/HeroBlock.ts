import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Exceptional Journeys',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'Bespoke honeymoon experiences crafted for the most discerning couples',
    },
    {
      name: 'destinations',
      type: 'array',
      label: 'Destination Selector Options',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Button Text',
      defaultValue: 'Start Planning',
    },
  ],
}
