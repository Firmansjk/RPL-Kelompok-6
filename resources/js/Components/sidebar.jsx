import React, { useState } from "react";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser,} from "react-icons/ai";
import { Link } from '@inertiajs/react';
import LogoOrange from "./../../../public/images/logo tring.png";

const SideBar = () => {
  // const menus = [
  //   { name: "Dashboard", link:"/dashboard", icon: MdOutlineDashboard },
  //   { name: "Profile", link:"/profile", icon: AiOutlineUser },
  //   { name: "Menu", link:"/menu", icon: HiMenu}
  // ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 hidden md:block lg:block">
      <div
        className={`bg-white h-full ${
          open ? "w-60" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-between">
          <img src={LogoOrange} className={open === true ? "block w-28" : "hidden"} alt=""></img>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer mt-2 text-[#F77E21]"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          <Link
                href= "/vendor/dashboard"
                className={`
                group flex items-center text-sm text-[#F77E21] gap-3.5 font-medium p-2 hover:bg-[#F77E21] hover:text-white rounded-md`}
              >
                <div>{React.createElement(MdOutlineDashboard, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre${
                    !open && "opacity-0 overflow-hidden"
                  }`}
                >
                  Dashboard
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-24 bg-white font-semibold whitespace-pre text-[#F77E21] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Dashboard
                </h2>
          </Link>
          <Link
                href={route('vendor.profilepage')}
                className={`
                group flex items-center text-sm text-[#F77E21] gap-3.5 font-medium p-2 hover:bg-[#F77E21] hover:text-white rounded-md`}
              >
                <div>{React.createElement(AiOutlineUser, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre${
                    !open && "opacity-0 overflow-hidden"
                  }`}
                >
                  Profile
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-24 bg-white font-semibold whitespace-pre text-[#F77E21] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Profile
                </h2>
          </Link>
          <Link
                href= "/vendor/menupage"
                className={`
                group flex items-center text-sm text-[#F77E21] gap-3.5 font-medium p-2 hover:bg-[#F77E21] hover:text-white rounded-md`}
              >
                <div>{React.createElement(HiMenu, { size: "20" })}</div>
                <h2
                  className={`whitespace-pre${
                    !open && "opacity-0 overflow-hidden"
                  }`}
                >
                  Menu
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-24 bg-white font-semibold whitespace-pre text-[#F77E21] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  Menu
                </h2>
          </Link>
              
        </div>
      </div>
    </section>
  );
};

export default SideBar