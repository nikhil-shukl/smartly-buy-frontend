import React from 'react';
import { Link } from 'react-router-dom';

const TrendingNews = () => {
  const newsList = [
    {
      title: "Samsung Galaxy S23 Ultra Review",
      image: "https://images.pexels.com/photos/4042806/pexels-photo-4042806.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
      link: "/news/samsung-galaxy-s23-ultra-review"
    },
    {
      title: "MacBook Air M2 vs MacBook Pro M2",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=250",
      link: "/news/macbook-air-m2-vs-macbook-pro-m2"
    },
    {
      title: "Best Bluetooth Headphones of 2025",
      image:" https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
      link: "/news/best-bluetooth-headphones-2025"
    },
    {
      title: "Top Smartwatches for Fitness Enthusiasts",
      image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
      link: "/news/top-smartwatches-for-fitness"
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-8 md:w-1/4">
      <h2 className="text-xl font-bold mb-4">Trending News</h2>
      <ul className="space-y-6">
        {newsList.map((news, index) => (
          <li key={index} className="flex items-center space-x-4">
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-40 h-28 object-cover rounded-md"
            />
            <div>
              <Link to={news.link} className="text-blue-500 hover:underline text-lg">
                {news.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingNews;
