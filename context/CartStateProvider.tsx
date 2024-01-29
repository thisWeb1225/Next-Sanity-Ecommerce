import { createContext, useContext, useState, useEffect, SetStateAction } from "react";
import { ProductsType, ProductType } from "@/type";
type CartStateContextType = {
  showCart: boolean,
  setShowCart: React.Dispatch<SetStateAction<boolean>>
  cartItems: ProductsType,
  setCartItems: React.Dispatch<SetStateAction<ProductsType>>
  totalPrice: number,
  setTotalPrice: React.Dispatch<SetStateAction<number>>,
  totalQuantities: number,
  setTotalQuantities: React.Dispatch<SetStateAction<number>>,
  onAdd: (product: ProductType, quantity: number) => void,
}
const CartStateContext = createContext<CartStateContextType>({
  showCart: false,
  setShowCart: () => { },
  cartItems: [],
  setCartItems: () => { },
  totalPrice: 0,
  setTotalPrice: () => { },
  totalQuantities: 0,
  setTotalQuantities: () => { },
  onAdd: () => { },
});

type CartStateProviderPropsType = {
  children: React.ReactNode
}
export const CartStateProvider = (({ children }: CartStateProviderPropsType) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<ProductsType>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  const onAdd = (product: ProductType, productQuantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    // if item in the cart, add quantity and operate the total price
    if (checkProductInCart) {
      const updateCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + productQuantity
        }
        else return cartProduct
      })

      setCartItems(updateCartItems);

      // if item not in the cart, add the product to the cart
    } else {
      product.quantity = productQuantity;
      setCartItems([...cartItems, { ...product }])
    }

    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * productQuantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + productQuantity);
  }

  return (
    <CartStateContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        onAdd,
      }}
    >
      {children}
    </CartStateContext.Provider>
  )
})

export const useCartStateContext = () => useContext(CartStateContext);