import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!email ||!password ||!role) {
      toast.error("Please fill required fields");
    }

    try {
      const {data} = await axios.post(
        'http://localhost:4001/api/users/login', 
        {email, password, role},
        {
          withCredentials: true,
          headers: {
            'Content-Type':'multipart/form-data'
          }
        });
      console.log(data);
      toast.success(data.message || 'Login successfully');
      setEmail("");
      setPassword("");
      setRole("");
    } catch(error) {
      console.log(error);
      toast.error(error.message || "Please fill the required fields");
    }
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white shodow-md rounded-lg p-8">
          <form onSubmit={handleLogin}>
            <div className="font-semibold text-2xl items-center text-center">
              Cilli<span className="text-blue-600">Blog</span>
            </div>
            <h1 className="text-xl font-semibold mb-6">Login</h1>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 mb-4 border rounded-md">
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <div className="">
              <input type="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded-md"/>
            </div>
            <div className="">
              <input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded-md"/>
            </div>
            
            <p className="text-center mb-4">New User? <Link className="text-blue-600">Register Now</Link></p>
            <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-700">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
} 

export default Login;