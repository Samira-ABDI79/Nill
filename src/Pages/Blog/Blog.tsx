import {Blog as BlogPage} from "../../Components"
import CustomBreadcrumbs from "src/Components/CustomBreadcrumbs/CustomBreadcrumbs";
function Blog (){
    return (
        <>
        <CustomBreadcrumbs pageName="بلاگ" route="/blog"/>
        <BlogPage />
        </>
    )
}

export default Blog;