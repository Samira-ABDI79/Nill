import { Link } from "react-router-dom";
import images from "../../Importer/Importer";
function NotFound(){
    return (
        <>
      <div className="h-screen w-screen bg-white pt-4">
      <div className=" px-4 lg:px-0 flex justify-center items-center mt-12 pb-20 bg-white">
  <div className="lg:w-3/6  flex flex-col justify-center items-center bg-white">
<img src={images['NotFound/error.jpeg']} className="rounded-lg bg-white"alt="error 404" loading="lazy"/>

  <h1 className="font-bold mt-12   text-2xl text-red " dir="rtl">
صفحه مورد نظر یافت نشد !
  </h1>
  <p className="mt-12 font-bold text-black " dir="rtl">
   احتمالا این صفحه به آدرس دیگری تغییر کرده و یا حذف شده است .
  </p>
  <button className="bg-blue lg:w-3/6 text-white h-8 mt-12 hover:opacity-75 rounded lg:px-12 px-4 font-semibold py-6 flex justify-center items-center w-44">
  <Link to="/">بازگشت به صفحه اصلی</Link>
  </button>
  </div>
</div>
      </div>
        </>
    )
}

export default NotFound;