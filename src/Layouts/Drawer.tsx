import { useState } from "react";
import "./style.css"
import {menuItems} from "../Services/Data/data"
import { Link } from "react-router-dom";
interface type{
  flag:boolean;
}
function Drawer(props:type){
  const [showModal,setShowModal]=useState(false)
  const [item] = useState(menuItems);

    return (
        <>
        
        {props.flag ? 

<div className="relative">
   
   {!showModal ?
<button className="Homeclose" type="button" onClick={()=>setShowModal(true)}>
<svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg>

</button> : <></>
}
{showModal ?
<button className="close z-50" type="button" onClick={()=>setShowModal(false)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

</button> : <></>
}
</div>
: <></>

}
{!props.flag ? 

<div className="relative">
   
   {!showModal ?
<button className="close" type="button" onClick={()=>setShowModal(true)}>
<svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="3" y1="12" x2="21" y2="12" />  <line x1="3" y1="6" x2="21" y2="6" />  <line x1="3" y1="18" x2="21" y2="18" /></svg>

</button> : <></>
}
{showModal ?
<button className="close z-50" type="button" onClick={()=>setShowModal(false)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

</button> : <></>
}
</div>
: <></>

}
{showModal ? 
<div className="modal">
<div id="drawer" className="fixed z-50 h-screen p-4 overflow-y-auto bg-dark w-80 "  aria-labelledby="drawer-label">
  
<div className="   pb-20 ">
  <div className="w-3/6 flex flex-col justify-center items-center">
  {item.map((item) => (
  <a  className="p-3 hover:underline font-bold text-2xl text-white" onClick={()=>setShowModal(false)}>  <Link to={item.route}>{item.name}</Link></a>
  ))}



  </div>
</div>
</div></div>
: <></>}
        </>
    )
}
export default Drawer;