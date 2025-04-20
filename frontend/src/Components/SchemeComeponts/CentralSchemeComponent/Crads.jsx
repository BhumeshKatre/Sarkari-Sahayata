import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { MdOutlineArrowForward } from 'react-icons/md';
const Crads = ({ filteredSchemes }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {filteredSchemes.map((scheme) => (
        <div key={scheme.id} className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 p-5 border-t-4 border-blue-600">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <FaRupeeSign className="text-lg" />
            </div>
            <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">{scheme.category}</span>
            <span className="ml-auto text-sm text-gray-500">{scheme.location}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{scheme.name}</h3>
          <p className="text-gray-600 mb-2 text-sm">{scheme.description}</p>
          <p className="text-blue-700 font-bold text-lg mb-4">{scheme.amount}</p>
          <button className="text-blue-600 font-medium hover:underline flex items-center gap-1">
            View Details <MdOutlineArrowForward className="mt-0.5" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Crads;
