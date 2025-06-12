import { Routes , Route } from "react-router-dom"
import {HomePage , ProductList , ProductDetail , Login , Register  } from "../Pages"
import { CartPage } from "../Pages/Cart/cartPage"
import { ProtectedRoute } from "./ProtectedRoute"
import { OrderPage } from "../Pages/Order/OrderPage"
import { DashboardPage } from "../Pages/Dashboard/DashboardPage"
import { PageNotFound } from "../Pages"




export const AllRoutes = ()=>{

    return (

    <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/products"  element={<ProductList/>}/>
        <Route path= "/products/:id" element={<ProductDetail/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>}/>
        <Route path = "/cart" element={<ProtectedRoute> <CartPage/> </ProtectedRoute>} />
         <Route path = "/orderpage" element={<ProtectedRoute> <OrderPage/> </ProtectedRoute>} />
         <Route path = "/dashboardpage" element={<ProtectedRoute> <DashboardPage/> </ProtectedRoute>} />
          <Route path= "*" element={<PageNotFound/>}/>



    </Routes>
    )
}