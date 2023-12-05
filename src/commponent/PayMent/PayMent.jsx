import axios from 'axios';
import React, { useContext } from 'react'
import { baseUrl } from '../../utils/baseUrl';
import { CartContext } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function PayMent() {

const{cartId}=useContext(CartContext)
const nav =useNavigate()
let validationSchema= Yup.object({
      
  email:Yup.string().email().required(),
  password:Yup.string().required(),
 
})

 async function confirmCashOrder(){
try {
 const{data}=await axios.post(`${baseUrl}/orders/${cartId}`,{
    "shippingAddress":{
        "details": document.querySelector('#detalis').value,
        "phone":  document.querySelector('#phone').value,
        "city":  document.querySelector('#city').value
        }
},{
  headers:{"token":localStorage.getItem('token')}
})
if (data.status=='success') {
  nav('/allorders')
}
} catch (error) {
  console.log(error);
}
  }
  
  async function confirmcardOrder(){
    try {
      const {data}=await axios.post(`${baseUrl}/orders/checkout-session/${cartId}`,{
        "shippingAddress":{
            "  details ": document.querySelector('#detalis').value,
            "phone": document.querySelector('#phone').value,
            "city": document.querySelector('#city').value
            }
    },{
      headers:{"token":localStorage.getItem('token')},
      params:{'url':'http://localhost:3000'}
    })
    if (data.status=='success') {
     window.open(data.session.url)
    }
    }
    
     catch (error) {
      console.log(error);
    }
 
  }

  return (
    <>
     <Helmet>
      <title>PayMent</title>
    </Helmet>
     <div className='w-50 m-auto '>
                
                <form className=''  >
                   
                    <label className='mt-3' htmlFor="detalis">Address Details</label>
                    <input  type="text" placeholder= 'Address Details'className='form-control  ' id='detalis' />
                    
                    <label className='mt-3' htmlFor="phone">Phone</label>
                    <input  type="text" placeholder= 'Phone' className='form-control ' id='phone' />
                    <label className='mt-3' htmlFor="city">City</label>
                    <input  type="text" placeholder= 'City' className='form-control ' id='city' />
                    <button onClick={confirmCashOrder} type='button' className='btn btn-primary mt-3 mx-3'>Confirm Cash</button>
                    <button onClick={confirmcardOrder} type='button' className='btn btn-primary mt-3'>Confirm Card</button>
                </form>
            </div>
    </>
  )
}
