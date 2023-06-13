import React, { useContext, useState } from "react";
import bgImg from '../assets/homepage.jpg'
import { AppointmentFormContext } from "../contexts/AppointmentForm";
import StudentForm from './StudentForm'
const LandingPage = () => {
  const {appoitmentFormOpen, setAppoitmentFormOpen} =useContext(AppointmentFormContext)
  return (
    <div className=' relative  flex justify-center items-center h-[90vh] w-full'>
             { appoitmentFormOpen ?        <StudentForm/> : null }
        <div className=' absolute w-full h-full top-0 left-0'>
            <img className=' w-full h-full opacity-60 object-cover' src={bgImg} alt="" />
        </div>
        <div className=' bg-black opacity-60 absolute w-full h-full top-0 left-0'>

        </div>
<div className=' text-center px-5 md:px-0 sm:px-3 -mt-5 md:mt-0 relative text-white'>
    <h1 className=' text-2xl font-bold sm:text-4xl md:text-5xl uppercase mb-4 relative text-white'>Register Now  <span className=' text-orange-600'>For 2023</span>  Third Term</h1>
    <p className=' text-normal sm:text-2xl'>Experience the best education  in Madalla, Niger State </p>
    <button onClick={ () => setAppoitmentFormOpen(true)}  className=' w-full sm:w-fit md:px-7 md:py-4 py-3 mt-4 px-5 rounded bg-orange-500 uppercase text-small font-light md:font-bold'>Register Your Ward Now</button>
</div>
    </div>
  )
}

export default LandingPage