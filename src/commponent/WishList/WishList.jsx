import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Helmet } from 'react-helmet'
import Spiner from '../Spiner/Spiner'
import { Link } from 'react-router-dom'

export default function WishList() {
    let { removeWish,wishProducts,totaPrice,setWishishProducts} = useContext(CartContext)
  return (
    <>
      <Helmet>
      <title>Wishlist</title>
    </Helmet>
    <div className="container ">
     {wishProducts?<div className="bg-main-light my-4 p-3">
          <h3>Wishlist</h3>
          {/* <h6 className='text-main fw-bold'>Total Cart Price: {totaPrice} EGP</h6> */}
          {wishProducts.map((item,indx) => {
            return <div key={indx} className="row border-bottom my-3">
              
              <div className="col-md-1 ">
                <Link to={'/product-details/'+ item.id}>
                <img src={item.imageCover} className='w-100' alt="" />
                </Link>
               
              
              </div>
              
              <div className="col-md-11 ">
         
                <h6>{item.title}</h6>
                <div className='d-flex justify-content-between '>
                <h6 className='text-main mx-2 fw-bold'>Item Price :{item.price} EGP</h6>
               <span> <i className='fas fa-star rating-color'></i>  {item.ratingsAverage}</span>
                </div>
                
                <button onClick={()=>removeWish(item.id)} className='text-danger fw-bold product border-0'>Remove <i><i className="fa-solid fa-trash text-danger"></i></i></button>
              </div>
              
            </div>
            

          })}
        
         
        </div>:<Spiner/>}
      </div>
    </>
  )
}
{/* <div className='container'>
  {wishProducts? <div className="row mt-5">
        {wishProducts.map((item,indx)=>{
return <div key={indx} className='col-md-3 g-2 mb-3'>
  <Link to={'/product-details/'+ item.id} ><img  src={item.imageCover}className='w-100' alt="" />


<p  className='fw-bolder'>{item.title.split(' ').slice(0,2).join(' ')}</p>
    <div className='d-flex justify-content-between align-items-center ms-4' >
          <span>{item.price} EGP</span>
          <div>
<i className='fas fa-star rating-color'></i>
{item.ratingsAverage}
          </div>
        </div>
        </Link>
        
        <button onClick={()=>removeWish(item.id)} className='text-danger fw-bold rm border-0'>Remove <i><i className="fa-solid fa-trash text-danger"></i></i></button>

        

</div>
})}

</div>:<Spiner/>}
    

</div> */}