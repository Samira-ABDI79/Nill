import { Swiper, SwiperSlide } from "swiper/react";
import "./BlogSlider.css";
import { BlogsData } from "../data";
import Article from "./Article";
import React, { useLayoutEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import SwiperCore, { Grid, Pagination } from "swiper";
SwiperCore.use([Pagination]);
function BlogSlider() {
  const [articleData] = useState(BlogsData);

  return (
    <>
      <Swiper
        modules={[Grid]}
        slidesPerView={1}
        grid={{ rows: 6, fill: "row" }}
        spaceBetween={0}
        pagination={{ clickable: true }}
        className="BlogSlider "
        breakpoints={{
          50: {
            spaceBetween: 20,
          },
          900: {
            spaceBetween: 0,
          },
        }}
      >
        {articleData.map((item) => (
          <SwiperSlide dir="rtl" className="mb-0">
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
  );
}
export default BlogSlider;
