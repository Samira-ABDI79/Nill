
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Drawer from "./Drawer";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Drawer flag={false} />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
