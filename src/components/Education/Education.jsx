import React from 'react'
import './edu.scss'
import staff from '../../assets/edulogo.png'
import cap from '../../assets/education.png'
import bag from '../../assets/bag2.png'
const Education = () => {
  return (
    <div className='education'>
        <h4>My Qualifications</h4>
        <h1>Amazing Journey</h1>
        <div className="parted">
            <div className="col left">
            <h2 className='h2container'>
                    <img src={cap}alt="" />
                    <h2>Education</h2>
                </h2>
                <div className="educations">
                    <div className="single">
                        <img src={staff} alt="" />
                        <div className="dets">
                            <div className="masters">
                            <h3>Bachelor in Engineering</h3>
                            <p> Engineering</p>
                            </div>
                            
                            <div className="time">
                                <img src='' alt="" />
                                <small>2014-2021</small>
                            </div>
                        </div>
                    </div>
                    <div className="single">
                        <img src={staff} alt="" />
                        <div className="dets">
                        <div className="masters">
                        <h3>Seconday School Certificate</h3>
                            <p> Engineering</p>
                            </div>
                           
                            <div className="time">
                                <img src="" alt="" />
                                <small>2009-2014</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col right">
                <h2 className='h2container'>
                    <img src={bag} className='bag' alt="" />
                    <h2>Experience</h2>
                </h2>
                <div className="educations">
                    <div className="single">
                        <img src={staff} alt="" />
                        <div className="dets">
                        <div className="masters">
                        <h3>Freelance </h3>
                            <p> Frontend Development</p>
                            </div>
                            <div className="time">
                                <img src="" alt="" />
                                <small>2022-2023</small>
                            </div>
                        </div>
                    </div>
                    {/* <div className="single">
                        <img src={staff} alt="" />
                        <div className="dets">
                            <h3>Seconday School Certificate</h3>
                            <p> Engineering</p>
                            <div className="time">
                                <img src="" alt="" />
                                <small>2009-2014</small>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education