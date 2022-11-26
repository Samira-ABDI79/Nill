import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import images from "src/Importer/Importer";

// import image1 from "../Assets/Images/Post/Rectangle 62.png"


const PostNavbar = () => {
 
  

  return (
   <>
 
<header className="w-full bg-hero-pattern shadow overflow-x-hidden z-10 lg:h-500   "
 
>

<div className=" flex justify-between p-3">
  <p className="text-white font-bold lg:text-xl text-2xl">
    <Link to="/">NILL</Link>
  </p>
    <div className="flex justify-between lg:w-32 w-3/6" >
    <p className="text-white font-bold text-xl" >منو</p>
   
     
       </div>
       </div>     

      

</header>

</>
  );
};

export default PostNavbar;
