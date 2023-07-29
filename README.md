This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Code Journey

- 2023/07/16 開啟 sanity ecommerce 專案
    
    只要在 sanity 開啟專案，並 `npm install sanity` sanity 就能自動根據 ``schemas 來建立 CMS 頁面，schemas 的寫法可以參考官網
    
    ```jsx
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
    
- 2023/07/30 今天寫了 sanity hook
    
    用 sanity client 和 sanity img builder 就可以在前端直接獲取 sanity studio 的資料，
    
    ```jsx
    import { createClient } from "@sanity/client";
    import imageUrlBuilder from '@sanity/image-url'
    
    export const client = createClient({
      projectId: 'myId', // id 要去 sanity 的專案看
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
    ```
    
    唯一要注意的是 img 因為是遠端獲取，必須在 next.config.js 中設定權限
    
    ```jsx
    const nextConfig = {
      reactStrictMode: true,
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
      },
    }
    
    module.exports = nextConfig
    ```
    
    目前遇到的問題是，除了手動設定 type，有沒有辦法直接從 sanity studio schemas 直接獲取 type?