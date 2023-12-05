import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../utils/baseUrl'
import Slider from "react-slick";

export default function CategorySlider() {
    const[categories,setCategories]= useState([])
    const getAllCategries=async()=>{
        let {data}=await axios.get(`${baseUrl}/categories`)
        console.log(data)
        setCategories(data.data)
    }
    useEffect(()=>{
        getAllCategries()
    },[])

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:false,
        autoplay:true,
       
      };
  return (
    <>
<div className=' my-5 container-fluid  m-auto '>
    <h3>Shop popular categories </h3>
<Slider {...settings}  autoplaySpeed={3000} >

    
   {categories.map((item)=>{
    return <div key={item._id}>
        <img  src={item.image} className="w-100" height={200} alt="" />
        <h6 className="my-1">{item.name}</h6>
    </div>
   })}
    </Slider>
</div>
    </>
  )
}
