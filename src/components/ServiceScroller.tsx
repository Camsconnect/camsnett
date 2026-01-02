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
    <div className="w-full py-3 overflow-hidden bg-background border-y">
      <div className="flex animate-infinite-scroll">
        {extendedServices.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 px-6 text-sm whitespace-nowrap"
          >
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceScroller;