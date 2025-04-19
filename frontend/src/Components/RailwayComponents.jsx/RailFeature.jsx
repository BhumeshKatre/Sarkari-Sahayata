import React from "react";

const RailFeature = () => {
  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Railway Jobs
          </h2>
          <div className="space-y-6">
            {[1, 2, 3].map((job) => (
              <div
                key={job}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Railway Electrical Engineer
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Indian Railways • Full-time • New Delhi
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                        ₹45,000 - ₹65,000/month
                      </span>
                      <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                        2+ years experience
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                      Apply Now
                    </button>
                    <button className="border border-amber-500 text-amber-600 hover:bg-amber-50 font-medium py-2 px-4 rounded-lg transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="border border-amber-500 text-amber-600 hover:bg-amber-50 font-medium py-3 px-6 rounded-lg transition duration-300">
              View All Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RailFeature;
