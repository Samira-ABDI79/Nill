import images from "src/Importer/Importer";
import React , {useRef , useState} from "react";
import { Swiper  , SwiperSlide} from "swiper/react";
import "swiper/css"
import "swiper/css/navigation"
import "./HomeSlider.css"
import { Navigation } from "swiper";
const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image:  `${images['Home/image3.jpg']}`,
   
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${images['Home/image.jpg']}`,
    quote:"The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${images['Home/image2.jpg']}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];

function HomeSlider() {
  const [item] = useState(testimonials);

  return (
<>
<Swiper navigation={true} modules={[Navigation]} className="mySwiper z-10 pb-12">

  {item.map((item) => (

<SwiperSlide>
<div>
<img src={item.image} alt={item.title} className="w-full " />

</div>
</SwiperSlide>

))}

</Swiper>
</>
  )
}

export default HomeSlider