// Lib
import { client } from '@/lib/client';

// Component
import Link from 'next/link';
import { FooterBanner, Heading, Footer } from '@/components';
import { HeroBanner } from '@/modules';
import ProductSection from '@/modules/ProductSection/ProductSection';
import RevealText from '@/components/RevealText';

// Style
import theme from '@/styles/theme';
import styled from 'styled-components';

// Type
import type { BannerType, ProductType, FooterType } from '@/type';

interface HomePropsType {
  products: ProductType[];
  bannerData: BannerType;
  footBannerData?: any;
  footerData: FooterType;
}

export const StyledProductHeading = styled.div`
  display: flex;
  justify-content: center;
  margin: 156px 0px;
`;

export const StyledProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  margin-bottom: 64px;
`;

export default function Home({
  products,
  bannerData,
  footerData,
}: HomePropsType) {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]}></HeroBanner>
      <StyledProductHeading>
        <RevealText>
          <Heading
            as="h2"
            color={theme.colors.black}
            size={theme.fontSize.xl}
            weight={700}
          >
            Speakers of many variations
          </Heading>
        </RevealText>
      </StyledProductHeading>
      <ProductSection products={products.slice(0, 8)} />
      <FooterBanner footerBannerData={footerData[0]}></FooterBanner>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const footBannerQuery = '*[_type == "footBanner"]';
  const footBannerData = await client.fetch(footBannerQuery);

  const footer = '*[_type == "footer"]';
  const footerData = await client.fetch(footer);

  return {
    props: { products, bannerData, footBannerData, footerData },
  };
};
