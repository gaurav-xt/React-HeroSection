import React from "react";
import Home from "../component/Home.jsx";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white px-8 py-4 flex items-center justify-between z-50">
      <ul className="flex space-x-6 mx-4 text-[17px] my-3 py-3 px-8 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30  ">
        <li>
          <a href="Home" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="About" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="Contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
      <ul
        className="flex space-x-6 mx-4 text-[17px] my-3 py-3 px-8 bg-white/20 backdrop-blur-sm text-white rounded-full border gap-3 border-white/30">
        Menu
        <div className='  flex-row w-px h-6 bg-gray-300'></div>
        
      </ul>
    </nav>
  );
};

export default Nav;
