
import images from "../../Importer/Importer";
import NewProject from "../NewProject/NewProject";
import ClosedProjects from "../ClosedProjects/ClosedProjects";
import EmployersComments from "./Components/EmployersComments/EmployersComments"
function Home(){
    return (
     <>
     <EmployersComments />
     <ClosedProjects />
<NewProject />
     </>
    )
}

export default Home;