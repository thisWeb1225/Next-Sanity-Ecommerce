// Components
import Image from 'next/image';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { Product } from '@/components';
// Hooks
import { useState, useEffect, useRef } from 'react';
// Context
import { useProductStateContext } from '@/context/ProductStateProvider';
import { useCartStateContext } from '@/context/CartStateProvider';
// Libs
import { client, urlFor } from '@/lib/client';
// Types
import { ProductType, ProductsType } from '@/type';
// Styles
import styled from 'styled-components';
import { theme } from '@/styles';

export const StyledProductDetailContainer = styled.div`
  display: flex;
  gap: 40px;
  margin: 40px;
  margin-top: 180px;
  color: #324d67;
`;

type ProductDetailsType = {
  product: ProductType;
  products: ProductsType;
};

const ProductPage = ({ product, products }: ProductDetailsType) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const topRef = useRef<HTMLDivElement>(null);

  const { increaseQty, decreaseQty, qty, productAddToCart } =
    useProductStateContext();
  const { setShowCart } = useCartStateContext();

  useEffect(function scrollToTop() {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  })

  const handleBuyNow = () => {
    productAddToCart(product, 1);
    setShowCart(true);
  };

  return (
    <>
      <StyledProductDetailContainer ref={topRef}>
        <div>
          <div className="image-container">
            {image && image[index] && (
              <Image
                src={urlFor(image && image[index]).url()}
                className="product-detail-image"
                alt="product image"
                width={400}
                height={400}
              />
            )}
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <Image
                src={urlFor(item).url()}
                alt="product image"
                className={
                  i === index ? 'small-image selected-image' : 'small-image'
                }
                key={item._key}
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
              <span className="minus">{qty}</span>
              <span className="plus" onClick={increaseQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => productAddToCart(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </StyledProductDetailContainer>

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
    </>
  );
};

export default ProductPage;
