import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import LaptopCard from "../components/LaptopCard";
import BlogHeader from "../components/BlogHeader";

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
      <BlogHeader
        title="Best Laptops & Computers for Work, Gaming & Everyday Use"
        description="Discover top-performing laptops and desktop computers tailored for students, professionals, gamers, and creators. Explore devices that offer the perfect balance of speed, design, battery life, and value for every budget."
      />

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : error ? (
        <div className="text-red-600 text-center mt-4">{error}</div>
      ) : (
        <div className="flex flex-col gap-6 mt-6">
          {laptops.map((laptop) => (
            <LaptopCard key={laptop._id} laptop={laptop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Laptops;
