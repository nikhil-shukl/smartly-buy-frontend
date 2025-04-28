import React from 'react';
import { Link } from 'react-router-dom';

const CompareCard = ({ product }) => {
  return (
    <Link
      to={`/compare/${product.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      </div>
    </Link>
  );
};

export default CompareCard;
