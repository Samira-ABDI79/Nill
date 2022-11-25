

import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from "react";
import {memberData} from "../../../Services/Data/data"
import 'swiper/css';


interface input{
  type:string;
}
import 'swiper/css/pagination';
import SwiperCore,{Pagination} from "swiper"
SwiperCore.use([Pagination])
function Members(){
  const [item] = useState(memberData);

    return(
        <>
          <Swiper
        
      spaceBetween={30}
      slidesPerView={3}
      pagination={{clickable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="my-10"
           breakpoints={{
          50:{
              slidesPerView:1,
          },
          900:{
            slidesPerView:3,
        }
      }}
    >
  {item.map((item) => (

      <SwiperSlide>
      <div className="w-80 h-80">
  <img src={item.src} alt={item.title} className="w-full h-full" />
    </div>
      </SwiperSlide>
     
  ))}
      
    
    
    </Swiper>
        </>
    )
}

export default Members;