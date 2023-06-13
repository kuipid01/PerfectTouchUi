import React from 'react'

const Footer = () => {
  return (
    <div className= 'flex  items-center text-gray-300 mt-0 py-5 w-full h-fit sm:h-[45vh] px-3 bg-orange-400'>
<ul className=' flex flex-col gap-4 ' >
    <li className='text-white hover:text-gray-700 transition-all cursor-pointer hover:pl-2' >Home</li>
    <li className='text-white hover:text-gray-700 transition-all cursor-pointer hover:pl-2' >Contact</li>
    <li className='text-white hover:text-gray-700 transition-all cursor-pointer hover:pl-2' >Links</li>
    <li className='text-white hover:text-gray-700 transition-all cursor-pointer hover:pl-2' >About</li>
    <li className='text-white hover:text-gray-700 transition-all cursor-pointer hover:pl-2' >Terms of Services </li>
</ul>
    </div>
  )
}

export default Footer