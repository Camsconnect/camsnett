"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  Cpu, 
  Palette, 
  Code, 
  Smartphone, 
  Globe,
  BarChart,
  Camera
} from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    description: "Define your voice and build a lasting identity.",
    icon: Megaphone,
    price: "From R5,000",
  },
  {
    title: "AI Automation",
    description: "Streamline operations with custom AI solutions.",
    icon: Cpu,
    price: "Custom Quote",
  },
  {
    title: "Graphic Design",
    description: "Visuals that communicate and captivate.",
    icon: Palette,
    price: "From R2,500",
  },
  {
    title: "Web Development",
    description: "High-performance websites built for growth.",
    icon: Code,
    price: "From R8,500",
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications.",
    icon: Smartphone,
    price: "From R15,000",
  },
  {
    title: "SEO & Marketing",
    description: "Get found online and drive qualified traffic.",
    icon: Globe,
    price: "From R3,000/mo",
  },
  {
    title: "Data Analytics",
    description: "Turn data into actionable business insights.",
    icon: BarChart,
    price: "Custom Quote",
  },
  {
    title: "Content Creation",
    description: "Photography and videography for your brand.",
    icon: Camera,
    price: "From R3,500",
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Expertise</h2>
          <p className="text-lg text-gray-600">
            Comprehensive digital solutions tailored to elevate your business in the modern landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-neon transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gray-900" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-500">{service.price}</span>
                <Button variant="link" className="text-brand-neon p-0 h-auto font-bold hover:no-underline">
                  Details
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