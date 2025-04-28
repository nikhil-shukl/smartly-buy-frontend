import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between shadow-md space-y-4 md:space-y-0">

      {/* Left Section - Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-3xl font-bold hover:text-blue-300 transition duration-200">
          Smartly Buy
        </Link>
      </div>

      {/* Middle Section - Search */}
      <div className="w-full md:w-1/3">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full p-2 rounded border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        />
      </div>

      {/* Right Section - Categories + Auth */}
      <div className="flex items-center space-x-4">
        <CategoryList />
        <Link to="/login" className="hover:text-blue-300">Login</Link>
        <Link to="/signup" className="hover:text-blue-300">Signup</Link>
      </div>

    </header>
  );
};

export default Header;
