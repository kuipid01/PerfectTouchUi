import React from 'react'
import './home.scss'
import bg from '../../assets/back.png'

const Home = () => {
    return (
        <div className='home' id='home'>
            <div className="left">
                <h5>Hi,I am</h5>
                <h1>Adegoke Stephen</h1> 
                <p>Specialize in providing creative and engaging web design services that help your brand stand out online.</p>
           <div className="btns">
           <button className=' focus'>Download CV</button>
            <button>Contact Me</button>
           </div>
           
            </div>
            <div className="right">
                <img className='rot' src={bg} alt="" />
                
            </div>

            <div className="overflow">
            <div className="center">
                    <div className="icon">
                        <img alt="" />
                    </div>
                <div className="desc">
                    <p> 3+ Years Ago</p>
                    <small>Experience</small>
                </div>
                
                </div>
                <div className="center">
                    <div className="icon">
                        <img src="" alt="" />
                    </div>
                <div className="desc">
                    <p> 3+ Years Ago</p>
                    <small>Experience</small>
                </div>
                
                </div>
                <div className="right">
                    <div className="icon">
                        <img src="" alt="" />
                    </div>
                <div className="desc">
                    <p> 3+ Years Ago</p>
                    <small>Experience</small>
                </div>
                
                </div>
         
         
            </div>
        </div>
    )
}

export default Home