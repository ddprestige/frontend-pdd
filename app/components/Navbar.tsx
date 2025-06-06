import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <nav className="bg-emerald-500 text-white text-xl px-4 py-3 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2 font-bold text-2xl text-white">
          <img className="h-10 w-10" src="/favicon.ico" alt="Logo" />
          <span>Prestige Dream Decor</span>
        </div>
        <ul className="flex space-x-6 items-center">
          <li>
            <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
          </li>
          <li>
            <a href="/services" className="hover:text-gray-200 transition-colors">Services</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-200 transition-colors">About Us</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-200 transition-colors">Contact Us</a>
          </li>
          <li>
            <a href="/cart" className="hover:text-gray-200 transition-colors text-2xl">
              <FaShoppingCart />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
