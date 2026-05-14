import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Destinations } from './collections/Destinations'
import { Experiences } from './collections/Experiences'
import { Tours } from './collections/Tours'
import { Journal } from './collections/Journal'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Resourt CMS',
    },
  },
  collections: [
    Users,
    Media,
    Pages,
    Destinations,
    Experiences,
    Tours,
    Journal,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'resourt-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
  cors: [
    'http://localhost:3000',
    process.env.NEXT_PUBLIC_SERVER_URL || '',
  ].filter(Boolean),
  csrf: [
    'http://localhost:3000',
    process.env.NEXT_PUBLIC_SERVER_URL || '',
  ].filter(Boolean),
  plugins: [
    seoPlugin({
      collections: ['pages', 'destinations', 'experiences'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: { doc: { title?: string } }) =>
        doc.title ? `${doc.title} — Resourt` : 'Resourt Honeymoon Travel',
      generateDescription: ({ doc }: { doc: { excerpt?: string } }) =>
        doc.excerpt || 'Bespoke honeymoon experiences crafted for discerning couples.',
    }),
    formBuilderPlugin({
      fields: {
        payment: false,
      },
      formOverrides: {
        access: {
          read: () => true,
        },
      },
      formSubmissionOverrides: {
        access: {
          create: () => true,
        },
      },
    }),
  ],
  upload: {
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB
    },
  },
})
