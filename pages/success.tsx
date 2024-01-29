import { useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

import { useCartStateContext } from '@/context/CartStateProvider'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useCartStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  })

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for the receipt</p>
        <p className='description'>
          If you have any questions, please email
          <a className='email' href="#">
            order@example.com
          </a>
        </p>
        <Link href={'/'}>
          <button type="button" className='btn'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default Success