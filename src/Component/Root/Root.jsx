import { Outlet } from "react-router-dom";
import Navbar from "../Navigationbar/Navbar/Navbar";

import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className=" fon bangla">
        <Navbar></Navbar>
      </div>
      <div className="fon bangla ">
        <Outlet />
      </div>
      <div className="fon bangla py-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
