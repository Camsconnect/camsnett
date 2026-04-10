"use client";

import React from "react";
import { Link } from "react-router-dom";

const services = [
  { name: "Social Media Management", link: "/services/social-media-management" },
  { name: "YouTube SEO & Growth", link: "/services/youtube-seo" },
  { name: "Web Design", link: "/services/web-design" },
  { name: "Branding & Graphic Design", link: "/services/branding-and-graphic-design" },
  { name: "Business App Development", link: "/services/business-app-development" },
  { name: "Videography", link: "/services/videography" },
  { name: "3D Modeling & Animation", link: "/services/3d-modeling" },
  { name: "n8n Automation", link: "/services/n8n-automation" },
  { name: "Architectural Visualization", link: "/services/architectural-visualization" },
];

const ServiceScroller = () => {
  // The list is duplicated to create a seamless loop
  const extendedServices = [...services, ...services];

  return (
    <div className="w-full py-4 overflow-hidden bg-white border-b border-gray-200">
      <div className="flex animate-infinite-scroll items-center">
        {extendedServices.map((service, index) => (
          <div key={index} className="flex items-center">
            <Link
              to={service.link}
              className="text-gray-500 hover:text-brand-orange font-sans font-medium transition-colors duration-300 px-8 text-sm uppercase tracking-wider whitespace-nowrap"
            >
              {service.name}
            </Link>
            <span className="text-gray-300">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceScroller;