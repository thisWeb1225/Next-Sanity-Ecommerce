import Link from "next/link";
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from "@/modules";
import { useProductStateContext } from "@/context/ProductStateProvider";
import { useCartStateContext } from "@/context/CartStateProvider";

const Navbar = () => {

  const {showCart, setShowCart, totalQuantities} = useCartStateContext()

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href='/'>HeadPhones</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping></AiOutlineShopping>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart/>}
    </div>
  )
}

export default Navbar