
import {Work as WorkPage} from "../../Components"
import CustomBreadcrumbs from "src/Components/CustomBreadcrumbs/CustomBreadcrumbs";
import Transition from "src/Components/Transition/Transition";
import gsap from 'gsap';
function Work (){
  const work = gsap.timeline();

    return (
        <>
         <Transition timeline={work}/>
            <CustomBreadcrumbs pageName="پورتفولیو "  route="/work"/>

        <WorkPage />
        </>
    )
}

export default Work;