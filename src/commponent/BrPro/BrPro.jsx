import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { baseUrl } from '../../utils/baseUrl'
import Spiner from '../Spiner/Spiner'

export default function BrPro() {
    let {id}=useParams()
 const[allPeoducts,setAllPeoducts] = useState([])
    async function getBrandProducts(){
     try {
        const {data}=   await axios.get(`${baseUrl}/products/`,{
            params:{'brand':id}
            
        })
        setAllPeoducts(data.data)
        console.log(data.data);
     } catch (error) {
        console.log("Erorr:",error);
     }
    }
    useEffect(function(){
        getBrandProducts()
    },[])

  return (
    <>
   {allPeoducts==0?<Spiner/>: <div className='container'>
    
     <div className="row">
     {allPeoducts.length== 0?<h2 className='text-center p-5 text-danger'>No Products Available Right Now....</h2>:allPeoducts.map((item,indx)=>{
            return   <div key={indx} className="col-md-4    ">
<div className='ms-3 p-3 g-3 '>
<Link to={'/product-details/'+ item._id}>
 <img src={item.imageCover} className='w-100' alt="" />
        <h6 className='text-main'>{item.category.name}</h6>
        <p className='fw-bolder'>{item.title.split(' ').slice(0,6).join(' ')}</p>
        <div className='d-flex justify-content-between align-items-center my-4' >
          <span>{item.price} EGP</span>
          <div>
<i className='fas fa-star rating-color'></i>
{item.ratingsAverage}
          </div>
        </div>
 </Link>
</div>
        </div>
        })}
   
     </div>
    </div>}
    </>
  )
}
