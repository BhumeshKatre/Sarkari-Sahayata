import pmkisan from "./assets/SchemeImg/pmKisan-1.png";
import aayushman from "./assets/SchemeImg/aayushman.png";
import ujwala from "./assets/SchemeImg/ujwala.png";

export const schemes = [
  {
    id: 1,
    title: "PM Kisan Samman Nidhi",
    department: "Ministry of Agriculture",
    deadline: "2024-12-31",
    benefits: "₹6,000/year to farmers",
    eligibility: "Small & marginal farmers",
    category: "Agriculture",
    featured: true,
    saved: false,
  },
  {
    id: 2,
    title: "Ayushman Bharat Yojana",
    department: "Ministry of Health",
    deadline: "Ongoing",
    benefits: "Health cover ₹5 lakh/family/year",
    eligibility: "Economically weaker sections",
    category: "Health",
    saved: false,
  },
  {
    id: 3,
    title: "PM Awas Yojana (Urban)",
    department: "Ministry of Housing",
    deadline: "2024-03-31",
    benefits: "Housing subsidy up to ₹2.67 lakh",
    eligibility: "EWS/LIG families",
    category: "Housing",
    saved: true,
  },
  {
    id: 4,
    title: "Ujjwala Yojana 2.0",
    department: "Ministry of Petroleum",
    deadline: "2024-03-31",
    benefits: "Free LPG connections",
    eligibility: "Women from BPL families",
    category: "Women Welfare",
    saved: false,
  },
  {
    id: 5,
    title: "Startup India Seed Fund",
    department: "DPIIT",
    deadline: "2024-06-30",
    benefits: "Up to ₹50 lakh funding",
    eligibility: "Registered startups",
    category: "Entrepreneurship",
    saved: false,
  },
  {
    id: 6,
    title: "PM Matsya Sampada Yojana",
    department: "Ministry of Fisheries",
    deadline: "2024-12-31",
    benefits: "Subsidy for fisheries infrastructure",
    eligibility: "Fishermen & entrepreneurs",
    category: "Fisheries",
    saved: false,
  },
];

export const categories = [
  "All",
  "Agriculture",
  "Health",
  "Housing",
  "Women Welfare",
  "Entrepreneurship",
  "Fisheries",
];

export const schemeNavItems = [
  {
    title: "Current_Schemes",
    link: "/current-schemes",
    icon: "FiHome",
    dropdown: false,
  },
  {
    title: "Central_Government",
    link: "/central",
  },
  {
    title: "State_Government",
    link: "/state-scheme",
  },
  {
    title: "Blog",
    link: "/blogs",
  },
 
];

export const carouselItems = [
  {
    id: 1,
    image: pmkisan,
    alt: "Agriculture Schemes",
    title: "Kisan Samman Nidhi",
    description: "₹6,000/year financial support for farmers",
  },
  {
    id: 2,
    image: aayushman,
    alt: "Health Schemes",
    title: "Ayushman Bharat",
    description: "Health coverage up to ₹5 lakh per family",
  },
  {
    id: 3,
    image: "/images/schemes/housing-schemes.jpg",
    alt: "Housing Schemes",
    title: "PM Awas Yojana",
    description: "Affordable housing for urban and rural poor",
  },
  {
    id: 4,
    image: "/images/schemes/education-schemes.jpg",
    alt: "Education Schemes",
    title: "Scholarship Programs",
    description: "Financial aid for students from all categories",
  },
  {
    id: 5,
    image: ujwala,
    alt: "Women Empowerment",
    title: "Ujjwala Yojana",
    description: "Free LPG connections for women",
  },
];

export const blogNavItems = [
  {
    title: "Home",
    link: "/blogs",
  },
  {
    title: "Jobs_Blogs",
    link: "/Jobs-Blogs",
  },
  {
    title: "Scheme_Blogs ",
    link: "/Scheme-Blogs",
  },
  {
    title: "About us", 
    link: "/about",
  },

];
