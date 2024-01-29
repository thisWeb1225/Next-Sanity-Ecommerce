import React from 'react';
import Image from 'next/image';

// Lib
import { urlFor } from '@/lib/client';

// Style
import styled, { keyframes } from 'styled-components';
import theme from '@/styles/theme';
import { breakpoints } from '@/styles';

// Component
import { Text, Heading } from '@/components';

// Type
import { BannerType } from '@/type';

export const BannerContentContainer = styled.section`
  position: relative;
  margin: ${(props) => `0 ${props.theme.gap.xxl}`};
  background-color: ${(props) => props.theme.colors.gray1};
  overflow-x: hidden;
  border-radius: 0.8rem;
  height: 120vh;

  @media (width < ${breakpoints.md}) {
    margin: 0 16px;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  height: 100%;
  /* white-space: nowrap; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 64px;

  @media (width < ${breakpoints.sm}) {
    max-width: 100%;
    gap: 8px;
    text-align: center;
    white-space: normal;
  }
`;
export const BannerImg = styled(Image)`
  object-fit: cover;
  object-position: left;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;


const BannerContent = ({ heroBanner }: { heroBanner: BannerType[0] }) => {
  const bannerUrl = urlFor(heroBanner.image).width(1920).url();

  return (
    <BannerContentContainer>
      <BannerImg
        src={bannerUrl}
        quality={100}
        layout="fill"
        priority={true}
        alt="banner image"
      />

      <TextContainer>
        <Text color={theme.colors.white} sx={{ marginBottom: '32px' }}>
          {heroBanner.smallText}
        </Text>
        <Heading
          color={theme.colors.white}
          size={{ base: theme.fontSize.banner, md: theme.fontSize.xl }}
          sx={{textShadow: '4px 4px 4px #00000050'}}
        >
          {heroBanner.midText}
        </Heading>
      </TextContainer>
    </BannerContentContainer>
  );
};

export default BannerContent;
