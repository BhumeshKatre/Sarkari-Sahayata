import React, { useState } from 'react';

import Footer from '../../Components/Footer';
import { schemeNavItems } from '../../SchemeData';
import Navbar from '../../Components/Navbar';
import Hero from '../../Components/SchemeComeponts/CentralSchemeComponent/Hero';
import Crads from '../../Components/SchemeComeponts/CentralSchemeComponent/Crads';

const centralSchemesData = [
  {
    id: 1,
    name: 'PM-KISAN',
    category: 'Welfare',
    description: '₹6,000 annual support for farmers.',
    amount: '₹6,000/year',
    location: 'India',
  },
  {
    id: 2,
    name: 'Startup India',
    category: 'Entrepreneurship',
    description: 'Support and funding for startups.',
    amount: 'Varies',
    location: 'India',
  },
  {
    id: 3,
    name: 'Ayushman Bharat',
    category: 'Health',
    description: 'Health insurance coverage up to ₹5 lakh.',
    amount: '₹5,00,000',
    location: 'India',
  },
];

const categories = ['All Categories', 'Welfare', 'Health', 'Employment', 'Entrepreneurship'];

const CentralSchemes = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredSchemes = centralSchemesData.filter((scheme) => {
    const matchesSearch = scheme.name.toLowerCase().includes(search.toLowerCase()) ||
      scheme.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (

    <>
      <Navbar menu={schemeNavItems} />
      <div className="p-4 md:p-8">
        <Hero search={search} selectedCategory={selectedCategory} categories={categories} />
        <h1 className='text-2xl font-bold mb-5'>Central Schemes </h1>
        <Crads filteredSchemes={filteredSchemes} />
      </div>
    <Footer />
    </>
  
  );
};

export default CentralSchemes;
