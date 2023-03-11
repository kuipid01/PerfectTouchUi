import React, { useEffect, useState } from 'react'
import './recent.scss';
import img1 from '../../assets/imageforcard.png'
import img2 from '../../assets/2ndimage.png'
import img3 from '../../assets/3rdimage.png'
import img4 from '../../assets/4himage.png'
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firbase';
import { motion } from "framer-motion";
const Recent = () => {
  const sectionVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const [displayed, setDisplayed] = useState('all')
  const Cardworks = ({ item }) => (
    <motion.div variants={sectionVariants}
      whileHover="hover"
      whileTap="rest"
      onHoverStart={(e) => {
        e.currentTarget.style.cursor = "pointer";
      }}
      onHoverEnd={(e) => {
        e.currentTarget.style.cursor = "default";
      }} className='card'>
      <a href={item?.link} target='new'> <img src={item.imgUrl} alt="" /></a>

    </motion.div>
  )
  const [project, setProject] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "myProjects"));
      const fireposts = [];
      querySnapshot.forEach((doc) => {


        fireposts.push({ id: doc.id, ...doc.data() });
      });
      setProject(fireposts);
    };
    fetchData();

  }, []);


  const catgories = [
    'all', 'web-design', 'graphics-design']

  const filterdarray = project.filter((web) => web.category === `${displayed}`)

  return (

    <div className='recentworks' id='Portfolio'>
      <p>My Portfolio</p>
      <h2>Recent Woks</h2>
      <div className="categories">
        <ul>
          {catgories.map((item) => (
            <li onClick={(() => setDisplayed(item))} > {item} </li>
          ))}
        </ul>
      </div>
      <div className="container">
        {
          displayed === 'all' ? project.slice(0, 6).map((item) => (

            <Cardworks item={item} key={item.id} />


          )) : filterdarray.map((item) => (

            <Cardworks item={item} key={item.id} />


          ))
        }
      </div>
      <Link to='/works' >  <button>Show More</button></Link>

      <div className="project">
        <h1>Have a Project on Your Mind</h1>
        <p>We provide fine grained solutions to your tech problems.</p>
        <button className='projectbtn'>
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Recent