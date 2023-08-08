import { client } from "@/lib/client"
import { Product } from "@/components"

import { ProductType } from "@/type/productType"

type ShopAllPropsType = {
  products: ProductType[]
}

const ShopAll = ({ products }: ShopAllPropsType) => {
  return (
    <div className="shop-all">
      <h1>SHOP ALL <span>{products.length}</span></h1>
      <div className="all-products-container">
        {products.map((product) => <Product key={product._id} product={product} />)}
      </div>
    </div>
  )
}

export default ShopAll

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}