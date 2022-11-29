import { useState } from "react";
import { Link } from "react-router-dom";






const Navbar = () => {
 
  

  return (
   <>
 
<header className="w-screen p-3 bg-dark shadow overflow-x-hidden z-50">
    <div className="w-screen  flex justify-between p-3">
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

export default Navbar;
