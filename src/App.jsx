import { useContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'


import IntroPage from './components/IntroPage'
import EventsGallery from './components/EventsGallery'
import Footer from './components/Footer'
import StudentForm from './components/StudentForm'
import AppointmentFormContextProvider from './contexts/AppointmentForm'
import Login from './components/Login'
import Services from './components/Services'
import Locations from './components/Locations'
function App() {
  return (
 

    <div className="relative  ">
     
           <AppointmentFormContextProvider>
        <Navbar/>
        {/* <Login/> */}
    
  
        <LandingPage/>
        <IntroPage/>
        {/* <EventsGallery/> */}
        <Services/>
        <Locations/>
        <Footer/>
        </AppointmentFormContextProvider>
    </div>
   
  )
}

export default App
