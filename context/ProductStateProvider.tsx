import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { ProductType } from "@/type/productType";
import { useCartStateContext } from "./CartStateProvider";

type ProductStateContextType = {
  qty: number,
  increaseQty: () => void,
  decreaseQty: () => void,
  productAddToCart: (product: ProductType, quantity: number) => void,
}
const ProductStateContext = createContext<ProductStateContextType>({
  qty: 1,
  increaseQty: () => { },
  decreaseQty: () => { },
  productAddToCart: () => { },
});

type ProductStateProviderPropsType = {
  children: React.ReactNode
}
export const ProductStateProvider = (({ children }: ProductStateProviderPropsType) => {

  const { onAdd } = useCartStateContext()
  const [qty, setQty] = useState(1);

  const productAddToCart = (product: ProductType, quantity: number) => {
    // onAdd is from CartStateContext for add the product to cart.
    onAdd(product, quantity)
    toast.success(`${quantity} ${product.name} added to the cart`)
  }

  const increaseQty = () => {
    setQty(prevQty => prevQty + 1)
  }

  const decreaseQty = () => {
    setQty(prevQty => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    })
  }

  return (
    <ProductStateContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        productAddToCart,
      }}
    >
      {children}
    </ProductStateContext.Provider>
  )
})

export const useProductStateContext = () => useContext(ProductStateContext);