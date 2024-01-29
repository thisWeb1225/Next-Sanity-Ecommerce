// Components
import ShopAllPage from "@/modules/ShopAllPage/ShopAllPage"
// Libs
import { client } from "@/lib/client"
// Types
import { ProductsType } from "@/type"

type ShopAllPropsType = {
  products: ProductsType
}

const ShopAll: React.FC<ShopAllPropsType> = ({ products }) => {
  return (
    <ShopAllPage products={products} />
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