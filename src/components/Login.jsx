import React from 'react'
import bgImg from '../assets/img.jpg'
const Login = () => {
  return (
    <div className='w-full flex  p-10 min-h-[60vh] border'>
 <div className=' w-1/2 h-screen hidden sm:flex '>
<img src={bgImg} className='w-full object-cover h-full' alt="LoginImg" />
 </div>
 <div className='flex w-1/2 justify-center items-center p-3'>
    <div  className='flex w-2/3 border border-orange-300 p-5 flex-col'>
        <div className='flex flex-col text-gray-800'>
    
        <input className='w-full h-[50px] outline-none placeholder:text-gray-600 px-3 border-b border-gray-500 ' type="text" placeholder='Enter UserId' />

        </div>
        <div className='flex flex-col'>

    <input className='w-full h-[50px] outline-none placeholder:text-gray-600 px-3 border-b border-gray-500 mb-4' type="password" name="password" placeholder='Enter password' id="password" />
    </div>
<button className=' bg-orange-500 w-full py-3 text-white uppercase'>Login</button>

    </div>

 </div>
    </div>
  )
}

export default Login