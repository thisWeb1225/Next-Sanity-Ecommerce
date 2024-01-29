// Components
import Link from 'next/link';
import { Heading } from '@/components';
import ProductItem from './components/ProductItem';
// Styles
import styled from 'styled-components';
// Type
import { ProductType } from '@/type';
import { theme } from '@/styles';

export const StyledSection = styled.section`
  background-color: ${(props) => props.theme.colors.black};
  padding: ${(props) => props.theme.gap.xxl};
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-columns: minmax(250px, auto);
  grid-auto-rows: minmax(250px, auto);
  align-items: center;
  gap: 24px;
  margin-bottom: 64px;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  text-align: center;
  display: inline-block;
`;

export const StyledBtn = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 12px 12px;
  margin-block: ${(props) => props.theme.gap.xl};
  border-radius: 8px;
  border: none;
  font-size: ${(props) => props.theme.fontSize.l};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray1};
  }
`;

interface ProductSectionProps {
  products: ProductType[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ products }) => {
  return (
    <StyledSection>
      <Heading
        as={'h2'}
        color={theme.colors.primary1}
        size={theme.fontSize.xl}
        weight={700}
        sx={{ marginBottom: '64px' }}
      >
        PRODUCTS
      </Heading>
      <StyledContainer>
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </StyledContainer>

      <StyledLink href="/shop-all">
        <StyledBtn type="button">Shop All</StyledBtn>
      </StyledLink>
    </StyledSection>
  );
};

export default ProductSection;
