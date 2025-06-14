import { Link } from "react-router-dom"
import { useCart } from "../../../context/CartContext"
export const CartCard = ({product}) => {
  
  const {removeFromCart} = useCart()

  function handleRemove(){

    removeFromCart(product)



  }

 
  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
          <a href="">
            <img className="w-32 rounded" src={product.poster} alt="img" />
          </a>
          <div className="">
            <Link to={`products/${product.id}`}>
              <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
            </Link>            
            <button onClick={handleRemove} className="text-base ml-2 text-red-400">Remove</button>
          </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <span>${product.price}</span>
      </div>
    </div>
  )
}