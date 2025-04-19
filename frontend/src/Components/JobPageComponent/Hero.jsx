import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-300 to-blue-400 text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to <span className="text-yellow-300">Job Portal</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Your one-stop destination for the latest government job updates and career opportunities.
        </p>
        <button className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
          Explore Jobs
        </button>
      </div>
    </section>
  );
};

export default Hero;
