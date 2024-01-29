import React from 'react'
import { styled } from 'styled-components'

export const ButtonSection = styled.div`
  position: absolute;
  bottom: 12px;
  right: 5px;
  width: 100%;
  padding: 30px 65px;
`

const CheckoutButton = ({
  totalPrice,
  handleCheckout
}: {
  totalPrice: number,
  handleCheckout: () => Promise<void>
}) => {
  return (
    <ButtonSection>
      <div className='total'>
        <h3>Subtotal</h3>
        <h3>${totalPrice}</h3>
      </div>
      <div className='btn-container'>
        <button type='button' className='btn' onClick={handleCheckout}>
          Pay With Stripe
        </button>
      </div>
    </ButtonSection>
  )
}

export default CheckoutButton