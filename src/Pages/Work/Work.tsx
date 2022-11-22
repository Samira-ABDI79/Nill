
import {Work as WorkPage} from "../../Components"
import CustomBreadcrumbs from "src/Components/CustomBreadcrumbs/CustomBreadcrumbs";

function Work (){
    return (
        <>
            <CustomBreadcrumbs pageName="پورتفولیو "  route="/work"/>

        <WorkPage />
        </>
    )
}

export default Work;