import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios';

const ComparePage = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCompareData = async () => {
      try {
        const res = await axios.get(`/compare/${slug}`);
        setData(res.data);
      } catch (error) {
        console.error('Error fetching compare data:', error);
      }
    };

    fetchCompareData();
  }, [slug]);

  if (!data) return <div>Loading...</div>;

  const [product1, product2] = data.products;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{data.description}</p>

      <div className="grid grid-cols-3 gap-4 font-semibold bg-gray-100 p-4 rounded">
        <div>Feature</div>
        <div>{product1?.name || 'Product 1'}</div>
        <div>{product2?.name || 'Product 2'}</div>
      </div>

      {data.comparisonPoints.map((point, i) => (
        <div key={i} className="grid grid-cols-3 gap-4 border-b py-2">
          <div className="font-medium">{point.feature}</div>
          <div>{point.product1Value}</div>
          <div>{point.product2Value}</div>
        </div>
      ))}

      <div className="grid grid-cols-2 gap-4 mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-2">{product1?.name} - Pros & Cons</h2>
          <p className="text-green-600 font-semibold">Pros:</p>
          <ul className="list-disc ml-5">
            {data.prosAndCons.product1.pros.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
          <p className="text-red-600 font-semibold mt-2">Cons:</p>
          <ul className="list-disc ml-5">
            {data.prosAndCons.product1.cons.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">{product2?.name} - Pros & Cons</h2>
          <p className="text-green-600 font-semibold">Pros:</p>
          <ul className="list-disc ml-5">
            {data.prosAndCons.product2.pros.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
          <p className="text-red-600 font-semibold mt-2">Cons:</p>
          <ul className="list-disc ml-5">
            {data.prosAndCons.product2.cons.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
        <ul className="list-disc ml-6">
          {data.blogs.map((blog) => (
            <li key={blog._id}>{blog.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComparePage;
