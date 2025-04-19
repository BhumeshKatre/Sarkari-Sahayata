import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogHome = () => {
  const navigate = useNavigate();

  const schemes = [
    {
      id: 1,
      title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
      category: "Financial Inclusion",
      description: "National mission for financial inclusion to ensure access to financial services.",
      icon: "💰",
      details: {
        purpose: "To provide affordable access to financial services (banking, credit, insurance, pension)",
        eligibility: "Indian citizens (especially poor and low-income groups)",
        benefits: [
          "Zero balance bank account",
          "RuPay debit card",
          "Accident insurance cover of ₹2 lakh",
          "Overdraft facility of ₹10,000"
        ],
        applicationProcess: [
          "Visit any bank branch or Business Correspondent (Bank Mitra) outlet",
          "Fill account opening form with KYC details",
          "Submit required documents",
          "Get account number and RuPay debit card"
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Voter ID/Driving License/PAN Card/Passport",
          "Recent passport size photograph"
        ],
        officialLink: "https://pmjdy.gov.in",
        contact: "1800 11 0001 (Toll Free)",
        launchDate: "28 August 2014"
      }
    },
    {
      id: 2,
      title: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
      category: "Healthcare",
      description: "World's largest health insurance scheme providing coverage up to ₹5 lakh per family per year.",
      icon: "🏥",
      details: {
        purpose: "To provide health protection to poor and vulnerable families",
        eligibility: "Families identified as deprived rural households and occupational categories of urban workers' families",
        benefits: [
          "Coverage of ₹5 lakh per family per year",
          "Covers secondary and tertiary hospitalization",
          "1,393 medical packages covering surgery, medical treatments",
          "Cashless and paperless access to services"
        ],
        applicationProcess: [
          "Check eligibility on official website or at Common Service Centers",
          "If eligible, visit empanelled hospital with Aadhaar card",
          "No formal enrollment required - benefits available based on SECC data"
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Ration Card (if available)",
          "Contact details"
        ],
        officialLink: "https://pmjay.gov.in",
        contact: "14555 (Toll Free)",
        launchDate: "23 September 2018"
      }
    },
    {
      id: 3,
      title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
      category: "Agriculture",
      description: "Central sector scheme to provide income support to all landholding farmers' families.",
      icon: "👨‍🌾",
      details: {
        purpose: "To supplement financial needs of farmers for procuring inputs",
        eligibility: "Small and marginal farmer families with cultivable land",
        benefits: [
          "₹6,000 per year in three equal installments",
          "Direct benefit transfer to bank accounts",
          "All landholding farmer families eligible (subject to exclusion criteria)"
        ],
        applicationProcess: [
          "Visit nearest Common Service Center (CSC) or Agriculture Department office",
          "Fill PM-KISAN form with Aadhaar, bank account and land details",
          "Submit to local revenue officer/nodal officer",
          "Verification by state government"
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Land ownership documents",
          "Bank account details",
          "Mobile number linked with Aadhaar"
        ],
        officialLink: "https://pmkisan.gov.in",
        contact: "011-23381092",
        launchDate: "1 December 2018"
      }
    },
    {
      id: 4,
      title: "Pradhan Mantri Awas Yojana (PMAY)",
      category: "Housing",
      description: "Mission to provide affordable housing to urban and rural poor.",
      icon: "🏠",
      details: {
        purpose: "Housing for All by 2022 - affordable pucca houses with basic amenities",
        eligibility: [
          "EWS/LIG families in urban areas (income < ₹3 lakh/₹6 lakh per annum)",
          "Homeless and those living in kutcha houses in rural areas"
        ],
        benefits: [
          "Subsidy up to ₹2.67 lakh for urban housing",
          "₹1.3 lakh assistance for rural housing",
          "Interest subsidy on home loans"
        ],
        applicationProcess: [
          "Urban: Apply through local Urban Local Body or official website",
          "Rural: Apply through Gram Panchayat or Block Development Office",
          "Submit required documents",
          "Await verification and approval"
        ],
        documentsRequired: [
          "Aadhaar Card",
          "Income certificate",
          "Proof of residence",
          "Caste certificate (if applicable)",
          "Bank account details"
        ],
        officialLink: "https://pmaymis.gov.in",
        contact: "1800-11-6163 (Urban)",
        launchDate: "25 June 2015"
      }
    },
    {
      id: 5,
      title: "Pradhan Mantri Ujjwala Yojana (PMUY)",
      category: "Social Welfare",
      description: "Scheme to provide LPG connections to women from below poverty line families.",
      icon: "🔥",
      details: {
        purpose: "To safeguard women's health by providing clean cooking fuel",
        eligibility: "Adult women from BPL households (identified through SECC-2011 data)",
        benefits: [
          "Free LPG connection with first refill and stove",
          "Subsidy on subsequent refills",
          "No security deposit required"
        ],
        applicationProcess: [
          "Visit nearest LPG distributor with required documents",
          "Fill application form",
          "Get connection after verification"
        ],
        documentsRequired: [
          "Aadhaar Card",
          "BPL ration card",
          "Proof of address",
          "Bank account details",
          "Passport size photo"
        ],
        officialLink: "https://www.pmuy.gov.in",
        contact: "1906 (LPG Helpline)",
        launchDate: "1 May 2016"
      }
    }
  ];

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Sarkari Sahayata Blog
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Your one-stop destination for all government schemes, jobs, and educational opportunities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {schemes.map((blog) => (
            <div
              key={blog.id}
              onClick={() => handleCardClick(blog.id)}
              className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{blog.icon}</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {blog.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {blog.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHome;