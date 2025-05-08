import React from 'react';
import railImg from "../../assets/tain.png";

const RailwayHero = () => {
  return (
    <div className="relative">
      {/* Hero Section with Semi-Transparent Overlay */}
      <div
        style={{
          backgroundImage: `url(${railImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
        className='flex items-center justify-center relative'
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Launch Your Railway Career
          </h1>
          <p className="text-xl text-white mb-6">Find your dream job in the railway sector</p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            Browse Jobs
          </button>
        </div>
      </div>

      {/* Job Search Section */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Job Title or Keywords</label>
              <input
                type="text"
                placeholder="e.g. Station Master, Engineer"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                placeholder="City or Region"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-end">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 h-[50px]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Job Categories */}
    
      {/* Featured Jobs */}
     
      {/* Why Choose Railway */}
    
    </div>
  );
}

export default RailwayHero;