
import {Teammate as TeammatePage} from "../../Components"
import CustomBreadcrumbs from "src/Components/CustomBreadcrumbs/CustomBreadcrumbs";


function Teammate (){
   
    return (
        <>
     
            <CustomBreadcrumbs pageName="گرافیست  و طراح UX/UI" route="/teammate"/>
        
        <TeammatePage />
        </>
    )
}

export default Teammate;