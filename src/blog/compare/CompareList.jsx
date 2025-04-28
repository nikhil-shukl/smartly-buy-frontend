import React from 'react';
import { Link } from 'react-router-dom';
import CompareCard from '../../components/CompareCard';

const data = {
  Mobiles: [
    {
      id: 1,
      slug: "iphone-15-vs-galaxy-s23-ultra",
      name: "iPhone 15 Pro Max vs Galaxy S23 Ultra",
      description: "Compare features, performance & battery life.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    },
    {
      id: 2,
      slug: "oneplus-12-vs-iqoo-12",
      name: "OnePlus 12 vs iQOO 12",
      description: "Flagship killers go head-to-head in specs & price.",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    },
    {
      id: 3,
      slug: "pixel-8-vs-iphone-15",
      name: "Pixel 8 vs iPhone 15",
      description: "Best camera phone comparison under ₹80K.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
    },
  ],
  Laptops: [
    {
      id: 4,
      slug: "macbook-air-vs-dell-xps",
      name: "MacBook Air M2 vs Dell XPS 13",
      description: "Ultrabook comparison for productivity users.",
      image: "https://images.pexels.com/photos/574949/pexels-photo-574949.jpeg",
    },
    {
      id: 5,
      slug: "hp-envy-vs-lenovo-yoga",
      name: "HP Envy vs Lenovo Yoga",
      description: "Find the best 2-in-1 laptop for work & play.",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    },
  ],
  Earbuds: [
    {
      id: 6,
      slug: "sony-xm5-vs-airpods-pro-2",
      name: "Sony WF-1000XM5 vs AirPods Pro 2",
      description: "Battle of top ANC earbuds in 2025.",
      image: "https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg",
    },
    {
      id: 7,
      slug: "oneplus-buds-vs-nothing-ear",
      name: "OnePlus Buds Pro 2 vs Nothing Ear 2",
      description: "Affordable ANC earbuds face-off.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    },
  ],
};

const CompareList = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-10">Compare Products</h1>

      {Object.entries(data).map(([category, products]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <CompareCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompareList;
