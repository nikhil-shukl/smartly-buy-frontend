import React from "react";

const LaptopCard = ({ laptop }) => {
  return (
    <div className="max-w-5xl mx-auto my-6 bg-white shadow-md rounded-xl overflow-hidden">
      {/* Top Section: Image + Content Side by Side */}
      <div className="flex flex-col md:flex-row">
        {/* Image Section with Link */}
        <a
          href={laptop.affiliateLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="w-full md:w-1/3"
        >
          <img
            src={laptop.image}
            alt={laptop.name}
            className="w-full h-56 md:h-64 object-contain p-2"
          />
        </a>

        {/* Right Content */}
        <div className="p-4 md:w-2/3 flex flex-col justify-between">
          {/* Top Content */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              {laptop.name}
            </h2>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              {laptop.description}
            </p>

            {/* Best For */}
            {laptop.bestFor && (
              <p className="mt-2 text-sm text-green-600">
                <strong>Best For:</strong> {laptop.bestFor}
              </p>
            )}

            {/* Pros & Cons Side-by-Side */}
            {(laptop.pros?.length > 0 || laptop.cons?.length > 0) && (
              <div className="mt-4 flex flex-col md:flex-row gap-4">
                {laptop.pros?.length > 0 && (
                  <div className="md:w-1/2">
                    <p className="text-sm font-medium text-gray-800">Pros:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {laptop.pros.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {laptop.cons?.length > 0 && (
                  <div className="md:w-1/2">
                    <p className="text-sm font-medium text-gray-800">Cons:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {laptop.cons.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Best Deal Button */}
          <a
            href={laptop.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 self-start bg-blue-600 text-white px-3 py-1.5 text-sm font-medium rounded-md hover:bg-blue-700 transition duration-150"
          >
            Best Deal
          </a>
        </div>
      </div>

      {/* Full Width Verdict */}
      {laptop.verdict && (
        <div className="border-t border-gray-200 p-4">
          <p className="text-sm font-medium text-gray-800 mb-1">Verdict:</p>
          <p className="text-sm text-gray-700">{laptop.verdict}</p>
        </div>
      )}
    </div>
  );
};

export default LaptopCard;

