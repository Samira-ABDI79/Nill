import NewCommentsForm from "./Components/NewCommentsForm/NewCommentsForm";
import NewProjectForm from "./Components/NewProjectForm/NewProjectForm";

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