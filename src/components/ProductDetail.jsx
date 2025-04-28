import React from 'react';
import { useParams } from 'react-router-dom';
import { phones } from '../data/phonesData';  // ✅ Correct path now

const ProductDetail = () => {
  const { productId } = useParams();  // Extracting the productId from URL
  
  const phone = phones.find(p => p.id === parseInt(productId));

  if (!phone) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{phone.name}</h1>
      <img src={phone.image} alt={phone.name} className="w-full max-w-md mb-4" />
      <p>{phone.description}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Buy on {phone.buyOn}</button>
    </div>
  );
};

export default ProductDetail;
