import React from 'react';
import Navbar from '../../Components/Navbar';
import { blogNavItems } from '../../SchemeData';
import Footer from '../../Components/Footer';
import BlogHero from '../../Components/BlogComponents/BlogHero';

const JobBlogs = () => {
  return (
    <div>
      <Navbar menu={blogNavItems} />
      <BlogHero />
      <Footer />
    </div>
  );
}

export default JobBlogs;
