
import { useState } from "react";
import {UserData} from "../../data"

function ImageBox(){
  const [userData,setUserData]=useState(UserData);
 
  

    return(
        <>
         {userData.map((item) => (
        <div className="bg-dark ">

            <img src={item.profile} alt={item.name+item.family} />
            <div className="px-10">
                <p className="font-bold text-center text-3xl lg:text-2xl mt-10">CONTACT</p>
                <div className="">
                    <div className="flex justify-between mt-8">
                        <div><svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg></div>
                        <p className="ml-2 lg:text-base text-xl ">{item.phoneNumber}</p>
                    
                    </div>
                    <div className="flex justify-between mt-8">
                        <div><svg className="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg></div>
                        <p className="ml-2 lg:text-base text-xl ">{item.email}</p>
                    
                    </div>
                    
                    <div className="flex justify-between mt-8">
                       
                        <div><svg className="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
</svg>
</div>
<p className="ml-2 lg:text-base text-xl ">{item.location}</p>
                    </div>
                    <div className="flex justify-between my-8">
                       
                        <div><svg
  className="w-6 h-6 text-blue-500 fill-current"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512">
  <path
    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
  ></path>
</svg></div>
<p className="ml-2 lg:text-base text-xl ">{item.linkdin}</p>
                    </div>


                </div>
                <div className="h-[1px] bg-yellow w-full lg:text-xl text-2xl "></div>

            </div>

            <div className="px-10 ">
                <p className="font-bold text-center text-3xl lg:text-2xl mt-10">EDUCATION</p>
               
          
            <div className="flex-col flex " dir="rtl">
             <div  className="my-2">
               <p className="font-bold lg:text-xl text-2xl">{item.field}</p>
                <p className="mt-2 lg:text-xl text-2xl">{item.university}</p>
                <p className="mt-2 lg:text-xl text-2xl">{item.edicationYear}</p>
               </div>
                <div className="my-2">
                <p className="font-bold lg:text-xl text-2xl">{item.job}</p>
                <p className="mt-2 lg:text-xl text-2xl">{item.jobLocation}</p>
                <p className="mt-2 lg:text-xl text-2xl">{item.jobLocation}</p>
                </div>
             </div>
          
           

                <div className="h-[1px] bg-yellow w-full lg:text-xl text-2xl mt-10 "></div>

            </div>


            <div className="px-10">
                <p className="font-bold text-center text-3xl lg:text-2xl mt-10">SKILLS</p>
            
               <ul className="list-disc">
               {item.skils.map((skill) => (
                    <li className="lg:text-base text-xl">{skill.text}</li>

                ))}

               </ul>
            

            </div>
            
        </div>
          ))}

        </>
    )
}
export default ImageBox;