import React from "react";
import student from '../assets/student.jpg'
import parent from '../assets/parent.jpg'
const IntroPage = () => {
  return (
    <div className=" w-full h-fit py-7   sm:h-screen flex flex-col mt-7 sn:mt-0 sm:justify-center items-center">
      <h1 className=" text-xl sm:text-5xl">WELCOME TO</h1>
      <h1 className=" text-orange-500 uppercase mt-3 text-lg smtext-4xl">
        Perfect-touch International School
      </h1>
      <p className=" text-gray-700 mt-2 text-[15px] w-full  md:w-[800px] sm:text-xl  px-2 sm:px-0 sm:leading-10 text-center">
        {" "}
        Our mission is to establish a learning environment based on the
        principles of self-discipline and respect where each child may develop
        the skills necessary to help them succeed honorably in a rapidly
        changing world through the use of the academically focused Core
        Knowledge Curriculum buttressed by strong parental involvement.{" "}
      </p>
      <div className=" flex justify-center items-center gap-3 px-4 sm:gap-10 mt-5 w-full "> 
        <div className="  transition-all hover:bg-orange-300 cursor-pointer  hover:opacity-90   sm:h-[200px] h-[150px] rounded-lg overflow-hidden w-[200px] sm:w-[300px] relative">
          <img src={student} className=" object-cover w-full h-full absolute top-0 left-0 " alt="" />
          <div className="w-full bg-black transition-all opacity-50 h-full absolute top-0 left-0 "  ></div>
          <p className="  w-full text-center  absolute  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white">STUDENT INFO</p>
        </div>
        <div className="  transition-all hover:bg-orange-300  cursor-pointer hover:opacity-90  sm:h-[200px] h-[150px] rounded-lg overflow-hidden w-[200px] sm:w-[300px] relative">
          <img src={parent} className="w-full object-cover h-full absolute top-0 left-0 " alt="" />
          <div className="w-full bg-black opacity-50 h-full absolute top-0 left-0 "  ></div>
          <p className="  w-full text-center  absolute  top-1/2 -translate-y-1/2 left-1/2 uppercase -translate-x-1/2 text-white">parent INFO</p>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
