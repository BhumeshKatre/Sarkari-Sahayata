import React from 'react';

const Hero = ({ search, selectedCategory, categories }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-6 mb-6 shadow-md">
             <h2 className="text-3xl md:text-4xl font-bold mb-2">Explore Central Government Schemes</h2>
             <p className="text-lg">Financial support and national benefits from the Government of India</p>
   
             <div className="flex flex-col md:flex-row gap-4 mt-6">
               <input
                 type="text"
                 placeholder="Search by scheme name, benefits..."
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="flex-1 px-4 py-2 border rounded-lg"
               />
               <select
                 value={selectedCategory}
                 onChange={(e) => setSelectedCategory(e.target.value)}
                 className="px-4 py-2 border rounded-lg text-gray-600"
               >
                 {categories.map((cat) => (
                   <option key={cat} value={cat}>{cat}</option>
                 ))}
               </select>
             </div>
   
           </div>
  );
}

export default Hero;
