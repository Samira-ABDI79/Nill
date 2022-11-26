
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Drawer from "./Drawer";
import PostNavbar from "./PostNavbar";

function PostLayout() {
  return (
    <>
      <PostNavbar />
      <Drawer flag="Post"/>
      <Outlet />
      <Footer />
    </>
  );
}

export default PostLayout;
