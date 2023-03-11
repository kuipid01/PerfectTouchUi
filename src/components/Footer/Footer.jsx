import React from 'react'
import './footer.scss'
import logo from '../../assets/logo.png'
 import { AiOutlineTwitter,AiOutlineGithub,AiFillYoutube,AiOutlineWhatsApp } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='footer' >
        <img src={logo} alt="" />
        <p>Thank you for visiting my portfolio. Feel free to contact me to discuss your web development needs..</p>
    <ul>
        <li><AiOutlineTwitter className='icon' /></li>
        <a href="https://wa.me/+2349157016669"> <li><AiOutlineWhatsApp className='icon'/></li></a>
        <a href="https://github.com/kuipid01"> <li><AiOutlineGithub className='icon'/></li></a>
       
        <li><AiFillYoutube className='icon'/></li>
      
    </ul>
    <p>All Rights Reserved | Kuipid Inc</p>
    </div>
  )
}

export default Footer