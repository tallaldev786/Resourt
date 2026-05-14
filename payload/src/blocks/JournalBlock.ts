import type { Block } from 'payload'

export const JournalBlock: Block = {
  slug: 'journal',
  labels: { singular: 'Journal Section', plural: 'Journal Sections' },
  fields: [
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Get inspired',
    },
    {
      name: 'articles',
      type: 'relationship',
      relationTo: 'journal',
      hasMany: true,
      label: 'Select Articles to Display',
    },
    {
      name: 'showAll',
      type: 'checkbox',
      label: 'Show all articles (overrides selection)',
      defaultValue: false,
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Number of articles to show',
      defaultValue: 8,
      min: 1,
      max: 20,
    },
  ],
}
