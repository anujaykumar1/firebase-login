import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './components/login';
import SignUp from './components/signup';
import ForgotPassword from './components/forgot-password';
import AuthContextProvider from './components/auth-context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },{
    path: "/login",
    element: <Login />,
  },{
    path: "/signup",
    element: <SignUp />,
  }
  ,{
    path: "/recovery",
    element: <ForgotPassword />,
  },

]);

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
     <RouterProvider router={router} />
     </AuthContextProvider>
    </div>
  );
}

export default App; 
