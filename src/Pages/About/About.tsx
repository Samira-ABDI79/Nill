import {About as AboutPage} from "../../Components"
import CustomBreadcrumbs from "src/Components/CustomBreadcrumbs/CustomBreadcrumbs";


function About(){
    return (
        <>
        <CustomBreadcrumbs pageName="درباره ما" route="/about"/>

     <AboutPage />
        </>
    )
}

export default About;