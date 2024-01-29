// Component
import CartLayout from './components/CartLayout'
import BackArrowSection from './components/BackArrowSection'
import CartProductList from './components/CartProductList'
import CartWithEmpty from './components/CartWithEmpty'
import { toast } from 'react-hot-toast'

// Context
import { useCartStateContext } from '@/context/CartStateProvider'

// lib
import getStripe from '@/lib/getStripe'
import { theme } from '@/styles'

const Cart = () => {
  const { totalPrice, totalQuantities, cartItems, setShowCart } = useCartStateContext();

  // handle user's checkout
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
    <CartLayout>
      <BackArrowSection setShowCart={setShowCart} totalQuantities={totalQuantities}></BackArrowSection>

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
    </CartLayout>

  )
}

export default Cart