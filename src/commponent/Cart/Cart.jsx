import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import Spiner from '../Spiner/Spiner'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useReducer } from 'react'


 const reducer = (state,action) => {
  switch (action) {
    case 'plus':
      return state+1
      case 'minus':
        return state-1
        
  }
}
export default function Cart() {
  const [numOfCartItem, setnumOfCartItems] = useState(1);
  const [count,dispatch]=useReducer(reducer,{count:1})
  let { removeCart,cartProducts,totaPrice} = useContext(CartContext)

  
   
  
  const [totalPrice, setTotalPrice] = useState([])
function decrment(id) {
 setnumOfCartItems=numOfCartItem+1
}
function incrment(id) {
  
}
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
              {/* <div className='d-flex justify-content-end g-1 '> 
                <button value='+' onClick={()=>decrment(item.product.id)} index = {indx} className='btn btn-outline-success '><i className="fa-solid fa-plus "></i></button>
                
                
                <h3 className='ms-3 text-center'>{item.count}</h3>
                <input size='sm' className='qtplus' value='+' onClick={()=>value.decrment(item.product.id)} />
                <button value='-' onClick={()=>incrment(item.product.id)}  className='btn btn-outline-success ms-2 '><i className="fa-solid fa-minus "></i></button>
              </div> */}

              <div className="col-md-1 ">
                <img src={item.product.imageCover} className='w-100' alt="" />
              
              </div>
              
              <div className="col-md-11 ">
         
                <h6>{item.product.title}</h6>
                <h6 className='text-main mx-2 fw-bold'>{item.price} EGP</h6>
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
