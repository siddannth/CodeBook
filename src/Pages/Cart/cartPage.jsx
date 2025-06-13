import { useCart } from "../../context/CartContext"
import {CartList} from "./components/CartList"
import {CartEmpty} from "./components/CartEmpty"

export const CartPage = () => {

  const {cartList} = useCart()

    
  return (
    <main>  
        {cartList.length ? <CartList/> : <CartEmpty/> }
    </main>
  )
}