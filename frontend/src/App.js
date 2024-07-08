import React from 'react'
import {Route,Routes,Navigate} from 'react-router-dom'
import Home from "./components/Home.js"
import Courses from "./courses/Courses.js"
import Signup from "./components/Signup.js"
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.js'

const App = () => {
  const [authUser,setAuthUser]=useAuth();
    console.log(authUser);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
      <Route path="/" element={<Home/>}/>   
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"></Navigate>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster/>
    </div>
   
    
      
      
     
  
    
  )
}

export default App;