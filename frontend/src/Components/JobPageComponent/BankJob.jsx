import React from 'react';
import { bankJobs } from '../../Data';
import { Link } from 'react-router-dom';

const BankJob = () => {
  const displayBankJob = bankJobs.slice(0, 3);

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🏦 Latest Bank Jobs</h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {displayBankJob.map((job) => (
          <Link
            key={job.id}
            to="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover h-full w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={job.src}
              alt={job.title || "Bank Job Image"}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {job.title}
              </h5>
              <p className="mb-1 font-medium text-gray-700 dark:text-gray-400">{job.organization}</p>
              <p className="mb-1 font-medium text-gray-700 dark:text-gray-400">{job.location}</p>
              <p className="mb-1 font-medium text-gray-700 dark:text-gray-400">Last Date: {job.lastDate}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BankJob;
