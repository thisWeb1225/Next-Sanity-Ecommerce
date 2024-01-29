// Components
import ProductPage from "@/modules/ProductPage/ProductPage"
// Libs
import { client } from '@/lib/client'
// Types
import { ProductType } from "@/type"

type ProductDetailsType = {
  product: ProductType,
  products: ProductType[],
}

const ProductDetails = ({ product, products }: ProductDetailsType) => {
  return (
    <ProductPage product={product} products={products}/>
  )
}

export default ProductDetails

// Fetching Data
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`

  const products = await client.fetch(query);

  const paths = products.map((product: any) => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

type ProductStaticPropsType = {
  params: {
    slug: any
  }
}
export const getStaticProps = async ({ params: { slug } }: ProductStaticPropsType) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products }
  }
}

