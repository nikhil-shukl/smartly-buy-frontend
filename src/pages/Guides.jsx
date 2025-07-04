import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import GuideCard from "../components/GuideCard";
import { Helmet } from "react-helmet";

const Guides = () => {
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/guides");
        setGuides(data.guides);
      } catch (error) {
        console.error("Error fetching guides:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 md:px-20 py-8 flex gap-4">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Tech Buying Guides 2025 | Compare & Choose Smartly</title>
        <meta
          name="description"
          content="Explore expert buying guides for smartphones, laptops, earbuds, and more. Make informed decisions with our curated tech recommendations for 2025."
        />
        <meta
          name="keywords"
          content="tech buying guides, best smartphones 2025, top laptops, earbuds comparison, gadget recommendations, techtrendydeals guides"
        />
        <link rel="canonical" href="https://www.techtrendydeals.com/guides"/>
      </Helmet>

      {/* Left ad space */}
      <div className="hidden lg:block w-1/6">{/* Placeholder for ads */}</div>

      {/* Main content */}
      <div className="w-full lg:w-4/6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
          Expert Tech Buying Guides
        </h1>
        <p className="text-gray-600 mb-6">
          Discover curated buying guides for the latest tech gadgets, from earbuds to laptops — helping you choose the best with confidence.
        </p>

        {/* ✅ H2 Tag for SEO & clarity */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Explore Our Latest Buying Guides
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {guides.map((guide, index) => (
              <React.Fragment key={guide._id}>
                <GuideCard guide={guide} />
                {(index + 1) % 3 === 0 && index !== guides.length - 1 && (
                  <hr
                    className="md:col-span-3 my-6 w-full h-1 rounded"
                    style={{
                      background: "linear-gradient(to right, #4ade80, #3b82f6, #9333ea, #f43f5e)",
                      border: "none",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Right ad space */}
      <div className="hidden lg:block w-1/6">{/* Placeholder for ads */}</div>
    </div>
  );
};

export default Guides;
