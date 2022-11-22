import NewCommentsForm from "./Components/NewCommentsForm/NewCommentsForm";

import NewProjectForm from "../../Pages/NewProjectForm/NewProjectForm";


function About(){
    return (
        <>
        <div className="container px-20">
            <h1 className="font-bold lg:text-3xl text-4xl" dir="rtl"> شرکت طراحی Nill Developers</h1>
            <p className="font-bold lg:text-xl text-2xl" dir="rtl"> لومرم ایپسوم با تولید سادگی نامفهوم از صنعت چاپ ، و با استفاده از طراحان گرافیک است . چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است ، و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزار های کاربردی می باشد. </p>


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