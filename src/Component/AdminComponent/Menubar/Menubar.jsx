import AdminMenu from "../AdminMenu/AdminMenu";

import { GiHamburgerMenu } from "react-icons/gi";

import useRole from "../../hooks/useRole";

const Menubar = () => {
  const [role, isLoading] = useRole();

  if (isLoading) {
    return <div>loding .....</div>;
  }
  return (
    <div className="">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:hidden md:hidden ">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn text-3xl ">
            <GiHamburgerMenu />
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="min-h-full bg-gray-300 text-base-content text-2xl font-semibold">
            {/* Sidebar content here */}

            {role === "User" && <li>parmison nay vi apnar</li>}
            {role === "moderator" && <li>parmison nay vi apnar</li>}
            {role === "Admin" && (
              <li>
                <AdminMenu></AdminMenu>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="h-full hidden md:block lg:block text-2xl font-semibold ">
        {role === "User" && <li>parmison nay vi apnar</li>}
        {role === "moderator" && <li>parmison nay vi apnar</li>}
        {role === "Admin" && (
          <div>
            <AdminMenu></AdminMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menubar;
