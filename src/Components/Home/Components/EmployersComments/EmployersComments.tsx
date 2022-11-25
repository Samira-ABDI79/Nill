import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import images from 'src/Importer/Importer';
import 'swiper/css';

interface input{
  type:string;
}
import {EmployersCommentsData} from "../../data"
function EmployersComments(props:input){
const [item] = useState(EmployersCommentsData);

    return(
        <>
      <div className=" bg-white w-screen ">
      <div  className=" bg-white w-screen flex justify-center items-center">
      <Swiper
      spaceBetween={40}
      slidesPerView={2}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="py-24   w-4/6 container"
    >
          <div className=" ">
        {item.map((item) => (
           <SwiperSlide >
           <img
            className="w-4 h-4 relative z-10 right-12 top-3"
            src={images["Icons/DoubleCoutYellow.svg"]}
            alt=""
          />
           
        <div className="p-10 bg-blue   ">
      
            <div className="flex justify-end lg:flex-row md:flex-row flex-col-reverse">
                
                <div className="lg:mt-0 md:mt-0 mt-2">
                    <p  dir="rtl">{item.username}</p>
                    <div className="flex items-center lg:mt-0 md:mt-0 mt-2 " dir="rtl">
                    <div className="h-[1px] bg-white w-16 "></div>
                    <div>
                    
                        
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                    </div>
                        </div>
                </div>
                <img src={item.src} alt={item.username} className="ml-10"/>
            </div>
            <p className="text-center mt-12 " dir="rtl">{item.text}</p>
        </div>
             
        </SwiperSlide>
            ))}
            </div>
          </Swiper>
      </div>
      </div>

        </>
    )
}
export default EmployersComments