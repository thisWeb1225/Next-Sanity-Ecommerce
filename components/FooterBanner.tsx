// Components
import Link from 'next/link';
import Image from 'next/image';
import Text from './Text';
import RevealText from './RevealText';
// Libs
import { urlFor } from '@/lib/client';
// Styles
import styled from 'styled-components';
import theme from '@/styles/theme';
// Types
import { FooterType } from '@/type';

export const StyledSection = styled.section`
  width: 100%;
  min-height: 780px;
  position: relative;
`;

export const StyledImgContainer = styled.div`
  min-height: 120dvh;
  position: relative;
`;

export const StyledImg = styled(Image)`
  z-index: 0;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0) 0%,
    transparent 80%,
    transparent 100%
  );
`;

type FooterBannerPropsType = {
  footerBannerData: FooterType[0];
};

const FooterBanner: React.FC<FooterBannerPropsType> = ({
  footerBannerData,
}) => {
  const { title, image, desc } = footerBannerData;

  const bannerUrl = urlFor(image).width(1920).url();

  return (
    <StyledSection>
      <StyledImgContainer>
        <StyledImg src={bannerUrl} alt="Footer Banner" fill />
        <StyledOverlay />
      </StyledImgContainer>
      <RevealText
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}
      >
        <Text color={theme.colors.white} size={theme.fontSize.xxl}>
          {title}
        </Text>
      </RevealText>
    </StyledSection>
  );
};

export default FooterBanner;
