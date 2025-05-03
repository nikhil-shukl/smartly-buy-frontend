import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link to="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/notifications" className="hover:text-white">Web Notifications</Link></li>
            
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="hover:text-white" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2025 <span className="text-white font-semibold">Smartly Buy</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
