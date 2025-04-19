import React from 'react';

const GovtJobQuickLinks = ({ govtQuickLinks }) => {
  return (
    <div>
      {/* Quick Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-green-50 rounded-lg p-6 border border-green-100">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-800">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {govtQuickLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="bg-white hover:bg-green-100 border border-green-200 rounded-lg p-4 text-center transition duration-300"
              >
                <div className="text-3xl mb-2">{link.icon}</div>
                <div className="font-medium text-green-800">{link.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovtJobQuickLinks;
