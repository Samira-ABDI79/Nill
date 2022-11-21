
import { prependOnceListener } from "process";
import { useState } from "react";

import {doProject} from "../../data"
function ClosedProjects(){
    const [item] = useState(doProject);

    return (
        <>
      
<div className="container lg:pr-52 ">
<p className="font-bold lg:text-xl text-2xl " dir="rtl">پروژه های در حال انجام</p>

</div>
      <div className="container bg-white lg:px-50 flex justify-center items-center py-12 ">
    <div className="flex flex-wrap  lg:pl-32 pl-24">
    {item.map((item) => (
              <div className=" lg:w-1/4 my-5 mx-3  w-3/6">
             <p className="text-black">{item.title}</p>
             <div className="bg-black">
              
             </div>
           </div>
            ))}
    </div>
      </div>
        </>
    )
}

export default ClosedProjects;