"use client";

import React from "react";
import { Users } from "lucide-react";
import socialMediaImage from "@/assets/social-media-service.jpeg";

const services = [
  {
    icon: <Users className="h-10 w-10 text-lime-neon mb-4" />,
    title: "Social Media Growth, Management & Marketing",
    description: (
      <div className="space-y-4 text-base opacity-80 font-thin leading-relaxed">
        <p>
          We help businesses grow and stand out online through strategic content, consistent branding, and performance-driven marketing.
        </p>
        <p>Our service includes:</p>
        <ul className="list-none space-y-2">
          <li>🎨 Professional Graphics Design – Eye-catching visuals that reflect your brand.</li>
          <li>📅 Social Media Management – Consistent posting schedules tailored for growth.</li>
          <li>🧠 Branding & Strategy – Building a strong, recognizable presence.</li>
          <li>📝 Consultancy – Expert guidance to sharpen your online voice.</li>
          <li>📢 Targeted Ads – Smart campaigns designed to maximize ROI and outperform competitors.</li>
        </ul>
        <p>
          When you come to us, we don’t just execute — we listen, analyze your current position, and craft strategies that go beyond your expectations. Our priority is to connect your brand with its audience, build lasting relationships, and turn engagement into real leads and sales.
        </p>
      </div>
    ),
  },
];

const ServicesSection = () => {
  return (
    <div className="relative z-10 w-full rounded-xl bg-menubar/10 p-8 text-white shadow-outer-glass backdrop-blur-3xl border border-menubar-border/15 shadow-inner-glass-bottom shadow-inner-glass-stroke supports-[backdrop-filter]:bg-menubar/10">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={socialMediaImage}
              alt="Business owner welcoming a customer to their shop"
              className="rounded-lg object-cover w-full h-full shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-start">
              {service.icon}
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              {service.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;