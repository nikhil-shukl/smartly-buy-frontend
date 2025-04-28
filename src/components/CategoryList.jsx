import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const categories = ['Phone', 'Computer-Laptop', 'Earbuds'];

  return (
    <div className="category-bar flex space-x-4">
      {categories.map((category) => (
        <Link 
          key={category} 
          to={`/category/${category.toLowerCase().replace(/\s/g, '-').replace('&', 'and')}`} 
          className="text-white hover:underline"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;

