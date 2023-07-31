import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '@/lib/client';

import { ProductType } from '@/type/productType';

type ProductPropsType = {
  product: ProductType
}

const Product = ({ product: { image, name, slug, price } }: ProductPropsType) => {

  const productImgUrl = urlFor(image && image[0]).url()
  console.log(productImgUrl)

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <Image src={productImgUrl} alt="product-image" width={250} height={250}></Image>
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product