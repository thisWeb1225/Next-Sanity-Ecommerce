import { client } from "@/lib/client"
import { Product, FooterBanner, HeroBanner } from "@/components"

import { ProductType } from "@/type/productType"

type HomePropsType = {
  products: ProductType[],
  bannerData: any
}

export default function Home({ products, bannerData }: HomePropsType) {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]}></HeroBanner>

      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData[0]}></FooterBanner>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}