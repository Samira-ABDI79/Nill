import NewCommentsForm from "./Components/NewCommentsForm";
import images from "src/Importer/Importer";
import NewProjectForm from "../../Pages/NewProjectForm/NewProjectForm";
import ClosedProjects from "../../Components/ClosedProjects/ClosedProjects";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import EmployersComments from "../Home/Components/EmployersComments/EmployersComments";
import Members from "./Components/Members";
import OurServices from "./Components/OurServices/OurServices";
function About(){
    return (
        <>
        {/* <div className="container px-20">
            <h1 className="font-bold lg:text-3xl text-4xl" dir="rtl"> شرکت طراحی Nill Developers</h1>
            <p className="font-bold lg:text-xl text-2xl" dir="rtl"> لومرم ایپسوم با تولید سادگی نامفهوم از صنعت چاپ ، و با استفاده از طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است ، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزار های کاربردی می باشد. </p>


        </div>
     <div dir="rtl">
          
       <img src={images["About/image1.png"]} alt="about" className="w-screen lg:h-96 " />

<div className="lg:w-1/3 w-full lg:bg-blue h-96 flex justify-center items-center px-10 lg:-mt-96 ">
<p className="font-bold lg:text-xl text-2xl" dir="rtl"> لومرم ایپسوم با تولید سادگی نامفهوم از صنعت چاپ ، و با استفاده از طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است ، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزار های کاربردی می باشد. </p>

</div>
     </div>
      */}
{/* *********************start OurServices */}
<OurServices />

{/* *********************start Members */}

      <div className="container ">
<CustomBreadcrumbs pageName="تیم ما" route="" />
<p className="font-bold text-3xl pr-8"dir="rtl">اعضای گروه نیل</p>

</div>
<div className="container">
<Members />
</div>
{/* *********************end Members */}
<div className="container ">
<CustomBreadcrumbs pageName="پروژه ها " route="" />
<p className="font-bold text-3xl pr-8"dir="rtl">نظرات کارفرمایان </p>

</div>

<EmployersComments  type="dark"/>

{/* *********************end EmployersComments */}



<div className="container" dir="rtl">
       
        <p className="font-bold text-3xl pr-8">پروژه های اخیر</p>
        </div>
     <ClosedProjects />

{/* *********************end ClosedProjects */}

     <div className="container" dir="rtl">
        <CustomBreadcrumbs pageName="ارتباط با ما" route=""/>
        <p className="font-bold text-3xl pr-8">ثبت نظر یا  پروژه جدید</p>
        </div>
        <div className="container">
        <div className="flex   flex-col lg:flex-row md:flex-row lg:my-12 md:my:12 ">
             <div className="lg:w-[100%] lg:mr-10 md:mr-10 my-12 lg:my-0  md:my-0">
             <NewProjectForm/>
             </div>
             <div className="lg:w-[100%] my-12 lg:my-0 md:my-0">
              <NewCommentsForm  />
              </div>
              </div>
        </div>
        </>
    )
}

export default About;