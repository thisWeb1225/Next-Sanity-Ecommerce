import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { urlFor } from '@/lib/client'

type HeroBannerType = {
  heroBanner: any
}

const HeroBanner = ({heroBanner}: HeroBannerType) => {

  const bannerUrl = urlFor(heroBanner.image).width(555).url()

  return (
    <div className="hero-banner-container">
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1> 
        <Image src={bannerUrl} width={555} height={555} alt="headphones" className='hero-banner-image'/>

        <div>
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner