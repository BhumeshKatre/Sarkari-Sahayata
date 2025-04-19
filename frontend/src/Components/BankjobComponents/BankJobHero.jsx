import React from 'react';
import bankImg from "../../assets/bank.png";

const BankHero = () => {
  return (
    <div className="relative">
      {/* Hero Section with Semi-Transparent Overlay */}
      <div
        style={{
          backgroundImage: `url(${bankImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
        }}
        className='flex items-center justify-center relative'
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Build Your Banking Career
          </h1>
          <p className="text-xl text-white mb-6">Discover opportunities in the financial sector</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
            View Banking Jobs
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
                placeholder="e.g. Bank Manager, Loan Officer"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Location</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Locations</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Bank Type</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Bank Types</option>
                <option value="public">Public Sector</option>
                <option value="private">Private Sector</option>
                <option value="foreign">Foreign Banks</option>
                <option value="rural">Regional Rural Banks</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 h-[50px]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

    

      {/* Featured Bank Jobs */}
    
      
     
    </div>
  );
}

export default BankHero;