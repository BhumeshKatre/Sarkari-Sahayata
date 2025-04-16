import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/MainPageComponents/Hero';
import SchemComponent from '../Components/MainPageComponents/SchemComponent';
import Footer from '../Components/Footer';
import LatestJob from '../Components/MainPageComponents/LatestJob';
import FounderSection from '../Components/MainPageComponents/FounderSection';

const MainLandingPage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <SchemComponent />
      <LatestJob />
      <FounderSection />
      <Footer />

    </section>
  );
}

export default MainLandingPage;
