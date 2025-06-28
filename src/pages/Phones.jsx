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
        <title>Top Smartphones 2025 | TechTrendyDeals</title>
        <meta 
          name="description" 
          content="Discover the best smartphones of 2025 from top brands like Samsung, Apple, OnePlus, and more. Compare features, read expert reviews, and get the best deals." 
        />
        <meta 
          name="keywords" 
          content="best smartphones 2025, latest phones, Android phones, iPhones, buy smartphones online, flagship phones, budget smartphones" 
        />
        <link rel="canonical" href="https://www.techtrendydeals.com/phones" />
      </Helmet>

      <BlogHeader
        title="Best Smartphones for Every Budget – Flagship to Value Picks"
        description="Explore our expert-picked list of the best smartphones across all price ranges. From flagship beasts to budget performers – find your next perfect phone here!"
      />

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : error ? (
        <div className="text-red-600 text-center mt-4">{error}</div>
      ) : (
        <div className="flex flex-col gap-6 mt-6">
          {phones.map((phone) => (
            <PhoneCard key={phone._id} phone={phone} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Phones;

