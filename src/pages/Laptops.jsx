import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import LaptopCard from "../components/LaptopCard";
import BlogHeader from "../components/BlogHeader";
import { Helmet } from "react-helmet";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const { data } = await axios.get("/laptops");
        console.log("💻 Fetched laptops:", data);
        setLaptops(data?.laptops || []);
      } catch (err) {
        console.error("❌ Error fetching laptops:", err.message);
        setError("Failed to fetch laptops. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  return (
    <div className="px-4 md:px-20 py-8">
      {/* ✅ SEO Helmet Tags */}
      <Helmet>
        <title>Best Laptops & Computers 2025 – Work, Gaming & More</title>
        <meta
          name="description"
          content="Explore the best laptops and desktop computers for students, professionals, gamers, and creators. Compare performance, battery life, and value – all in one place."
        />
        <meta
          name="keywords"
          content="best laptops 2025, computers for work, gaming laptops, student laptops, creators laptops, desktop PCs"
        />
        <link rel="canonical" href="https://www.techtrendydeals.com/laptops"/>
      </Helmet>

      {/* ✅ H1 Tag */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
        Best Laptops & Computers to Buy in 2025 – Reviews & Specs
      </h1>

      {/* ✅ Blog Header */}
      <BlogHeader
        title="Best Laptops & Computers for Work, Gaming & Everyday Use"
        description="Discover top-performing laptops and desktop computers tailored for students, professionals, gamers, and creators. Explore devices that offer the perfect balance of speed, design, battery life, and value for every budget."
      />
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest Laptops & Desktops Compared in 2025</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : error ? (
        <div className="text-red-600 text-center mt-4">{error}</div>
      ) : (
        <>
          {/* ✅ H2 Tag */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">
            Compare Top Laptops & Desktops by Performance & Price
          </h2>

          <div className="flex flex-col gap-6">
            {laptops.map((laptop) => (
              <LaptopCard key={laptop._id} laptop={laptop} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Laptops;
