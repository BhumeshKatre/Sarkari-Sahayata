import React from 'react';
import Home from '../../Components/SchemeComeponts/Home';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { carouselItems, categories, schemeNavItems, schemes } from '../../SchemeData';
import Carosel from '../../Components/SchemeComeponts/Carosel';

const CurrentSchemePage = () => {
  return (
    <>
      <Navbar menu={schemeNavItems} />
      <Carosel carouselItems={carouselItems}  />
      <Home schemes={schemes} categories={categories} />
      <Footer />
    </>
  );
}

export default CurrentSchemePage;
