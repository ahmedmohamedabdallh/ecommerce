import React from 'react'
import Slider from "react-slick";
import slide2 from '../../images/Slider/pngtree-atmospheric-beauty-make-up-e-commerce-banner-picture-image_1082606.jpg'
import slide3 from '../../images/Slider/7d0fd6cd-f700-4112-be9e-0acd4246d91d.png'
import slide4 from '../../images/Slider/grocery-banner-2.jpeg'
import slide5 from '../../images/Slider/grocery-banner.png'
import slide6 from '../../images/Slider/slider-2.jpeg'
import slide7 from '../../images/Slider/banner-4.jpeg'
export default function MainSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
  return (
    <>
<div className='container-fluid  m-auto my-3'>
<Slider {...settings}>
<img  src={slide2} height={300} alt="" />
<img  src={slide3} height={300} alt="" />
    <img  src={slide4} height={300} alt="" />
    <img src={slide5} height={300} alt="" />
    <img src={slide6} height={300} alt="" />
    <img src={slide7} height={300} alt="" />
    </Slider>
</div>

        
    </>
  )
}
