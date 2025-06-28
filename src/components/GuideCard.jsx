import React from "react";
import { Link } from "react-router-dom";

const GuideCard = ({ guide }) => (
  <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
    <Link to={`/guides/${guide.slug}`}>
      <div className="w-full h-48 overflow-hidden rounded-md mb-3">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </Link>
    <h3 className="text-lg font-bold text-gray-800">{guide.title}</h3>
    <p className="text-sm text-gray-600 mt-1">{guide.description}</p>
    <Link to={`/guides/${guide.slug}`} className="mt-3 inline-block text-blue-600 font-medium">
      Read Full Guide →
    </Link>
  </div>
);

export default GuideCard;
