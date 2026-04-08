"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import socialMediaImage from "@/assets/social-media-service.jpeg";
import webDesignImage from "@/assets/web-design-service.jpeg";
import brandingGraphicsImage from "@/assets/branding-graphics-service.png";
import businessAppImage from "@/assets/business-app-service.jpeg";
import videographyImage from "@/assets/videography-service.jpeg";
import threeDModelingImage from "@/assets/3d-modeling-service.jpeg";

const services = [
  {
    title: "Social Media Management",
    price: "From $100 per month",
    duration: "Weekly reports",
    description:
      "We help businesses grow and stand out online through strategic content, consistent branding, and performance-driven marketing.",
    image: socialMediaImage,
    link: "/services/social-media-management",
  },
  {
    title: "YouTube SEO & Growth",
    price: "From $150",
    duration: "3 days delivery",
    description:
      "Optimize your channel for maximum reach with our tailored packages, from foundational setup to aggressive growth strategies.",
    image: videographyImage,
    link: "/services/youtube-seo",
  },
  {
    title: "Web Design & AI Solutions",
    price: "From $120",
    duration: "3 days delivery",
    description:
      "Modern websites that capture your brand. From stunning starter sites to advanced AI-powered platforms that automate your business.",
    image: webDesignImage,
    link: "/services/web-design",
  },
  {
    title: "Branding & Graphic Design",
    price: "From $150",
    duration: "Printing and delivery",
    description:
      "Crafting unique brand identities and stunning visuals that tell your story, from logos to complete brand guidelines.",
    image: brandingGraphicsImage,
    link: "/services/branding-and-graphic-design",
  },
  {
    title: "Business App Development",
    price: "From $300",
    duration: "3 weeks",
    description:
      "Custom applications to streamline your operations, enhance customer engagement, and drive business growth.",
    image: businessAppImage,
    link: "/services/business-app-development",
  },
  {
    title: "Videography",
    price: "From $300",
    duration: "1 week",
    description:
      "Professional video production to showcase your brand, products, or services. From concept to final cut, we create compelling visual stories.",
    image: videographyImage,
    link: "/services/videography",
  },
  {
    title: "3D Modeling & Animation",
    price: "From $1500",
    duration: "2-4 weeks",
    description:
      "Bring your ideas to life with stunning 3D models and animations. Perfect for product visualization, architectural walkthroughs, and more.",
    image: threeDModelingImage,
    link: "/services/3d-modeling",
  },
  {
    title: "n8n Automation",
    price: "From $200",
    duration: "1 week delivery",
    description:
      "Automate your business processes with powerful workflow automation. Connect tools and integrate AI for smarter operations.",
    image: businessAppImage, // Reusing related image
    link: "/services/n8n-automation",
  },
  {
    title: "Architectural Visualization",
    price: "From $800",
    duration: "1-2 weeks",
    description:
      "Transform architectural concepts into stunning visual experiences with photorealistic renders and VR walkthroughs.",
    image: threeDModelingImage, // Reusing related image
    link: "/services/architectural-visualization",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4 tracking-tight">Our Expertise</h2>
          <p className="text-lg text-gray-600 font-sans">
            Comprehensive digital solutions tailored to elevate your business in the modern landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden flex flex-col h-full border border-gray-200 transition-all duration-300 hover:border-brand-orange/50 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
            >
              <div className="relative overflow-hidden h-56 border-b border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                   <div className="flex items-center gap-2 text-xs font-sans font-medium bg-white text-gray-900 px-3 py-1 rounded-md shadow-sm">
                      {service.price}
                   </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                <div className="flex items-center text-xs text-brand-orange mb-4 font-sans font-medium uppercase tracking-wider">
                  <span>{service.duration}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-6 font-sans">
                  {service.description}
                </p>
                
                <Button
                  asChild={!!service.link}
                  variant="ghost"
                  className="mt-auto w-full justify-between group/btn hover:bg-brand-orange/5 hover:text-brand-orange text-gray-900 font-sans font-medium rounded-md px-4"
                >
                  {service.link ? (
                    <Link to={service.link}>
                      Learn More <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  ) : (
                    <span>Learn More</span>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;