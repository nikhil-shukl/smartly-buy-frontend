import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import EarbudCard from "../components/EarbudCard";
import BlogHeader from "../components/BlogHeader";
import { Helmet } from "react-helmet-async";

const Earbuds = () => {
  const [earbuds, setEarbuds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEarbuds = async () => {
      try {
        const { data } = await axios.get("/earbuds");
        console.log("🎧 Fetched earbuds:", data);
        setEarbuds(data?.earbuds || []);
      } catch (err) {
        console.error("❌ Error fetching earbuds:", err.message);
        setError("Failed to fetch earbuds. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEarbuds();
  }, []);

  return (
    <div className="px-4 md:px-20 py-8">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Top Wireless Earbuds for Music, Calls & Fitness | TWS 2025</title>
        <meta
          name="description"
          content="Explore the best wireless earbuds (TWS) for 2025 with great sound, long battery, and a secure fit. Ideal for music, workouts, video calls, and more."
        />
        <meta
          name="keywords"
          content="best wireless earbuds 2025, TWS earbuds, earbuds for gym, earbuds for calls, earbuds with long battery life, affordable TWS"
        />
        <link rel="canonical" href="https://www.techtrendydeals.com/earbuds" />
      </Helmet>

      <BlogHeader
        title="Best Wireless Earbuds for Music, Calls & Workouts – Top TWS Picks"
        description="Explore the top-rated true wireless earbuds offering crystal-clear sound, long-lasting battery, and snug fit for all-day comfort. Whether it’s for Zoom calls, daily workouts, or immersive music, find the perfect pair of TWS earbuds right here."
      />

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : error ? (
        <div className="text-red-600 text-center mt-4">{error}</div>
      ) : (
        <div className="flex flex-col gap-6 mt-6">
          {earbuds.map((earbud) => (
            <EarbudCard key={earbud._id} earbud={earbud} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Earbuds;
