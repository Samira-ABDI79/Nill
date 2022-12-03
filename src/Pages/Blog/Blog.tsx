import {Blog as BlogPage} from "../../Components"
import CustomBreadcrumbs from "src/Components/CustomBreadcrumbs/CustomBreadcrumbs";
import Transition from "src/Components/Transition/Transition";
import gsap from 'gsap';
function Blog (){
  const blog = gsap.timeline();

    return (
        <>
         <Transition timeline={blog}/>
        <CustomBreadcrumbs pageName="بلاگ" route="/blog"/>
        <BlogPage />
        </>
    )
}

export default Blog;