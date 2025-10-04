"use client";

import React from "react";
import { Code, Search, Users, Palette, Film, Megaphone } from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-lime-neon mb-4" />,
    title: "Web Design & Development",
    description: "Crafting beautiful, responsive, and high-performing websites tailored to your brand's unique identity.",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-lime-neon mb-4" />,
    title: "App Development",
    description: "Building intuitive and powerful mobile applications for both iOS and Android to engage your users on the go.",
  },
  {
    icon: <Search className="h-10 w-10 text-lime-neon mb-4" />,
    title: "SEO & Digital Marketing",
    description: "Boosting your online visibility and driving organic traffic with proven SEO strategies and targeted marketing campaigns.",
  },
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
  {
    icon: <Palette className="h-10 w-10 text-lime-neon mb-4" />,
    title: "Branding & Graphic Design",
    description: "Creating a memorable brand identity with stunning visuals, logos, and marketing materials that tell your story.",
  },
  {
    icon: <Film className="h-10 w-10 text-lime-neon mb-4" />,
    title: "Content Creation",
    description: "Engaging your audience with high-quality content, from compelling blog posts to captivating videos and photography.",
  },
];

const ServicesSection = () => {
  return (
    <div className="relative z-10 w-full rounded-xl bg-menubar/10 p-8 text-white shadow-outer-glass backdrop-blur-3xl border border-menubar-border/15 shadow-inner-glass-bottom shadow-inner-glass-stroke supports-[backdrop-filter]:bg-menubar/10">
      <h2 className="text-4xl font-thin mb-12 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 rounded-lg bg-black/20 border border-white/10 transition-all duration-300 hover:border-lime-neon/50 hover:bg-black/40"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            {typeof service.description === 'string' ? (
              <p className="text-base opacity-80 font-thin leading-relaxed">
                {service.description}
              </p>
            ) : (
              service.description
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;