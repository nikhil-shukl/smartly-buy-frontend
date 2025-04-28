import React, { useState } from 'react';
import { computers } from '../data/computersData';

const Computers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const currentItems = computers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="relative flex flex-col md:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Top Computers & Laptops</h1>
          <p className="text-lg mb-4">
            Explore the latest laptops and computers for every need – work, gaming, or study.
          </p>
        </div>
        <div className="flex-1">
          <img src="https://via.placeholder.com/600x400" alt="Latest Laptop Blog" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>

      {currentItems.map((item) => (
        <div key={item.id} className="flex flex-col md:flex-row items-center mb-6 p-4 bg-white rounded-lg shadow-lg">
          <div className="w-full md:w-[30%]">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-lg mb-4" />
          </div>
          <div className="flex-1 md:pl-6">
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Best Deal</button>
          </div>
        </div>
      ))}

      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: Math.ceil(computers.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)} className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Computers;
