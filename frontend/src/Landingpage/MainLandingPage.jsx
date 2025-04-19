import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/MainPageComponents/Hero';
import SchemComponent from '../Components/MainPageComponents/SchemComponent';
import Footer from '../Components/Footer';
import FounderSection from '../Components/MainPageComponents/FounderSection';
import { latestJobs, mainPageMenuItem } from '../Data';
import LatestJob from '../Components/mainPageComponents/LatestJob';

const MainLandingPage = () => {
  console.log(mainPageMenuItem);
  return (
    <section>
      <Navbar menu={mainPageMenuItem} />
      <Hero />
      <SchemComponent />
      <LatestJob jobs={latestJobs} />
      <FounderSection />
      <Footer />

    </section>
  );
}

export default MainLandingPage;
