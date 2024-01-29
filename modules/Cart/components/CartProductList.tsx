import CartProduct from "./CartProduct"

import { ProductsType } from "@/type"

type CartProductListPropsType = {
  cartItems: ProductsType
}
const CartProductList = ({ cartItems }: CartProductListPropsType) => {
  return (
    <div className='product-container'>
      {cartItems.map((item) => <CartProduct product={item} key={item._id} />)}
    </div>
  )
}

export default CartProductList