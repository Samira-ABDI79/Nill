
import { Swiper, SwiperSlide } from 'swiper/react';
import images from 'src/Importer/Importer';
import { useState } from "react";


import 'swiper/css';

import "./Slider.style.css"
interface input{
  type:string;
}

import 'swiper/css/pagination';
import SwiperCore,{Pagination ,Navigation} from "swiper"
SwiperCore.use([Pagination])
import "swiper/css/navigation";




const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${images["Home/image3.jpg"]}`,

    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${images["Home/image.jpg"]}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${images["Home/image2.jpg"]}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
  },
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${images["Home/image3.jpg"]}`,

    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${images["Home/image.jpg"]}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${images["Home/image2.jpg"]}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
  },
];




const Slider2=() => {
   
  const [item] = useState(testimonials);
  
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index) => {
        return '<span className=" font-bold text-3xl text-pink">' + (index + 1) + '</span>';
      }
    }
  }
  
    return (
      <Swiper {...params}
        spaceBetween={15}
        slidesPerView={3}
        pagination={{clickable:true}}
       
        navigation={true}
        modules={[Navigation]}
        direction="vertical"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="my-10 homeSwiper2"
            
          >
    {item.map((item) => (
          <SwiperSlide >
         
              <img src={item.image} alt={item.title} className="" />
         
          </SwiperSlide>
        ))}
        
      
      
      </Swiper>
    );
  };
  
  export default Slider2