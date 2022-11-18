import { Link } from "react-router-dom";
import images from "../../Importer/Importer";
function NotFound(){
    return (
        <>
      <div className=" flex justify-center items-center mt-12 pb-20">
  <div className="w-3/6 flex flex-col justify-center items-center">
<img src={images['NotFound/error.jpeg']} className="rounded-lg"alt="error 404" loading="lazy"/>

  <h1 className="font-bold mt-12  text-2xl text-red " dir="rtl">
صفحه مورد نظر یافت نشد !
  </h1>
  <p className="mt-12 font-bold " dir="rtl">
   احتمالا این صفحه به آدرس دیگری تغییر کرده و یا حذف شده است .
  </p>
  <button className="bg-blue w-3/6 text-white h-8 mt-12 hover:opacity-75 rounded px-12 font-semibold py-6 flex justify-center items-center">
  <Link to="/">بازگشت به صفحه اصلی</Link>
  </button>
  </div>
</div>
        </>
    )
}

export default NotFound;