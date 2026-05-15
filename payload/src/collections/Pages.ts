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
import { InnerHeroBlock } from '../blocks/InnerHeroBlock'
import { TextImageBlock } from '../blocks/TextImageBlock'
import { StatsBlock } from '../blocks/StatsBlock'
import { TeamBlock } from '../blocks/TeamBlock'
import { QuoteImageBlock } from '../blocks/QuoteImageBlock'
import { PrinciplesBlock } from '../blocks/PrinciplesBlock'
import { ImpactProjectsBlock } from '../blocks/ImpactProjectsBlock'
import { CtaDarkBlock } from '../blocks/CtaDarkBlock'

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
        description: 'Use "home" for homepage, "about" for About Us, "positive-impact" for Positive Impact',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        // Homepage blocks
        HeroBlock,
        DestinationsBlock,
        ExperiencesBlock,
        FeaturesBlock,
        ToursBlock,
        JournalBlock,
        ContactFormBlock,
        TestimonialsBlock,
        NewsletterBlock,
        // Inner page blocks
        InnerHeroBlock,
        TextImageBlock,
        StatsBlock,
        TeamBlock,
        QuoteImageBlock,
        PrinciplesBlock,
        ImpactProjectsBlock,
        CtaDarkBlock,
      ],
    },
  ],
}
