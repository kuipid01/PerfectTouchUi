import { addDoc, collection, doc, getDocs, orderBy, serverTimestamp, setDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../../../kuipidblog/client/src/components/Loader/Loader'
import { db, storage } from '../../firbase'
import './dash.scss'


const Dashboard = () => {
  const navigate = useNavigate ()
  const [projectFormDisplay, setProjectFormDisplay] = useState(false)
  const [showLoader, setShowLoader] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionSelect(event) {
    setSelectedOption(event.target.value);
  }
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')
  const handleImageUrl = (e)=>{

    setImage(e.target.files[0]);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  }   
  // setTimeout(() => {
  //   setShowLoader(false);
  // }, 3000);

  const  handleSubmit = async (e) => {
    e.preventDefault();

   if (image && title && link ) {
    
  
     //setLoading(true)
     //Upload the image to Firebase storage
      if (image) {
     const storageRef = ref(storage, `images/projects/${image.name}`);
   
      const uploadTask = uploadBytesResumable(storageRef, image);
      
      uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
         //  Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
      console.log(error);
      }, 
      ()  => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https:firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
        try { 
         await addDoc(collection(db, "myProjects"), {
           title: title,
           link: link,
        category:selectedOption,
           timestamp: serverTimestamp(),
           imgUrl:downloadURL,
        
         });
       console.log('project add');
        } catch (error) {
         console.log(error);
        }
      
        });
      }
    );
   
         }
        }
       else {
       //  Add the post data to Firestore without animage
        console.log('cant uplaod null');
      }

   //  Clear the form after submission
      setTitle("");
      setLink("");
      setImage(null);
      setImageUrl("");

       setProjectFormDisplay(false)
       navigate("/dashboard")
    
  };
  const [project, setProject] = useState([])
  useEffect(() => {
  
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "myProjects"), orderBy('timestamp', "desc"));
      const fireposts = [];
      querySnapshot.forEach((doc) => {
  
        
        fireposts.push({ id :doc.id,...doc.data()});
      });
      setProject(fireposts);
    };
    fetchData();
  
  }, []);
  console.log(project);
  return (
    <div className='form'>
      <h1>
      Projects Dashboard
      </h1>
    
<button className='addproject' onClick={()=> setProjectFormDisplay(true)} >Add Project</button>
       <div className="project-form" >
        {
          projectFormDisplay ?  <form action="">
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title of project' name="" id="" />
          <input type="url" required  value={link} onChange={(e) => setLink(e.target.value)} name="" id="" placeholder='url' />
          <label htmlFor="my-input">Select an option:</label>
<input type="text" onChange={handleOptionSelect}  id="my-input" list="options" />

<datalist id="options">
  <option value="web-design" />
  <option value="graphics-design" />
  {/* <option value="Option 3" /> */}
  {/* <option value="Option 4" />
  <option value="Option 5" /> */}
</datalist>
          <input type="file" required onChange={handleImageUrl} name="" id=""  />
          {
            imageUrl && <img className='displayImg' src={imageUrl} alt="" />
          }
          {title && <button type="submit" onClick={handleSubmit}>Submit Project Link</button> }
         
        </form> : ''
        }
       
       </div>
       {project.length===0  ? <Loader/> : <div className="wrapper">{project.map((proj)=> (
         <a href={project.link}>
         <div className="my-component ">
                <img className="image" src={proj.imgUrl} alt="" />
         <h2 className="title">{proj.title}</h2>
   
       </div>
       </a>
      ))
    }</div>  }
    </div>
  )
}

export default Dashboard