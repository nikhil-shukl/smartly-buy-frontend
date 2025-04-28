import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';  // Import axios instance from utils
import { Helmet } from 'react-helmet';  // Import Helmet for managing meta tags

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch About Us data from backend
  useEffect(() => {
    const fetchAboutUsData = async () => {
      try {
        const response = await axios.get('/about');  // API endpoint for About Us
        console.log(response.data);  // Log the entire response data to ensure it's correct
        setAboutData(response.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutUsData();
  }, []);

  // Loading state
  if (loading) return <div>Loading...</div>;

  // Error state
  if (error) return <div>{error}</div>;

  // Fallback in case the data is incomplete
  if (!aboutData) return <div>About Us data is missing or incomplete.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Setting meta title and description dynamically */}
      <Helmet>
        <title>{aboutData.meta_title}</title>
        <meta name="description" content={aboutData.meta_description} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">{aboutData.title}</h1>
      <p className="text-lg mb-6">{aboutData.description}</p>

      {/* Rendering Long Description */}
      {aboutData.long_description && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="text-lg">{aboutData.long_description}</p>
        </div>
      )}

      {/* Rendering Why Trust Us section */}
      {aboutData.key_points && aboutData.key_points.length > 0 ? (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Why Trust Us?</h2>
          <ul className="list-disc pl-6">
            {aboutData.key_points.map((point, index) => (
              <li key={index} className="text-lg">{point}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-lg text-gray-500">No key points available.</div>  // Fallback if points are missing
      )}

      {/* Rendering Best Deal Button */}
      {aboutData.ctaLink ? (
        <div className="text-center">
          <a href={aboutData.ctaLink} className="bg-blue-500 text-white px-6 py-3 rounded-lg">
            Best Deal
          </a>
        </div>
      ) : (
        <div className="text-lg text-gray-500">No call-to-action available.</div>  // Fallback if CTA link is missing
      )}
    </div>
  );
};

export default AboutUs;

