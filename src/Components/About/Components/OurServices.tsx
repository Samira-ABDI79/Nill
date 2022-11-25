import { ourServicesData } from "../data";
import { useState } from "react";
function OurServices(){
    const [item] = useState(ourServicesData);
    return(
        <>
  
      <div className="container  lg:px-44  flex justify-center items-center py-12 " dir="rtl">
    <div className="flex flex-wrap  ">
    {item.map((item) => (
              <div className="flex lg:w-1/3 mt-10">
                  <div className="bg-yellow h-full w-[1px]"></div>
              <div className="px-4 "> 
                  <p className="font-bold text-lg">{item.title}</p>
                  <p>{item.text}</p>
              </div>
           </div>
            ))}
    </div>
      </div>
        </>
    )
}

export default OurServices;