import React from "react";

const PhoneCard = ({ phone }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        src={phone.image}
        alt={phone.name}
        className="w-full md:w-1/3 object-cover"
      />
      <div className="p-4 md:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold">{phone.name}</h2>
          <p className="text-gray-700 mt-2">{phone.description}</p>
          {phone.bestFor && (
            <p className="mt-2 text-sm text-green-600">
              <strong>Best For:</strong> {phone.bestFor}
            </p>
          )}
        </div>
        <a
          href={phone.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Best Deal
        </a>
      </div>
    </div>
  );
};

export default PhoneCard;
