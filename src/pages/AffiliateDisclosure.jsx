import React, { useEffect, useState } from "react";
import axios from '../utils/axios';
import { Helmet } from 'react-helmet';

const AffiliateDisclosure = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("/disclosure")
      .then((res) => setContent(res.data?.content))
      .catch((err) => console.error("Error loading disclosure:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 mt-6 text-gray-800">
      <Helmet>
        <title>Affiliate Disclosure | Tech Trendy Deals</title>
        <meta
          name="description"
          content="Read Tech Trendy Deals' affiliate disclosure. Learn how we may earn from affiliate links at no extra cost to you."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://techtrendydeals.com/affiliate-disclosure" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Affiliate Disclosure</h1>
      {
        content
          ? <div className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          : <p></p>
      }
    </div>
  );
};

export default AffiliateDisclosure;
