// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import images from 'src/Importer/Importer';
import SliderItems from '../Home/Components/SliderItems';
// Import Swiper styles
import 'swiper/css';

const Slider=() => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div>
    <SliderItems imageSource={images["Post/Rectangle 69.png"]} slidertxt="Andre Park"/>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
    <SliderItems imageSource={images["Post/Rectangle 69.png"]} slidertxt="Andre Park"/>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
    <SliderItems imageSource={images["Post/Rectangle 69.png"]} slidertxt="Andre Park"/>
    </div>
      </SwiperSlide>

      <SwiperSlide>
      <div>
    <SliderItems imageSource={images["Post/Rectangle 69.png"]} slidertxt="Andre Park"/>
    </div>
      </SwiperSlide>  <SwiperSlide>
      <div>
    <SliderItems imageSource={images["Post/Rectangle 69.png"]} slidertxt="Andre Park"/>
    </div>
      </SwiperSlide>
      
    
    
    </Swiper>
  );
};

export default Slider