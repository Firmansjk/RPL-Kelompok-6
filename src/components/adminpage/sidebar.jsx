import React, { useState } from "react";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser,} from "react-icons/ai";
import { Link } from "react-router-dom";
import LogoOrange from "../../image/logo tring.png"

const SideBarAdmin = () => {
  const menus = [
    { name: "Profile", link:"/profileadmin", icon: AiOutlineUser },
    { name: "List Katering", link:"/listadminpage", icon: HiMenu}
  ];
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
            className="cursor-pointer mt-2 text-[#F77E21] mb-6"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`
              group flex items-center text-sm text-[#F77E21] gap-3.5 font-medium p-2 hover:bg-[#F77E21] hover:text-white rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                className={`whitespace-pre${
                  !open && "opacity-0 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-24 bg-white font-semibold whitespace-pre text-[#F77E21] rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBarAdmin