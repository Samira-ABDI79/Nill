


function NewProjectForm(){
    return (
        <>
        <div className="px-10 py-8 bg-screen">
        <p className="font-normal mt-12  text-xl text-white text-center mb-6" dir="rtl">درخواست انجام پروژه</p>
        <div className="h-1 w-full bg-yellow text-yellow "></div>
        <form className="mb-12">
            <div className="flex flex-col" dir="rtl">
             <div className="mt-10 flex">
             <label  className="font-normal  pl-2 text-xl text-white " >نام و نام خانوادگی</label>
                <input type="" id="" className="border  p-2 w-auto border-dark bg-dark" placeholder="پیمان" />
             </div>
             <div className="mt-10 flex">
             <label  className="font-normal pl-2  text-xl text-white " >آدرس ایمیل</label>
                <input type="email" id="" className="border  p-2 w-auto bg-dark border-dark" placeholder="email" />
        </div>
            </div>
        <div className="flex justify-center items-center"><button className="bg-blue   h-8 mt-12 hover:opacity-80 text-white px-12 font-semibold py-6 flex justify-center items-center">
        ارسال
          </button></div>
        </form>
        
        </div>
        </>
    )
}

export default NewProjectForm;