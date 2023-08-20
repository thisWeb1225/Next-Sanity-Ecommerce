import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { urlFor } from '@/lib/client'

import styled from 'styled-components'
import { Button, Text, Heading } from '@/components'
import theme from '@/styles/theme'
import { breakpoints } from '@/styles'

export const HeroBannerContainer = styled.section`
  padding: 96px 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  background-color: ${props => props.theme.colors.gray1};
  border-radius: 15px;
  position: relative;
  min-height: 500px;
  line-height: 1;
`

export const Left = styled.div`
  flex: 1 1 240px;
  align-self: center;

  @media (width < ${breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`
export const Right = styled.div`
  flex: 1 1 240px;
  display: flex;
  justify-content: center;
`

export const BannerImg = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const BannerDesc = styled.div`
  position: absolute;
  right: 5%;
  bottom: 5%;
`

const HeroBanner = ({ heroBanner }: {
  heroBanner: any
}) => {

  const bannerUrl = urlFor(heroBanner.image).width(555).url()

  return (
    <HeroBannerContainer>
      <Left>
        <Text weight={500}>{heroBanner.smallText}</Text>
        <Heading color={theme.colors.secondary1} size={{base: theme.fontSize.xxl, md: theme.fontSize.xl}}>{heroBanner.midText}</Heading>
        <Heading color={theme.colors.white} size={{base: theme.fontSize.banner, md: theme.fontSize.xxl}}>{heroBanner.largeText1}</Heading>
        <Link href={`/product/${heroBanner.product}`}>
          <Button>{heroBanner.buttonText}</Button>
        </Link>
      </Left>

      <Right>
        <BannerImg src={bannerUrl} width={500} height={500} priority={true} alt="banner image" />
          <BannerDesc>
            <Text>{heroBanner.desc}</Text>
          </BannerDesc>
      </Right>

    </HeroBannerContainer>
  )
}

export default HeroBanner