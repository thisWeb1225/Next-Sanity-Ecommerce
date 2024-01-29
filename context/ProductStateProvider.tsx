import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { ProductType } from "@/type";
import { useCartStateContext } from "./CartStateProvider";

type ProductStateContextType = {
  qty: number,
  increaseQty: () => void,
  decreaseQty: () => void,
  productAddToCart: (product: ProductType, quantity: number) => void,
  toggleCartItemQuantity: (id: string, action: 'increment' | 'decrement') => void,
  removeProduct: (id: string) => void,
}
const ProductStateContext = createContext<ProductStateContextType>({
  qty: 1,
  increaseQty: () => { },
  decreaseQty: () => { },
  productAddToCart: () => { },
  toggleCartItemQuantity: () => { },
  removeProduct: () => { },
});

type ProductStateProviderPropsType = {
  children: React.ReactNode
}
export const ProductStateProvider = (({ children }: ProductStateProviderPropsType) => {

  const { onAdd, cartItems, setCartItems, setTotalPrice, setTotalQuantities } = useCartStateContext()
  const [qty, setQty] = useState(1);


  const productAddToCart = (product: ProductType, quantity: number) => {
    // onAdd is from CartStateContext for add the product to cart.
    onAdd(product, quantity)
    toast.success(`${quantity} ${product.name} added to the cart`)
  }

  const removeProduct = (id: string) => {
    const foundProduct = cartItems.find((item) => item._id === id)!;
    const newCartItems = cartItems.filter((item) => item._id !== id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }
  
  const toggleCartItemQuantity = (id: string, action: 'increment' | 'decrement') => {

    const foundProduct = cartItems.find(item => item._id === id)!;
    
    if (action === 'increment') {
      const updatedCartItems = cartItems.map((item) => item._id === id ? { ...item, quantity: item.quantity + 1 } : item);
      setCartItems(updatedCartItems)
      setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);

    } else if (action === 'decrement') {
      if (foundProduct.quantity > 1) {
        const updatedCartItems = cartItems.map((item) => item._id === id ? { ...item, quantity: item.quantity - 1 } : item);
        setCartItems(updatedCartItems);
        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      } else {
        removeProduct(id)
      }
    }
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
        toggleCartItemQuantity,
        removeProduct,
      }}
    >
      {children}
    </ProductStateContext.Provider>
  )
})

export const useProductStateContext = () => useContext(ProductStateContext);