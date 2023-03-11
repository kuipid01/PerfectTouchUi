import React, { useRef } from 'react'
import './about.scss'
import ImageBoard from '../../assets/imageboard.png'
import ImageBd from '../../assets/about.jpg'
import headphones from '../../assets/headphones.png'
import newbag from '../../assets/newbag.png'
import alien from '../../assets/alien.png'
import ball from '../../assets/ball.png'
import { motion, useInView } from "framer-motion";
const About = () => {
    const ref = useRef(null)
    const isInView= useInView(ref);
    const sectionVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
            },
        },
    };
    return (

        <div className='about' id='MyIntro'>
            <div className="wrapper">
                <motion.div ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={sectionVariants} className="img">
                    <img src={ImageBoard} alt="" />
                    <img className='bgimg' src={ImageBd} alt="" />
                </motion.div>
                <div className="desc">
                    <h5>My Intro</h5>
                    <h1>About Me</h1>
                    <p>Hi there! My name is Adegoke Stephen Busayo and I'm a passionate front-end web developer. I love creating beautiful and functional user interfaces that enhance the overall user experience. I have experience working with HTML, CSS, JavaScript, and various front-end frameworks like React . When I'm not coding, you can find me exploring the outdoors, practicing football. I'm always looking for new challenges and opportunities to learn and grow as a developer..</p>
                    <div className="contacts">
                        <div className="name">
                            <span> Name </span> <span>:</span> <span>Adegoke Stephen</span>
                        </div>
                        <div className="Phone">
                            <span> Tel No  </span> <span>:</span> <span>+234-91-5701-66-9</span>
                        </div>
                        <div className="mail">
                            <span> Email  </span> <span>:</span> <span>kuipid01@gmail.com</span>
                        </div>
                    </div>
                    <h4 className='int'>My  Interests</h4>
                    <div className="interests">

                        <div className="music"> <img src={headphones} alt="" />  <small>Music</small> </div>
                        <div className="music">  <img src={newbag} alt="" /> <small>Travel</small> </div>
                        <div className="music">  <img src={alien} alt="" /> <small>Sci-Fi</small> </div>
                        <div className="music">  <img src={ball} alt="" /> <small>Football</small> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About