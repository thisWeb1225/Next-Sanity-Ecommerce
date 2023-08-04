export type ProductType = {
  details: string,
  image: any[], 
  name: string, 
  price: number
  slug: {
    current: string
  },
  _id: string,
  quantity: number,
}

export type ProductsType = ProductType[]