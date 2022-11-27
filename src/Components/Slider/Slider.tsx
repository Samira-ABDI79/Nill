
import { Swiper, SwiperSlide } from 'swiper/react';
import {BlogsData} from "../Blog/data"
import SliderItems from '../SliderItems/SliderItems';
import { useState } from "react";
import "../../Assets/styles/css/components/customizeSlider.css"
import 'swiper/css';
import {lastProject} from "../../Services/Data/data"
import "./style.css"
interface input{
  type:string;
}
const Sliderstyle={
  // "--swiper-pagination-color": "#FFBA08",
  // "--swiper-pagination-bullet-inactive-color": "#999999",
  // "--swiper-pagination-bullet-inactive-opacity": "1",
  // "--swiper-pagination-bullet-size": "16px",
  // "--swiper-pagination-bullet-horizontal-gap": "6px"
}
import 'swiper/css/pagination';
import SwiperCore,{Pagination} from "swiper"
SwiperCore.use([Pagination])

const Slider=(props:input) => {
  const SliderData = (props.type=="Blog") ? BlogsData : lastProject
  const [item] = useState(SliderData);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      pagination={{clickable:true}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="my-10 mySwiper"
           breakpoints={{
          50:{
              slidesPerView:1,
          },
          900:{
            slidesPerView:3,
        }}}
        style={Sliderstyle}
        >
  {item.map((item) => (

      <SwiperSlide>
      <div>
    <SliderItems imageSource={item.image} slidertxt={item.title} route={item.route}/>
    </div>
      </SwiperSlide>
     
  ))}
      
    
    
    </Swiper>
  );
};

export default Slider