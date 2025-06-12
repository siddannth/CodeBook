import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducer/CartReducer"

    const CartInitialState = {

        cartList :[],
        total : 0
    }

    const CartContext = createContext(CartInitialState)

    export const CartProvider = ({children})=> {

        const [state,dispatch] = useReducer(CartReducer , CartInitialState )

       

        function addToCart(product)
        {
            const updatedCartList = state.cartList.concat(product)
            const updatedTotal = state.total + product.price

            dispatch(
                {
                    type: "ADD_TO_CART",
                    payload: {
                        products : updatedCartList,
                        total : updatedTotal
                    }
                }
            )

        }

         function clearCart()
        {
            

            dispatch(
                {
                    type: "CLEAR_CART",
                    payload: {
                        products : [],
                        total : 0
                    }
                }
            )

        }

         function removeFromCart(product)
        {
            const updatedCartList = state.cartList.filter(item=> item.id !== product.id)
             const updatedTotal = state.total - product.price

            dispatch(
                {
                    type: "REMOVE_FROM_CART",
                    payload: {
                        products : updatedCartList,
                        total : updatedTotal
                    }
                }
            )

        }

         const value = {
            cartList : state.cartList,
            total : state.total ,
            addToCart,
            removeFromCart,
            clearCart,


        }



        return(

            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>


        )


    }

    export const useCart = ()=> useContext(CartContext)


