import React, { useState } from "react";
import img from "../assets/student.jpg";
const Services = () => {
  const [sampleState, setSampleState] = useState([
    {
    name: 'Play Class',
    desc: 'Play Class- The class wee beginers are nurtured with care',
    imgUrl: img,
    id: 1,
  },
  {
    name: 'Basic Class',
    desc: 'Quality basic classes where impecaable knowledge is been impareted into the kids ',
    imgUrl: img,
    id: 2,
  },
  {
    name: 'Junior Seconday Class',
    desc: 'At Perfect Touch, we are committed to providing a high-quality education for students in the junior secondary level. We believe in nurturing young minds and empowering them with the knowledge and skills they need to succeed in their academic journey and beyond.',
    imgUrl: img,
    id: 2,
  },
]);
  return (
    <div className="  w-full h-fit px-10 flex flex-col justify-center items-center">
      <h1 className="mt-10 text-4xl ">Our Services</h1>
      <p className="my-5 font-light text-base md:text-xl w-full md:w-[600px] text-orange-700 text-center leading-10">
        At Perfect Touch International,we pride ourselves with exceptional
        standards and providing learners with great learning experience
      </p>
      <div className=" w-full flex  justify-between flex-wrap gap-3">
{
    sampleState.map(val =>  <div key={val.id} className=" text-gray-700  mb-1 border-b-[0.55px] flex gap-4 justify-evenly items-center md:h-[200px] py-2 w-full  h-fit border-gray-500 md:w-[45%]">
    <div className="w-[25%]  p-1 justify-evenly h-full flex flex-col overflow-hidden">
      <img src={val.imgUrl} className=" w-[400px]  md:w-[250px] mb-2 object-cover h-[100px]" alt="" />
      <button className=" text-xs hover:bg-gray-200 transition-all border border-orange-700 w-full py-1 outline-none rounded-lg">MORE</button>
    </div>
    <div className=" w-[70%]">
      
      <h1 className=" text-orange-950">{val.name}</h1>
      <p className="text-xs font-light  md:text-sm">
      {val.desc}
      </p>
    </div>
  </div> )
}
       


      </div>
      <button className=" mt-8 rounded-full text-xs w-[300px]  bg-orange-600 text-gray-300 text-center py-3 ">SEE ALL SERVICES</button>
    </div>
  );
};

export default Services;
