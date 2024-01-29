import {defineField} from 'sanity'

const footer = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Footer Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

  ],
}

export default footer

export type footerType = typeof footer
