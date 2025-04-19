import React from 'react';

const BankingJobFeature = ({ bankingJobFeatured }) => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Banking Jobs</h2>
        <div className="space-y-6">
          {bankingJobFeatured.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    {job.urgent && (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Urgent Hiring</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{job.bank} • {job.type} • {job.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">{job.salary}</span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">{job.experience}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    Apply Now
                  </button>
                  <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300">
            View All Banking Jobs
          </button>
        </div>
      </div>
    </div>

  );
}

export default BankingJobFeature;
