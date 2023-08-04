import Image from "next/image"
import {useState} from 'react'
import { useProductStateContext } from "@/context/ProductStateProvider"

import { client, urlFor } from '@/lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from "@/components"

import { ProductType, ProductsType } from "@/type/productType"

type ProductDetailsType = {
  product: ProductType,
  products: ProductsType,
}

const ProductDetails = ({ product, products }: ProductDetailsType) => {

  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);

  const {increaseQty, decreaseQty, qty, productAddToCart} = useProductStateContext();

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={urlFor(image && image[0]).url()}
              className="product-detail-image"
              alt='product image'
              width={400}
              height={400} />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <Image
                src={urlFor(item).url()}
                alt="product image"
                className={i === index ? 'small-image selected-image' : 'small-image'}
                key={i}
                width={100}
                height={100} 
                onMouseEnter={() => setIndex(i)}
                />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decreaseQty}>
                <AiOutlineMinus />
              </span>
              <span className="minus">
                {qty}
              </span>
              <span className="plus" onClick={increaseQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => productAddToCart(product, qty)}>
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>

      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

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

