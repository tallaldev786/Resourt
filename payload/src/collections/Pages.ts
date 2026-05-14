import type { CollectionConfig } from 'payload'

import { HeroBlock } from '../blocks/HeroBlock'
import { DestinationsBlock } from '../blocks/DestinationsBlock'
import { ExperiencesBlock } from '../blocks/ExperiencesBlock'
import { FeaturesBlock } from '../blocks/FeaturesBlock'
import { ToursBlock } from '../blocks/ToursBlock'
import { JournalBlock } from '../blocks/JournalBlock'
import { ContactFormBlock } from '../blocks/ContactFormBlock'
import { TestimonialsBlock } from '../blocks/TestimonialsBlock'
import { NewsletterBlock } from '../blocks/NewsletterBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Use "home" for the homepage',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        DestinationsBlock,
        ExperiencesBlock,
        FeaturesBlock,
        ToursBlock,
        JournalBlock,
        ContactFormBlock,
        TestimonialsBlock,
        NewsletterBlock,
      ],
    },
  ],
}
