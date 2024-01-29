import Image from "next/image"
import { urlFor } from "@/lib/client"
import { useProductStateContext } from "@/context/ProductStateProvider"

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons//ti'

import { ProductType } from "@/type"
import { theme } from "@/styles"
import { Text } from "@/components"

type CartProductPropsType = {
  product: ProductType
}

const CartProduct = ({ product }: CartProductPropsType) => {

  const { toggleCartItemQuantity, removeProduct } = useProductStateContext();

  return (
    <div className='product' key={product._id}>
      <Image
        src={urlFor(product?.image[0]).url()}
        width={200}
        height={200}
        alt={product.name}
        className='cart-product-image' />
      <div className="item-desc">
        <div className="flex top">
          <Text color={theme.colors.white} size={theme.fontSize.l} weight={700}>{product.name}</Text>
          <Text color={theme.colors.white} size={theme.fontSize.m}>${product.price}</Text>
        </div>
        <div className="flex bottom">
          <div>
            <p className="quantity-desc">
              <span className="minus" onClick={() => toggleCartItemQuantity(product._id, 'decrement')}>
                <AiOutlineMinus />
              </span>
              <span className="minus">
                {product.quantity}
              </span>
              <span className="plus" onClick={() => toggleCartItemQuantity(product._id, 'increment')}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <button
            type="button"
            className="remove-item"
            title="remove product"
            onClick={() => removeProduct(product._id)}
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct