# 🎧 Echo Aura ECommerce

## Sanity Studio URL
[https://thisweb-next-sanity-ecommerce-demo.sanity.studio/](https://thisweb-next-sanity-ecommerce-demo.sanity.studio/)


## ✏️ Note

### Sanity

#### 安裝 Sanity

```bash
npm install sanity
```
接著在 sanity 的資料夾裡使用

```bash
npm run dev
```
就能在本地開啟 Sanity Studio (後台)，並且是和遠端 Sanity Studio 是同步的。


#### 建立 schemas

在 schemas 資料夾新稱 models

```jsx
// ./schemas
import {defineField} from 'sanity'

const banner = {
  name: 'banner',
  title: 'Banner',
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
      title: 'ButtonText',
      type: 'string',
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'string',
    }),
    defineField({
      name: 'smallText',
      title: 'SmallText',
      type: 'string',
    }),
    defineField({
      name: 'midText',
      title: 'MidText',
      type: 'string',
    }),
    defineField({
      name: 'largeText1',
      title: 'LargeText1',
      type: 'string',
    }),
    defineField({
      name: 'largeText2',
      title: 'LargeText2',
      type: 'string',
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'string',
    }),
    defineField({
      name: 'saleTime',
      title: 'SaleTime',
      type: 'string',
    }),
  ],
}

export default banner;

```

並且在 `sanity.config.ts` 引入 modal 即可

```ts
// ./sanity.config.ts
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import banner from './schemas/banner'
import product from './schemas/product'
import footer from './schemas/footer'

export default defineConfig({
  name: 'default',
  title: 'Your title',

  projectId: 'projectId',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [banner, product, footer], // 👈 Here
  },
})
```

#### Custom Sanity Hook

用 sanity client 和 sanity img builder 就可以在前端直接獲取 sanity studio 的資料，

```ts
// ./lib/client
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'myId', // id 要去 sanity 的專案看
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) =>{
  return builder.image(source)
}
 ```
    
唯一要注意的是 img 因為是遠端獲取，必須在 next.config.js 中設定權限
    
```jsx
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // 👈 Here
      },
    ],
  },
}

module.exports = nextConfig
```

接著就能在要引入 Data 的地方使用 `client`，並搭配 Sanity 的 query 語法 來 fetch。

```tsx
// Lib
import { client } from '@/lib/client'; // 👈 Here

//...

export default function Home() { /* ... */ }

// ... 

export const getServerSideProps = async () => { 
  const query = '*[_type == "product"]';
  const products = await client.fetch(query); // 👈 Here

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery); // 👈 Here

  const footer = '*[_type == "footer"]';
  const footerData = await client.fetch(footer); // 👈 Here

  return {
    props: { products, bannerData, footerData },
  };
};

```

#### Build & Deploy

使用 Sanity cli 就能直接部屬在雲端。

```bash
sanity build
```

```bash
sanity deploy
```
他會要求選一個網域名稱，不要選到重複的即可。

### Stripe