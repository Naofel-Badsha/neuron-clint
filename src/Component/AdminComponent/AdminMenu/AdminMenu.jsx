import { NavLink } from "react-router-dom";

import { FaFileImage, FaHouseMedical, FaRegImage } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { MdMenuBook } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { FaRegImages, FaTextWidth, FaUsers, FaYoutube } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { PiStudentBold } from "react-icons/pi";
import { GrBook } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";

const AdminMenu = () => {
  const { handleSignOut } = useAuth();
  return (
    <div className="flex">
      {/*-----dashboard-----side-----bar-----*/}
      <div className="w-64 min-h-screen bg-gray-300">
        <ul className="menu p-4">
          {/*-----------Navlink-------1-------*/}
          <li>
            <NavLink className="text-xl"  to="/dashboard/ManageUser">
              <FaUsers className="text-3xl" />
              Manage User
            </NavLink>
          </li>
          {/*-----------Navlink-------2-------*/}
          <div className="divider my-5"></div>
          <li>
            <NavLink className="text-xl" to="/dashboard/AddContest">
              <MdMenuBook className="text-3xl" />
              Add Courses{" "}
            </NavLink>
          </li>
          {/*-----------Navlink-------3-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/Managecurse">
              <MdMenuBook className="text-3xl" />
              Manage Curse{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          {/*-----------Navlink-------4-------*/}
          <li>
            <NavLink className="text-xl" to="/dashboard/Slidersimg">
              <FaRegImages className="text-3xl" />
              Sliders Img{" "}
            </NavLink>
          </li>
          {/*-----------Navlink-------5-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/Slidersimgsmoll">
              <FaFileImage className="text-3xl" />
              Slidersimg Smoll{" "}
            </NavLink>
          </li>
          {/*-----------Navlink-------5-------*/}
          <div className="divider my-5"></div>
          {/*-----------Navlink-------6-------*/}
          <li>
            <NavLink className="text-xl" to="/dashboard/Addbook">
              <ImBook className="text-3xl" />
              Add book{" "}
            </NavLink>
          </li>
          {/*-----------Navlink-------7-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/ManageBook">
              <ImBook className="text-3xl" />
              Manage Book{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          {/*-----------Navlink-------8-------*/}
          <li>
            <NavLink className="text-xl" to="/dashboard/AddSuccessfulstudents">
              <PiStudentBold className="text-3xl" />
              Add Success Students{" "}
            </NavLink>
          </li>
          {/*-----------Navlink-------9-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/ManageSuccessfulstudents">
              <PiStudentBold className="text-3xl" />
              Manage Success Students{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          {/*-----------Navlink-------10-------*/}
          <li>
            <NavLink className="text-xl" to="/dashboard/AddImage">
              <FaRegImage className="text-3xl" />
              Add Image{" "}
            </NavLink>
          </li>
          {/*-----------Navlink-------11-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/ManageImage">
              <FaRegImage className="text-3xl" />
              Manage Image{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          {/*-----------Navlink-------12-------*/}
          <li>
            <NavLink className="text-xl" to="/dashboard/AddVedio">
              <FaYoutube className="text-3xl" />
              Add Vedio{" "}
            </NavLink>
          </li>
          {/*-----------Navlink-------13-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/ManageVedio">
              <FaYoutube className="text-3xl" />
              Manage Vedio{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          {/*-----------Navlink-------14-------*/}
          <li>
            <NavLink className="text-xl" to="/dashboard/AddHeadline">
              <FaTextWidth className="text-3xl" />
              Add Headline{" "}
            </NavLink>
          </li>
          {/*-----------Navlink-------15-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/ManageHeadline">
              <FaTextWidth className="text-3xl" />
              Manage Headline{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          {/*-----------Navlink-------16-------*/}
          <li>
            <NavLink className="text-xl" to="/dashboard/AdmitionRequest">
              <FaUniversity className="text-3xl" />
              Admition Request{" "}
            </NavLink>
          </li>
          {/*-----------Navlink-------17-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/AdmitionComplete">
              <FaUniversity className="text-3xl" />
              Admition Complete{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          {/*-----------Navlink-------18-------*/}
          <li>
            <NavLink className="text-xl" to="/dashboard/BookbuyRequest">
              <GrBook className="text-3xl" />
              Bookbuy Request
            </NavLink>
          </li>
          {/*-----------Navlink-------19-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/BookbuyComplate">
              <GrBook className="text-3xl" />
              Bookbuy Complate{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          {/*-----------Navlink-------20-------*/}
          <li>
            <NavLink className="text-xl" to="/dashboard/AddSuccessStory">
              <FaGraduationCap className="text-3xl" />
              Add Success Story
            </NavLink>
          </li>
          {/*-----------Navlink-------21-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/ManageSuccessStory">
              <FaGraduationCap className="text-3xl" />
              Manage SuccessStory{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          {/*-----------Navlink-------22-------*/}
          <li>
            <NavLink className="text-xl" to="/dashboard/AddBranch">
              <FaGraduationCap className="text-3xl" />
              Add Branch
            </NavLink>
          </li>
          {/*-----------Navlink-------23-------*/}
          <li>
            <NavLink className="text-xl mt-5" to="/dashboard/ManageBranch">
              <FaGraduationCap className="text-3xl" />
              Manage Branch{" "}
            </NavLink>
          </li>
          <div className="divider mb-48"></div>
          {/*-----------Navlink-------24-------*/}
          <li>
            <NavLink className="text-xl" to="/">
              <FaHouseMedical className="text-3xl"></FaHouseMedical>
              Home
            </NavLink>
          </li>
          {/*-----------Navlink-------25-------*/}
          <li>
            <div className="">
              {" "}
              <button onClick={handleSignOut} className="text-3xl btn">
                <TbLogout />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
