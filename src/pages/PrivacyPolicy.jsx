import React, { useEffect, useState } from "react";
import axios from '../utils/axios';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/privacy-policy")
      .then(res => setContent(res.data?.content))
      .catch(err => {
        console.error("Error loading privacy policy:", err);
        setError("Unable to load privacy policy. Please try again later.");
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-12 bg-white shadow-lg rounded-lg border border-gray-200 text-gray-800">
      {/* ✅ SEO Helmet Tags */}
      <Helmet>
        <title>Privacy Policy | TechTrendyDeals</title>
        <meta
          name="description"
          content="Learn how TechTrendyDeals collects, uses, and protects your personal data. We prioritize transparency, cookie practices, and secure data handling."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.techtrendydeals.com/privacy-policy" />
        {/* ✅ Structured Data (optional but good for trust) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Information on how TechTrendyDeals handles your personal data and cookie usage.",
            "url": "https://www.techtrendydeals.com/privacy-policy"
          })}
        </script>
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-gray-900 border-b border-blue-500 pb-3">
        Privacy Policy
      </h1>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Privacy Matters to Us</h2>

      {error ? (
        <p className="text-center text-red-600 italic py-10">{error}</p>
      ) : content ? (
        <div
          className="prose prose-lg max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p className="text-center text-gray-500 italic py-10">Loading privacy policy content...</p>
      )}
    </div>
  );
};

export default PrivacyPolicy;
