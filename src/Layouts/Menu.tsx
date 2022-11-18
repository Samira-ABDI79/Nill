import { Link } from "react-router-dom";
import { useState } from "react";
import {menuItems} from "../Services/Data/data"
function Drawer(){
    const [item] = useState(menuItems);
    return (
     
        <>
    <div className="absolute w-screen h-screen overflow-x-hidden">
    <div className="bg-screen flex justify-center items-center  pb-20 h-screen">
  <div className="w-3/6 flex flex-col justify-center items-center">
  {item.map((item) => (
  <a  className="p-3 hover:underline font-bold text-5xl text-white">  <Link to={item.route}>{item.name}</Link></a>
  ))}



  </div>
</div>
    </div>
        </>
    )
}

export default Drawer;