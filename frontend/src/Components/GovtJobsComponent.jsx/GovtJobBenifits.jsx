import React from 'react';

const GovtJobBenifits = ({ govtJobBenifit }) => {
  return (
    <div>
      {/* Benefits Section */}
      <div className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Benefits of Government Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {govtJobBenifit.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-green-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovtJobBenifits;
