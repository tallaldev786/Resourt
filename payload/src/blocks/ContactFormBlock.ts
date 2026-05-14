import type { Block } from 'payload'

export const ContactFormBlock: Block = {
  slug: 'contactForm',
  labels: { singular: 'Contact Form', plural: 'Contact Forms' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Start planning your journey',
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'Tell us about your dream honeymoon',
    },
    {
      name: 'destinationOptions',
      type: 'array',
      label: 'Destination Options in Form',
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
      defaultValue: [
        { label: 'Africa', value: 'africa' },
        { label: 'Asia', value: 'asia' },
        { label: 'Central Asia', value: 'central-asia' },
        { label: 'Europe', value: 'europe' },
        { label: 'Indian Subcontinent', value: 'indian-subcontinent' },
        { label: 'Latin America', value: 'latin-america' },
        { label: 'South Pacific', value: 'south-pacific' },
        { label: "Not sure yet", value: 'not-sure' },
      ],
    },
    {
      name: 'submitButtonText',
      type: 'text',
      defaultValue: 'Start planning',
    },
    {
      name: 'successMessage',
      type: 'text',
      defaultValue: "Thank you! We'll be in touch shortly.",
    },
  ],
}
