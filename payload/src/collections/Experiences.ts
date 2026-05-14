import type { CollectionConfig } from 'payload'

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'featured', 'updatedAt'],
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
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Active Adventures', value: 'active-adventures' },
        { label: 'New Perspectives', value: 'new-perspectives' },
        { label: 'Romantic Escapes', value: 'romantic-escapes' },
        { label: 'Cultural Immersion', value: 'cultural-immersion' },
        { label: 'Luxury Retreats', value: 'luxury-retreats' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Description',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Full Description',
    },
    {
      name: 'relatedDestinations',
      type: 'relationship',
      relationTo: 'destinations',
      hasMany: true,
    },
  ],
}
