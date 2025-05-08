import React from 'react';
import { FaUsers, FaCheckCircle, FaFilter, FaListUl, FaBriefcase, FaBlog } from 'react-icons/fa';

const Dashboard = ({ totalSchemes, activeSchemes, filteredSchemes, jobPosts, blogPosts }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sarkari Sahayata Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Total Schemes */}
        <div className="bg-blue-100 p-4 rounded-xl shadow hover:shadow-lg transition">
          <FaListUl className="text-blue-500 text-3xl mb-2" />
          <h2 className="text-lg font-semibold">Total Schemes</h2>
          <p className="text-2xl">{totalSchemes}</p>
        </div>

        {/* Active Schemes */}
        <div className="bg-green-100 p-4 rounded-xl shadow hover:shadow-lg transition">
          <FaCheckCircle className="text-green-500 text-3xl mb-2" />
          <h2 className="text-lg font-semibold">Active Schemes</h2>
          <p className="text-2xl">{activeSchemes}</p>
        </div>

        {/* Filtered Schemes */}
        <div className="bg-yellow-100 p-4 rounded-xl shadow hover:shadow-lg transition">
          <FaFilter className="text-yellow-500 text-3xl mb-2" />
          <h2 className="text-lg font-semibold">Filtered Schemes</h2>
          <p className="text-2xl">{filteredSchemes}</p>
        </div>

        {/* Job Posts */}
        <div className="bg-purple-100 p-4 rounded-xl shadow hover:shadow-lg transition">
          <FaBriefcase className="text-purple-500 text-3xl mb-2" />
          <h2 className="text-lg font-semibold">Job Posts</h2>
          <p className="text-2xl">{jobPosts}</p>
        </div>

        {/* Blog Posts */}
        <div className="bg-pink-100 p-4 rounded-xl shadow hover:shadow-lg transition">
          <FaBlog className="text-pink-500 text-3xl mb-2" />
          <h2 className="text-lg font-semibold">Blogs</h2>
          <p className="text-2xl">{blogPosts}</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-gray-600">
          Use the dashboard to track <strong>schemes, job updates</strong>, and <strong>blog posts</strong>. Keep content fresh and up to date!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
