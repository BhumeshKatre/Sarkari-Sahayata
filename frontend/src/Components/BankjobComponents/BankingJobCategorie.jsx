import React from 'react';

const BankingJobCategorie = ({ bankingJobCategory }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Banking Job Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bankingJobCategory.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <p className="text-gray-600">{category.count} jobs available</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
              View Jobs →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BankingJobCategorie;
