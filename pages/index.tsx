import { Product, FooterBanner, HeroBanner } from "@/components"

export default function Home() {
  return (

    <>
      <HeroBanner></HeroBanner>

      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product2'].map((product) => product)}
      </div>

      <FooterBanner></FooterBanner>
    </>
  )
}
