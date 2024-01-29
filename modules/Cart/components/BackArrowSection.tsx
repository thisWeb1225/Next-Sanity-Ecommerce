import { SetStateAction } from "react";

// component
import { AiOutlineLeft } from 'react-icons/ai'
import { Text } from "@/components";

// style
import styled, {css} from "styled-components";
import { theme } from "@/styles";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 10px;
  border: none;
  background-color: transparent;
`

const BackArrowSection = ({
  setShowCart,
  totalQuantities
}: {
  setShowCart: React.Dispatch<SetStateAction<boolean>>,
  totalQuantities: number
}) => {
  return (
    <StyledButton
      type="button"
      onClick={() => setShowCart(false)}
    >
      <AiOutlineLeft  color={theme.colors.white}/>
      <Text as="span" color={theme.colors.white}>Your Cart</Text>
      <Text as="span" color={theme.colors.gray1}>{totalQuantities} items</Text>
    </StyledButton>
  )
}

export default BackArrowSection