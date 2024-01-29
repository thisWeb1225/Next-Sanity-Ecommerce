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
export const StyledProductItemContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledProductItemContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.gap.s};
`;

export const StyledImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  transform: scale(1);
  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1.02);
  }
`;

interface ProductItemProps {
  product: ProductType;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product: { image, name, slug, price },
}) => {
  const productImgUrl = urlFor(image && image[0]).url();

  return (
    <StyledProductItemContainer>
      <Link href={`/product/${slug.current}`}>
        <StyledProductItemContent>
          <StyledImageContainer>
            <Image src={productImgUrl} alt="product image" fill style={{background: `${theme.colors.gray1}`, borderRadius: '15px'}}></Image>
          </StyledImageContainer>
          <Text color={theme.colors.secondary1} weight={700}>
            {name}
          </Text>
          <Text color={theme.colors.black} weight={900}>
            $ {price}
          </Text>
        </StyledProductItemContent>
      </Link>
    </StyledProductItemContainer>
  );
};

export default ProductItem;
