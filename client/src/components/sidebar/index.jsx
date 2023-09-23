/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import { Link } from 'react-router-dom'
// import SidebarCard from "./components/sidebar/componentsrtl/SidebarCard";
import SidebarCard from './componentsrtl/SidebarCard'
import routes from "../../routes";
import { Navigate } from "react-router-dom";
import park from "../../assets/parking.png"

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold text-navy-700 dark:text-white">
        <Link to='/' className='flex items-center gap-2'>
                   <img src={park} alt="" className='w-[40px]' />
                   <span className='font-bold text-2xl text-black'>ParkItRight</span>
        </Link>
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">
        {/* <SidebarCard /> */}
      </div>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
