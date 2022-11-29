
import { Swiper, SwiperSlide } from 'swiper/react';
import "./BlogSlider.css"
import {BlogsData} from "../data"
import Article from "./Article";
import React, { useLayoutEffect, useState } from 'react';
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import SwiperCore,{Grid,Pagination} from "swiper"
SwiperCore.use([Pagination])
function BlogSlider(){
  const [articleData]=useState(BlogsData);
  const [width, height] = useWindowSize();
  let rowsCount =6;
  if(width<=768){
    rowsCount=1
  }
  else {
    rowsCount=6;
  }
  console.log(rowsCount)
    return (
        <>
          <Swiper
     modules={[Grid]}
     slidesPerView={1}
     grid={{rows:rowsCount,fill:"row"}}
     spaceBetween={2}
     pagination={{clickable:true}}
     className="BlogSlider "
     
    >

{articleData.map((item) => (
   <SwiperSlide dir="rtl" className="h-screen">
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