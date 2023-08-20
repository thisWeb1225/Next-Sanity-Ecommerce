import { useRef } from 'react'

import { AiOutlineLeft } from 'react-icons/ai'
import CartProductList from './components/CartProductList'
import CartWithEmpty from './components/CartWithEmpty'
import { toast } from 'react-hot-toast'

import { useCartStateContext } from '@/context/CartStateProvider'

import getStripe from '@/lib/getStripe'

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { totalPrice, totalQuantities, cartItems, setShowCart } = useCartStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems)
    })

    if (response.status === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe?.redirectToCheckout({ sessionId: data.id });
  }

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
          : (
            <>
              <CartProductList cartItems={cartItems} />
              <div className="cart-bottom">
                <div className='total'>
                  <h3>Subtotal</h3>
                  <h3>${totalPrice}</h3>
                </div>
                <div className='btn-container'>
                  <button type='button' className='btn' onClick={handleCheckout}>
                    Pay With Stripe
                  </button>
                </div>
              </div>
            </>
          )
        }

      </div>
    </div>
  )
}

export default Cart