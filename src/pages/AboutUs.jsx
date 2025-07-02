import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  window.scrollTo(0, 0); // ✅ scroll to top when About page loads

  const fetchAboutUsData = async () => {
    try {
      const response = await axios.get('/about');
      setAboutData(response.data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  fetchAboutUsData();
}, []);


  if (loading) return <div className="text-center py-16 text-2xl font-medium animate-pulse">Loading...</div>;
  if (error) return <div className="text-center py-16 text-red-600 text-lg">{error}</div>;
  if (!aboutData) return <div className="text-center py-16 text-gray-600">About Us data is missing or incomplete.</div>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <Helmet>
        <title>{aboutData.meta_title}</title>
        <meta name="description" content={aboutData.meta_description} />
      </Helmet>

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{aboutData.title}</h1>
      <p className="text-lg text-gray-700 mb-8">{aboutData.description}</p>

      {/* Founder Image and Bio IN MAIN BODY */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <img
          src="/nikhil-laptop.jpeg"
          alt="Nikhil - Founder"
          className="w-48 h-48 object-cover rounded-xl shadow-md"
        />
        <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">Nikhil Shukla</h3>
               <p className="text-gray-600 mt-2">
                  Founder & CEO – TechTrendyDeals.com <br />
                  Full-Stack Developer (MERN) <br />
                  Passionate about helping users make smarter tech buying decisions.
               </p>
        </div>

      </div>

      {/* Long Description */}
      {aboutData.long_description && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">About Us</h2>
          <p className="text-gray-700 leading-relaxed">{aboutData.long_description}</p>
        </div>
      )}

      {/* Key Points */}
      {aboutData.key_points?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Trust Us?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {aboutData.key_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button */}
      {aboutData.ctaLink && aboutData.call_to_action && (
        <div>
          <a
            href={aboutData.ctaLink}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            {aboutData.call_to_action}
          </a>
        </div>
      )}
    </div>
  );
};

export default AboutUs;


