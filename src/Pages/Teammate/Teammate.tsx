
import {Teammate as TeammatePage} from "../../Components"
import CustomBreadcrumbs from "src/Components/CustomBreadcrumbs/CustomBreadcrumbs";
import Transition from "src/Components/Transition/Transition";
import gsap from 'gsap';

function Teammate (){
  const teammate = gsap.timeline();

   
    return (
        <>
      <Transition timeline={teammate}/>
            <CustomBreadcrumbs pageName="گرافیست  و طراح UX/UI" route="/teammate"/>
        
        <TeammatePage />
        </>
    )
}

export default Teammate;