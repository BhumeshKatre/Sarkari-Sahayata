import React from 'react';

const BankExamSec = ({jobs}) => {
  return (
    <div>
      {/* Banking Exams Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Banking Exams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((exam, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{exam.exam}</h3>
              <div className="space-y-3">
                <p><span className="font-medium">Exam Date:</span> {exam.date}</p>
                <p><span className="font-medium">Application Deadline:</span> {exam.deadline}</p>
                <p><span className="font-medium">Eligibility:</span> {exam.eligibility}</p>
              </div>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 w-full">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default BankExamSec;
