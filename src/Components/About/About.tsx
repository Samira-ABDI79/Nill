import NewCommentsForm from "./Components/NewCommentsForm/NewCommentsForm";

import NewProjectForm from "../../Pages/NewProjectForm/NewProjectForm";


function About(){
    return (
        <>
          
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