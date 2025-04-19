import React from "react";
import { blogNavItems } from "../SchemeData";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
      <Navbar menu={blogNavItems} />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              About Sarkari Sahayta
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Empowering citizens with easy access to government schemes and
              services
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To bridge the gap between citizens and government welfare
                  schemes by providing a single platform that simplifies
                  discovery, eligibility checking, and application processes.
                </p>
                <p className="text-lg text-gray-600">
                  We believe every Indian citizen should have equal access to
                  government assistance programs without bureaucratic hurdles.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden h-80 bg-indigo-100">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Government services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Rajesh Kumar",
                  role: "Founder & CEO",
                  bio: "Former civil servant with 15 years of experience in public administration",
                  img: "https://randomuser.me/api/portraits/men/32.jpg",
                },
                {
                  name: "Priya Sharma",
                  role: "CTO",
                  bio: "Technology expert focused on building accessible digital platforms",
                  img: "https://randomuser.me/api/portraits/women/44.jpg",
                },
                {
                  name: "Amit Patel",
                  role: "Policy Researcher",
                  bio: "Specializes in government schemes and eligibility criteria analysis",
                  img: "https://randomuser.me/api/portraits/men/75.jpg",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gray-700 rounded-xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                { value: "50K+", label: "Users Helped" },
                { value: "200+", label: "Schemes Listed" },
                { value: "15+", label: "States Covered" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-5xl font-extrabold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xl text-indigo-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Transparency",
                  icon: "🔍",
                  description:
                    "We provide clear, accurate information about all government schemes without hidden agendas.",
                },
                {
                  title: "Accessibility",
                  icon: "♿",
                  description:
                    "Our platform is designed to be usable by everyone, regardless of technical literacy.",
                },
                {
                  title: "Integrity",
                  icon: "⚖️",
                  description:
                    "We maintain strict neutrality and don't favor any political party or ideology.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're a citizen seeking help or want to contribute to our
              mission, we'd love to hear from you.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
