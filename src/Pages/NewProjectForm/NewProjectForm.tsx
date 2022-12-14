import { Button } from "src/Components";
import Transition from "src/Components/Transition/Transition";
import gsap from 'gsap';
function NewProjectForm() {
  const newProject = gsap.timeline();

  return (
    <>
     <Transition timeline={newProject}/>
      <div className="lg:px-10 px-2 py-8  bg-dark">
        <p className=" mt-12  text-xl  text-center mb-6" dir="rtl">
          درخواست انجام پروژه
        </p>
        <div className="h-[1px] w-full bg-yellow text-yellow "></div>
        <form className="mb-12">
          <div className="flex flex-col" dir="rtl">
            <div className="mt-10 flex ">
              <label htmlFor="name" className="">
                نام و نام خانوادگی
              </label>
              <div className="bg-yellow lg:h-12 h-14 w-[1px] mx-2"></div>
              <input
                type="text"
                id="name"
                className="border  p-2  border-dark2 bg-dark2 w-full"
                placeholder="پیمان کلانی"
              />
            </div>

            <div className="mt-10 flex">
              <label htmlFor="email" className="">
                آدرس ایمیل
              </label>
              <div className="bg-yellow lg:h-12 h-14 w-[1px] mx-2"></div>

              <input
                type="email"
                id="email"
                className="border  px-2   border-dark2 bg-dark2 w-full"
                placeholder="example@email.com"
              />
            </div>

            <div className="mt-10 flex ">
              <label htmlFor="phoneNumber" className="">
                شماره تماس
              </label>
              <div className="bg-yellow lg:h-12 h-14 w-[1px] mx-2"></div>

              <input
                type="number"
                id="phoneNumber"
                className="border  px-2   border-dark2 bg-dark2 w-full"
                placeholder="+98 933 389 3879"
              />
            </div>

            <div className="mt-10 flex">
              <label htmlFor="projectType" className="">
                نوع پروژه
              </label>
              <div className="bg-yellow lg:h-12 h-14 w-[1px] mx-2"></div>

              <select
                id="projectType"
                className="border  px-2   border-dark2 bg-dark2 w-full"
              >
                <option selected value="">
                  طراحی UI / UX
                </option>
                <option>salam</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="px-12 mt-12">
              <Button btnType="simple" btntxt="ارسال" route="/" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewProjectForm;
