import CartProduct from "./CartProduct"

import { ProductType } from "@/type/productType"

type CartProductListPropsType = {
  cartItems: ProductType[]
}
const CartProductList = ({ cartItems }: CartProductListPropsType) => {
  return (
    <div className='product-container'>
      {cartItems.map((item) => <CartProduct product={item} key={item._id} />)}
    </div>
  )
}

export default CartProductList