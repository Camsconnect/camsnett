"use client";

import React from "react";
import socialMediaImage from "@/assets/social-media-service.jpeg";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Social Media Growth, Management & Marketing",
    description:
      "We help businesses grow and stand out online through strategic content, consistent branding, and performance-driven marketing.",
    image: socialMediaImage,
  },
  {
    title: "Web Design & Development",
    description:
      "Modern, responsive websites that capture your brand and convert visitors into customers.",
    image: "/placeholder.svg",
  },
  {
    title: "Branding & Graphic Design",
    description:
      "Crafting unique brand identities and stunning visuals that tell your story.",
    image: "/placeholder.svg",
  },
  {
    title: "Business App Development",
    description:
      "Custom applications to streamline your operations and enhance customer engagement.",
    image: "/placeholder.svg",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full text-white">
      <h2 className="text-4xl font-thin text-center mb-12">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative z-10 w-full rounded-xl bg-menubar/10 text-left shadow-outer-glass backdrop-blur-3xl border border-menubar-border/15 shadow-inner-glass-bottom shadow-inner-glass-stroke supports-[backdrop-filter]:bg-menubar/10 flex flex-col overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-base opacity-80 font-thin leading-relaxed flex-grow">
                {service.description}
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-lime-neon text-lime-neon hover:bg-lime-neon hover:text-black rounded-full px-6 py-2 text-base transition-colors duration-300 mt-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;