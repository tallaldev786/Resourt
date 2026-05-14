import type { Block } from 'payload'

export const NewsletterBlock: Block = {
  slug: 'newsletter',
  labels: { singular: 'Newsletter Section', plural: 'Newsletter Sections' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Stay inspired',
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Subscribe for exclusive honeymoon inspiration, travel tips, and special offers.',
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'Subscribe',
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Enter your email',
    },
  ],
}
