import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { CartContext } from '../../context/cartContext'


export default function Layout({ user , setUser}) {
  let {numOfCartItem,setnumOfCartItems}=useContext(CartContext)
  let navigate = useNavigate()
  function logOut() {
    localStorage.removeItem("token")
    setUser(null)
    navigate('/login')
    
  }
  return (
    <>
      <Navbar setnumOfCartItems={setnumOfCartItems} numOfCartItem={numOfCartItem} logOut={logOut}   user={user} />
      
      <Outlet></Outlet>
      
      
    </>
  )
}
