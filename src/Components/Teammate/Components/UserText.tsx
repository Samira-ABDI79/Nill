import { TeammateData } from "../data";
import { useState } from "react";
import Button from "src/Components/Button/Button";

function UserText() {
  const [userData, setUserData] = useState(TeammateData);

  return (
    <>
      {userData.map((item) => (
        <div
          className="bg-black border  border-r-yellow border-l-black border-b-black border-t-black"
          dir="rtl"
        >
          <div className="flex items-center pb-16 lg:-mt-6 lg:-mr-[1px]">
            <div className="h-[1px]  w-10 bg-yellow  hidden lg:inline-block  "></div>

            <p className="font-bold  text-4xl  px-10">
              {item.name + " " + item.family}
            </p>
          </div>
          <div className="flex items-center">
            <div className="h-[1px] bg-yellow  hidden lg:inline-block w-16  "></div>
            <div className="h-16 bg-yellow  hidden lg:inline-block w-[1px]  "></div>

            <p className="font-bold  text-2xl text-yellow lg:mr-2 mr-16">
              {" "}
              درباره من
            </p>
          </div>
          <p className="p-16 text-xl lg:text-base">{item.about}</p>
          <div className="flex items-center mt-12">
            <div className="h-[1px] bg-yellow  hidden lg:inline-block w-16  "></div>
            <div className="h-16 bg-yellow  hidden lg:inline-block w-[1px]  "></div>

            <p className="font-bold  text-2xl text-yellow lg:mr-2 mr-16">
              {" "}
              تجربه های کاری
            </p>
          </div>
          <div className="p-16 lg:px-16 py-2">
            <p className="text-blue lg:text-xl text-2xl "> طراح گرافیک</p>
            <div className="flex lg:items-center flex-col lg:flex-row">
              <p className="  text-2xl my-10 "> شرکت هنر پنجم</p>
              <div className="h-10  w-[1px] bg-white hidden lg:inline-block mx-4"></div>
              <div className=" text-2xl ">2019 - 2021</div>
            </div>
            <p className="mt-10 lg:mt-0 text-xl lg:text-base">{item.about}</p>
          </div>

          <div className="p-16 lg:px-16 py-2">
            <p className="text-blue lg:text-xl text-2xl "> طراح وب</p>
            <div className="flex lg:items-center flex-col lg:flex-row">
              <p className="  text-2xl my-10 "> موسسه گاج</p>
              <div className="h-10  w-[1px] bg-white hidden lg:inline-block mx-4"></div>
              <div className=" text-2xl ">2019 - 2021</div>
            </div>
            <p className="mt-10 lg:mt-0 text-xl lg:text-base">{item.about}</p>
            <ul className="list-disc py-6 mx-4 text-xl lg:text-sm">
              <li className="mt-4 mx-2">
                م ده از طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه 
              </li>
              <li className="mt-4 mx-2">
                م ده از طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه 
              </li>
              <li className="mt-4 mx-2">
                م ده از طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه 
              </li>
            </ul>
          </div>

          <div className="p-16 lg:px-16 py-2">
            <p className="text-blue lg:text-xl text-2xl "> طراح UX/UI</p>
            <div className="flex lg:items-center flex-col lg:flex-row">
              <p className="  text-2xl my-10 "> شرکت نیل</p>
              <div className="h-10  w-[1px] bg-white hidden lg:inline-block mx-4"></div>
              <div className=" text-2xl ">2019 - 2021</div>
            </div>
            <p className="mt-10 lg:mt-0 text-xl lg:text-base">{item.about}</p>
            <ul className="list-disc py-6 mx-4 text-xl lg:text-sm">
              <li className="mt-4 mx-2">
                م ده از طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه 
              </li>
              <li className="mt-4 mx-2">
                م ده از طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه 
              </li>
              <li className="mt-4 mx-2">
                م ده از طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه 
              </li>
            </ul>
          </div>

          <div className="flex items-center  lg:-mb-7 ">
            <div className="h-[1px]  w-16 bg-yellow  hidden lg:inline-block  "></div>
<div className="lg:mr-0 mr-16 lg:-mt-5">
<Button btnType="simple" btntxt="دانلود رزومه" route="/"  />

</div>
          </div>
        </div>
      ))}
    </>
  );
}
export default UserText;
