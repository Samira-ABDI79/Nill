import {Post as PostPage} from "../../Components"
import Transition from "src/Components/Transition/Transition";
import gsap from 'gsap';
function Post (){
  const post = gsap.timeline();

    return (
        <>
         <Transition timeline={post}/>
        <PostPage />
        </>
    )
}

export default Post;