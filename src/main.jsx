import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainrouter from './Mainrouter/Mainrouter';
import Home from './Home/Home';
import Donation from './Component/Donation/Donation';
import Statistics from './Component/Statistics/Statistics';
import Eroor from './Home/Errorelemnt/Eroor';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainrouter></Mainrouter>,
    errorElement:<Eroor></Eroor>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
