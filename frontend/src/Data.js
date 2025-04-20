import heroImg from "./assets/main_page/hero.png";
import heroImg1 from "./assets/main_page/hero-1.png";
import heroImg2 from "./assets/main_page/hero-2.png";
import heroImg3 from "./assets/main_page/hero-3.png";
import heroImg4 from "./assets/main_page/hero-4.png";
import pmkisan from "./assets/SchemeImg/pmkisan.png";
import aayushman from "./assets/SchemeImg/aayushman.png";
import ujwala from "./assets/SchemeImg/ujwala.png";



export const mainPageMenuItem = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: "home",
  },
  {
    id: 2,
    title: "Jobs",
    link: "/current-jobs",
    icon: "briefcase",
  },
  {
    id: 3,
    title: "Schemes",
    link: "/current-schemes",
    icon: "building",
  },
  {
    id: 4,
    title: "Blogs",
    link: "/blogs",
    icon: "users",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact-us",
    icon: "envelope",
  },
  {
    id: 6,
    title: "About Us",
    link: "/about",
    icon: "envelope",
  }
]

// src/data/jobPageMenuItem.js
export const jobPageMenuItem = [
  {
    id: 1,
    title: "Current_Jobs",
    link: "/current-jobs",
    icon: "clock",
  },
  {
    id: 5,
    title: "Government Job",
    link: "/govt-jobs",
    icon: "university",
  },
  {
    id: 6,
    title: "Railway Jobs",
    link: "/railway-jobs",
    icon: "train",
  },
  {
    id: 7,
    title: "Bank Jobs",
    link: "/bank-jobs",
    icon: "university",
  },
 
];


export const latestJobs = [
  {
    id: 1,
    title: "SSC CHSL Recruitment 2025",
    department: "Staff Selection Commission",
    location: "India (All Zones)",
    lastDate: "May 15, 2025",
    link: "https://ssc.nic.in",
  },
  {
    id: 2,
    title: "Indian Railways Apprentice",
    department: "Indian Railways",
    location: "Mumbai Division",
    lastDate: "April 30, 2025",
    link: "https://rrb.gov.in",
  },
  {
    id: 3,
    title: "MPSC Group C Prelims",
    department: "Maharashtra Public Service Commission",
    location: "Maharashtra",
    lastDate: "May 10, 2025",
    link: "https://mpsc.gov.in",
  },
  {
    id: 3,
    title: "MPSC Group C Prelims",
    department: "Maharashtra Public Service Commission",
    location: "Maharashtra",
    lastDate: "May 10, 2025",
    link: "https://mpsc.gov.in",
  },
];

export const coaroselImages = [
  {
    id: 1,
    src: heroImg,
    altText: "Image 1",
  },
  {
    id: 2,
    src: heroImg1,
    altText: "Image 2",
  },
  {
    id: 3,
    src: heroImg2,
    altText: "Image 3",
  },
  {
    id: 4,
    src: heroImg3,
    altText: "Image 4",
  },
  {
    id: 5,
    src: heroImg4,
    altText: "Image 5",
  },
];

export const  popularSchemes = [
  {
    id: 1,
    src:pmkisan,
    name: "PM Kisan Samman Nidhi",
    description: "₹6,000/year financial support to small farmers.",
    eligibility: "Small & marginal farmers",
    link: "/pm-kisan",
    icon: "👨‍🌾",
  },
  {
    id: 2,
    src: aayushman,
    name: "Ayushman Bharat Yojana",
    description: "Health insurance cover of ₹5 lakh/year per family.",
    eligibility: "Economically weaker sections",
    link: "/ayushman-bharat",
    icon: "🏥",
  },
  {
    id: 3,
    src: ujwala,
    name: "Ujjwala Yojana",
    description: "Free LPG connections to women below poverty line.",
    eligibility: "BPL households (women)",
    link: "/ujjwala",
    icon: "🔥",
  },
  {
    id: 4,
    src: pmkisan,
    name: "PM Awas Yojana",
    description: "Housing for all by 2024 (urban & rural).",
    eligibility: "EWS/LIG/MIG families",
    link: "/pm-awas",
    icon: "🏠",
  },
  {
    id: 5,
    src: pmkisan,
    name: "Sukanya Samriddhi Yojana",
    description: "Savings scheme for girl child (7.6% interest).",
    eligibility: "Parents of girls below 10 years",
    link: "/sukanya",
    icon: "👧",
  },
  {
    id: 6,
    src: pmkisan,
    name: "PM Mudra Yojana",
    description: "Loans up to ₹10 lakh for small businesses.",
    eligibility: "Micro/small entrepreneurs",
    link: "/mudra",
    icon: "💼",
  },
];

// src/data/bankJobs.js
export const bankJobs = [
  {
    id: 1,
    src:heroImg,
    title: "IBPS Clerk Recruitment 2025",
    organization: "Institute of Banking Personnel Selection (IBPS)",
    location: "All India",
    lastDate: "May 10, 2025",
    vacancies: 3000,
    eligibility: "Graduate",
  },
  {
    id: 2,
    title: "SBI PO Recruitment 2025",
    organization: "State Bank of India (SBI)",
    location: "Across India",
    lastDate: "May 18, 2025",
    vacancies: 2000,
    eligibility: "Graduate",
  },
  {
    id: 3,
    title: "RBI Grade B Officer 2025",
    organization: "Reserve Bank of India (RBI)",
    location: "Major Cities",
    lastDate: "June 01, 2025",
    vacancies: 500,
    eligibility: "Graduate / Postgraduate",
  },
  {
    id: 4,
    title: "NABARD Development Assistant 2025",
    organization: "National Bank for Agriculture and Rural Development",
    location: "India",
    lastDate: "May 28, 2025",
    vacancies: 200,
    eligibility: "Graduate in any discipline",
  },
  {
    id: 5,
    title: "Canara Bank Specialist Officer",
    organization: "Canara Bank",
    location: "PAN India",
    lastDate: "May 22, 2025",
    vacancies: 400,
    eligibility: "Engineering / MBA / CA depending on role",
  },
];

// src/data/railwayJobs.js
export const railwayJobs = [
  {
    id: 1,
    title: "RRB Group D Recruitment 2025",
    organization: "Railway Recruitment Board (RRB)",
    location: "All Zones",
    lastDate: "May 20, 2025",
    vacancies: 15000,
    eligibility: "10th Pass / ITI",
  },
  {
    id: 2,
    title: "RRB NTPC 2025 Notification",
    organization: "Railway Recruitment Board",
    location: "Pan India",
    lastDate: "June 05, 2025",
    vacancies: 25000,
    eligibility: "12th Pass / Graduate",
  },
  {
    id: 3,
    title: "Railway Apprentice Recruitment 2025",
    organization: "Indian Railways",
    location: "Various Zones",
    lastDate: "May 30, 2025",
    vacancies: 5000,
    eligibility: "10th Pass + ITI",
  },
  {
    id: 4,
    title: "Railway ALP Recruitment 2025",
    organization: "RRB (Assistant Loco Pilot)",
    location: "Zonal",
    lastDate: "June 15, 2025",
    vacancies: 10000,
    eligibility: "10th + ITI / Diploma",
  },
  {
    id: 5,
    title: "Railway JE Recruitment 2025",
    organization: "RRB (Junior Engineer)",
    location: "Across India",
    lastDate: "June 10, 2025",
    vacancies: 3000,
    eligibility: "Diploma / B.E. / B.Tech",
  },
];

export const currentbankJobs = [
  {
    exam: "IBPS PO 2024",
    date: "October 15, 2024",
    deadline: "August 30, 2024",
    eligibility: "Graduation in any discipline"
  },
  {
    exam: "SBI Clerk 2024",
    date: "November 5, 2024",
    deadline: "September 20, 2024",
    eligibility: "Graduation with 60% marks"
  },
  {
    exam: "RBI Grade B 2024",
    date: "December 10, 2024",
    deadline: "October 25, 2024",
    eligibility: "Graduation with 55% marks"
  }
]

export const whyChooseRailwayJob = [
  { icon: "🚂", title: "Job Security", desc: "Government sector stability with excellent benefits" },
  { icon: "📈", title: "Career Growth", desc: "Clear promotion paths and professional development" },
  { icon: "💰", title: "Great Benefits", desc: "Pension, healthcare, and travel allowances" },
]

export const whyChooseBankJob = [
  { icon: "🏦", title: "Stable Career", desc: "Secure employment with regular promotions" },
  { icon: "📊", title: "Growth Potential", desc: "Clear career progression paths" },
  { icon: "💰", title: "Attractive Benefits", desc: "Competitive salaries, bonuses, and perks" },
]

export const bankingJobFeatured = [
  {
    title: "Relationship Manager",
    bank: "HDFC Bank",
    type: "Full-time",
    location: "Mumbai",
    salary: "₹55,000 - ₹75,000/month",
    experience: "3+ years experience",
    urgent: true
  },
  {
    title: "Probationary Officer",
    bank: "State Bank of India",
    type: "Full-time",
    location: "Multiple Locations",
    salary: "₹45,000 - ₹60,000/month",
    experience: "Fresh Graduates",
    urgent: false
  },
  {
    title: "Credit Analyst",
    bank: "ICICI Bank",
    type: "Full-time",
    location: "Bangalore",
    salary: "₹65,000 - ₹85,000/month",
    experience: "2+ years experience",
    urgent: true
  }
]

export const bankingJobCategory = [
  { title: "Banking Jobs", count: 1200 },
  { title: "Finance Jobs", count: 800 },
  { title: "Insurance Jobs", count: 600 },
  { title: "Investment Banking", count: 400 },
]


export const govtLatestNotification = [
  {
    title: "UPSC Civil Services 2024",
    department: "Union Public Service Commission",
    lastDate: "21 March 2024",
    vacancies: "1204",
    qualification: "Bachelor's Degree"
  },
  {
    title: "SSC CGL 2024",
    department: "Staff Selection Commission",
    lastDate: "30 April 2024",
    vacancies: "7500+",
    qualification: "Graduation"
  },
  {
    title: "Indian Army Technical Entry",
    department: "Ministry of Defense",
    lastDate: "15 May 2024",
    vacancies: "90",
    qualification: "12th with PCM"
  },
  {
    title: "Railway Group D Recruitment",
    department: "Indian Railways",
    lastDate: "10 April 2024",
    vacancies: "1,03,769",
    qualification: "10th Pass"
  },
  {
    title: "AIIMS Nursing Officer",
    department: "Ministry of Health",
    lastDate: "5 May 2024",
    vacancies: "1900",
    qualification: "B.Sc Nursing"
  },
  {
    title: "State PSC Lecturer",
    department: "State Public Service Commission",
    lastDate: "Varies by State",
    vacancies: "Multiple",
    qualification: "Post Graduation"
  }
]

export const govtQuickLinks = [
  { name: "UPSC", icon: "📚" },
  { name: "SSC", icon: "📝" },
  { name: "Banking", icon: "🏦" },
  { name: "Railway", icon: "🚂" },
  { name: "Defense", icon: "🪖" },
  { name: "Teaching", icon: "👩‍🏫" },
]

export const govtJobBenifit = [
  { icon: "🛡️", title: "Job Security", desc: "Permanent employment with no layoffs" },
  { icon: "💰", title: "Pension Benefits", desc: "Post-retirement financial security" },
  { icon: "⚕️", title: "Health Care", desc: "Comprehensive medical coverage" },
  { icon: "🏠", title: "Housing", desc: "Subsidized accommodation options" },
  { icon: "🎓", title: "Education", desc: "Children education allowances" },
  { icon: "✈️", title: "Travel", desc: "Leave travel concessions" },
  { icon: "⏰", title: "Work Hours", desc: "Fixed working hours with overtime" },
  { icon: "📈", title: "Promotions", desc: "Time-bound career progression" },
]