import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import Spiner from '../Spiner/Spiner'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useReducer } from 'react'



export default function Cart() {
  const [numOfCartItem, setnumOfCartItems] = useState(1);
  const [cart, setCart] = useState(1);
  // const [count,dispatch]=useReducer(reducer,{count:1})
  let { removeCart,cartProducts,totaPrice} = useContext(CartContext)

  const plusAmount = (element, e) => {
    let parent = e.target.parentElement.parentElement;
    parent.querySelector(".amount").innerHTML++;
    const exit = cartProducts.find((item) => {
      return item.id === element.id;
    });
    setCart(
      cartProducts.map((currElem) => {
        return currElem.id === element.id
          ? { ...cartProducts, count: exit.count + 1 }
          : currElem;
      })
    );
  };
  const minusAmount = (e, element) => {
    let parent = e.target.parentElement.parentElement;
    if (parent.querySelector(".amount").innerHTML <= 0) {
      e.preventDefault();
    } else {
      parent.querySelector(".amount").innerHTML--;
      const exit = cartProducts.find((item) => {
        return item.id === element.id;
      });
      setCart(
        cart.map((currElem) => {
          return currElem.id === element.id
            ? { ...exit, count: exit.count - 1 }
            : currElem;
        })
      );
    }
  };
  // let allProductCost = cart.reduce((acc, curr) => {
  //   return parseInt(acc + curr.qty * curr.price);
  // }, 0);

  // const checkOutAllProduct = () => {
  //   setCart([]);
  // };
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
              <div className='d-flex justify-content-end g-1 '> 
                <button onClick={(e) => plusAmount(item, e)}  className='btn btn-outline-success '><i className="fa-solid fa-plus "></i></button>
                
                
                <h3 className='ms-3 text-center amount'>{item.count}</h3>
                {/* <input size='sm' className='qtplus' value='+' onClick={()=>value.decrment(item.product.id)} /> */}
                <button onClick={(e) => minusAmount(item, e)}  className='btn btn-outline-success ms-2 '><i className="fa-solid fa-minus "></i></button>
              </div>

              <div className="col-md-1 ">
                <img src={item.product.imageCover} className='w-100' alt="" />
              
              </div>
              
              <div className="col-md-11 ">
         
                <h6>{item.product.title}</h6>
                <h6 className='text-main mx-2 fw-bold'>{item.price * item.count} EGP</h6>
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
