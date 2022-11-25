
import { Swiper, SwiperSlide } from 'swiper/react';

import {BlogsData} from "../data"
import Article from "./Article";
import { useState } from "react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import SwiperCore,{Grid,Pagination} from "swiper"
SwiperCore.use([Pagination])
function BlogSlider(){
  const [articleData]=useState(BlogsData);

    return (
        <>
          <Swiper
     modules={[Grid]}
     slidesPerView={1}
     grid={{rows:6,fill:"row"}}
     spaceBetween={30}
     pagination={{clickable:true}}
     className="mySwiper"
    >

{articleData.map((item) => (
   <SwiperSlide dir="rtl">
                <Article 
                date={item.date}
                title={item.title}
                text={item.text}
                image={item.image}
                />
                  </SwiperSlide>
            ))}
         
        
    </Swiper>
        </>

    )
}
export default BlogSlider;