


function NewCommentsForm(){
    return (
        <>
<div className="lg:px-10 px-2 py-8 bg-dark  ">
<p className="mt-12  text-xl  text-center mb-6" dir="rtl">ثبت نظر</p>
<div className="h-[1px] w-full bg-yellow text-yellow "></div>
<form className="mb-12">
    <div className="flex flex-col" dir="rtl">

    <div className="mt-10 flex ">
             <label htmlFor="name"  className="" >نام و نام خانوادگی</label>
             <div className="bg-yellow lg:h-12 h-14 w-[1px] mx-2"></div>
                <input type="text" id="name" className="border  px-2   border-dark2 bg-dark2 w-full" placeholder="پیمان کلانی" />
             </div>
             

             <div className="mt-10 flex">
             <label htmlFor="email" className="" >آدرس ایمیل</label>
             <div className="bg-yellow lg:h-12 h-14 w-[1px] mx-2"></div>

                <input type="email" id="email" className="border  px-2  w-full bg-dark2 border-dark2" placeholder="example@email.com" />
        </div>

<textarea name="" id="" className="bg-dark2 p-2  mt-10" placeholder="نظر خود را بنویسید ..." rows={5}></textarea>
    </div>
<div className="flex justify-center items-center "><button className="bg-blue   h-8 mt-12 hover:opacity-80  px-12 font-semibold py-6 flex justify-center items-center">
ارسال
  </button></div>
</form>

</div>
        </>
    )
}

export default NewCommentsForm;