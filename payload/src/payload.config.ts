import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Destinations } from './collections/Destinations'
import { Experiences } from './collections/Experiences'
import { Tours } from './collections/Tours'
import { Journal } from './collections/Journal'

export default buildConfig({
  admin: {
    user: Users.slug,
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
  secret: process.env.PAYLOAD_SECRET || 'resourt-secret-key-change-me',
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/resourt-cms',
  }),
  cors: ['http://localhost:3000', 'http://localhost:3001'],
  csrf: ['http://localhost:3000', 'http://localhost:3001'],
})
