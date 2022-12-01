import { Link } from "react-router-dom";

import "./style.css";

const HomeNavbar = () => {
  return (
    <>
      <header className="w-screen p-3 bg-white shadow overflow-x-hidden z-10">
        <div className="w-screen  flex justify-between p-3">
          <p className="text-black font-bold lg:text-xl text-2xl">
            {/* <Link to="/">NILL</Link> */}
          </p>
          {/* <div className="flex justify-between lg:w-32 w-3/6">
            <p className="text-black font-bold text-xl">منو</p>
          </div> */}
        </div>
      </header>
    </>
  );
};

export default HomeNavbar;
