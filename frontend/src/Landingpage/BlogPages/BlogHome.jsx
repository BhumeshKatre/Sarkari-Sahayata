import React, { useState } from "react";
import BlogHero from "../../Components/BlogComponents/BlogHero";
import BlogsCards from "../../Components/BlogComponents/BlogsCards";
import Navbar from "../../Components/Navbar";
import BlogFilter from "../../Components/BlogComponents/BlogFilter";
import { blogNavItems } from "../../SchemeData";

const BlogHome = () => {
    const [displayedPosts, setDisplayedPosts] = useState([]);
  
  const schemes = [
    {
      id: 1,
      title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
      category: "Financial Inclusion",
      description:
        "National mission for financial inclusion to ensure access to financial services.",
      icon: "💰",
      details: {
        purpose:
          "To provide affordable access to financial services (banking, credit, insurance, pension)",
        eligibility: "Indian citizens (especially poor and low-income groups)",
        benefits: [
          "Zero balance bank account",
          "RuPay debit card",
          "Accident insurance cover of ₹2 lakh",
          "Overdraft facility of ₹10,000",
        ],
        applicationProcess: [
          "Visit any bank branch or Business Correspondent (Bank Mitra) outlet",
          "Fill account opening form with KYC details",
          "Submit required documents",
          "Get account number and RuPay debit card",
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Voter ID/Driving License/PAN Card/Passport",
          "Recent passport size photograph",
        ],
        officialLink: "https://pmjdy.gov.in",
        contact: "1800 11 0001 (Toll Free)",
        launchDate: "28 August 2014",
      },
    },
    {
      id: 2,
      title: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
      category: "Healthcare",
      description:
        "World's largest health insurance scheme providing coverage up to ₹5 lakh per family per year.",
      icon: "🏥",
      details: {
        purpose: "To provide health protection to poor and vulnerable families",
        eligibility:
          "Families identified as deprived rural households and occupational categories of urban workers' families",
        benefits: [
          "Coverage of ₹5 lakh per family per year",
          "Covers secondary and tertiary hospitalization",
          "1,393 medical packages covering surgery, medical treatments",
          "Cashless and paperless access to services",
        ],
        applicationProcess: [
          "Check eligibility on official website or at Common Service Centers",
          "If eligible, visit empanelled hospital with Aadhaar card",
          "No formal enrollment required - benefits available based on SECC data",
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Ration Card (if available)",
          "Contact details",
        ],
        officialLink: "https://pmjay.gov.in",
        contact: "14555 (Toll Free)",
        launchDate: "23 September 2018",
      },
    },
    {
      id: 3,
      title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      category: "Agriculture",
      description:
        "Central sector scheme to provide income support to all landholding farmers' families.",
      icon: "👨‍🌾",
      details: {
        purpose:
          "To supplement financial needs of farmers for procuring inputs",
        eligibility: "Small and marginal farmer families with cultivable land",
        benefits: [
          "₹6,000 per year in three equal installments",
          "Direct benefit transfer to bank accounts",
          "All landholding farmer families eligible (subject to exclusion criteria)",
        ],
        applicationProcess: [
          "Visit nearest Common Service Center (CSC) or Agriculture Department office",
          "Fill PM-KISAN form with Aadhaar, bank account and land details",
          "Submit to local revenue officer/nodal officer",
          "Verification by state government",
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Land ownership documents",
          "Bank account details",
          "Mobile number linked with Aadhaar",
        ],
        officialLink: "https://pmkisan.gov.in",
        contact: "011-23381092",
        launchDate: "1 December 2018",
      },
    },
    {
      id: 4,
      title: "Pradhan Mantri Awas Yojana (PMAY)",
      category: "Housing",
      description:
        "Mission to provide affordable housing to urban and rural poor.",
      icon: "🏠",
      details: {
        purpose:
          "Housing for All by 2022 - affordable pucca houses with basic amenities",
        eligibility: [
          "EWS/LIG families in urban areas (income < ₹3 lakh/₹6 lakh per annum)",
          "Homeless and those living in kutcha houses in rural areas",
        ],
        benefits: [
          "Subsidy up to ₹2.67 lakh for urban housing",
          "₹1.3 lakh assistance for rural housing",
          "Interest subsidy on home loans",
        ],
        applicationProcess: [
          "Urban: Apply through local Urban Local Body or official website",
          "Rural: Apply through Gram Panchayat or Block Development Office",
          "Submit required documents",
          "Await verification and approval",
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Income certificate",
          "Proof of residence",
          "Caste certificate (if applicable)",
          "Bank account details",
        ],
        officialLink: "https://pmaymis.gov.in",
        contact: "1800-11-6163 (Urban)",
        launchDate: "25 June 2015",
      },
    },
    {
      id: 5,
      title: "Pradhan Mantri Ujjwala Yojana (PMUY)",
      category: "Social Welfare",
      description:
        "Scheme to provide LPG connections to women from below poverty line families.",
      icon: "🔥",
      details: {
        purpose: "To safeguard women's health by providing clean cooking fuel",
        eligibility:
          "Adult women from BPL households (identified through SECC-2011 data)",
        benefits: [
          "Free LPG connection with first refill and stove",
          "Subsidy on subsequent refills",
          "No security deposit required",
        ],
        applicationProcess: [
          "Visit nearest LPG distributor with required documents",
          "Fill application form",
          "Get connection after verification",
        ],
        documentsRequired: [
          "Aadhaar Card",
          "BPL ration card",
          "Proof of address",
          "Bank account details",
          "Passport size photo",
        ],
        officialLink: "https://www.pmuy.gov.in",
        contact: "1906 (LPG Helpline)",
        launchDate: "1 May 2016",
      },
    },
  ];

  return (
    <>
      <Navbar menu={blogNavItems} />
      <div className="w-[90%] mx-auto">
      <BlogHero />
      <BlogFilter posts={schemes} onFilterChange={setDisplayedPosts }/>
        <BlogsCards schemes={schemes} />
      </div>

    </>
  );
};

export default BlogHome;
