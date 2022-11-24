// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import images from 'src/Importer/Importer';
import SliderItems from '../SliderItems/SliderItems';
import { useState } from "react";

import 'swiper/css';
import {lastProject} from "../../Services/Data/data"
const Slider=() => {
  const [item] = useState(lastProject);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="my-10"
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