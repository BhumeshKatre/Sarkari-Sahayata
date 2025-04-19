import React from 'react';
import { FiSearch, FiBookmark, FiShare2, FiClock, FiCalendar } from 'react-icons/fi';
import { BsFillBookmarkFill } from 'react-icons/bs';

const Home = ({ schemes, categories }) => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredSchemes = schemes.filter(scheme => {
    const matchesCategory = activeCategory === 'All' || scheme.category === activeCategory;
    const matchesSearch = scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleSave = (id) => {
    // Implementation for saving schemes
  };

  const formatDate = (dateString) => {
    if (dateString === 'Ongoing') return 'Ongoing';
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Current Government Schemes</h1>
        <p className="text-gray-600">Browse and apply for various central and state government welfare schemes</p>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search schemes by name or department..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-2 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredSchemes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map(scheme => (
              <div key={scheme.id} className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${scheme.featured ? 'border-green-500' : 'border-gray-200'} hover:shadow-lg transition duration-300`}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 mb-2">
                        {scheme.category}
                      </span>
                      {scheme.featured && (
                        <span className="inline-block ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Featured
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => toggleSave(scheme.id)}
                      className="text-gray-400 hover:text-yellow-500"
                    >
                      {scheme.saved ? (
                        <BsFillBookmarkFill className="text-yellow-500 text-xl" />
                      ) : (
                        <FiBookmark className="text-xl" />
                      )}
                    </button>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-2">{scheme.title}</h2>
                  <p className="text-gray-600 mb-4">{scheme.department}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <FiCalendar className="text-green-600" />
                      </div>
                      <div className="ml-2">
                        <p className="text-sm text-gray-500">Last Date</p>
                        <p className="font-medium">{formatDate(scheme.deadline)}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-2">
                        <p className="text-sm text-gray-500">Benefits</p>
                        <p className="font-medium">{scheme.benefits}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="ml-2">
                        <p className="text-sm text-gray-500">Eligibility</p>
                        <p className="font-medium">{scheme.eligibility}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                    <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
                      <FiShare2 className="mr-1" /> Share
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No schemes found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;