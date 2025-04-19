import React from 'react';
import Navbar from '../../Components/Navbar';
import BankJobsHero from '../../Components/BankjobComponents/BankJobHero';
import Footer from '../../Components/Footer';
import { bankingJobCategory, bankingJobFeatured, currentbankJobs, jobPageMenuItem, whyChooseBankJob } from '../../Data';
import WhyChooseComponent from '../../Components/WhyChooseComponent';
import BankExamSec from '../../Components/BankjobComponents/BankExamSec';
import BankingJobFeature from '../../Components/BankjobComponents/BankingJobFeature';
import BankingJobCategorie from '../../Components/BankjobComponents/BankingJobCategorie';

const BankJobPage = () => {
  return (
    <>
      <Navbar menu={jobPageMenuItem} />
      <BankJobsHero />
      <BankingJobCategorie bankingJobCategory={bankingJobCategory} />
      <BankingJobFeature bankingJobFeatured={bankingJobFeatured} />
      <BankExamSec jobs={currentbankJobs} />
      <WhyChooseComponent jobs={whyChooseBankJob} />
  
      <Footer />

    </>
  );
}

export default BankJobPage;
