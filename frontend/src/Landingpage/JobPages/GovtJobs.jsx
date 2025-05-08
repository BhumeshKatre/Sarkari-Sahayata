import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { govtJobBenifit, govtLatestNotification, govtQuickLinks, jobPageMenuItem, railwayJobs } from '../../Data';
import GovtHero from '../../Components/GovtJobsComponent.jsx/GovtHero';
import GovtJobQuickLinks from '../../Components/GovtJobsComponent.jsx/GovtJobQuickLinks';
import GovtExamPreparation from '../../Components/GovtJobsComponent.jsx/GovtExamPreparation';
import GovtLatestJobNot from '../../Components/GovtJobsComponent.jsx/GovtLatestJobNot';
import GovtJobBenifits from '../../Components/GovtJobsComponent.jsx/GovtJobBenifits';

const GovtJobs = () => {
  return (
    <>
      <Navbar menu={jobPageMenuItem} />
      <GovtHero />
      <GovtJobQuickLinks govtQuickLinks={govtQuickLinks} />
      <GovtLatestJobNot govtLatestNotification={govtLatestNotification} />
      <GovtExamPreparation />
      <GovtJobBenifits govtJobBenifit={govtJobBenifit} />
      <Footer />
     </>
  );
}

export default GovtJobs;
