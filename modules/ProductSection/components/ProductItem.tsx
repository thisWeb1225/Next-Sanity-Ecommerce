// Components
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/components';
// Libs
import { urlFor } from '@/lib/client';
// Styles
import styled from 'styled-components';
import theme from '@/styles/theme';
// Type
import { ProductType } from '@/type';
export const StyledSection = styled.section`
  width: 100%;
  height: 100%;
`;

export const StyledProductItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.gap.s};

  & .product-img-wrapper {
    position: relative;
  }

  & .watch-now {
    display: grid;
    place-content: center;
    pointer-events: none;
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: 0.4s ease;
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  filter: blur(0px) brightness(1);
  transition: filter 0.4s ease;

  &:hover {
    filter: blur(8px) brightness(0.5);
    
  }

  &:hover ~ .watch-now {
    opacity: 1;
  }
`;

export const StyledWatchNow = styled.div`
  position: absolute;
  inset: 0;
`;

interface ProductItemProps {
  product: ProductType;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product: { image, name, slug, price },
}) => {
  const productImgUrl = urlFor(image && image[0]).url();

  return (
    <StyledSection>
      <Link href={`/product/${slug.current}`}>
        <StyledProductItem>
          <div className="product-img-wrapper">
            <StyledImageContainer>
              <Image
                src={productImgUrl}
                alt="product image"
                fill
                style={{
                  background: `${theme.colors.gray1}`,
                  borderRadius: '15px',
                }}
              ></Image>
            </StyledImageContainer>
            <div className='watch-now'>
              <Text color={theme.colors.white} weight={700} size={theme.fontSize.xl}>Watch Now</Text>
            </div>
          </div>

          <Text color={theme.colors.primary1} weight={600}>
            {name}
          </Text>
          <Text color={theme.colors.primary1} weight={900}>
            $ {price}
          </Text>
        </StyledProductItem>
      </Link>
    </StyledSection>
  );
};

export default ProductItem;
