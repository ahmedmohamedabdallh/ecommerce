import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../utils/baseUrl'
import Spiner from '../Spiner/Spiner'
import { Helmet } from 'react-helmet'

export default function AllOrders({user}) {
const[allOrder,setallOrder]=useState(null)
    async function getAllOrders(){
        try {
            const{data}=await axios.get(`${baseUrl}/orders/user/${user.id}`)
            setallOrder(data);
            console.log(data);
        } catch (error) {
            
        }
    }
    useEffect(function(){
        getAllOrders()
    },[])
  return (
    <>
     <Helmet>
      <title>All Order</title>
    </Helmet>
    {allOrder?   <div className='container p-4 '>
       
            
          {allOrder.map((order,indx)=>{ return   <div key={indx} className="row  ">
          
                <div className="order d-flex justify-content-between">
                    <h4 className='mx-3'>Total Price : {order.totalOrderPrice} EGP</h4>
                    <h4 className='mx-3'>Payment : {order.paymentMethodType}</h4>
                </div>
           
           {order.cartItems.map((item ,idx)=>{
            
            return <div key={idx} className="col-md-3   shadow-lg  mb-5 bg-white rounded">
          
      <div className='m-3'>
      <img src={item.product.imageCover} className='w-100' alt="" />
                <h6 className='text-main'>{item.product.name}</h6>
        <p className='fw-bolder ms-2'>{item.product.title}</p>
        <div className='d-flex justify-content-between align-items-center my-4' >
          <span>{item.price} EGP</span>
          <div>
<i className='fas fa-star rating-color'></i>
{item.product.ratingsAverage}
          </div>
        </div>
      </div>
          
               
            </div>

          })}
           
            
            </div>

          })}
        

      </div>:<Spiner/>}
   
    </>
  )
}
