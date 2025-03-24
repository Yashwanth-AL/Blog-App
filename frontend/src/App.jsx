import React from 'react';
import Navbar from '../src/components/Navbar';

import Home from '../src/components/Home';
import Blogs from '../src/pages/Blogs';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import DashBoard from '../src/pages/DashBoard';
import Creators from '../src/pages/Creators';

import Footer from '../src/components/Footer';
import { Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from 'react-hot-toast';

function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(location.pathname);
  const {blogs} = useAuth();
  console.log(blogs);
  
  return (
    <div>
     {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route exact path = "/" element ={<Home />} />
        <Route exact path = "/blogs" element ={<Blogs />} />
        <Route exact path = "/about" element ={<About />} />
        <Route exact path = "/contact" element ={<Contact />} />
        <Route exact path = "/login" element ={<Login />} />
        <Route exact path = "/register" element ={<Register />} />
        <Route exact path = "/dashboard" element ={<DashBoard />} />
        <Route exact path = "/creators" element ={<Creators />} />
        
      </Routes>
      <Toaster />
      { !hideNavbarFooter && <Footer />}
    </div>
  )
}

export default App