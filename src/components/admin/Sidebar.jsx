import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full md:w-64 bg-blue-700 text-white min-h-screen p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/admin/products" className="hover:text-blue-300">Manage Products</Link>
        <Link to="/admin/blogs" className="hover:text-blue-300">Manage Blogs</Link>
        <Link to="/admin/news" className="hover:text-blue-300">Manage News</Link>
        <Link to="/admin/messages" className="hover:text-blue-300">View Messages</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
