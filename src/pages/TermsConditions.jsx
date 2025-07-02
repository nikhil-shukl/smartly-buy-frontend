import React, { useEffect, useState } from "react";
import axios from '../utils/axios';
import { Helmet } from 'react-helmet';

const TermsConditions = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/terms-conditions")
      .then(res => setContent(res.data?.content))
      .catch(err => {
        console.error("Error loading terms and conditions:", err);
        setError("Unable to load content. Please try again later.");
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 mt-12 bg-white shadow-lg rounded-lg border border-gray-200 text-gray-800">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Terms and Conditions | TechTrendyDeals</title>
        <meta
          name="description"
          content="Read the complete terms and conditions for using TechTrendyDeals. Know your rights, limitations, and user responsibilities before engaging with our content or services."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.techtrendydeals.com/terms-conditions" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "description": "Legal terms for using the TechTrendyDeals website.",
            "url": "https://www.techtrendydeals.com/terms-conditions"
          })}
        </script>
      </Helmet>

      <h1 className="text-4xl font-bold mb-6 text-gray-900 border-b border-blue-500 pb-3">
        Terms and Conditions
      </h1>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User Agreement Overview</h2>

      {error ? (
        <p className="text-center text-red-600 italic py-10">{error}</p>
      ) : content ? (
        <div
          className="prose prose-lg max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p className="text-center text-gray-500 italic py-10">Loading terms and conditions content...</p>
      )}
    </div>
  );
};

export default TermsConditions;
