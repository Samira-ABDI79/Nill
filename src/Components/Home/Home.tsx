import images from "../../Importer/Importer";
import { Link } from "react-router-dom";
import NewProject from "../NewProject/NewProject";
import ClosedProjects from "../ClosedProjects/ClosedProjects";
import EmployersComments from "./Components/EmployersComments";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import ProgressBar from "./Components/ProgressBar";
import Slider from "../Slider/Slider";
import WorkPlan from "./Components/WorkPlan";
import HomeSlider from "../HomeSlider/HomeSlider";
import "./style.css";
import Button from "../Button/Button";
function Home() {
  const defaulttext =
    " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از  طراحان گرافیک است . ";
  return (
    <div>
      <div className="w-screen bg-white pb-12 ">
        <div className="container bg-white  lg:h-[1000px] lg:relative">
          <div className="">
            <HomeSlider />
          </div>
          <div
            dir="rtl"
            className="flex justify-center items-center my-12 lg:my-0 md:my-0  lg:w-4/12  lg:absolute lg:right-20 lg:top-44 w-full pb-4 "
          >
            <div className="mt-20 lg:py-12 lg:pr-4 ">
              <p className="text-blue font-bold text-4xl lg:text-3xl ">
                {" "}
                طراحی ست اداری شرکت hydeout
              </p>
              <div className="lg:w-5/6">
                <p className="text-black  font-bold text-2xl lg:text-xl mt-10">
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
          <span className="NillDeveloper  absolute lg:-right-[447px] top-[420px] hidden lg:flex md:-right-[480px]">
            NILL DEVeLOPERS
          </span>
          {/* <span className="text-stroke-inner hidden md:block">
            NILL DEVELOPERS
          </span> */}
        </div>
      </div>

      {/* ********* finish firset component ---texst's and image's */}

      <div className="w-screen bg-black lg:pb-6 ">
        <div className="">
          <div className="container  flex flex-col lg:flex-row  mt-10 justify-between pb-4">
            <img
              src={images["Home/image 15.png"]}
              alt="طراحی ست اداری"
              className="w-full  "
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
          <CustomBreadcrumbs pageName="خدمات ما" className="text-black" route="" />
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
