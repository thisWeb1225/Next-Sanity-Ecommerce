import Link from 'next/link';

// Component
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from '@/modules';
import { useCartStateContext } from '@/context/CartStateProvider';
import Text from './Text';

// Style
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { theme } from '@/styles';
import { motion } from 'framer-motion';

export const NavbarContainer = styled.nav`
  position: fixed;
  background-color: ${(props) => `${props.theme.colors.black}`};
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => `${props.theme.gap.l} ${props.theme.gap.xl}`};
`;

export const NavBarCartBtn = styled(motion.button)`
  font-size: ${(props) => props.theme.fontSize.l};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  position: relative;
  transition: transform 0.4s ease;
  border: none;
  background-color: transparent;
`;

export const StyledCartItemQty = styled.span`
  position: absolute;
  right: -8px;
  top: -8px;
  font-size: 12px;
  color: #eee;
  background-color: ${(props) => props.theme.colors.secondary1};
  padding: 4px 8px;
  border-radius: 50%;
  text-align: center;
  font-weight: 600;
`;

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useCartStateContext();

  const container = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <NavbarContainer>
      <Text
        as="div"
        color={theme.colors.white}
        size={theme.fontSize.l}
        weight={400}
      >
        <motion.div variants={container} initial="hidden" animate="visible">
          <Link href="/">🎧 Echo Aura</Link>
        </motion.div>
      </Text>

      <NavBarCartBtn onClick={() => setShowCart(true)}>
        <AiOutlineShopping></AiOutlineShopping>
        <StyledCartItemQty>{totalQuantities}</StyledCartItemQty>
      </NavBarCartBtn>

      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;
