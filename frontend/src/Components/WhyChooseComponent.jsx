import React from 'react';

const WhyChooseComponent = ({jobs}) => {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose a Railway Career?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobs.map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseComponent;
