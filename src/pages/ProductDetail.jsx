import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios';
import { Helmet } from 'react-helmet';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
  window.scrollTo(0, 0); // 🔹 scroll to top on page load
  axios.get(`/products/product/${slug}`)
    .then(res => setProduct(res.data))
    .catch(console.error);
}, [slug]);


  if (!product) return <div className="text-center mt-20 text-lg font-medium">Loading...</div>;

  return (
    <>
      {/* ✅ SEO Helmet Tags */}
      <Helmet>
        <title>{product.name} | TechTrendyDeals</title>
        <meta name="description" content={product.verdict?.slice(0, 150)} />
        <meta name="keywords" content={`Best ${product.name}, ${product.category}, ${product.pros?.join(', ')}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": product.imageUrl,
            "description": product.description,
            "brand": {
              "@type": "Brand",
              "name": product.name?.split(" ")[0] || "Tech"
            },
            "offers": {
              "@type": "Offer",
              "url": product.affiliateLink,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      {/* ✅ Main Content */}
      <div className="max-w-4xl mx-auto p-10 relative">

        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

        {/* 🔹 Quick Top CTA Button */}
        <div className="mb-8">
          <a href={product.affiliateLink} target="_blank" rel="nofollow noopener noreferrer">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded shadow">
              Buy Now on Amazon
            </button>
          </a>
        </div>

       <a href={product.affiliateLink} target="_blank" rel="nofollow noopener noreferrer">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full max-h-96 object-contain mb-8 rounded-lg shadow-md hover:scale-105 transition duration-300"
        />
      </a>


        {/* Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700 border-l-4 border-indigo-500 pl-3">Description</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </section>

        {/* Content */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700 border-l-4 border-indigo-500 pl-3">Content</h2>
          <p className="text-gray-700 leading-relaxed">{product.content}</p>
        </section>

        {/* Pros */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-green-600 border-l-4 border-green-500 pl-3">Pros</h2>
          <ul className="list-disc list-inside text-green-700">
            {product.pros?.map((pro, i) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>
        </section>

        {/* Cons */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-red-600 border-l-4 border-red-500 pl-3">Cons</h2>
          <ul className="list-disc list-inside text-red-700">
            {product.cons?.map((con, i) => (
              <li key={i}>{con}</li>
            ))}
          </ul>
        </section>

        {/* Verdict */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 border-l-4 border-gray-700 pl-3">Verdict</h2>
          <p className="whitespace-pre-wrap text-gray-800 leading-relaxed">{product.verdict}</p>
        </section>

        {/* 🔻 Bottom CTA Button */}
        <a href={product.affiliateLink} target="_blank" rel="nofollow noopener noreferrer">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded shadow transition duration-300">
            Best Deal on Amazon
          </button>
        </a>

        {/* 📱 Optional: Sticky CTA on bottom-right (mobile friendly) */}
        <div className="fixed bottom-4 right-4 z-50 md:hidden">
          <a href={product.affiliateLink} target="_blank" rel="nofollow noopener noreferrer">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full shadow-lg">
              Buy Now
            </button>
          </a>
        </div>

      </div>
    </>
  );
};

export default ProductDetail;  
