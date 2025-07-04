import React, { useEffect, useState } from "react";
import axios from '../utils/axios';
import { Helmet } from 'react-helmet';

const AffiliateDisclosure = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/disclosure")
      .then((res) => setContent(res.data?.content))
      .catch((err) => {
        console.error("Error loading disclosure:", err);
        setError("Unable to load disclosure content. Please try again later.");
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white shadow-md rounded-lg border border-gray-200 text-gray-800">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Affiliate Disclosure | TechTrendyDeals</title>
        <meta
          name="description"
          content="Read TechTrendyDeals' affiliate disclosure to understand how affiliate links work and how they help support our content at no extra cost to you."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.techtrendydeals.com/affiliate-disclosure"/>
        {/* ✅ Optional: Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Affiliate Disclosure",
            "description": "Learn how TechTrendyDeals earns through affiliate links without impacting your cost or trust.",
            "url": "https://www.techtrendydeals.com/affiliate-disclosure"
          })}
        </script>
      </Helmet>

      <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b border-blue-500 pb-3">
        Affiliate Disclosure
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
  How Affiliate Links Help Support Our Work
</h2>


      {error ? (
        <p className="text-red-600 italic text-center py-10">{error}</p>
      ) : content ? (
        <div
          className="prose prose-lg max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p className="text-center text-gray-500 italic py-10">Loading disclosure content...</p>
      )}
    </div>
  );
};

export default AffiliateDisclosure;
