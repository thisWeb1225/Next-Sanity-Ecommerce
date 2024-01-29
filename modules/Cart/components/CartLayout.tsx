import { useRef } from 'react';

// Style
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CartWrapper = styled(motion.div)`
  width: 100vw;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

const CartContainer = styled(motion.div)`
  height: 100vh;
  width: 600px;
  max-width: 100%;
  background-color: ${prop => prop.theme.colors.black};
  float: right;
  padding: 28px 12px;
  position: relative;
`;

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  const cartRef = useRef<HTMLDivElement>(null);

  return (
    <CartWrapper
      ref={cartRef}
      initial={{ background: 'rgba(0,0,0,0)' }}
      animate={{ background: 'rgba(0,0,0,0.5)' }}
      transition={{
        type: 'ease',
        duration: 0.2,
      }}
      exit={{ background: 'rgba(0,0,0,0)' }}
    >
      <CartContainer
        initial={{ translateX: '100%' }}
        animate={{ translateX: 0 }}
        transition={{
          type: 'ease',
          duration: 0.2,
        }}
        exit={{ translateX: '100%' }}
      >
        {children}
      </CartContainer>
    </CartWrapper>
  );
};

export default CartLayout;
