
import React, { useEffect, useState } from 'react'
import { Offline } from 'react-detect-offline'
import{RouterProvider,createBrowserRouter}from 'react-router-dom'
import Layout from './commponent/Layout/Layout.jsx'
import HomePage from './Pages/HomePage.jsx'
import Products from './commponent/Products/Products.jsx'
import ProductDetails from './commponent/ProductDetails/ProductDetails.jsx'
import CartContextProvider from './context/cartContext.js'
import Cart from './commponent/Cart/Cart.jsx'
import Login from './commponent/Login/Login.jsx'
import Rejaster from './commponent/Rejaster/Rejaster.jsx'
import Brand from './commponent/Brand/Brand.jsx'
import BrPro from './commponent/BrPro/BrPro.jsx'
import jwtDecode from 'jwt-decode'
import ProdectedRoute from './commponent/ProdectedRoute/ProdectedRoute.jsx'
import { ToastContainer } from 'react-toastify';


import PayMent from './commponent/PayMent/PayMent.jsx'
import AllOrders from './commponent/AllOrders/AllOrders.jsx'
import Dss from './commponent/Dss/Dss.jsx'


export default function App() {
  useEffect(()=>{
    if (localStorage.getItem('token')!==null&& user == null) {
      getUserData()
    }
  } , [])
  let [user,setUser]=useState(null)
function getUserData(){
 const userData= jwtDecode(localStorage.getItem('token'))
 console.log(userData);
 setUser(userData)
}
  let router=createBrowserRouter([
    {
     
      path:'',
      
      element: <CartContextProvider><Layout  setUser={setUser} user={user}/></CartContextProvider>,
      children:[
       {index:true,element:<ProdectedRoute><CartContextProvider><HomePage/></CartContextProvider></ProdectedRoute>},
       {path:'login',element:<Login getUserData={getUserData}/>},
       {path:'rejaster',element:<Rejaster/>},
       {path:'products',element:<ProdectedRoute><CartContextProvider><Products/></CartContextProvider></ProdectedRoute>},
       {path:'product-details/:id',element:<ProdectedRoute><CartContextProvider><ProductDetails/></CartContextProvider></ProdectedRoute>},
       {path:'cart',element:<ProdectedRoute><CartContextProvider><Cart/></CartContextProvider></ProdectedRoute>},
       {path:'payment',element:<ProdectedRoute><CartContextProvider><PayMent/></CartContextProvider></ProdectedRoute>},
       {path:'allorders',element:<ProdectedRoute><CartContextProvider><AllOrders user={user}/></CartContextProvider></ProdectedRoute>},
       {path:'brand',element:<ProdectedRoute><CartContextProvider><Brand/></CartContextProvider></ProdectedRoute>},
       {path:'brpro/:id',element:<ProdectedRoute><CartContextProvider><BrPro/></CartContextProvider></ProdectedRoute>},
       
       
      
      ]
    }
  ])

  return (
    <>
    <Offline><Dss/></Offline>
      <ToastContainer theme='colored' />
      <RouterProvider router={router}/>
      
    </>
  )
}

