import { FaPhoneAlt, FaRegUser, FaTiktok, FaUniversity } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";

import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import useRole from "../../hooks/useRole";

const UpNavbar = () => {
  const [role, isLoading] = useRole();
  const { user, handleSignOut } = useAuth();
  return (
    <div className="bg-custom-bg">
      <div className="flex items-center justify-between flex-col lg:flex-row gap-3 max-w-screen-xl mx-auto py-4 text-white px-2">
        {/*----------Social-Media------Icon----------*/}
        <div className="text-2xl flex gap-4 mx-3 items-center justify-center ">
          <a
            href="https://youtube.com/@neuronnursingcoaching-nnc9654"
            target="_blank"
            className="hover:-translate-y-1 duration-200"
          >
            <IoLogoYoutube />
          </a>

          <a href="" className="hover:-translate-y-1 duration-200">
            {" "}
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100093095790723"
            target="_blank"
            className="hover:-translate-y-1 duration-200"
          >
            <FaFacebook />
          </a>

          <a href="" className="hover:-translate-y-1 duration-200">
            {" "}
            <FaLinkedin />
          </a>
          <a href="" className="hover:-translate-y-1 duration-200">
            {" "}
            <FaTiktok />
          </a>
        </div>
        {/*---------Phone-----&-----Admition-------*/}
        <div className="flex items-center gap-4 ">
            <div className=" flex gap-2 items-center ">
              <FaPhoneAlt className="text-xl" />
              <div className="">
                <p className="mt-1 font-medium"> 01730577236, 01743913455</p>

                {/* <p className="mt-1 font-medium"> Hotline: +8801847066362</p> */}
              </div>
            </div>
            <Link to={"/admition"}>
              <div className=" flex gap-2 items-center ">
                <FaUniversity className="text-xl" />
                <p className=" font-medium mt-2"> ADMISSION</p>
              </div>
            </Link>
        </div>
         {/*---------Users----&------Profile--------*/}
        <div>
          {user ? (
            <div className="flex justify-center gap-4">
              {user.photoURL ? (
                <div className="dropdown dropdown-bottom dropdown-end z-50">
                  {" "}
                  {/* Higher z-index */}
                  <div className="flex gap-1">
                    <div tabIndex={0} role="button">
                      <img
                        src={user.photoURL}
                        alt=""
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div className="">
                      {" "}
                      <button onClick={handleSignOut} className="text-3xl btn">
                        <TbLogout />
                      </button>
                    </div>
                  </div>
                  <ul className="dropdown-content z-50 menu p-2 space-y-3 font-medium shadow bg-base-100 rounded-box w-52 text-black">
                    <li className="text-lg text-center">{user?.displayName}</li>
                    <li className=" text-center">{user?.email}</li>
                    {role === "Admin" && (
                      <Link to={"/dashboard"}>
                        <li className=" bg-custom-bg text-white px-2 py-3 text-center ">
                          {" "}
                          Dashboard
                        </li>
                      </Link>
                    )}

                    <li>
                      <button onClick={handleSignOut} className="text-3xl btn">
                        <TbLogout />
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="dropdown dropdown-bottom dropdown-end z-50">
                  {" "}
                  {/* Higher z-index */}
                  <div className="flex gap-1">
                    <div tabIndex={0} role="button">
                      <img
                        src="https://i.ibb.co/gv6gcNR/image.png"
                        alt=""
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div className="">
                      {" "}
                      <button onClick={handleSignOut} className="text-3xl btn">
                        <TbLogout />
                      </button>
                    </div>
                  </div>
                  <ul className="dropdown-content z-50 menu p-2 space-y-3 font-medium shadow bg-base-100 rounded-box w-52">
                    <li className="text-lg">{user?.displayName}</li>
                    <li className="">{user?.email}</li>
                    <li>
                      <button onClick={handleSignOut} className="text-3xl btn">
                        <TbLogout />
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2 justify-center">
              <Link to={"/login"}>
                <button className="rounded-lg border-2  px-4 py-2 font-medium text-lg flex gap-1 items-center text-center">
                  <FaRegUser /> <span className="text-center mt-1 ">Login</span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpNavbar;
