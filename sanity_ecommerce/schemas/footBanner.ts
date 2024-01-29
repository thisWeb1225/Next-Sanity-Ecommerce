import {defineField} from 'sanity'

const footBanner = {
  name: 'footBanner',
  title: 'Foot Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'smallText',
      title: 'Small Text',
      type: 'string',
    }),
    defineField({
      name: 'midText',
      title: 'Mid Text',
      type: 'string',
    }),
    defineField({
      name: 'largeText1',
      title: 'Large Text1',
      type: 'string',
    }),
    defineField({
      name: 'largeText2',
      title: 'Large Text2',
      type: 'string',
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'string',
    }),
    defineField({
      name: 'saleTime',
      title: 'Sale Time',
      type: 'string',
    }),
  ],
}

export default footBanner
