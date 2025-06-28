import React from "react";

const PhoneCard = ({ phone }) => {
  return (
    <div className="max-w-5xl mx-auto my-6 bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
   <a href={phone.affiliateLink} target="_blank" rel="nofollow noopener noreferrer" className="w-full md:w-1/3">
     <img
        src={phone.image}
        alt={phone.name}
        className="w-full h-56 md:h-64 object-contain p-2"
     />
   </a>


      {/* Content Section */}
      <div className="p-4 md:w-2/3 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {phone.name}
          </h2>

          {/* Description */}
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            {phone.description}
          </p>

          {/* Best For */}
          {phone.bestFor && (
            <p className="mt-2 text-sm text-green-600">
              <strong>Best For:</strong> {phone.bestFor}
            </p>
          )}

          {/* Pros */}
          {phone.pros && phone.pros.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-800">Pros:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {phone.pros.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Cons */}
          {phone.cons && phone.cons.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-800">Cons:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {phone.cons.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Verdict */}
          {phone.verdict && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-800">Verdict:</p>
              <p className="text-sm text-gray-700">{phone.verdict}</p>
            </div>
          )}
        </div>

        {/* Best Deal Button */}
        <a
          href={phone.affiliateLink}
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

export default PhoneCard;
