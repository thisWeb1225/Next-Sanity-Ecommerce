import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import { theme } from '@/styles';

interface RevealTextProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  style?: React.CSSProperties;
}

const RevealText: React.FC<RevealTextProps> = ({
  children,
  width = 'fit-content',
  style = {},
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start('visible');
      slideControl.start('visible')
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ width, position: 'relative', overflow: 'hidden', ...style }}>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          inset: '0px 4px',
          backgroundColor: `${theme.colors.secondary1}`,
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default RevealText;
