import React from 'react';
import Navbar from '../../Components/Navbar';
import {  jobPageMenuItem,  whyChooseRailwayJob } from '../../Data';
import Footer from '../../Components/Footer';
import RailwayHero from '../../Components/RailwayComponents.jsx/RailwayHero';
import WhyChooseComponent from '../../Components/WhyChooseComponent';
import JobCategory from '../../Components/RailwayComponents.jsx/JobCategory';
import RailFeature from '../../Components/RailwayComponents.jsx/RailFeature';

const RailwayJob = () => {
  return (
    <>
      <Navbar menu={jobPageMenuItem} /> 
      <RailwayHero />
      <JobCategory />
      <RailFeature />
      <WhyChooseComponent jobs={whyChooseRailwayJob} />
      <Footer />
     
    </>
  );
}

export default RailwayJob;
