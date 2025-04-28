import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";



const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blogs");
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Blogs</h1>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-600 line-clamp-3">{blog.content.substring(0, 100)}...</p>
            <button className="bg-red-500 text-white mt-4 px-4 py-2 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
