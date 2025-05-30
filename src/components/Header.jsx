import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#0d183f] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faArrowTrendUp} className="text-white text-2xl" />
          <Link to="/" className="text-2xl sm:text-3xl font-bold hover:text-blue-300 transition">
            TechTrendyDeals
          </Link>
        </div>

        {/* Right - Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/phones" className="hover:text-blue-300">Phones</Link>
          <Link to="/earbuds" className="hover:text-blue-300">Earbuds</Link>
          <Link to="/laptops" className="hover:text-blue-300">Laptops & Computer</Link>
          <Link to="/guides" className="hover:text-blue-300">Guides</Link>
          <Link to="/about" className="hover:text-blue-300">About Us</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
          <button className="hover:text-blue-300">
            <FiSearch size={20} />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-[#0d183f]">
          <Link to="/phones" onClick={toggleMenu} className="block hover:text-blue-300">Phones</Link>
          <Link to="/earbuds" onClick={toggleMenu} className="block hover:text-blue-300">Earbuds</Link>
          <Link to="/laptops" onClick={toggleMenu} className="block hover:text-blue-300">Laptops & Computer</Link>
          <Link to="/guides" onClick={toggleMenu} className="block hover:text-blue-300">Guides</Link>
          <Link to="/about" onClick={toggleMenu} className="block hover:text-blue-300">About Us</Link>
          <Link to="/contact" onClick={toggleMenu} className="block hover:text-blue-300">Contact Us</Link>
          <button className="hover:text-blue-300">
            <FiSearch size={20} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
