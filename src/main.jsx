import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Layout/Main.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/Signup/Signup.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Chefs from './components/Chefs/Chefs.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'/chef/:id',
        element:<Chefs></Chefs>,
        loader: ({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
