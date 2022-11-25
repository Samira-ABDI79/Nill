import { ourServicesData } from "../../data";
import { useState } from "react";
function OurServices(){
    const [item] = useState(ourServicesData);
    return(
        <>
        <div className="container lg:pr-52 ">


</div>
      <div className="container  lg:px-50 flex justify-center items-center py-12 " dir="rtl">
    <div className="flex flex-wrap  lg:pl-32 ">
    {item.map((item) => (
              <div className="flex lg:w-1/3 mt-10">
                  <div className="bg-yellow h-full w-[1px]"></div>
              <div className="px-4 "> 
                  <p>{item.title}</p>
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