import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import images from "src/Importer/Importer";

// import image1 from "../Assets/Images/Post/Rectangle 62.png"


const PostNavbar = () => {
 
  

  return (
   <>
 
<header className="w-screen bg-hero-pattern shadow overflow-x-hidden z-10 "
 
>
{/* <img src={images["Post/Rectangle 62.png"]} alt="" className="" /> */}

    <div className=" relative">
<div className="">
<p className="text-white font-bold lg:text-xl text-2xl postNill">
    <Link to="/">NILL</Link>
  </p>
  
    <p className="text-white font-bold text-xl" >منو</p>
</div>
   
     
       </div>
      

</header>

</>
  );
};

export default PostNavbar;
