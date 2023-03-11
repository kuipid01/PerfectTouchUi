import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './index.css'
import Dashboard from './pages/Dashboard/Dashboard';
import MainHome from './pages/MainHome/MainHome';
import Seemore from './pages/SeeMore/Seemore';
import Login from './pages/Login/Login';
const Layout = () => {
  return(
    <div>
      <Navbar/>
      <Outlet/> 
     <App/>
      <Footer/>
    </div>
  
  )

  
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
          path:"/",
          element:<MainHome/>
      },
     
 {
   path:"/dashboard",
   element:<Dashboard/>
},
{
  path:"/works",
  element:<Seemore/>
},
{
  path:"/login",
  element:<Login/>
},
  
    ]
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>

    <RouterProvider router={router} />
  
  <App />

   
 </React.StrictMode>,
)
