import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import Spiner from '../Spiner/Spiner'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'



export default function Cart() {
  let { removeCart,cartProducts,totaPrice,setCartProducts,updaetCartProductCount} = useContext(CartContext)
 


  return (
    <>
     <Helmet>
      <title>Cart</title>
    </Helmet>
      <div className="container ">
     {cartProducts?<div className="bg-main-light my-4 p-3">
          <h3>Shop Cart</h3>
          <h6 className='text-main fw-bold'>Total Cart Price: {totaPrice} EGP</h6>
          {cartProducts.map((item,indx) => {
            return <div key={indx} className="row border-bottom my-3">
              <div className='d-flex justify-content-end    '> 
                <button onClick={() => updaetCartProductCount(item.product.id,item.count + 1)}  className='btn btn-outline-success me-3 '><i className="fa-solid fa-plus "></i></button>
              
             <h3 className='me-3'>{item.count}</h3>
                <button onClick={() => updaetCartProductCount(item.product.id,item.count - 1)}  className='btn btn-outline-success '><i className="fa-solid fa-minus "></i></button>
              </div>
              
              <div className="col-md-1 ">
                <img src={item.product.imageCover} className='w-100' alt="" />
              
              </div>
              
              <div className="col-md-11 ">
         
                <h6>{item.product.title}</h6>
                <h6 className='text-main mx-2 fw-bold'>Item Price :{item.price} EGP</h6>
                <h6 className='text-main fw-bold'>Total : {item.price * item.count} EGP</h6>
                <button onClick={()=>removeCart(item.product.id)} className='text-danger fw-bold product border-0'>Remove <i><i className="fa-solid fa-trash text-danger"></i></i></button>
              </div>
              
            </div>
            

          })}
          <Link to='/payment'>
          <button className='btn btn-primary'> confirm</button>
          </Link>
         
        </div>:<Spiner/>}
      </div>
    </>
  )
}
