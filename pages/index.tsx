import Link from "next/link"
import { client } from "@/lib/client"
import { Product, FooterBanner, Heading } from "@/components"
import { HeroBanner } from "@/modules"
import theme from "@/styles/theme"

import { ProductType } from "@/type/productType"

type HomePropsType = {
  products: ProductType[],
  bannerData: any,
  footBannerData: any
}

export default function Home({ products, bannerData, footBannerData }: HomePropsType) {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]}></HeroBanner>

      <div className="products-heading">
        <Heading as="h2" color={theme.colors.secondary1}>Beset Selling Products</Heading>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <Link href="/shop-all" className="shop-all-btn">
        <button type="button" className="btn">Shop All</button> </Link>

      <FooterBanner footerBanner={footBannerData[0]}></FooterBanner>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const footBannerQuery = '*[_type == "footBanner"]';
  const footBannerData = await client.fetch(footBannerQuery);

  return {
    props: { products, bannerData, footBannerData }
  }
}