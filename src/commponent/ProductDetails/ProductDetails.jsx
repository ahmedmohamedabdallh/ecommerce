import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../utils/baseUrl'
import { CartContext } from '../../context/cartContext'
import { useContext } from 'react'
import $ from 'jquery';
import Spiner from '../Spiner/Spiner'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'


export default function ProductDetails() {
  const notify = (msg,type) => {
    toast[type](msg);
}
  let {addToCart,removeCart,getCart,addToWhislist,getWishlist}=useContext(CartContext)
 
  async function addProduct(productId){
   let token=localStorage.getItem('token')
   if(token){
     let respons= await addToCart(token,productId)
     if (respons.status===200) {
      notify('Success','success')
      $('#delbtn').fadeIn(100)
      $('#addbtn').fadeOut(10)
      getCart()
      
     }
   }else{
     alert('you are not login')
   }
     
   }
   async function addProductWish(productId,idx){
    let token=localStorage.getItem('token')
    if(token){
      let respons= await addToWhislist(token,productId)
      if (respons.status===200) {
        notify('Success','success')
        $(`#wish`).css("color","red")

        getWishlist()
      }
     
    }else{
      alert('you are not login')
    }
      
    }
  async function removProduct(id) {
    if (await removeCart(id)===true) {
      notify("Remove",'Remove')
      $('#addbtn').fadeIn(100)
      $('#delbtn').fadeOut(10)
      
    }
   }
   
   let {id}=useParams()
   const[Product,setProduct]= useState([])
  //  const[brand,setBrand]= useState([])
   const getproduct=async()=>{
       let {data}=await axios.get(`${baseUrl}/products/${id}`)
       console.log(data)
       setProduct(data.data)
      //  setBrand(data.data.brand)
   }
   useEffect(()=>{
    getproduct()
   },[])
   const[model,setModel]= useState(false)
   const[tempImage,setTempImage]= useState('')
 const getImage=(img,id)=>{
  setTempImage(img,id)
  setModel(true)
  console.log(img);
 }
  return (
    <>
     <Helmet>
     <meta charSet="utf-8" />
     <title>Products Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
  
    </Helmet>
    <div className={model?'model open':'modeel'}><img src={tempImage}className='w-100' alt="" /></div>
    {Product.length==0?<Spiner/>: <div className="container-fluid my-3">
  
  <div className="row">
  <div className='col align-self-start '>
      {Product?.images?.map((img,index)=><div key={index} onClick={()=>getImage({img,id})} className="bb"  >
<img  className='w-50 m-2 bb' src={img} alt="" />

  </div>)}
      </div>
   
      <div className="col-md-3" >
        <img src={Product.imageCover}className='w-100' alt="" />

      </div>
      <div className="col-md-7 my-5 align-items-center  ">

<h4>{Product.title}</h4>
<div className='d-flex justify-content-around ms-5'>
<button id='wish' style={{"coler":'none'}} onClick={()=>addProductWish(Product._id)} className='wish ms-5'><i class="fa-sharp fa-solid fa-heart"></i></button>
</div>


<p>{Product.description}</p>
{/* <h4> Brand :{brand.name}</h4> */}

<div className='  col-md-3 d-flex justify-content-between align-items-center my-4' >
    <h3 className='' >{Product.price} EGP</h3>
    <div>
<i className='fas fa-star rating-color h4'></i>
<span className='h4'>{Product.ratingsAverage}</span>

    </div>
  </div>
  <button id='addbtn' onClick={()=>addProduct(Product._id)}  className='btn bg-main text-white w-75  my-2'>Add to cart</button>
  <button id='delbtn' onClick={()=>removProduct(Product._id)} style={{"display":'none'}}  className='btn bg-danger text-white w-75  my-2'>Remove From Cart</button>
 
  
      </div>
  </div>
</div>}
     
    </>
  )
}
