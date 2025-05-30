import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0d183f] text-gray-300 px-10 py-16 mt-12 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5">Company</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
            
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5">Support</h4>
          <ul className="space-y-3">
            <li><Link to="/terms-conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/affiliate-disclosure" className="hover:text-white transition">Affiliate Disclosure</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-5">Follow Us</h4>
          <div className="flex space-x-6 text-lg">
            <a href="#" className="hover:text-white transition" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white transition" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-12">
        © 2025 <span className="text-white font-semibold">TechTrendyDeals</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

