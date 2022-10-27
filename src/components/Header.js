import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../components/images/logo.png'
const Header = () => {
    return (

            <div className="navbar text-white lg:px-4 ">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sky-700">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
        <li className="text-lg font-medium text-white"><a>Products</a></li>
       
        <li className="text-lg font-medium text-white"><a>Club</a></li>
      </ul>
    </div>
      <Link to="/"><img src={logo} alt="" className="lg:h-12 h-6 w-8 lg:w-20" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li className="text-lg font-medium"><a>Products</a></li>
     
      <li className="text-lg font-medium"><a>Club</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="text-lg font-medium">Get in Touch</a>
  </div>
</div>
    );
};

export default Header;