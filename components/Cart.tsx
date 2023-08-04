import { useRef } from 'react'

import { AiOutlineLeft } from 'react-icons/ai'
import CartProductList from './CartProductList'
import CartWithEmpty from './CartWithEmpty'

import { useCartStateContext } from '@/context/CartStateProvider'

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { totalPrice, totalQuantities, cartItems, setShowCart } = useCartStateContext();

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className='cart-container'>
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">{totalQuantities} items</span>
        </button>

        {cartItems.length < 1
          ? <CartWithEmpty setShowCart={setShowCart} />
          : <CartProductList cartItems={cartItems} />
        }

        <div className="cart-bottom"> 
          <div className='total'>
            <h3>Subtotal</h3>
            <h3>${totalPrice}</h3>
          </div>
          <div className='btn-container'>
            <button type='button' className='btn'>
              Pay With Stripe
            </button>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Cart