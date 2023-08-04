import { SetStateAction } from 'react'

import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

type CartWithEmptyPropsType = {
  setShowCart: React.Dispatch<SetStateAction<boolean>>
}

const CartWithEmpty = ({ setShowCart }: CartWithEmptyPropsType) => {
  return (
    <div className="empty-cart">
      <AiOutlineShopping size={150} />
      <h3>Your shopping bag is empty</h3>
      <Link href="/">
        <button
          type="button"
          onClick={() => setShowCart(false)}
          className='btn'
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  )
}

export default CartWithEmpty