import React, { useEffect, useState } from 'react'
import './seemore.scss'
import car from '../../assets/3rdimage.png';
import imge  from '../../assets/2ndimage.png'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firbase';
import Loader from '../../../../../kuipidblog/client/src/components/Loader/Loader';
const Seemore = () => {
    const works = [
        {
            title:" A Blog ",
            imgUrl:car ,
            id:1 ,
            
        },
        {
            title:" A Blog ",
            imgUrl:imge ,
            id:2,
        },
        {
            title:" A Blog ",
            imgUrl:car ,
            id:3 ,
        },
        {
            title:" A Blog ",
            imgUrl:imge ,
            id:4 ,
        },
        {
            title:" A Blog ",
            imgUrl:car ,
            id:5,
        },
        {
            title:" A Blog ",
            imgUrl:imge ,
            id:6,
        },
    ]
    const   WorkCard= ({card})=>(
        <div className='card'>
                <img src={card.imgUrl} alt="" />
                <h4>{card.title}</h4>
        </div>
  )
  const [project, setProject] = useState([])
  useEffect(() => {
  
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "myProjects"));
      const fireposts = [];
      querySnapshot.forEach((doc) => {
  
        
        fireposts.push({ id :doc.id,...doc.data()});
      });
      setProject(fireposts);
    };
    fetchData();
  
  }, []);

  return (
    <div className='seemore'>
        <div className="wrapper">
        {project.length===0  ? <Loader/> : <div className="wrapper">{project.map((proj)=> (
           <WorkCard card={proj} key={proj.id} />
      ))
    }</div>  }
   
        </div>
    </div>
  )
}

export default Seemore