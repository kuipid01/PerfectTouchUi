import React, { useEffect, useState } from 'react'
import './nav.scss';
import ham from '../../assets/ham.png'
import close from '../../assets/close.png'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Navbar = () => {
  const [hamburgerVisible, setHamburgerVisible] = useState(false)
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const sectionVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      x: 50,
    },
  };

  useEffect(() => {
    controls.start("visible");
  }, []);
  const navLinks = [
    {
      id: 1,
      text: 'Home',
      link: '/',
      target: ''
    },
    {
      id: 2,
      text: 'MyIntro',
      link: '#MyIntro'
      ,
      target: ''
    },
    {
      id: 3,
      text: 'Portfolio',
      link: '#Portfolio'
      ,
      target: ''
    },
    {
      id: 3,
      text: 'Service',
      link: '#Service'
      ,
      target: ''
    },
    {
      id: 3,
      text: 'Blog',
      link: 'https://devkuipidblog.netlify.app'
      ,
      target: 'new'
    }

  ]
  return (
    <nav>
      <div className='nav__wrapper'>
        <div className="logo">
          <Link to='/'> <img src={Logo} alt="" /> </Link>


        </div>
        <ul>
          {
            navLinks.map((l) => (
              <a href={`${l.link}`} target={`${l.target}`}  ><li>{l.text}</li></a>

            ))
          }
          {/* <li>Home</li>
            <li> My Intro</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Services</li> */}
        </ul>
        {
          hamburgerVisible ? <img src={close} className="ham" alt="" onClick={() => setHamburgerVisible(!hamburgerVisible)} />
            : <img src={ham} onClick={() => setHamburgerVisible(!hamburgerVisible)} alt="" className="ham" />
        }
      </div>

      {
        hamburgerVisible ? <motion.div initial="hidden"
        animate="visible"
        variants={sectionVariants} className="navlinksham">
          <ul>
            {
              navLinks.map((l) => (
                <li onClick={() => setHamburgerVisible(!hamburgerVisible)} >{l.text}</li>
              ))
            }  </ul> </motion.div> : ''
      }

    </nav>
  )
}

export default Navbar