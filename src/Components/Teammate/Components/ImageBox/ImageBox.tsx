
import { useState } from "react";
import {TeammateData} from "../../data"
import images from "src/Importer/Importer";
function ImageBox(){
  const [userData,setUserData]=useState(TeammateData);
 
  

    return(
        <>
         {userData.map((item) => (
        <div className="bg-dark ">

            <img src={item.profile} alt={item.name+item.family} className="w-full" />
            <div className="lg:px-10 px-4">
                <p className="font-bold text-center text-3xl lg:text-2xl mt-10">CONTACT</p>
                <div className="">
                    <div className="flex justify-between py-4">
                       
                        <img
                        className="pr-6"
                        src={images["Icons/DialUp.svg"]}
                        alt=""
                      />
                        <p className="ml-2 lg:text-base text-xl ">{item.phoneNumber}</p>
                    
                    </div>
                    <div className="flex justify-between  py-4">
                        <img
                        className="lg:pr-6"
                        src={images["Icons/Email.svg"]}
                        alt="phone icon"
                      />
                        <p className="px-2  lg:text-base text-xl ">{item.email}</p>
                    
                    </div>
                    
                    <div className="flex justify-between py-4">
                       
            
   <img
                        className="pr-6"
                        src={images["Icons/Location.svg"]}
                        alt="location icon"
                      />
<p className="ml-2 lg:text-base text-xl ">{item.location}</p>
                    </div>
                    <div className="flex justify-between my-8">
                       
                
 <img
                        className="pr-6"
                        src={images["Icons/LinkedIn.svg"]}
                        alt="linkedin icon"
                      />
<p className="ml-2 lg:text-base text-xl ">{item.linkdin}</p>
                    </div>


                </div>
                <div className="h-[1px] bg-yellow w-full lg:text-xl text-2xl "></div>

            </div>

            <div className="lg:px-10 px-4">
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


            <div className="lg:px-10 px-4">
                <p className="font-bold text-center text-3xl lg:text-2xl mt-10">SKILLS</p>
            
               <ul className="list-disc p-5 flex  flex-wrap justify-between ">
               {item.skils.map((skill) => (
                    <li className="lg:text-base text-xl lg:w-3/6 w-2/6 ml-2 lg:ml-0 ">{skill.text}</li>

                ))}

               </ul>
            

            </div>
            
        </div>
          ))}

        </>
    )
}
export default ImageBox;