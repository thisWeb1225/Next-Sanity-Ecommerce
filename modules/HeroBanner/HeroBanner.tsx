import BannerDecorator from "./components/BannerDecorator"
import BannerContent from "./components/BannerContent"

import { BannerType } from "@/type"

const HeroBanner = ({ heroBanner }: {
  heroBanner: BannerType[0]
}) => {
  return (
    <>
      <BannerDecorator heroBanner={heroBanner}></BannerDecorator>
      <BannerContent heroBanner={heroBanner}></BannerContent>
    </>
  )
}

export default HeroBanner