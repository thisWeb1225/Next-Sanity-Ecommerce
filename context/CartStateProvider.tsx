import { createContext, useContext, useState, useEffect, SetStateAction } from "react";
import { ProductType } from "@/type/productType";

type CartStateContextType = {
  showCart: boolean,
  setShowCart: React.Dispatch<SetStateAction<boolean>>
  cartItems: ProductType[],
  totalPrice: number,
  totalQuantities: number,
  onAdd: (product: ProductType, quantity: number) => void,
}
const CartStateContext = createContext<CartStateContextType>({
  showCart: false,
  setShowCart: () => { },
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  onAdd: () => { },
});

type CartStateProviderPropsType = {
  children: React.ReactNode
}
export const CartStateProvider = (({ children }: CartStateProviderPropsType) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
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
        totalPrice,
        totalQuantities,
        onAdd,
      }}
    >
      {children}
    </CartStateContext.Provider>
  )
})

export const useCartStateContext = () => useContext(CartStateContext);