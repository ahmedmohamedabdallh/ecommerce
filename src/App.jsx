import jwtDecode from 'jwt-decode'
import React, { useContext, useEffect, useState } from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './commponent/Layout/Layout.jsx'
import HomePage from './Pages/HomePage.jsx'
import CartContextProvider, { CartContext } from './context/cartContext.js'
import ProdectedRoute from './commponent/ProdectedRoute/ProdectedRoute.jsx'
import Login from './commponent/Login/Login.jsx'
import Rejaster from './commponent/Rejaster/Rejaster.jsx'
import Products from './commponent/Products/Products.jsx'
import Brand from './commponent/Brand/Brand.jsx'
import BrPro from './commponent/BrPro/BrPro.jsx'
import ProductDetails from './commponent/ProductDetails/ProductDetails.jsx'
import Cart from './commponent/Cart/Cart.jsx'
import PayMent from './commponent/PayMent/PayMent.jsx'
import AllOrders from './commponent/AllOrders/AllOrders.jsx'
import { ToastContainer } from 'react-toastify'
import { Offline } from 'react-detect-offline'
import Dss from './commponent/Dss/Dss.jsx'
import WishList from './commponent/WishList/WishList.jsx'
export default function App() {
  useEffect(() => {
    if (localStorage.getItem('token') !== null && user == null) {
      getUserData()
    }
  }, [])
  let {numOfCartItem}=useContext(CartContext)
  let [user, setUser] = useState(null)
  function getUserData() {
    const userData = jwtDecode(localStorage.getItem('token'))
    console.log(userData);
    setUser(userData)
  }
 

  let routers =createHashRouter([
    {path:'/',element: <CartContextProvider><Layout numOfCartItem={numOfCartItem} setUser={setUser} user={user}/></CartContextProvider>,children:[
      { index: true, element: <ProdectedRoute><CartContextProvider><HomePage/></CartContextProvider></ProdectedRoute> },
      { path: 'login', element: <Login getUserData={getUserData} /> },
        { path:'rejaster',element:<Rejaster/> },
        { path: 'products', element: <ProdectedRoute><CartContextProvider><Products/></CartContextProvider></ProdectedRoute> },
        { path: 'product-details/:id', element: <ProdectedRoute><CartContextProvider><ProductDetails/></CartContextProvider></ProdectedRoute> },
        { path: 'cart', element: <ProdectedRoute><CartContextProvider><Cart/></CartContextProvider></ProdectedRoute> },
        { path: 'payment', element: <ProdectedRoute><CartContextProvider><PayMent/></CartContextProvider></ProdectedRoute> },
        { path: 'wishlist', element: <ProdectedRoute><CartContextProvider><WishList/></CartContextProvider></ProdectedRoute> },
        { path: 'allorders', element: <ProdectedRoute><CartContextProvider><AllOrders user={user} /></CartContextProvider></ProdectedRoute> },
        { path: 'brand', element: <ProdectedRoute><CartContextProvider><Brand/></CartContextProvider></ProdectedRoute> },
        { path: 'brpro/:id', element: <ProdectedRoute><CartContextProvider><BrPro/></CartContextProvider></ProdectedRoute> },
    
        
     
      ]
    }
  ])
  return (
    <>
   
    <Offline><Dss /></Offline>
    
      <ToastContainer theme='colored' />
      
      <RouterProvider router={routers} />
      
    </>
  )
}
