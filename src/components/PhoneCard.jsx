import React from "react";

const PhoneCard = ({ phone }) => {
  return (
    <div className="max-w-3xl w-full mx-auto my-6 bg-white shadow-md rounded-xl overflow-hidden">
      {/* 🔁 Reverse on mobile using flex-col-reverse, normal on md+ */}
      <div className="flex flex-col-reverse md:flex-row">
        {/* 📝 Content Section (left on mobile, right on desktop) */}
        <div className="p-4 w-full md:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-base md:text-xl font-semibold text-gray-800">
              {phone.name}
            </h2>
            <p className="text-sm md:text-base text-gray-700 mt-2">
              {phone.description}
            </p>

            {phone.bestFor && (
              <p className="mt-2 text-sm text-green-600">
                <strong>Best For:</strong> {phone.bestFor}
              </p>
            )}

            {(phone.pros?.length > 0 || phone.cons?.length > 0) && (
              <div className="mt-4 flex flex-col md:flex-row gap-4">
                {phone.pros?.length > 0 && (
                  <div className="md:w-1/2">
                    <p className="text-sm font-medium text-gray-800">Pros:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {phone.pros.map((item, index) => (
                        <li key={index}>✔️ {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {phone.cons?.length > 0 && (
                  <div className="md:w-1/2">
                    <p className="text-sm font-medium text-gray-800">Cons:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {phone.cons.map((item, index) => (
                        <li key={index}>❌ {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 🛒 Best Deal Button */}
          <a
            href={phone.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-md hover:bg-blue-700 transition w-full sm:w-auto text-center"
          >
            Best Deal
          </a>
        </div>

        {/* 📱 Image Section (right on mobile, left on desktop) */}
        <a
          href={phone.affiliateLink}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="w-full md:w-1/3 bg-gray-50"
        >
          <img
            src={phone.image}
            alt={phone.name}
            className="w-full h-40 sm:h-52 md:h-64 object-contain p-3"
          />
        </a>
      </div>

      {/* ✅ Verdict Section */}
      {phone.verdict && (
        <div className="border-t border-gray-200 p-4">
          <p className="text-sm font-medium text-gray-800 mb-1">Verdict:</p>
          <p className="text-sm text-gray-700 whitespace-pre-line">
            {phone.verdict}
          </p>
        </div>
      )}
    </div>
  );
};

export default PhoneCard;


