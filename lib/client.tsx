import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ajgkzenq',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  token: process.env.NEXT_PUBILC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) =>{
  return builder.image(source)
}