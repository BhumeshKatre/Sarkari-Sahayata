import React from 'react';
import govtImg from "../../assets/govt.png";

const GovtHero = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${govtImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px',
        }}
        className='flex items-center justify-center relative'
      >
        <div className="absolute inset-0 bg-green-900 opacity-60"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Your Gateway to Government Careers
          </h1>
          <p className="text-xl text-white mb-6">Discover thousands of stable government jobs across all sectors</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Browse All Jobs
            </button>
            <button className="bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-6 rounded-lg text-lg transition duration-300">
              Latest Notifications
            </button>
          </div>
        </div>
      </div>

      {/* Job Search Section */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-lg shadow-xl p-6 border border-green-100">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-800">Find Your Government Job</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Job Category</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">All Categories</option>
                <option value="banking">Banking</option>
                <option value="railway">Railway</option>
                <option value="defense">Defense</option>
                <option value="teaching">Teaching</option>
                <option value="medical">Medical</option>
                <option value="engineering">Engineering</option>
                <option value="administration">Administration</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Department</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">All Departments</option>
                <option value="central">Central Government</option>
                <option value="state">State Government</option>
                <option value="psu">Public Sector Units</option>
                <option value="municipal">Municipal Corporations</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Qualification</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="">All Qualifications</option>
                <option value="10th">10th Pass</option>
                <option value="12th">12th Pass</option>
                <option value="diploma">Diploma</option>
                <option value="graduate">Graduate</option>
                <option value="post-graduate">Post Graduate</option>
                <option value="professional">Professional Degree</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full h-[50px]">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      

      {/* Latest Notifications */}
    

     

    
    </div>
  );
}

export default GovtHero;