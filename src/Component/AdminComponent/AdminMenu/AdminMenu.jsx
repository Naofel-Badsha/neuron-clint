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
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-gray-300">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/ManageUser">
              <FaUsers className="text-3xl" />
              Manage User
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          <li>
            <NavLink to="/dashboard/AddContest">
              <MdMenuBook className="text-3xl" />
              Add Courses{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/Managecurse">
              <MdMenuBook className="text-3xl" />
              Managecurse{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          <li>
            <NavLink to="/dashboard/Slidersimg">
              <FaRegImages className="text-3xl" />
              Slidersimg{" "}
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/Slidersimgsmoll">
              <FaFileImage className="text-3xl" />
              Slidersimg smoll{" "}
            </NavLink>
          </li>

          <div className="divider my-5"></div>

          <li>
            <NavLink to="/dashboard/Addbook">
              <ImBook className="text-3xl" />
              Add book{" "}
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/ManageBook">
              <ImBook className="text-3xl" />
              Manage Book{" "}
            </NavLink>
          </li>

          <div className="divider my-5"></div>

          <li>
            <NavLink to="/dashboard/AddSuccessfulstudents">
              <PiStudentBold className="text-3xl" />
              Add Successfulstudents{" "}
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/ManageSuccessfulstudents">
              <PiStudentBold className="text-3xl" />
              Manage Successfulstudents{" "}
            </NavLink>
          </li>

          <div className="divider my-5"></div>

          <li>
            <NavLink to="/dashboard/AddImage">
              <FaRegImage className="text-3xl" />
              Add Image{" "}
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/ManageImage">
              <FaRegImage className="text-3xl" />
              Manage Image{" "}
            </NavLink>
          </li>

          <div className="divider my-5"></div>

          <li>
            <NavLink to="/dashboard/AddVedio">
              <FaYoutube className="text-3xl" />
              Add Vedio{" "}
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/ManageVedio">
              <FaYoutube className="text-3xl" />
              Manage Vedio{" "}
            </NavLink>
          </li>
          <div className="divider my-5"></div>
          <li>
            <NavLink to="/dashboard/AddHeadline">
              <FaTextWidth className="text-3xl" />
              Add Headline{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/ManageHeadline">
              <FaTextWidth className="text-3xl" />
              Manage Headline{" "}
            </NavLink>
          </li>

          <div className="divider my-5"></div>
          <li>
            <NavLink to="/dashboard/AdmitionRequest">
              <FaUniversity className="text-3xl" />
              Admition Request{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/AdmitionComplete">
              <FaUniversity className="text-3xl" />
              Admition Complete{" "}
            </NavLink>
          </li>

          <div className="divider my-5"></div>
          <li>
            <NavLink to="/dashboard/BookbuyRequest">
              <GrBook className="text-3xl" />
              Bookbuy Request
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/BookbuyComplate">
              <GrBook className="text-3xl" />
              Bookbuy Complate{" "}
            </NavLink>
          </li>

          <div className="divider my-5"></div>
          <li>
            <NavLink to="/dashboard/AddSuccessStory">
              <FaGraduationCap className="text-3xl" />
              AddSuccess Story
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/ManageSuccessStory">
              <FaGraduationCap className="text-3xl" />
              Manage SuccessStory{" "}
            </NavLink>
          </li>

          <div className="divider my-5"></div>
          <li>
            <NavLink to="/dashboard/AddBranch">
              <FaGraduationCap className="text-3xl" />
              Add Branch
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/ManageBranch">
              <FaGraduationCap className="text-3xl" />
              Manage Branch{" "}
            </NavLink>
          </li>

          <div className="divider mb-48"></div>
          <li>
            <NavLink to="/">
              <FaHouseMedical className="text-3xl"></FaHouseMedical>
              Home
            </NavLink>
          </li>
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
