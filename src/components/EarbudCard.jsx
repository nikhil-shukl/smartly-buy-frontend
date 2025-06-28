import React from "react";

const EarbudCard = ({ earbud }) => {
  return (
    <div className="max-w-5xl mx-auto my-6 bg-white shadow-md rounded-xl overflow-hidden">
      {/* Top Section: Image + Content Side by Side */}
      <div className="flex flex-col md:flex-row">
        {/* Image Section with Link */}
        <a
          href={earbud.affiliateLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="w-full md:w-1/3"
        >
          <img
            src={earbud.image}
            alt={earbud.name}
            className="w-full h-56 md:h-64 object-contain p-2"
          />
        </a>

        {/* Right Content */}
        <div className="p-4 md:w-2/3 flex flex-col justify-between">
          {/* Top Content */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              {earbud.name}
            </h2>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              {earbud.description}
            </p>

            {/* Best For */}
            {earbud.bestFor && (
              <p className="mt-2 text-sm text-green-600">
                <strong>Best For:</strong> {earbud.bestFor}
              </p>
            )}

            {/* Pros & Cons Side-by-Side */}
            {(earbud.pros?.length > 0 || earbud.cons?.length > 0) && (
              <div className="mt-4 flex flex-col md:flex-row gap-4">
                {earbud.pros?.length > 0 && (
                  <div className="md:w-1/2">
                    <p className="text-sm font-medium text-gray-800">Pros:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {earbud.pros.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {earbud.cons?.length > 0 && (
                  <div className="md:w-1/2">
                    <p className="text-sm font-medium text-gray-800">Cons:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {earbud.cons.map((item, index) => (
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
            href={earbud.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 self-start bg-blue-600 text-white px-3 py-1.5 text-sm font-medium rounded-md hover:bg-blue-700 transition duration-150"
          >
            Best Deal
          </a>
        </div>
      </div>

      {/* Full Width Verdict */}
      {earbud.verdict && (
        <div className="border-t border-gray-200 p-4">
          <p className="text-sm font-medium text-gray-800 mb-1">Verdict:</p>
          <p className="text-sm text-gray-700">{earbud.verdict}</p>
        </div>
      )}
    </div>
  );
};

export default EarbudCard;

