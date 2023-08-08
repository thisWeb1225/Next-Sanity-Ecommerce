import Link from "next/link"
import { client } from "@/lib/client"
import { Product, FooterBanner, HeroBanner } from "@/components"

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
        <h2>Beset Selling Products</h2>
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