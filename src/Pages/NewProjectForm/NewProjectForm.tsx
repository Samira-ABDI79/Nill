


function NewProjectForm(){
    return (
        <>
        <div className="px-10 py-8 bg-dark">
        <p className="font-normal mt-12  text-xl  text-center mb-6" dir="rtl">درخواست انجام پروژه</p>
        <div className="h-[1px] w-full bg-yellow text-yellow "></div>
        <form className="mb-12">
            <div className="flex flex-col" dir="rtl">

             <div className="mt-10 flex ">
             <label htmlFor="name"  className="font-normal  pl-2 text-xl w-[20%]  lg:w-[15%]" >نام و نام خانوادگی</label>
             <div className="after:block after:bg-yellow after:w-[1px] after:h-14 after:mx-auto after:my-2 ml-4"></div>
                <input type="text" id="name" className="border  p-2  border-dark2 bg-dark2 w-full" placeholder="پیمان کلانی" />
             </div>



             <div className="mt-10 flex">
             <label htmlFor="email" className="font-normal pl-2  text-xl  w-[20%]  lg:w-[12%]" >آدرس ایمیل</label>
             <div className="after:block after:bg-yellow after:w-[1px] after:h-14 after:mx-auto after:my-2 ml-4"></div>

                <input type="email" id="email" className="border  p-2 w-full bg-dark2 border-dark2" placeholder="example@email.com" />
        </div>

        <div className="mt-10 flex ">
             <label htmlFor="phoneNumber" className="font-normal pl-2  text-xl  w-[20%]  lg:w-[11%]" >شماره تماس</label>
             <div className="after:block after:bg-yellow after:w-[1px] after:h-14 after:mx-auto after:my-2 ml-4"></div>

                <input type="number" id="phoneNumber" className="border  p-2 w-full bg-dark2 border-dark2" placeholder="+98 933 389 3879" />
        </div>

        <div className="mt-10 flex">
             <label htmlFor="projectType"  className="font-normal pl-2  text-xl border-dark2 w-[20%]  lg:w-[10%]" >نوع پروژه</label>
             <div className="after:block after:bg-yellow after:w-[1px] after:h-14 after:mx-auto after:my-2 ml-4"></div>

             <select id="projectType" className="border  p-2 w-full bg-dark2 border-dark2">
                 <option selected value="">طراحی UI / UX</option>
                 <option>salam</option>
             </select>
        </div>
            </div>
        <div className="flex justify-center items-center"><button className="bg-blue   h-8 mt-12 hover:opacity-80  px-12 font-semibold py-6 flex justify-center items-center">
        ارسال
          </button></div>
        </form>
        
        </div>
        </>
    )
}

export default NewProjectForm;