import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainrouter from './Mainrouter/Mainrouter';
import Home from './Home/Home';

import Eroor from './Home/Errorelemnt/Eroor';
import Donationdetails from './Component/Donationcards/Donationdetails/Donationdetails';

import Donation from './Donation/Donation';
import Statistics from './Component/Statistics/Statistics';
import Login from './Login/Login';
import Register from './Login/Register/Register';
import Context from './Component/Firebase/Context';
import Private from './Login/Private/Private';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainrouter></Mainrouter>,
    errorElement:<Eroor></Eroor>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() =>fetch('/donation.json')
      
      },
      {
        path:'/donation',
        element:<Donation></Donation>,
        loader:() =>fetch('/donation.json')
     
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader:() => fetch('/donation.json')
      },
      {
        path:'/donation-details/:id',
        element: <Private><Donationdetails></Donationdetails></Private>,
        loader:() =>fetch('/donation.json')
   
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Context>
      <RouterProvider router={router} />
 </Context>
  </React.StrictMode>,
)
