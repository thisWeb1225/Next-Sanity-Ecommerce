import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { urlFor } from '@/lib/client'

import styled from 'styled-components'
import { Button, Text, Heading } from '@/components'
import theme from '@/styles/theme'

export const HeroBannerContainer = styled.section`
  padding: 96px 32px;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.gray1};
  border-radius: 15px;
  position: relative;
  min-height: 500px;
  line-height: 1;
`

export const Left = styled.div`
  flex: 1;
`
export const Right = styled.div`
  flex: 1;
`

export const BannerImg = styled(Image)`
  object-fit: cover;
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
        <Heading color={theme.colors.secondary1} size={theme.fontSize.xxl}>{heroBanner.midText}</Heading>
        <Heading as="bannerTitle">{heroBanner.largeText1}</Heading>
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