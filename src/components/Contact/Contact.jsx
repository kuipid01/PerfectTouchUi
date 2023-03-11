import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import './contact.scss'
const Contact = () => {
     const ref = useRef(null)
    const isInView= useInView(ref);
    const sectionVariants = {
        hidden: { x: -50, opacity: 0 },
        
        visible: {
            x: 0,
            opacity: 1,
            duration:10,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
            },
        },
    };
  return (
    <motion.div ref={ref}  initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={sectionVariants} className='contactform'>
        <div className="bg">

        </div>
        <p>Contact Me</p>
        <h4>Get in Touch</h4>
        <div className="formcontainer">
        <div className="left">
            <form action="">
                <div className="top">
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email' name="" id="" />
                </div>
                <div className="mid">
                    <input type="text" name="" id="" placeholder='Subject' />

                </div>
                <textarea placeholder='Message' name="message" id="message" cols="30" rows="10"></textarea>
            <button type="submit">Send Message</button>
            </form>
        </div>
        <div className="right">
    <div className="tel">
        <div className="icon">
        <img src="" alt="" />
        </div>
        
        <div className="cont">
            <h3>Call Me</h3>
            <p> +234-91-5701-669</p>
        </div>
    </div>
    <div className="tel">
    <div className="icon">
        <img src="" alt="" />
        </div>
        <div className="cont">
        <h3>E-Mail</h3>
            <p> kuipid01@gmail.com</p>
            <p> kuipid02@gmail.com</p>
        </div>
    </div>
    <div className="tel">
    <div className="icon">
        <img src="" alt="" />
        </div>
        <div className="cont">
        <h3>Location</h3>
            <p> FCT Abuja, Nigeria</p>
          
        </div>
    </div>
        </div>
        </div>
       
    </motion.div>
  )
}

export default Contact