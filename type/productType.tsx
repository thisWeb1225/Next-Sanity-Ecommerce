export type ProductType = {
  details: string,
  image: {
    _type: string,
    _key: string,
    asset: {
      _ref: string,
      _type: string,
    }
  }[], 
  name: string, 
  price: number
  slug: {
    current: string
  },
  _id: string,
  quantity: number,
}

export type ProductsType = ProductType[]