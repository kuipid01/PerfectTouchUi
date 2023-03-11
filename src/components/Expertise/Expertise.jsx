import React from 'react'
import './expertise.scss'
import reactimg from '../../assets/react.png'
import figma from '../../assets/figma.jpg'
import next from '../../assets/next.png'
import js from '../../assets/js.png'
import html from '../../assets/html.png'
import framer from '../../assets/framer.png'
import { motion } from "framer-motion";
const Expertise = () => {
    return (
        <div className='expertise'>

            <div className="wrapper">
                <h4>My Expertise Area</h4>

                <div className='btm'>

                    <motion.div whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 10, -10, 0], transition: { duration: 0.7 } }} className="imgcont">
                        <img src={reactimg} alt="" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 10, -10, 0], transition: { duration: 0.7 } }} className="imgcont">
                        <img src={figma} alt="" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 10, -10, 0], transition: { duration: 0.7 } }} className="imgcont">
                        <img src={next} alt="" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 10, -10, 0], transition: { duration: 0.7 } }} className="imgcont">
                        <img src={js} alt="" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 10, -10, 0], transition: { duration: 0.7 } }} className="imgcont">
                        <img src={html} alt="" />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 10, -10, 0], transition: { duration: 0.7 } }} className="imgcont">
                        <img src={framer} alt="" />
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Expertise