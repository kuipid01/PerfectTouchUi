import React, { useContext } from "react";
import hamb from '../assets/Grouphamburger.svg'
import { AppointmentFormContext } from "../contexts/AppointmentForm";
const Navbar = () => {
  const {appoitmentFormOpen, setAppoitmentFormOpen}  = useContext(AppointmentFormContext)
  return (
    <div className=" w-full h-[10vh]  px-10 flex justify-between items-center ">
      <div className="logo">
        <h1 className=" text-xl sm:text-3xl">
          PERFEC<span className="text-orange-600 uppercase">TOUCH</span>
        </h1>
      </div>
      <div className=" h-full pl-4  flex items-center">
        <ul className=" hidden text-gray-700 h-full items-center gap-5 sm:hidden lg:flex-row lg:flex ">
          <li className=" cursor-pointer hover:text-gray-500 transition-all">
            Home
          </li>
          <li className=" hover:text-gray-500 cursor-pointer transition-all">
            About
          </li>
          <li className=" hover:text-gray-500 cursor-pointer transition-all">
            Payment
          </li>
          <li className=" hover:text-gray-500 cursor-pointer transition-all">
            Events
          </li>
          <li className=" hover:text-gray-500 cursor-pointer transition-all">
            News
          </li>
       
        </ul>
        <button  onClick={ () => setAppoitmentFormOpen(true)}  className=" hidden text-xs md:flex justify-center items-center hover:text-orange-600 transition-all hover:bg-transparent hover:border hover:border-grey-500 ml-4 uppercase h-[90%] rounded sm:h-[70%] px-4 md:text-sm sm:font-light md:font-bold w-fit  bg-orange-600 text-white">
          Apply For Enrollment
        </button>
        <button className=" hidden md:flex justify-center items-center hover:text-white transition-all hover:bg-orange-600 hover:border hover:border-grey-500 ml-4 uppercase h-[90%] rounded sm:h-[70%] px-4 text-sm sm:font-light md:font-bold w-fit  bg-transparent border border-orange-300 text-orange-500 ">
         LOGIN
        </button>
      </div>
      <div className="h-[50px] w-[30px]  md:hidden">
        <img className=" w-full h-full" src={hamb} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
