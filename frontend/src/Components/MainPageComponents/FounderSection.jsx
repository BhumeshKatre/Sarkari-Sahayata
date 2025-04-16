import React from "react";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa"; // For social icons
import bhumesh from "../../assets/bhumesh.png"; // Replace with actual image path
const FounderSection = () => {
  const founder = {
    name: "Mr. Bhumesh Katre",
    role: "Founder & CEO",
    bio: "Former IAS officer with 15+ years of experience in public service, dedicated to bridging the gap between citizens and government schemes.",
    mission: "To empower every Indian with easy access to their entitled benefits.",
    image: bhumesh, // Replace with actual path
    social: {
      linkedin: "https://linkedin.com/example",
      twitter: "https://twitter.com/example",
      website: "https://sarkarisahayata.in",
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Visionary Leader
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
          {/* Founder Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Founder Details */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
            <p className="text-blue-600 mb-4">{founder.role}</p>
            <p className="text-gray-600 mb-6">{founder.bio}</p>
            <blockquote className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
              <p className="italic text-gray-700">"{founder.mission}"</p>
            </blockquote>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href={founder.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href={founder.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-700 text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href={founder.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 text-xl"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
        </div>

        {/* Optional: Team Members (if applicable) */}
        {/* <TeamCarousel /> */}
      </div>
    </section>
  );
};

export default FounderSection;