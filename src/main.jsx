import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import { HomePage } from './components/pages/Home.component.jsx';
import { AboutPage } from './components/pages/about.component.jsx';
import { Login } from './components/users/Login.component.jsx';
import { Order } from './components/admin/Order.component.jsx';
import { MeettingForm } from './components/users/meetting.component.jsx';
import {LoginPage} from './components/admin/LoginAdmin.component.jsx';
import { AdminPage } from './components/admin/Admin.jsx';
import {SendMassage} from './components/users/massage.component.jsx';
const router=createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{
      path: '',
      Component :HomePage,
    },
    {
      path: '/AboutPage',
      Component :AboutPage, 
    },{
      path:'/Login',
      Component:Login,
    },{
      path:'/Order',
      Component:Order,
    },{
      path:'/Admin',
      Component:AdminPage,
    },
    {
      path:'/LoginPage',
      Component:LoginPage,
    },
    {
      path:'/meetting',
      Component:MeettingForm,
    },
    {
      path:'/massage',
      Component:SendMassage,
    },
   
  ],
  errorElement: <p> oops :( not exists... </p>,
   

  },
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
