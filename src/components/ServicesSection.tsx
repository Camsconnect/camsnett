"use client";

import React from "react";
import { Link } from "react-router-dom";
import socialMediaImage from "@/assets/social-media-service.jpeg";
import webDesignImage from "@/assets/web-design-service.jpeg";
import brandingGraphicsImage from "@/assets/branding-graphics-service.png";
import businessAppImage from "@/assets/business-app-service.jpeg";
import videographyImage from "@/assets/videography-service.jpeg";
import threeDModelingImage from "@/assets/3d-modeling-service.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    price: "From $197",
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
];

const ServicesSection = () => {
  return (
    <section className="w-full text-foreground relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-neon/5 blur-[100px] -z-10 rounded-full" />
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-gradient">Our Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to elevate your brand in the modern age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden h-56">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                 <div className="flex items-center gap-2 text-xs font-medium bg-brand-neon/90 text-white px-3 py-1 rounded-full backdrop-blur-md w-fit mb-2">
                    {service.price}
                 </div>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-neon transition-colors">{service.title}</h3>
              <div className="flex items-center text-xs text-muted-foreground mb-4 font-mono">
                <span className="uppercase tracking-wider">{service.duration}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed flex-grow mb-6">
                {service.description}
              </p>
              
              <Button
                asChild={!!service.link}
                variant="ghost"
                className="mt-auto w-full justify-between group/btn hover:bg-brand-neon/10 hover:text-brand-neon"
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
    </section>
  );
};

export default ServicesSection;