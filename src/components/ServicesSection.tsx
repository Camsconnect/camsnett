"use client";

import React from "react";
import socialMediaImage from "@/assets/social-media-service.jpeg";
import webDesignImage from "@/assets/web-design-service.jpeg";
import brandingGraphicsImage from "@/assets/branding-graphics-service.png";
import businessAppImage from "@/assets/business-app-service.jpeg";
import videographyImage from "@/assets/videography-service.jpeg";
import threeDModelingImage from "@/assets/3d-modeling-service.jpeg";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Social Media Management",
    price: "From $60 per month",
    duration: "Weekly reports",
    description:
      "We help businesses grow and stand out online through strategic content, consistent branding, and performance-driven marketing.",
    image: socialMediaImage,
  },
  {
    title: "Web Design (up to 6 pages)",
    price: "From $80",
    duration: "3 days delivery",
    description:
      "Modern, responsive websites that capture your brand and convert visitors into customers. Fully optimized for performance and SEO.",
    image: webDesignImage,
  },
  {
    title: "Branding & Graphic Design",
    price: "From $950",
    duration: "Printing and delivery",
    description:
      "Crafting unique brand identities and stunning visuals that tell your story, from logos to complete brand guidelines.",
    image: brandingGraphicsImage,
  },
  {
    title: "Business App Development",
    price: "From $300",
    duration: "3 weeks",
    description:
      "Custom applications to streamline your operations, enhance customer engagement, and drive business growth.",
    image: businessAppImage,
  },
  {
    title: "Videography",
    price: "From $300",
    duration: "1 week",
    description:
      "Professional video production to showcase your brand, products, or services. From concept to final cut, we create compelling visual stories.",
    image: videographyImage,
  },
  {
    title: "3D Modeling & Animation",
    price: "From $1500",
    duration: "2-4 weeks",
    description:
      "Bring your ideas to life with stunning 3D models and animations. Perfect for product visualization, architectural walkthroughs, and more.",
    image: threeDModelingImage,
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full text-foreground">
      <h2 className="text-4xl font-light text-center mb-12">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="group text-left flex flex-col">
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <span>{service.price}</span>
                <span className="mx-2">|</span>
                <span>{service.duration}</span>
              </div>
              <p className="text-base text-muted-foreground font-light leading-relaxed flex-grow mb-4">
                {service.description}
              </p>
              <Button
                variant="outline"
                className="mt-auto w-fit rounded-full px-6"
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