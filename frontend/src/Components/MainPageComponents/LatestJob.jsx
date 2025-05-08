import React from "react";

const LatestJob = ({ jobs, head }) => {
 
  const displayLatestJobs = jobs.slice(0, 3);

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto  border-b-2 border-y-amber-900">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {
          head ? head : "📢 Latest Government Jobs"
        }
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayLatestJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-gray-200 p-5 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                🏛️ Department:{" "}
                <span className="font-medium">{job.department}</span>
              </p>
              <p className="text-gray-600 text-sm mb-1">
                📍 Location: <span className="font-medium">{job.location}</span>
              </p>
              <p className="text-gray-600 text-sm mb-3">
                🗓️ Last Date:{" "}
                <span className="font-medium">{job.lastDate}</span>
              </p>
            </div>

            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-center bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              View & Apply
            </a>
          </div>
        ))}
      </div>
      {jobs.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            More Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestJob;
