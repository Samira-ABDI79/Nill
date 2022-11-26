
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Drawer from "./Drawer";
import HomeNavbar from "./HomeNavbar";

function HomeLayout() {
  return (
    <>
      <HomeNavbar />
      <Drawer flag="Home"/>
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;
