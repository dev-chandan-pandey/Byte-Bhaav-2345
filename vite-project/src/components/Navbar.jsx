import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import UserDetail from '../pages/UserDetail';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
function Navbar() {
  const navigate = useNavigate()
  const [sticky,setSticky] = useState(false);
  const token = localStorage.getItem("token")||"";
  const [tkn , setTkn]= useState(token);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
    const handelLogout= async()=>{
      try {
         await axios.get(`https://byte-bhaav-2345.onrender.com/users/logout`,{ 
          headers:{
            Authorization:`Bearer ${token}`
          }
         });

         localStorage.setItem('token', "");
                localStorage.setItem('username',"");
                localStorage.setItem('email',"");
                localStorage.setItem('membership',"");
                localStorage.setItem('role',"");
                localStorage.setItem("isLoggedIn","");
        alert("your are logged out ");
        navigate("/")
    } catch (error) {
        console.log(error);
    }
    }
  console.log(token,"7 line")
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 0){
        setSticky(true);
      }
      else{
        setSticky(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[])
  return (
    <>
     <div className={`max-w-screen-2xl container max-auto md:px-20 px-4 fixed top-0 left-0 right-0 bg-base-300  ${sticky?"sticky-navbar shadow-md bg-base-300 duration-300 transition-all ease-in-out":""}`} style ={{ zIndex: 1000 }}>
     <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className="text-lg">
                  
      <Link to="/">Home</Link>
    </li>
    <li className="text-lg">
    <Link to="/recipes">Menu</Link>
    </li>
  
    <li className="text-lg">
    <Link to="/posts">Users Posts</Link>
    </li>
    <li className="text-lg">
    <Link to="/about">About Us</Link>  
    </li>
    <li className="text-lg">
    <Link to="/contact">Contact Us</Link>
    </li>
      </ul>
    </div>
    <a className=" text-2xl font-bold cursor-pointer">DelightDish</a>
  </div>
 
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-6">
    <li className="text-lg">
    <Link to="/">Home</Link>
    </li>
    <li className="text-lg">
    <Link to="/recipes">Menu</Link>
    </li>
    <li className="text-lg">
    <Link to="/posts">Users Posts</Link>
    </li>
    <li className="text-lg">
    <Link to="/about">About Us</Link>  
    </li>
    <li className="text-lg">
    <Link to="/contact">Contact Us</Link>
    </li>
    </ul>
  </div>
  <div className='navbar-end space-x-3'>
   {isLoggedIn&&<button onClick={()=>handelLogout()} className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Logout</button>}
  {!isLoggedIn&&<Link to={"/login"} className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</Link>}
    {/* <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</a> */}
   {!isLoggedIn&&<Link to={"/signup"} className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Register</Link>}
    {/* <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Register</a> */}
   {isLoggedIn&&<UserDetail/>}
    </div>
  
  
</div>
    </div>
    </>
   
  )
}

export default Navbar
