import React from "react";

const LaptopCard = ({ laptop }) => {
  return (
    <div className="max-w-5xl mx-auto my-6 bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
      <img
        src={laptop.image}
        alt={laptop.name}
        className="w-full md:w-1/3 h-56 md:h-64 object-contain p-2"
      />

      {/* Content Section */}
      <div className="p-4 md:w-2/3 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {laptop.name}
          </h2>

          {/* Description */}
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            {laptop.description}
          </p>

          {/* Best For */}
          {laptop.bestFor && (
            <p className="mt-2 text-sm text-green-600">
              <strong>Best For:</strong> {laptop.bestFor}
            </p>
          )}

          {/* Pros */}
          {laptop.pros && laptop.pros.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-800">Pros:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {laptop.pros.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Cons */}
          {laptop.cons && laptop.cons.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-800">Cons:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {laptop.cons.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Verdict */}
          {laptop.verdict && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-800">Verdict:</p>
              <p className="text-sm text-gray-700">{laptop.verdict}</p>
            </div>
          )}
        </div>

        {/* Best Deal Button */}
        <a
          href={laptop.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 self-start bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded hover:bg-blue-700 transition duration-200"
        >
          Best Deal
        </a>
      </div>
    </div>
  );
};

export default LaptopCard;
