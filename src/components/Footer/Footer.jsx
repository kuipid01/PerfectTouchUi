import React from 'react'
import './footer.scss'
import logo from '../../assets/logo.png'
 import { AiOutlineTwitter,AiOutlineGithub,AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='footer' >
        <img src={logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sed perferendis, vel quisquam impedit voluptas maiores porro explicabo nam perspiciatis.</p>
    <ul>
        <li><AiOutlineTwitter className='icon' /></li>
        <li><AiOutlineGithub className='icon'/></li>
        <li><AiFillYoutube className='icon'/></li>
      
    </ul>
    <p>All Rights Reserved | Kuipid Inc</p>
    </div>
  )
}

export default Footer