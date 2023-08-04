import Link from "next/link"
import Image from "next/image"

import { footerBannerType } from "@/type/footerBannerType"
import { urlFor } from "@/lib/client"

type FooterBannerPropsType = {
  footerBanner: footerBannerType
}

// {footerBanner} : FooterBannerPropsType

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc } }: FooterBannerPropsType) => {

  const footerImgUrl = urlFor(image).width(555).url()

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>

      <Image 
        src={footerImgUrl}
        className="footer-banner-image"
        alt="footer banner"
        width={555}
        height={555}
        priority={true}
      />
    </div>
  )
}

export default FooterBanner