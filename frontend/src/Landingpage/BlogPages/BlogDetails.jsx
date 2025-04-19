import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogData = {
    1: {
      title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
      category: "Financial Inclusion",
      description: "National mission for financial inclusion to ensure access to financial services.",
      icon: "💰",
      details: {
        purpose: "To provide affordable access to financial services including banking, credit, insurance, and pension",
        eligibility: "Indian citizens, especially targeting poor and low-income groups",
        benefits: [
          "Zero balance bank account with RuPay debit card",
          "Accident insurance cover of ₹2 lakh",
          "Overdraft facility of ₹10,000 after satisfactory operation",
          "Direct benefit transfer for government schemes"
        ],
        applicationProcess: [
          {
            step: 1,
            title: "Visit Bank or CSC",
            description: "Go to any bank branch or authorized Common Service Center (Bank Mitra outlet)"
          },
          {
            step: 2,
            title: "Complete Application Form",
            description: "Fill the account opening form with personal and KYC details"
          },
          {
            step: 3,
            title: "Submit Documents",
            description: "Provide required documents (Aadhaar is sufficient if address matches)"
          },
          {
            step: 4,
            title: "Account Activation",
            description: "Receive account number and RuPay debit card immediately"
          },
          {
            step: 5,
            title: "First Deposit",
            description: "Make initial deposit (if required by bank) to activate all features"
          }
        ],
        documentsRequired: [
          "Aadhaar Card (mandatory)",
          "Voter ID/Driving License/PAN Card/Passport (if Aadhaar unavailable)",
          "Recent passport size photograph"
        ],
        officialLink: "https://pmjdy.gov.in",
        contact: "1800 11 0001 (Toll Free)",
        launchDate: "28 August 2014"
      }
    },
    2: {
      title: "Ayushman Bharat PM-JAY",
      category: "Healthcare",
      description: "World's largest health insurance scheme providing coverage up to ₹5 lakh per family per year.",
      icon: "🏥",
      details: {
        purpose: "To provide health protection to poor and vulnerable families against catastrophic health expenditures",
        eligibility: "Families identified as deprived rural households and occupational categories of urban workers' families",
        benefits: [
          "Cashless hospitalization coverage of ₹5 lakh per family per year",
          "Covers 1,393 medical packages including surgeries and treatments",
          "No restrictions on family size, age or gender",
          "Covers pre-existing conditions from day one"
        ],
        applicationProcess: [
          {
            step: 1,
            title: "Check Eligibility",
            description: "Verify eligibility on official website or at Common Service Centers"
          },
          {
            step: 2,
            title: "Locate Empanelled Hospital",
            description: "Find nearest PM-JAY empanelled hospital using website or helpline"
          },
          {
            step: 3,
            title: "Visit Hospital with Documents",
            description: "Carry Aadhaar card and ration card (if available) to the hospital"
          },
          {
            step: 4,
            title: "Undergo Treatment",
            description: "Receive cashless treatment after verification of eligibility"
          },
          {
            step: 5,
            title: "No Formal Enrollment",
            description: "No separate enrollment needed - benefits available based on SECC data"
          }
        ],
        documentsRequired: [
          "Aadhaar Card (for identification)",
          "Ration Card (if available for address proof)",
          "Contact number linked with Aadhaar"
        ],
        officialLink: "https://pmjay.gov.in",
        contact: "14555 (Toll Free)",
        launchDate: "23 September 2018"
      }
    },
    3: {
      title: "PM Kisan Samman Nidhi",
      category: "Agriculture",
      description: "Central sector scheme to provide income support to all landholding farmers' families.",
      icon: "👨‍🌾",
      details: {
        purpose: "To supplement financial needs of farmers for procuring inputs and domestic needs",
        eligibility: "Small and marginal landholder farmer families (cultivable land up to 2 hectares)",
        benefits: [
          "₹6,000 per year in three equal installments",
          "Direct benefit transfer to registered bank accounts",
          "No intermediaries - money credited directly to beneficiaries"
        ],
        applicationProcess: [
          {
            step: 1,
            title: "Visit CSC or Agriculture Office",
            description: "Go to nearest Common Service Center or Agriculture Department office"
          },
          {
            step: 2,
            title: "Fill Application Form",
            description: "Complete PM-KISAN form with Aadhaar, bank and land details"
          },
          {
            step: 3,
            title: "Submit Documents",
            description: "Provide land ownership documents and bank account details"
          },
          {
            step: 4,
            title: "Verification",
            description: "State government verifies land records and eligibility"
          },
          {
            step: 5,
            title: "Approval and Payment",
            description: "After approval, installments credited directly to bank account"
          }
        ],
        documentsRequired: [
          "Aadhaar Card (mandatory)",
          "Land ownership documents (Khatauni, Khasra)",
          "Bank account details (IFSC code required)",
          "Mobile number linked with Aadhaar"
        ],
        officialLink: "https://pmkisan.gov.in",
        contact: "011-23381092",
        launchDate: "1 December 2018"
      }
    }
  };

  const blog = blogData[id];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-6 bg-white shadow-xl rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">❌ Blog Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7" />
          </svg>
          Back to all schemes
        </button>

        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-8">
          <div className="flex items-center space-x-4">
            <span className="text-5xl">{blog.icon}</span>
            <div>
              <div className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full inline-block mb-1">
                {blog.category}
              </div>
              <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
              <p className="text-gray-600 mt-1">{blog.description}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">🎯 Purpose</h2>
              <p className="text-gray-600">{blog.details.purpose}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">🧾 Eligibility</h2>
              <p className="text-gray-600">{blog.details.eligibility}</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">✨ Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {blog.details.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">📝 Application Process</h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-600">
              {blog.details.applicationProcess.map((step, index) => (
                <li key={index}>
                  <p className="font-medium">{step.title}</p>
                  <p className="ml-2 text-sm">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">📌 Documents Required</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {blog.details.documentsRequired.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">🔗 Additional Info</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">🌐 Official Website: </span>
                <a
                  href={blog.details.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {blog.details.officialLink}
                </a>
              </p>
              <p><span className="font-medium">📞 Contact:</span> {blog.details.contact}</p>
              <p><span className="font-medium">📅 Launch Date:</span> {blog.details.launchDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
