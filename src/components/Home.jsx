import React from 'react';

import { Link } from 'react-router-dom';
import HeroicSection from './HeroicSection';



const Home = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">

      {/* Hero Section */}
      <HeroicSection />
     


      <div className="my-8">  {/* Adjust margin to create the desired gap */}
  <div className="w-full bg-gray-200 text-center py-12 rounded-lg shadow-md">
    {/* Placeholder for Ad */}
    <p className="text-lg text-gray-600">Advertisement Space (Insert Ad Code Here)</p>
  </div>
</div>


      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">

        {/* Trending News Sidebar */}

       
      </div>

      {/* ads  */}

      
      <div className="my-8">  {/* Adjust margin to create the desired gap */}
  <div className="w-full bg-gray-200 text-center py-16 rounded-lg shadow-md">
    {/* Placeholder for Ad */}
    <p className="text-lg text-gray-600">Advertisement Space (Insert Ad Code Here)</p>
  </div>
</div>

      {/* Blog Comparison Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Latest Comparisons</h2>
        
      </div>

       
    </div>
     
  );
};

export default Home;
