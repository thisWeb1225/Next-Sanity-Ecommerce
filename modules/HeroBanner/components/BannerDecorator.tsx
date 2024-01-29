// Style
import styled from "styled-components"
import { theme, breakpoints } from "@/styles"
import { motion } from "framer-motion"

// Component
import { Text } from "@/components"

// Type
import { BannerType } from "@/type"

export const DecoratorContainer = styled.section`
  position: relative;
  width: 100%;
`
export const DecoratorBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.black};
  height: 100vh;
`

export const TextContainer = styled.div`
  width: 50%;
  padding: 188px 0px 144px 188px;
  line-height: 1.4;

  @media (width < ${breakpoints.md}) {
    padding: 188px 0;
  }
`

const BannerDecorator = ({
  heroBanner
}: {
  heroBanner: BannerType[0]
}) => {

  const words = heroBanner.desc.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        delay: 0.5,
        staggerChildren: 0.1, 
        delayChildren: 0.005 * i },
    }),
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
    hidden: {
      opacity: 0,
      x: -10,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
  };

  return (
    <DecoratorContainer>
      <TextContainer>
        <Text as="div" color={theme.colors.white} size={theme.fontSize.l}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                style={{ display: "inline-block", marginRight: '6px' }}
                key={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </Text>
      </TextContainer>
      <DecoratorBackground></DecoratorBackground>
    </DecoratorContainer>
  )
}

export default BannerDecorator