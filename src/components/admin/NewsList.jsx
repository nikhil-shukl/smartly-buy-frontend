import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

const NewsList = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const { data } = await axios.get("/api/news");
      setNews(data);
    } catch (error) {
      console.error("Error fetching news", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage News</h1>
      <div className="space-y-4">
        {news.map((item) => (
          <div key={item._id} className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-600 line-clamp-3">{item.description.substring(0, 100)}...</p>
            <button className="bg-red-500 text-white mt-4 px-4 py-2 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
