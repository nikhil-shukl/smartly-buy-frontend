import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import PhoneCard from "../components/PhoneCard";
import BlogHeader from "../components/BlogHeader";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true); // ⏳ for spinner
  const [error, setError] = useState(null);     // ❌ error state

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
      <BlogHeader
        title="Top Phones in India (2025)"
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
