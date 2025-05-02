import React from 'react';
import TrendingNews from './TrendingNews';
import { Link } from 'react-router-dom';
import HeroicSection from './HeroicSection';

const categoryData = [
  {
    name: 'Phones',
    image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg',
  },
  {
    name: 'Laptops & Computers',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
  },
  {
    name: 'TVs',
    image: 'https://images.pexels.com/photos/4009403/pexels-photo-4009403.jpeg',
  },
  {
    name: 'Audio Devices',
    image: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg',
  },
  {
    name: 'Health & Fitness',
    image: 'https://images.pexels.com/photos/3757370/pexels-photo-3757370.jpeg',
  }
];

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
        <TrendingNews />

        {/* Product Categories */}
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-200">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
               
                {category.name === 'Phones' ? (
  <Link to="/category/phone" className="text-blue-500 hover:underline">Explore {category.name}</Link>
) : category.name === 'Laptops & Computers' ? (
  <Link to="/category/computer-laptop" className="text-blue-500 hover:underline">Explore {category.name}</Link>
) : category.name === 'Audio Devices' ? (
  <Link to="/category/earbuds" className="text-blue-500 hover:underline">Explore {category.name}</Link>
) : (
  <span className="text-gray-500">Website update soon</span>
)}


              </div>
            </div>
          ))}
        </div>
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
