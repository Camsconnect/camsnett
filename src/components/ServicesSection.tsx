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
    features: [
      "Professional Graphics Design – Eye-catching visuals that reflect your brand.",
      "Social Media Management – Consistent posting schedules tailored for growth.",
      "Branding & Strategy – Building a strong, recognizable presence.",
      "Consultancy – Expert guidance to sharpen your online voice.",
      "Targeted Ads – Smart campaigns designed to maximize ROI and outperform competitors.",
    ],
  },
  {
    title: "Web Design & Development",
    description:
      "Modern, responsive websites that capture your brand and convert visitors into customers.",
    image: socialMediaImage,
  },
  {
    title: "Branding & Graphic Design",
    description:
      "Crafting unique brand identities and stunning visuals that tell your story.",
    image: socialMediaImage,
  },
  {
    title: "Business App Development",
    description:
      "Custom applications to streamline your operations and enhance customer engagement.",
    image: socialMediaImage,
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full text-foreground">
      <h2 className="text-4xl font-light text-center mb-12">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative z-10 w-full rounded-xl bg-card text-left border shadow-sm flex flex-col overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <div className="flex-grow">
                <p className="text-base opacity-80 font-light leading-relaxed">
                  {service.description}
                </p>
                {service.features && (
                  <div className="mt-4">
                    <p className="text-base opacity-90 font-normal mb-2">
                      Our service includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base opacity-80 font-light leading-relaxed">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <Button
                variant="outline"
                className="bg-transparent border-brand-400 text-brand-400 hover:bg-brand-400 hover:text-primary-foreground rounded-full px-6 py-2 transition-colors duration-300 mt-6"
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