import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import $ from 'jquery';
import Helmet from 'react-helmet';
import { toast } from 'react-toastify';

export default function Product({Products}) {
  const notify = (msg,type) => {
    toast[type](msg);
}
  let {addToCart,removeCart,getCart}=useContext(CartContext)
 async function addProduct(productId,idx){
  let token=localStorage.getItem('token')
  if(token){
    let respons= await addToCart(token,productId)
    if (respons.status===200) {
      notify('Success','success')
      $(`#addbtn${idx}`).fadeOut(10)
      $(`#delbtn${idx}`).fadeIn(1000)
      getCart()
    }
   
  }else{
    alert('you are not login')
  }
    
  }
  async function removProduct(id) {
    if (await removeCart(id)===true) {
      notify("Remove",'Remove')
      $('#delbtn').fadeOut(10)
      $('#addbtn').fadeIn(1000)
    }
   }
   
  return (
    <>
    <Helmet>
      <title>Products</title>
    </Helmet>
     {Products.map((item,idx)=> {
      return <div  key={idx} className="col-md-2">
     <div className="" >
 <Link to={'/product-details/'+ item._id}>
 <img src={item.imageCover} className='w-100' alt="" />
        <h6 className='text-main'>{item.category.name}</h6>
        <p className='fw-bolder'>{item.title.split(' ').slice(0,2).join(' ')}</p>
        <div className='d-flex justify-content-between align-items-center my-4' >
          <span>{item.price} EGP</span>
          <div>
<i className='fas fa-star rating-color'></i>
{item.ratingsAverage}
          </div>
        </div>
 </Link>
        <button id={`addbtn${idx}`} onClick={()=>addProduct(item._id,idx)} className='btn bg-main text-white w-100 my-2'>Add to cart</button>
        <button id={`delbtn${idx}`} onClick={()=>removProduct(item.id,idx)} style={{"display":'none'}} className='btn bg-danger text-white w-75  my-2'>Remove</button>
     </div>
     
      </div>
     })}
    </>
  )
}
