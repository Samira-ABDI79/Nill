


function NewCommentsForm(){
    return (
        <>
<div className="px-10 py-8 bg-dark lg:pb-40 ">
<p className="font-normal mt-12  text-xl  text-center mb-6" dir="rtl">ثبت نظر</p>
<div className="h-1 w-full bg-yellow text-yellow "></div>
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

<textarea name="" id="" className="bg-dark2 p-2  mt-10" placeholder="نظر خود را بنویسید ..."></textarea>
    </div>
<div className="flex justify-center items-center mt-2"><button className="bg-blue   h-8 mt-12 hover:opacity-80  px-12 font-semibold py-6 flex justify-center items-center">
ارسال
  </button></div>
</form>

</div>
        </>
    )
}

export default NewCommentsForm;