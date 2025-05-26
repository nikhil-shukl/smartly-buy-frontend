import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'; // corrected import

const Header = () => {
  return (
    <header className="bg-[#0d183f] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left - Icon Logo + Brand Name */}
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faArrowTrendUp} className="text-white text-2xl" />
          <Link to="/" className="text-3xl font-bold hover:text-blue-300 transition duration-200">
            TechTrendyDeals
          </Link>
        </div>

        {/* Right - Navigation + Search Icon */}
        <div className="flex items-center gap-8">
          <Link to="/phones" className="hover:text-blue-300">Phones</Link>
          <Link to="/earbuds" className="hover:text-blue-300">Earbuds</Link>
          <Link to="/laptops-computers" className="hover:text-blue-300 flex items-center gap-1">Laptops & Computer</Link>
          <Link to="/guides" className="hover:text-blue-300">Guides</Link>
          <Link to="/about" className="hover:text-blue-300">About Us</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
          <button className="hover:text-blue-300 transition duration-200 ml-2">
            <FiSearch size={20} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
