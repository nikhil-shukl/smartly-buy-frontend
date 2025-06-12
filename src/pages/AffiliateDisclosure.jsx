import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Helmet } from "react-helmet";

const AffiliateDisclosure = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/disclosure/affiliate-disclosure")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error loading disclosure:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12 bg-white shadow-lg rounded-lg border border-gray-200 text-gray-800">
      <Helmet>
        <title>{data?.meta_title || "Affiliate Disclosure | TechTrendyDeals"}</title>
        <meta
          name="description"
          content={data?.meta_description || "Read Tech Trendy Deals' affiliate disclosure. Learn how we may earn from affiliate links at no extra cost to you."}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://techtrendydeals.com/affiliate-disclosure" />
      </Helmet>

      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 border-b-2 border-blue-600 pb-3">
        {data?.title || "Affiliate Disclosure"}
      </h1>

      {
        data?.content
          ? <div className="prose prose-lg max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: data.content }} />
          : <p className="text-center text-gray-500 italic py-10">Loading disclosure content...</p>
      }
    </div>
  );
};

export default AffiliateDisclosure;
