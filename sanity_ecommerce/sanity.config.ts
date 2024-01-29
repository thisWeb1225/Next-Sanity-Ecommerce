import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import banner from './schemas/banner'
import product from './schemas/product'
import footer from './schemas/footer'

export default defineConfig({
  name: 'default',
  title: 'next-ecommerce-demo',

  projectId: 'ajgkzenq',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [banner, product, footer],
  },
})
