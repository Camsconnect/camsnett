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
    title: "Social Media Management",
    description: "Growing your audience and building a strong community around your brand with strategic social media management.",
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
            <p className="text-base opacity-80 font-thin leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;