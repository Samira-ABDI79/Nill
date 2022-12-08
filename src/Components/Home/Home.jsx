import images from "../../Importer/Importer";
import NewProject from "../NewProject/NewProject";
import ClosedProjects from "../ClosedProjects/ClosedProjects";
import EmployersComments from "./Components/EmployersComments";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import ProgressBar from "./Components/ProgressBar";
import Slider from "../Slider/Slider";
import WorkPlan from "./Components/WorkPlan";
import Slider2 from "../Slider/Slider2";
import "./style.css";
import Button from "../Button/Button";
import WaterEffect from "../WaterEffect/WaterEffect";


function Home() {

  const defaulttext =
    " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از  طراحان گرافیک است . ";
  return (
    <div>
      <div className="w-screen bg-white pb-12 ">
        <div className="container bg-white  lg:h-[1000px] grid gap-4 grid-cols-2 grid-rows-1 ">
        <div
            dir="rtl"
            className="flex justify-center items-center text-center col-span-1   lg:-mt-40"
          >
            <div className=" flex justify-center items-center flex-col ">
              <p className="text-blue font-bold text-4xl lg:text-3xl text-center">
                {" "}
                طراحی ست اداری شرکت hydeout
              </p>
              <div className="lg:w-5/6 text-center">
                <p className="text-black  font-bold text-2xl lg:text-xl mt-10 ">
                  این پرسش پیچیدهای است تقریباً نود درصد از احمقها احمق تربیت
                  شده اند و دلیل مادرزاد به دنیا آمدن این ده درصد همان نود درصدی
                  است که احمق تربیت شده اند. انسان از همان دیرباز زندگی عجیب و
                  غریبی داشته است عجیب و غریب از این نظر که به نحوی احتیاج به
                  افراد احمق داشته و دارد اگر احمقها نباشند جایی برای آدمهای به
                  اصطالح فهمیده، برای غولهای متفکر باقی نمیماند طبقة احمقها باید
                  باشد این تقریباً یک ضرورت تام است
                </p>
              </div>
              <Button btnType="simple" btntxt="مشاهده  پروژه" route="/" />
            </div>
          </div>
          <div className="col-span-1">
            <Slider2 />
          </div>
          
          <span className="NillDeveloper  absolute lg:-right-[415px] top-[473px] hidden lg:flex md:-right-[480px]">
            NILL DEVeLOPERS
          </span>
       
        </div>
      </div>

      {/* ********* finish firset component ---texst's and image's */}

      <div className="w-screen bg-black lg:pb-6 ">
        <div className="">
          <div className="container flex flex-col lg:flex-row items-center  mt-10 justify-between pb-4">

            <WaterEffect
              image1={images["Home/image 15.png"]}
              image2={images["Work/Rectangle 54.png"]}
              image3={images["Home/test/image2.jpg"]}
            />

            <div dir="rtl" className=" my-12 lg:my-0  lg:pb-6">
              <div className="lg:w-5/6">
                <p className="text-white font-bold text-4xl lg:text-4xl ">
                  {" "}
                  طراحی ست اداری شرکت hydeout
                </p>
                <p className="text-gray-dark  font-bold text-2xl lg:text-xl mt-10">
                  این پرسش پیچیدهای است تقریباً نود درصد از احمقها احمق تربیت
                  شده اند و دلیل مادرزاد به دنیا آمدن این ده درصد همان نود درصدی
                  است که احمق تربیت شده اند. انسان از همان دیرباز زندگی عجیب و
                  غریبی داشته است عجیب و غریب از این نظر که به نحوی احتیاج به
                  افراد احمق داشته و دارد اگر احمقها نباشند جایی برای آدمهای به
                  اصطالح فهمیده، برای غولهای متفکر باقی نمیماند طبقة احمقها باید
                  باشد این تقریباً یک ضرورت تام است
                </p>
                <Button route="/" btnType="simple" btntxt="بیشتر" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ************************* start WorkPlan */}
      <div className="bg-white">
        <div className="container lg:pr-32 ">
          <CustomBreadcrumbs
            pageName="خدمات ما"
            className="text-black"
            route=""
          />
          <p className="font-bold text-3xl lg:pr-2 pr-4  text-black" dir="rtl">
            زمینه های کاری ما{" "}
          </p>
        </div>
        <div className="bg-white w-screen flex justify-center items-center">
          <div className="py-24   w-4/6 container">
            <div className="grid gap-2 lg:grid-cols-3 grid-cols-1 lg:grid-rows-1  ">
              <div className="col-span-1 ">
                <WorkPlan
                  iconSource={images["Icons/AR.svg"]}
                  workHeader="3D Design & Modeling"
                  workParagraph={defaulttext}
                />
              </div>
              <div className="col-span-1">
                <WorkPlan
                  iconSource={images["Icons/Theme.svg"]}
                  workHeader="Graphic & UI/UX Design"
                  workParagraph={defaulttext}
                />
              </div>
              <div className="col-span-1">
                <WorkPlan
                  iconSource={images["Icons/Dashboard.svg"]}
                  workHeader="Web Design"
                  workParagraph={defaulttext}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ************************* end WorkPlan */}

      <div className="container" dir="rtl">
        <CustomBreadcrumbs pageName="پورتفولیو" route="" />
        <p className="font-bold text-3xl pr-8">پروژه های اخیر</p>
      </div>

      <div className="container">
        <Slider type="Project" />
      </div>

      {/* ********************************start  EmployersComments */}
      <div className="w-screen -my-1 bg-white">
        <div className="container lg:pr-32">
          <CustomBreadcrumbs
            pageName="پروژه ها"
            route=""
            className="text-black"
          />
          <p className="font-bold text-3xl lg:pr-2 pr-4  text-black" dir="rtl">
            نظرات کارفرمایان{" "}
          </p>
        </div>
      </div>
      <EmployersComments type="blue" />

      {/* ********************************end  EmployersComments */}
      <div className="container" dir="rtl">
        <CustomBreadcrumbs pageName="بلاگ" route="/blog" />
        <p className="font-bold text-3xl pr-8">اخبار و مقالات</p>
      </div>

      <div className="container">
        <Slider type="Blog" />
      </div>

      {/* ********************************start  ProgressBar */}

      <div className="w-screen -my-1 pt-10 bg-white">
        <div className="container lg:pr-32">
          <p className="font-bold text-3xl lg:pr-2 pr-4  text-black" dir="rtl">
            پروژه های در حال انجام{" "}
          </p>
        </div>
      </div>
      <ProgressBar />
      {/* ********************************end  ProgressBar */}
      <div className="w-screen -my-1 bg-black">
        <div className="container lg:pr-32">
          <p
            className="font-bold text-3xl lg:pr-2 pr-4 mt-10 text-white"
            dir="rtl"
          >
            {" "}
            پروژه های بسته شده{" "}
          </p>
        </div>
      </div>
      <ClosedProjects />

      <NewProject />
    </div>
  );
}

export default Home;
