import React from 'react';

const GovtExamPreparation = () => {
  return (
    <div>
      {/* Exam Preparation */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Exam Preparation Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-green-600 text-white p-4">
              <h3 className="text-xl font-bold">UPSC Preparation</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Civil Services Syllabus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Previous Year Papers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Current Affairs Materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Interview Preparation</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-green-100 hover:bg-green-200 text-green-700 font-medium py-2 px-4 rounded-lg transition duration-300">
                Access Materials
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-bold">SSC Preparation</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>CGL/CHSL Syllabus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Quantitative Aptitude</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>English Language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Mock Test Series</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition duration-300">
                Access Materials
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-amber-600 text-white p-4">
              <h3 className="text-xl font-bold">State PSC</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>State-wise Syllabus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Regional Language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>State GK</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <span>Previous Year Papers</span>
                </li>
              </ul>
              <button className="mt-6 w-full bg-amber-100 hover:bg-amber-200 text-amber-700 font-medium py-2 px-4 rounded-lg transition duration-300">
                Access Materials
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovtExamPreparation;
