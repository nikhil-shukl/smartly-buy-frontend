import React, { useEffect, useState } from "react";
import axios from '../utils/axios';
import { Helmet } from 'react-helmet';

const TermsConditions = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("/terms-conditions")
      .then(res => setContent(res.data?.content))
      .catch(err => console.error("Error loading terms and conditions:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12 bg-white shadow-lg rounded-lg border border-gray-200 text-gray-800">
      <Helmet>
        <title>Terms and Conditions | Tech Trendy Deals</title>
        <meta
          name="description"
          content="Read the terms and conditions for using Tech Trendy Deals website."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://techtrendydeals.com/terms-conditions" />
      </Helmet>

      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 border-b-2 border-blue-600 pb-3">
        Terms and Conditions
      </h1>

      {
        content
          ? <div className="prose prose-lg max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          : <p className="text-center text-gray-500 italic py-10">Loading terms and conditions content...</p>
      }
    </div>
  );
};

export default TermsConditions;
