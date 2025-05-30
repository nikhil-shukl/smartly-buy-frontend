import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios'; // use your configured Axios instance

const Home = () => {
  const [products, setProducts] = useState({ phones: [], laptops: [], earbuds: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        const res = await axios.get("/products/home-products"); // uses dynamic baseURL
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching home products:", error);
        setLoading(false);
      }
    };

    fetchHomeProducts();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-[120px] hidden lg:block"></div>

      <div className="max-w-[1200px] w-full px-4">
        <div className="mt-6"></div>

        {/* Heroic Section */}
        <section
          className="relative text-white text-center p-10 rounded-lg shadow-md mt-12 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556656793-08538906a9f8')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-4">Tech Trendy Deals – Your Smart Tech Buying Companion</h1>
            <p className="text-lg mb-6">
              Discover top-rated smartphones, laptops, and earbuds. Compare specs, read expert guides, and find the best deals before you buy.
            </p>
            <button
              onClick={() => navigate('/heroic-detail')}
              className="bg-green-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded transition"
            >
              Best Deals
            </button>
          </div>
        </section>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <Section title="Phones" items={products.phones} navigate={navigate} />
            <hr className="my-10 border-t-4 rounded" style={{ borderColor: '#090E21' }} />
            <Section title="Laptops" items={products.laptops} navigate={navigate} />
            <hr className="my-10 border-t-4 rounded" style={{ borderColor: '#090E21' }} />
            <Section title="Earbuds" items={products.earbuds} navigate={navigate} />
          </>
        )}
      </div>

      <div className="w-[120px] hidden lg:block"></div>
    </div>
  );
};

const Section = ({ title, items, navigate }) => (
  <section className="mt-10 mb-10">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map(item => (
        <div key={item._id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <div className="flex justify-center items-center h-48 bg-gray-100 rounded mb-3 overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <h3 className="text-black text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-700 text-sm mb-3">{item.description}</p>
          <button
            onClick={() => navigate(`/product/${item.slug}`)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Best Deal
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Home;

