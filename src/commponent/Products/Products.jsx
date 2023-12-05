import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../utils/baseUrl'
import axios from 'axios'

import { Link } from 'react-router-dom'
import Product from '../Product/Product'
import Spiner from '../Spiner/Spiner'
import { Helmet } from 'react-helmet'

export default function Products() {
  
  const[Products,setProducts]= useState([])
  const getAllproducts=async()=>{
      let {data}=await axios.get(`${baseUrl}/products`)
      console.log(data)
      setProducts(data.data)
  }
  useEffect(()=>{
    getAllproducts()
  },[])
  return (
    <>
    <Helmet>
      <title>Products</title>
    </Helmet>
    {Products.length>0?   <div className='container'>
   <Link to={'details/'+ Products._id}></Link>
   <div className='row '>
    <Product Products={Products}/>
    
    </div>
 
   
   </div>:<Spiner/>}


    </>
  )
}
