import React, { useEffect, useState } from "react";
import axios from '../utils/axios';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("/privacy-policy")
      .then(res => setContent(res.data?.content))
      .catch(err => console.error("Error loading privacy policy:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12 bg-white shadow-lg rounded-lg border border-gray-200 text-gray-800">
      <Helmet>
        <title>Privacy Policy | Tech Trendy Deals</title>
        <meta
          name="description"
          content="Learn how Tech Trendy Deals collects and uses your data, including cookies and Google Analytics."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://techtrendydeals.com/privacy-policy" />
      </Helmet>

      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 border-b-2 border-blue-600 pb-3">
        Privacy Policy
      </h1>

      {
        content
          ? <div className="prose prose-lg max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          : <p className="text-center text-gray-500 italic py-10">Loading privacy policy content...</p>
      }
    </div>
  );
};

export default PrivacyPolicy;
