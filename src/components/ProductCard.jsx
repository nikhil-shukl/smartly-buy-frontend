import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, description }) => {
  return (
    <div style={{ 
      background: '#fff', 
      padding: '10px', 
      borderRadius: '5px', 
      width: '200px',
      border: '1px solid #ddd'
    }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/product/${id}`}>
        <button style={{ 
          background: '#007bff', 
          color: 'white', 
          padding: '5px', 
          border: 'none', 
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          View Product
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
