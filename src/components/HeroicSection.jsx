import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axios';

const HeroicSection = () => {
    const [heroicData, setHeroicData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchHeroic = async () => {
        try {
          const res = await axios.get('/heroic');
          setHeroicData(res.data);
          setLoading(false);
        } catch (err) {
          console.error('Failed to fetch heroic section:', err);
          setError('Error fetching data');
          setLoading(false);
        }
      };
      fetchHeroic();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!heroicData) return null;
  
    return (
      <div className="relative flex flex-col md:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{heroicData.title}</h1>
          <p className="text-lg mb-4">{heroicData.subtitle}</p>
          <Link 
            to={heroicData.buttonLink} 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            {heroicData.buttonText}
          </Link>
        </div>
        <div className="flex-1">
          <img 
            src={heroicData.image} 
            alt="Hero" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  };
  

export default HeroicSection;
