import React, { useState } from 'react';
import { phones } from '../data/phonesData'; // 📦 Phone data imported from separate file

const Phones = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const phonesPerPage = 8;

  // 🔢 Pagination calculation
  const indexOfLastPhone = currentPage * phonesPerPage;
  const indexOfFirstPhone = indexOfLastPhone - phonesPerPage;
  const currentPhones = phones.slice(indexOfFirstPhone, indexOfLastPhone);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-6 space-y-6">
      
      {/* 🧠 Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Top Phones</h1>
          <p className="text-lg mb-4">
            Discover the latest phones with the best features and performance. Read expert reviews and make a smart choice!
          </p>
        </div>
        <div className="flex-1">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Latest Phone Blog" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* 📱 Phones Listing */}
      {currentPhones.map((phone) => (
        <div 
          key={phone.id} 
          className="flex flex-col md:flex-row items-center md:items-start mb-6 p-4 bg-white rounded-lg shadow-lg"
        >
          {/* 🖼️ Image Section (30%) */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img 
              src={phone.image} 
              alt={phone.name} 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* 📄 Details Section (70%) */}
          <div className="w-full md:w-2/3 md:pl-6">
            <h2 className="text-2xl font-bold mb-2">{phone.name}</h2>
            <p className="text-gray-700 mb-4">{phone.description}</p>

            {/* 🔗 Best Deal Button */}
            <button 
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
            >
              Best Deal
            </button>
          </div>
        </div>
      ))}

      {/* 📄 Pagination */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: Math.ceil(phones.length / phonesPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Phones;
