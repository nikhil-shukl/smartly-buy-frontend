import React from "react";
import { Link } from "react-router-dom";

const GuideCard = ({ guide }) => (
  <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
    <Link to={`/guides/${guide.slug}`}>
      <div className="w-full h-52 flex items-center justify-center overflow-hidden bg-gray-50 rounded-md mb-3">
        <img
          src={guide.image}
          alt={guide.title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </Link>

    {/* 🔗 Title wrapped in Link */}
    <Link to={`/guides/${guide.slug}`}>
      <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition">
        {guide.title}
      </h3>
    </Link>

    <p className="text-sm text-gray-600 mt-1">{guide.description}</p>

    <Link
      to={`/guides/${guide.slug}`}
      className="mt-3 inline-block text-blue-600 font-medium"
    >
      Read Full Guide →
    </Link>
  </div>
);

export default GuideCard;


