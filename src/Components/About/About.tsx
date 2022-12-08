import NewCommentsForm from "./Components/NewCommentsForm";
import images from "src/Importer/Importer";
import NewProjectForm from "../../Pages/NewProjectForm/NewProjectForm";
import ClosedProjects from "../../Components/ClosedProjects/ClosedProjects";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import EmployersComments from "../Home/Components/EmployersComments";
import Members from "./Components/Members";
import OurServices from "./Components/OurServices";
import "./style.css";
function About() {
  return (
    <>
      <div className="container lg:px-20" dir="rtl">
        <h1 className="font-bold text-3xl "> شرکت طراحی Nill Developers</h1>
        <p className="text-lg mt-10">
          {" "}
          لومرم ایپسوم با تولید سادگی نامفهوم از صنعت چاپ ، و با استفاده از
          طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر
          آنچنان که لازم است ، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های
          متنوع با هدف بهبود ابزار های کاربردی می باشد.{" "}
        </p>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img src={images["Icons/ScrollDwn.svg"]} alt="ScrollDwn" className="w-12" />
      </div>
      <div dir="rtl" className="mt-10">
        <img
          src={images["About/image1.png"]}
          alt="about"
          className="w-screen lg:h-96 "
        />

        <div className="lg:w-1/3 w-full lg:bg-aboutGray bg-white back h-96 flex justify-center items-center px-10 lg:-mt-96 ">
          <div className="lg:text-white text-black ">
            <h1 className="font-bold text-3xl "> گستره فعالیت گروه ما</h1>

            <p className="text-lg mt-10">
              {" "}
              لومرم ایپسوم با تولید سادگی نامفهوم از صنعت چاپ ، و با استفاده از
              طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و مجله در ستون و
              سطر آنچنان که لازم است ، و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربرد های متنوع با هدف بهبود ابزار های کاربردی می باشد.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* *********************start OurServices */}
      <div className="container ">
        <CustomBreadcrumbs pageName="خدمات ما " route="" />
        <p className="font-bold text-3xl pr-8" dir="rtl">
          خدمات جدید طراحی گرافیک{" "}
        </p>
      </div>
      <OurServices />

      {/* *********************start Members */}

      <div className="container ">
        <CustomBreadcrumbs pageName="تیم ما" route="" />
        <p className="font-bold text-3xl pr-8" dir="rtl">
          اعضای گروه نیل
        </p>
      </div>
      <div className="container">
        <Members />
      </div>
      {/* *********************end Members */}
      <div className="container ">
        <CustomBreadcrumbs pageName="پروژه ها " route="" />
        <p className="font-bold text-3xl pr-8" dir="rtl">
          نظرات کارفرمایان{" "}
        </p>
      </div>

      <EmployersComments type="dark" />

      {/* *********************end EmployersComments */}

      <div className="container" dir="rtl">
        <p className="font-bold text-3xl pr-8">پروژه های اخیر</p>
      </div>
      <ClosedProjects />

      {/* *********************end ClosedProjects */}

      <div className="container" dir="rtl">
        <CustomBreadcrumbs pageName="ارتباط با ما" route="" />
        <p className="font-bold text-3xl pr-8">ثبت نظر یا پروژه جدید</p>
      </div>
      <div className="container mt-10">
        <div className="grid lg:grid-cols-2 lg:grid-rows-1  lg:gap-2 grid-cols-1 grid-rows-2  gap-4 mb-12">
          <div className="lg:row-span-1 ">
            <NewProjectForm />
          </div>
          <div className="lg:row-span-1">
            <NewCommentsForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
