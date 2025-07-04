import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import PhoneCard from "../components/PhoneCard";
import BlogHeader from "../components/BlogHeader";
import { Helmet } from "react-helmet";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const { data } = await axios.get("/phones");
        console.log("📱 Fetched phones:", data);
        setPhones(data?.phones || []);
      } catch (err) {
        console.error("❌ Error fetching phones:", err.message);
        setError("Failed to fetch phones. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div className="px-4 md:px-20 py-8">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Best Smartphones 2025 – Top Picks & Deals | TechTrendyDeals</title>
        <meta 
          name="description" 
          content="Explore top smartphones of 2025 by Samsung, Apple, OnePlus, and more. Compare specs, read expert verdicts & find best online deals at TechTrendyDeals." 
        />
        <meta 
          name="keywords" 
          content="best smartphones 2025, top phones, flagship mobiles, budget android, iPhones deals, mobile reviews, phone comparison" 
        />
        <link rel="canonical" href="https://www.techtrendydeals.com/phones"/>
      </Helmet>

      {/* ✅ H1 tag for SEO */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
        Top Smartphones of 2025 – Expert Reviews & Comparisons
      </h1>

      {/* ✅ BlogHeader (you already use it correctly) */}
      <BlogHeader
        title="Best Smartphones for Every Budget – Flagship to Value Picks"
        description="Explore our expert-picked list of the best smartphones across all price ranges. From flagship beasts to budget performers – find your next perfect phone here!"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Smartphones Compared in 2025</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : error ? (
        <div className="text-red-600 text-center mt-4">{error}</div>
      ) : (
        <>
          {/* ✅ H2 tag for product listing */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
            Compare & Shop – Best Smartphones to Buy in 2025
          </h2>

          <div className="flex flex-col gap-6">
            {phones.map((phone) => (
              <PhoneCard key={phone._id} phone={phone} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Phones;
