import React from "react";
import img from "../assets/img1.jpg";
const Locations = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="bg-orange-100 w-full py-5 mt-5">

 <h1 className=" text-center mt-10 text-2xl text-gray-900">Our Location

 </h1>
    <div className=" w-full  gap-5  md:min-h-[80vh] h-fit px-10 flex flex-wrap justify-center items-center">
      <div
        className=" min-w-[300px] h-[200px] md:min-h-[350px] rounded-2xl p-2  flex-col gap-2 md:gap-5 hover:opacity-95 cursor-pointer transition-all bg-orange-400 text-gray-200 flex justify-center items-center"
      >
        <img src="" alt="" />
        <p>By Dominion Hospital</p>
        <p>Madalla, SuLeja,Niger State</p>
        <hr className=" w-[200px] h-[2px] bg-gray-100" />
        <p>Basic3- Jss3</p>
        <button className=" w-[100px]  rounded-full text-sm py-2 bg-transparent border border-gray-200  mt-1 md:mt-5">
          VISIT US
        </button>
      </div>
      <div
        className="hover:opacity-95 cursor-pointer h-[200px] transition-all min-w-[300px] md:min-h-[350px] rounded-2xl p-2  flex-col gap-2 md:gap-5 bg-orange-400 text-gray-200 flex justify-center items-center"
      >
        <img src="" alt="" />
        <p>By Living Faith Church Hospital</p>
        <p>Madalla, SuLeja,Niger State</p>
        <hr className=" w-[200px] h-[2px] bg-gray-100" />
        <p> Jss3-ss3</p>
        <button className=" rounded-full w-[100px] py-2 text-sm bg-transparent border border-gray-200 mt-1 md:mt-5">
          VISIT US
        </button>
      </div>
    </div>
    </div>
  );
};

export default Locations;
