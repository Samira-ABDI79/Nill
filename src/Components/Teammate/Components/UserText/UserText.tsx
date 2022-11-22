import {UserData} from "../../data"
import { useState } from "react";

function UserText(){
  const [userData,setUserData]=useState(UserData);

    return (
        <>
        {userData.map((item) => (
        <div className="bg-black border  border-r-yellow " dir="rtl">
            <div className="flex items-center mb-16">
<div className="h-[1px]  w-10 bg-yellow  "></div>

                <p className="font-bold  text-4xl py-16 px-10">{item.name +" " + item.family}</p>
                </div>
                <div className="flex items-center">
        <div className="h-[1px] bg-yellow w-16  "></div>
        <div className="h-16 bg-yellow w-[1px]  "></div>

                <p className="font-bold  text-2xl text-yellow mr-2"> درباره من</p>
                </div>
                <p className="p-16 text-xl lg:text-base">{item.about}</p>
        <div className="flex items-center">
        <div className="h-[1px] bg-yellow w-16  "></div>
        <div className="h-16 bg-yellow w-[1px]  "></div>

            
        <p className="font-bold  text-2xl text-yellow mr-2"> تجربه های کاری</p>
        </div>
        <div className="p-16">
            <p className="text-blue lg:text-xl text-2xl "> طراح گرافیک</p>
            <div className="flex lg:items-center flex-col lg:flex-row">
            <p className="  text-2xl my-10 "> شرکت هنر پنجم</p>
        <div className="h-10  w-[1px] bg-white hidden lg:inline-block mx-4"></div>
        <div className=" text-2xl ">2019 - 2021</div>

              
                </div>
                <p className="mt-10 lg:mt-0 text-xl lg:text-base">{item.about}</p>

        </div>
       


        <div className="p-16">
            <p className="text-blue lg:text-xl text-2xl "> طراح وب</p>
            <div className="flex lg:items-center flex-col lg:flex-row">
            <p className="  text-2xl my-10 "> موسسه گاج</p>
        <div className="h-10  w-[1px] bg-white hidden lg:inline-block mx-4"></div>
        <div className=" text-2xl ">2019 - 2021</div>

              
                </div>
                <p className="mt-10 lg:mt-0 text-xl lg:text-base">{item.about}</p>
                <ul className="list-disc py-8 mx-4 text-xl lg:text-base">
                    <li className="mt-4 mx-2">م ده از  طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و</li>
                    <li className="mt-4 mx-2">م ده از  طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و</li>
                    <li className="mt-4 mx-2">م ده از  طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و</li>

                </ul>

        </div>
       



        <div className="p-16">
            <p className="text-blue lg:text-xl text-2xl "> طراح UX/UI</p>
            <div className="flex lg:items-center flex-col lg:flex-row">
            <p className="  text-2xl my-10 "> شرکت نیل</p>
        <div className="h-10  w-[1px] bg-white hidden lg:inline-block mx-4"></div>
        <div className=" text-2xl ">2019 - 2021</div>

              
                </div>
                <p className="mt-10 lg:mt-0 text-xl lg:text-base">{item.about}</p>
                <ul className="list-disc py-8 mx-4 text-xl lg:text-base">
                    <li className="mt-4 mx-2">م ده از  طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و</li>
                    <li className="mt-4 mx-2">م ده از  طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و</li>
                    <li className="mt-4 mx-2">م ده از  طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و</li>

                </ul>

        </div>
       
  

<div className="flex items-center mb-16">
<div className="h-[1px]  w-16 bg-white  "></div>

<button className="bg-blue  text-white   hover:opacity-75  px-12 font-semibold py-2 flex justify-center items-center">
  دانلود رزومه 
  </button>
</div>
        </div>
     
        ))}
        </>
    )
}
export default UserText;