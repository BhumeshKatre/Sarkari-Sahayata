import heroImg from "./assets/main_page/hero.png";
import heroImg1 from "./assets/main_page/hero-1.png";
import heroImg2 from "./assets/main_page/hero-2.png";
import heroImg3 from "./assets/main_page/hero-3.png";
import heroImg4 from "./assets/main_page/hero-4.png";
import pmkisan from "./assets/SchemeImg/pmkisan.png";
import aayushman from "./assets/SchemeImg/aayushman.png";
import ujwala from "./assets/SchemeImg/ujwala.png";



export const menuItem = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: "home",
  },
  {
    id: 2,
    title: "Jobs",
    link: "/latest-jobs",
    icon: "briefcase",
  },
  {
    id: 3,
    title: "Schemes",
    link: "/Schemes",
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
  }
]


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