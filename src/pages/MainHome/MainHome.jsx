import React from 'react'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Education from '../../components/Education/Education'
import Expertise from '../../components/Expertise/Expertise'
import Offer from '../../components/Offer/Offer'
import Recent from '../../components/Recent/Recent'
import Home from '../Home/Home'

const MainHome = () => {
  return (
    <div>
        <Home/>
      <About/>
      <Expertise/>
      <Education/>
      <Offer/>
      <Recent/>
      <Contact/>
    </div>
  )
}

export default MainHome