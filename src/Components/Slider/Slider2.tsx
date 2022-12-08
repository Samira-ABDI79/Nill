
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from "react";


import 'swiper/css';

import "./Slider.style.css"
interface input{
  type:string;
}

import 'swiper/css/pagination';
import SwiperCore,{Pagination} from "swiper"
SwiperCore.use([Pagination])

const Slider2=() => {
   
  
  
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{clickable:true}}
        direction="vertical"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="my-10 mySlider"
             breakpoints={{
            50:{
                slidesPerView:1,
            },
            900:{
              slidesPerView:3,
          }}}
        
          >
   
  
        <SwiperSlide>
        <div className="swiper-slide">Slide 1</div>
    
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="swiper-slide">Slide 2</div>
    
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="swiper-slide">Slide 3</div>
    
        </SwiperSlide>
       
  
        
      
      
      </Swiper>
    );
  };
  
  export default Slider2