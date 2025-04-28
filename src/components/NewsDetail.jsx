// src/pages/NewsDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { phones } from '../data/phonesData'; // or laptops/earbuds based on logic

const newsData = {
  'samsung-galaxy-s23-ultra-review': {
    title: "Samsung Galaxy S23 Ultra Review",
    content: "This is a detailed review of the Galaxy S23 Ultra...",
    relatedCategory: "Phones"
  },
  'macbook-air-m2-vs-macbook-pro-m2': {
    title: "MacBook Air M2 vs MacBook Pro M2",
    content: "Let's compare both of Apple's M2 laptops...",
    relatedCategory: "Laptops"
  },
  'best-bluetooth-headphones-2025': {
    title: "Best Bluetooth Headphones of 2025",
    content: "These are the top Bluetooth headphones in 2025...",
    relatedCategory: "Earbuds"
  },
  'top-smartwatches-for-fitness': {
    title: "Top Smartwatches for Fitness Enthusiasts",
    content: "Smartwatches to help you crush your fitness goals...",
    relatedCategory: "Health"
  }
};

const NewsDetail = () => {
  const { newsId } = useParams();
  const news = newsData[newsId];

  if (!news) return <div>News not found.</div>;

  // Select related products
  let relatedProducts = [];
  if (news.relatedCategory === "Phones") relatedProducts = phones.slice(0, 3);
  // You can add similar logic for laptops or earbuds

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <p className="mb-6">{news.content}</p>

      <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relatedProducts.map(product => (
          <div key={product.id} className="bg-white shadow p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded" />
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">
              Best Deal
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDetail;
