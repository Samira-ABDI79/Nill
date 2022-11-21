import NewCommentsForm from "./Components/NewCommentsForm/NewCommentsForm";

import NewProjectForm from "../../Pages/NewProjectForm/NewProjectForm";


function About(){
    return (
        <>
          
          <div className="flex">
              <NewProjectForm/>
              <NewCommentsForm />
              </div>
        </>
    )
}

export default About;