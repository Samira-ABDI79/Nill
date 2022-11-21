import { useState } from "react";
import Drawer from "./Menu";




const HomeNavbar = () => {
 
  const [showModal,setShowModal]=useState(false)

  return (
   <>
 
<header className="w-screen p-3 bg-dark shadow overflow-x-hidden">
    <div className="w-screen  flex justify-between p-3">
  <p className="text-white font-bold lg:text-xl text-2xl">NILL</p>
    <div className="flex justify-between lg:w-32 w-3/6" >
    <p className="text-white font-bold text-xl" >منو</p>
    <div>
   
            {!showModal ?
      <button className="mr-12" type="button" onClick={()=>setShowModal(true)}>
      <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg>

      </button> : <></>
   }
   {showModal ?
      <button className="text-white font-bold lg:mr-12 mr-24" type="button" onClick={()=>setShowModal(false)}>
      close

      </button> : <></>
   }
    </div>
    </div>
     
            </div>
</header>
{showModal ? <Drawer /> : <></>

}
</>
  );
};

export default HomeNavbar;
