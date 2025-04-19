import React, { useState } from 'react';
import { schemeNavItems } from '../../SchemeData';
import Navbar from '../../Components/Navbar';
import { FiSearch, FiChevronDown, FiChevronRight, FiExternalLink, FiFileText, FiDownload, FiCheckCircle } from 'react-icons/fi';
import { FaRupeeSign, FaMapMarkerAlt, FaUserTie, FaFemale } from 'react-icons/fa';
import Footer from '../../Components/Footer';

const StateScheme = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const schemes = [
    {
      id: 1,
      name: "Kanyashree Prakalpa",
      state: "West Bengal",
      category: "Welfare",
      amount: "25,000",
      description: "Financial aid for girl students (Class 8-12)",
      icon: <FaFemale className="text-pink-500" />,
      highlight: false,
      link: "#"
    },
    {
      id: 2,
      name: "Gruha Lakshmi",
      state: "Karnataka",
      category: "Subsidy",
      amount: "2,000/month",
      description: "Gas cylinder subsidy for women heads of families",
      icon: <FaUserTie className="text-yellow-500" />,
      highlight: true,
      link: "#"
    },
    {
      id: 3,
      name: "Yuva Nidhi",
      state: "Karnataka",
      category: "Employment",
      amount: "3,000/month",
      description: "Unemployment stipend for graduates/diploma holders",
      icon: <FiCheckCircle className="text-blue-500" />,
      highlight: false,
      link: "#"
    }
  ];

  const states = ["All States", "Maharashtra", "Uttar Pradesh", "Karnataka", "West Bengal"];
  const categories = ["All Categories", "Welfare", "Subsidy", "Employment", "Education"];

  return (
    <>
      <Navbar menu={schemeNavItems} />
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
         
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-10">
            <h1 className="text-4xl font-bold mb-4">Discover State Government Schemes</h1>
            <p className="text-xl mb-6">Find financial assistance programs tailored for your needs</p>

            {/* Search and Filter */}
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by scheme name, benefits..."
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <select
                    className="appearance-none text-gray-700 px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    {states.map((state) => (
                      <option
                        className='text-gray-700'
                        key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-3.5 text-gray-400">
                    <FiChevronDown />
                  </div>
                </div>
                <div className="relative">
                  <select
                    className=" text-gray-700 appearance-none px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-3.5 text-gray-400">
                    <FiChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scheme Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {schemes.map((scheme) => (
              <div
                key={scheme.id}
                className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-xl ${scheme.highlight ? 'ring-2 ring-blue-500 transform hover:-translate-y-1' : ''}`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-50 rounded-full mr-3">
                        {scheme.icon}
                      </div>
                      <div>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${scheme.category === 'Welfare' ? 'bg-green-100 text-green-800' : scheme.category === 'Subsidy' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}`}>
                          {scheme.category}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center text-xs text-gray-500">
                      <FaMapMarkerAlt className="mr-1" /> {scheme.state}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{scheme.name}</h3>
                  <p className="text-gray-600 mb-4">{scheme.description}</p>

                  <div className="flex items-center mb-6">
                    <FaRupeeSign className="text-blue-600 mr-1" />
                    <span className="text-2xl font-bold text-blue-600">{scheme.amount}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={scheme.link}
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                    >
                      View Details <FiChevronRight className="ml-1" />
                    </a>
                    {scheme.highlight && (
                      <a
                        href={scheme.link}
                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                      >
                        Apply Now <FiExternalLink className="ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Access Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="#"
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center border-l-4 border-blue-500 hover:border-blue-600"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FiFileText className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Check Eligibility</h3>
                  <p className="text-sm text-gray-500">See if you qualify</p>
                </div>
              </a>
              <a
                href="#"
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center border-l-4 border-green-500 hover:border-green-600"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <FiSearch className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Track Application</h3>
                  <p className="text-sm text-gray-500">Check your status</p>
                </div>
              </a>
              <a
                href="#"
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center border-l-4 border-purple-500 hover:border-purple-600"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <FiDownload className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Download Forms</h3>
                  <p className="text-sm text-gray-500">Get application PDFs</p>
                </div>
              </a>
            </div>
          </div>

          {/* How to Apply Section
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">How to Apply</h2>
            </div>

            {/* Accordion Item 1 */}
            {/* <div className="border-b border-gray-100">
              <button
                className="flex justify-between items-center w-full text-left p-6 hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(0)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h3 className="font-medium text-gray-800">Documents Required</h3>
                </div>
                <FiChevronDown className={`text-gray-400 transition-transform ${activeAccordion === 0 ? 'transform rotate-180' : ''}`} />
              </button>
              <div className={`px-6 pb-6 ${activeAccordion === 0 ? 'block' : 'hidden'}`}>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">
                      <FiCheckCircle />
                    </div>
                    <p className="ml-2 text-gray-600">Aadhaar Card (Original + Copy)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">
                      <FiCheckCircle />
                    </div>
                    <p className="ml-2 text-gray-600">Domicile Certificate</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">
                      <FiCheckCircle />
                    </div>
                    <p className="ml-2 text-gray-600">Bank Account Details (Passbook)</p>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* Accordion Item 2 */}
            {/* <div className="border-b border-gray-100">
              <button
                className="flex justify-between items-center w-full text-left p-6 hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(1)}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-medium text-gray-800">Application Steps</h3>
                </div>
                <FiChevronDown className={`text-gray-400 transition-transform ${activeAccordion === 1 ? 'transform rotate-180' : ''}`} />
              </button>
              <div className={`px-6 pb-6 ${activeAccordion === 1 ? 'block' : 'hidden'}`}>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mr-3">
                      1
                    </span>
                    <p className="text-gray-600">Register on your state's official portal with mobile number</p>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mr-3">
                      2
                    </span>
                    <p className="text-gray-600">Fill the application form with accurate details</p>
                  </li>
                  <li className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mr-3">
                      3
                    </span>
                    <p className="text-gray-600">Upload scanned copies of required documents</p>
                  </li>
                </ol>
              </div>
            </div> */}
        {/* </div>  */}
        
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StateScheme;