import { SetStateAction } from 'react'

import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { theme } from '@/styles'
import styled from 'styled-components'
import { Text } from '@/components'

export const StyledButton = styled.button`
  color: ${theme.colors.white};
  width: 100%;
  max-width: 400px;
  padding: 10px 12px;
  border-radius: 15px;
  border: none;
  font-size: 20px;
  margin-top: 10px;
  margin-top: 40px;
  text-transform: uppercase;
  background-color: ${theme.colors.secondary1};
  cursor: pointer;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
`

type CartWithEmptyPropsType = {
  setShowCart: React.Dispatch<SetStateAction<boolean>>
}

const CartWithEmpty = ({ setShowCart }: CartWithEmptyPropsType) => {
  return (
    <div className="empty-cart">
      <AiOutlineShopping size={150} color={theme.colors.white}/>
      <Text color={theme.colors.white}>Your shopping bag is empty</Text>
      <Link href="/">
        <StyledButton
          type="button"
          onClick={() => setShowCart(false)}
        >
          Continue Shopping
        </StyledButton>
      </Link>
    </div>
  )
}

export default CartWithEmpty