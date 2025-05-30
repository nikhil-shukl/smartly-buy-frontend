import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios'; // ✅ import custom axios instance

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/products/product/${slug}`) // ✅ no need for full localhost URL
      .then(res => setProduct(res.data))
      .catch(console.error);
  }, [slug]);

  if (!product) return <div className="text-center mt-20 text-lg font-medium">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full max-h-96 object-contain mb-8 rounded-lg shadow-md" 
      />

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

      {/* Affiliate Button */}
      <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded shadow transition duration-300">
          Buy Now
        </button>
      </a>
    </div>
  );
};

export default ProductDetail;
