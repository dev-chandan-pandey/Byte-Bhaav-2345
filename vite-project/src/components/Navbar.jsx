import React from 'react'

function Navbar() {
    const navItems = (<>
    <li className="text-lg"><a>Home</a></li>
      <li className="text-lg"><a>Menu</a></li>
      <li className="text-lg"><a>Shop</a></li>
      <li className="text-lg"><a>Blog</a></li>
      <li className="text-lg"><a>About</a></li>
      <li className="text-lg"><a>Contact</a></li>
    </>)
  return (
    <>
     <div className='max-w-screen-2xl container max-auto md:px-20 px-4'>
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navItems}
      </ul>
    </div>
    <a className=" text-2xl font-bold cursor-pointer">DelightDish</a>
  </div>
 
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-6">
     {navItems}
    </ul>
  </div>
  <div className='navbar-end space-x-3'>
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</a>
    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Register</a>
  </div>
  
  
</div>
    </div>
    </>
   
  )
}

export default Navbar
