import React from 'react';

const GovtLatestJobNot = ({ govtLatestNotification }) => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Latest Job Notifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {govtLatestNotification.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden border-l-4 border-green-500">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-700">{job.title}</h3>
                <p className="text-gray-600 mb-3"><span className="font-medium">Department:</span> {job.department}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Last Date</p>
                    <p className="font-medium">{job.lastDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Vacancies</p>
                    <p className="font-medium">{job.vacancies}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Qualification</p>
                    <p className="font-medium">{job.qualification}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex-1">
                    Apply Now
                  </button>
                  <button className="border border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-4 rounded-lg transition duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  );
}

export default GovtLatestJobNot;
