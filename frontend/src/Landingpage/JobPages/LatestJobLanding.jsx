import React from "react";
// import carosel from "../Components/arosel";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/JobPageComponent/Hero";
import { jobPageMenuItem, latestJobs , bankJobs, railwayJobs} from "../../Data";
import LatestJob from "../../Components/mainPageComponents/LatestJob";
import Footer from "../../Components/Footer";
const LatestJobLanding = () => {
  return (
  
    <>
      <Navbar menu={jobPageMenuItem} />
      <Hero />
      <LatestJob jobs={latestJobs} />
      <LatestJob head='🏦 Latest Bank Jobs' jobs={bankJobs} />
      <LatestJob head='🚆 Lates Railway jobs' jobs={railwayJobs} />
      <Footer />
    </>
  )


};

export default LatestJobLanding;
