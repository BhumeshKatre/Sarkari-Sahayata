import React from 'react';
// import { FiHome, FiSearch, Frown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Error Container */}
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden text-center p-8">
        {/* Error Icon */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100 mb-6">
          {/* <Frown className="h-10 w-10 text-red-600" /> */}
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
     
      </div>

      {/* Additional Help */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>Need help? <a href="/contact" className="text-green-600 hover:underline">Contact our support team</a></p>
      </div>
    </div>
  );
};

export default NotFoundPage;