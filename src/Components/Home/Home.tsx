
import images from "../../Importer/Importer";
import { Link } from "react-router-dom";
import NewProject from "../NewProject/NewProject";
import ClosedProjects from "../ClosedProjects/ClosedProjects";
import EmployersComments from "./Components/EmployersComments/EmployersComments"
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
function Home(){
    return (
     <>
            <CustomBreadcrumbs pageName="گرافیست  و طراح UX/UI" route=""/>
            <CustomBreadcrumbs pageName="گرافیست  و طراح UX/UI" route=""/>
            <CustomBreadcrumbs pageName="بلاگ" route="/blog"/>

            <CustomBreadcrumbs pageName="پورتفولیو "  route="/work"/>


     <div className="container bg-white ">
     <div className="container flex flex-col lg:flex-row md:flex-row">
     <div>
         <img src={images['Home/Rectangle 57.png']} alt="طراحی ست اداری" className="w-3/12 float-right" />
         <img src={images['Home/Rectangle 62.png']} alt="طراحی ست اداری" className="w-6/10" />
         <img src={images['Home/Rectangle 78.png']} alt="طراحی ست اداری" className="w-32" />

     </div>
     <div dir="rtl" className="flex justify-center items-center my-12 lg:my-0 md:my-0">
      <div className="">
      <p className="text-blue font-bold text-4xl lg:text-3xl "> طراحی ست اداری شرکت hydeout</p>
        <p className="text-black  font-bold text-2xl lg:text-xl mt-10">نتلنم نمفتثقن ثخصجح نتبی تثنقتف تقفتقه 
            نتلنقتت5فخهت
            نتلخقتلخت تقفتق نقتقنتفقخحک فف ق قق نکقنف صثقتثخحفخ نتفقخغخ 
            تنقانقمتا قفنتقنفت قنتقثفت ققنفتن 
        </p>
        <button className="bg-blue  text-white h-8 mt-12 hover:opacity-75 rounded px-12 font-semibold py-6 flex justify-center items-center">
  <Link to="">مشاهده  پروژه</Link>
  </button>
      </div>
  </div>
     </div>
     </div>

     {/* ********* finish firset component ---texst's and image's */}

     <div className="container bg-black ">
         <div className="">
         <div className="container  flex flex-col lg:flex-row md:flex-row mt-10 justify-between">
     <div>
         <img src={images['Home/image 15.png']} alt="طراحی ست اداری" className="w-3/7 " />
        

     </div>
     <div dir="rtl" className=" my-12 lg:my-0 md:my-0 ">
      <div className="lg:w-4/6">
      <p className="text-white font-bold text-4xl lg:text-3xl "> طراحی ست اداری شرکت hydeout</p>
        <p className="text-gray-dark  font-bold text-2xl lg:text-xl mt-10">نتلنم نمفتثقن ثخصجح نتبی تثنقتف تقفتقه 
            نتلنقتت5فخهت
            نتلخقتلخت تقفتق نقتقنتفقخحک فف ق قق نکقنف صثقتثخحفخ نتفقخغخ 
            تنقانقمتا قفنتقنفت قنتقثفت ققنفتن 
        </p>
        <button className="bg-blue  text-white h-8 mt-12 hover:opacity-75 rounded px-12 font-semibold py-6 flex justify-center items-center">
  <Link to="">بیشتر</Link>
  </button>
      </div>
  </div>
     </div>
         </div>
     
     </div>

{/* ************************* */}

<div className="container bg-white ">
     <div className="container flex flex-col lg:flex-row md:flex-row">
    <div> </div>
     </div>
     </div>

     <EmployersComments />
     <ClosedProjects />
<NewProject />
     </>
    )
}

export default Home;