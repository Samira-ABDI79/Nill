
import images from "../../Importer/Importer";
import { Link } from "react-router-dom";
import NewProject from "../NewProject/NewProject";
import ClosedProjects from "../ClosedProjects/ClosedProjects";
import EmployersComments from "./Components/EmployersComments/EmployersComments"
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import Slider from "../Slider/Slider";
import WorkPlan from "./Components/WorkPlan/WorkPlan";
function Home(){
  const defaulttext =" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از  طراحان گرافیک است . "
    return (
     <>
        


     <div className="w-screen bg-white pb-12">
     <div className="container flex  lg:flex-row md:flex-row flex-col-reverse">
     <div className="">
         <img src={images['Home/Rectangle 57.png']} alt="طراحی ست اداری" className="w-full lg:w-7/12 float-right lg:h-52" />
         <img src={images['Home/Rectangle 62.png']} alt="طراحی ست اداری" className="w-full lg:w-6/10" />
         <img src={images['Home/Rectangle 78.png']} alt="طراحی ست اداری" className="w-full lg:w-32" />

     </div>
     <div dir="rtl" className="flex justify-center items-center my-12 lg:my-0 md:my-0">
      <div className="">
      <p className="text-blue font-bold text-4xl lg:text-3xl "> طراحی ست اداری شرکت hydeout</p>
       <div className="lg:w-4/6">
       <p className="text-black  font-bold text-2xl lg:text-xl mt-10">
           این پرسش پیچیدهای است تقریباً نود درصد از احمقها احمق تربیت شده اند و دلیل مادرزاد به دنیا آمدن 
این ده درصد همان نود درصدی است که احمق تربیت شده اند.
انسان از همان دیرباز زندگی عجیب و غریبی داشته است عجیب و غریب از این نظر که به نحوی احتیاج به 
افراد احمق داشته و دارد اگر احمقها نباشند جایی برای آدمهای به اصطالح فهمیده، برای غولهای متفکر 
باقی نمیماند طبقة احمقها باید باشد این تقریباً یک ضرورت تام است
        </p>
       </div>
        <button className="bg-blue  text-white h-8 mt-12 hover:opacity-75 rounded px-12 font-semibold py-6 flex justify-center items-center">
  <Link to="">مشاهده  پروژه</Link>
  </button>
      </div>
  </div>
     </div>
     </div>

     {/* ********* finish firset component ---texst's and image's */}

     <div className="w-screen bg-black ">
         <div className="">
         <div className="container  flex flex-col lg:flex-row md:flex-row mt-10 justify-between pb-4">
    
         <img src={images['Home/image 15.png']} alt="طراحی ست اداری" className="w-full  " />
        

    
     <div dir="rtl" className=" my-12 lg:my-0 md:my-0 lg:pb-6">
      <div className="lg:w-5/6">
      <p className="text-white font-bold text-4xl lg:text-4xl "> طراحی ست اداری شرکت hydeout</p>
        <p className="text-gray-dark  font-bold text-2xl lg:text-xl mt-10">
           این پرسش پیچیدهای است تقریباً نود درصد از احمقها احمق تربیت شده اند و دلیل مادرزاد به دنیا آمدن 
این ده درصد همان نود درصدی است که احمق تربیت شده اند.
انسان از همان دیرباز زندگی عجیب و غریبی داشته است عجیب و غریب از این نظر که به نحوی احتیاج به 
افراد احمق داشته و دارد اگر احمقها نباشند جایی برای آدمهای به اصطالح فهمیده، برای غولهای متفکر 
باقی نمیماند طبقة احمقها باید باشد این تقریباً یک ضرورت تام است
        </p>
        <button className="bg-blue   h-8 mt-12 hover:opacity-75  lg:px-12 w-28 font-semibold py-6 flex justify-center items-center text-lg">
  <Link to="">بیشتر</Link>
  </button>
      </div>
  </div>
     </div>
         </div>
     
     </div>

{/* ************************* start WorkPlan */} 
<div className="bg-white w-screen flex justify-center items-center">
<div className="py-24  bg-pink w-4/6 container">
<div className="grid gap-2 grid-cols-3 grid-rows-1 ">
  <div className="col-span-1 ">
  <WorkPlan 
iconSource={images['Icons/AR.svg']}
workHeader="3D Design & Modeling"
workParagraph={defaulttext} 
/>
  </div>
  <div className="col-span-1">
  <WorkPlan 
iconSource={images['Icons/Theme.svg']}
workHeader="Graphic & UI/UX Design"
workParagraph={defaulttext} 
/>
    </div>
    <div className="col-span-1">
    <WorkPlan 
iconSource={images['Icons/Dashboard.svg']}
workHeader="Web Design"
workParagraph={defaulttext} 
/>
    </div>




</div>
</div>
</div>
{/* ************************* end start WorkPlan */}


<div className="container" dir="rtl">
        <CustomBreadcrumbs pageName="پورتفولیو" route=""/>
        <p className="font-bold text-3xl pr-8">پروژه های اخیر</p>
        </div>

        <div className="container">
          <Slider type="Project"/>
        </div>
        <div className="container" dir="rtl">
        <CustomBreadcrumbs pageName="بلاگ" route="/blog"/>
        <p className="font-bold text-3xl pr-8">اخبار و مقالات</p>
        </div>

        <div className="container">
          <Slider type="Blog"/>
        </div>


     {/* <EmployersComments /> */}
     <ProgressBar />
     <ClosedProjects />
<NewProject />
     </>
    )
}

export default Home;