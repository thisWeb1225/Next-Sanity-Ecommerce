// Components
import ProductItem from "./components/ProductItem";
// Styles
import styled from "styled-components"
import theme from "@/styles/theme"
import { breakpoints } from '@/styles';
// Types
import { ProductsType } from "@/type"

type ShopAllPropsType = {
  products: ProductsType
}

export const StyledSection = styled.section`
  margin: 128px ${theme.gap.xxl};
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (width < ${breakpoints.md}) {
    margin: 128px ${theme.gap.m};
  }
`

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-columns: minmax(250px, auto);
  grid-auto-rows: minmax(250px, auto);
  align-items: center;
  gap: ${theme.gap.l};
  margin-bottom: 64px;
`;


  const ShopAllPage: React.FC<ShopAllPropsType> = ({ products }) => {
  return (
    <StyledSection>
      <h1>Products <span>{products.length}</span></h1>
      <StyledContainer>
        {products.map((product) => <ProductItem key={product._id} product={product} />)}
      </StyledContainer>
    </StyledSection>
  )
}

export default ShopAllPage
