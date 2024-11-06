import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../assets/logonu.png";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <ul className="menu menu-sm mt-3 p-2 bg-base-100 rounded-box w-full">
        {/* Navigation Links for Drawer */}
        {/*----------NavLink--------1--------*/}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-xl font-semibold px-6 pt-3 pb-2"
              : isActive
              ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
              : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
          }
        >
          হোম
        </NavLink>
        {/*----------NavLink--------2--------*/}
        <NavLink
          to="/AllCorsess"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-xl font-semibold px-6 pt-3 pb-2"
              : isActive
              ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
              : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
          }
        >
          কোর্সসমূহ
        </NavLink>
        {/*----------NavLink--------3--------*/}
        <NavLink
          to="/AboutUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-xl font-semibold px-6 pt-3 pb-2"
              : isActive
              ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
              : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
          }
        >
          আমাদের সম্পর্কে
        </NavLink>
        {/*----------NavLink--------4-------*/}
        <NavLink
          to="/Allbranch"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-xl font-semibold px-6 pt-3 pb-2"
              : isActive
              ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
              : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
          }
        >
          শাখাসমূহ
        </NavLink>
        {/*----------NavLink--------5--------*/}
        <NavLink
          to="/AllBooks"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-xl font-semibold px-6 pt-3 pb-2"
              : isActive
              ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
              : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
          }
        >
          বই
        </NavLink>
        {/*----------NavLink--------6--------*/}
        <NavLink
          to="/photogalary"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-xl font-semibold px-6 pt-3 pb-2"
              : isActive
              ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
              : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
          }
        >
          ফটো গ্যালারি
        </NavLink>
        {/*----------NavLink--------7--------*/}
        <NavLink
          to="/vediogalary"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-xl font-semibold px-6 pt-3 pb-2"
              : isActive
              ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
              : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
          }
        >
          ভিডিও গ্যালারি
        </NavLink>
      </ul>
    </Box>
  );
  // bg-white sticky inset-0 z-10  w-full max-w-full rounded-none border  bg-opacity-30 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2
  return (
    <div className="flex items-center justify-between  z-50 max-w-screen-xl mx-auto py-2 banglahed">
      {/* Navbar start */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="ml-4">
          <Link to={"/"}>
            {" "}
            <div className="flex justify-center items-center gap-2">
              <img src={Logo} className="w-[60px]" alt="Logo" />
              <div>
                <p className="tracking-wider text-2xl md:text-4xl lg:text-4xl font-bold bg-clip-text text-transparent bg-custom-bg">
                  NEURON
                </p>
                <p className="tracking-tight hidden md:block text-xs font-semibold">
                  Nursing Admission Coaching
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Drawer button */}
        <div className="block lg:hidden">
          <Button onClick={toggleDrawer(true)}>
            <GiHamburgerMenu className="text-3xl text-black" />
          </Button>
        </div>
      </div>

      {/* Main navigation */}
      <div className=" flex gap-4">
        <div className="hidden lg:flex">
          <ul className="flex font-semibold items-center">
            {/* Navigation Links for Desktop */}
            {/*-------Sidebar------NavLink------1------*/}
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-xl font-semibold px-6 pt-3 pb-2"
                  : isActive
                  ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
                  : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
              }
            >
              হোম
            </NavLink>
            {/*-------Sidebar------NavLink------2------*/}
            <NavLink
              to="/AllCorsess"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-xl font-semibold px-6 pt-3 pb-2"
                  : isActive
                  ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
                  : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
              }
            >
              কোর্সসমূহ
            </NavLink>
            {/*-------Sidebar------NavLink------3------*/}
            <NavLink
              to="/AboutUs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-xl font-semibold px-6 pt-3 pb-2"
                  : isActive
                  ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
                  : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
              }
            >
              আমাদেরসম্পর্কে
            </NavLink>
            {/*-------Sidebar------NavLink------4------*/}
            <NavLink
              to="/Allbranch"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-xl font-semibold px-6 pt-3 pb-2"
                  : isActive
                  ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
                  : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
              }
            >
              শাখাসমূহ
            </NavLink>
            {/*-----------Dropdown--------Navbar------*/}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
              >
                গ্যালারি
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1]  p-2 shadow w-44 "
              >
                {/*-------Sidebar------NavLink------6------*/}
                <NavLink
                  to="/photogalary"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-xl font-semibold px-6 pt-3 pb-2"
                      : isActive
                      ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2 "
                      : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
                  }
                >
                  ফটো গ্যালারি
                </NavLink>
                {/*-------Sidebar------NavLink------7------*/}
                <NavLink
                  to="/vediogalary"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "text-xl font-semibold px-6 pt-3 pb-2"
                      : isActive
                      ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
                      : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
                  }
                >
                  ভিডিও গ্যালারি
                </NavLink>
              </ul>
            </div>
            {/*-------Sidebar------NavLink------5------*/}
            <NavLink
              to="/AllBooks"
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-xl font-semibold px-6 pt-3 pb-2"
                  : isActive
                  ? "border-b-[3px] border-custom-bg text-xl font-semibold bg-custom-bg text-white px-6 pt-3 pb-2"
                  : "text-xl font-semibold group flex cursor-pointer flex-col px-6 pt-3 pb-2"
              }
            >
              বই
            </NavLink>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>

      {/* Drawer for mobile view */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Navbar;
