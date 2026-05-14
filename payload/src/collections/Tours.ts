import type { CollectionConfig } from 'payload'

export const Tours: CollectionConfig = {
  slug: 'tours',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'duration', 'featured', 'updatedAt'],
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
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'duration',
      type: 'text',
      label: 'Duration (e.g. 10 days)',
    },
    {
      name: 'priceFrom',
      type: 'number',
      label: 'Price From (USD)',
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
      name: 'destinations',
      type: 'relationship',
      relationTo: 'destinations',
      hasMany: true,
    },
    {
      name: 'experiences',
      type: 'relationship',
      relationTo: 'experiences',
      hasMany: true,
    },
    {
      name: 'itinerary',
      type: 'array',
      fields: [
        {
          name: 'day',
          type: 'number',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
