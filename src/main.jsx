import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import App from './App'

import './index.css'

const Layout = () => {
  return(
    <div>
      {/* <Navbar/> */}
      <Outlet/> 
     {/* <App/> */}
      {/* <Footer/> */}
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
          element:<App/>
      },
     
//  {
//    path:"/dashboard",
//    element:<Dashboard/>
// },
// {
//   path:"/works",
//   element:<Seemore/>
// },
// {
//   path:"/login",
//   element:<Login/>
// },
  
    ]
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>

    <RouterProvider router={router} />


   
 </React.StrictMode>,
)
