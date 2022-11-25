
import { useState } from "react";

import {ClosedProjectsData} from "../../Services/Data/data"
function ClosedProjects(){
    const [item] = useState(ClosedProjectsData);

    return (
        <>
      

      <div className="container  lg:px-50 flex justify-center items-center py-12 ">
    <div className="flex flex-wrap  lg:pl-32 ">
    {item.map((item) => (
              <div className=" lg:w-1/4 my-5 mx-3  w-full">
              <img src={item.src} alt={item.title} className="w-full"/>
           </div>
            ))}
    </div>
      </div>
        </>
    )
}

export default ClosedProjects;